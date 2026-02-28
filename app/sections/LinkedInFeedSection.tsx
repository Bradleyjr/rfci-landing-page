'use client'

import { LinkedinLogo, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

const RFCI_LINKEDIN_URL = 'https://www.linkedin.com/company/resilient-floor-covering-institute/'

/** Placeholder post images — will be replaced by a third-party embed integration (EmbedSocial, Elfsight, etc.) */
const FEED_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop', alt: 'RFCI Board Meeting' },
  { src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=500&auto=format&fit=crop', alt: 'Flooring installation' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop', alt: 'Industry conference' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop', alt: 'Office with resilient flooring' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=500&auto=format&fit=crop', alt: 'Standards meeting' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LinkedInFeedSection({ linkedInPosts }: { linkedInPosts?: any[] }) {
  return (
    <section id="linkedin" className="py-24 md:py-28 bg-rfci-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Compact header row */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-3 flex items-center gap-2">
                <LinkedinLogo className="w-4 h-4" weight="fill" /> Stay Connected
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-light leading-tight">
                Latest from <span className="font-semibold text-rfci-blue">RFCI.</span>
              </h2>
            </div>
            <a
              href={RFCI_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0A66C2] text-white px-6 py-3 font-semibold text-sm hover:bg-[#004182] transition-colors duration-200 group shrink-0 self-start sm:self-auto"
            >
              <LinkedinLogo className="w-5 h-5" weight="fill" />
              Follow on LinkedIn
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </SectionReveal>

        {/* Social feed grid — image tiles with LinkedIn overlay */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {FEED_IMAGES.map((img, idx) => (
            <SectionReveal key={idx} delay={idx * 0.06}>
              <a
                href={RFCI_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-rfci-black/5"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-rfci-black/0 group-hover:bg-rfci-black/40 transition-colors duration-300 flex items-center justify-center">
                  <LinkedinLogo
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                    weight="fill"
                  />
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>

        {/* Subtle footer note */}
        <SectionReveal>
          <p className="text-center text-xs text-rfci-black/40 mt-6 font-light">
            Posts pulled from RFCI&apos;s LinkedIn — powered by social feed integration.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
