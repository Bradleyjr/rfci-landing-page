'use client'

import { ArrowRight, Atom } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { SplitPageHero } from '../../_components/SplitPageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { HeroPattern } from '../../_components/HeroPattern'
import { CERT_ICONS, mediaUrl } from '../../_lib/transforms'

type CertDoc = {
  slug: string
  title: string
  iconName: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
  stats?: Array<{ value: string; label: string }>
}

/**
 * Per-certification visual identity for the card header panel.
 * Each cert gets a distinct gradient + decorative treatment that conveys
 * its domain (IAQ, precision quality, sustainability, environmental data).
 * When real photography arrives via CMS, the imgSrc block takes over
 * and these panels are hidden — zero migration cost.
 */
const CERT_HEADER_STYLES: Record<string, {
  gradient: string
  iconBg: string
  accent: string
  pattern: 'rings' | 'grid' | 'wave' | 'dots'
}> = {
  floorscore: {
    // Clear air — bright blue, atmospheric, authoritative
    gradient: 'from-rfci-blue via-rfci-blue/90 to-[#0147A3]',
    iconBg: 'bg-white/15',
    accent: 'text-white',
    pattern: 'rings',
  },
  assure: {
    // Precision quality / industrial testing — dark, confident
    gradient: 'from-[#0D1B2E] via-[#162540] to-[#0164DB]/60',
    iconBg: 'bg-rfci-blue/20',
    accent: 'text-rfci-blue',
    pattern: 'grid',
  },
  affirm: {
    // Sustainability — teal gradient, growth, nature
    gradient: 'from-[#006B74] via-rfci-teal/80 to-[#00C2D1]/60',
    iconBg: 'bg-white/15',
    accent: 'text-white',
    pattern: 'wave',
  },
  epd: {
    // Environmental data / documentation — warm dark earth
    gradient: 'from-[#1A1A14] via-[#2D2D20] to-[#3A3A28]',
    iconBg: 'bg-white/10',
    accent: 'text-rfci-cream',
    pattern: 'dots',
  },
}

const FALLBACK_HEADER = {
  gradient: 'from-rfci-blue to-[#0147A3]',
  iconBg: 'bg-white/15',
  accent: 'text-white',
  pattern: 'rings' as const,
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CertificationsHub({ certifications, pageSettings }: { certifications: any[]; pageSettings?: any }) {
  const displayCerts: CertDoc[] = certifications?.length ? certifications : []

  return (
    <PageLayout>
      <SplitPageHero
        label="Sustainability"
        heading={pageSettings?.heroHeading || <>Sustainability programs you can <span className="font-semibold">rely on.</span></>}
        subheading={pageSettings?.heroSubheading || "RFCI's sustainability programs verify indoor air quality, environmental performance, and material transparency—giving architects and designers confidence in every specification."}
        theme="blue"
        photo={{ src: '/media/mission/sustainability-programs.jpg', alt: 'RFCI sustainability programs' }}
      />

      {/* Certification Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {displayCerts.map((cert, idx) => {
              const Icon = CERT_ICONS[cert.iconName] ?? Atom
              const imgSrc = mediaUrl(cert.image)
              const headerStyle = CERT_HEADER_STYLES[cert.slug] ?? FALLBACK_HEADER

              return (
                <SectionReveal key={cert.slug} delay={idx * 0.1}>
                  <a
                    href={`/certifications/${cert.slug}`}
                    className="group block h-full bg-rfci-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-[0_20px_60px_rgba(1,100,219,0.08)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Card Header — photo when available, gradient panel otherwise */}
                    {imgSrc ? (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/30 to-transparent" />
                      </div>
                    ) : (
                      <div className={`relative h-44 bg-gradient-to-br ${headerStyle.gradient} overflow-hidden flex items-center justify-center`}>
                        {/* Decorative pattern — unique per cert */}
                        <HeroPattern type={headerStyle.pattern} />
                        {/* Large centered icon */}
                        <div className={`relative z-10 w-20 h-20 ${headerStyle.iconBg} flex items-center justify-center`}>
                          <Icon className={`w-10 h-10 ${headerStyle.accent}`} />
                        </div>
                      </div>
                    )}

                    <div className="p-8 md:p-10">
                      {/* Title — no longer competing with icon since icon is in the header */}
                      <h3 className="text-xl md:text-2xl font-display font-light mb-4 group-hover:text-rfci-blue transition-colors duration-200">
                        {cert.title}
                      </h3>

                      <p className="text-base text-rfci-black/60 leading-relaxed mb-6">
                        {cert.description}
                      </p>

                      {/* Stats */}
                      {cert.stats && cert.stats.length > 0 && (
                        <div className="flex gap-8 mb-6 pb-6 border-b border-rfci-light-gray/30">
                          {cert.stats.map((stat, i) => (
                            <div key={i}>
                              <div className="text-lg font-display font-semibold text-rfci-black">{stat.value}</div>
                              <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue group-hover:gap-3 transition-all duration-200">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Sustainability Programs Matter */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="max-w-3xl mx-auto text-center">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Why it matters</div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Sustainability programs that protect people <span className="font-semibold">and the planet.</span>
            </h2>
            <p className="text-lg text-rfci-black/60 leading-relaxed font-light mb-8">
              For architects, designers, and specifiers, RFCI&apos;s sustainability programs provide independent, third-party verification
              that resilient flooring products meet the highest standards for indoor air quality, sustainability, and material transparency.
              They simplify specification, support green building credits, and protect occupant health.
            </p>
            <a
              href="/why-resilient"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all duration-200"
            >
              Why Resilient Flooring <ArrowRight className="w-4 h-4" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
