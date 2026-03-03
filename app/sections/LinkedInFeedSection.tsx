'use client'

import { LinkedinLogo, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

const RFCI_LINKEDIN_URL = 'https://www.linkedin.com/company/resilient-floor-covering-institute/'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LinkedInFeedSection({ siteSettings }: { linkedInPosts?: any[]; siteSettings?: any }) {
  return (
    <section id="linkedin" className="py-24 md:py-28 bg-rfci-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="bg-white border border-black/5 p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-3 flex items-center gap-2">
                <LinkedinLogo className="w-4 h-4" weight="fill" /> Stay Connected
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-light leading-tight mb-4">
                {siteSettings?.linkedinHeading || <>Follow RFCI on <span className="font-semibold text-rfci-blue">LinkedIn.</span></>}
              </h2>
              <p className="text-rfci-black/60 font-light leading-relaxed max-w-lg">
                Stay up to date with industry news, certification updates, member spotlights, and upcoming events from the Resilient Floor Covering Institute.
              </p>
            </div>
            <a
              href={siteSettings?.linkedinUrl || RFCI_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0A66C2] text-white px-8 py-4 font-semibold text-sm hover:bg-[#004182] transition-colors duration-200 group shrink-0"
            >
              <LinkedinLogo className="w-5 h-5" weight="fill" />
              Follow on LinkedIn
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
