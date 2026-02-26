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
  { name: 'Healthcare',     flooringType: 'Rubber Flooring',    image: { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Schools',        flooringType: 'Linoleum',           image: { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Corporations',   flooringType: 'Luxury Vinyl Tile',  image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' } },
  { name: 'Retail Spaces',  flooringType: 'Sheet Vinyl',        image: { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop' } },
]

const FALLBACK_IMGS = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EnvironmentsSection({ environments }: { environments: any[] }) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
  const displayEnvs: EnvDoc[] = environments?.length ? environments : ENVIRONMENTS_STATIC

  return (
    <section id="environments" className="py-40 bg-rfci-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <SectionReveal direction="left" className="lg:col-span-5">
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-6 flex items-center gap-2">
              <Leaf className="w-4 h-4" /> Commercial &amp; Residential
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8">Built for real spaces.</h2>
            <p className="text-lg text-rfci-black/70 mb-8 leading-relaxed">
              Resilient flooring works across a wide range of commercial and residential spaces—from hospitals that need hygienic, easy-to-clean surfaces to offices looking for something that holds up over time.
            </p>
            <button className="text-rfci-blue font-medium flex items-center gap-2 group relative">
              <span className="relative">
                <span className="relative z-10 flex items-center gap-2">
                  Why choose resilient? <ArrowRight className="w-4 h-4 group-hover:text-rfci-black transition-colors" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-blue group-hover:w-full transition-all duration-300 ease-out" />
              </span>
            </button>
          </SectionReveal>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {displayEnvs.map((env, i) => (
              <SectionReveal key={i} delay={ENV_DELAYS[i] ?? 0} className="">
                <motion.div className="relative aspect-square group cursor-pointer">
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
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90 bg-rfci-black/30 backdrop-blur-sm px-3 py-1.5">
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
                        <div className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-2">{env.name}</div>
                        <h3 className="text-lg font-display font-medium text-white mb-4 leading-tight">{env.flooringType}</h3>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-rfci-blue hover:text-white transition-colors">
                          View Specs <ArrowRight className="w-3 h-3" />
                        </span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rfci-black rotate-45" />
                      </div>
                    </div>

                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform relative z-10 rotate-45">
                      <div className={`w-3 h-3 bg-rfci-blue shadow-[0_0_10px_rgba(0,102,204,0.5)] ${activeTooltip === i ? 'animate-none' : 'animate-pulse lg:group-hover/dot:animate-none'}`} />
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
