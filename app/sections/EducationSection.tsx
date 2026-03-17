'use client'

import { PlayCircle, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { mediaUrl } from '../_lib/transforms'
import { SITE_SETTINGS } from '../_data/site-settings'
import { VIDEOS, type Video } from '../_data/videos'

type VideoDoc = Video

const FALLBACK_THUMB = 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png'

function getThumbSrc(video: VideoDoc): string {
  if (video.thumbnailUrl) return video.thumbnailUrl
  return mediaUrl(video.thumbnail, FALLBACK_THUMB)
}

export function EducationSection({ videos = VIDEOS }: { videos?: VideoDoc[] }) {
  const displayVideos = [...videos].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  const featured = displayVideos.find((video) => video.featured) ?? displayVideos[0]
  const sideVideos = displayVideos.filter((video) => video !== featured).slice(0, 2)

  if (!featured) return null

  return (
    <section id="education" className="py-24 md:py-32 bg-white relative z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rfci-light-gray to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[28rem] bg-[linear-gradient(180deg,rgba(1,100,219,0.05),rgba(0,194,209,0.02),transparent)] pointer-events-none hidden lg:block" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SectionReveal direction="left">
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4">Educational Videos</div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">{SITE_SETTINGS.educationHeading}</h2>
            <p className="text-rfci-black/70 text-base md:text-lg max-w-2xl leading-relaxed">
              {SITE_SETTINGS.educationSubheading}
            </p>
          </SectionReveal>
          <SectionReveal direction="right">
            <a
              href="/videos"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-rfci-blue transition-colors group"
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

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Main Featured Video */}
          <SectionReveal className="md:col-span-8 group cursor-pointer">
            <a
              href={featured.courseUrl || 'https://rfci.com/videos/'}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-video overflow-hidden mb-6 shadow-[0_24px_70px_rgba(18,18,18,0.12)]">
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
              <h3 className="text-4xl md:text-5xl font-display font-light tracking-tight group-hover:text-rfci-blue transition-colors leading-[1.1] mb-4">
                {featured.title}
              </h3>
              {featured.description && (
                <p className="text-rfci-black/60 text-base leading-relaxed max-w-xl">
                  {featured.description}
                </p>
              )}
            </a>
          </SectionReveal>

          {/* Smaller Videos */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {sideVideos.map((video, i) => (
              <SectionReveal key={video.title} direction="right" delay={i * 0.2} className="group cursor-pointer flex flex-col h-full">
                <a
                  href={video.courseUrl || 'https://rfci.com/videos/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-black/5 bg-white p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,18,18,0.1)]"
                >
                  <div className="relative aspect-video overflow-hidden mb-5 shadow-sm">
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
                  <h3 className="text-xl font-display font-light group-hover:text-rfci-blue transition-colors leading-tight">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="mt-3 text-sm text-rfci-black/60 leading-relaxed">
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
