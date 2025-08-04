'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectImageProps {
  src: string
  alt: string
  title: string
}

const ProjectImage = ({ src, alt, title }: ProjectImageProps) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-emerald-100">
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-slate-600">{title}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-600/10"></div>
    </div>
  )
}

export default ProjectImage