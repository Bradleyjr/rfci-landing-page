'use client'

import { useState } from 'react'
import { ArrowRight, MapPin, Calendar, PlayCircle } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PhotoPageHero } from '../../_components/PhotoPageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'
import { TESTIMONIAL_VIDEOS } from '../../_data/testimonial-videos'

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
export function AboutRFCI({ aboutPage, members }: { aboutPage: any; members: any[] }) {
  const [activePillar, setActivePillar] = useState(0)
  const pillars = aboutPage?.strategicPillars?.length ? aboutPage.strategicPillars : PILLARS_STATIC
  const boardMembers: MemberDoc[] = (members ?? []).filter((m: MemberDoc) => !m.tier || m.tier === 'board')

  return (
    <PageLayout>
      {/* Hero */}
      <PhotoPageHero
        label="About RFCI"
        heading={<>The voice of <span className="font-semibold">resilient flooring.</span></>}
        subheading={aboutPage?.heroSubheading || "Founded in 1976, the Resilient Floor Covering Institute is the trade association for North America's resilient flooring industry — representing the manufacturers and suppliers behind vinyl, rubber, linoleum, and cork flooring."}
        photo={{ src: '/media/community/board-of-directors-2025.jpeg', alt: 'RFCI Board of Directors 2025' }}
      >
        <div className="flex items-center gap-6 text-sm text-white/60 mt-6">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Est. 1976</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> LaGrange, Georgia</span>
        </div>
      </PhotoPageHero>

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
                <div className="text-5xl md:text-6xl font-display font-bold text-rfci-blue mb-4">50</div>
                <div className="text-label font-bold tracking-widest uppercase text-rfci-black/50 mb-6">Years of industry leadership</div>
                <p className="text-rfci-black/60 font-light leading-relaxed">
                  Since 1976, RFCI has served as the unifying voice for resilient flooring — driving standards, advancing sustainability, and connecting the industry.
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

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6">
              {boardMembers.slice(0, Math.floor(boardMembers.length / 5) * 5).map((member, idx) => {
                const logoSrc = member.logoUrl || mediaUrl(member.logo)
                return (
                  <SectionReveal key={member.name} delay={idx * 0.02}>
                    <a href={member.website || '#'} target="_blank" rel="noopener noreferrer" className="bg-rfci-cream/50 p-4 flex items-center justify-center h-28 group block">
                      {logoSrc ? (
                        <img src={logoSrc} alt={member.name} className="max-w-full max-h-full object-contain mix-blend-multiply grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                      ) : (
                        <span className="text-xs font-medium text-rfci-black/40 text-center group-hover:text-rfci-blue transition-colors">{member.name}</span>
                      )}
                    </a>
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

      {/* Testimonial Videos */}
      {TESTIMONIAL_VIDEOS.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Testimonials</div>
              <h2 className="text-3xl md:text-4xl font-display font-light">
                Hear from the <span className="font-semibold">industry.</span>
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIAL_VIDEOS.sort((a, b) => a.order - b.order).map((video, index) => (
                <SectionReveal key={`${video.company}-${video.title}`} delay={index * 0.05}>
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full overflow-hidden rounded-sm border border-black/5 bg-white transition-all duration-200 hover:border-rfci-blue/20 hover:shadow-lg"
                  >
                    <div className="relative aspect-video overflow-hidden bg-rfci-black/10">
                      {video.thumbnailUrl ? (
                        <img src={video.thumbnailUrl} alt={video.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-rfci-black/20">
                          <PlayCircle className="h-12 w-12" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-rfci-black/20 group-hover:bg-rfci-black/40 transition-colors duration-500 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                          <PlayCircle className="w-6 h-6 text-white group-hover:text-rfci-blue transition-colors duration-500" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 text-label font-bold uppercase tracking-widest text-rfci-blue">
                        {video.company} · {video.segment}
                      </div>
                      <h2 className="mb-3 text-2xl font-display font-light leading-tight text-rfci-black">
                        {video.title}
                      </h2>
                      <p className="text-rfci-black/60 font-light leading-relaxed">&ldquo;{video.quote}&rdquo;</p>
                    </div>
                  </a>
                </SectionReveal>
              ))}
            </div>
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
