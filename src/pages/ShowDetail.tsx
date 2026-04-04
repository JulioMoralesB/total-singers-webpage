import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { showsData } from '../data'
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
  const { id } = useParams<{ id: string }>()
  const show = showsData.find((s) => s.id === id)

  if (!show) {
    return <Navigate to="/shows" replace />
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
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
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 label-uppercase"
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
              <span className="material-symbols-outlined text-primary" aria-hidden="true">location_on</span>
              <span className="font-medium">{show.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" aria-hidden="true">place</span>
              <span>{show.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary" aria-hidden="true">calendar_month</span>
              <span>{formatDateFull(show.date)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
                Sobre el Evento
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Únete a Total Singers en una noche de armonías sincronizadas y energía pop en{' '}
                <span className="text-on-surface font-medium">{show.venue}</span>. Una experiencia
                vocal única que combina técnica, pasión y el poder del pop moderno.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
                Información del Recinto
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5" aria-hidden="true">location_on</span>
                  <div>
                    <p className="font-bold text-on-surface">{show.venue}</p>
                    <p className="text-on-surface-variant text-sm">{show.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary mt-0.5" aria-hidden="true">schedule</span>
                  <div>
                    <p className="font-bold text-on-surface">Hora del Evento</p>
                    <p className="text-on-surface-variant text-sm">20:00 hrs — Puertas abren a las 19:00 hrs</p>
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
              <div className="flex gap-3">
                <Badge color="secondary">{show.setlist.length} canciones</Badge>
                <Badge color="tertiary">
                  {show.setlist.reduce((total, t) => {
                    const [min, sec] = t.duration.split(':').map(Number)
                    return total + min * 60 + sec
                  }, 0) / 60 | 0}' aprox.
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
                          <h3 className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                            {track.title}
                          </h3>
                          <p className="text-on-surface-variant text-sm">
                            {track.artist}
                            {track.soloists && track.soloists.length > 0 && (
                              <span className="text-tertiary"> · {track.soloists.join(', ')}</span>
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
