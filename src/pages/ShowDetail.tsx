import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Badge } from '../components/Badge'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useShows } from '../hooks/useShows'
import { formatTime12h } from '../lib/format'
import type { Track } from '../types'

const formatDateFull = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

const formatDateShort = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'short',
  })
}

export const ShowDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data: shows, loading } = useShows()
  const show = shows.find((s) => s.slug === slug)
  const eventTimeLabel = show?.eventTime ? formatTime12h(show.eventTime) : formatTime12h('20:00')
  const doorsOpenLabel = show?.doorsOpenTime
    ? ` — Puertas abren a las ${formatTime12h(show.doorsOpenTime)}`
    : ` — Puertas abren a las ${formatTime12h('19:00')}`

  if (loading) {
    return (
      <div className="bg-surface min-h-screen flex items-center justify-center">
        <p className="text-on-surface-variant">Cargando…</p>
      </div>
    )
  }

  if (!show) {
    return <Navigate to="/shows" replace />
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10" />
          <img
            alt={show.title}
            className="w-full h-full object-cover opacity-40"
            src={show.image}
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-8">
          <Link
            to="/shows"
            className="flex w-fit items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 label-uppercase"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
            Todos los Recitales
          </Link>
          <Badge color="primary" className="mb-4">{formatDateShort(show.date)}</Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-on-surface mt-4 mb-6">
            {show.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">stadium</span>
              <span className="font-medium">{show.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" aria-hidden="true">place</span>
              {show.locationUrl ? (
                <a
                  href={show.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors underline decoration-secondary/40 underline-offset-4"
                >
                  {show.location}
                </a>
              ) : (
                <span>{show.location}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary" aria-hidden="true">calendar_month</span>
              <span>{formatDateFull(show.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" aria-hidden="true">schedule</span>
              <span>{eventTimeLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-15">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
                Sobre el Evento
              </h2>
              {show.description ? (
                <div className="text-on-surface-variant leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({children}) => <p className="mb-3 last:mb-0">{children}</p>,
                      strong: ({children}) => <strong className="text-on-surface font-semibold">{children}</strong>,
                      em: ({children}) => <em className="italic text-on-surface">{children}</em>,
                      ul: ({children}) => <ul className="list-disc pl-5 space-y-1 mb-3">{children}</ul>,
                      ol: ({children}) => <ol className="list-decimal pl-5 space-y-1 mb-3">{children}</ol>,
                      a: ({children, href}) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary-dim underline underline-offset-4"
                        >
                          {children}
                        </a>
                      ),
                      blockquote: ({children}) => (
                        <blockquote className="border-l-2 border-primary/50 pl-4 italic text-on-surface mb-3">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {show.description}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-on-surface-variant leading-relaxed">
                  Únete a Total Singers en una noche de armonías sincronizadas y energía pop en{' '}
                  <span className="text-on-surface font-medium">{show.venue}</span>. Una experiencia
                  vocal única que combina técnica, pasión y el poder del pop moderno.
                </p>
              )}
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
                Información del Recinto
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5" aria-hidden="true">stadium</span>
                  <div>
                    <p className="font-bold text-on-surface">{show.venue}</p>
                    <p className="text-on-surface-variant text-sm">{show.location}</p>
                    {show.locationUrl && (
                      <a
                        href={show.locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-secondary text-xs mt-1 hover:text-secondary-dim transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">map</span>
                        Ver en mapa
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-0.5" aria-hidden="true">schedule</span>
                  <div>
                    <p className="font-bold text-on-surface">Hora del Evento</p>
                    <p className="text-on-surface-variant text-sm">{eventTimeLabel}{doorsOpenLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setlist */}
      {show.setlist && show.setlist.length > 0 && (
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="heading-secondary text-on-surface">Programa</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Badge color="secondary">{show.setlist.length} canciones</Badge>
                <Badge color="tertiary">
                  {(() => {
                    if (show.estimatedDurationMinutes) {
                      const unit = show.estimatedDurationMinutes === 1 ? 'minuto' : 'minutos'
                      return `${show.estimatedDurationMinutes} ${unit}`
                    }

                    const trackCount = show.setlist.length
                    const totalSeconds = show.setlist.reduce((total, t) => {
                      const [min, sec] = t.duration.split(':').map(Number)
                      return total + min * 60 + sec
                    }, 0)

                    const adjustedSeconds = totalSeconds + trackCount * 60
                    const calculatedMinutes = Math.max(1, Math.ceil(adjustedSeconds / 60))
                    const unit = calculatedMinutes === 1 ? 'minuto' : 'minutos'
                    return `${calculatedMinutes} ${unit}`
                  })()}
                </Badge>
              </div>
            </div>
            <div className="space-y-0">
              {show.setlist.map((track: Track, index: number) => (
                <React.Fragment key={track.id}>
                  <div className="py-5 px-4 hover:bg-surface-container-high transition-colors duration-200 group rounded-lg">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-5 flex-1">
                        <span className="font-headline text-2xl font-black text-primary w-10 shrink-0">
                          {String(track.number).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                            {track.title}
                          </h3>
                          <p className="text-on-surface-variant text-sm">
                            {track.artist}
                            {track.soloists && track.soloists.length > 0 && (
                              <span className="text-tertiary">
                                {' '}
                                ·{' '}
                                {track.soloists.map((soloist, soloistIndex) => (
                                  <React.Fragment key={`${soloist.name}-${soloistIndex}`}>
                                    {soloistIndex > 0 && ', '}
                                    {soloist.slug ? (
                                      <Link
                                        to={`/team/${soloist.slug}`}
                                        className="underline decoration-tertiary/40 underline-offset-2 hover:text-tertiary"
                                      >
                                        {soloist.name}
                                      </Link>
                                    ) : (
                                      <span>{soloist.name}</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <span className="text-on-surface-variant font-headline font-bold text-sm shrink-0">
                        {track.duration}
                      </span>
                    </div>
                  </div>
                  {index < show.setlist!.length - 1 && (
                    <div className="h-px bg-outline-variant/20 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ShowDetail
