import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, color = '#ba9eff', className = '' }) => {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${className}`}
      style={{
        backgroundColor: color + '1a',
        color,
        borderColor: color + '33',
      }}
    >
      {children}
    </span>
  )
}
