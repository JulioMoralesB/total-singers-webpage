import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

// ---------------------------------------------------------------------------
// GROQ queries
// The projections map Sanity's raw document shape to the frontend interfaces.
// ---------------------------------------------------------------------------

/**
 * Fetches all team members ordered by creation date.
 * Maps:
 *   _id           → id
 *   slug.current  → slug
 *   image.asset->url → image  (resolved CDN URL)
 *   color.hex     → color     (hex string from @sanity/color-input)
 */
export const TEAM_MEMBERS_QUERY = /* groq */ `
  *[_type == "teamMember"] | order(_createdAt asc) {
    "id": _id,
    "slug": slug.current,
    name,
    role,
    "image": image.asset->url,
    instrument,
    bio,
    "color": color,
    socialLinks
  }
`

/**
 * Fetches all shows ordered by date ascending.
 * Maps:
 *   _id           → id
 *   slug.current  → slug
 *   image.asset->url → image
 *   setlist[]._key → setlist[].id
 */
export const SHOWS_QUERY = /* groq */ `
  *[_type == "show"] | order(date asc) {
    "id": _id,
    "slug": slug.current,
    title,
    description,
    date,
    eventTime,
    doorsOpenTime,
    estimatedDurationMinutes,
    venue,
    location,
    locationUrl,
    "image": image.asset->url,
    setlist[] {
      "id": _key,
      number,
      title,
      artist,
      duration,
      "soloists": soloistRefs[]->{
        name,
        "slug": slug.current
      }
    }
  }
`
