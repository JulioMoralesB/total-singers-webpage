import React from 'react'
import { NavLink } from 'react-router-dom'

// Generates className for desktop nav links based on active state
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-headline tracking-tight transition-colors ${
    isActive
      ? 'text-primary border-b-2 border-primary pb-0.5'
      : 'text-on-surface hover:text-primary'
  }`

// Generates className for mobile nav links based on active state
const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded-lg transition-colors ${
    isActive
      ? 'text-primary bg-primary/10'
      : 'text-on-surface hover:bg-surface-container-high'
  }`

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-black text-primary tracking-tighter font-headline">
          Total Singers
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/shows" className={navLinkClass}>
            Recitales
          </NavLink>
          <NavLink to="/team" className={navLinkClass}>
            Equipo
          </NavLink>
        </div>

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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant/10">
          <div className="flex flex-col gap-2 px-6 py-4 max-w-7xl mx-auto">
            <NavLink
              to="/"
              end
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/shows"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recitales
            </NavLink>
            <NavLink
              to="/team"
              className={mobileNavLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Equipo
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
