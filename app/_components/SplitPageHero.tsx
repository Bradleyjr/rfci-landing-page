'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from './SectionReveal'

type SplitPageHeroProps = {
  label: string
  heading: React.ReactNode
  subheading?: React.ReactNode
  theme?: 'light' | 'dark' | 'blue'
  photo?: { src: string; alt: string }
  cta?: { label: string; href: string; external?: boolean }
  reverse?: boolean
}

const themeClasses = {
  light: {
    bg: 'bg-rfci-cream',
    label: 'text-rfci-blue',
    heading: 'text-rfci-black',
    subheading: 'text-rfci-black/60',
    fade: '#F5F5F0',
  },
  dark: {
    bg: 'bg-rfci-black',
    label: 'text-rfci-blue',
    heading: 'text-white',
    subheading: 'text-white/70',
    fade: '#0A0A0A',
  },
  blue: {
    bg: 'bg-rfci-blue',
    label: 'text-white/70',
    heading: 'text-white',
    subheading: 'text-white/80',
    fade: '#0164DB',
  },
}

export function SplitPageHero({ label, heading, subheading, theme = 'light', photo, cta, reverse = false }: SplitPageHeroProps) {
  const t = themeClasses[theme]

  return (
    <section className={`${t.bg} relative overflow-hidden min-h-[420px] md:min-h-[480px]`}>
      {/* Full-bleed image — covers the image side of the hero */}
      {photo && (
        <div className={`hidden lg:block absolute top-0 bottom-0 ${reverse ? 'left-0' : 'right-0'} w-[50%]`}>
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient fade into background color — wide for breathing room */}
          <div
            className={`absolute inset-y-0 ${reverse ? 'right-0' : 'left-0'} w-[70%]`}
            style={{ background: `linear-gradient(${reverse ? 'to left' : 'to right'}, ${t.fade} 0%, ${t.fade}E6 20%, ${t.fade}99 45%, ${t.fade}33 70%, transparent)` }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center min-h-[420px] md:min-h-[480px]">

          {/* Text column */}
          <SectionReveal
            direction={reverse ? 'right' : 'left'}
            className={`py-16 md:py-20 lg:py-24 flex flex-col justify-center ${reverse ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-5'}`}
          >
            <div className={`text-label font-bold tracking-widest uppercase ${t.label} mb-4`}>
              {label}
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.1] ${t.heading} mb-6`}>
              {heading}
            </h1>
            {subheading && (
              <div className={`text-lg md:text-xl ${t.subheading} max-w-lg leading-relaxed font-light`}>
                {subheading}
              </div>
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

        </div>
      </div>

      {/* Mobile image — below text */}
      {photo && (
        <div className="lg:hidden relative h-64 md:h-80 overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  )
}
