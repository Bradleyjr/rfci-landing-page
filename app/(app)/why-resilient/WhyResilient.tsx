'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'motion/react'
import { Broom, Drop, CurrencyDollar, Palette, Recycle, ShieldCheck, ThermometerSimple, SneakerMove, ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'

const BENEFITS_STATIC = [
  { icon: Broom, title: 'Easy Maintenance', description: 'Simple cleaning protocols and minimal upkeep keep lifecycle costs low and surfaces looking new for years.' },
  { icon: Drop, title: 'Water Resistance', description: 'Engineered to handle moisture-prone environments—from kitchens and baths to healthcare and hospitality.' },
  { icon: CurrencyDollar, title: 'Cost Effective', description: 'Competitive installed cost paired with a long service life delivers strong value across the full lifecycle.' },
  { icon: Palette, title: 'Design Versatility', description: 'Realistic wood, stone, and custom visuals across tile, plank, and sheet formats for any design vision.' },
  { icon: Recycle, title: 'Sustainability', description: 'Recyclable materials, low-VOC manufacturing, and third-party certifications support green building goals.' },
  { icon: ShieldCheck, title: 'Certified Performance', description: 'FloorScore, ASSURE, and AFFIRM certifications provide independent verification of indoor air quality and sustainability.' },
  { icon: ThermometerSimple, title: 'Dimensional Stability', description: 'Resistant to temperature fluctuations and moisture expansion, making it ideal for challenging subfloor conditions.' },
  { icon: SneakerMove, title: 'Comfort Underfoot', description: 'Resilient by definition—these floors flex underfoot, reducing fatigue and impact noise in high-traffic environments.' },
]

function AnimatedCounter({ target, suffix = '%' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let frame: number
    const duration = 2000
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WhyResilient({ pageData }: { pageData: any; flooringTypes: any[]; environments: any[] }) {
  const statValue = pageData?.heroStatValue || '65'
  const statLabel = pageData?.heroStatLabel || 'of hard surface flooring installed in North America'

  return (
    <PageLayout>
      <PageHero
        label="Why Resilient"
        heading={<>Why <span className="font-semibold text-rfci-blue">resilient flooring?</span></>}
        subheading={pageData?.heroSubheading || 'Resilient flooring is the fastest-growing segment of the hard surface flooring market—and for good reason. It delivers unmatched versatility across design, performance, and sustainability.'}
      />

      {/* Market Leadership Stat */}
      <section className="py-16 bg-rfci-blue text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="text-6xl md:text-7xl font-display font-bold">
              <AnimatedCounter target={parseInt(statValue)} suffix="%" />
            </div>
            <div className="text-xl md:text-2xl font-light text-white/80 max-w-md">
              {statLabel}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-16">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">The Advantages</div>
            <h2 className="text-3xl md:text-4xl font-display font-light">
              Built to <span className="font-semibold">perform.</span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS_STATIC.map((benefit, idx) => (
              <SectionReveal key={idx} delay={idx * 0.06}>
                <div className="group p-8 bg-rfci-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-rfci-blue/10 flex items-center justify-center mb-6 text-rfci-blue group-hover:bg-rfci-blue group-hover:text-white transition-colors">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-medium mb-3">{benefit.title}</h3>
                  <p className="text-sm text-rfci-black/60 leading-relaxed font-light">{benefit.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Sustainability</div>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
                Built for the planet, <span className="font-semibold">built to last.</span>
              </h2>
              <p className="text-rfci-black/60 leading-relaxed font-light mb-6">
                Resilient flooring manufacturers are committed to reducing environmental impact at every stage—from
                responsible sourcing and low-VOC manufacturing to recyclability and end-of-life recovery.
                RFCI certification programs provide independent, third-party verification of these commitments.
              </p>
              <a href="/certifications" className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all">
                Explore Certifications <ArrowRight className="w-4 h-4" />
              </a>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 border border-black/5">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">10k+</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">FloorScore Certified Products</div>
                </div>
                <div className="bg-white p-6 border border-black/5">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">100%</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Third-Party Verified</div>
                </div>
                <div className="bg-white p-6 border border-black/5 col-span-2">
                  <div className="text-3xl font-display font-bold text-rfci-blue mb-2">ISO 14025</div>
                  <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Environmental Product Declaration Standard</div>
                </div>
              </div>
            </SectionReveal>
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
              From luxury vinyl tile to linoleum, rubber to cork—discover the specific properties and applications of each resilient flooring type.
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
