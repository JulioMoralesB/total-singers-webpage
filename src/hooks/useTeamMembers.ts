import { useEffect, useState } from 'react'
import { sanityClient, TEAM_MEMBERS_QUERY } from '../lib/sanity'
import type { TeamMember } from '../types'

interface UseTeamMembersResult {
  data: TeamMember[]
  loading: boolean
  error: Error | null
}

/**
 * Fetches all team members from Sanity CMS.
 *
 * Usage:
 *   const { data, loading, error } = useTeamMembers()
 */
export function useTeamMembers(): UseTeamMembersResult {
  const [data, setData] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    sanityClient
      .fetch<TeamMember[]>(TEAM_MEMBERS_QUERY)
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
