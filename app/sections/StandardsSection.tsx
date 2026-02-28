'use client'

import { useState, useRef, useEffect, type Key } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Atom, ArrowRight, CaretDown, ShieldCheck, FileText } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { CERT_ICONS, mediaUrl } from '../_lib/transforms'

type CertDoc = {
  slug: string
  title: string
  iconName: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any
  stats?: Array<{ value: string; label: string; id?: string }>
  order?: number
}

const CERTS_STATIC: CertDoc[] = [
  {
    slug: 'floorscore',
    title: 'FloorScore®',
    iconName: 'shieldCheck',
    description: 'FloorScore is the flooring industry\'s most recognized indoor air quality certification. It\'s independently administered by SCS Global Services and verifies that a product meets California\'s strict VOC emissions standards—one of the toughest benchmarks in the world.',
    image: { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: '10,000+', label: 'Certified Products' },
      { value: '97%', label: 'Market Coverage' },
    ],
  },
  {
    slug: 'assure',
    title: 'ASSURE® Certified',
    iconName: 'leaf',
    description: 'ASSURE® is RFCI\'s third-party sustainability certification for resilient flooring products. It evaluates products across the full lifecycle—raw materials, manufacturing, product performance, and end-of-life—giving manufacturers a rigorous and credible way to demonstrate sustainability leadership.',
    image: { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'Full Lifecycle', label: 'Assessment Scope' },
      { value: '100%', label: 'Third-Party Verified' },
    ],
  },
  {
    slug: 'affirm',
    title: 'AFFIRM™ Certified',
    iconName: 'globe',
    description: 'AFFIRM™ is RFCI\'s material health certification program for resilient flooring. It evaluates and discloses the chemical ingredients in flooring products, helping manufacturers demonstrate transparency and enabling specifiers to make informed decisions about material health.',
    image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'Ingredient', label: 'Level Transparency' },
      { value: '100%', label: 'Third-Party Verified' },
    ],
  },
]

