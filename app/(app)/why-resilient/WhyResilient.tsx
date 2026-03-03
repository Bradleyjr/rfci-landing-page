'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { HistoryStackedReveal } from './HistoryStackedReveal'

const HISTORY_MILESTONES = [
  { year: '1845', title: 'Linoleum Invented', description: 'Frederick Walton patents linoleum in England, creating the first true resilient floor covering from linseed oil and natural materials.' },
  { year: '1872', title: 'US Manufacturing Begins', description: 'The American Linoleum Manufacturing Company opens in Staten Island, New York, launching domestic resilient flooring production.' },
  { year: '1933', title: 'Vinyl Composition Tile', description: 'VCT is introduced as a durable, affordable alternative for commercial spaces, quickly becoming the standard in schools and hospitals.' },
  { year: '1950s', title: 'The Vinyl Boom', description: 'Post-war construction drives massive adoption of sheet vinyl and VCT across residential and commercial markets nationwide.' },
  { year: '1960s', title: 'Cushioned Vinyl', description: 'Cushion-backed sheet vinyl delivers improved comfort underfoot and sound absorption, expanding resilient flooring into new applications.' },
  { year: 'Today', title: '#1 in North America', description: 'Resilient flooring accounts for 65% of all hard surface flooring installed in North America, driven by LVT innovation and sustainability leadership.' },
]

