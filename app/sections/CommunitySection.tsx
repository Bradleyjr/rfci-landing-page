'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { Calendar, MapPin, ArrowRight } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { mediaUrl } from '../_lib/transforms'

type PhotoItem = { url: string; caption?: string }

const STATIC_PHOTOS: PhotoItem[] = [
  { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop', caption: 'Fall Industry Meeting 2024' },
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop', caption: 'Technical Advisory Committee' },
  { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop', caption: 'Spring Industry Meeting' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50ab2352?q=80&w=1000&auto=format&fit=crop', caption: 'Member Networking Reception' },
  { url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1000&auto=format&fit=crop', caption: 'Awards Ceremony' },
  { url: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1000&auto=format&fit=crop', caption: 'Sustainability Workshop' },
  { url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop', caption: 'Board of Directors Session' },
  { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop', caption: 'Industry Panel Discussion' },
  { url: 'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000&auto=format&fit=crop', caption: 'FloorScore Certification Event' },
  { url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop', caption: 'Standards Committee Review' },
  { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop', caption: 'Member Spotlight Presentation' },
  { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop', caption: 'Industry Networking Event' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CommunitySection({ communityEvent }: { communityEvent: any }) {
  const arcRef = useRef<HTMLDivElement>(null)

  const sectionHeading = communityEvent?.sectionHeading ?? 'Where the industry comes together.'
  const sectionSubheading = communityEvent?.sectionSubheading ?? "Twice a year, RFCI members and industry professionals get together to share what's working, talk through technical standards, and discuss sustainability. If you work in resilient flooring, this is where you want to be."
  const eventTitle = communityEvent?.eventTitle ?? 'Fall Industry Meeting'
  const eventLocation = communityEvent?.eventLocation ?? 'Austin, TX'
  const eventDate = communityEvent?.eventDate ?? 'Oct 12–14'

  // Extract photos from Payload photos array, fallback to static
  const cmsPhotos: PhotoItem[] = (communityEvent?.photos ?? [])
    .map((p: { photo?: { url?: string | null } | null; caption?: string }) => {
      const url = mediaUrl(p?.photo)
      return url ? { url, caption: p?.caption } : null
    })
    .filter(Boolean) as PhotoItem[]
  const photos = cmsPhotos.length ? cmsPhotos : STATIC_PHOTOS

  const { scrollYProgress: arcScroll } = useScroll({
    target: arcRef,
    offset: ['start end', 'end start'],
  })
  const smoothArcScroll = useSpring(arcScroll, { stiffness: 50, damping: 20, mass: 0.5 })
  const wheelRotation = useTransform(smoothArcScroll, [0, 1], [10, -10])

  // Split heading: apply bold+blue styling to last sentence
  const headingParts = sectionHeading.split(/\.\s+/)
  const lastPart = headingParts.pop() ?? ''
  const firstPart = headingParts.join('. ') + (headingParts.length ? '.' : '')

  return (
    <section id="community" className="pt-32 bg-rfci-white relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <SectionReveal direction="left" className="lg:col-span-7">
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-3">The Community</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-8 leading-tight">
              {firstPart ? <>{firstPart}<br /></> : null}<span className="font-semibold text-rfci-blue">{lastPart}</span>
            </h2>
            <p className="text-xl text-rfci-black/70 font-light leading-relaxed max-w-2xl">
              {sectionSubheading}
            </p>
          </SectionReveal>

          <SectionReveal direction="right" className="lg:col-span-5">
            <div className="bg-white p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-rfci-blue/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-rfci-blue" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg">{eventTitle}</h4>
                  <p className="text-sm text-rfci-black/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {eventLocation} &bull; {eventDate}
                  </p>
                </div>
              </div>
              <button className="w-full py-3 border border-rfci-light-gray text-sm font-medium hover:border-rfci-black hover:bg-rfci-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group">
                View Event Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Scrapbook Image Arc */}
      <div ref={arcRef} className="relative w-full h-[450px] md:h-[550px] pointer-events-none mt-24 md:mt-40">
        <motion.div
          className="absolute top-[-5500px] left-1/2 w-[6000px] h-[6000px] -ml-[3000px] flex items-center justify-center pointer-events-none"
          style={{ rotate: wheelRotation }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i - 12) * 8
            const rotations = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', 'rotate-0']
            const rotClass = rotations[i % rotations.length]
            const photo = photos[i % photos.length]
            const grayscaleVariant = 0.2 + (i % 3) * 0.15

            return (
              <div
                key={i}
                className="absolute pointer-events-none"
                style={{ transform: `rotate(${angle}deg) translateY(2800px)`, transformOrigin: 'center' }}
              >
                <div className={`group/photo w-56 h-80 md:w-80 md:h-[420px] -mt-40 md:-mt-[210px] -ml-28 md:-ml-40 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 border-white/90 hover:scale-110 hover:-translate-y-8 hover:z-50 transition-all duration-500 cursor-pointer relative z-10 pointer-events-auto ${rotClass}`}>
                  <img
                    src={photo.url}
                    alt={photo.caption ?? 'Community event'}
                    className="w-full h-full object-cover scale-110 group-hover/photo:grayscale-0 transition-all duration-500"
                    style={{ filter: `grayscale(${grayscaleVariant})` }}
                  />
                  {photo.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rfci-black/80 to-transparent p-4 pt-10 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                      <span className="text-label font-bold tracking-widest uppercase text-white/90">{photo.caption}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
