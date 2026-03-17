'use client'

import { useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { ENV_DELAYS } from '../_lib/transforms'
import { ENVIRONMENTS } from '../_data/environments'
import { SITE_SETTINGS } from '../_data/site-settings'

export function EnvironmentsSection() {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null)

  return (
    <section id="environments" className="py-28 md:py-32 bg-rfci-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="mb-16 md:mb-24 max-w-3xl">
          <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4">Featured Applications</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight">
            {SITE_SETTINGS.environmentsHeading}
          </h2>
          <p className="text-lg md:text-xl text-rfci-black/60 leading-relaxed">
            {SITE_SETTINGS.environmentsSubheading}
          </p>
          <p className="text-sm text-rfci-black/45 uppercase tracking-[0.28em] mt-6">
            Hover or tap the markers to see why resilient flooring fits each space.
          </p>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {ENVIRONMENTS.map((env, i) => {
            return (
              <SectionReveal key={env.name} delay={ENV_DELAYS[i] ?? 0}>
                <article
                  className="group relative aspect-[6/5] overflow-hidden bg-rfci-black text-white shadow-[0_24px_80px_rgba(18,18,18,0.12)]"
                  onMouseLeave={() => setActiveHotspotId((current) => (current?.startsWith(`${env.name}-`) ? null : current))}
                >
                  <img
                    src={env.image.url}
                    alt={env.featuredProject}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/92 via-rfci-black/45 to-rfci-black/15" />
                  <div className="absolute inset-0 bg-gradient-to-r from-rfci-blue/18 via-transparent to-transparent" />

                  <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-label font-bold tracking-widest uppercase text-white/70 mb-3">
                          {env.flooringType}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight">
                          {env.name}
                        </h3>
                      </div>
                      <div className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
                        <ArrowUpRight className="h-4 w-4 text-white/80" />
                      </div>
                    </div>

                    <div className="max-w-sm">
                      <p className="text-sm md:text-base leading-relaxed text-white/82">
                        {env.description}
                      </p>
                      <div className="mt-5 text-label font-bold tracking-widest uppercase text-white/60">
                        Featured project: {env.featuredProject}
                      </div>
                    </div>
                  </div>

                  {env.hotspots.map((hotspot) => {
                    const hotspotId = `${env.name}-${hotspot.id}`
                    const isActive = activeHotspotId === hotspotId

                    return (
                      <div
                        key={hotspotId}
                        className={`absolute ${hotspot.positionClass} z-20 -translate-x-1/2 -translate-y-1/2`}
                      >
                        <button
                          type="button"
                          aria-label={`${env.name}: ${hotspot.label}`}
                          aria-expanded={isActive}
                          onMouseEnter={() => setActiveHotspotId(hotspotId)}
                          onFocus={() => setActiveHotspotId(hotspotId)}
                          onBlur={() => setActiveHotspotId((current) => (current === hotspotId ? null : current))}
                          onClick={() => setActiveHotspotId((current) => (current === hotspotId ? null : hotspotId))}
                          className="flex h-5 w-5 items-center justify-center rounded-full border border-white/70 bg-white/90 text-rfci-blue shadow-[0_0_0_8px_rgba(255,255,255,0.18)] transition-transform duration-300 hover:scale-110 focus-visible:scale-110 focus-visible:outline-none"
                        >
                          <span className="h-2 w-2 rounded-full bg-rfci-blue" />
                          <span className="sr-only">{hotspot.label}</span>
                        </button>
                        <div
                          className={`absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 rounded-sm border border-white/15 bg-rfci-black/88 p-3 shadow-xl backdrop-blur-md transition-all duration-200 ${
                            isActive ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
                          }`}
                        >
                          <div className="text-label font-bold tracking-widest uppercase text-rfci-teal mb-2">
                            {hotspot.label}
                          </div>
                          <p className="text-sm leading-relaxed text-white/82">{hotspot.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </article>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
