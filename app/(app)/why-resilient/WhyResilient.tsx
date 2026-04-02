'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { SplitPageHero } from '../../_components/SplitPageHero'
import { SectionReveal } from '../../_components/SectionReveal'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WhyResilient({ pageData }: { pageData: any }) {
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
        subheading={
          <div className="space-y-4">
            <p>Resilient flooring has been the fastest growing category of flooring and is now the largest in North America. Resilient&rsquo;s growth has been propelled by some key factors that are strongly valued by the residential and commercial sectors.</p>
            <p>First, consider the broad breadth of product categories that comprise resilient flooring. From very technical products to a host of products that fill the airwaves of home renovation shows, resilient flooring has a deep bench of product solutions!</p>
            <p>Some of the core product factors that propel resilient include countless inspiring designs, ease of maintenance, durability, moisture performance, attentiveness to sustainability, certified performance, ease of installation, advanced engineering, and much more.</p>
            <p>In a world where affordability is a concern for most, the resilient flooring product line-up has countless options for that first time home owner and wonderful options for that dream home owner.</p>
          </div>
        }
        photo={{ src: '/images/inspiration/applications/workplace/FF_14582_Herringbone_Charcoal_RS_150DPI.jpg', alt: 'Herringbone pattern resilient flooring in modern interior' }}
      />

      {/* Editorial Lede */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <img
                  src="/images/inspiration/applications/workplace/iStock-2207512846.jpg"
                  alt="Modern reception area with resilient flooring"
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
              Key factors that propel <span className="font-semibold">resilient flooring</span>
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rfci-black/5">
            {benefits.map((benefit, idx) => (
              <SectionReveal key={idx} delay={(idx % 3) * 0.06}>
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

      {/* Explore More — CTA Links */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12 md:mb-16">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Explore More</div>
            <h2 className="text-4xl md:text-5xl font-display font-light">
              Learn <span className="font-semibold">more</span>
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: 'Learn more about the various resilient flooring categories', href: '/flooring' },
              { label: 'Learn about key certifications in resilient flooring', href: '/certifications/floorscore' },
              { label: 'Learn about Industry Wide Environmental Product Declarations (EPDs) in Resilient Flooring', href: '/certifications/epd' },
              { label: 'Learn more about ecomedes\u00ae and resilient products', href: 'https://rfci.ecomedes.com/', external: true },
            ].map((link, idx) => (
              <SectionReveal key={idx} delay={(idx % 2) * 0.06}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 p-6 bg-rfci-cream border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200"
                >
                  <ArrowRight className="w-5 h-5 mt-0.5 text-rfci-blue shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="text-base text-rfci-black/70 font-light leading-relaxed group-hover:text-rfci-blue transition-colors duration-200">
                    {link.label}
                  </span>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flooring Types CTA */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Explore the <span className="font-semibold text-rfci-blue">full range</span>
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
