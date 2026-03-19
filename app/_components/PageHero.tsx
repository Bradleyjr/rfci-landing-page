'use client'

import { SectionReveal } from './SectionReveal'

type PageHeroProps = {
  label: string
  heading: React.ReactNode
  subheading?: string
  theme?: 'light' | 'dark' | 'blue'
}

const themeClasses = {
  light: {
    bg: 'bg-rfci-cream',
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

export function PageHero({ label, heading, subheading, theme = 'light' }: PageHeroProps) {
  const t = themeClasses[theme]

  return (
    <section className={`${t.bg} pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 ${theme === 'light' ? 'border-b border-black/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className={`text-label font-bold tracking-widest uppercase ${t.label} mb-4`}>
            {label}
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight ${t.heading} mb-6`}>
            {heading}
          </h1>
          {subheading && (
            <p className={`text-lg md:text-xl ${t.subheading} max-w-3xl leading-relaxed`}>
              {subheading}
            </p>
          )}
        </SectionReveal>
      </div>
    </section>
  )
}
