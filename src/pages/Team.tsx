import React from 'react'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { teamData } from '../data'
import { SingerCard } from '../components/SingerCard'

export const Team: React.FC = () => {
  return (
    <div className="bg-surface">
      {/* Hero Header */}
      <section className="py-32 pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-6 max-w-3xl">
            <Badge color="primary">Nuestro Equipo</Badge>
            <h1 className="title-hero text-on-surface">
              Conoce al <br />
              <span className="text-secondary">Colectivo</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
              Más de 30 voces apasionadas, 6 beatboxers talentosos, un pulso sincronizado. Cada miembro aporta su talento único a Total Singers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <SingerCard
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                color={member.color ?? 'primary'}
                className={index % 2 === 1 ? 'md:mt-12' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="heading-secondary text-on-surface mb-16">Nuestra Filosofía</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-gradient-to-br from-surface-container-highest to-surface-container-low p-12 rounded-lg border border-outline-variant/10">
              <h3 className="font-headline text-4xl font-black italic text-primary leading-tight mb-6">
                "Sincronización sin sacrificar la identidad."
              </h3>
              <p className="text-on-surface-variant text-lg font-body">
                En Total Singers, creemos que la verdadera magia ocurre cuando las voces individuales convergen en un sonido cohesivo. Cada miembro aporta su técnica, su pasión y su interpretación única — juntos creamos algo que es mayor que la suma de sus partes.
              </p>
            </div>

            <Card className="flex flex-col items-center justify-center text-center bg-surface-container-highest">
              <div className="flex text-primary text-5xl mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                  group
                </span>
              </div>
              <div className="font-headline text-4xl font-black text-on-surface mb-2">30+</div>
              <p className="text-on-surface-variant">Miembros Activos</p>
            </Card>

            <Card className="flex flex-col items-center justify-center text-center bg-surface-container-highest">
              <div className="flex text-secondary text-5xl mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
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
