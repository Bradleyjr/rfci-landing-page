'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

export function BeautifullyResponsibleSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Top half — full-bleed image with overlay content */}
      <div className="relative min-h-[500px] md:min-h-[600px]">
        <img
          src="/media/beautifully-responsible-hero.jpg"
          alt="Modern interior with resilient flooring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rfci-black/85 via-rfci-black/70 to-rfci-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col justify-center h-full min-h-[500px] md:min-h-[600px]">
          <SectionReveal className="max-w-2xl">
            <div className="mb-8">
              <img
                src="/media/beautifully-responsible-logo.png"
                alt="Beautifully Responsible"
                className="h-16 md:h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-4">
              Don&rsquo;t compromise&mdash;on your personal style, budget, or&nbsp;well&#8209;being.
            </p>
            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-10 max-w-xl">
              Beautifully Responsible&reg; is RFCI&rsquo;s consumer initiative connecting homeowners
              with resilient flooring that&rsquo;s mindfully manufactured, third-party certified,
              and designed for the way you live.
            </p>
            <a
              href="https://beautifullyresponsible.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-rfci-black text-sm font-semibold hover:bg-rfci-blue hover:text-white transition-all duration-300 group"
            >
              Visit BeautifullyResponsible.com
              <ArrowSquareOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </SectionReveal>
        </div>
      </div>

    </section>
  )
}
