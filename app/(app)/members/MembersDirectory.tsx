'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PhotoPageHero } from '../../_components/PhotoPageHero'
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
          <span className="text-sm font-display font-medium text-rfci-black/50 group-hover:text-rfci-black transition-colors duration-200">
            {member.name}
          </span>
        )}
      </div>

      {/* Name */}
      <h4 className="text-lg font-display font-medium text-rfci-black/70 group-hover:text-rfci-black transition-colors duration-200">
        {member.name}
      </h4>

      {/* External link indicator */}
      {member.website && (
        <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

export function MembersDirectory({ members }: { members?: Member[] }) {
  const displayMembers = members?.length ? members : MEMBERS

  const boardMembers = displayMembers.filter(m => m.tier === 'board')
  const associateMembers = displayMembers.filter(m => m.tier === 'associate')

  return (
    <PageLayout>
      <PhotoPageHero
        label="Member Listing"
        heading={<>Meet our <span className="font-semibold">member companies</span></>}
        subheading="RFCI members are the manufacturers and suppliers behind resilient flooring, companies who are focused on the future of resilient flooring. They include the largest manufacturers in the resilient flooring industry. All RFCI member companies are known for their innovation, quality, and sustainability initiatives. They've joined together through RFCI because they share a genuine commitment to improving our industry and advancing sustainability. Environmental initiatives such as FloorScore®, ASSURE® Certified, and ANSI/NSF332 Sustainability Assessment for Resilient Floor Coverings help meet these goals."
        photo={{ src: '/media/community/all-member-spring-meeting-2025.jpeg', alt: 'RFCI members networking at spring meeting' }}
      >
        <p className="text-white/70 text-lg leading-relaxed font-light mt-4">
          RFCI members are absolutely committed to working together to promote the industry, serve their customers better, protect the environment, and comply with all legal requirements. Membership is open to any flooring manufacturer or supplier who meets the RFCI membership criteria.
        </p>
      </PhotoPageHero>

      {/* Board Companies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Members</div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              <>Flooring <span className="font-semibold">Manufacturers</span></>
            </h2>
            <p className="text-lg text-rfci-black/60 font-light max-w-2xl leading-relaxed">
              RFCI Flooring Manufacturer members are the leading producers of resilient flooring sold in North America.
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
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Associate Members</div>
              <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
                <>Associate Supply Chain <span className="font-semibold">Partners</span></>
              </h2>
              <p className="text-lg text-rfci-black/60 font-light max-w-2xl leading-relaxed">
                RFCI Associate Supply Chain Partner members provide the raw materials, additives, adhesives, and components that make resilient flooring possible.
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
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6 leading-tight">
              Our member companies are <span className="font-semibold text-rfci-blue">on the move!</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Across the entire spectrum of resilient products, RFCI member companies innovate, create, and thrill customers in both the residential and commercial sectors. Their efforts have produced unequalled growth and have made resilient products the largest category of flooring in North America. With a solid strategic plan, RFCI is deeply honored to serve them!
            </p>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
