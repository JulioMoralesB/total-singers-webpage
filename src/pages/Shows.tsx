import React from 'react'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { showsData } from '../data'

export const Shows: React.FC = () => {
  return (
    <div className="bg-surface">
      {/* Hero Header */}
      <section className="py-32 overflow-hidden pt-40">
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
      <section className="py-20">
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
                  <Badge color="primary">{show.date.split('-')[1]}/{show.date.split('-')[2]}</Badge>
                </div>

                {/* Content Card - Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 glass-card m-4 rounded-lg group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-2">{show.title}</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    <span>{show.venue}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-1">{show.location}</p>
                  <button className="mt-4 w-full btn-primary text-sm py-2">Ver Detalles</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="heading-secondary text-on-surface mb-16">Destinos de la Gira</h2>
          <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            {/* Large Feature */}
            <div className="md:col-span-5 relative group overflow-hidden rounded-lg aspect-[16/10]">
              <img
                alt="Tour Highlight"
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB00UJJV_DA4VJwo_EL8hp2r0fan6yG0mFA0xPlC3Bwg52N3umwYngjJ2Kspidn9-ZpNlLn9tAP97-aJtemScvaESORmgnrdgTpQ4Xv0I8nkj4lTKTjoIglr-AhRD8xWAFLUErWhEzkOo6pOsjAKX7KEhkttMPw578L2qrzzUh-ALSLliPMXFqBVGaVCeK05mXztZINeLwvdvSj8UqeCXEVS4edslGh2TmSAL5PKA9qwjpVK-1BBsfGjFAam5OvD0EznrDOkM_o9Ng"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Gira Nacional</h3>
                <p className="text-on-surface-variant">7 ciudades principales • Septiembre - Noviembre 2025</p>
              </div>
            </div>

            {/* Side Cards */}
            <div className="md:col-span-3 flex flex-col gap-6">
              <Card className="flex-1 bg-surface-container-highest border border-outline-variant/10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary text-4xl">confirmation_number</span>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-1">Entradas</h4>
                    <p className="text-on-surface-variant text-sm">Disponibles ahora para todos los eventos</p>
                  </div>
                </div>
              </Card>
              <Card className="flex-1 bg-surface-container-highest border border-outline-variant/10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-4xl">cast</span>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-1">Transmisiones</h4>
                    <p className="text-on-surface-variant text-sm">Algunos eventos disponibles en línea</p>
                  </div>
                </div>
              </Card>
              <Card className="flex-1 bg-surface-container-highest border border-outline-variant/10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">card_giftcard</span>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-on-surface mb-1">Paquetes VIP</h4>
                    <p className="text-on-surface-variant text-sm">Acceso exclusivo y encuentros</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shows
