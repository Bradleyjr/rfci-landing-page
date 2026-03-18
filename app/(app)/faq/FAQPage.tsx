'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CaretDown, MagnifyingGlass, Envelope } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { FAQS } from '../../_data/faqs'
import { findGlossaryEntries, glossaryHref } from '../../_lib/glossary'

const CATEGORIES = [
  { key: 'all', label: 'All Questions' },
  { key: 'general', label: 'General' },
  { key: 'certifications', label: 'Certifications' },
  { key: 'sustainability', label: 'Sustainability' },
  { key: 'installation', label: 'Installation' },
  { key: 'membership', label: 'Membership' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FAQPage({ faqs, pageSettings }: { faqs: any[]; pageSettings?: any }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = faqs?.length ? faqs : FAQS

  const filteredFaqs = items.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const haystack = `${faq.question} ${extractAnswerText(faq.answer)}`.toLowerCase()
    const matchesSearch = !searchTerm || haystack.includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <PageLayout>
      <PageHero
        label="FAQ"
        heading={pageSettings?.heroHeading || <>Frequently asked <span className="font-semibold text-rfci-blue">questions.</span></>}
        subheading={pageSettings?.heroSubheading || 'Find answers to common questions about resilient flooring, RFCI certifications, sustainability, and membership.'}
      />

      <section className="bg-rfci-cream py-10">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="relative">
            <MagnifyingGlass
              className="absolute left-4 top-1/2 -translate-y-1/2 text-rfci-black/40"
              size={20}
              weight="bold"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value)
                setOpenIndex(null)
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-black/10 focus:border-rfci-blue focus:outline-none bg-white text-rfci-black placeholder:text-rfci-black/40 transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="bg-rfci-cream pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key)
                  setOpenIndex(null)
                }}
                className={`text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-rfci-blue text-white'
                    : 'bg-white text-rfci-black/60 hover:text-rfci-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rfci-cream py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionReveal>
            {filteredFaqs.length > 0 ? (
              <div>
                {filteredFaqs.map((faq, index) => {
                  const glossaryEntries = findGlossaryEntries(`${faq.question} ${extractAnswerText(faq.answer)}`)

                  return (
                    <div key={faq.question} className="border-b border-black/10">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between py-5 text-left gap-4"
                      >
                        <span className="text-lg font-display font-medium text-rfci-black">
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
                              {renderAnswer(faq.answer)}
                              {glossaryEntries.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {glossaryEntries.map((entry) => (
                                    <Link
                                      key={entry.term}
                                      href={glossaryHref(entry.term)}
                                      className="rounded-full border border-rfci-blue/20 px-3 py-1 text-label font-bold uppercase tracking-widest text-rfci-blue hover:bg-rfci-blue hover:text-white transition-colors"
                                    >
                                      {entry.term}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-rfci-black/50 text-center py-12 font-light">
                No questions found matching your search.
              </p>
            )}
          </SectionReveal>
        </div>
      </section>

      <section className="bg-rfci-black text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              {pageSettings?.ctaHeading || 'Still have questions?'}
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              {pageSettings?.ctaSubheading || 'We are here to help. Reach out to our team and we will get back to you as soon as possible.'}
            </p>
            <a
              href={`mailto:${pageSettings?.ctaEmail || 'info@rfci.com'}`}
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-6 py-3 rounded-full font-bold text-label tracking-widest uppercase hover:bg-rfci-blue/90 transition-colors"
            >
              <Envelope size={18} weight="bold" />
              Contact Us
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}

function extractAnswerText(answer: unknown) {
  if (typeof answer === 'string') return answer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((answer as any)?.root?.children) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (answer as any).root.children
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((node: any) => node.children?.map((child: { text?: string }) => child.text ?? '').join('') ?? '')
      .join(' ')
  }
  return ''
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderAnswer(answer: any) {
  if (typeof answer === 'string') {
    return <p className="text-rfci-black/60 leading-relaxed font-light">{answer}</p>
  }

  if (answer?.root?.children) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return answer.root.children.map((node: any, i: number) => {
      const text = node.children?.map((child: { text?: string }) => child.text ?? '').join('') ?? ''
      return (
        <p key={i} className="text-rfci-black/60 leading-relaxed font-light mb-2 last:mb-0">
          {text}
        </p>
      )
    })
  }

  return null
}
