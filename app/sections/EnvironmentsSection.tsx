'use client'

import { House, BuildingOffice, Storefront, Bed, FirstAid, GraduationCap, Buildings, Warehouse, type Icon } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { ENV_DELAYS } from '../_lib/transforms'
import { ENVIRONMENTS } from '../_data/environments'
import { SITE_SETTINGS } from '../_data/site-settings'

const ENV_ICONS: Icon[] = [
  House,
  BuildingOffice,
  Storefront,
  Bed,
  FirstAid,
  GraduationCap,
  Buildings,
  Warehouse,
]

export function EnvironmentsSection() {
  return (
    <section id="environments" className="py-28 md:py-32 bg-rfci-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight">
            {SITE_SETTINGS.environmentsHeading}
          </h2>
          <p className="text-lg md:text-xl text-rfci-black/60 leading-relaxed">
            {SITE_SETTINGS.environmentsSubheading}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ENVIRONMENTS.map((env, i) => {
            const IconComp = ENV_ICONS[i] ?? House
            return (
              <SectionReveal key={i} delay={ENV_DELAYS[i] ?? 0} className="">
                {/* Card flip container */}
                <div className="relative aspect-[4/5] group cursor-pointer" style={{ perspective: '1000px' }}>
                  <div className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Front — image */}
                    <div className="absolute inset-0 overflow-hidden shadow-sm" style={{ backfaceVisibility: 'hidden' }}>
                      <img
                        src={env.image?.url || 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop'}
                        alt={env.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-rfci-black/10" />
                      {/* Environment label */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="text-label font-bold tracking-widest uppercase text-white/90 bg-rfci-black/30 backdrop-blur-sm px-3 py-1.5">
                          {env.name}
                        </span>
                      </div>
                    </div>

                    {/* Back — description + courtesy */}
                    <div
                      className="absolute inset-0 bg-rfci-blue flex flex-col justify-center p-6 md:p-8 text-white [transform:rotateY(180deg)]"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <IconComp className="w-6 h-6 text-white/60 mb-4" />
                      <h3 className="text-lg md:text-xl font-display font-semibold mb-3 leading-tight">{env.name}</h3>
                      <p className="text-sm text-white/80 leading-relaxed mb-4">
                        Resilient flooring delivers lasting performance, easy maintenance, and design flexibility for this environment.
                      </p>
                      <div className="mt-auto">
                        <span className="text-label font-bold tracking-widest uppercase text-white/50">{env.flooringType}</span>
                        <div className="text-label tracking-widest uppercase text-white/40 mt-1">
                          Photo courtesy of RFCI members
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