function AnimatedStat({ value, label }: { key?: Key; value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const match = value.match(/^([\d.]+)/)
          if (!match) { setDisplay(value); return }
          const target = parseFloat(match[1])
          const suffix = value.slice(match[1].length)
          const startTime = performance.now()
          const duration = 1200
          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * target)
            setDisplay(current + suffix)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="border-l-2 border-rfci-blue pl-6">
      <div className="text-4xl font-display font-light text-white mb-2">{display}</div>
      <div className="text-xs font-bold tracking-widest uppercase text-white/40">{label}</div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function StandardsSection({ certifications }: { certifications: any[] }) {
  const displayCerts: CertDoc[] = certifications?.length ? certifications : CERTS_STATIC
  const [activeTab, setActiveTab] = useState(displayCerts[0]?.slug ?? '')

  // Update activeTab if certifications change (e.g., after SSR hydration)
  useEffect(() => {
    if (displayCerts.length && !displayCerts.find(c => c.slug === activeTab)) {
      setActiveTab(displayCerts[0].slug)
    }
  }, [displayCerts, activeTab])

  return (
    <section id="standards" className="py-40 bg-rfci-black text-white relative overflow-hidden">
      {/* Atomic Icon Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5 pointer-events-none"
      >
        <Atom className="w-[800px] h-[800px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionReveal className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4">Certifications</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">Certifications you can rely on.</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            RFCI manages three of the flooring industry&apos;s most trusted certification programs. If you&apos;re specifying products or evaluating sustainability claims, these are the benchmarks that matter.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Desktop Tabs List */}
          <div className="hidden lg:block lg:col-span-5 space-y-4">
            {displayCerts.map((tab) => {
              const IconComp = CERT_ICONS[tab.iconName] ?? ShieldCheck
              return (
                <button
                  key={tab.slug}
                  onClick={() => setActiveTab(tab.slug)}
                  className={`w-full text-left py-8 px-10 border-l-2 transition-all duration-300 flex items-center gap-6 group ${
                    activeTab === tab.slug
                      ? 'bg-white/5 border-rfci-blue'
                      : 'bg-transparent border-white/10 hover:bg-white/5 hover:border-white/30'
                  }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center shrink-0 transition-colors rounded-full ${
                    activeTab === tab.slug ? 'bg-rfci-blue/20 text-rfci-blue' : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/80'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-display font-light tracking-tight transition-colors ${activeTab === tab.slug ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
                      {tab.title}
                    </h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Desktop Tab Content with AnimatePresence */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {displayCerts.filter(tab => tab.slug === activeTab).map(tab => {
                const tabImageUrl = mediaUrl(tab.image, 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop')
                return (
                  <motion.div
                    key={tab.slug}
                    initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="bg-white/5 border border-white/10 overflow-hidden flex flex-col"
                  >
                    <div className="relative h-64 md:h-80 shrink-0 overflow-hidden">
                      <img src={tabImageUrl} alt={tab.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-10 md:p-12 flex-1 flex flex-col justify-between">
                      <p className="text-xl text-white/80 leading-relaxed mb-10">{tab.description}</p>
                      <div>
                        <div className="grid grid-cols-2 gap-8 mb-10">
                          {(tab.stats ?? []).map((stat, i) => (
                            <AnimatedStat key={`${tab.slug}-${i}`} value={stat.value} label={stat.label} />
                          ))}
                        </div>
                        <a href={`/certifications/${tab.slug}`} className="inline-flex items-center gap-2 text-rfci-blue font-medium hover:text-white transition-colors group">
                          <span className="relative">
                            <span className="relative z-10 flex items-center gap-2">
                              Explore {tab.title} <ArrowRight className="w-4 h-4" />
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-blue group-hover:w-full transition-all duration-300 ease-out" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden col-span-12 flex flex-col gap-4">
            {displayCerts.map((tab) => {
              const IconComp = CERT_ICONS[tab.iconName] ?? FileText
              const tabImageUrl = mediaUrl(tab.image, 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop')
              return (
                <div key={tab.slug} className="bg-white/5 border border-white/10 overflow-hidden flex flex-col">
                  <button
                    onClick={() => setActiveTab(activeTab === tab.slug ? '' : tab.slug)}
                    className={`w-full text-left py-6 px-6 border-l-2 transition-all duration-300 flex items-center justify-between group ${
                      activeTab === tab.slug
                        ? 'bg-white/5 border-rfci-blue'
                        : 'bg-transparent border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 flex items-center justify-center shrink-0 transition-colors rounded-full ${
                        activeTab === tab.slug ? 'bg-rfci-blue/20 text-rfci-blue' : 'bg-white/5 text-white/40'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className={`text-xl font-display font-light tracking-tight transition-colors ${activeTab === tab.slug ? 'text-white' : 'text-white/40'}`}>
                        {tab.title}
                      </h3>
                    </div>
                    <CaretDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${activeTab === tab.slug ? 'rotate-180 text-white' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeTab === tab.slug && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 flex flex-col">
                          <div className="relative h-48 w-full mb-6 mt-4 overflow-hidden">
                            <img src={tabImageUrl} alt={tab.title} className="w-full h-full object-cover" />
                          </div>
                          <p className="text-base text-white/80 leading-relaxed mb-8">{tab.description}</p>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {(tab.stats ?? []).map((stat, i) => (
                              <div key={i} className="border-l-2 border-rfci-blue pl-4">
                                <div className="text-2xl font-display font-light text-white mb-1">{stat.value}</div>
                                <div className="text-label font-bold tracking-widest uppercase text-white/40">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          <a href={`/certifications/${tab.slug}`} className="inline-flex items-center gap-2 text-rfci-blue font-medium hover:text-white transition-colors text-sm">
                            Explore {tab.title} <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
