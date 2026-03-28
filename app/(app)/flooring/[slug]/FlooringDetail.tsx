'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, ArrowUpRight } from '@phosphor-icons/react'
import { PageLayout } from '../../../_components/PageLayout'
import { SectionReveal } from '../../../_components/SectionReveal'
import { TAG_STYLES, mediaUrl } from '../../../_lib/transforms'
import { PROJECTS_STATIC } from '../../inspiration/InspirationGallery'

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
  const diagrams: Array<{ url: string; label: string }> = ft.diagrams ?? []

  // Build dynamic section list based on available content
  const sections = useMemo(() => {
    const s: Array<{ id: string; label: string }> = []
    if (composition) s.push({ id: 'composition', label: 'Composition' })
    if (diagrams.length > 0) s.push({ id: 'construction', label: 'Construction' })
    if (features.length > 0) s.push({ id: 'features', label: 'Features' })
    if (advantages.length > 0) s.push({ id: 'advantages', label: 'Advantages' })
    if (installation) s.push({ id: 'installation', label: 'Installation' })
    if (applications.length > 0) s.push({ id: 'applications', label: 'Applications' })
    if (relatedCerts.length > 0) s.push({ id: 'certifications', label: 'Certifications' })
    return s
  }, [composition, diagrams.length, features.length, advantages.length, installation, applications.length, relatedCerts.length])

  // Measure main nav bottom on scroll so sticky nav always sits flush below it
  const [navBottom, setNavBottom] = useState(0)
  const [sectionNavHeight, setSectionNavHeight] = useState(0)
  const sectionNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mainNav = document.querySelector('nav.sticky') as HTMLElement | null
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
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: ft.accentColor ? `${ft.accentColor}15` : '#F5F5F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <a href="/flooring" className="inline-flex items-center gap-2 text-sm text-rfci-black/50 hover:text-rfci-blue transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All Flooring Types
            </a>

            {/* Color accent */}
            <div className="w-16 h-1 mb-6" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.1] mb-3">
              {ft.title}
            </h1>
            <div className="text-label font-bold tracking-widest uppercase text-rfci-black/60 mb-6">
              {ft.subtitle}
            </div>

            <p className="text-lg md:text-xl text-rfci-black/60 max-w-3xl leading-relaxed font-light mb-8">
              {ft.description}
            </p>

            {/* Tags */}
            {(ft.tags ?? []).length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {(ft.tags ?? []).map((tag: { label: string }, i: number) => (
                  <span key={i} className="inline-flex items-center px-2.5 py-1 text-label font-bold uppercase tracking-widest bg-rfci-cream text-rfci-black/70">
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
                <h2 className="text-4xl md:text-5xl font-display font-light">
                  How it&rsquo;s <span className="font-semibold">made</span>
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

      {/* Construction Diagrams */}
      {diagrams.length > 0 && (
        <section id="construction" className="py-20 md:py-28 bg-white" style={{ scrollMarginTop: scrollOffset }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-16">
              <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Construction</div>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                How it&rsquo;s <span className="font-semibold">built</span>
              </h2>
            </SectionReveal>

            <div className={`grid gap-10 md:gap-14 ${diagrams.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl mx-auto'}`}>
              {diagrams.map((diagram, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={diagram.url}
                      alt={`${ft.title} ${diagram.label} construction diagram`}
                      className="w-full object-contain"
                      loading="lazy"
                    />
                    {diagrams.length > 1 && (
                      <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">
                        {diagram.label}
                      </div>
                    )}
                  </div>
                </SectionReveal>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Key <span className="font-semibold">features</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="bg-white p-8 border-t-2 border-black/5" style={{ borderTopColor: ft.accentColor ?? '#9CA3AF' }}>
                    <h3 className="text-xl md:text-2xl font-display font-light mb-3">{feature.title}</h3>
                    <p className="text-rfci-black/60 text-base leading-relaxed font-light">{feature.description}</p>
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
                <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
                  Why choose <span className="font-semibold">{ft.title}</span>
                </h2>
                <p className="text-base text-rfci-black/50 font-light leading-relaxed">
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
                <h2 className="text-4xl md:text-5xl font-display font-light">
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
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Where <span className="font-semibold">{ft.title}</span> excels
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, i) => (
                <SectionReveal key={i} delay={i * 0.08}>
                  <div className="bg-white p-8 border border-black/5">
                    <h3 className="text-xl md:text-2xl font-display font-light mb-2">{app.environment}</h3>
                    <p className="text-rfci-black/60 text-base leading-relaxed font-light">{app.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Applicable <span className="font-semibold">certifications</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCerts.map((cert, i) => (
                <SectionReveal key={cert.slug || i} delay={i * 0.1}>
                  <a
                    href={`/certifications/${cert.slug}`}
                    className="group block p-8 bg-rfci-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200"
                  >
                    <h3 className="text-xl md:text-2xl font-display font-light group-hover:text-rfci-blue transition-colors mb-2">
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

      {/* Inspiration Gallery — scroll-locked parallax */}
      <InspirationParallax title={ft.title} accentColor={ft.accentColor} />

      {/* Other Flooring Types — marquee */}
      {otherTypes.length > 0 && (
        <section className="py-16 md:py-20 bg-rfci-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
            <SectionReveal>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Explore other <span className="font-semibold text-rfci-blue">flooring types</span>
              </h2>
            </SectionReveal>
          </div>

          <div className="relative">
            {/* Left/right fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-rfci-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-rfci-cream to-transparent z-10 pointer-events-none" />

            <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]">
              {/* Double the items for seamless loop */}
              {[...otherTypes, ...otherTypes].map((other: FlooringLike, i: number) => (
                <a
                  key={`${other.slug}-${i}`}
                  href={`/flooring/${other.slug}`}
                  className="group flex-shrink-0 w-64 bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 p-6"
                >
                  <h3 className="text-xl md:text-2xl font-display font-light group-hover:text-rfci-blue transition-colors mb-1">
                    {other.title}
                  </h3>
                  <span className="text-label font-bold tracking-widest uppercase text-rfci-black/50">
                    {other.subtitle}
                  </span>
                </a>
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

// ---------------------------------------------------------------------------
// Scroll-locked parallax inspiration gallery
// ---------------------------------------------------------------------------

// Editorial placements — each image has a starting position within the
// viewport (startTop as vh%) so they're immediately visible on entry,
// then each drifts upward at its own speed until it exits the top.
const PLACEMENTS = [
  { left: '5%',  startTop: 42, w: 'w-[38%] md:w-[28%]', aspect: 'aspect-[3/4]', speed: 0.45 },
  { left: '55%', startTop: 52, w: 'w-[40%] md:w-[30%]', aspect: 'aspect-[4/3]', speed: 0.6 },
  { left: '25%', startTop: 67, w: 'w-[32%] md:w-[22%]', aspect: 'aspect-square', speed: 0.35 },
  { left: '62%', startTop: 77, w: 'w-[34%] md:w-[24%]', aspect: 'aspect-[3/4]', speed: 0.5 },
  { left: '8%',  startTop: 87, w: 'w-[36%] md:w-[26%]', aspect: 'aspect-[4/3]', speed: 0.65 },
]

function InspirationParallax({ title, accentColor }: { title: string; accentColor?: string }) {
  const galleryImages = useMemo(
    () => {
      const norm = title.toLowerCase()
      return PROJECTS_STATIC.filter((p) => {
        const pName = p.flooringTypeName.toLowerCase()
        return pName === norm || norm.startsWith(pName) || pName.startsWith(norm)
      }).slice(0, PLACEMENTS.length)
    },
    [title],
  )

  const wrapperRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number>(0)

  const onScroll = useCallback(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const rect = wrapper.getBoundingClientRect()
    const viewH = window.innerHeight
    const scrollable = wrapper.offsetHeight - viewH
    if (scrollable <= 0) return
    const progress = Math.min(1, Math.max(0, -rect.top / scrollable))

    imageRefs.current.forEach((el, i) => {
      if (!el) return
      const { startTop, speed } = PLACEMENTS[i]
      // Start at its natural position (startTop vh), fly upward as progress increases
      const startY = (startTop / 100) * viewH
      const travel = viewH * 0.7 * speed
      const y = startY - progress * travel
      el.style.transform = `translateY(${y}px)`
    })
  }, [])

  useEffect(() => {
    if (galleryImages.length === 0) return
    const tick = () => {
      onScroll()
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [onScroll, galleryImages.length])

  if (galleryImages.length === 0) return null

  return (
    <section
      ref={wrapperRef}
      className="relative"
      style={{ height: '180vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-rfci-cream">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-rfci-cream via-rfci-cream/80 to-transparent pt-16 pb-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="w-10 h-[3px] mb-4" style={{ backgroundColor: accentColor ?? '#9CA3AF' }} />
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">In Action</div>
            <h2 className="text-4xl md:text-5xl font-display font-light">
              See <span className="font-semibold">{title}</span> in real spaces
            </h2>
          </div>
        </div>

        {/* Scattered editorial images — centered via calc to match max-w-7xl container */}
        <div className="absolute inset-0" style={{ left: 'max(1.5rem, calc((100% - 80rem) / 2 + 1.5rem))', right: 'max(1.5rem, calc((100% - 80rem) / 2 + 1.5rem))' }}>
          {galleryImages.map((project, i) => {
            const p = PLACEMENTS[i]
            return (
              <div
                key={project.title}
                ref={(el) => { imageRefs.current[i] = el }}
                className={`absolute ${p.w} will-change-transform`}
                style={{ left: p.left, top: 0 }}
              >
                <div className={`${p.aspect} overflow-hidden shadow-lg`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom gradient + CTA */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-rfci-cream via-rfci-cream/80 to-transparent pb-10 pt-28 text-center">
          <a
            href="/inspiration"
            className="inline-flex items-center gap-2 text-rfci-blue font-display font-medium text-lg hover:gap-3 transition-all group"
          >
            Browse the Inspiration Gallery
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  )
}
