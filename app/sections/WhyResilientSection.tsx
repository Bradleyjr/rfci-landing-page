'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'motion/react'
import { Broom, Drop, CurrencyDollar, Palette, Recycle, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { SITE_SETTINGS } from '../_data/site-settings'

const BENEFITS = [
  {
    icon: Broom,
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Drop,
    title: 'Dolor Sit Amet',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    icon: CurrencyDollar,
    title: 'Consectetur Elit',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: Palette,
    title: 'Sed Do Eiusmod',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
  },
  {
    icon: Recycle,
    title: 'Tempor Incididunt',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.',
  },
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
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function WhyResilientSection() {
  const cmsBenefits = SITE_SETTINGS.whyResilientBenefits
  const statTarget = parseInt(SITE_SETTINGS.whyResilientStatValue || '65', 10)
  const statLabel = SITE_SETTINGS.whyResilientStatLabel || 'lorem ipsum dolor\nsit amet consectetur'
  const imageUrl = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop'
  return (
    <section id="why-resilient" className="py-28 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — Photo with stat badge */}
          <SectionReveal direction="left" className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-rfci-black/5">
              <img
                src={imageUrl}
                alt="Modern interior with resilient flooring"
                className="w-full h-full object-cover"
              />
              {/* Stat badge — overlays bottom-left of photo */}
              <div className="absolute bottom-6 left-6 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                <div className="text-4xl md:text-5xl font-display font-bold text-rfci-blue leading-none mb-1">
                  <AnimatedCounter target={statTarget} />
                </div>
                <p className="text-xs text-rfci-black/60 font-light leading-snug max-w-[130px]">
                  {statLabel.split('\n').map((line: string, i: number) => <span key={i}>{i > 0 && <br />}{line}</span>)}
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Right — Heading + benefit list */}
          <SectionReveal direction="right" className="lg:col-span-6 lg:pt-4">
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4">{SITE_SETTINGS.whyResilientHeading || 'Lorem Ipsum?'}</div>
            <h2 className="text-4xl md:text-5xl font-display font-light leading-tight mb-10">
              {SITE_SETTINGS.whyResilientSubheading}
            </h2>

            {/* Benefits — borderless divide-y list */}
            <div className="divide-y divide-rfci-black/10">
              {(cmsBenefits?.length ? cmsBenefits : BENEFITS).map((benefit: { icon?: typeof Broom; title: string; description: string }, idx: number) => {
                const Icon = benefit.icon ?? BENEFITS[idx]?.icon ?? Broom
                return (
                  <div key={idx} className="flex gap-5 py-5 first:pt-0 last:pb-0 items-start group">
                    <div className="w-9 h-9 bg-rfci-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rfci-blue/20 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-rfci-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-rfci-black mb-1">{benefit.title}</h3>
                      <p className="text-sm text-rfci-black/60 leading-relaxed font-light">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-rfci-black/10">
              <a href="/why-resilient" className="text-rfci-blue font-medium flex items-center gap-2 group text-sm">
                <span className="relative">
                  <span className="relative z-10 flex items-center gap-2">
                    Lorem ipsum dolor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-blue group-hover:w-full transition-all duration-300 ease-out" />
                </span>
              </a>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
