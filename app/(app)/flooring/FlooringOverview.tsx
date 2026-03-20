'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { SplitPageHero } from '../../_components/SplitPageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { FLOORING_TYPES, type FlooringType } from '../../_data/flooring-types'

type FlooringTypeDoc = {
  title: string
  subtitle: string
  description: string
  accentColor: string
  slug?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
  order?: number
}

const FLOORING_STATIC: FlooringTypeDoc[] = [
  {
    title: 'Flexible LVT',
    subtitle: 'Luxury Vinyl Tile \u00B7 Planks',
    slug: 'flexible-lvt',
    description: 'The leading resilient flooring product in North America. Available in tile and plank formats with high-definition wood and stone visuals. Water resistant, dimensionally stable, and specified across residential and commercial projects.',
    accentColor: '#9CA3AF',
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC \u00B7 WPC \u00B7 Multilayer',
    slug: 'rigid-core',
    description: 'A multilayer construction with a rigid mineral or polymer core. Dimensionally stable across temperature fluctuations and resistant to indentation under heavy static loads. Waterproof performance in moisture-prone environments.',
    accentColor: '#78909C',
  },
  {
    title: 'Sheet Vinyl',
    subtitle: 'Heterogeneous \u00B7 Homogeneous',
    slug: 'sheet-vinyl',
    description: 'Available in heterogeneous (multi-layer, printed design) and homogeneous (through-body, single-layer) constructions. Heat-welded seams create a hygienic, seamless surface for healthcare, education, residential, and commercial environments.',
    accentColor: '#B0C4DE',
  },
  {
    title: 'Solid Vinyl Tile',
    subtitle: 'SVT \u00B7 Flexible Tiles',
    slug: 'solid-vinyl-tile',
    description: 'Through-color vinyl tiles that perform under heavy rolling loads. No-wax formulations reduce lifecycle maintenance costs. Individual tiles can be replaced without disturbing adjacent flooring.',
    accentColor: '#A5B4BC',
  },
  {
    title: 'Vinyl Composition Tile',
    subtitle: 'VCT \u00B7 Commercial Standard',
    slug: 'vinyl-composition-tile',
    description: 'Made from vinyl resins and limestone, VCT has been a commercial flooring staple for decades. Cost-effective at scale, durable under heavy foot traffic, and available in a wide color palette.',
    accentColor: '#CFD8DC',
  },
  {
    title: 'Rubber',
    subtitle: 'Vulcanized \u00B7 Recycled Content',
    slug: 'rubber',
    description: 'Virtually indestructible, quiet, and warm underfoot. Superior slip resistance, acoustic performance, and comfort in high-demand environments.',
    accentColor: '#D4A574',
  },
  {
    title: 'Linoleum',
    subtitle: 'Natural \u00B7 Bio-based',
    slug: 'linoleum',
    description: 'Manufactured from linseed oil, cork, wood flour, limestone, and tree resins. Biodegradable, with naturally low embodied carbon and documented antibacterial properties.',
    accentColor: '#8FBC8F',
  },
  {
    title: 'Cork',
    subtitle: 'Natural \u00B7 Acoustic',
    slug: 'cork',
    description: 'Harvested from cork oak bark without cutting the tree. Hypoallergenic, resistant to mold and mildew, and provides excellent thermal and acoustic insulation.',
    accentColor: '#C4A882',
  },
]

// Build image lookup — use carouselImage first, fall back to productImage
const CARD_IMAGES: Record<string, string> = Object.fromEntries(
  FLOORING_TYPES.filter(t => t.slug && (t.carouselImage || t.productImage)).map(t => [
    t.slug!,
    t.carouselImage ?? t.productImage!,
  ])
)

// Build tags lookup from canonical FLOORING_TYPES data
const CARD_TAGS: Record<string, Array<{ label: string; variant: string }>> = Object.fromEntries(
  FLOORING_TYPES.filter(t => t.slug && t.tags?.length).map(t => [t.slug!, t.tags])
)

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FlooringOverview({ flooringTypes, pageSettings }: { flooringTypes: any[]; pageSettings?: any }) {
  const displayTypes: FlooringTypeDoc[] = flooringTypes?.length ? flooringTypes : FLOORING_STATIC

  return (
    <PageLayout>
      <SplitPageHero
        label="Flooring Types"
        heading={pageSettings?.heroHeading || <>The full range of <span className="font-semibold text-rfci-blue">resilient flooring.</span></>}
        subheading={pageSettings?.heroSubheading || 'From luxury vinyl tile to linoleum, rubber to cork—resilient flooring offers the widest range of performance, aesthetics, and sustainability options in the hard surface category.'}
        photo={{ src: '/images/inspiration/applications/homes/EL04-RS.jpg', alt: 'Resilient flooring in a modern kitchen' }}
      />

      <section className="py-16 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTypes.map((type, idx) => {
              const slug = type.slug || slugify(type.title)
              const href = `/flooring/${slug}`
              const cardImage = CARD_IMAGES[slug]
              const tags = CARD_TAGS[slug] ?? []

              return (
                <SectionReveal key={type.title} delay={(idx % 3) * 0.06}>
                  <a href={href} className="group block h-full">
                    <div className="relative aspect-[4/5] overflow-hidden border border-black/5 hover:border-rfci-blue/20 hover:shadow-[0_20px_60px_rgba(1,100,219,0.08)] transition-all duration-500">
                      {/* Background image */}
                      {cardImage ? (
                        <img
                          src={cardImage}
                          alt={type.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: type.accentColor ?? '#9CA3AF' }}
                        />
                      )}

                      {/* Gradient overlay — base + hover layer for smooth transition */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Content — title at bottom, description slides in below on hover */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                        {/* Title + chips — always visible */}
                        <h3 className="text-2xl md:text-3xl font-display font-light text-white leading-tight">
                          {type.title}
                        </h3>
                        {tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {tags.map((tag: { label: string }, tagIdx: number) => (
                              <span key={tagIdx} className="inline-flex items-center px-2.5 py-1 text-label font-bold uppercase tracking-widest bg-rfci-cream text-rfci-black/70">
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Description + CTA — slides in BELOW the title on hover */}
                        <div className="hidden md:block md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                          <p className="text-white/80 text-sm leading-relaxed font-light line-clamp-3 mt-4">
                            {type.description}
                          </p>
                          <span className="inline-flex items-center gap-2 bg-white text-rfci-black px-8 py-3.5 text-sm font-semibold hover:bg-rfci-blue hover:text-white transition-colors duration-200 mt-4">
                            Learn More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
