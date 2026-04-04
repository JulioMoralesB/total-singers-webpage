import React from 'react'
import { Link } from 'react-router-dom'

interface SingerCardProps {
  slug?: string
  name: string
  role: string
  image: string
  color?: string
  className?: string
}

export const SingerCard: React.FC<SingerCardProps> = ({
  slug,
  name,
  role,
  image,
  color = '#ba9eff',
  className = '',
}) => {
  const imageBlock = (
    <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4">
      <img
        alt={name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        src={image}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: color + '33' }}
        aria-hidden="true"
      />
    </div>
  )

  return (
    <div className={`group ${className}`}>
      {slug ? (
        <Link to={`/team/${slug}`} className="block cursor-pointer">
          {imageBlock}
        </Link>
      ) : (
        imageBlock
      )}
      <h3 className="font-headline text-xl font-extrabold text-on-surface">{name}</h3>
      <p className="text-on-surface-variant text-sm label-uppercase">{role}</p>
    </div>
  )
}
