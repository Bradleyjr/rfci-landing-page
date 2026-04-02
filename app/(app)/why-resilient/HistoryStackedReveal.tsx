'use client'

import { SectionReveal } from '../../_components/SectionReveal'

type Milestone = { year: string; title: string; description: string }

export function HistoryStackedReveal({ milestones }: { milestones: Milestone[] }) {
  const itemWidth = 240
  const itemGap = 20
  const trackWidth = milestones.length * (itemWidth + itemGap) + 96

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <SectionReveal className="text-center">
          <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Our History</div>
          <h2 className="text-4xl md:text-5xl font-display font-light">
            180 years of <span className="font-semibold">resilient flooring history</span>
          </h2>
          <p className="mt-4 text-lg text-rfci-black/50 font-light max-w-2xl mx-auto">
            From rubber and linoleum in the 1840s to rigid core and RFCI certification programs today, the category has evolved across more than 180 years.
          </p>
        </SectionReveal>
      </div>

      {/* Full-bleed horizontal scroll */}
      <div className="relative">
        {/* Edge fade gradients — hint at scrollability */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-x-auto hide-scrollbar px-6 md:px-12 pb-6">
          <div
            className="relative flex"
            style={{ width: `${trackWidth}px` }}
          >
            {/* Horizontal connecting line */}
            <div className="absolute left-0 right-0 h-px bg-rfci-blue/15" style={{ top: '70px' }} />

            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${index}`}
                className="flex-shrink-0 group"
                style={{ width: `${itemWidth}px`, marginRight: `${itemGap}px` }}
              >
                {/* Year badge — 60px area, badge at bottom */}
                <div className="flex items-end pb-2" style={{ height: '60px' }}>
                  <div className="inline-flex rounded-full bg-rfci-blue px-3 py-1.5 text-label font-bold uppercase tracking-widest text-white whitespace-nowrap">
                    {milestone.year}
                  </div>
                </div>

                {/* Dot — 20px area, centered on line */}
                <div className="flex items-center" style={{ height: '20px' }}>
                  <div className="h-3 w-3 rounded-full border-4 border-white bg-rfci-blue shadow-[0_0_0_1px_rgba(1,100,219,0.2)]" />
                </div>

                {/* Card */}
                <div className="mt-4 border border-black/5 bg-rfci-cream p-5 group-hover:border-rfci-blue/20 group-hover:shadow-lg transition-all duration-200">
                  <h3 className="text-base font-display font-light mb-2 text-rfci-black leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-rfci-black/60 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
