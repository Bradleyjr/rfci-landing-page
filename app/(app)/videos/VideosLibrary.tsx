'use client'

import { PlayCircle, ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { FEATURED_VIDEOS } from '../../_data/videos'
import { RESOURCES } from '../../_data/resources'

// Product category videos in the exact order Bill specified
const PRODUCT_VIDEO_SLUGS = [
  'vinyl-resilient-flooring-types',
  'rigid-core-spc-wpc',
  'luxury-vinyl-tile-plank',
  'homogeneous-sheet-vinyl',
  'heterogeneous-sheet-vinyl',
  'solid-vinyl-tile',
  'vinyl-composition-tile-vct',
  'rubber-tile-sheet',
  'linoleum-tile-sheet',
  'other-polymeric-resilient-flooring',
  'cork-tile',
]

const productVideos = PRODUCT_VIDEO_SLUGS
  .map(slug => RESOURCES.find(r => r.slug === slug && r.type === 'video'))
  .filter(Boolean)

export function VideosLibrary() {
  return (
    <PageLayout>
      <PageHero
        label="Education"
        heading={<>Education & <span className="font-semibold text-rfci-blue">CEU courses</span></>}
        subheading="Access helpful videos, certification information, technical papers, articles, key websites, and press releases."
      />

      {/* Section 1 — Key Topics in the Resilient Flooring Universe */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-16">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Featured</div>
            <h2 className="text-4xl md:text-5xl font-display font-light">
              Key Topics in the <span className="font-semibold">Resilient Flooring Universe</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_VIDEOS.map((video, i) => (
              <SectionReveal key={video.title} delay={(i % 2) * 0.06}>
                <a
                  href={video.vimeoUrl || video.courseUrl || 'https://rfci.com/videos/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {video.thumbnailUrl && (
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-rfci-black/20 group-hover:bg-rfci-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <PlayCircle className="w-8 h-8 text-white group-hover:text-rfci-blue transition-colors duration-500" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-rfci-black/70 backdrop-blur-sm text-white text-label font-bold tracking-widest uppercase px-3 py-1">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-display font-light group-hover:text-rfci-blue transition-colors leading-tight mb-3">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-rfci-black/50 text-sm leading-relaxed line-clamp-2">
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

      {/* Section 2 — Meet the Resilient Flooring Categories */}
      <section className="py-20 md:py-28 bg-rfci-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal className="mb-16">
            <div className="text-label font-bold tracking-widest uppercase text-rfci-blue mb-4">Product Overviews</div>
            <h2 className="text-4xl md:text-5xl font-display font-light">
              Meet the Resilient <span className="font-semibold">Flooring Categories</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productVideos.map((video, i) => video && (
              <SectionReveal key={video.slug} delay={(i % 3) * 0.06}>
                <a
                  href={video.videoUrl || video.externalUrl || 'https://rfci.com/videos/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {video.thumbnailUrl && (
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-rfci-black/20 group-hover:bg-rfci-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                        <PlayCircle className="w-6 h-6 text-white group-hover:text-rfci-blue transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-display font-light group-hover:text-rfci-blue transition-colors leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">Looking for more?</h2>
            <p className="text-rfci-black/60 text-lg mb-8 max-w-xl mx-auto">
              Visit the full RFCI video library for additional courses, webinars, and educational resources.
            </p>
            <a
              href="https://rfci.com/videos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200 group"
            >
              Browse All Videos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  )
}
