import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'tertiary'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className = '' }) => {
  const colorStyles = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
    tertiary: 'bg-tertiary/10 text-tertiary border border-tertiary/20',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colorStyles[color]} ${className}`}>
      {children}
    </span>
  )
}
