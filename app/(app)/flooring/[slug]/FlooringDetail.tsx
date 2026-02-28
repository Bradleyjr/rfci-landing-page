'use client'

import { ArrowRight, ArrowLeft } from '@phosphor-icons/react'
import { PageLayout } from '../../../_components/PageLayout'
import { SectionReveal } from '../../../_components/SectionReveal'
import { TAG_STYLES, mediaUrl } from '../../../_lib/transforms'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FlooringDetail({ flooringType: ft, otherTypes }: { flooringType: any; otherTypes: any[] }) {
  const tags = (ft.tags ?? []).map((tag: { label: string; variant: string }) => ({
    label: tag.label,
    ...(TAG_STYLES[tag.variant] ?? TAG_STYLES.gray),
  }))
  const heroImg = mediaUrl(ft.heroImage) || mediaUrl(ft.image)
  const features: Array<{ title: string; description: string }> = ft.features ?? []
  const applications: Array<{ environment: string; description: string }> = ft.applications ?? []
  const relatedCerts: Array<{ slug: string; title: string; iconName: string; description: string }> = ft.relatedCertifications ?? []

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden" style={{ backgroundColor: ft.accentColor ? `${ft.accentColor}15` : '#F5F5F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <a href="/flooring" className="inline-flex items-center gap-2 text-sm text-rfci-black/50 hover:text-rfci-blue transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All Flooring Types
            </a>

            {/* Color accent */}
            <div className="w-16 h-1 mb-6" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight mb-3">
              {ft.title}
            </h1>
            <div className="text-label font-bold tracking-widest uppercase text-rfci-black/60 mb-6">
              {ft.subtitle}
            </div>

            <p className="text-lg md:text-xl text-rfci-black/60 max-w-3xl leading-relaxed font-light mb-8">
              {ft.description}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag: { label: string; style: string; dot?: string }, i: number) => (
                  <span key={i} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-label font-bold uppercase tracking-widest ${tag.style}`}>
                    {tag.dot && <span className={`w-1.5 h-1.5 rounded-full ${tag.dot}`} />}
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* Hero Image */}
      {heroImg && (
        <section className="relative h-64 md:h-96 overflow-hidden">
          <img src={heroImg} alt={ft.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Performance</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                Key <span className="font-semibold">features</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="border-t-2 pt-6" style={{ borderColor: ft.accentColor ?? '#9CA3AF' }}>
                    <h3 className="text-lg font-display font-medium mb-3">{feature.title}</h3>
                    <p className="text-rfci-black/60 text-sm leading-relaxed font-light">{feature.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {applications.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Applications</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                Where <span className="font-semibold">{ft.title}</span> excels
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="bg-white p-8 border border-black/5">
                    <h3 className="text-lg font-display font-medium mb-2">{app.environment}</h3>
                    <p className="text-rfci-black/60 text-sm leading-relaxed font-light">{app.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Certifications */}
      {relatedCerts.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Certifications</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                Applicable <span className="font-semibold">certifications</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCerts.map((cert, i) => (
                <SectionReveal key={cert.slug || i} delay={i * 0.1}>
                  <a
                    href={`/certifications/${cert.slug}`}
                    className="group block p-8 bg-rfci-white border border-black/5 hover:border-rfci-blue/30 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-display font-light group-hover:text-rfci-blue transition-colors mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-rfci-black/60 font-light line-clamp-2 mb-4">{cert.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA to Inspiration */}
      <section className="py-16 bg-rfci-blue">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-4">
              See <span className="font-semibold">{ft.title}</span> in action
            </h2>
            <a
              href="/inspiration"
              className="inline-flex items-center gap-3 text-white text-lg font-display font-medium hover:gap-4 transition-all border-b border-white/30 pb-1 hover:border-white"
            >
              Browse the Inspiration Gallery <ArrowRight className="w-5 h-5" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Other Flooring Types */}
      {otherTypes.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-light">
                Explore other <span className="font-semibold text-rfci-blue">flooring types</span>
              </h2>
            </SectionReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {otherTypes.slice(0, 4).map((other: FlooringLike, i: number) => (
                <SectionReveal key={other.slug || i} delay={i * 0.08}>
                  <a
                    href={`/flooring/${other.slug}`}
                    className="group block bg-white border border-black/5 hover:border-rfci-blue/30 hover:shadow-lg transition-all overflow-hidden"
                  >
                    <div className="h-1" style={{ backgroundColor: other.accentColor ?? '#9CA3AF' }} />
                    <div className="p-6">
                      <h3 className="text-lg font-display font-light group-hover:text-rfci-blue transition-colors mb-1">
                        {other.title}
                      </h3>
                      <span className="text-label font-bold tracking-widest uppercase text-rfci-black/50">
                        {other.subtitle}
                      </span>
                    </div>
                  </a>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}

type FlooringLike = {
  slug: string
  title: string
  subtitle: string
  accentColor?: string
}
