import React from 'react'
import { Badge } from '../components/Badge'
import { useTeamMembers } from '../hooks/useTeamMembers'
import { SingerCard } from '../components/SingerCard'

export const Team: React.FC = () => {
  const { data: members, loading } = useTeamMembers()
  return (
    <div className="bg-surface">
      {/* Hero Header */}
      <section className="py-20 pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-2 pb-5">
              <Badge color="primary">Nuestro Equipo</Badge>
            </div>
            <h1 className="title-hero text-on-surface">
              Conoce a los <br />
              <span className="text-secondary">Singers</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
              Cada miembro aporta su talento único a Total Singers, creando una armonía que trasciende lo individual. Descubre quiénes somos y cómo cada voz contribuye a nuestro sonido distintivo.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {loading ? (
              <p className="col-span-4 text-on-surface-variant text-center py-12">Cargando…</p>
            ) : members.map((member, index) => (
              <SingerCard
                key={member.id}
                slug={member.slug}
                name={member.name}
                role={member.role}
                image={member.image}
                color={member.color ?? '#ba9eff'}
                className={index % 2 === 1 ? 'md:mt-12' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="heading-secondary text-on-surface mb-16">Nuestra Filosofía</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-surface-container-highest to-surface-container-low p-12 rounded-lg border border-outline-variant/10">
              <h3 className="font-headline text-2xl md:text-4xl font-black italic text-primary leading-tight mb-6">
                "Sincronización sin sacrificar la identidad."
              </h3>
              <p className="text-on-surface-variant text-base md:text-lg font-body">
                En Total Singers, creemos que la verdadera magia ocurre cuando las voces individuales convergen en un sonido cohesivo. Cada miembro aporta su técnica, su pasión y su interpretación única — juntos creamos algo que es mayor que la suma de sus partes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
