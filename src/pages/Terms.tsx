import React from 'react'
import { Link } from 'react-router-dom'

export const Terms: React.FC = () => {
  return (
    <div className="bg-surface min-h-screen">
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 label-uppercase"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Inicio
          </Link>
          <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface mb-12">
            Términos de <span className="text-primary">Servicio</span>
          </h1>

          <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed">
            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Uso del sitio</h2>
              <p>
                Al acceder y utilizar este sitio web, aceptas cumplir con estos términos de
                servicio. El contenido de este sitio es propiedad de Total Singers y está
                protegido por las leyes de derechos de autor aplicables.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Contenido</h2>
              <p>
                Todo el contenido musical, fotográfico y textual de este sitio web es propiedad
                de Total Singers o se utiliza con los permisos correspondientes. Queda prohibida
                su reproducción sin autorización expresa.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Entradas y Eventos</h2>
              <p>
                La adquisición de entradas para eventos está sujeta a disponibilidad. Las entradas
                no son reembolsables salvo cancelación del evento por parte de Total Singers.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Contacto</h2>
              <p>
                Para preguntas sobre estos términos, contáctanos en{' '}
                <a
                  href="mailto:contact@totalsingers.com"
                  className="text-primary hover:text-primary-dim transition-colors font-medium"
                >
                  contact@totalsingers.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
