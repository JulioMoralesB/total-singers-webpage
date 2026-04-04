import type { Show, TeamMember } from '../types'

export const showsData: Show[] = [
  {
    id: '1',
    title: 'Armonías Neon - Concierto Especial',
    date: '2025-09-15',
    location: 'Auditorio Principal',
    venue: 'Centro Cultural',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXzMOrp8_BtnK9klgCz97_7DJWw421kz-U6cXKv1gcSNfS_KkO8HKP33ezkIzpuJCOQUwQeKozZ34if3A-jVqrk3jwt73Y4XJTS9w2xxwIRHocEeq4lwNmGpA0EdZHXPsO7abXlogu--pU3eSbedARblBssBDpWWP0gb-nJYIedoqImCHOW_bf-LIIGvbw96wFykaDFiOpOPtEOUPjLZdjZRxLNiZZ0xHhYgOWbWCApMoDOTOweVcRnEHSsNUH0ddK5N01vyhZNPw',
    setlist: [
      {
        id: '1',
        number: 1,
        title: 'Levitating (Remix de Total Singers)',
        artist: 'Dua Lipa',
        duration: '4:12',
        soloists: ['Maya', 'Diego'],
      },
      {
        id: '2',
        number: 2,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        duration: '3:20',
        soloists: ['Sofía'],
      },
      {
        id: '3',
        number: 3,
        title: 'Anti-Hero',
        artist: 'Taylor Swift',
        duration: '3:21',
        soloists: ['Mariana', 'Laura'],
      },
      {
        id: '4',
        number: 4,
        title: 'Flowers',
        artist: 'Miley Cyrus',
        duration: '3:20',
        soloists: ['Andrea'],
      },
    ],
  },
  {
    id: '2',
    title: 'Voces en Sintonía',
    date: '2025-10-20',
    location: 'Teatro Municipal',
    venue: 'Plaza del Centro',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt_Zgx_EEozl6VS9jM0HkLkjk6IO5c0BR94pyJq9M3pEtWNIcK_uPSNd3yoVPVNw_O4a0GdZ3uOK3n6tuEI-eH2WaTPSfkFauKGRIEag-TX41aTZKW-6z2BtTRydSoZNlUoxF3-zeGqU6FGLIEwWT6RFemowUcMoxEHYwp4BjE8glmT-SHhy40Utm9bWcgEBi7gMYdbbn_Ph-W6lUMnlFHrFOqyDOFTkCGKtBvD1bjlVPVxBdZH_ydRl-883kSH-KKqzNwSC-TTzg',
  },
  {
    id: '3',
    title: 'Pop Sincronizado Tour',
    date: '2025-11-10',
    location: 'Sala de Conciertos',
    venue: 'Distrito Creativo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB00UJJV_DA4VJwo_EL8hp2r0fan6yG0mFA0xPlC3Bwg52N3umwYngjJ2Kspidn9-ZpNlLn9tAP97-aJtemScvaESORmgnrdgTpQ4Xv0I8nkj4lTKTjoIglr-AhRD8xWAFLUErWhEzkOo6pOsjAKX7KEhkttMPw578L2qrzzUh-ALSLliPMXFqBVGaVCeK05mXztZINeLwvdvSj8UqeCXEVS4edslGh2TmSAL5PKA9qwjpVK-1BBsfGjFAam5OvD0EznrDOkM_o9Ng',
  },
];

// Sample team data
export const teamData: TeamMember[] = [
  {
    id: '1',
    name: 'Maya García',
    role: 'Soprano / Solista',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Q9b0JC06w5FrFpIccpRLs3SHjzF3KP2XL7IroitfXOm4qDAVvxMe7Sx17ryyFcOCyT7st1ik4r_cOrqrQFToE96WQ0S_t1pQ95N6rvgwEZcXskFyxeDfEidabCb-Y1zFRu7pZpMkPrVu1W3y_gPwc-JETm3FYVqNqKWQSNOE3lwfjkbimI6nh6kAjNnZX4LHzSq9h7wzhKXGUoWo7MwiisoqE1Ko_IQGfZNtXdqz-cZqjp7jOwwLmYHv89f3KGNAiGHvUZHRuEs',
    instrument: 'Voz',
    bio: null,
    color: 'primary' as const,
  },
  {
    id: '2',
    name: 'Leo Vance',
    role: 'Bajo / Beatbox',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD69g7aTRbRJY0xI8On6DpSN6_oaSHMA4Memz1lQA_4GBotRbv8FsE9SW13slr-706-ocji2q_KqKzdX9JvGHUG3WpkuJFqx8PfIDbmxOwVUJMOlJh7oQZ7MITGQ1S1pyqW3JNV8HOuqb9Njlxu57zLza1Y4070zu1LJHo-Em5dZNqi9s8ooLHkpZqO_lRrXKo14pOQhmdvtZHkfTKCYT960CCNctoKoWBsGQ0ku5zKL8gRwOAQvC6nl36Gv6afLenoOa-gYYL9udU',
    instrument: 'Voz',
    bio: null,
    color: 'secondary' as const,
  },
  {
    id: '3',
    name: 'Chloe Smith',
    role: 'Alto / Arreglista',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxvNbMyVgxXEMRsl21kDN4GW-MSja342L4yYvJAkczHFdHUI1O-v9E5SuTAYzh71kBZiC1LVHxiCZg_UJO0KVfDZQA2Twii4Aeko2RmMTCKuyqgESKpkTBRLBLLtiN2-QsAqOvp1zG8zgUiU-ypvmAO7ZCorALMNbFW8YsSQSmLFAxGQ7jRJ7-sz95cdKRpdcZZBjOIhs33Pm1AbCOHboFnkEeUomdt8RLd6-hlc__oRcDIFULXN9gE4FkE2U2-vkbJOBHCeJCAaI',
    instrument: 'Voz',
    bio: null,
    color: 'tertiary' as const,
  },
  {
    id: '4',
    name: 'Daniel Kim',
    role: 'Tenor / Teclista',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoCCurOR5VaCJcStpd7bDVojXnX3Y6tzKVo47ZRrMaVfqRhbQ27E81v01rWZLOmIBcTk10gcO1EH4nFu8oIhzbzNxkdplPwbEZLO87NKbjlhyDlI-rg0AE15J75olkKAjNyeKC03GhKRnGCSsjeUUKYL9xBlUlhi_eWKRSm3wXgXBNR7N90JPnb2Av6GNef6RaoHkycVnUmGZTNCweWeiTi5k9a3qGzeY94R8ODOPkUM6D1DzetEXPJ0QmgYvXtHkTH1R8yj4_Paw',
    instrument: 'Voz',
    bio: null,
    color: 'primary' as const,
  },
];
