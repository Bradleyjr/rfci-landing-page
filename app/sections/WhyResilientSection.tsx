'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'motion/react'
import { Broom, Drop, CurrencyDollar, Palette, Recycle, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { SITE_SETTINGS } from '../_data/site-settings'

function StatDisplay({ rawValue, suffix }: { rawValue: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const numericTarget = parseInt(rawValue, 10)
  const isNumeric = !isNaN(numericTarget) && rawValue.trim() === String(numericTarget)

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isNumeric || !isInView) return
    let frame: number
    const duration = 2000
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * numericTarget))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isInView, isNumeric, numericTarget])

  return (
    <span ref={ref}>
      {isNumeric ? `${count}${suffix}` : rawValue}
    </span>
  )
}

export function WhyResilientSection() {
  const cmsBenefits = SITE_SETTINGS.whyResilientBenefits
  const statRawValue = SITE_SETTINGS.whyResilientStatValue || 'No. 1'
  const statSuffix = SITE_SETTINGS.whyResilientStatSuffix || ''
  const statLabel = SITE_SETTINGS.whyResilientStatLabel || 'hard surface flooring category in North America'
  const benefitIcons = [Broom, Drop, CurrencyDollar, Palette, Recycle]
  return (
    <section id="why-resilient" className="py-28 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — Photo with stat badge */}
          <SectionReveal direction="left" className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-rfci-black/5">
              <img
                src="/images/inspiration/applications/homes/INSPIRE.jpg"
                alt="Modern interior with resilient flooring"
                className="w-full h-full object-cover"
              />
              {/* Stat badge — overlays bottom-left of photo */}
              <div className="absolute bottom-6 left-6 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                <div className="text-4xl md:text-5xl font-display font-bold text-rfci-blue leading-none mb-1">
                  <StatDisplay rawValue={statRawValue} suffix={statSuffix} />
                </div>
                <p className="text-xs text-rfci-black/60 font-light leading-snug max-w-[130px]">
                  {statLabel}
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Right — Heading + benefit list */}
          <SectionReveal direction="right" className="lg:col-span-6 lg:pt-4">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">{SITE_SETTINGS.whyResilientHeading || 'Why Resilient?'}</div>
            <h2 className="text-4xl md:text-5xl font-display font-light leading-tight mb-10">
              {SITE_SETTINGS.whyResilientSubheading}
            </h2>

            {/* Benefits — borderless divide-y list */}
            <div className="divide-y divide-rfci-black/10">
              {cmsBenefits.map((benefit, idx) => {
                const Icon = benefitIcons[idx] ?? Recycle
                return (
                  <div key={idx} className="flex gap-5 py-5 first:pt-0 last:pb-0 items-start group">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-rfci-blue/40" />
                        <h4 className="text-lg font-display font-medium text-rfci-black">{benefit.title}</h4>
                      </div>
                      <p className="text-base text-rfci-black/60 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-rfci-black/10">
              <a href="/why-resilient" className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all duration-200">
                Explore why resilient <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
