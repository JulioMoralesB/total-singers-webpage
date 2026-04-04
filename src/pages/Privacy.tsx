import React from 'react'
import { Link } from 'react-router-dom'

export const Privacy: React.FC = () => {
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
            Política de <span className="text-primary">Privacidad</span>
          </h1>

          <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed">
            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Recopilación de datos</h2>
              <p>
                Total Singers recopila únicamente la información que tú nos proporcionas
                voluntariamente, como tu dirección de correo electrónico al suscribirte a
                nuestras actualizaciones. No vendemos ni compartimos tu información con terceros.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Uso de la información</h2>
              <p>
                Utilizamos tu información de contacto exclusivamente para enviarte actualizaciones
                sobre próximas presentaciones y noticias de Total Singers. Puedes cancelar tu
                suscripción en cualquier momento.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Cookies</h2>
              <p>
                Este sitio web puede utilizar cookies para mejorar tu experiencia de navegación.
                Las cookies son archivos pequeños que se almacenan en tu dispositivo y nos ayudan
                a entender cómo usas el sitio.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Contacto</h2>
              <p>
                Para cualquier pregunta sobre nuestra política de privacidad, contáctanos en{' '}
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

export default Privacy
