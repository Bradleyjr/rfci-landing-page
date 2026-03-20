'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

type FAQItem = {
  question: string
  answer: string
}

export function FAQAccordion({ faqs, className }: { faqs: FAQItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={className}>
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-b border-black/10">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
          >
            <span className="text-lg font-display font-medium text-rfci-black group-hover:text-rfci-blue transition-colors duration-200">
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 text-rfci-black/40"
            >
              <CaretDown size={20} weight="bold" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-5">
                  <p className="text-base text-rfci-black/60 leading-relaxed font-light">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
