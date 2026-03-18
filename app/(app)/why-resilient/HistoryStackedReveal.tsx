'use client'

import { SectionReveal } from '../../_components/SectionReveal'

type Milestone = { year: string; title: string; description: string }

export function HistoryStackedReveal({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="mb-16 text-center">
          <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Our History</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light">
            A simplified look at <span className="font-semibold">resilient flooring history.</span>
          </h2>
          <p className="mt-4 text-lg text-rfci-black/50 font-light max-w-2xl mx-auto">
            From linoleum to rigid core, the category has kept expanding through new formats, better performance, and broader application across the built environment.
          </p>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-rfci-blue/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0
              return (
                <SectionReveal key={`${milestone.year}-${milestone.title}`} delay={index * 0.05}>
                  <div className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}>
                    <div className={isEven ? 'md:text-right' : ''}>
                      <div className="inline-flex rounded-full bg-rfci-blue px-4 py-2 text-label font-bold uppercase tracking-widest text-white">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="relative pl-12 md:pl-0">
                      <div className="absolute left-[1.35rem] top-3 h-3 w-3 rounded-full border-4 border-white bg-rfci-blue shadow-[0_0_0_1px_rgba(1,100,219,0.2)] md:left-[-1.7rem]" />
                      <article className="rounded-sm border border-black/5 bg-rfci-cream p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-display font-light mb-3 text-rfci-black">
                          {milestone.title}
                        </h3>
                        <p className="text-rfci-black/60 font-light leading-relaxed">
                          {milestone.description}
                        </p>
                      </article>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
