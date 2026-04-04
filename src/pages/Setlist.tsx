import React from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { setlistData, teamData } from '../data'

export const Setlist: React.FC = () => {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="py-32 overflow-hidden pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <Badge color="secondary">Itinerario del Concierto</Badge>
              <h1 className="title-hero text-on-surface">
                Armonías <br />
                <span className="text-tertiary">Neon</span>
              </h1>
              <p className="text-lg text-on-surface-variant font-body max-w-lg">
                Disfruta de nuestro setlist cuidadosamente seleccionado, presentado con la energía y sincronización que nos define.
              </p>
              <div className="flex gap-4 mt-4">
                <Badge color="tertiary">Duración: 90 minutos</Badge>
                <Badge color="secondary">En Vivo</Badge>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg aspect-[3/4]">
              <img
                alt="Concert Performance"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXzMOrp8_BtnK9klgCz97_7DJWw421kz-U6cXKv1gcSNfS_KkO8HKP33ezkIzpuJCOQUwQeKozZ34if3A-jVqrk3jwt73Y4XJTS9w2xxwIRHocEeq4lwNmGpA0EdZHXPsO7abXlogu--pU3eSbedARblBssBDpWWP0gb-nJYIedoqImCHOW_bf-LIIGvbw96wFykaDFiOpOPtEOUPjLZdjZRxLNiZZ0xHhYgOWbWCApMoDOTOweVcRnEHSsNUH0ddK5N01vyhZNPw"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Setlist Tracks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="heading-secondary text-on-surface mb-12">Programa</h2>
          <div className="space-y-0">
            {setlistData.map((track, index) => (
              <React.Fragment key={track.id}>
                <div className="py-6 px-6 hover:bg-surface-container-high transition-colors duration-200 group cursor-pointer">
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex-1 flex items-center gap-6">
                      <span className="font-headline text-2xl font-bold text-primary w-12">{String(track.number).padStart(2, '0')}</span>
                      <div className="flex-1">
                        <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                          {track.title}
                        </h3>
                        <p className="text-tertiary text-sm font-body">Artista original: {track.artist}</p>
                        {track.soloists && track.soloists.length > 0 && (
                          <p className="text-on-surface-variant text-sm mt-1">
                            Solistas: {track.soloists.join(', ')}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-on-surface-variant font-headline font-bold">{track.duration}</div>
                  </div>
                </div>
                {index < setlistData.length - 1 && (
                  <div className="h-px bg-outline-variant/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Intermission */}
      <section className="py-16 border-y border-outline-variant/20">
        <div className="text-center">
          <span className="label-uppercase text-on-surface-variant">Intermedio - 15 minutos</span>
        </div>
      </section>

      {/* Soloists Showcase */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="heading-secondary text-on-surface mb-16">Solistas Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamData.slice(0, 4).map((member) => (
              <div key={member.id} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    src={member.image}
                  />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface">{member.name}</h3>
                <p className="text-on-surface-variant text-sm label-uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscription */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 md:px-8 glass-card rounded-lg p-12 text-center">
          <h2 className="font-headline text-3xl font-bold mb-4 text-on-surface">Mantente Conectado</h2>
          <p className="text-on-surface-variant mb-8">Suscríbete para recibir actualizaciones sobre próximas presentaciones y eventos especiales.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-3 rounded-full bg-surface-container-highest border border-outline-variant/20 text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50"
            />
            <Button variant="primary">Suscribirse</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Setlist
