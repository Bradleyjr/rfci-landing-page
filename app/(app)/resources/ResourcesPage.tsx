'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FileText, Download, BookOpen, ShieldCheck, TreeStructure, Article, Globe, ArrowSquareOut, Play, ArrowRight, NewspaperClipping, PlayCircle, CaretDown } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl, CERT_ICONS } from '../../_lib/transforms'

import { RESOURCES } from '../../_data/resources'

const TAG_STYLE = 'bg-rfci-cream text-rfci-black/70'
const ICON_BG_STYLE = 'bg-rfci-black/5 text-rfci-black/50'

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
function ResourceActionLink({ resource, downloadUrl }: { resource: any; downloadUrl: string | null }) {
  if (resource.internalUrl) {
    return (
      <Link
        href={resource.internalUrl}
        className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors duration-200"
      >
        Open Page <ArrowRight size={18} />
      </Link>
    )
  }
  if (resource.slug && (resource.type === 'video' || resource.type === 'article')) {
    return (
      <Link
        href={`/resources/${resource.slug}`}
        className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors duration-200"
      >
        {resource.type === 'video' ? 'Watch Video' : 'Read Article'} <ArrowRight size={18} />
      </Link>
    )
  }
  if (downloadUrl) {
    return (
      <a
        href={downloadUrl}
        download
        className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors duration-200"
      >
        Download <Download size={18} />
      </a>
    )
  }
  if (resource.externalUrl) {
    return (
      <a
        href={resource.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors duration-200"
      >
        View Resource <ArrowSquareOut size={18} />
      </a>
    )
  }
  return (
    <span className="inline-flex items-center gap-2 text-rfci-black/30 text-sm font-semibold">
      Coming Soon <FileText size={18} />
    </span>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ThumbnailCard({ resource, index, emphasizeExternal = false }: { resource: any; index: number; emphasizeExternal?: boolean }) {
  const downloadUrl = resource.file ? mediaUrl(resource.file) : null
  const typeColor = TAG_STYLE
  const iconBg = ICON_BG_STYLE
  const typeLabel = TYPE_LABELS[resource.type] || resource.type
  const TypeIcon = (resource.iconName && CERT_ICONS[resource.iconName]) || TYPE_ICONS[resource.type] || FileText

  const cardHref = resource.internalUrl
    || (resource.slug && (resource.type === 'video' || resource.type === 'article') ? `/resources/${resource.slug}` : null)
    || resource.externalUrl
    || downloadUrl

  const isExternal = !resource.internalUrl && !(resource.slug && (resource.type === 'video' || resource.type === 'article'))

  // Determine the action label for the bottom of the card
  const actionLabel = (() => {
    if (resource.internalUrl || (resource.slug && (resource.type === 'video' || resource.type === 'article'))) {
      return resource.type === 'video'
        ? <><span>Watch Video</span> <ArrowRight size={18} /></>
        : <><span>Read More</span> <ArrowRight size={18} /></>
    }
    if (downloadUrl) {
      return <><span>Download</span> <Download size={18} /></>
    }
    if (resource.externalUrl) {
      return emphasizeExternal
        ? <><span>Visit Website</span> <ArrowSquareOut size={18} /></>
        : <><span>View Resource</span> <ArrowSquareOut size={18} /></>
    }
    return null
  })()

  const cardContent = (
    <div className="group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 overflow-hidden h-full flex flex-col">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-rfci-black/10 overflow-hidden flex-shrink-0">
        {resource.thumbnailUrl ? (
          <img
            src={resource.thumbnailUrl}
            alt={resource.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${iconBg}`}>
            <TypeIcon size={40} weight="light" className="opacity-40" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`text-label font-bold tracking-widest uppercase px-2.5 py-1 ${typeColor}`}>
            {typeLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl font-display font-light text-rfci-black mb-2 leading-snug group-hover:text-rfci-blue transition-colors duration-200">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="text-sm text-rfci-black/60 leading-relaxed font-light mb-6 flex-1">
            {resource.description}
          </p>
        )}
        <div className="mt-auto pt-4 border-t border-black/5">
          {cardHref ? (
            /* Card is already a link — render as span to avoid nested <a> */
            <span className="inline-flex items-center gap-2 text-rfci-blue text-sm font-semibold">
              {actionLabel}
            </span>
          ) : (
            <ResourceActionLink resource={resource} downloadUrl={downloadUrl} />
          )}
        </div>
      </div>
    </div>
  )

  return (
    <SectionReveal key={resource.title} delay={(index % 3) * 0.06}>
      {cardHref ? (
        <a
          href={cardHref}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="block h-full"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </SectionReveal>
  )
}

const ANCHOR_SECTIONS = [
  { id: 'videos', label: 'Videos' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'technical', label: 'Technical Papers' },
  { id: 'articles', label: 'Articles' },
  { id: 'websites', label: 'Websites' },
  { id: 'press', label: 'Press Releases' },
]

function AnchorNav({ availableSections }: { availableSections: Set<string> }) {
  const [navBottom, setNavBottom] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mainNav = document.querySelector('nav.sticky') as HTMLElement | null
    if (!mainNav) return
    const measure = () => setNavBottom(mainNav.getBoundingClientRect().bottom)
    measure()
    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [])

  useEffect(() => {
    const sectionIds = ANCHOR_SECTIONS.filter(s => availableSections.has(s.id)).map(s => s.id)
    if (sectionIds.length === 0) return

    if (!activeSection) setActiveSection(sectionIds[0])

    const triggerOffset = navBottom + 100

    const onScroll = () => {
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= triggerOffset) current = id
      }
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [availableSections, navBottom])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const navHeight = navRef.current?.getBoundingClientRect().height ?? 56
    const y = el.getBoundingClientRect().top + window.scrollY - navBottom - navHeight - 16
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const visibleSections = ANCHOR_SECTIONS.filter(s => availableSections.has(s.id))
  if (visibleSections.length === 0) return null

  return (
    <nav
      ref={navRef}
      className="sticky z-40 bg-white/95 backdrop-blur-sm border-b border-black/5"
      style={{ top: navBottom }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-hide">
          <span className="text-label font-bold tracking-widest uppercase text-rfci-black/30 shrink-0">Jump to</span>
          <div className="w-px h-4 bg-rfci-black/10 shrink-0" />
          {visibleSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-label font-bold tracking-widest uppercase transition-colors duration-200 ${
                activeSection === id
                  ? 'bg-rfci-blue text-white'
                  : 'text-rfci-black/50 hover:text-rfci-black hover:bg-black/5'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ResourcesPage({ resources, pageSettings }: { resources: any[]; pageSettings?: any }) {
  const [showAllVideos, setShowAllVideos] = useState(false)
  const items = resources?.length ? resources : RESOURCES

  // Videos — all videos with thumbnails, sorted by order
  const videoResources = items
    .filter((r) => r.type === 'video' && r.thumbnailUrl)
    .sort((a: { order: number }, b: { order: number }) => a.order - b.order)

  // Certifications & Declarations
  const certDeclarationResources = items.filter(
    (r) => r.type === 'certification' || r.type === 'declaration'
  )

  // Technical Papers
  const technicalResources = items.filter((r) => r.type === 'technical')

  // Articles
  const articleResources = items.filter((r) => r.type === 'article')

  // Websites & Tools
  const websiteResources = items.filter((r) => r.type === 'website')

  // Press Releases
  const pressResources = items
    .filter((r) => r.type === 'press')
    .sort((a: { date?: string; order: number }, b: { date?: string; order: number }) => {
      if (a.date && b.date) return b.date.localeCompare(a.date)
      return a.order - b.order
    })

  // Build set of which anchor sections have content
  const availableSections = new Set<string>([
    ...(videoResources.length > 0 ? ['videos'] : []),
    ...(certDeclarationResources.length > 0 ? ['certifications'] : []),
    ...(technicalResources.length > 0 ? ['technical'] : []),
    ...(articleResources.length > 0 ? ['articles'] : []),
    ...(websiteResources.length > 0 ? ['websites'] : []),
    ...(pressResources.length > 0 ? ['press'] : []),
  ])

  // Alternating backgrounds: white, cream, white, cream, white, cream
  const BG = ['bg-white', 'bg-rfci-cream', 'bg-white', 'bg-rfci-cream', 'bg-white', 'bg-rfci-cream']
  let bgIndex = 0
  const nextBg = () => BG[bgIndex++ % BG.length]

  const videosBg = nextBg()
  const certsBg = nextBg()
  const technicalBg = nextBg()
  const articlesBg = nextBg()
  const websitesBg = nextBg()
  const pressBg = nextBg()

  return (
    <PageLayout>
      <PageHero
        label="Resources"
        heading={pageSettings?.heroHeading || <>Resources & <span className="font-semibold text-rfci-blue">technical documents.</span></>}
        subheading={pageSettings?.heroSubheading || 'Access technical guides, sustainability reports, standards documents, and white papers from RFCI.'}
      />

      {/* Sticky anchor nav */}
      <AnchorNav availableSections={availableSections} />

      {/* Videos */}
      {videoResources.length > 0 && (
        <section id="videos" className={`${videosBg} py-20 md:py-28`} style={{ scrollMarginTop: 140 }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12 md:mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Educational Videos</div>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Learn from our <span className="font-semibold">video library</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {(showAllVideos ? videoResources : videoResources.slice(0, 4)).map((video, index) => {
                const videoLink = video.internalUrl || (video.slug && `/resources/${video.slug}`) || video.externalUrl || video.videoUrl || '#'
                const isExternal = !video.internalUrl && !(video.slug)
                return (
                  <SectionReveal key={video.title} delay={(index % 2) * 0.06}>
                    <a
                      href={videoLink}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="group block bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 overflow-hidden"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video bg-rfci-black/10 overflow-hidden">
                        {video.thumbnailUrl && (
                          <img
                            src={video.thumbnailUrl}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                        <div className="absolute inset-0 bg-rfci-black/30 group-hover:bg-rfci-black/50 transition-colors duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                            <PlayCircle className="w-7 h-7 text-white group-hover:text-rfci-blue transition-colors duration-500" />
                          </div>
                        </div>
                      </div>
                      {/* Info */}
                      <div className="p-6">
                        {video.category && (
                          <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-2">{video.category}</div>
                        )}
                        <h3 className="text-xl md:text-2xl font-display font-light text-rfci-black mb-2 leading-snug group-hover:text-rfci-blue transition-colors duration-200">
                          {video.title}
                        </h3>
                        {video.description && (
                          <p className="text-sm text-rfci-black/60 font-light leading-relaxed">{video.description}</p>
                        )}
                      </div>
                    </a>
                  </SectionReveal>
                )
              })}
            </div>

            {!showAllVideos && videoResources.length > 4 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAllVideos(true)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rfci-blue hover:gap-3 transition-all duration-200"
                >
                  See all {videoResources.length} videos <CaretDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Certifications & Declarations */}
      {certDeclarationResources.length > 0 && (
        <section id="certifications" className={`${certsBg} py-20 md:py-28`} style={{ scrollMarginTop: 140 }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12 md:mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Sustainability</div>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Certifications & <span className="font-semibold">declarations</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certDeclarationResources.map((resource, index) => (
                <ThumbnailCard key={resource.title} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Papers */}
      {technicalResources.length > 0 && (
        <section id="technical" className={`${technicalBg} py-20 md:py-28`} style={{ scrollMarginTop: 140 }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12 md:mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Technical Information</div>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Technical <span className="font-semibold">papers</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalResources.map((resource, index) => (
                <ThumbnailCard key={resource.title} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles */}
      {articleResources.length > 0 && (
        <section id="articles" className={`${articlesBg} py-20 md:py-28`} style={{ scrollMarginTop: 140 }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12 md:mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Knowledge Base</div>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Articles & <span className="font-semibold">guides</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articleResources.map((resource, index) => (
                <ThumbnailCard key={resource.title} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Websites & Tools */}
      {websiteResources.length > 0 && (
        <section id="websites" className={`${websitesBg} py-20 md:py-28`} style={{ scrollMarginTop: 140 }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12 md:mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">External Resources</div>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Websites & <span className="font-semibold">tools</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteResources.map((resource, index) => (
                <ThumbnailCard key={resource.title} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Press Releases */}
      {pressResources.length > 0 && (
        <section id="press" className={`${pressBg} py-20 md:py-28`} style={{ scrollMarginTop: 140 }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12 md:mb-16">
              <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">News</div>
              <h2 className="text-4xl md:text-5xl font-display font-light">
                Press <span className="font-semibold">releases.</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {pressResources.map((resource, index) => {
                const downloadUrl = resource.file ? mediaUrl(resource.file) : null
                const linkHref = resource.internalUrl || downloadUrl || resource.externalUrl
                const isExternal = !resource.internalUrl

                return (
                  <SectionReveal key={resource.title} delay={(index % 2) * 0.06}>
                    <div className="group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 p-8">
                      <div className="flex items-start gap-6">
                        {/* Date column */}
                        <div className="flex-shrink-0 w-16 text-center border-r border-black/10 pr-6">
                          {resource.date ? (
                            <>
                              <div className="text-2xl font-display font-light text-rfci-black leading-none">
                                {new Date(resource.date).toLocaleDateString('en-US', { day: '2-digit' })}
                              </div>
                              <div className="text-label font-bold tracking-widest uppercase text-rfci-black/40 mt-1">
                                {new Date(resource.date).toLocaleDateString('en-US', { month: 'short' })}
                              </div>
                              <div className="text-label font-bold tracking-widest uppercase text-rfci-black/40">
                                {new Date(resource.date).toLocaleDateString('en-US', { year: 'numeric' })}
                              </div>
                            </>
                          ) : (
                            <NewspaperClipping size={24} weight="light" className="text-rfci-black/30 mx-auto" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-display font-light text-rfci-black leading-snug mb-2 group-hover:text-rfci-blue transition-colors duration-200">
                            {resource.title}
                          </h3>
                          {resource.description && (
                            <p className="text-sm text-rfci-black/60 font-light leading-relaxed mb-4">
                              {resource.description}
                            </p>
                          )}
                          {linkHref && (
                            <a
                              href={linkHref}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              download={!!downloadUrl && !resource.internalUrl ? true : undefined}
                              className="inline-flex items-center gap-2 text-rfci-blue hover:text-rfci-blue/80 text-sm font-semibold transition-colors duration-200"
                            >
                              {downloadUrl && !resource.internalUrl ? (
                                <>Download PDF <Download size={18} /></>
                              ) : resource.externalUrl && !resource.internalUrl ? (
                                <>View Release <ArrowSquareOut size={18} /></>
                              ) : (
                                <>Read More <ArrowRight size={18} /></>
                              )}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-rfci-black text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              {pageSettings?.ctaHeading || 'Need something specific?'}
            </h2>
            <p className="text-base text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
              {pageSettings?.ctaSubheading || 'If you are looking for a specific document or technical resource, reach out to our team and we will help you find it.'}
            </p>
            <a
              href={`mailto:${pageSettings?.ctaEmail || 'info@rfci.com'}`}
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-white hover:text-rfci-black transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
