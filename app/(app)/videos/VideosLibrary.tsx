'use client'

import { useState } from 'react'
import { PlayCircle, FunnelSimple, GraduationCap, Leaf, Wrench, Package, ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'

type VideoDoc = {
  title: string
  duration: string
  description?: string
  thumbnailUrl?: string
  courseUrl?: string
  embedUrl?: string
  category?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbnail?: any
  featured?: boolean
  order?: number
}

const VIDEOS_STATIC: VideoDoc[] = [
  {
    title: 'Resilient Flooring: Verified and Certified!',
    duration: '17 min watch',
    description: 'Certifications, declarations, and ecolabels provide sustainability and health and wellness information that subsequently supports requirements in building rating systems.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-verified-and-certified/',
    category: 'ceu',
    featured: true,
  },
  {
    title: 'Demystifying EPDs in Sustainable Design',
    duration: '19 min watch',
    description: 'Environmental Product Declarations (EPDs) can be a powerful tool to use when choosing materials for commercial projects.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/11/Optimized-3-500x300.jpg',
    courseUrl: 'https://rfci.com/courses/demystifying-epds-in-sustainable-design/',
    category: 'sustainability',
    featured: false,
  },
  {
    title: 'Resilient Flooring and Sustainability',
    duration: '19 min watch',
    description: 'It is important for a specifier to utilize a multi-attribute approach for the selection of resilient flooring products.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/10/Optimized-2-500x300.jpg',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-and-sustainability/',
    category: 'sustainability',
    featured: false,
  },
  {
    title: 'Resilient Flooring and Materiality',
    duration: '19 min watch',
    description: 'When specifying products for the built environment, it is important to transparently understand the origin of material ingredients.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2021/11/Resilient-Flooring-Materiality-Course-Image-Cropped-1-500x300.png',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-materiality/',
    category: 'ceu',
    featured: false,
  },
]

const FALLBACK_THUMB = 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png'

const CATEGORIES = [
  { key: 'all', label: 'All Videos', icon: FunnelSimple },
  { key: 'ceu', label: 'CEU Courses', icon: GraduationCap },
  { key: 'sustainability', label: 'Sustainability', icon: Leaf },
  { key: 'installation', label: 'Installation', icon: Wrench },
  { key: 'product', label: 'Product', icon: Package },
]

const CATEGORY_LABELS: Record<string, string> = {
  ceu: 'CEU Course',
  sustainability: 'Sustainability',
  installation: 'Installation',
  product: 'Product',
}

function getThumbSrc(video: VideoDoc): string {
  if (video.thumbnailUrl) return video.thumbnailUrl
  return mediaUrl(video.thumbnail, FALLBACK_THUMB)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VideosLibrary({ videos }: { videos: any[] }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const displayVideos: VideoDoc[] = videos?.length ? videos : VIDEOS_STATIC

  const filteredVideos = activeCategory === 'all'
    ? displayVideos
    : displayVideos.filter((v) => v.category === activeCategory)

  const featured = filteredVideos.find((v) => v.featured) ?? filteredVideos[0]
  const gridVideos = filteredVideos.filter((v) => v !== featured)

  return (
    <PageLayout>
      <PageHero
        label="Education"
        heading={
          <>
            Education & <span className="font-semibold text-rfci-blue">CEU Courses</span>
          </>
        }
        subheading="Explore RFCI's continuing education program — earn CEU credits and deepen your understanding of resilient flooring certifications, sustainability practices, and material health."
      />

      {/* Category Filter Bar */}
      <section className="bg-white border-b border-black/5 sticky top-24 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-rfci-blue text-white'
                      : 'bg-white text-rfci-black/60 hover:text-rfci-black border border-black/10 hover:border-black/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-label font-bold tracking-widest uppercase">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      {featured && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionReveal>
              <a
                href={featured.courseUrl || 'https://rfci.com/videos/'}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative aspect-video overflow-hidden mb-8 shadow-sm rounded-sm">
                  <img
                    src={getThumbSrc(featured)}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-rfci-black/20 group-hover:bg-rfci-black/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                      <PlayCircle className="w-12 h-12 text-white group-hover:text-rfci-blue ml-1 transition-colors duration-500" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-label font-bold uppercase tracking-widest text-rfci-black/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rfci-blue"></span>
                    {featured.duration}
                  </span>
                  {featured.category && (
                    <span className="text-label font-bold uppercase tracking-widest text-rfci-blue">
                      {CATEGORY_LABELS[featured.category] || featured.category}
                    </span>
                  )}
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight group-hover:text-rfci-blue transition-colors leading-[1.1] mb-4">
                  {featured.title}
                </h2>
                {featured.description && (
                  <p className="text-rfci-black/60 text-base md:text-lg leading-relaxed max-w-3xl">
                    {featured.description}
                  </p>
                )}
              </a>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Video Grid */}
      {gridVideos.length > 0 && (
        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridVideos.map((video, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <a
                    href={video.courseUrl || 'https://rfci.com/videos/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={getThumbSrc(video)}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-rfci-black/20 group-hover:bg-rfci-black/40 transition-colors duration-500 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                          <PlayCircle className="w-6 h-6 text-white group-hover:text-rfci-blue ml-0.5 transition-colors duration-500" />
                        </div>
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-3 right-3 bg-rfci-black/70 backdrop-blur-sm text-white text-label font-bold tracking-wider uppercase px-3 py-1 rounded-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      {video.category && (
                        <span className="text-label font-bold uppercase tracking-widest text-rfci-blue mb-3 block">
                          {CATEGORY_LABELS[video.category] || video.category}
                        </span>
                      )}
                      <h3 className="text-xl font-display font-light group-hover:text-rfci-blue transition-colors leading-tight mb-3">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="text-rfci-black/50 text-sm leading-relaxed line-clamp-3">
                          {video.description}
                        </p>
                      )}
                    </div>
                  </a>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">Looking for more?</h2>
            <p className="text-rfci-black/60 text-lg mb-8 max-w-xl mx-auto">
              Visit the full RFCI video library for additional courses, webinars, and educational resources.
            </p>
            <a
              href="https://rfci.com/videos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-4 text-label font-bold tracking-widest uppercase hover:bg-rfci-blue/90 transition-colors group"
            >
              Browse All Videos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
