'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import { SectionReveal } from '../../../_components/SectionReveal'

const CERT_IMAGES: Record<string, string> = {
  floorscore: '/images/inspiration/applications/homes/KLO09-RS.jpg',
  assure: '/images/inspiration/applications/homes/72201-RS.jpg',
  affirm: '/images/inspiration/applications/workplace/Lonseal-Lonbead-Designer-Office.jpg',
}

type CertificationHeroProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cert: any
  stats: Array<{ value: string; label: string }>
}

export function CertificationHero({ cert, stats }: CertificationHeroProps) {
  const bgImage = cert.image?.url || CERT_IMAGES[cert.slug] || CERT_IMAGES.floorscore

  return (
    <section className="relative overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center">
      {/* Full-bleed background image */}
      <img
        src={bgImage}
        alt={cert.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-rfci-black/85 via-rfci-black/60 to-rfci-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 lg:py-24 w-full">
        <SectionReveal>

          {/* Logo — large, above heading */}
          {cert.logoUrl && (
            <div className="mb-8">
              <img
                src={cert.logoUrl}
                alt={`${cert.title} logo`}
                className="h-20 md:h-24 w-auto object-contain brightness-0 invert"
              />
            </div>
          )}

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.1] text-white mb-6">
            {cert.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
            {cert.description}
          </p>

          {/* Certified products link */}
          {cert.certifiedProductsUrl && (
            <a
              href={cert.certifiedProductsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200"
            >
              View Certified Products <ArrowSquareOut size={18} />
            </a>
          )}

          {/* Stats bar */}
          {stats.length > 0 && (
            <div className="border-t border-white/20 pt-8 mt-10 md:mt-12">
              <div className="flex flex-wrap gap-10 md:gap-16">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-display font-semibold text-white">{stat.value}</div>
                    <div className="text-label font-bold tracking-widest uppercase text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SectionReveal>
      </div>
    </section>
  )
}
