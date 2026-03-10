'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle } from '@phosphor-icons/react'
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
  const advantages: string[] = ft.advantages ?? []
  const composition: string = ft.composition ?? ''
  const installation: string = ft.installation ?? ''

  // Build dynamic section list based on available content
  const sections = useMemo(() => {
    const s: Array<{ id: string; label: string }> = []
    if (composition) s.push({ id: 'composition', label: 'Composition' })
    if (features.length > 0) s.push({ id: 'features', label: 'Features' })
    if (advantages.length > 0) s.push({ id: 'advantages', label: 'Advantages' })
    if (installation) s.push({ id: 'installation', label: 'Installation' })
    if (applications.length > 0) s.push({ id: 'applications', label: 'Applications' })
    if (relatedCerts.length > 0) s.push({ id: 'certifications', label: 'Certifications' })
    return s
  }, [composition, features.length, advantages.length, installation, applications.length, relatedCerts.length])

  // Measure main nav bottom on scroll so sticky nav always sits flush below it
  const [navBottom, setNavBottom] = useState(0)
  const [sectionNavHeight, setSectionNavHeight] = useState(0)
  const sectionNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mainNav = document.querySelector('nav.fixed') as HTMLElement | null
    if (!mainNav) return

    const measure = () => {
      setNavBottom(mainNav.getBoundingClientRect().bottom)
      if (sectionNavRef.current) setSectionNavHeight(sectionNavRef.current.offsetHeight)
    }
    measure()

    // Re-measure on scroll (nav height changes via CSS transition on scroll)
    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Intersection Observer for active section tracking
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (sections.length === 0) return

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible.length > 0) {
        setActiveSection(visible[0].target.id)
      }
    }

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: `-${navBottom + 56}px 0px -50% 0px`,
      threshold: 0.1,
    })

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [sections, navBottom])

  const scrollOffset = navBottom + sectionNavHeight

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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

      {/* Sticky Section Nav */}
      {sections.length > 1 && (
        <nav className="sticky z-40 bg-white/95 backdrop-blur-sm border-b border-black/5" style={{ top: navBottom }} ref={sectionNavRef}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex gap-1 py-4 overflow-x-auto scrollbar-hide">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-label font-bold tracking-widest uppercase transition-colors ${
                    activeSection === id
                      ? 'bg-rfci-blue text-white'
                      : 'text-rfci-black/50 hover:text-rfci-black hover:bg-black/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* Composition */}
      {composition && (
        <section id="composition" className="py-20 md:py-28 bg-white" style={{ scrollMarginTop: scrollOffset }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              <SectionReveal className="lg:col-span-2">
                <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
                <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Composition</div>
                <h2 className="text-3xl md:text-4xl font-display font-light">
                  What it&rsquo;s <span className="font-semibold">made of</span>
                </h2>
              </SectionReveal>
              <SectionReveal className="lg:col-span-3" delay={0.1}>
                <p className="text-rfci-black/70 leading-relaxed text-base md:text-lg font-light">
                  {composition}
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section id="features" className="py-20 md:py-28 bg-rfci-cream" style={{ scrollMarginTop: scrollOffset }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-16">
              <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Performance</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                Key <span className="font-semibold">features</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="bg-white p-8 border-t-2 border-black/5" style={{ borderTopColor: ft.accentColor ?? '#9CA3AF' }}>
                    <h3 className="text-lg font-display font-medium mb-3">{feature.title}</h3>
                    <p className="text-rfci-black/60 text-sm leading-relaxed font-light">{feature.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advantages */}
      {advantages.length > 0 && (
        <section id="advantages" className="py-20 md:py-28 bg-white" style={{ scrollMarginTop: scrollOffset }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              <SectionReveal className="lg:col-span-2">
                <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
                <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Advantages</div>
                <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
                  Why choose <span className="font-semibold">{ft.title}</span>
                </h2>
                <p className="text-rfci-black/50 font-light leading-relaxed">
                  The key benefits that make {ft.title} a trusted choice across residential and commercial environments.
                </p>
              </SectionReveal>
              <div className="lg:col-span-3">
                <ul className="space-y-4">
                  {advantages.map((adv, i) => (
                    <SectionReveal key={i} delay={i * 0.05}>
                      <li className="flex gap-4 items-start">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: ft.accentColor ?? '#0164DB' }} weight="fill" />
                        <span className="text-rfci-black/70 leading-relaxed font-light">{adv}</span>
                      </li>
                    </SectionReveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Installation */}
      {installation && (
        <section id="installation" className="py-20 md:py-28" style={{ backgroundColor: ft.accentColor ? `${ft.accentColor}10` : '#F5F5F0', scrollMarginTop: scrollOffset }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              <SectionReveal className="lg:col-span-2">
                <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
                <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Installation</div>
                <h2 className="text-3xl md:text-4xl font-display font-light">
                  How it&rsquo;s <span className="font-semibold">installed</span>
                </h2>
              </SectionReveal>
              <SectionReveal className="lg:col-span-3" delay={0.1}>
                <p className="text-rfci-black/70 leading-relaxed text-base md:text-lg font-light">
                  {installation}
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {applications.length > 0 && (
        <section id="applications" className="py-20 md:py-28 bg-rfci-cream" style={{ scrollMarginTop: scrollOffset }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-16">
              <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
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
        <section id="certifications" className="py-20 md:py-28 bg-white" style={{ scrollMarginTop: scrollOffset }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
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
