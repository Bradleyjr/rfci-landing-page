'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { IconContext } from '@phosphor-icons/react'
import { Navigation, Footer } from './Shared'
import { BackToTopButton } from './BackToTopButton'

export function PageLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

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

        <Navigation isScrolled={isScrolled} theme="light" />

        {/* Page content with top padding for fixed nav */}
        <main className="pt-24">
          {children}
        </main>

        <Footer />

        <BackToTopButton visible={showBackToTop} />
      </div>
    </IconContext.Provider>
  )
}
