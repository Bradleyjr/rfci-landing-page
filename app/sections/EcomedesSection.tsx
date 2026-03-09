'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

export function EcomedesSection() {
  return (
    <section id="ecomedes" className="py-16 md:py-20 bg-rfci-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src="https://static.wixstatic.com/media/4d8d9d_10fe60eb91d1408cb8b3be4f23925209~mv2.png/v1/fill/w_288,h_288,al_c,q_85,enc_avif,quality_auto/Ecomedes_logo_oncecolor_black.png"
                alt="Ecomedes logo"
                className="h-28 md:h-32 w-auto"
              />
            </div>

            {/* Description */}
            <p className="text-rfci-black/60 font-light leading-relaxed flex-1 text-sm md:text-base">
              Ecomedes is RFCI's product transparency and sustainability data platform. It provides architects, designers, and specifiers with instant access to environmental certifications, EPDs, HPDs, and green building credit data for resilient flooring products — all in one place.
            </p>

            {/* CTA */}
            <a
              href="https://rfci.ecomedes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 border border-rfci-blue/40 text-rfci-blue text-sm font-semibold hover:bg-rfci-blue hover:text-white transition-all duration-300 group"
            >
              Explore Ecomedes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
