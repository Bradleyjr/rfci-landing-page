'use client'

import { motion, type MotionValue, type Variants } from 'motion/react'
import { ArrowRight, Certificate } from '@phosphor-icons/react'
import { SITE_SETTINGS } from '../_data/site-settings'

const HERO_STATIC = {
  heroImageUrl: '/images/inspiration/applications/homes/72200-RS.jpg',
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
    <section id="hero" className="relative min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-rfci-cream pt-16 pb-16 md:pt-0 md:pb-0">
      <div className="absolute inset-0 hidden md:block overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: heroY }}
          className="w-full h-[120%] -top-[10%] relative"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroImageUrl}
            className="w-full h-full object-cover"
          >
            <source src="/media/hero-video.mp4?v=2" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-rfci-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-rfci-cream via-rfci-cream/90 via-[35%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-rfci-cream/80 via-transparent to-rfci-cream/40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[55%] md:pr-16 lg:pr-24 flex flex-col">
          <div className="order-1 md:order-none">
            {/* H1: replaced three-unit arbitrary sizes with design-system scale */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter text-rfci-black mb-6 md:mb-8">
              <motion.span className="block overflow-hidden" custom={0} variants={lineVariants} initial="hidden" animate="visible">
                {SITE_SETTINGS.heroLine1}
              </motion.span>
              <motion.span className="block overflow-hidden" custom={1} variants={lineVariants} initial="hidden" animate="visible">
                <span className="text-rfci-black font-bold not-italic">COVERING </span><span className="italic font-light text-rfci-blue">INSTITUTE</span>
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg md:text-xl text-rfci-black/70 max-w-lg font-light mb-8 md:mb-10 leading-relaxed whitespace-pre-line"
            >
              {SITE_SETTINGS.heroSubheading}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200"
              >
                {SITE_SETTINGS.heroCta} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/members"
                className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200"
              >
                Meet our Members <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
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
      </div>

    </section>
  )
}
