'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, useInView, type MotionValue } from 'motion/react'
import { SectionReveal } from '../../_components/SectionReveal'

type Milestone = { year: string; title: string; description: string }

function MilestoneCard({
  milestone,
  index,
  total,
  progress,
}: {
  milestone: Milestone
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-rfci-cream'

  // Each card occupies a segment of the overall scroll: [segStart, segEnd]
  const segStart = index / total
  const segEnd = (index + 1) / total
  const segLen = segEnd - segStart

  // --- Incoming card: slides up from 100% to 0% ---
  const y = useTransform(
    progress,
    [segStart, segEnd],
    index === 0 ? ['0%', '0%'] : ['100%', '0%'],
  )

  // --- Content stagger: year badge, title, description fade in sequentially ---
  const stagger1Start = segStart + segLen * 0.3
  const stagger1End = segStart + segLen * 0.5
  const stagger2Start = segStart + segLen * 0.4
  const stagger2End = segStart + segLen * 0.6
  const stagger3Start = segStart + segLen * 0.5
  const stagger3End = segStart + segLen * 0.7

  const badge = {
    opacity: useTransform(progress, index === 0 ? [0, 0.01] : [stagger1Start, stagger1End], [0, 1]),
    y: useTransform(progress, index === 0 ? [0, 0.01] : [stagger1Start, stagger1End], index === 0 ? [0, 0] : [20, 0]),
  }
  const title = {
    opacity: useTransform(progress, index === 0 ? [0, 0.02] : [stagger2Start, stagger2End], [0, 1]),
    y: useTransform(progress, index === 0 ? [0, 0.02] : [stagger2Start, stagger2End], index === 0 ? [0, 0] : [20, 0]),
  }
  const desc = {
    opacity: useTransform(progress, index === 0 ? [0, 0.03] : [stagger3Start, stagger3End], [0, 1]),
    y: useTransform(progress, index === 0 ? [0, 0.03] : [stagger3Start, stagger3End], index === 0 ? [0, 0] : [20, 0]),
  }

  // Watermark parallax
  const yearY = useTransform(progress, [segStart, segEnd], [40, -40])

  return (
    <motion.div
      className={`absolute inset-0 flex items-center overflow-hidden ${bgClass}`}
      style={{
        y,
        zIndex: index + 1,
      }}
    >
      {/* Oversized watermark year */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{ y: yearY }}
      >
        <span className="text-[12rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem] font-display font-bold text-rfci-blue/[0.04] leading-none whitespace-nowrap">
          {milestone.year}
        </span>
      </motion.div>

      {/* Content with staggered entrance */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
        <div className="max-w-2xl">
          {/* Year badge — enters first */}
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            style={{ opacity: badge.opacity, y: badge.y }}
          >
            <div className="w-8 h-px bg-rfci-blue" />
            <span className="text-label font-bold tracking-widest uppercase text-rfci-blue">{milestone.year}</span>
          </motion.div>

          {/* Title — enters second */}
          <motion.h3
            className="text-3xl md:text-5xl lg:text-6xl font-display font-light mb-6 leading-tight"
            style={{ opacity: title.opacity, y: title.y }}
          >
            {milestone.title}
          </motion.h3>

          {/* Description — enters third */}
          <motion.p
            className="text-lg md:text-xl text-rfci-black/55 leading-relaxed font-light max-w-lg"
            style={{ opacity: desc.opacity, y: desc.y }}
          >
            {milestone.description}
          </motion.p>

          {/* Progress indicator — enters with description */}
          <motion.div
            className="mt-10 flex items-center gap-4"
            style={{ opacity: desc.opacity, y: desc.y }}
          >
            <span className="text-sm font-display text-rfci-black/30">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="w-24 h-px bg-rfci-blue/15 relative">
              <div
                className="absolute inset-y-0 left-0 bg-rfci-blue"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>
            <span className="text-sm font-display text-rfci-black/30">
              {String(total).padStart(2, '0')}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Drop shadow on incoming card for depth */}
      {index > 0 && (
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/[0.06] to-transparent pointer-events-none" />
      )}
    </motion.div>
  )
}

export function HistoryStackedReveal({ milestones }: { milestones: Milestone[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const total = milestones.length

  // Only show side nav when the sticky section is in view
  const isInView = useInView(stickyRef, { margin: '-10% 0px -10% 0px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(Math.floor(latest * total), total - 1)
    setActiveIndex(idx)
  })

  return (
    <div ref={containerRef}>
      {/* Section header */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="text-center">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Our History</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light">
              Over <span className="font-semibold">180 years</span> of innovation.
            </h2>
            <p className="mt-4 text-lg text-rfci-black/50 font-light max-w-xl mx-auto">
              From a single invention in 1845 to the dominant force in North American flooring.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Sticky side navigation dots — only visible when history section is in view */}
      <motion.div
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50"
        initial={false}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ pointerEvents: isInView ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center gap-3">
          {milestones.map((m, idx) => (
            <div key={idx} className="group flex items-center gap-3">
              <span
                className={`text-xs font-display transition-opacity duration-300 ${
                  idx === activeIndex ? 'opacity-100 text-rfci-blue' : 'opacity-0 group-hover:opacity-100 text-rfci-black/40'
                }`}
              >
                {m.year}
              </span>
              <div
                className={`rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-3 h-3 bg-rfci-blue'
                    : 'w-2 h-2 bg-rfci-blue/20 group-hover:bg-rfci-blue/40'
                }`}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll runway */}
      <div style={{ height: `${total * 100}vh` }}>
        {/* Single sticky viewport */}
        <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
          {milestones.map((milestone, idx) => (
            <MilestoneCard
              key={idx}
              milestone={milestone}
              index={idx}
              total={total}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
