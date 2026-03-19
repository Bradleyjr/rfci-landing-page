'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Download, FunnelSimple, BookOpen, ShieldCheck, TreeStructure, Article, Globe, ArrowSquareOut, Play, ArrowRight, NewspaperClipping } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl, CERT_ICONS } from '../../_lib/transforms'

import { RESOURCES } from '../../_data/resources'

const TYPES = [
  { key: 'all', label: 'All Resources', icon: FunnelSimple },
  { key: 'certification', label: 'Certifications', icon: ShieldCheck },
  { key: 'declaration', label: 'Declarations', icon: TreeStructure },
  { key: 'technical', label: 'Technical Papers', icon: BookOpen },
  { key: 'video', label: 'Videos', icon: Play },
  { key: 'article', label: 'Articles', icon: Article },
  { key: 'website', label: 'Websites', icon: Globe },
  { key: 'press', label: 'Press Releases', icon: NewspaperClipping },
]

const TYPE_COLORS: Record<string, string> = {
  certification: 'bg-emerald-50 text-emerald-700',
  declaration: 'bg-amber-50 text-amber-700',
  technical: 'bg-slate-100 text-slate-600',
  video: 'bg-sky-50 text-sky-700',
  article: 'bg-rfci-blue/10 text-rfci-blue',
  website: 'bg-violet-50 text-violet-700',
  press: 'bg-orange-50 text-orange-700',
}

const TYPE_ICON_BG: Record<string, string> = {
  certification: 'bg-emerald-50 text-emerald-600',
  declaration: 'bg-amber-50 text-amber-600',
  technical: 'bg-slate-100 text-slate-600',
  video: 'bg-sky-50 text-sky-600',
  article: 'bg-rfci-blue/10 text-rfci-blue',
  website: 'bg-violet-50 text-violet-600',
  press: 'bg-orange-50 text-orange-600',
}

const TYPE_LABELS: Record<string, string> = {
  certification: 'Certification',
  declaration: 'Declaration',
  technical: 'Technical Paper',
  video: 'Video',
  article: 'Article',
  website: 'Website',
  press: 'Press Release',
}

const TYPE_ICONS: Record<string, typeof ShieldCheck> = {
  certification: ShieldCheck,
  declaration: TreeStructure,
  technical: BookOpen,
  video: Play,
  article: Article,
  website: Globe,
  press: NewspaperClipping,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ResourcesPage({ resources, pageSettings }: { resources: any[]; pageSettings?: any }) {
  const [activeType, setActiveType] = useState('all')

  const items = resources?.length ? resources : RESOURCES

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
        heading={pageSettings?.heroHeading || <>Resources & <span className="font-semibold text-rfci-blue">technical documents.</span></>}
        subheading={pageSettings?.heroSubheading || 'Access technical guides, sustainability reports, standards documents, and white papers from RFCI.'}
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
                const TypeIcon = (resource.iconName && CERT_ICONS[resource.iconName]) || TYPE_ICONS[resource.type] || FileText

                return (
                  <SectionReveal key={resource.title} delay={(index % 3) * 0.06}>
                    <div className="bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all p-8 h-full flex flex-col">
                      {/* Icon + Badge Row */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 flex items-center justify-center ${iconBg}`}>
                          <TypeIcon size={22} weight="light" />
                        </div>
                        <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 ${typeColor}`}>
                          {typeLabel}
                        </span>
                      </div>

                      {/* Date (press releases) */}
                      {resource.date && resource.type === 'press' && (
                        <p className="text-label font-bold tracking-widest uppercase text-rfci-black/40 mb-2">{resource.date}</p>
                      )}

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
                        {resource.internalUrl ? (
                          <Link
                            href={resource.internalUrl}
                            className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors"
                          >
                            Open Page <ArrowRight size={18} />
                          </Link>
                        ) : resource.slug && (resource.type === 'video' || resource.type === 'article') ? (
                          <Link
                            href={`/resources/${resource.slug}`}
                            className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors"
                          >
                            {resource.type === 'video' ? 'Watch Video' : 'Read Article'} <ArrowRight size={18} />
                          </Link>
                        ) : downloadUrl ? (
                          <a
                            href={downloadUrl}
                            download
                            className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors"
                          >
                            Download <Download size={18} />
                          </a>
                        ) : resource.externalUrl ? (
                          <a
                            href={resource.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors"
                          >
                            View Resource <ArrowSquareOut size={18} />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-rfci-black/30 text-sm font-semibold">
                            Coming Soon <FileText size={18} />
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
              {pageSettings?.ctaHeading || 'Need something specific?'}
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              {pageSettings?.ctaSubheading || 'If you are looking for a specific document or technical resource, reach out to our team and we will help you find it.'}
            </p>
            <a
              href={`mailto:${pageSettings?.ctaEmail || 'info@rfci.com'}`}
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
