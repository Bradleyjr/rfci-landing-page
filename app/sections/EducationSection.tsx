'use client'

import { PlayCircle, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { mediaUrl } from '../_lib/transforms'
import { SITE_SETTINGS } from '../_data/site-settings'
import type { Video } from '../_data/videos'

type VideoDoc = Video

const VIDEOS_STATIC: VideoDoc[] = [
  {
    title: 'Resilient Flooring: Verified and Certified!',
    duration: '17 min watch',
    description: 'Certifications, declarations, and ecolabels provide sustainability and health and wellness information that subsequently supports requirements in building rating systems.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-verified-and-certified/',
    featured: true,
  },
  {
    title: 'Demystifying EPDs in Sustainable Design',
    duration: '19 min watch',
    description: 'Environmental Product Declarations (EPDs) can be a powerful tool to use when choosing materials for commercial projects.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/11/Optimized-3-500x300.jpg',
    courseUrl: 'https://rfci.com/courses/demystifying-epds-in-sustainable-design/',
    featured: false,
  },
  {
    title: 'Resilient Flooring and Sustainability',
    duration: '19 min watch',
    description: 'It is important for a specifier to utilize a multi-attribute approach for the selection of resilient flooring products.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/10/Optimized-2-500x300.jpg',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-and-sustainability/',
    featured: false,
  },
  {
    title: 'Resilient Flooring and Materiality',
    duration: '19 min watch',
    description: 'When specifying products for the built environment, it is important to transparently understand the origin of material ingredients.',
    thumbnailUrl: 'https://rfci.com/wp-content/uploads/2021/11/Resilient-Flooring-Materiality-Course-Image-Cropped-1-500x300.png',
    courseUrl: 'https://rfci.com/courses/resilient-flooring-materiality/',
    featured: false,
  },
]

const FALLBACK_THUMB = 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png'

function getThumbSrc(video: VideoDoc): string {
  if (video.thumbnailUrl) return video.thumbnailUrl
  return mediaUrl(video.thumbnail, FALLBACK_THUMB)
}

export function EducationSection({ videos }: { videos: VideoDoc[] }) {
  const displayVideos = (videos?.length ? videos : VIDEOS_STATIC)
    .slice()
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
  const featured = displayVideos.find((video) => video.featured) ?? displayVideos[0]
  const supportingVideos = displayVideos.filter((video) => video !== featured).slice(0, 2)

  if (!featured) return null

  return (
    <section id="education" className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SectionReveal direction="left" className="max-w-3xl">
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4">Education</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight mb-5">
              {SITE_SETTINGS.educationHeading}
            </h2>
            <p className="text-lg md:text-xl text-rfci-black/60 leading-relaxed">
              {SITE_SETTINGS.educationSubheading}
            </p>
          </SectionReveal>
          <SectionReveal direction="right">
            <a
              href="/videos"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-rfci-blue transition-colors group"
            >
              <span className="relative">
                <span className="relative z-10 flex items-center gap-2">
                  View All Videos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-black group-hover:w-full transition-all duration-300 ease-out" />
              </span>
            </a>
          </SectionReveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <SectionReveal className={`${supportingVideos.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'} group cursor-pointer h-full`}>
            <a
              href={featured.courseUrl || 'https://rfci.com/videos/'}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full bg-rfci-cream/50 border border-rfci-black/5 shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={getThumbSrc(featured)}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-rfci-black/20 group-hover:bg-rfci-black/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                    <PlayCircle className="w-10 h-10 text-white group-hover:text-rfci-blue ml-1 transition-colors duration-500" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-label font-bold uppercase tracking-widest text-rfci-black/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rfci-blue"></span>
                    Featured Course
                  </span>
                  <span className="text-label font-bold uppercase tracking-widest text-rfci-blue">
                    {featured.duration}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-light tracking-tight group-hover:text-rfci-blue transition-colors leading-[1.1] mb-4">
                  {featured.title}
                </h3>
                {featured.description && (
                  <p className="text-rfci-black/60 text-base leading-relaxed max-w-xl">
                    {featured.description}
                  </p>
                )}
              </div>
            </a>
          </SectionReveal>

          {supportingVideos.length > 0 ? (
            <div className="lg:col-span-5 flex flex-col gap-6">
              {supportingVideos.map((video, i) => (
                <SectionReveal key={video.title} direction="right" delay={i * 0.15} className="group cursor-pointer flex flex-col h-full">
                  <a
                    href={video.courseUrl || 'https://rfci.com/videos/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full bg-white border border-rfci-black/5 shadow-sm overflow-hidden hover:border-rfci-blue/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
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
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-label font-bold uppercase tracking-widest text-rfci-black/60 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-rfci-blue/50"></span>
                          {video.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-light group-hover:text-rfci-blue transition-colors leading-tight mb-3">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="text-sm text-rfci-black/55 leading-relaxed line-clamp-3">
                          {video.description}
                        </p>
                      )}
                    </div>
                  </a>
                </SectionReveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
