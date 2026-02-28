'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CaretDown, MagnifyingGlass, Envelope } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'

const FAQS_STATIC = [
  { question: 'What is resilient flooring?', answer: 'Resilient flooring refers to a category of hard surface flooring materials that offer a degree of flexibility and "give" underfoot. This includes luxury vinyl tile (LVT), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber, and cork flooring.', category: 'general' },
  { question: 'What is the Resilient Floor Covering Institute (RFCI)?', answer: 'RFCI is the trade association for the resilient flooring industry in North America. Founded in 1929, we represent manufacturers and suppliers of vinyl, rubber, linoleum, and cork flooring products.', category: 'general' },
  { question: 'What is FloorScore certification?', answer: 'FloorScore is the flooring industry\'s most recognized indoor air quality certification. It independently verifies that a flooring product meets California\'s strict VOC emissions standards (CA Section 01350), one of the toughest air quality benchmarks in the world.', category: 'certifications' },
  { question: 'What does ASSURE certification cover?', answer: 'ASSURE is RFCI\'s third-party sustainability certification that evaluates resilient flooring products across the full lifecycle—raw materials, manufacturing, product performance, and end-of-life recovery.', category: 'certifications' },
  { question: 'What is an Environmental Product Declaration (EPD)?', answer: 'An EPD is a standardized, third-party verified document that transparently reports the environmental impact of a product across its entire lifecycle, from raw material extraction through manufacturing, use, and end-of-life disposal.', category: 'sustainability' },
  { question: 'Is resilient flooring recyclable?', answer: 'Many resilient flooring products are recyclable. Several RFCI member companies operate take-back and recycling programs for post-installation and post-consumer flooring waste. The industry is continuously expanding recycling capabilities.', category: 'sustainability' },
  { question: 'Can resilient flooring be installed over existing floors?', answer: 'In many cases, yes. Resilient flooring can often be installed over existing hard, smooth surfaces, which can reduce demolition waste and installation time. However, subfloor conditions must meet the manufacturer\'s requirements.', category: 'installation' },
  { question: 'What subfloor preparation is needed for resilient flooring?', answer: 'Subfloors must be clean, dry, smooth, and structurally sound. Specific moisture, flatness, and temperature requirements vary by product. Always follow the manufacturer\'s installation guidelines.', category: 'installation' },
  { question: 'How does RFCI membership work?', answer: 'RFCI membership is by invitation and is open to manufacturers and suppliers within the resilient flooring industry. Members participate in industry advocacy, certification programs, and educational initiatives.', category: 'membership' },
  { question: 'Does RFCI offer continuing education?', answer: 'Yes. RFCI provides AIA-approved continuing education units (CEUs) covering topics like indoor air quality, sustainability certifications, material health, and Environmental Product Declarations.', category: 'general' },
]

const CATEGORIES = [
  { key: 'all', label: 'All Questions' },
  { key: 'general', label: 'General' },
  { key: 'certifications', label: 'Certifications' },
  { key: 'sustainability', label: 'Sustainability' },
  { key: 'installation', label: 'Installation' },
  { key: 'membership', label: 'Membership' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FAQPage({ faqs }: { faqs: any[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = faqs?.length ? faqs : FAQS_STATIC

  const filteredFaqs = items.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = !searchTerm || faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderAnswer = (answer: any) => {
    if (typeof answer === 'string') {
      return <p className="text-rfci-black/60 leading-relaxed font-light">{answer}</p>
    }
    // richText from Payload (lexical) — extract text from root children
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

  return (
    <PageLayout>
      <PageHero
        label="FAQ"
        heading={
          <>
            Frequently Asked <span className="font-semibold text-rfci-blue">Questions</span>
          </>
        }
        subheading="Find answers to common questions about resilient flooring, RFCI certifications, sustainability, and membership."
      />

      {/* Search Bar */}
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
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setOpenIndex(null)
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-black/10 focus:border-rfci-blue focus:outline-none bg-white text-rfci-black placeholder:text-rfci-black/40 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
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

      {/* FAQ Accordion */}
      <section className="bg-rfci-cream py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionReveal>
            {filteredFaqs.length > 0 ? (
              <div>
                {filteredFaqs.map((faq, index) => (
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
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-rfci-black/50 text-center py-12 font-light">
                No questions found matching your search.
              </p>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-rfci-black text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Still have questions?
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              We are here to help. Reach out to our team and we will get back to you as soon as possible.
            </p>
            <a
              href="mailto:info@rfci.com"
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
