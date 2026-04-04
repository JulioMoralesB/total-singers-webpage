import React from 'react'

interface SingerCardProps {
  name: string
  role: string
  image: string
  color?: 'primary' | 'secondary' | 'tertiary'
  className?: string
}

const hoverColorMap = {
  primary: 'bg-primary/20',
  secondary: 'bg-secondary/20',
  tertiary: 'bg-tertiary/20',
}

export const SingerCard: React.FC<SingerCardProps> = ({
  name,
  role,
  image,
  color = 'primary',
  className = '',
}) => {
  return (
    <div className={`group ${className}`}>
      <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4">
        <img
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
          src={image}
        />
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${hoverColorMap[color]}`}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-headline text-xl font-extrabold text-on-surface">{name}</h3>
      <p className="text-on-surface-variant text-sm label-uppercase">{role}</p>
    </div>
  )
}
