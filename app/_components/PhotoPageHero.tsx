'use client'

import { SectionReveal } from './SectionReveal'

type PhotoPageHeroProps = {
  label: string
  heading: React.ReactNode
  subheading?: string
  photo: { src: string; alt: string }
  children?: React.ReactNode
}

export function PhotoPageHero({ label, heading, subheading, photo, children }: PhotoPageHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[480px] md:min-h-[560px]">
      {/* Full-bleed photo */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlays — stronger left/bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-rfci-black/80 via-rfci-black/50 to-rfci-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        <SectionReveal className="max-w-2xl">
          <div className="text-label font-bold tracking-widest uppercase text-white/70 mb-4">
            {label}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight text-white mb-6">
            {heading}
          </h1>
          {subheading && (
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
              {subheading}
            </p>
          )}
          {children}
        </SectionReveal>
      </div>
    </section>
  )
}
