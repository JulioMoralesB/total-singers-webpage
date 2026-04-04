import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'tertiary'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className = '' }) => {
  const colorStyles = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary text-on-secondary',
    tertiary: 'bg-tertiary text-on-surface',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colorStyles[color]} ${className}`}>
      {children}
    </span>
  )
}
