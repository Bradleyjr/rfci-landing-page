'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

export function EcomedesSection() {
  return (
    <section id="ecomedes" className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left — dark content panel */}
        <SectionReveal direction="left" className="bg-rfci-black flex items-center">
          <div className="px-10 md:px-16 py-16 md:py-20 max-w-xl">
            <img
              src="https://rfci.com/wp-content/uploads/2022/08/ecomedes-logo-300x300.jpg"
              alt="Ecomedes logo"
              className="h-20 w-auto mb-8"
            />
            <p className="text-white/70 font-light leading-relaxed text-base mb-8">
              Ecomedes is RFCI&rsquo;s product transparency and sustainability data platform. It provides architects, designers, and specifiers with instant access to environmental certifications, EPDs, HPDs, and green building credit data for resilient flooring products &mdash; all in one place.
            </p>
            <a
              href="https://rfci.ecomedes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300 group"
            >
              Explore Ecomedes <ArrowSquareOut className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </SectionReveal>

        {/* Right — contained photo */}
        <SectionReveal direction="right" className="relative min-h-[320px] lg:min-h-[480px]">
          <img
            src="/images/inspiration/applications/workplace/Contour_LVT_Arrowroot_RS.jpg"
            alt="Professional reviewing resilient flooring specifications"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SectionReveal>
      </div>
    </section>
  )
}
