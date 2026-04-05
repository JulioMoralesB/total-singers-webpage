import React from 'react'
import { hexToRgba, resolveColor } from '../lib/colorUtils'

interface BadgeProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className = '' }) => {
  const resolvedColor = resolveColor(color)
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${className}`}
      style={{
        backgroundColor: hexToRgba(resolvedColor, 0.1),
        color: resolvedColor,
        borderColor: hexToRgba(resolvedColor, 0.2),
      }}
    >
      {children}
    </span>
  )
}
