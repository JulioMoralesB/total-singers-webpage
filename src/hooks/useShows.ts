import { useEffect, useState } from 'react'
import { sanityClient, SHOWS_QUERY } from '../lib/sanity'
import type { Show } from '../types'

interface UseShowsResult {
  data: Show[]
  loading: boolean
  error: Error | null
}

/**
 * Fetches all shows from Sanity CMS, ordered by date ascending.
 *
 * Usage:
 *   const { data, loading, error } = useShows()
 */
export function useShows(): UseShowsResult {
  const [data, setData] = useState<Show[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    sanityClient
      .fetch<Show[]>(SHOWS_QUERY)
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading, error }
}