const BENEFITS = [
  { number: '01', keyword: 'MAINTAIN', title: 'Easy Maintenance', description: 'Simple cleaning protocols and minimal upkeep keep lifecycle costs low and surfaces looking new for years. No waxing, no sealing, no refinishing—just routine cleaning.' },
  { number: '02', keyword: 'PROTECT', title: 'Water Resistance', description: 'Engineered to handle moisture-prone environments—from kitchens and baths to healthcare and hospitality. Unlike hardwood or laminate, resilient flooring won\u2019t swell, warp, or delaminate from water exposure.' },
  { number: '03', keyword: 'VALUE', title: 'Cost Effective', description: 'Competitive installed cost paired with a long service life delivers strong value across the full lifecycle. When factoring in installation, maintenance, and replacement, resilient flooring consistently outperforms alternatives.' },
  { number: '04', keyword: 'DESIGN', title: 'Design Versatility', description: 'Realistic wood, stone, and custom visuals across tile, plank, and sheet formats for any design vision. Advanced printing and embossing technologies make it nearly indistinguishable from natural materials.' },
  { number: '05', keyword: 'SUSTAIN', title: 'Sustainability', description: 'Recyclable materials, low-VOC manufacturing, and third-party certifications support green building goals. RFCI member companies are driving industry-wide improvements in environmental performance.' },
  { number: '06', keyword: 'CERTIFY', title: 'Certified Performance', description: 'FloorScore, ASSURE, and AFFIRM certifications provide independent verification of indoor air quality, sustainability, and material health—giving specifiers confidence backed by data.' },
  { number: '07', keyword: 'STABLE', title: 'Dimensional Stability', description: 'Resistant to temperature fluctuations and moisture expansion, making it ideal for challenging subfloor conditions including concrete slabs, radiant heat systems, and below-grade installations.' },
  { number: '08', keyword: 'COMFORT', title: 'Comfort Underfoot', description: 'Resilient by definition—these floors flex underfoot, reducing fatigue and impact noise in high-traffic environments. A meaningful advantage in healthcare, education, and retail spaces where people stand for hours.' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WhyResilient({ pageData }: { pageData: any; flooringTypes: any[]; environments: any[] }) {
  const milestones = pageData?.historyMilestones?.length ? pageData.historyMilestones : HISTORY_MILESTONES

  return (
    <PageLayout>
      <PageHero
        label="Why Resilient"
        heading={<>Why <span className="font-semibold text-rfci-blue">resilient flooring?</span></>}
        subheading={pageData?.heroSubheading || 'Resilient flooring is the fastest-growing segment of the hard surface flooring market\u2014and for good reason. It delivers unmatched versatility across design, performance, and sustainability.'}
      />

      {/* Editorial Lede */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <p className="text-2xl md:text-3xl font-display font-light leading-relaxed text-rfci-black text-center">
              Resilient flooring isn&apos;t just growing&mdash;it&apos;s <span className="font-semibold">dominating.</span> It accounts for <span className="font-semibold text-rfci-blue">65%</span> of all hard surface flooring installed in North America, and that number is still climbing.
            </p>
            <p className="text-center text-rfci-black/50 font-light leading-relaxed mt-8 max-w-2xl mx-auto">
              The reasons are practical, not trendy. Resilient flooring outperforms alternatives on the metrics that matter most to building owners, architects, and facility managers: total cost of ownership, design flexibility, and environmental impact.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The Case for Resilient — Alternating Benefit Rows */}
      <section className="py-16 md:py-24 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-16 text-center">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">The Advantages</div>
            <h2 className="text-3xl md:text-4xl font-display font-light">
              Eight reasons resilient <span className="font-semibold">leads the market.</span>
            </h2>
          </SectionReveal>

          <div className="space-y-0">
            {BENEFITS.map((benefit, idx) => {
              const isEven = idx % 2 === 0
              return (
                <SectionReveal key={idx} delay={idx * 0.04}>
                  <div className={`border-t border-black/5 ${idx === BENEFITS.length - 1 ? 'border-b' : ''}`}>
                    <div className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12 py-12 md:py-16`}>
                      {/* Content side */}
                      <div className="flex-1 w-full">
                        <div className="flex items-start gap-5">
                          <span className="text-6xl md:text-8xl font-display font-bold text-rfci-blue/[0.08] leading-none select-none shrink-0 -mt-2">
                            {benefit.number}
                          </span>
                          <div className="pt-1">
                            <h3 className="text-xl md:text-2xl font-display font-semibold text-rfci-black mb-3">
                              {benefit.title}
                            </h3>
                            <p className="text-rfci-black/55 leading-relaxed font-light max-w-lg">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Keyword side */}
                      <div className="hidden md:flex flex-1 items-center justify-center">
                        <span className="text-7xl lg:text-9xl font-display font-bold text-rfci-black/[0.03] select-none leading-none whitespace-nowrap">
                          {benefit.keyword}
                        </span>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Sustainability</div>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
                Built for the planet, <span className="font-semibold">built to last.</span>
              </h2>
              <p className="text-rfci-black/60 leading-relaxed font-light mb-6">
                Resilient flooring manufacturers are committed to reducing environmental impact at every stage&mdash;from
                responsible sourcing and low-VOC manufacturing to recyclability and end-of-life recovery.
                RFCI certification programs provide independent, third-party verification of these commitments.
              </p>
              <a href="/certifications" className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all">
                Explore Certifications <ArrowRight className="w-4 h-4" />
              </a>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-rfci-cream p-6 border border-black/5">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">10k+</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">FloorScore Certified Products</div>
                </div>
                <div className="bg-rfci-cream p-6 border border-black/5">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">100%</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Third-Party Verified</div>
                </div>
                <div className="bg-rfci-cream p-6 border border-black/5 col-span-2">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">ISO 14025</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Environmental Product Declaration Standard</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* History */}
      <HistoryStackedReveal milestones={milestones} />

      {/* Flooring Types CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              Explore the <span className="font-semibold text-rfci-blue">full range.</span>
            </h2>
            <p className="text-lg text-rfci-black/60 font-light max-w-2xl mx-auto mb-10">
              From luxury vinyl tile to linoleum, rubber to cork&mdash;discover the specific properties and applications of each resilient flooring type.
            </p>
            <a href="/flooring" className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors">
              View All Flooring Types <ArrowRight className="w-4 h-4" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
