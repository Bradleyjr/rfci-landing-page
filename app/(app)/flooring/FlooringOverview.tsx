'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { TAG_STYLES, mediaUrl } from '../../_lib/transforms'

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FlooringOverview({ flooringTypes }: { flooringTypes: any[] }) {
  const displayTypes: FlooringTypeDoc[] = flooringTypes?.length ? flooringTypes : FLOORING_STATIC

  return (
    <PageLayout>
      <PageHero
        label="Flooring Types"
        heading={<>The full range of <span className="font-semibold text-rfci-blue">resilient flooring.</span></>}
        subheading="From luxury vinyl tile to linoleum, rubber to cork—resilient flooring offers the widest range of performance, aesthetics, and sustainability options in the hard surface category."
      />

      {/* Flooring Type Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayTypes.map((type, idx) => {
              const tags = (type.tags ?? []).map(tag => ({
                label: tag.label,
                ...(TAG_STYLES[tag.variant] ?? TAG_STYLES.gray),
              }))
              const href = `/flooring/${type.slug || slugify(type.title)}`
              const imgSrc = mediaUrl(type.image)

              return (
                <SectionReveal key={idx} delay={idx * 0.06}>
                  <a href={href} className="group block h-full">
                    <div className="bg-rfci-white border border-black/5 hover:border-rfci-blue/30 hover:shadow-[0_20px_60px_rgba(1,100,219,0.08)] transition-all duration-500 h-full flex flex-col overflow-hidden relative">
                      {/* Blue line reveal at top */}
                      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-rfci-blue transition-all duration-500 z-10" />

                      {/* Color accent bar */}
                      <div className="h-2" style={{ backgroundColor: type.accentColor ?? '#9CA3AF' }} />

                      <div className="p-8 md:p-10 flex flex-col flex-1">
                        <h2 className="text-2xl md:text-3xl font-display font-light tracking-tight text-rfci-black mb-1 group-hover:text-rfci-blue transition-colors">
                          {type.title}
                        </h2>
                        <span className="text-label font-bold tracking-widest uppercase text-rfci-black/60 mb-4">
                          {type.subtitle}
                        </span>

                        <p className="text-rfci-black/60 leading-relaxed font-light mb-6 flex-1">
                          {type.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label font-bold uppercase tracking-widest ${tag.style}`}>
                              {tag.dot && <span className={`w-1.5 h-1.5 rounded-full ${tag.dot}`} />}
                              {tag.label}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue group-hover:gap-3 transition-all mt-auto">
                          Explore {type.title} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>

                      {/* Background image if present */}
                      {imgSrc && (
                        <div className="absolute inset-0 z-0 opacity-5">
                          <img src={imgSrc} alt={type.title} className="w-full h-full object-cover" />
                        </div>
                      )}
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
