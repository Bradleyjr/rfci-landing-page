'use client'

import { useRef, useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft, ArrowsLeftRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { FLOORING_TYPES } from '../_data/flooring-types'
import { SITE_SETTINGS } from '../_data/site-settings'

function getSlug(title: string, slug?: string): string {
  return slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export function MaterialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [carouselProgress, setCarouselProgress] = useState(0)

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll > 0) setCarouselProgress(el.scrollLeft / maxScroll)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' })
    }
  }

  return (
    <section id="flooring-types" className="py-28 md:py-32 bg-white overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">The Categories</div>
            <h2 className="text-4xl md:text-5xl font-display font-light leading-tight">
              {SITE_SETTINGS.materialsHeading}
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              aria-label="Scroll left"
              onClick={() => scrollCarousel('left')}
              disabled={carouselProgress <= 0.01}
              className="w-14 h-14 border border-rfci-light-gray flex items-center justify-center hover:bg-rfci-white hover:border-rfci-black transition-all duration-200 group disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-rfci-light-gray"
            >
              <ArrowLeft className="w-5 h-5 group-hover:group-enabled:-translate-x-1 transition-transform duration-200" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollCarousel('right')}
              disabled={carouselProgress >= 0.99}
              className="w-14 h-14 border border-rfci-light-gray flex items-center justify-center hover:bg-rfci-white hover:border-rfci-black transition-all duration-200 group disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-rfci-light-gray"
            >
              <ArrowRight className="w-5 h-5 group-hover:group-enabled:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </SectionReveal>

        <div className="flex items-center gap-2 md:hidden text-rfci-black/50 text-xs font-bold uppercase tracking-widest mb-6">
          <ArrowsLeftRight className="w-4 h-4 animate-pulse" /> Swipe to explore
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 md:gap-6 pb-12 pt-4 -mt-4"
          >
            {FLOORING_TYPES.map((type, idx) => {
              const slug = getSlug(type.title, type.slug)
              const image = type.carouselImage ?? type.productImage

              return (
                <SectionReveal
                  key={idx}
                  direction="right"
                  delay={idx * 0.06}
                  className="snap-start shrink-0 w-[80vw] sm:w-[340px] md:w-[400px] group"
                >
                  <a
                    href={`/flooring/${slug}`}
                    className="block relative overflow-hidden aspect-[4/5] border border-black/5 hover:border-rfci-blue/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(1,100,219,0.08)]"
                  >
                    {/* Product texture/swatch as background */}
                    {image ? (
                      <img
                        src={image}
                        alt={`${type.title} flooring`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      /* Fallback: solid accent color when no image is available */
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: type.accentColor ?? '#9CA3AF' }}
                      />
                    )}

                    {/* Gradient overlay — base + hover layer for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Bottom content — title at bottom, description slides in below on hover */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                      {/* Title + chips — always visible */}
                      <h3 className="text-2xl md:text-3xl font-display font-light text-white leading-tight">
                        {type.title}
                      </h3>
                      {type.tags && type.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {type.tags.map((tag: { label: string; variant: string }, tagIdx: number) => (
                            <span key={tagIdx} className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-rfci-cream text-rfci-black/70">
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Description + CTA — slides in BELOW the title on hover */}
                      <div className="md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                        <p className="text-white/80 text-sm leading-relaxed font-light line-clamp-2 mt-4">
                          {type.description}
                        </p>
                        <span className="inline-flex items-center gap-2 bg-white text-rfci-black px-6 py-3 text-sm font-semibold hover:bg-rfci-blue hover:text-white transition-colors duration-200 mt-4">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </SectionReveal>
              )
            })}
          </div>

          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Scroll progress bar */}
        <div className="mt-8 h-[2px] bg-rfci-light-gray/30 max-w-md mx-auto rounded-full overflow-hidden">
          <div
            className="h-full bg-rfci-blue rounded-full transition-all duration-150 ease-out"
            style={{ width: `${Math.max(carouselProgress * 100, 2)}%` }}
          />
        </div>
      </div>
    </section>
  )
}
