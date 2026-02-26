'use client'

import { PlayCircle, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { mediaUrl } from '../_lib/transforms'

type VideoDoc = {
  title: string
  duration: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbnail?: any
  featured?: boolean
  order?: number
}

const VIDEOS_STATIC: VideoDoc[] = [
  {
    title: 'The Future of Circularity in Resilient Flooring',
    duration: '12 min watch',
    thumbnail: { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&sig=10' },
    featured: true,
  },
  {
    title: 'Understanding Acoustic Performance',
    duration: '6 min watch',
    thumbnail: { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop&sig=11' },
    featured: false,
  },
  {
    title: 'Installation Best Practices for LVT',
    duration: '8 min watch',
    thumbnail: { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop&sig=12' },
    featured: false,
  },
]

const FALLBACK_THUMB = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EducationSection({ videos }: { videos: any[] }) {
  const displayVideos: VideoDoc[] = videos?.length ? videos : VIDEOS_STATIC
  const featured = displayVideos.find((v) => v.featured) ?? displayVideos[0]
  const sideVideos = displayVideos.filter((v) => !v.featured).slice(0, 2)

  if (!featured) return null

  return (
    <section id="education" className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SectionReveal direction="left">
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4">Educational Videos</div>
            <h2 className="text-4xl md:text-5xl font-display font-light">From our video library</h2>
          </SectionReveal>
          <SectionReveal direction="right">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-rfci-blue transition-colors group">
              <span className="relative">
                <span className="relative z-10 flex items-center gap-2">
                  View All Videos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-black group-hover:w-full transition-all duration-300 ease-out" />
              </span>
            </button>
          </SectionReveal>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Main Featured Video */}
          <SectionReveal className="md:col-span-8 group cursor-pointer">
            <div className="relative aspect-video overflow-hidden mb-6 shadow-sm">
              <img
                src={mediaUrl(featured.thumbnail, FALLBACK_THUMB)}
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
              <span className="text-[11px] font-bold uppercase tracking-widest text-rfci-black/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rfci-blue"></span>
                {featured.duration}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-light tracking-tight group-hover:text-rfci-blue transition-colors leading-[1.1]">
              {featured.title}
            </h3>
          </SectionReveal>

          {/* Smaller Videos */}
          <div className="md:col-span-4 flex flex-col gap-10">
            {sideVideos.map((video, i) => (
              <SectionReveal key={i} direction="right" delay={i * 0.2} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden mb-5 shadow-sm">
                  <img
                    src={mediaUrl(video.thumbnail, FALLBACK_THUMB)}
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rfci-black/40 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-rfci-blue/50"></span>
                    {video.duration}
                  </span>
                </div>
                <h3 className="text-xl font-display font-light group-hover:text-rfci-blue transition-colors leading-tight">
                  {video.title}
                </h3>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
