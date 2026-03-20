'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from './SectionReveal'

type SplitPageHeroProps = {
  label: string
  heading: React.ReactNode
  subheading?: string
  theme?: 'light' | 'dark' | 'blue'
  photo?: { src: string; alt: string }
  cta?: { label: string; href: string; external?: boolean }
  reverse?: boolean
}

const themeClasses = {
  light: {
    bg: 'bg-rfci-cream border-b border-black/5',
    label: 'text-rfci-blue',
    heading: 'text-rfci-black',
    subheading: 'text-rfci-black/60',
  },
  dark: {
    bg: 'bg-rfci-black',
    label: 'text-rfci-blue',
    heading: 'text-white',
    subheading: 'text-white/70',
  },
  blue: {
    bg: 'bg-rfci-blue',
    label: 'text-white/70',
    heading: 'text-white',
    subheading: 'text-white/80',
  },
}

export function SplitPageHero({ label, heading, subheading, theme = 'light', photo, cta, reverse = false }: SplitPageHeroProps) {
  const t = themeClasses[theme]

  const textCol = (
    <SectionReveal direction={reverse ? 'right' : 'left'} className={`lg:col-span-7 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
      <div className={`text-label font-bold tracking-widest uppercase ${t.label} mb-4`}>
        {label}
      </div>
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight ${t.heading} mb-6`}>
        {heading}
      </h1>
      {subheading && (
        <p className={`text-lg md:text-xl ${t.subheading} max-w-2xl leading-relaxed font-light`}>
          {subheading}
        </p>
      )}
      {cta && (
        <a
          href={cta.href}
          target={cta.external ? '_blank' : undefined}
          rel={cta.external ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-2 mt-8 bg-white text-rfci-black px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black hover:text-white transition-colors duration-200"
        >
          {cta.label} <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </SectionReveal>
  )

  const photoCol = (
    <SectionReveal direction={reverse ? 'left' : 'right'} delay={0.12} className={`mt-10 lg:mt-0 lg:col-span-5 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
      <div className="relative overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[400px]">
        {photo ? (
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          /* Gradient fallback panel */
          <div className="absolute inset-0 bg-gradient-to-br from-rfci-blue via-rfci-blue/90 to-[#0147A3]" />
        )}
      </div>
    </SectionReveal>
  )

  return (
    <section className={`${t.bg} pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {textCol}
          {photoCol}
        </div>
      </div>
    </section>
  )
}
