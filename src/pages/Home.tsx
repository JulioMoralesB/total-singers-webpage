import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { SingerCard } from '../components/SingerCard'
import { showsData, teamData } from '../data'

const formatDateShort = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export const Home: React.FC = () => {
  const featuredShow = showsData[0]

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 blur-[180px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-secondary/15 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-tertiary/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="flex flex-col gap-6 max-w-4xl">
            <Badge color="primary">Próxima Generación Pop Coral</Badge>
            <h1 className="title-hero text-on-surface">
              HACEMOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary italic">
                QUE LA VOZ SUENE.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed">
              Total Singers es un conjunto vocal de alto rendimiento que combina armonías sofisticadas con la energía del pop moderno.
            </p>
            <div className="mt-8 glass-card p-6 md:p-8 max-w-md flex flex-col md:flex-row items-center gap-6 group hover:border-primary/40 transition-colors">
              <div className="flex-1">
                <p className="label-uppercase text-secondary mb-1">Próxima Presentación</p>
                <h3 className="font-headline text-2xl font-bold text-on-surface">{featuredShow.title}</h3>
                <p className="text-on-surface-variant text-sm mt-1">{featuredShow.venue} • {formatDateShort(featuredShow.date)}</p>
              </div>
              <Link to="/shows" aria-label="Ver todos los recitales">
                <Button variant="primary" className="group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
          <span className="label-uppercase text-[10px]">Desplázate</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* The Sound Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-7">
              <h2 className="heading-secondary text-on-surface mb-8">
                El Sonido de la <br />
                <span className="text-secondary">Sincronización.</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg font-body">
                <p>
                  Olvida todo lo que sabías sobre coros tradicionales. Total Singers se construye sobre la base de la producción musical actual: beatboxing, capas complejas e identidad vocal individual.
                </p>
                <p>
                  Nuestro conjunto no solo canta canciones; las reinterpreta a través de una lente de energía eléctrica y técnica vocal moderna.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" aria-hidden="true" />
                <Card className="relative border border-outline-variant/20">
                  <div className="flex text-primary text-5xl mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                      equalizer
                    </span>
                  </div>
                  <h4 className="font-headline text-2xl font-bold mb-2 text-on-surface">Enfoque Pop</h4>
                  <p className="text-on-surface-variant text-sm">
                    Desde éxitos de las listas hasta pop indie underground, seleccionamos música que resuena con el ritmo de nuestra generación.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Singers / Community Grid */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
            <div className="flex-1">
              <h2 className="font-headline text-5xl font-black tracking-tighter text-on-surface">
                Conoce al Colectivo
              </h2>
              <p className="text-on-surface-variant text-lg mt-4 max-w-lg leading-relaxed">
                Más de 30 voces. Beatboxers. Un pulso sincronizado. Nuestros miembros son el corazón de todo lo que creamos.
              </p>
            </div>
            <Link
              to="/team"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b border-primary/20 shrink-0"
            >
              Ver Equipo
              <span className="material-symbols-outlined" aria-hidden="true">east</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamData.slice(0, 4).map((member, index) => (
              <SingerCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                color={member.color ?? 'primary'}
                className={index % 2 === 1 ? 'md:mt-16' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative px-6 md:px-8">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" aria-hidden="true" />
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6 leading-tight text-on-surface">
            ¿LISTO PARA <br /> <span className="text-primary">SINCRONIZARTE?</span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-4 font-body">
            Actualmente realizamos audiciones para nuestra Gira de Invierno. Muéstranos tu voz — o simplemente ven a disfrutar en vivo.
          </p>
          <p className="text-on-surface-variant text-sm mb-10">
            Contáctanos en <a href="mailto:contact@totalsingers.com" className="text-primary hover:text-primary-dim transition-colors">contact@totalsingers.com</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/shows">
              <Button variant="primary">Ver Recitales</Button>
            </Link>
            <a
              href="https://instagram.com/total.singers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">Síguenos en Instagram</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
