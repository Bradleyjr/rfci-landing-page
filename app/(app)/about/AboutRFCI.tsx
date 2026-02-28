'use client'

import { useState } from 'react'
import { ArrowRight, MapPin, Calendar } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'

const PILLARS_STATIC = [
  { number: '01', title: 'Advocacy & Engagement', description: 'Representing the resilient flooring industry on legislative, regulatory, and public policy issues at the federal and state level.' },
  { number: '02', title: 'Technical Standards', description: 'Developing and maintaining the performance standards that define product quality, safety, and installation best practices.' },
  { number: '03', title: 'Sustainability & Certifications', description: 'Running FloorScore, ASSURE, and AFFIRM — the programs that validate environmental and health performance for specifiers worldwide.' },
  { number: '04', title: 'Promotion & Education', description: 'Advancing industry knowledge through continuing education, original research, and market promotion to the architecture and design community.' },
  { number: '05', title: 'Member Development', description: 'Growing and supporting a membership of leading manufacturers and supply chain partners who shape the future of resilient flooring.' },
]

type MemberDoc = {
  name: string
  logoUrl?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: any
  website?: string
  tier?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AboutRFCI({ aboutPage, members }: { aboutPage: any; communityEvent: any; members: any[] }) {
  const [activePillar, setActivePillar] = useState(0)
  const pillars = aboutPage?.strategicPillars?.length ? aboutPage.strategicPillars : PILLARS_STATIC
  const boardMembers: MemberDoc[] = (members ?? []).filter((m: MemberDoc) => !m.tier || m.tier === 'board')

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rfci-cream py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <SectionReveal direction="left" className="lg:col-span-7">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">About RFCI</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                The voice of<br />
                <span className="font-light italic text-rfci-blue">resilient flooring.</span>
              </h1>
            </SectionReveal>

            <SectionReveal direction="right" className="lg:col-span-5">
              <div className="flex items-center gap-6 text-sm text-rfci-black/50 mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Est. 1929</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> LaGrange, Georgia</span>
              </div>
              <p className="text-rfci-black/70 leading-relaxed font-light">
                {aboutPage?.heroSubheading || 'Founded in 1929, the Resilient Floor Covering Institute is the trade association for North America’s resilient flooring industry—representing the manufacturers and suppliers behind vinyl, rubber, linoleum, and cork flooring.'}
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="who-we-are" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
                A non-profit <span className="font-semibold">trade association</span>
              </h2>
              <p className="text-rfci-black/60 leading-relaxed font-light text-lg">
                {aboutPage?.missionStatement || 'RFCI is a non-profit organization that brings the resilient flooring industry together to advocate, educate, and lead—advancing the interests of manufacturers, specifiers, and end users alike.'}
              </p>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="bg-rfci-cream p-10 md:p-12">
                <div className="text-5xl md:text-6xl font-display font-bold text-rfci-blue mb-4">97</div>
                <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50 mb-6">Years of industry leadership</div>
                <p className="text-rfci-black/60 font-light leading-relaxed">
                  Since 1929, RFCI has served as the unifying voice for resilient flooring—driving standards, advancing sustainability, and connecting the industry.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="strategic-imperatives" className="py-20 md:py-28 bg-rfci-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-16">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Our Strategic Focus</div>
            <h2 className="text-3xl md:text-4xl font-display font-light">
              Five pillars that <span className="font-semibold">drive the industry.</span>
            </h2>
          </SectionReveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sticky counter — desktop only */}
            <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-32 self-start">
              <div className="text-8xl font-display font-bold text-white/20 leading-none mb-4 transition-all duration-500">
                {pillars[activePillar]?.number || '01'}
              </div>
              <div className="text-label font-bold tracking-widest uppercase text-white/50">
                {pillars[activePillar]?.title || 'Advocacy'}
              </div>
              <div className="text-sm text-white/30 mt-6">
                {String(activePillar + 1).padStart(2, '0')} / {String(pillars.length).padStart(2, '0')}
              </div>
            </div>

            {/* Pillar rows */}
            <div className="lg:col-span-9">
              {pillars.map((pillar: { number: string; title: string; description: string }, idx: number) => (
                <SectionReveal key={idx} delay={idx * 0.06}>
                  <div
                    className={`border-t border-white/10 py-8 cursor-pointer transition-all duration-300 ${
                      activePillar === idx ? 'bg-white/[0.03] border-l-2 border-l-rfci-blue/50 pl-6' : 'pl-6 border-l-2 border-l-transparent'
                    }`}
                    onMouseEnter={() => setActivePillar(idx)}
                  >
                    <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                      <div className={`md:col-span-1 text-xl font-bold transition-colors duration-300 ${activePillar === idx ? 'text-white/50' : 'text-white/20'}`}>
                        {pillar.number}
                      </div>
                      <div className={`md:col-span-4 font-display font-semibold transition-colors duration-300 ${activePillar === idx ? 'text-white' : 'text-white/50'}`}>
                        {pillar.title}
                      </div>
                      <div className={`md:col-span-7 text-sm font-light leading-relaxed transition-colors duration-300 ${activePillar === idx ? 'text-white/70' : 'text-white/30'}`}>
                        {pillar.description}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Companies */}
      {boardMembers.length > 0 && (
        <section id="board-of-directors" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Board Companies</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                Led by the <span className="font-semibold">industry’s best.</span>
              </h2>
            </SectionReveal>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
              {boardMembers.map((member, idx) => {
                const logoSrc = member.logoUrl || mediaUrl(member.logo)
                return (
                  <SectionReveal key={member.name} delay={idx * 0.02}>
                    <div className="bg-rfci-white p-4 flex items-center justify-center h-20 border border-black/5">
                      {logoSrc ? (
                        <img src={logoSrc} alt={member.name} className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity" />
                      ) : (
                        <span className="text-xs font-medium text-rfci-black/40 text-center">{member.name}</span>
                      )}
                    </div>
                  </SectionReveal>
                )
              })}
            </div>

            <SectionReveal className="mt-10 text-center">
              <a href="/members" className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all">
                View Full Member Directory <ArrowRight className="w-4 h-4" />
              </a>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-rfci-blue">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-display font-light text-white mb-6">
              See why resilient flooring leads the industry.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/why-resilient" className="inline-flex items-center justify-center gap-2 bg-white text-rfci-black px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black hover:text-white transition-colors">
                Why Resilient <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/certifications" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors">
                Our Certifications <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
