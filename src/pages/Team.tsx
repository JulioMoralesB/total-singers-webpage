import React from 'react'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { teamData } from '../data'

export const Team: React.FC = () => {
  const colorMap = {
    primary: 'bg-primary/20',
    secondary: 'bg-secondary/20',
    tertiary: 'bg-tertiary/20',
  }

  return (
    <div className="bg-surface">
      {/* Hero Header */}
      <section className="py-32 overflow-hidden pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-6 max-w-3xl">
            <Badge color="primary">Nuestro Equipo</Badge>
            <h1 className="title-hero text-on-surface">
              Conoce al <br />
              <span className="text-secondary">Colectivo</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
              30 voces apasionadas, 6 beatboxers talentosos, un pulso sincronizado. Cada miembro aporta su talento único a Total Singers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={member.id} className={`group ${index % 2 === 1 ? 'md:mt-12 lg:mt-12' : ''}`}>
                <div className="aspect-[4/5] rounded-lg overflow-hidden relative mb-4">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    src={member.image}
                  />
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${colorMap[member.color || 'primary']}`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <Badge color={member.color as any}>{member.role}</Badge>
                    {member.bio && (
                      <p className="text-on-surface text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
                <h3 className="font-headline text-xl font-extrabold text-on-surface">{member.name}</h3>
                <p className="text-on-surface-variant text-sm label-uppercase">{member.instrument}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="heading-secondary text-on-surface mb-16">Nuestra Filosofía</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Feature Box */}
            <div className="md:col-span-2 bg-gradient-to-br from-surface-container-highest to-surface-container-low p-12 rounded-lg border border-outline-variant/10">
              <h3 className="font-headline text-4xl font-black italic text-primary leading-tight mb-6">
                "Sincronización sin sacrificar la identidad."
              </h3>
              <p className="text-on-surface-variant text-lg font-body">
                En Total Singers, creemos que la verdadera magia ocurre cuando las voces individuales convergen en un sonido cohesivo. Cada miembro aporta su técnica, su pasión y su interpretación única, juntos creamos algo que es mayor que la suma de sus partes.
              </p>
            </div>

            {/* Stats Boxes */}
            <Card className="flex flex-col items-center justify-center text-center p-8 bg-surface-container-highest">
              <div className="flex text-primary text-5xl mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  group
                </span>
              </div>
              <div className="font-headline text-4xl font-black text-on-surface mb-2">30+</div>
              <p className="text-on-surface-variant">Miembros Activos</p>
            </Card>

            <Card className="flex flex-col items-center justify-center text-center p-8 bg-surface-container-highest">
              <div className="flex text-secondary text-5xl mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  event
                </span>
              </div>
              <div className="font-headline text-4xl font-black text-on-surface mb-2">50+</div>
              <p className="text-on-surface-variant">Presentaciones</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
