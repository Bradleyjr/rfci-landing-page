'use client'

import { ArrowLeft, ArrowSquareOut } from '@phosphor-icons/react'
import { SectionReveal } from '../../../_components/SectionReveal'
import { CERT_ICONS } from '../../../_lib/transforms'

const CERT_BG = 'bg-rfci-black'

type CertificationHeroProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cert: any
  stats: Array<{ value: string; label: string }>
}

export function CertificationHero({ cert, stats }: CertificationHeroProps) {
  const Icon = CERT_ICONS[cert.iconName]

  return (
    <section className={`relative overflow-hidden ${CERT_BG} pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          {/* Back link */}
          <a
            href="/certifications"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All Certifications
          </a>

          {/* Icon + label row */}
          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <div className="w-8 h-8 bg-white/15 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-white" />
              </div>
            )}
            <div className="text-label font-bold tracking-widest uppercase text-white/70">
              Certification
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight text-white mb-6">
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
              className="inline-flex items-center gap-2 mt-8 text-white/80 hover:text-white text-sm font-semibold transition-colors"
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
