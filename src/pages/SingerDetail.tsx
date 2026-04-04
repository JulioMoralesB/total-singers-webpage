import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { teamData } from '../data'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'

const socialIcons: Record<string, { icon: string; label: string }> = {
  instagram: { icon: 'photo_camera', label: 'Instagram' },
  tiktok:    { icon: 'music_video',  label: 'TikTok'    },
  facebook:  { icon: 'groups',       label: 'Facebook'  },
  youtube:   { icon: 'smart_display', label: 'YouTube'  },
}

const colorMap = {
  primary:   'from-primary/30',
  secondary: 'from-secondary/30',
  tertiary:  'from-tertiary/30',
}

const textColorMap = {
  primary:   'text-primary',
  secondary: 'text-secondary',
  tertiary:  'text-tertiary',
}

export const SingerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const member = teamData.find(m => m.id === id)

  if (!member) {
    return (
      <div className="bg-surface min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-headline text-4xl font-black text-on-surface">Miembro no encontrado</h1>
        <Link to="/team"><Button variant="primary">Volver al equipo</Button></Link>
      </div>
    )
  }

  const color = member.color ?? 'primary'

  return (
    <div className="bg-surface min-h-screen">
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className={`absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br ${colorMap[color]} to-transparent blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3`} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors mb-10 text-sm font-medium"
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
            Volver al equipo
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Imagen */}
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-br ${colorMap[color]} to-transparent blur-3xl rounded-full`} aria-hidden="true" />
              <img
                src={member.image}
                alt={member.name}
                className="relative w-full aspect-[3/4] object-cover rounded-2xl"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6 md:pt-4">
              <Badge color={color}>{member.role}</Badge>
              <h1 className="font-headline text-5xl md:text-6xl font-black text-on-surface leading-tight">
                {member.name}
              </h1>

              {member.bio && (
                <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                  {member.bio}
                </p>
              )}

              {member.socialLinks && Object.keys(member.socialLinks).length > 0 && (
                <div className="flex flex-col gap-3 pt-2">
                  <p className="label-uppercase text-on-surface-variant text-xs">Redes sociales</p>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(member.socialLinks).map(([platform, url]) => {
                      const social = socialIcons[platform]
                      if (!social || !url) return null
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`glass-card px-4 py-2 flex items-center gap-2 text-sm font-semibold hover:border-primary/40 transition-colors ${textColorMap[color]}`}
                        >
                          <span className="material-symbols-outlined text-base" aria-hidden="true">{social.icon}</span>
                          {social.label}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingerDetail
