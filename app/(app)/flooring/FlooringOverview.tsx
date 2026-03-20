'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { SplitPageHero } from '../../_components/SplitPageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { TAG_STYLES, mediaUrl } from '../../_lib/transforms'
import { FLOORING_TYPES } from '../../_data/flooring-types'

// Build a lookup of productImage by slug from the shared data
const PRODUCT_IMAGES: Record<string, string> = Object.fromEntries(
  FLOORING_TYPES.filter(t => t.productImage && t.slug).map(t => [t.slug!, t.productImage!])
)

type FlooringTypeDoc = {
  title: string
  subtitle: string
  description: string
  accentColor: string
  slug?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tags?: Array<{ label: string; variant: string; id?: any }>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
  order?: number
}

const FLOORING_STATIC: FlooringTypeDoc[] = [
  {
    title: 'Flexible LVT',
    subtitle: 'Luxury Vinyl Tile \u00B7 Planks',
    slug: 'flexible-lvt',
    description: 'The leading resilient flooring product in North America. Available in tile and plank formats with high-definition wood and stone visuals. Waterproof, dimensionally stable, and specified across residential and commercial projects.',
    accentColor: '#9CA3AF',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'High Traffic', variant: 'tan' }, { label: 'Easy Install', variant: 'gray' }],
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC \u00B7 WPC \u00B7 Multilayer',
    slug: 'rigid-core',
    description: 'A multilayer construction with a rigid mineral or polymer core. Dimensionally stable across temperature fluctuations and resistant to indentation under heavy static loads.',
    accentColor: '#78909C',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'Dimensionally Stable', variant: 'tan' }, { label: 'ASSURE Eligible', variant: 'gray' }],
  },
  {
    title: 'Heterogeneous Sheet Vinyl',
    subtitle: 'Multi-layer \u00B7 Printed Design',
    slug: 'heterogeneous-sheet-vinyl',
    description: 'A multi-layer sheet product with a rotogravure-printed design layer. Heat-welded seams create a hygienic, monolithic surface for healthcare, education, and commercial environments.',
    accentColor: '#B0C4DE',
    tags: [{ label: 'Hygienic', variant: 'green' }, { label: 'Seamless', variant: 'tan' }, { label: 'Design Versatility', variant: 'gray' }],
  },
  {
    title: 'Homogeneous Sheet Vinyl',
    subtitle: 'Through-body \u00B7 Single Layer',
    slug: 'homogeneous-sheet-vinyl',
    description: 'Color and pattern run through the full thickness. The surface can be restored and maintained over decades. The standard for hospitals, laboratories, and cleanroom environments.',
    accentColor: '#90A4AE',
    tags: [{ label: 'Hygienic', variant: 'green' }, { label: 'Through-body Color', variant: 'tan' }, { label: 'Restorable Surface', variant: 'gray' }],
  },
  {
    title: 'Solid Vinyl Tile',
    subtitle: 'SVT \u00B7 Flexible Tiles',
    slug: 'solid-vinyl-tile',
    description: 'Through-color vinyl tiles that perform under heavy rolling loads. No-wax formulations reduce lifecycle maintenance costs. Individual tiles can be replaced without disturbing adjacent flooring.',
    accentColor: '#A5B4BC',
    tags: [{ label: 'Rolling Loads', variant: 'green' }, { label: 'No-Wax', variant: 'tan' }, { label: 'Tile Replacement', variant: 'gray' }],
  },
  {
    title: 'Vinyl Composition Tile',
    subtitle: 'VCT \u00B7 Commercial Standard',
    slug: 'vinyl-composition-tile',
    description: 'Made from vinyl resins and limestone, VCT has been a commercial flooring staple for decades. Cost-effective at scale, durable under heavy foot traffic, and available in a wide color palette.',
    accentColor: '#CFD8DC',
    tags: [{ label: 'Cost Effective', variant: 'green' }, { label: 'Durable', variant: 'tan' }, { label: 'Custom Patterns', variant: 'gray' }],
  },
  {
    title: 'Rubber',
    subtitle: 'Vulcanized \u00B7 Recycled Content',
    slug: 'rubber',
    description: 'Virtually indestructible, quiet, and warm underfoot. Superior slip resistance, acoustic performance, and comfort in high-demand environments.',
    accentColor: '#D4A574',
    tags: [{ label: 'Slip Resistant', variant: 'green' }, { label: 'Acoustic', variant: 'tan' }, { label: 'Recycled Content', variant: 'gray' }],
  },
  {
    title: 'Linoleum',
    subtitle: 'Natural \u00B7 Bio-based',
    slug: 'linoleum',
    description: 'Manufactured from linseed oil, cork, wood flour, limestone, and tree resins. Inherently antimicrobial, biodegradable, and carbon neutral.',
    accentColor: '#8FBC8F',
    tags: [{ label: 'Bio-based', variant: 'green' }, { label: 'Carbon Neutral', variant: 'green' }, { label: 'Antimicrobial', variant: 'gray' }],
  },
  {
    title: 'Cork',
    subtitle: 'Natural \u00B7 Acoustic',
    slug: 'cork',
    description: 'Harvested from cork oak bark without cutting the tree. Naturally hypoallergenic, resistant to mold and mildew, and provides excellent thermal and acoustic insulation.',
    accentColor: '#C4A882',
    tags: [{ label: 'Renewable', variant: 'green' }, { label: 'Hypoallergenic', variant: 'tan' }, { label: 'Acoustic', variant: 'gray' }],
  },
]

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function getTags(type: FlooringTypeDoc) {
  return (type.tags ?? []).map(tag => ({
    label: tag.label,
    ...(TAG_STYLES[tag.variant] ?? TAG_STYLES.gray),
  }))
}

function getHref(type: FlooringTypeDoc) {
  return `/flooring/${type.slug || slugify(type.title)}`
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
      />

      <section className="py-16 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTypes.map((type, idx) => {
              const tags = getTags(type)
              const href = getHref(type)

              const productImage = PRODUCT_IMAGES[type.slug || slugify(type.title)]

              return (
                <SectionReveal key={type.title} delay={idx * 0.05}>
                  <a href={href} className="group block">
                    <div className="bg-rfci-white p-8 md:p-10 h-[420px] flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(1,100,219,0.1)] border border-black/5 hover:border-rfci-blue/20">
                      {/* Blue line reveal at top */}
                      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-rfci-blue transition-all duration-500 z-10" />

                      <div className="flex flex-col items-start mb-4 relative z-10 w-[75%]">
                        <h2 className="text-2xl md:text-3xl font-display font-light tracking-tight text-rfci-black mb-2">{type.title}</h2>
                        <span className="text-label font-bold tracking-widest uppercase text-rfci-black/60">{type.subtitle}</span>
                      </div>

                      <p className="text-rfci-black/60 relative z-10 w-[80%] leading-relaxed font-light line-clamp-4 mb-4 text-sm">
                        {type.description}
                      </p>

                      <div className="flex flex-wrap gap-2 relative z-10 w-[80%]">
                        {tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-label font-bold uppercase tracking-widest ${tag.style}`}>
                            {tag.dot && <span className={`w-1.5 h-1.5 rounded-full ${tag.dot}`} />}
                            {tag.label}
                          </span>
                        ))}
                      </div>

                      {/* Product image or accent color panel */}
                      {productImage ? (
                        <img
                          src={productImage}
                          alt={type.title}
                          className="absolute top-0 -right-6 h-[65%] w-auto object-contain z-0 group-hover:scale-105 group-hover:translate-y-1 transition-all duration-700 ease-out drop-shadow-2xl"
                        />
                      ) : (
                        <div
                          className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                          style={{ backgroundColor: type.accentColor ?? '#9CA3AF' }}
                        />
                      )}

                      {/* CTA — always visible */}
                      <div className="mt-auto pt-4 relative z-10">
                        <span className="bg-rfci-white text-rfci-black py-3 px-6 text-sm font-semibold border border-black/10 group-hover:bg-rfci-blue group-hover:text-white group-hover:border-rfci-blue transition-all duration-200 inline-flex items-center gap-2">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
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
