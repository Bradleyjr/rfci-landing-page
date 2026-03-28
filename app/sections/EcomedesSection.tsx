'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

export function EcomedesSection() {
  return (
    <section id="ecomedes" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-center">

          {/* Left — eyebrow + heading */}
          <SectionReveal direction="left">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">
              Product Transparency
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-rfci-black">
              Find certified products with{' '}
              <span className="font-semibold">Ecomedes</span>
            </h2>
          </SectionReveal>

          {/* Right — logo + body + CTA */}
          <SectionReveal direction="right" className="flex flex-col gap-6">
            <div className="h-20 overflow-hidden self-start">
              <img
                src="https://rfci.com/wp-content/uploads/2022/08/ecomedes-logo-300x300.jpg"
                alt="Ecomedes logo"
                className="h-32 w-fit mix-blend-multiply -mt-4"
              />
            </div>
            <p className="text-base text-rfci-black/60 leading-relaxed font-light">
              Ecomedes is RFCI&rsquo;s product transparency and sustainability data
              platform. It provides architects, designers, and specifiers with instant
              access to environmental certifications, EPDs, HPDs, and green building
              credit data for resilient flooring products &mdash; all in one place.
            </p>
            <a
              href="https://rfci.ecomedes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200 self-start group"
            >
              Explore Ecomedes{' '}
              <ArrowSquareOut className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
