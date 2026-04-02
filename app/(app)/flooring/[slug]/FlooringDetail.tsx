'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { ArrowLeft, CheckCircle, ArrowUpRight, X, MagnifyingGlassPlus } from '@phosphor-icons/react'
import { PageLayout } from '../../../_components/PageLayout'
import { SectionReveal } from '../../../_components/SectionReveal'
import { mediaUrl } from '../../../_lib/transforms'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FlooringDetail({ flooringType: ft, otherTypes }: { flooringType: any; otherTypes: any[] }) {
  const heroImg = mediaUrl(ft.heroImage) || mediaUrl(ft.image)
  const advantages: string[] = ft.advantages ?? []
  const composition: string = ft.composition ?? ''
  const installation: string = ft.installation ?? ''
  const diagrams: Array<{ url: string; label: string }> = ft.diagrams ?? []
  const [enlargedDiagram, setEnlargedDiagram] = useState<{ url: string; label: string } | null>(null)

  useEffect(() => {
    if (!enlargedDiagram) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setEnlargedDiagram(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [enlargedDiagram])

  // Build dynamic section list based on available content
  const sections = useMemo(() => {
    const s: Array<{ id: string; label: string }> = []
    if (composition) s.push({ id: 'composition', label: 'Composition' })
    if (diagrams.length > 0) s.push({ id: 'construction', label: 'Construction' })
    if (advantages.length > 0) s.push({ id: 'advantages', label: 'Advantages' })
    if (installation) s.push({ id: 'installation', label: 'Installation' })
    return s
  }, [composition, diagrams.length, advantages.length, installation])

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
                  <div
                    className="flex flex-col items-center gap-4 cursor-zoom-in group"
                    onClick={() => setEnlargedDiagram(diagram)}
                    role="button"
                    aria-label={`Enlarge ${diagram.label} diagram`}
                  >
                    <div className="relative w-full">
                      <img
                        src={diagram.url}
                        alt={`${ft.title} ${diagram.label} construction diagram`}
                        className="w-full object-contain group-hover:opacity-90 transition-opacity duration-200"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <MagnifyingGlassPlus className="w-4 h-4 text-rfci-black/60" />
                      </div>
                    </div>
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
                  The key benefits that make {ft.title} a trusted choice across commercial and institutional environments.
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

      {/* Inspiration Gallery CTA */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <div className="w-10 h-[3px] mb-6 mx-auto" style={{ backgroundColor: ft.accentColor ?? '#9CA3AF' }} />
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              See it in <span className="font-semibold">real spaces</span>
            </h2>
            <p className="text-rfci-black/60 text-lg mb-10 max-w-xl mx-auto font-light">
              Explore our inspiration gallery to see resilient flooring installed in real commercial and residential environments.
            </p>
            <a
              href="/inspiration"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200 group"
            >
              Browse the Inspiration Gallery
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Diagram Lightbox */}
      {enlargedDiagram && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 md:p-16"
          onClick={() => setEnlargedDiagram(null)}
        >
          <div className="relative max-w-4xl w-full bg-white p-8 md:p-12 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setEnlargedDiagram(null)}
              className="absolute top-4 right-4 flex items-center gap-1.5 text-rfci-black/40 hover:text-rfci-black transition-colors text-sm font-semibold"
            >
              Close <X className="w-4 h-4" />
            </button>
            <img
              src={enlargedDiagram.url}
              alt={enlargedDiagram.label}
              className="w-full object-contain max-h-[75vh]"
            />
            {enlargedDiagram.label && (
              <div className="text-center mt-6 text-label font-bold tracking-widest uppercase text-rfci-black/40">
                {enlargedDiagram.label}
              </div>
            )}
          </div>
        </div>
      )}

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
                  className="group flex-shrink-0 w-64 bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 p-6 flex items-center justify-center"
                >
                  <h3 className="text-xl md:text-2xl font-display font-light group-hover:text-rfci-blue transition-colors text-center">
                    {other.title}
                  </h3>
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
  accentColor?: string
}
