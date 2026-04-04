import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { SingerCard } from '../components/SingerCard'
import { useShows } from '../hooks/useShows'
import { useTeamMembers } from '../hooks/useTeamMembers'

const formatDateShort = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

const formatTime12h = (time24: string) => {
  const [hourStr, minuteStr] = time24.split(':')
  const hour = Number(hourStr)
  const period = hour >= 12 ? 'PM' : 'AM'
  const hour12 = ((hour + 11) % 12) + 1
  return `${hour12}:${minuteStr} ${period}`
}


export const Home: React.FC = () => {
  const { data: shows } = useShows()
  const { data: members } = useTeamMembers()
  const featuredShow = shows[0]

  return (
    <div className="bg-surface overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-18 pb-18 md:pt-18 md:pb-14">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-secondary/15 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-tertiary/10 blur-[80px] rounded-full" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 max-w-4xl">
              <h1 className="title-hero text-on-surface">
                HACEMOS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary italic">
                  QUE LA VOZ SUENE.
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                Total Singers es un grupo de estudiantes de canto los cuales disfrutan presentar su pasión por la música a través de la interpretación de canciones de distintos géneros.
              </p>
              <div className="glass-card p-6 md:p-8 flex flex-row items-center gap-6 group hover:border-primary/40 transition-colors">
                <div className="flex-1">
                  <p className="label-uppercase text-secondary mb-1">Próxima Presentación</p>
                  {featuredShow ? (
                    <>
                      <h3 className="font-headline text-2xl font-bold text-on-surface">{featuredShow.title}</h3>
                      <p className="text-on-surface-variant text-sm mt-1">
                        {featuredShow.venue} • {formatDateShort(featuredShow.date)} • {formatTime12h(featuredShow.eventTime ?? '20:00')}
                      </p>
                    </>
                  ) : (
                    <p className="text-on-surface-variant text-sm">Próximamente…</p>
                  )}
                </div>
                <Link to="/shows" aria-label="Ver todos los recitales">
                  <Button variant="primary" className="group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
                  </Button>
                </Link>
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
                Conoce a los <span className="text-primary">SINGERS</span>
              </h2>
              <p className="text-on-surface-variant text-lg mt-4 max-w-lg leading-relaxed">
                Multiples voces, unidas por la pasión. Nuestros miembros son el corazón de todo lo que creamos.
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
            {members.slice(0, 4).map((member, index) => (
              <SingerCard
                key={member.id}
                slug={member.slug}
                name={member.name}
                role={member.role}
                image={member.image}
                color={member.color ?? '#ba9eff'}
                className={index % 2 === 1 ? 'md:mt-16' : ''}
              />
            ))}
          </div>
        </div>
      </section>

    
    </div>
  )
}

export default Home
