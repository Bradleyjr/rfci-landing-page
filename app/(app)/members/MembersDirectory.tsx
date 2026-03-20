'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { SectionReveal } from '../../_components/SectionReveal'
import { MEMBERS, type Member } from '../../_data/members'

function MemberCard({ member }: { member: Member }) {
  const logoSrc = member.logoUrl

  const card = (
    <div className="group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 p-6 md:p-8 flex flex-col items-center text-center h-full">
      {/* Logo */}
      <div className="w-full h-20 md:h-24 flex items-center justify-center mb-4 bg-rfci-cream/50 p-3">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={member.name}
            className="max-w-full max-h-full object-contain mix-blend-multiply"
          />
        ) : (
          <span className="text-sm font-display font-medium text-rfci-black/50 group-hover:text-rfci-black transition-colors">
            {member.name}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-sm font-medium text-rfci-black/70 group-hover:text-rfci-black transition-colors">
        {member.name}
      </h3>

      {/* External link indicator */}
      {member.website && (
        <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-rfci-blue" />
        </div>
      )}
    </div>
  )

  if (member.website) {
    return (
      <a href={member.website} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    )
  }

  return card
}

/** Single logo tile for the marquee */
function MarqueeLogo({ member }: { member: Member }) {
  return (
    <div className="bg-white/10 flex items-center justify-center h-16 w-full px-4 my-1.5">
      {member.logoUrl ? (
        <img
          src={member.logoUrl}
          alt={member.name}
          className="max-h-8 max-w-[120px] w-auto object-contain brightness-0 invert opacity-60"
        />
      ) : (
        <span className="text-xs text-white/50 font-medium text-center leading-tight px-1">{member.name}</span>
      )}
    </div>
  )
}

export function MembersDirectory({ members, pageSettings }: { members?: Member[]; pageSettings?: { heroHeading?: string; heroSubheading?: string; boardSectionHeading?: string; boardSectionDescription?: string; associateSectionHeading?: string; associateSectionDescription?: string } }) {
  const displayMembers = members?.length ? members : MEMBERS

  const boardMembers = displayMembers.filter(m => m.tier === 'board')
  const associateMembers = displayMembers.filter(m => m.tier === 'associate')
  const allLogos = [...boardMembers, ...associateMembers]

  // Split into two columns for the marquee
  const mid = Math.ceil(allLogos.length / 2)
  const col1 = allLogos.slice(0, mid)
  const col2 = allLogos.slice(mid)

  return (
    <PageLayout>
      {/* Custom Hero with vertical marquee */}
      <style>{`
        @keyframes marquee-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
      `}</style>

      <section className="bg-rfci-black pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

            {/* Text column */}
            <SectionReveal direction="left" className="lg:col-span-7">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">
                Member Directory
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight text-white mb-6">
                {pageSettings?.heroHeading || <>Meet our <span className="font-semibold">member companies.</span></>}
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
                {pageSettings?.heroSubheading || 'RFCI members are the manufacturers and suppliers behind resilient flooring. Together, we set standards, share knowledge, and move the category forward.'}
              </p>
            </SectionReveal>

            {/* Marquee column */}
            <div className="hidden lg:flex lg:col-span-5 mt-10 lg:mt-0 gap-3 h-[400px] overflow-hidden">
              {/* Column 1 — scrolling up */}
              <div className="flex-1 overflow-hidden">
                <div
                  style={{ animation: 'marquee-up 28s linear infinite' }}
                >
                  {[...col1, ...col1].map((member, i) => (
                    <MarqueeLogo key={`c1-${i}`} member={member} />
                  ))}
                </div>
              </div>

              {/* Column 2 — scrolling down */}
              <div className="flex-1 overflow-hidden">
                <div
                  style={{ animation: 'marquee-down 24s linear infinite' }}
                >
                  {[...col2, ...col2].map((member, i) => (
                    <MarqueeLogo key={`c2-${i}`} member={member} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Board Companies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-3">{pageSettings?.boardSectionHeading || 'Flooring Manufacturers'}</div>
            <p className="text-rfci-black/60 font-light max-w-2xl">
              {pageSettings?.boardSectionDescription || 'RFCI Flooring Manufacturer members are the leading producers of resilient flooring sold in North America — represented on the RFCI Board of Directors.'}
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {boardMembers.map((member, idx) => (
              <SectionReveal key={member.name} delay={idx * 0.03}>
                <MemberCard member={member} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Associate Members */}
      {associateMembers.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-3">{pageSettings?.associateSectionHeading || 'Supply Chain Partners'}</div>
              <p className="text-rfci-black/60 font-light max-w-2xl">
                {pageSettings?.associateSectionDescription || 'RFCI Supply Chain Partner members provide the raw materials, additives, adhesives, and components that make resilient flooring possible.'}
              </p>
            </SectionReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {associateMembers.map((member, idx) => (
                <SectionReveal key={member.name} delay={idx * 0.03}>
                  <MemberCard member={member} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry Statement */}
      <section className="py-20 md:py-28 bg-rfci-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6 leading-tight">
              Together, we represent <span className="font-semibold text-rfci-blue">the full spectrum</span> of resilient flooring.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              From luxury vinyl tile to linoleum, rubber to cork, our member companies manufacture the products
              that define resilient flooring. United under RFCI, we advocate for the industry, develop standards,
              and advance sustainability.
            </p>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
