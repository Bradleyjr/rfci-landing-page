'use client'

import { motion, type MotionValue, type Variants } from 'motion/react'
import { ArrowRight, Certificate } from '@phosphor-icons/react'
import { SITE_SETTINGS } from '../_data/site-settings'

const HERO_STATIC = {
  heroImageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
}

const lineVariants: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', y: 30, opacity: 0 },
  visible: (i: number) => ({
    clipPath: 'inset(0 0 0% 0)',
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export function HeroSection({ heroY }: { heroY: MotionValue<number> }) {
  const heroLine1 = SITE_SETTINGS.heroLine1
  const heroLine2 = SITE_SETTINGS.heroLine2
  const heroSubheading = SITE_SETTINGS.heroSubheading
  const heroCta = SITE_SETTINGS.heroCta
  const heroBoxText = SITE_SETTINGS.heroBoxText
  const heroImageUrl = HERO_STATIC.heroImageUrl

  return (
    <section id="hero" className="relative min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-rfci-cream pt-32 pb-16 md:pt-20 md:pb-0 px-6 md:px-12">
      <div className="absolute right-0 top-0 w-full md:w-[45%] h-full hidden md:block overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: heroY }}
          className="w-full h-[120%] -top-[10%] relative"
        >
          {/* Video-ready: replace src with provided video file */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroImageUrl}
            className="w-full h-full object-cover"
          >
            <source src="/media/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-rfci-cream/10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[55%] md:pr-16 lg:pr-24 flex flex-col">
          <div className="order-1 md:order-none">
            {/* H1: replaced three-unit arbitrary sizes with design-system scale */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter text-rfci-black mb-6 md:mb-8">
              <motion.span className="block overflow-hidden" custom={0} variants={lineVariants} initial="hidden" animate="visible">
                {heroLine1}
              </motion.span>
              <motion.span className="block overflow-hidden italic font-light text-rfci-blue" custom={1} variants={lineVariants} initial="hidden" animate="visible">
                {heroLine2}
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg md:text-xl text-rfci-black/70 max-w-lg font-light mb-8 md:mb-12 leading-relaxed"
            >
              {heroSubheading}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[40vh] relative md:hidden order-2 mb-8"
          >
            <img src={heroImageUrl} className="w-full h-full object-cover shadow-sm" alt="Resilient Flooring" style={{ animation: 'hero-zoom 20s ease-in-out infinite alternate' }} />
          </motion.div>
        </div>

        <div className="w-full md:w-[45%] flex justify-center md:justify-end order-3 md:order-none">
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="w-full max-w-sm bg-white p-8 md:p-12 border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative md:-mt-0 -mt-16 z-20"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-rfci-blue flex items-center justify-center text-white z-20">
              <Certificate className="w-4 h-4" weight="fill" />
            </div>
            <p className="text-rfci-black/80 font-medium mb-8 md:mb-10 text-base leading-loose relative z-20">{heroBoxText}</p>
            <a href="/about" className="text-label font-bold tracking-widest uppercase text-rfci-blue flex items-center gap-2 group relative z-20">
              <span className="relative">
                <span className="relative z-10 flex items-center gap-2">
                  {heroCta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-blue group-hover:w-full group-hover:h-[2px] transition-all duration-300" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-label font-bold tracking-widest uppercase text-rfci-black/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-rfci-black/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-rfci-black/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
