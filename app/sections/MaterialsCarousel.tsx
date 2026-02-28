'use client'

import { useRef, useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft, ArrowsLeftRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { TAG_STYLES, mediaUrl } from '../_lib/transforms'

type FlooringTypeDoc = {
  title: string
  subtitle: string
  description: string
  accentColor: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tags?: Array<{ label: string; variant: string; id?: any }>
  order?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
}

const FLOORING_STATIC: FlooringTypeDoc[] = [
  {
    title: 'Flexible LVT',
    subtitle: 'Luxury Vinyl Tile · Planks',
    description: 'The leading resilient flooring product in North America. Available in tile and plank formats with high-definition wood and stone visuals. Waterproof, dimensionally stable, and specified across residential and commercial projects for its combination of aesthetics and performance.',
    accentColor: '#9CA3AF',
    tags: [
      { label: 'Waterproof', variant: 'green' },
      { label: 'High Traffic', variant: 'tan' },
      { label: 'Easy Install', variant: 'gray' },
    ],
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC · WPC · Multilayer',
    description: 'A multilayer construction with a rigid mineral or polymer core. Dimensionally stable across temperature fluctuations and resistant to indentation under heavy static loads. Ideal for challenging substrates and environments where subfloor preparation is limited.',
    accentColor: '#78909C',
    tags: [
      { label: 'Waterproof', variant: 'green' },
      { label: 'Dimensionally Stable', variant: 'tan' },
      { label: 'ASSURE Eligible', variant: 'gray' },
    ],
  },
  {
    title: 'Heterogeneous Sheet Vinyl',
    subtitle: 'Multi-layer · Printed Design',
    description: 'A multi-layer sheet product with a rotogravure-printed design layer that enables broad visual customization. Heat-welded seams create a hygienic, monolithic surface. Widely specified in healthcare, education, and commercial environments requiring seamless installation.',
    accentColor: '#B0C4DE',
    tags: [
      { label: 'Hygienic', variant: 'green' },
      { label: 'Seamless', variant: 'tan' },
      { label: 'Design Versatility', variant: 'gray' },
    ],
  },
  {
    title: 'Homogeneous Sheet Vinyl',
    subtitle: 'Through-body · Single Layer',
    description: 'Color and pattern run through the full thickness of the product, delivering consistent appearance as the floor wears. Through-body construction means the surface can be restored and maintained over decades. The standard for hospitals, laboratories, and cleanroom environments.',
    accentColor: '#90A4AE',
    tags: [
      { label: 'Hygienic', variant: 'green' },
      { label: 'Through-body Color', variant: 'tan' },
      { label: 'Restorable Surface', variant: 'gray' },
    ],
  },
  {
    title: 'Solid Vinyl Tile',
    subtitle: 'SVT · Flexible Tiles',
    description: 'Through-color vinyl tiles that perform under heavy rolling loads, making them a preferred choice in healthcare and institutional settings. No-wax formulations reduce lifecycle maintenance costs. Individual tiles can be replaced without disturbing adjacent flooring.',
    accentColor: '#A5B4BC',
    tags: [
      { label: 'Rolling Loads', variant: 'green' },
      { label: 'No-Wax', variant: 'tan' },
      { label: 'Tile Replacement', variant: 'gray' },
    ],
  },
  {
    title: 'Vinyl Composition Tile',
    subtitle: 'VCT · Commercial Standard',
    description: 'Made from vinyl resins and limestone, VCT has been a commercial flooring staple for decades. Cost-effective at scale, durable under heavy foot traffic, and available in a wide color palette for custom patterns. Requires periodic waxing to maintain finish and appearance.',
    accentColor: '#CFD8DC',
    tags: [
      { label: 'Cost Effective', variant: 'green' },
      { label: 'Durable', variant: 'tan' },
      { label: 'Custom Patterns', variant: 'gray' },
    ],
  },
  {
    title: 'Rubber',
    subtitle: 'Vulcanized · Recycled Content',
    description: 'Virtually indestructible, quiet, and warm underfoot. Rubber flooring delivers superior slip resistance, acoustic performance, and comfort in high-demand environments. Frequently manufactured with recycled content and specified for healthcare, transit, fitness, and education facilities.',
    accentColor: '#D4A574',
    tags: [
      { label: 'Slip Resistant', variant: 'green' },
      { label: 'Acoustic', variant: 'tan' },
      { label: 'Recycled Content', variant: 'gray' },
    ],
  },
  {
    title: 'Linoleum',
    subtitle: 'Natural · Bio-based',
    description: 'Manufactured from linseed oil, cork, wood flour, limestone, and tree resins—natural ingredients used in flooring for over 150 years. Inherently antimicrobial, biodegradable, and carbon neutral. Color runs through the full thickness for long-term durability and wear performance.',
    accentColor: '#8FBC8F',
    tags: [
      { label: 'Bio-based', variant: 'green' },
      { label: 'Carbon Neutral', variant: 'green' },
      { label: 'Antimicrobial', variant: 'gray' },
    ],
  },
  {
    title: 'Cork',
    subtitle: 'Natural · Acoustic',
    description: 'Harvested from cork oak bark without cutting the tree, cork is a fully renewable resource. Naturally hypoallergenic, resistant to mold and mildew, and provides excellent thermal and acoustic insulation. Specified for residential and light commercial applications where comfort and sustainability matter.',
    accentColor: '#C4A882',
    tags: [
      { label: 'Renewable', variant: 'green' },
      { label: 'Hypoallergenic', variant: 'tan' },
      { label: 'Acoustic', variant: 'gray' },
    ],
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MaterialsCarousel({ flooringTypes }: { flooringTypes: any[] }) {
  const displayTypes: FlooringTypeDoc[] = flooringTypes?.length ? flooringTypes : FLOORING_STATIC
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
      {/* Intentionally wider than max-w-7xl: carousel bleeds to viewport edge on scroll,
          so a wider container improves the visual affordance for how many cards exist. */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionReveal className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4">The Categories</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight">
              The full range of <br /><span className="font-semibold text-rfci-blue">resilient flooring.</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              aria-label="Scroll left"
              onClick={() => scrollCarousel('left')}
              disabled={carouselProgress <= 0.01}
              className="w-14 h-14 border border-rfci-light-gray flex items-center justify-center hover:bg-rfci-white hover:border-rfci-black transition-all group disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-rfci-light-gray"
            >
              <ArrowLeft className="w-5 h-5 group-hover:group-enabled:-translate-x-1 transition-transform" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollCarousel('right')}
              disabled={carouselProgress >= 0.99}
              className="w-14 h-14 border border-rfci-light-gray flex items-center justify-center hover:bg-rfci-white hover:border-rfci-black transition-all group disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-rfci-light-gray"
            >
              <ArrowRight className="w-5 h-5 group-hover:group-enabled:translate-x-1 transition-transform" />
            </button>
          </div>
        </SectionReveal>

        <div className="flex items-center gap-2 md:hidden text-rfci-black/50 text-xs font-bold uppercase tracking-widest mb-6 px-6">
          <ArrowsLeftRight className="w-4 h-4 animate-pulse" /> Swipe to explore
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 pb-12 pt-4 -mt-4 -mx-6 px-6 md:-mx-12 md:px-12"
        >
          {displayTypes.map((type, idx) => {
            const tags = (type.tags ?? []).map(tag => ({
              label: tag.label,
              ...(TAG_STYLES[tag.variant] ?? TAG_STYLES.gray),
            }))

            return (
              <SectionReveal key={idx} direction="right" delay={idx * 0.08} className="snap-start shrink-0 w-[85vw] sm:w-[360px] md:w-[440px] group">
                <div className="bg-rfci-white p-8 md:p-10 h-[500px] md:h-[550px] flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(1,100,219,0.1)] hover:-translate-y-2 border border-black/5 hover:border-rfci-blue/30">
                  {/* Blue line reveal at top */}
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-rfci-blue transition-all duration-500 z-10" />

                  <div className="flex flex-col items-start mb-8 relative z-10 w-[80%]">
                    <h3 className="text-4xl md:text-5xl font-display font-light tracking-tight text-rfci-black mb-3">{type.title}</h3>
                    <span className="text-label font-bold tracking-widest uppercase text-rfci-black/60">{type.subtitle}</span>
                  </div>

                  <p className="text-rfci-black/60 mb-10 relative z-10 w-[85%] leading-relaxed font-light">
                    {type.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 relative z-10 w-[85%]">
                    {tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-label font-bold uppercase tracking-widest ${tag.style}`}>
                        {tag.dot && <span className={`w-1.5 h-1.5 rounded-full ${tag.dot}`} />}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Abstract Material Graphic */}
                  <div
                    className="absolute -right-20 -bottom-32 w-80 h-[120%] z-0 transform rotate-[15deg] shadow-[0_0_40px_rgba(0,0,0,0.1)] border-l-[12px] border-t-[12px] border-white/80 group-hover:rotate-[10deg] group-hover:scale-105 transition-all duration-700 ease-out"
                    style={{ backgroundColor: type.accentColor ?? '#9CA3AF' }}
                  >
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-black/10" />
                  </div>

                  <div className="mt-auto relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-rfci-black py-3.5 px-8 text-sm font-semibold shadow-sm hover:bg-rfci-black hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-200 flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Show uploaded image if present */}
                  {type.image && (
                    <div className="absolute inset-0 z-0 opacity-10">
                      <img src={mediaUrl(type.image)} alt={type.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </SectionReveal>
            )
          })}
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
