'use client'

import { ArrowLeft, ArrowSquareOut, Play } from '@phosphor-icons/react'
import Link from 'next/link'
import { PageLayout } from '../../../_components/PageLayout'
import { SectionReveal } from '../../../_components/SectionReveal'
import { mediaUrl } from '../../../_lib/transforms'

const TYPE_COLORS: Record<string, string> = {
  video: 'bg-sky-50 text-sky-700',
  technical: 'bg-slate-100 text-slate-600',
  sustainability: 'bg-emerald-50 text-emerald-700',
  standard: 'bg-amber-50 text-amber-700',
  whitepaper: 'bg-slate-100 text-slate-600',
  article: 'bg-rfci-blue/10 text-rfci-blue',
}

function getEmbedUrl(url: string): string | null {
  if (!url) return null
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/)
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  // Already an embed URL
  if (url.includes('/embed/') || url.includes('player.vimeo.com')) return url
  return null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VideoDetail({ resource, relatedResources }: { resource: any; relatedResources: any[] }) {
  const embedUrl = getEmbedUrl(resource.videoUrl || '')
  const thumbnailSrc = resource.thumbnailUrl || mediaUrl(resource.thumbnail)
  const typeColor = TYPE_COLORS[resource.type] || TYPE_COLORS.video

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rfci-cream pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-rfci-black/50 hover:text-rfci-blue transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" /> All Resources
            </Link>

            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-rfci-blue/10 flex items-center justify-center shrink-0 text-rfci-blue">
                <Play className="w-6 h-6" weight="fill" />
              </div>
              <div>
                <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 inline-block mb-3 ${typeColor}`}>
                  Video
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light leading-tight">
                  {resource.title}
                </h1>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Video + Sidebar */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <SectionReveal>
                {embedUrl ? (
                  <div className="relative w-full aspect-video bg-rfci-black overflow-hidden">
                    <iframe
                      src={embedUrl}
                      title={resource.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : thumbnailSrc ? (
                  <div className="relative w-full aspect-video bg-rfci-black overflow-hidden">
                    <img src={thumbnailSrc} alt={resource.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-rfci-blue ml-1" weight="fill" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-video bg-rfci-light-gray/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-rfci-black/20" weight="fill" />
                  </div>
                )}
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SectionReveal delay={0.1}>
                <div className="bg-rfci-cream/50 border border-black/5 p-8">
                  <h2 className="text-lg font-display font-medium text-rfci-black mb-4">About this video</h2>

                  {resource.description && (
                    <p className="text-sm text-rfci-black/60 leading-relaxed font-light mb-6">
                      {resource.description}
                    </p>
                  )}

                  {resource.category && (
                    <div className="mb-6">
                      <div className="text-xs font-bold tracking-wider uppercase text-rfci-black/40 mb-1">Category</div>
                      <div className="text-sm text-rfci-black/80">{resource.category}</div>
                    </div>
                  )}

                  {resource.externalUrl && (
                    <a
                      href={resource.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-rfci-blue text-white px-5 py-2.5 text-sm font-semibold hover:bg-rfci-blue/90 transition-colors w-full justify-center"
                    >
                      View on Course Site <ArrowSquareOut className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="py-20 md:py-28 bg-rfci-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal className="mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-light">
                Related <span className="font-semibold text-rfci-blue">resources</span>
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedResources.slice(0, 3).map((r, i) => (
                <SectionReveal key={r.slug || r.title} delay={i * 0.1}>
                  <Link
                    href={r.internalUrl || (r.slug ? `/resources/${r.slug}` : (r.externalUrl || '#'))}
                    className="group block p-8 bg-white border border-black/5 hover:border-rfci-blue/30 hover:shadow-lg transition-all h-full"
                  >
                    <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 inline-block mb-4 ${TYPE_COLORS[r.type] || TYPE_COLORS.technical}`}>
                      {r.type}
                    </span>
                    <h3 className="text-lg font-display font-light group-hover:text-rfci-blue transition-colors mb-2 line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-rfci-black/60 font-light line-clamp-2">{r.description}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}
