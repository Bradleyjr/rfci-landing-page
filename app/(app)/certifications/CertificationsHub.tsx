'use client'

import { ArrowRight, Atom } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CertificationsHub({ certifications, pageSettings }: { certifications: any[]; pageSettings?: any }) {
  const displayCerts: CertDoc[] = certifications?.length ? certifications : []

  return (
    <PageLayout>
      <PageHero
        label="Sustainability"
        heading={pageSettings?.heroHeading || <>Sustainability programs you can <span className="font-semibold">rely on.</span></>}
        subheading={pageSettings?.heroSubheading || "RFCI's sustainability programs verify indoor air quality, environmental performance, and material transparency\u2014giving architects and designers confidence in every specification."}
        theme="blue"
      />

      {/* Certification Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {displayCerts.map((cert, idx) => {
              const Icon = CERT_ICONS[cert.iconName] ?? Atom
              const imgSrc = mediaUrl(cert.image)

              return (
                <SectionReveal key={cert.slug} delay={idx * 0.1}>
                  <a
                    href={`/certifications/${cert.slug}`}
                    className="group block h-full bg-rfci-white border border-black/5 hover:border-rfci-blue/30 hover:shadow-[0_20px_60px_rgba(1,100,219,0.08)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Image */}
                    {imgSrc && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/30 to-transparent" />
                      </div>
                    )}

                    <div className="p-8 md:p-10">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 border border-rfci-blue/20 flex items-center justify-center shrink-0 text-rfci-blue group-hover:border-rfci-blue group-hover:bg-rfci-blue group-hover:text-white transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-display font-light group-hover:text-rfci-blue transition-colors">
                            {cert.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-rfci-black/60 leading-relaxed mb-6">
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
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue group-hover:gap-3 transition-all">
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
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              Sustainability programs that protect people <span className="font-semibold">and the planet.</span>
            </h2>
            <p className="text-lg text-rfci-black/60 leading-relaxed font-light mb-8">
              For architects, designers, and specifiers, RFCI&apos;s sustainability programs provide independent, third-party verification
              that resilient flooring products meet the highest standards for indoor air quality, sustainability, and material transparency.
              They simplify specification, support green building credits, and protect occupant health.
            </p>
            <a
              href="/why-resilient"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all"
            >
              Why Resilient Flooring <ArrowRight className="w-4 h-4" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
