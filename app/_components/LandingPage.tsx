'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { IconContext } from '@phosphor-icons/react'
import { Navigation, Footer } from './Shared'
import { BackToTopButton } from './BackToTopButton'
import { HeroSection } from '../sections/HeroSection'
import { MaterialsCarousel } from '../sections/MaterialsCarousel'
import { EnvironmentsSection } from '../sections/EnvironmentsSection'
import { WhyResilientSection } from '../sections/WhyResilientSection'
import { MissionSection } from '../sections/MissionSection'
import { StandardsSection } from '../sections/StandardsSection'
import { CommunitySection } from '../sections/CommunitySection'
// import { EducationSection } from '../sections/EducationSection'
import { LinkedInFeedSection } from '../sections/LinkedInFeedSection'
import { MembersSection } from '../sections/MembersSection'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LandingPage(props: Record<string, any>) {
  const { siteSettings, communityEvent, members, flooringTypes, certifications, environments, videos, linkedInPosts } = props

  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 1000], [0, 300])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <IconContext.Provider value={{ weight: 'light' }}>
      <div ref={containerRef} className="min-h-screen bg-white text-rfci-black font-sans selection:bg-rfci-blue selection:text-white overflow-hidden">
        {/* Global Scroll Progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-rfci-blue origin-left z-[60] shadow-[0_0_10px_rgba(1,100,219,0.5)]"
          style={{ scaleX }}
        />

        <Navigation isScrolled={isScrolled} theme="dark" />

        <HeroSection heroY={heroY} siteSettings={siteSettings} />

        {/* Section divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-rfci-light-gray to-transparent" />
        </div>

        <MaterialsCarousel flooringTypes={flooringTypes} />

        <EnvironmentsSection environments={environments} />

        <WhyResilientSection />

        <MissionSection />

        <StandardsSection certifications={certifications} />

        <CommunitySection communityEvent={communityEvent} />

        {/* <EducationSection videos={videos} /> */}

        <LinkedInFeedSection linkedInPosts={linkedInPosts} />

        <MembersSection members={members} />

        <Footer />

        <BackToTopButton visible={showBackToTop} />
      </div>
    </IconContext.Provider>
  )
}
