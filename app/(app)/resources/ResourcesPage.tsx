'use client'

import { useState } from 'react'
import { FileText, Download, FunnelSimple, BookOpen, Leaf, Scales, Article, Notebook, ArrowSquareOut } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'

const RESOURCES_STATIC = [
  { title: 'RFCI Recommended Work Practices for Resilient Floor Coverings', description: 'Comprehensive guide covering best practices for installation and maintenance of resilient flooring products.', type: 'technical', externalUrl: 'https://rfci.com/technical-resources/' },
  { title: 'FloorScore Program Guide', description: 'Complete guide to the FloorScore indoor air quality certification program, including testing requirements and compliance criteria.', type: 'standard', externalUrl: 'https://rfci.com/floorscore/' },
  { title: 'ASSURE Certification Overview', description: 'Technical overview of the ASSURE sustainability certification program for resilient flooring products.', type: 'sustainability', externalUrl: 'https://rfci.com/assure/' },
  { title: 'Understanding Environmental Product Declarations', description: 'White paper explaining how EPDs work, what they measure, and how to use them in sustainable building design.', type: 'whitepaper', externalUrl: 'https://rfci.com/epd/' },
  { title: 'Resilient Flooring Sustainability Report', description: 'Annual report on the resilient flooring industry\'s environmental performance and sustainability initiatives.', type: 'sustainability' },
  { title: 'AFFIRM Material Health Program', description: 'Information about RFCI\'s material health certification and ingredient transparency program.', type: 'standard', externalUrl: 'https://rfci.com/affirm/' },
  { title: 'Resilient Flooring Product Guide', description: 'Overview brochure covering all categories of resilient flooring, their properties, applications, and benefits.', type: 'brochure' },
  { title: 'Moisture Testing Guidelines for Resilient Flooring', description: 'Technical guidelines for moisture testing requirements before installing resilient floor coverings.', type: 'technical' },
]

const TYPES = [
  { key: 'all', label: 'All Resources', icon: FunnelSimple },
  { key: 'technical', label: 'Technical', icon: BookOpen },
  { key: 'sustainability', label: 'Sustainability', icon: Leaf },
  { key: 'standard', label: 'Standards', icon: Scales },
  { key: 'whitepaper', label: 'White Papers', icon: Article },
  { key: 'brochure', label: 'Brochures', icon: Notebook },
]

const TYPE_COLORS: Record<string, string> = {
  technical: 'bg-blue-50 text-blue-700',
  sustainability: 'bg-emerald-50 text-emerald-700',
  standard: 'bg-amber-50 text-amber-700',
  whitepaper: 'bg-purple-50 text-purple-700',
  brochure: 'bg-rose-50 text-rose-700',
}

const TYPE_ICON_BG: Record<string, string> = {
  technical: 'bg-blue-50 text-blue-600',
  sustainability: 'bg-emerald-50 text-emerald-600',
  standard: 'bg-amber-50 text-amber-600',
  whitepaper: 'bg-purple-50 text-purple-600',
  brochure: 'bg-rose-50 text-rose-600',
}

const TYPE_LABELS: Record<string, string> = {
  technical: 'Technical Guide',
  sustainability: 'Sustainability',
  standard: 'Standard',
  whitepaper: 'White Paper',
  brochure: 'Brochure',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ResourcesPage({ resources }: { resources: any[] }) {
  const [activeType, setActiveType] = useState('all')

  const items = resources?.length ? resources : RESOURCES_STATIC

  const filteredResources = items.filter((r) => {
    return activeType === 'all' || r.type === activeType
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDownloadUrl = (resource: any): string | null => {
    if (resource.file) {
      return mediaUrl(resource.file)
    }
    return null
  }

  return (
    <PageLayout>
      <PageHero
        label="Resources"
        heading={
          <>
            Resources & <span className="font-semibold text-rfci-blue">Technical Documents</span>
          </>
        }
        subheading="Access technical guides, sustainability reports, standards documents, and white papers from RFCI."
      />

      {/* Type Filter Tabs */}
      <section className="bg-rfci-cream pb-6 pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => {
              const Icon = t.icon
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveType(t.key)}
                  className={`inline-flex items-center gap-1.5 text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-colors ${
                    activeType === t.key
                      ? 'bg-rfci-blue text-white'
                      : 'bg-white text-rfci-black/60 hover:text-rfci-black'
                  }`}
                >
                  <Icon size={16} weight="bold" />
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="bg-rfci-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => {
                const downloadUrl = getDownloadUrl(resource)
                const typeColor = TYPE_COLORS[resource.type] || TYPE_COLORS.technical
                const iconBg = TYPE_ICON_BG[resource.type] || TYPE_ICON_BG.technical
                const typeLabel = TYPE_LABELS[resource.type] || resource.type

                return (
                  <SectionReveal key={resource.title} delay={index * 0.06}>
                    <div className="bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all p-8 h-full flex flex-col rounded-lg">
                      {/* Icon + Badge Row */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}>
                          <FileText size={22} weight="light" />
                        </div>
                        <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${typeColor}`}>
                          {typeLabel}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-display font-medium text-rfci-black mb-2 leading-snug">
                        {resource.title}
                      </h3>

                      {/* Description */}
                      {resource.description && (
                        <p className="text-sm text-rfci-black/60 leading-relaxed font-light mb-6 flex-1">
                          {resource.description}
                        </p>
                      )}

                      {/* Action */}
                      <div className="mt-auto pt-4 border-t border-black/5">
                        {downloadUrl ? (
                          <a
                            href={downloadUrl}
                            download
                            className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-bold tracking-wider uppercase transition-colors"
                          >
                            <Download size={18} weight="bold" />
                            Download
                          </a>
                        ) : resource.externalUrl ? (
                          <a
                            href={resource.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-bold tracking-wider uppercase transition-colors"
                          >
                            <ArrowSquareOut size={18} weight="bold" />
                            View Resource
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-rfci-black/30 text-sm font-bold tracking-wider uppercase">
                            <FileText size={18} weight="bold" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </SectionReveal>
                )
              })}
            </div>
          ) : (
            <p className="text-rfci-black/50 text-center py-12 font-light">
              No resources found for this category.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rfci-black text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Need something specific?
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              If you are looking for a specific document or technical resource, reach out to our team and we will help you find it.
            </p>
            <a
              href="mailto:info@rfci.com"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-6 py-3 rounded-full font-bold text-label tracking-widest uppercase hover:bg-rfci-blue/90 transition-colors"
            >
              Contact Us
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
