'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { FAQAccordion } from '../../_components/FAQAccordion'
import { FAQS } from '../../_data/faqs'
import { PageLayout } from '../../_components/PageLayout'
import { SplitPageHero } from '../../_components/SplitPageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { HistoryStackedReveal } from './HistoryStackedReveal'

const HISTORY_MILESTONES = [
  { year: '1845', title: 'Linoleum Invented', description: 'Frederick Walton patents linoleum in England, creating the first true resilient floor covering from linseed oil and natural materials.' },
  { year: '1872', title: 'US Manufacturing Begins', description: 'The American Linoleum Manufacturing Company opens in Staten Island, New York, launching domestic resilient flooring production.' },
  { year: '1933', title: 'Vinyl Composition Tile Arrives', description: 'VCT enters the market as a durable, affordable option for schools, hospitals, and other high-traffic commercial interiors.' },
  { year: '1950s', title: 'Sheet Vinyl Expands', description: 'Post-war construction accelerates the use of sheet vinyl and other resilient formats across homes and commercial projects.' },
  { year: '1990s', title: 'Luxury Vinyl Gains Momentum', description: 'LVT and LVP bring more realistic wood and stone visuals to the resilient category while keeping the maintenance advantages of hard-surface flooring.' },
  { year: '2010s', title: 'Rigid Core Reshapes the Category', description: 'SPC and WPC rigid core products expand floating installation options and accelerate demand for waterproof resilient flooring systems.' },
  { year: 'Today', title: 'A Full Portfolio of Solutions', description: 'Resilient flooring now spans sheet, tile, plank, rubber, linoleum, cork, and rigid core constructions for nearly every project type.' },
]

const DEFAULT_BENEFITS = [
  { number: '01', keyword: 'MAINTAIN', title: 'Easy Maintenance', description: 'Simple cleaning protocols and minimal upkeep keep lifecycle costs low and surfaces looking new for years. No waxing, no sealing, no refinishing—just routine cleaning.' },
  { number: '02', keyword: 'PROTECT', title: 'Moisture Performance', description: 'Depending on the construction, resilient flooring can offer strong water-resistant or waterproof performance for demanding interiors. Product-specific installation details still matter.' },
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
  const benefits = pageData?.benefits?.length
    ? pageData.benefits.map((benefit: { title: string; description: string }, index: number) => ({
        number: String(index + 1).padStart(2, '0'),
        keyword: DEFAULT_BENEFITS[index]?.keyword ?? 'BENEFIT',
        ...benefit,
      }))
    : DEFAULT_BENEFITS

  return (
    <PageLayout>
      <SplitPageHero
        label="Why Resilient"
        heading={<>Why <span className="font-semibold text-rfci-blue">resilient flooring?</span></>}
        subheading={pageData?.heroSubheading || 'Resilient flooring continues to earn specifications across healthcare, education, retail, housing, hospitality, and workplace settings because it balances performance, maintenance, comfort, and design flexibility.'}
        photo={{ src: '/media/mission/advocacy-engagement.jpg', alt: 'RFCI advocacy and industry engagement' }}
        reverse
      />

      {/* Editorial Lede */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <SectionReveal>
              <p className="text-2xl md:text-3xl font-display font-light leading-relaxed text-rfci-black">
                Resilient flooring keeps showing up where projects need <span className="font-semibold">performance, cleanability, and design flexibility.</span>
              </p>
              <p className="text-rfci-black/50 font-light leading-relaxed mt-8">
                The reasons are practical, not trendy. Across healthcare, education, housing, retail, hospitality, and workplace interiors, resilient flooring continues to earn specifications because it balances maintenance, comfort, durability, and sustainability.
              </p>
            </SectionReveal>
            <SectionReveal direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern interior with resilient flooring"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/20 to-transparent" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* The Case for Resilient — Grid */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12 md:mb-16">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">The Advantages</div>
            <h2 className="text-3xl md:text-4xl font-display font-light">
              Eight reasons resilient <span className="font-semibold">keeps earning the spec.</span>
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rfci-black/5">
            {benefits.map((benefit, idx) => (
              <SectionReveal key={idx} delay={(idx % 4) * 0.06}>
                <div className="bg-rfci-cream p-8 md:p-10 h-full group hover:bg-white transition-colors duration-200">
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">{benefit.keyword}</div>
                  <h3 className="text-xl font-display font-light text-rfci-black mb-3 group-hover:text-rfci-blue transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-rfci-black/60 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
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
                Resilient flooring manufacturers continue to reduce environmental impact through responsible sourcing,
                low-emitting product programs, lifecycle reporting, material health transparency, and end-of-life recovery efforts.
                RFCI certification and declaration programs provide independent, third-party tools that help specifiers evaluate those commitments.
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
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">4</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Core RFCI certification and declaration programs</div>
                </div>
                <div className="bg-rfci-cream p-6 border border-black/5 col-span-2">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">SPC + WPC</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Rigid core constructions shaping the modern category</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* History */}
      <HistoryStackedReveal milestones={milestones} />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-display font-light">
              Common <span className="font-semibold">questions.</span>
            </h2>
          </SectionReveal>
          <div className="grid lg:grid-cols-2 gap-x-16">
            {(() => {
              const faqs = FAQS.filter(f => f.category !== 'certifications').sort((a, b) => a.order - b.order)
              const mid = Math.ceil(faqs.length / 2)
              return (
                <>
                  <FAQAccordion faqs={faqs.slice(0, mid)} />
                  <FAQAccordion faqs={faqs.slice(mid)} />
                </>
              )
            })()}
          </div>
        </div>
      </section>

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
