import React from 'react'
import { Link } from 'react-router-dom'

export const About: React.FC = () => {
  return (
    <div className="bg-surface min-h-screen">
      <section className="py-32 pt-40">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 label-uppercase"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Inicio
          </Link>
          <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface mb-12">
            Acerca de <span className="text-primary">Total Singers</span>
          </h1>

          <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed">
            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">¿Quiénes somos?</h2>
              <p>
                Total Singers es un conjunto vocal de alto rendimiento que combina armonías
                sofisticadas con la energía del pop moderno. Fundado con la visión de redefinir
                la música coral, nuestro grupo reúne a 30 cantantes y 6 beatboxers apasionados
                por crear experiencias musicales únicas.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Nuestra Misión</h2>
              <p>
                Creemos que la verdadera magia ocurre cuando las voces individuales convergen
                en un sonido cohesivo. Cada miembro aporta su técnica, su pasión y su
                interpretación única — juntos creamos algo mayor que la suma de sus partes.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Contacto</h2>
              <p>
                ¿Quieres contratarnos para un evento o tienes alguna pregunta?{' '}
                <a
                  href="mailto:contact@totalsingers.com"
                  className="text-primary hover:text-primary-dim transition-colors font-medium"
                >
                  contact@totalsingers.com
                </a>
              </p>
              <p className="mt-4">
                Síguenos en Instagram:{' '}
                <a
                  href="https://instagram.com/total.singers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dim transition-colors font-medium"
                >
                  @total.singers
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
