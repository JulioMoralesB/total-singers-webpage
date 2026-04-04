import React from 'react'
import { Badge } from '../components/Badge'
import { showsData } from '../data'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

const formatDateShort = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'short',
  })
}

const formatDateFull = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

export const Shows: React.FC = () => {
  return (
    <div className="bg-surface">
      {/* Hero Header */}
      <section className="py-10 overflow-hidden pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-6 max-w-3xl">
            <Badge color="tertiary">Próximamente</Badge>
            <h1 className="title-hero text-on-surface">
              Nuestros <br />
              <span className="text-secondary">Recitales</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-medium leading-relaxed">
              Descubre dónde nos presentaremos a continuación. Cada evento es una experiencia única de armonía sincronizada y energía pop.
            </p>
          </div>
        </div>
      </section>

      {/* Concert Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showsData.map((show) => (
              <div key={show.id} className="relative group overflow-hidden rounded-lg aspect-[3/4]">
                {/* Background Image */}
                <img
                  alt={show.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={show.image}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <Badge color="primary">{formatDateShort(show.date)}</Badge>
                </div>

                {/* Content Card - Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 glass-card m-4 group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-2">{show.title}</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">location_on</span>
                    <span>{show.venue}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-1">{formatDateFull(show.date)}</p>
                  <Link to={`/shows/${show.slug}`} className="block mt-4">
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shows
