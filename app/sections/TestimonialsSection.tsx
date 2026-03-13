'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Quotes, ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "RFCI has been instrumental in setting the standard for resilient flooring. Their commitment to quality and sustainability aligns perfectly with what we look for in our projects.",
    author: "Jane Smith",
    title: "Director of Procurement",
    company: "National Flooring Partners"
  },
  {
    quote: "The technical resources and certification programs offered by RFCI give us confidence that the products we specify meet the highest performance standards.",
    author: "Michael Chen",
    title: "Senior Architect",
    company: "Gensler"
  },
  {
    quote: "Working with RFCI members means working with companies that are committed to continuous improvement and environmental responsibility.",
    author: "Sarah Williams",
    title: "Sustainability Manager",
    company: "USGBC"
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => {
      const next = prev + dir
      if (next < 0) return TESTIMONIALS.length - 1
      if (next >= TESTIMONIALS.length) return 0
      return next
    })
  }

  const testimonial = TESTIMONIALS[current]

  return (
    <section className="py-32 bg-rfci-cream relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]">
        <div className="w-full h-full bg-gradient-to-l from-rfci-blue to-transparent" />
      </div>

      <SectionReveal>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-rfci-blue" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-rfci-blue">
              What People Say
            </span>
          </div>

          {/* Testimonial card */}
          <div className="relative min-h-[280px]">
            <Quotes
              weight="fill"
              className="absolute -top-2 -left-2 text-rfci-blue/10"
              size={80}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10"
              >
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-rfci-black mb-10 tracking-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-rfci-blue" />
                  <div>
                    <p className="font-medium text-rfci-black">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-rfci-black/60">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-rfci-light-gray/50">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-rfci-blue w-8'
                      : 'bg-rfci-light-gray hover:bg-rfci-blue/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full border border-rfci-light-gray flex items-center justify-center hover:border-rfci-blue hover:text-rfci-blue transition-colors"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-10 h-10 rounded-full border border-rfci-light-gray flex items-center justify-center hover:border-rfci-blue hover:text-rfci-blue transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
