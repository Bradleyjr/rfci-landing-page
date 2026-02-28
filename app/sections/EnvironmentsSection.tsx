'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Leaf, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { ENV_DOT_POSITIONS, ENV_DELAYS, mediaUrl } from '../_lib/transforms'

type EnvDoc = {
  name: string
  flooringType: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
  order?: number
}

const ENVIRONMENTS_STATIC: EnvDoc[] = [
  { name: 'Single-Family Homes', flooringType: 'Luxury Vinyl Plank',      image: { url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Apartments & Condos', flooringType: 'Rigid Core LVT',          image: { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Townhomes & Duplexes',flooringType: 'Flexible LVT',            image: { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Vacation & Rentals',  flooringType: 'Sheet Vinyl',             image: { url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Senior Living',       flooringType: 'Rubber Flooring',         image: { url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Offices',             flooringType: 'Luxury Vinyl Tile',       image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Healthcare',          flooringType: 'Homogeneous Sheet Vinyl', image: { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Education',           flooringType: 'Linoleum',                image: { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop' } },
]

const FALLBACK_IMGS = [
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EnvironmentsSection({ environments }: { environments: any[] }) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
  const displayEnvs: EnvDoc[] = environments?.length ? environments : ENVIRONMENTS_STATIC

  return (
    <section id="environments" className="py-28 md:py-32 bg-rfci-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-16 md:mb-24">
          <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4 flex items-center justify-center gap-2">
            <Leaf className="w-4 h-4" /> Residential &amp; Commercial
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6 leading-tight">
            Built for <span className="font-semibold text-rfci-blue">real spaces.</span>
          </h2>
          <p className="text-lg md:text-xl text-rfci-black/70 max-w-3xl mx-auto leading-relaxed font-light">
            From single-family homes to hospitals and hotels, resilient flooring is the preferred choice across every segment of the built environment.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayEnvs.map((env, i) => (
            <SectionReveal key={i} delay={ENV_DELAYS[i] ?? 0} className="">
              <motion.div className="relative aspect-[4/5] group cursor-pointer">
                <div className="absolute inset-0 overflow-hidden shadow-sm">
                  <img
                    src={mediaUrl(env.image, FALLBACK_IMGS[i] ?? FALLBACK_IMGS[0])}
                    alt={env.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-1"
                  />
                  <div className="absolute inset-0 bg-rfci-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Persistent environment label */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-label font-bold tracking-widest uppercase text-white/90 bg-rfci-black/30 backdrop-blur-sm px-3 py-1.5">
                    {env.name}
                  </span>
                </div>

                {/* Interactive Dot & Tooltip */}
                <div
                  className={`absolute ${ENV_DOT_POSITIONS[i] ?? ENV_DOT_POSITIONS[0]} z-20 group/dot`}
                  onClick={() => setActiveTooltip(activeTooltip === i ? null : i)}
                >
                  <div className="absolute -inset-8 z-0" />

                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 pb-4 w-48 sm:w-56 origin-bottom transition-all duration-400 ease-out z-20 ${activeTooltip === i ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none lg:group-hover/dot:opacity-100 lg:group-hover/dot:scale-100 lg:group-hover/dot:pointer-events-auto'}`}>
                    <div className="bg-rfci-black text-white shadow-2xl p-5 sm:p-6 relative">
                      <div className="text-label font-bold tracking-widest uppercase text-white/50 mb-2">{env.name}</div>
                      <h3 className="text-lg font-display font-medium text-white mb-4 leading-tight">{env.flooringType}</h3>
                      <span className="inline-flex items-center gap-1.5 text-label font-bold tracking-widest uppercase text-rfci-blue hover:text-white transition-colors">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </span>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rfci-black rotate-45" />
                    </div>
                  </div>

                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform relative z-10 rotate-45">
                    <div className={`w-3 h-3 bg-rfci-blue shadow-[0_0_10px_rgba(1,100,219,0.5)] ${activeTooltip === i ? 'animate-none' : 'animate-pulse lg:group-hover/dot:animate-none'}`} />
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
