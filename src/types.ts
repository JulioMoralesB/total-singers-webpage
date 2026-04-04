export interface Show {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
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
  soloists?: string[];
}

export interface SocialLinks {
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  youtube?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  instrument?: string;
  bio?: string | null;
  color?: 'primary' | 'secondary' | 'tertiary';
  socialLinks?: SocialLinks;
}
