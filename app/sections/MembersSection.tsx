'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Users, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { MEMBERS, type Member } from '../_data/members'
import { SITE_SETTINGS } from '../_data/site-settings'

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

function MemberLogo({ member }: { member: Member }) {
  const logoUrl = member.logoUrl
  if (logoUrl) {
    return (
      <div className="group w-36 h-12 flex items-center justify-center shrink-0">
        <img
          src={logoUrl}
          alt={member.name}
          className="w-full h-full object-contain brightness-0 invert opacity-50 group-hover:opacity-90 transition-opacity duration-300"
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

export function MembersSection() {
  // Show row1 members that have logos
  const displayMembers = MEMBERS.filter(m => (!m.row || m.row === '1') && m.logoUrl)

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
            {SITE_SETTINGS.membersHeading}
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {SITE_SETTINGS.membersSubheading}
          </p>
          <Link href="/members" className="text-xl md:text-2xl font-display font-light text-white hover:text-rfci-blue transition-colors flex items-center justify-center gap-4 group relative">
            <span className="relative">
              <span className="relative z-10 flex items-center gap-4">
                {SITE_SETTINGS.membersCtaText || 'View Member Directory'} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 group-hover:bg-rfci-blue transition-colors duration-300" />
            </span>
          </Link>
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
