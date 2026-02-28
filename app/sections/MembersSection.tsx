'use client'

import { motion } from 'motion/react'
import { Users, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { mediaUrl } from '../_lib/transforms'

type MemberDoc = {
  name: string
  logoUrl?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: any
  website?: string
  row?: string
  order?: number
}

const MEMBERS_STATIC: MemberDoc[] = [
  { name: 'AHF Products',       logo: { url: 'https://rfci.com/wp-content/uploads/2022/01/AHF-gray.jpg' } },
  { name: 'American Biltrite',  logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/American-Biltrite-gray.jpg' } },
  { name: 'Beauflor',           logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/beauflor-gray.jpg' } },
  { name: 'Bentley',            logo: { url: 'https://rfci.com/wp-content/uploads/2023/07/Bentley-gray.jpg' } },
  { name: 'CFL',                logo: { url: 'https://rfci.com/wp-content/uploads/2021/01/cfl-grey-1.jpg' } },
  { name: 'Classen',            logo: { url: 'https://rfci.com/wp-content/uploads/2025/02/classen-gray-img.jpg' } },
  { name: 'Congoleum',          logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/congoleum-gray.jpg' } },
  { name: 'Engineered Floors',  logo: { url: 'https://rfci.com/wp-content/uploads/2020/02/Engineered-Floors-gray.jpg' } },
  { name: 'Gerflor',            logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/gerflor-gray.jpg' } },
  { name: 'HMTX Industries',    logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/hmtx-gray.jpg' } },
  { name: 'Interface',          logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/interface-gray.jpg' } },
  { name: 'Karndean',           logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/karndean-gray.jpg' } },
  { name: 'Mannington',         logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/mannington-gray.jpg' } },
  { name: 'Mohawk',             logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/mohawk-gray.jpg' } },
  { name: 'MSI',                logo: { url: 'https://rfci.com/wp-content/uploads/2022/04/MSI-gray.jpg' } },
  { name: 'Novalis',            logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/Novalis-gray.jpg' } },
  { name: 'NOX Corp',           logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/nox-corp-gray.jpg' } },
  { name: 'Roppe',              logo: { url: 'https://rfci.com/wp-content/uploads/2018/04/roppe-gray.jpg' } },
  { name: 'Shaw',               logo: { url: 'https://rfci.com/wp-content/uploads/2022/04/Shaw-gray.jpg' } },
  { name: 'Tarkett',            logo: { url: 'https://rfci.com/wp-content/uploads/2020/10/Tarkett-gray.jpg' } },
  { name: 'Torlys',             logo: { url: 'https://rfci.com/wp-content/uploads/2018/10/torlys-logo-gray.png' } },
  { name: 'Wellmade',           logo: { url: 'https://rfci.com/wp-content/uploads/2020/02/wellmade-gray.jpg' } },
  { name: 'Windmöller',         logo: { url: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-gray-1.jpg' } },
]

const TastefulShader = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none bg-rfci-black z-0">
    <motion.div
      animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, -50, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-rfci-blue/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, 100, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[150px]"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 50, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-rfci-blue/10 rounded-full blur-[100px]"
    />
  </div>
)

function MemberLogo({ member }: { member: MemberDoc }) {
  const logoUrl = member.logoUrl || mediaUrl(member.logo)
  if (logoUrl) {
    return (
      <div className="group w-36 h-12 flex items-center justify-center shrink-0">
        <img
          src={logoUrl}
          alt={member.name}
          className="w-full h-full object-contain [filter:invert(0.88)_brightness(1.2)_opacity(0.6)] group-hover:[filter:invert(0.88)_brightness(1.5)_opacity(1)] transition-[filter] duration-300"
        />
      </div>
    )
  }
  return (
    <span className="text-xs font-sans font-medium tracking-widest uppercase text-white/50 whitespace-nowrap">
      {member.name}
    </span>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MembersSection({ members }: { members: any[] }) {
  // Show row1 members from CMS only if they have logo URLs; otherwise fall back to static list
  const cmsRow1 = (members ?? []).filter((m: MemberDoc) => !m.row || m.row === '1')
  const cmsHasLogos = cmsRow1.some((m: MemberDoc) => m.logoUrl || mediaUrl(m.logo))
  const displayMembers: MemberDoc[] = cmsHasLogos ? cmsRow1 : MEMBERS_STATIC

  return (
    <section id="members" className="py-40 bg-rfci-black text-white relative overflow-hidden">
      <TastefulShader />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rfci-black/50 z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 mb-20 text-center">
        <SectionReveal className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white/10 flex items-center justify-center mb-8 border border-white/20">
            <Users className="w-8 h-8 text-rfci-blue" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-6 leading-[1.1] tracking-tight">
            Meet our <br /><span className="font-semibold text-rfci-blue">member companies.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            RFCI members are the manufacturers and suppliers behind resilient flooring. Together, we set standards, share knowledge, and move the category forward.
          </p>
          <button className="text-xl md:text-2xl font-display font-light text-white hover:text-rfci-blue transition-colors flex items-center justify-center gap-4 group relative">
            <span className="relative">
              <span className="relative z-10 flex items-center gap-4">
                View Member Directory <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 group-hover:bg-rfci-blue transition-colors duration-300" />
            </span>
          </button>
        </SectionReveal>
      </div>

      {/* Scrolling Logo Marquee */}
      <div className="relative w-full overflow-hidden bg-white/5 py-10 border-y border-white/10 z-20">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-rfci-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-rfci-black to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...displayMembers, ...displayMembers, ...displayMembers].map((member, i) => (
            <div key={i} className="flex items-center gap-4 mx-12 shrink-0">
              {member.website ? (
                <a href={member.website} target="_blank" rel="noopener noreferrer" title={member.name}>
                  <MemberLogo member={member} />
                </a>
              ) : (
                <MemberLogo member={member} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
