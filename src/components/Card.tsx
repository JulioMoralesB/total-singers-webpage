import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass'
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-surface-container-highest rounded-lg border border-outline-variant/10',
    glass: 'glass-card',
  }

  return (
    <div className={`${variantStyles[variant]} p-6 ${className}`}>
      {children}
    </div>
  )
}
