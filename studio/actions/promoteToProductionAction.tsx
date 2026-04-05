import {PublishIcon} from '@sanity/icons'
import {useToast} from '@sanity/ui'
import {
  type SanityClient,
  type DocumentActionComponent,
  type DocumentActionDescription,
  type DocumentActionProps,
} from 'sanity'
import {useMemo, useState} from 'react'

const API_VERSION = '2026-04-04'

type PromoteableDocument = {
  _id: string
  _type: string
  [key: string]: unknown
}

const SYSTEM_FIELDS = new Set(['_createdAt', '_rev', '_updatedAt'])

function toPublishedId(documentId: string) {
  return documentId.replace(/^drafts\./, '')
}

function stripSystemFields(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(stripSystemFields)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => !SYSTEM_FIELDS.has(key))
        .map(([key, nestedValue]) => [key, stripSystemFields(nestedValue)]),
    )
  }

  return value
}

function createProductionDocument(sourceDocument: PromoteableDocument, documentId: string) {
  return {
    ...(stripSystemFields(sourceDocument) as PromoteableDocument),
    _id: toPublishedId(documentId),
  }
}

export function createPromoteToProductionAction(
  productionClient: SanityClient,
): DocumentActionComponent {
  function PromoteToProductionAction(props: DocumentActionProps) {
    const {draft, published, id, onComplete} = props
    const toast = useToast()
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [isRunning, setIsRunning] = useState(false)

    const sourceDocument = useMemo(() => {
      const documentValue = draft ?? published
      return documentValue ? (documentValue as PromoteableDocument) : null
    }, [draft, published])

    const handlePromote = async () => {
      if (!sourceDocument) {
        return
      }

      setIsRunning(true)

      try {
        await productionClient.createOrReplace(createProductionDocument(sourceDocument, id))

        toast.push({
          closable: true,
          status: 'success',
          title: 'Documento promovido a production',
        })

        setIsConfirmOpen(false)
        onComplete()
      } catch (error) {
        const description = error instanceof Error ? error.message : 'Error desconocido'

        toast.push({
          closable: true,
          status: 'error',
          title: 'No se pudo promover el documento',
          description,
        })
      } finally {
        setIsRunning(false)
      }
    }

    const disabledReason = sourceDocument
      ? undefined
      : 'Guarda primero el documento en staging antes de promoverlo'

    const action: DocumentActionDescription = {
      label: isRunning ? 'Promoviendo...' : 'Promover a Production',
      title: disabledReason,
      icon: PublishIcon,
      disabled: isRunning || !sourceDocument,
      onHandle: () => setIsConfirmOpen(true),
      dialog: isConfirmOpen
        ? {
            type: 'confirm',
            message:
              'Esto copiará la versión actual del documento de staging a production y la dejará publicada.',
            onCancel: () => {
              if (!isRunning) {
                setIsConfirmOpen(false)
              }
            },
            onConfirm: handlePromote,
          }
        : undefined,
    }

    return action
  }

  PromoteToProductionAction.displayName = 'PromoteToProductionAction'

  return PromoteToProductionAction
}

export function getProductionClient(baseClient: SanityClient) {
  return baseClient.withConfig({apiVersion: API_VERSION, dataset: 'production'})
}