'use client'

import Link from 'next/link'
import { PlayCircle, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { SITE_SETTINGS } from '../_data/site-settings'
import { VIDEOS, type Video } from '../_data/videos'
import { mediaUrl } from '../_lib/transforms'

const FALLBACK_THUMB = 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png'

function getThumbSrc(video: Video): string {
  if (video.thumbnailUrl) return video.thumbnailUrl
  return mediaUrl(video.thumbnail, FALLBACK_THUMB)
}

type EducationSectionProps = {
  videos?: Video[]
}

export function EducationSection({ videos = VIDEOS }: EducationSectionProps) {
  const orderedVideos = [...videos].sort((left, right) => left.order - right.order)
  const featured = orderedVideos.find((video) => video.featured) ?? orderedVideos[0]
  const sideVideos = orderedVideos
    .filter((video) => video.title !== featured?.title)
    .slice(0, 2)

  if (!featured) return null

  return (
    <section id="education" className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fd_100%)] py-28 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,#00c2d11a,transparent_65%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SectionReveal direction="left">
            <div className="text-xs font-bold tracking-[0.32em] uppercase text-rfci-blue mb-4">
              {SITE_SETTINGS.educationSubheading}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight">
              {SITE_SETTINGS.educationHeading}
            </h2>
          </SectionReveal>
          <SectionReveal direction="right">
            <Link
              href="/videos"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-rfci-blue transition-colors group"
            >
              <span className="relative">
                <span className="relative z-10 flex items-center gap-2">
                  View All Videos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-black group-hover:w-full transition-all duration-300 ease-out" />
              </span>
            </Link>
          </SectionReveal>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* Main Featured Video */}
          <SectionReveal className="group md:col-span-8">
            <a
              href={featured.courseUrl || 'https://rfci.com/videos/'}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[2rem] border border-rfci-black/5 bg-white/90 p-5 shadow-[0_24px_80px_rgba(1,100,219,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-6"
            >
              <div className="relative mb-6 aspect-video overflow-hidden rounded-[1.5rem]">
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
              <div className="flex items-center gap-3 mb-4">
                <span className="text-label font-bold uppercase tracking-widest text-rfci-black/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rfci-blue"></span>
                  {featured.duration}
                </span>
              </div>
              <h3 className="mb-4 text-3xl font-display font-light leading-[1.05] tracking-tight transition-colors group-hover:text-rfci-blue md:text-5xl">
                {featured.title}
              </h3>
              {featured.description && (
                <p className="max-w-2xl text-base leading-relaxed text-rfci-black/60 md:text-lg">
                  {featured.description}
                </p>
              )}
            </a>
          </SectionReveal>

          {/* Smaller Videos */}
          <div className="flex flex-col gap-6 md:col-span-4">
            {sideVideos.map((video, i) => (
              <SectionReveal key={video.title} direction="right" delay={i * 0.2} className="group flex h-full flex-col">
                <a
                  href={video.courseUrl || 'https://rfci.com/videos/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[1.75rem] border border-rfci-black/5 bg-white p-4 shadow-[0_18px_48px_rgba(18,18,18,0.06)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative mb-5 aspect-video overflow-hidden rounded-[1.25rem]">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-label font-bold uppercase tracking-widest text-rfci-black/60 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-rfci-blue/50"></span>
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-display font-light leading-tight transition-colors group-hover:text-rfci-blue">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="line-clamp-3 text-sm leading-relaxed text-rfci-black/60">
                      {video.description}
                    </p>
                  )}
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
