'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'

type MemberDoc = {
  name: string
  logoUrl?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: any
  website?: string
  description?: string
  tier?: string
  row?: string
  order?: number
}

const MEMBERS_STATIC: MemberDoc[] = [
  { name: 'AHF Products', logo: { url: 'https://rfci.com/wp-content/uploads/2022/01/AHF-gray.jpg' }, tier: 'board' },
  { name: 'American Biltrite', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/American-Biltrite-gray.jpg' }, tier: 'board' },
  { name: 'Beauflor', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/beauflor-gray.jpg' }, tier: 'board' },
  { name: 'Bentley', logo: { url: 'https://rfci.com/wp-content/uploads/2023/07/Bentley-gray.jpg' }, tier: 'board' },
  { name: 'CFL', logo: { url: 'https://rfci.com/wp-content/uploads/2021/01/cfl-grey-1.jpg' }, tier: 'board' },
  { name: 'Classen', logo: { url: 'https://rfci.com/wp-content/uploads/2025/02/classen-gray-img.jpg' }, tier: 'board' },
  { name: 'Congoleum', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/congoleum-gray.jpg' }, tier: 'board' },
  { name: 'Engineered Floors', logo: { url: 'https://rfci.com/wp-content/uploads/2020/02/Engineered-Floors-gray.jpg' }, tier: 'board' },
  { name: 'Gerflor', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/gerflor-gray.jpg' }, tier: 'board' },
  { name: 'HMTX Industries', logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/hmtx-gray.jpg' }, tier: 'board' },
  { name: 'Interface', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/interface-gray.jpg' }, tier: 'board' },
  { name: 'Karndean', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/karndean-gray.jpg' }, tier: 'board' },
  { name: 'Mannington', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/mannington-gray.jpg' }, tier: 'board' },
  { name: 'Mohawk', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/mohawk-gray.jpg' }, tier: 'board' },
  { name: 'MSI', logo: { url: 'https://rfci.com/wp-content/uploads/2022/04/MSI-gray.jpg' }, tier: 'board' },
  { name: 'Novalis', logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/Novalis-gray.jpg' }, tier: 'board' },
  { name: 'NOX Corp', logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/nox-corp-gray.jpg' }, tier: 'board' },
  { name: 'Roppe', logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/roppe-gray.jpg' }, tier: 'board' },
  { name: 'Shaw', logo: { url: 'https://rfci.com/wp-content/uploads/2022/04/Shaw-gray.jpg' }, tier: 'board' },
  { name: 'Tarkett', logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/Tarkett-gray.jpg' }, tier: 'board' },
  { name: 'Torlys', logo: { url: 'https://rfci.com/wp-content/uploads/2018/10/torlys-logo-gray.png' }, tier: 'board' },
  { name: 'Wellmade', logo: { url: 'https://rfci.com/wp-content/uploads/2020/02/wellmade-gray.jpg' }, tier: 'board' },
  { name: 'Windm\u00F6ller', logo: { url: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-gray-1.jpg' }, tier: 'board' },
]

function MemberCard({ member }: { member: MemberDoc }) {
  const logoSrc = member.logoUrl || mediaUrl(member.logo)

  const card = (
    <div className="group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center h-full">
      {/* Logo */}
      <div className="w-full h-16 md:h-20 flex items-center justify-center mb-4">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={member.name}
            className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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

      {/* Description */}
      {member.description && (
        <p className="text-xs text-rfci-black/50 mt-2 line-clamp-2 font-light">{member.description}</p>
      )}

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MembersDirectory({ members }: { members: any[] }) {
  const displayMembers: MemberDoc[] = members?.length ? members : MEMBERS_STATIC

  const boardMembers = displayMembers.filter(m => !m.tier || m.tier === 'board')
  const associateMembers = displayMembers.filter(m => m.tier === 'associate')

  return (
    <PageLayout>
      <PageHero
        label="Member Directory"
        heading={<>Meet our <span className="font-semibold text-rfci-blue">member companies.</span></>}
        subheading="RFCI members are the manufacturers and suppliers behind resilient flooring. Together, we set standards, share knowledge, and move the category forward."
      />

      {/* Board Companies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-12">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-3">Board Companies</div>
            <p className="text-rfci-black/60 font-light max-w-2xl">
              RFCI Board Company members are the leading manufacturers and suppliers of resilient flooring in North America.
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
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-3">Associate Members</div>
              <p className="text-rfci-black/60 font-light max-w-2xl">
                RFCI Associate Members are suppliers and partners who support the resilient flooring industry.
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
