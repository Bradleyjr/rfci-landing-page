'use client'

import { ArrowRight, ArrowLeft, Atom } from '@phosphor-icons/react'
import { PageLayout } from '../../../_components/PageLayout'
import { SectionReveal } from '../../../_components/SectionReveal'
import { CERT_ICONS, mediaUrl } from '../../../_lib/transforms'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CertificationDetail({ certification: cert, otherCertifications }: { certification: any; otherCertifications: any[] }) {
  const Icon = CERT_ICONS[cert.iconName] ?? Atom
  const heroImg = mediaUrl(cert.heroImage) || mediaUrl(cert.image)
  const benefits: Array<{ title: string; description: string }> = cert.benefits ?? []
  const process: Array<{ step: string; description: string }> = cert.process ?? []
  const stats: Array<{ value: string; label: string }> = cert.stats ?? []

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rfci-cream py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <a href="/certifications" className="inline-flex items-center gap-2 text-sm text-rfci-black/50 hover:text-rfci-blue transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All Certifications
            </a>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-rfci-blue/10 flex items-center justify-center shrink-0 text-rfci-blue">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-2">Certification</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight">
                  {cert.title}
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-rfci-black/60 max-w-3xl leading-relaxed font-light">
              {cert.description}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Hero Image */}
      {heroImg && (
        <section className="relative h-64 md:h-96 overflow-hidden">
          <img src={heroImg} alt={cert.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </section>
      )}

      {/* Stats */}
      {stats.length > 0 && (
        <section className="py-16 bg-white border-b border-rfci-light-gray/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap gap-12 md:gap-20">
              {stats.map((stat, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="text-3xl md:text-4xl font-display font-semibold text-rfci-blue">{stat.value}</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50 mt-1">{stat.label}</div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Long Description (rich text) */}
      {cert.longDescription && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12 prose prose-lg prose-rfci">
            {/* TODO: Render Lexical rich text when content is available */}
            <p className="text-rfci-black/70 leading-relaxed font-light">
              Detailed content will appear here once added through the CMS.
            </p>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Key Benefits</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                Why <span className="font-semibold">{cert.title}</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="p-8 bg-white border border-black/5 h-full">
                    <div className="text-2xl font-display font-light text-rfci-blue mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-display font-medium mb-3">{benefit.title}</h3>
                    <p className="text-rfci-black/60 text-sm leading-relaxed font-light">{benefit.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certification Process */}
      {process.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">The Process</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                How to get <span className="font-semibold">certified</span>
              </h2>
            </SectionReveal>

            <div className="max-w-3xl">
              {process.map((step, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="flex gap-6 pb-10 relative">
                    {/* Vertical line */}
                    {i < process.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-px bg-rfci-light-gray/50" />
                    )}
                    <div className="w-10 h-10 bg-rfci-blue text-white flex items-center justify-center shrink-0 text-sm font-bold relative z-10">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-display font-medium mb-2">{step.step}</h3>
                      <p className="text-rfci-black/60 text-sm leading-relaxed font-light">{step.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {cert.ctaUrl && (
        <section className="py-16 bg-rfci-blue">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <a
              href={cert.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white text-lg font-display font-medium hover:gap-4 transition-all"
            >
              {cert.ctaText || 'Learn More'} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      )}

      {/* Other Certifications */}
      {otherCertifications.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-light">
                Explore other <span className="font-semibold text-rfci-blue">certifications</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {otherCertifications.slice(0, 3).map((other: CertLike, i: number) => {
                const OtherIcon = CERT_ICONS[other.iconName] ?? Atom
                return (
                  <SectionReveal key={other.slug} delay={i * 0.1}>
                    <a
                      href={`/certifications/${other.slug}`}
                      className="group block p-8 bg-white border border-black/5 hover:border-rfci-blue/30 hover:shadow-lg transition-all"
                    >
                      <div className="w-10 h-10 bg-rfci-blue/10 flex items-center justify-center mb-4 text-rfci-blue group-hover:bg-rfci-blue group-hover:text-white transition-colors">
                        <OtherIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-display font-light group-hover:text-rfci-blue transition-colors mb-2">
                        {other.title}
                      </h3>
                      <p className="text-sm text-rfci-black/60 font-light line-clamp-2">{other.description}</p>
                    </a>
                  </SectionReveal>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}

type CertLike = {
  slug: string
  title: string
  iconName: string
  description: string
}
