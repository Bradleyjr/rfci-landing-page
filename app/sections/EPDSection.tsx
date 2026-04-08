'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

export function EPDSection() {
  return (
    <section id="epd" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left — eyebrow + heading */}
          <SectionReveal direction="left">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">
              Product Transparency
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-rfci-black">
              Explore Industry-Wide{' '}
              <span className="font-semibold">EPDs for Resilient Flooring</span>
            </h2>
          </SectionReveal>

          {/* Right — description + CTA */}
          <SectionReveal direction="right" className="flex flex-col gap-6">
            <p className="text-base text-rfci-black/60 leading-relaxed font-light">
              An Environmental Product Declaration (EPD) is a transparent, objective report
              that communicates product content and environmental impacts across a product or
              product category life cycle. A life cycle assessment (LCA) is based on the
              ISO&nbsp;14040 Standard and a Type&nbsp;III EPD is compliant with
              ISO&nbsp;14025 and is third-party verified. EPDs are utilized by specifiers to
              better understand environmental impacts and to comply with material requirements
              in building rating systems, such as <a href="https://thegbi.org/greenglobes/" target="_blank" rel="noopener noreferrer" className="text-rfci-blue hover:underline">Green Globes&reg;</a> and <a href="https://www.usgbc.org/leed" target="_blank" rel="noopener noreferrer" className="text-rfci-blue hover:underline">LEED&reg;</a>.
            </p>
            <a
              href="/certifications/epd"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200 self-start group"
            >
              View Industry-Wide EPDs{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </SectionReveal>

        </div>

        {/* Hero image below */}
        <SectionReveal className="mt-16 md:mt-20">
          <img
            src="/images/inspiration/applications/hospitals/1HG2M005_Fog-ROOM-1.jpg"
            alt="Healthcare environment with resilient flooring — Environmental Product Declarations"
            className="w-full aspect-[16/7] object-cover object-center"
          />
        </SectionReveal>

      </div>
    </section>
  )
}
