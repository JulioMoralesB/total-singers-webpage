import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {createPromoteToProductionAction, getProductionClient} from './actions/promoteToProductionAction'
import {schemaTypes} from './schemaTypes'

const projectId = 'v6jkoz1x'
const plugins = [structureTool(), visionTool()]
const schema = {types: schemaTypes}

export default defineConfig([
  {
    name: 'production',
    title: 'Total Singers (Production)',
    basePath: '/production',
    projectId,
    dataset: 'production',
    plugins,
    schema,
  },
  {
    name: 'staging',
    title: 'Total Singers (Staging)',
    basePath: '/staging',
    projectId,
    dataset: 'staging',
    plugins,
    schema,
    document: {
      actions: (prev, context) => {
        if (!['show', 'teamMember'].includes(context.schemaType)) {
          return prev
        }

        const productionClient = getProductionClient(context.getClient({apiVersion: '2026-04-04'}))

        return [createPromoteToProductionAction(productionClient), ...prev]
      },
    },
  },
])
