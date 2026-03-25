'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { FAQAccordion } from '../../_components/FAQAccordion'
import { FAQS } from '../../_data/faqs'
import { PageLayout } from '../../_components/PageLayout'
import { SplitPageHero } from '../../_components/SplitPageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { HistoryStackedReveal } from './HistoryStackedReveal'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WhyResilient({ pageData }: { pageData: any }) {
  const milestones = pageData.historyMilestones
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const benefits = pageData.benefits.map((benefit: any, index: number) => ({
    number: String(index + 1).padStart(2, '0'),
    ...benefit,
  }))

  return (
    <PageLayout>
      <SplitPageHero
        label="Why Resilient"
        heading={<>Why <span className="font-semibold text-rfci-blue">resilient flooring?</span></>}
        subheading={pageData?.heroSubheading || 'Resilient flooring continues to earn specifications across healthcare, education, retail, housing, hospitality, and workplace settings because it balances performance, maintenance, comfort, and design flexibility.'}
        photo={{ src: '/images/inspiration/applications/workplace/FF_14582_Herringbone_Charcoal_RS_150DPI.jpg', alt: 'Herringbone pattern resilient flooring in modern interior' }}
      />

      {/* Editorial Lede */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <img
                  src="/images/inspiration/applications/homes/APX134-RS-Mokuzai-Sapling.jpg"
                  alt="Modern interior with resilient flooring"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/20 to-transparent" />
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <p className="text-2xl md:text-3xl font-display font-light leading-relaxed text-rfci-black">
                Resilient flooring keeps showing up where projects need <span className="font-semibold">performance, cleanability, and design flexibility.</span>
              </p>
              <p className="text-lg text-rfci-black/60 font-light leading-relaxed mt-8">
                The reasons are practical, not trendy. Across healthcare, education, housing, retail, hospitality, and workplace interiors, resilient flooring continues to earn specifications because it balances maintenance, comfort, durability, and sustainability.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* The Case for Resilient — Grid */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12 md:mb-16">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">The Advantages</div>
            <h2 className="text-4xl md:text-5xl font-display font-light">
              Eight reasons resilient <span className="font-semibold">keeps earning the spec.</span>
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rfci-black/5">
            {benefits.map((benefit, idx) => (
              <SectionReveal key={idx} delay={(idx % 4) * 0.06}>
                <div className="bg-rfci-cream p-8 md:p-10 h-full group hover:bg-white transition-colors duration-200">
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">{benefit.keyword}</div>
                  <h3 className="text-xl md:text-2xl font-display font-light text-rfci-black mb-3 group-hover:text-rfci-blue transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-rfci-black/60 leading-relaxed font-light">
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
              <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
                Built for the planet, <span className="font-semibold">built to last.</span>
              </h2>
              <p className="text-lg text-rfci-black/60 leading-relaxed font-light mb-6">
                Resilient flooring manufacturers continue to reduce environmental impact through responsible sourcing,
                low-emitting product programs, lifecycle reporting, material health transparency, and end-of-life recovery efforts.
                RFCI certification and declaration programs provide independent, third-party tools that help specifiers evaluate those commitments.
              </p>
              <a href="/certifications/floorscore" className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all duration-200">
                Explore FloorScore® <ArrowRight className="w-4 h-4" />
              </a>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-rfci-cream p-6 border border-black/5">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">4</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Core RFCI certification and declaration programs</div>
                </div>
                <div className="bg-rfci-cream p-6 border border-black/5">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">9</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Resilient flooring types covered by RFCI EPDs</div>
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
            <h2 className="text-4xl md:text-5xl font-display font-light">
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
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Explore the <span className="font-semibold text-rfci-blue">full range.</span>
            </h2>
            <p className="text-lg text-rfci-black/60 font-light max-w-2xl mx-auto mb-10">
              From luxury vinyl tile to linoleum, rubber to cork&mdash;discover the specific properties and applications of each resilient flooring type.
            </p>
            <a href="/flooring" className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200">
              View All Flooring Types <ArrowRight className="w-4 h-4" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
