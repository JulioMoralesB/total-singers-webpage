export interface Show {
  id: string;
  slug: string;
  title: string;
  description?: string;
  date: string;
  eventTime?: string;
  doorsOpenTime?: string;
  estimatedDurationMinutes?: number;
  location: string;
  locationUrl?: string;
  venue: string;
  image: string;
  setlist?: Track[];
}

export interface Track {
  id: string;
  number: number;
  title: string;
  artist: string;
  duration: string;
  soloists?: TrackSoloist[];
}

export interface TrackSoloist {
  name: string;
  slug?: string;
}

export interface SocialLinks {
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  youtube?: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  instrument?: string;
  bio?: string | null;
  color?: string;
  socialLinks?: SocialLinks;
}
