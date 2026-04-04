import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl shadow-[0px_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black text-primary tracking-tighter font-headline">
          Total Singers
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-headline tracking-tight text-on-surface hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/shows"
            className="font-headline tracking-tight text-on-surface hover:text-primary transition-colors"
          >
            Recitales
          </Link>
          <Link
            to="/setlist"
            className="font-headline tracking-tight text-on-surface hover:text-primary transition-colors"
          >
            Itinerario
          </Link>
          <Link
            to="/team"
            className="font-headline tracking-tight text-on-surface hover:text-primary transition-colors"
          >
            Equipo
          </Link>
        </div>

        {/* Right side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-surface-container-high rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant/10">
          <div className="flex flex-col gap-2 px-6 py-4 max-w-7xl mx-auto">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/shows"
              className="px-4 py-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recitales
            </Link>
            <Link
              to="/setlist"
              className="px-4 py-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Itinerario
            </Link>
            <Link
              to="/team"
              className="px-4 py-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Equipo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
