'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, EnvelopeSimple, LinkedinLogo, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '115 Broad Street, Suite 201',
    detail: 'LaGrange, Georgia 30240',
    href: 'https://maps.google.com/?q=115+Broad+Street+Suite+201+LaGrange+Georgia+30240',
  },
  {
    icon: EnvelopeSimple,
    label: 'Email',
    value: 'info@rfci.com',
    href: 'mailto:info@rfci.com',
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    value: 'Follow RFCI',
    href: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
    external: true,
  },
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const searchParams = useSearchParams()
  const [defaultSubject, setDefaultSubject] = useState('')
  const [defaultMessage, setDefaultMessage] = useState('')

  useEffect(() => {
    const subject = searchParams.get('subject') || ''
    const message = searchParams.get('message') || ''
    if (subject) setDefaultSubject(subject)
    if (message) setDefaultMessage(message)
  }, [searchParams])

  return (
    <PageLayout>
      <PageHero
        label="Contact"
        heading={<>Get in <span className="font-semibold text-rfci-blue">touch</span></>}
        subheading="Have a question about certifications, membership, or resilient flooring? We're here to help."
        theme="light"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Contact Info */}
            <SectionReveal direction="left" className="lg:col-span-2">
              <div className="space-y-8">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <Icon className="w-5 h-5 mt-0.5 shrink-0 text-rfci-blue" />
                      <div>
                        <div className="text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-1">{item.label}</div>
                        <div className="text-rfci-black group-hover:text-rfci-blue transition-colors duration-200">{item.value}</div>
                        {item.detail && (
                          <div className="text-rfci-black/60 text-sm">{item.detail}</div>
                        )}
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-rfci-black/10">
                <h4 className="text-lg font-display font-medium mb-3">Membership Inquiries</h4>
                <p className="text-base text-rfci-black/60 leading-relaxed mb-4">
                  Interested in becoming an RFCI member? Contact us to learn about membership benefits and how to join.
                </p>
                <a
                  href="mailto:info@rfci.com?subject=Membership Inquiry"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all duration-200"
                >
                  Email about membership <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </SectionReveal>

            {/* Contact Form */}
            <SectionReveal direction="right" className="lg:col-span-3">
              {submitted ? (
                <div className="bg-rfci-cream p-12 text-center">
                  <CheckCircle className="w-12 h-12 text-rfci-blue mx-auto mb-4" weight="fill" />
                  <h3 className="text-xl md:text-2xl font-display font-light mb-3">Message sent</h3>
                  <p className="text-base text-rfci-black/60">
                    Thank you for reaching out. Our team will get back to you within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-rfci-black/10 bg-white text-rfci-black placeholder:text-rfci-black/30 focus:border-rfci-blue focus:ring-2 focus:ring-rfci-blue/30 focus:outline-none transition-colors duration-200"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-rfci-black/10 bg-white text-rfci-black placeholder:text-rfci-black/30 focus:border-rfci-blue focus:ring-2 focus:ring-rfci-blue/30 focus:outline-none transition-colors duration-200"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-rfci-black/10 bg-white text-rfci-black placeholder:text-rfci-black/30 focus:border-rfci-blue focus:ring-2 focus:ring-rfci-blue/30 focus:outline-none transition-colors duration-200"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-2">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 border border-rfci-black/10 bg-white text-rfci-black placeholder:text-rfci-black/30 focus:border-rfci-blue focus:ring-2 focus:ring-rfci-blue/30 focus:outline-none transition-colors duration-200"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-rfci-black/10 bg-white text-rfci-black focus:border-rfci-blue focus:ring-2 focus:ring-rfci-blue/30 focus:outline-none transition-colors duration-200"
                      defaultValue={defaultSubject || ''}
                      key={defaultSubject}
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="certifications">Certifications (FloorScore®, ASSURE® Certified, AFFIRM™)</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="events">Upcoming Events</option>
                      <option value="technical">Technical Question</option>
                      <option value="media">Media / Press</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-rfci-black/10 bg-white text-rfci-black placeholder:text-rfci-black/30 focus:border-rfci-blue focus:ring-2 focus:ring-rfci-blue/30 focus:outline-none transition-colors resize-none"
                      defaultValue={defaultMessage}
                      key={defaultMessage}
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-3.5 bg-rfci-blue text-white font-semibold text-sm hover:bg-rfci-black transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </SectionReveal>

          </div>
        </div>
      </section>
    </PageLayout>
  )
}
