import React from 'react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full rounded-t-lg mt-20 bg-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-10 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-primary font-headline mb-6 md:mb-0">
          Total Singers
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
          <a
            href="mailto:contact@totalsingers.com"
            className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Contacto
          </a>
          <a
            href="#"
            className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Acerca de
          </a>
          <a
            href="#"
            className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="font-body text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Términos
          </a>
        </div>

        {/* Copyright */}
        <div className="font-body text-sm uppercase tracking-widest text-on-surface-variant text-center md:text-right">
          © {currentYear} Total Singers. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
