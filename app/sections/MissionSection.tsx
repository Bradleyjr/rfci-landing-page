'use client'

import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

const PILLARS = [
  {
    number: '01',
    title: 'Advocacy & Engagement',
    description: 'Representing the resilient flooring industry on legislative, regulatory, and public policy issues at the federal and state level.',
  },
  {
    number: '02',
    title: 'Technical Standards',
    description: 'Developing and maintaining the performance standards that define product quality, safety, and installation best practices.',
  },
  {
    number: '03',
    title: 'Sustainability & Certifications',
    description: 'Running FloorScore, ASSURE, and AFFIRM — the programs that validate environmental and health performance for specifiers worldwide.',
  },
  {
    number: '04',
    title: 'Promotion & Education',
    description: 'Advancing industry knowledge through continuing education, original research, and market promotion to the architecture and design community.',
  },
  {
    number: '05',
    title: 'Member Development',
    description: 'Growing and supporting a membership of leading manufacturers and supply chain partners who shape the future of resilient flooring.',
  },
]

export function MissionSection() {
  // Hover-driven — whichever row the user mouses over updates the sticky panel
  const [hoveredPillar, setHoveredPillar] = useState(0)

  return (
    // Brand blue — distinct from the pure-black StandardsSection that follows
    <section id="mission" className="bg-rfci-blue text-white pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Layer 1: Identity Band ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-20">

          {/* Left — statement heading, within design-system type scale */}
          <SectionReveal direction="left" className="lg:col-span-6">
            {/* text-label (11px) — design-system token, replaces off-scale text-[10px] */}
            <div className="text-label font-bold tracking-widest uppercase text-white/70 mb-6">About RFCI</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              The voice of
              <br />
              {/* white/80 keeps the italic softer while still meeting 4.29:1 for large headings */}
              <span className="font-light italic text-white/80">resilient flooring.</span>
            </h2>
          </SectionReveal>

          {/* Right — founding metadata + description + CTA */}
          <SectionReveal direction="right" className="lg:col-span-6">
            <div className="text-label font-bold tracking-widest uppercase text-white/70 mb-6">
              Est. 1929 &bull; LaGrange, Georgia
            </div>
            {/* white/90 = ~4.95:1 on rfci-blue — passes WCAG AA for body text */}
            <p className="text-white/90 font-light leading-relaxed mb-4">
              Founded in 1929, RFCI is the non-profit trade association representing and protecting the resilient flooring industry in ways that no single manufacturer can.
            </p>
            <p className="text-white/90 font-light leading-relaxed mb-8">
              From setting technical standards to running third-party certification programs, we advance the category for the entire built environment.
            </p>
            <a href="/about" className="text-white font-medium flex items-center gap-2 group text-sm">
              <span className="relative">
                <span className="relative z-10 flex items-center gap-2">
                  Learn more about RFCI <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out" />
              </span>
            </a>
          </SectionReveal>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* ── Layer 2: Pinboard ─────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 lg:gap-16 items-start">

          {/* Left — sticky panel, updated by hover (desktop only) */}
          <div className="hidden lg:flex lg:col-span-4 lg:sticky lg:top-32 flex-col pt-8 pb-8">
            {/* clamp() moved from style= to className; decorative display number can use lower opacity */}
            <div className="text-[clamp(6rem,11vw,11rem)] font-display font-bold leading-none text-white/40 select-none transition-all duration-300">
              {PILLARS[hoveredPillar].number}
            </div>
            {/* text-label replaces off-scale text-[10px]; white/70 = ~3.09:1 for bold uppercase labels */}
            <div className="mt-4 text-label font-bold tracking-widest uppercase text-white/70 leading-relaxed transition-all duration-300">
              {PILLARS[hoveredPillar].title}
            </div>
            {/* Counter is a decorative position indicator — white/50 acceptable for non-content */}
            <div className="mt-6 text-label font-bold tracking-widest uppercase text-white/50">
              {String(hoveredPillar + 1).padStart(2, '0')} / 0{PILLARS.length}
            </div>
          </div>

          {/* Right — pillar rows, hover-triggered */}
          <div className="lg:col-span-8">
            <div className="py-4 border-b border-white/10">
              {/* text-label replaces off-scale text-[10px] */}
              <span className="text-label font-bold tracking-widest uppercase text-white/70">
                Our Strategic Focus
              </span>
            </div>

            {PILLARS.map((pillar, idx) => (
              <SectionReveal key={idx} delay={idx * 0.08}>
                <div
                  onMouseEnter={() => setHoveredPillar(idx)}
                  className="relative border-b border-white/10 transition-all duration-300 cursor-default"
                >
                  {/* Left accent bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                      hoveredPillar === idx ? 'bg-white/50' : 'bg-transparent'
                    }`}
                  />
                  {/* Row tint */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      hoveredPillar === idx ? 'bg-white/[0.06]' : 'bg-transparent'
                    }`}
                  />

                  {/* Desktop: number | title | description on one row */}
                  <div className="hidden md:grid md:grid-cols-12 gap-6 py-7 pl-4 relative z-10">
                    <div className="col-span-2">
                      {/* Large decorative numbers — white/40 acceptable for ornamental elements */}
                      <span
                        className={`text-2xl font-display font-bold transition-all duration-300 ${
                          hoveredPillar === idx ? 'text-white/60' : 'text-white/40'
                        }`}
                      >
                        {pillar.number}
                      </span>
                    </div>
                    <div className="col-span-4">
                      {/* Titles: white/70 (3.09:1) default → white on hover. */}
                      <h4
                        className={`font-display font-semibold text-base leading-snug transition-all duration-300 ${
                          hoveredPillar === idx ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        {pillar.title}
                      </h4>
                    </div>
                    <div className="col-span-6">
                      {/* Descriptions: white/70 default → white/90 on hover */}
                      <p
                        className={`text-sm font-light leading-relaxed transition-all duration-300 ${
                          hoveredPillar === idx ? 'text-white/90' : 'text-white/70'
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile: stacked */}
                  <div className="md:hidden py-6 pl-4 relative z-10">
                    <div className="flex items-start gap-4 mb-2">
                      <span className="text-xl font-display font-bold shrink-0 text-white/40">
                        {pillar.number}
                      </span>
                      <h4 className="font-display font-semibold leading-snug text-white/90">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-sm font-light leading-relaxed pl-10 text-white/70">
                      {pillar.description}
                    </p>
                  </div>

                </div>
              </SectionReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
