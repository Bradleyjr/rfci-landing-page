'use client'

import { LinkedinLogo, ThumbsUp, ChatCircle, ArrowRight, Heart, Repeat } from '@phosphor-icons/react'
import { SectionReveal } from '../_components/SectionReveal'
import { SITE_SETTINGS } from '../_data/site-settings'

const RFCI_LINKEDIN_URL = 'https://www.linkedin.com/company/resilient-floor-covering-institute/'

const FAKE_POSTS = [
  {
    avatar: '/rfci-logo.svg',
    name: 'Resilient Floor Covering Institute',
    handle: 'resilient-floor-covering-institute',
    time: '2d',
    text: 'Exciting news from RFCI! Our members continue to lead the way in resilient flooring innovation, sustainability, and product transparency. Learn how certified resilient flooring supports healthier indoor environments.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop',
    likes: 47,
    comments: 12,
    reposts: 5,
  },
  {
    avatar: '/rfci-logo.svg',
    name: 'Resilient Floor Covering Institute',
    handle: 'resilient-floor-covering-institute',
    time: '5d',
    text: 'RFCI is proud to support the development of rigorous industry standards that give architects and designers confidence in their material selections. #ResilientFlooring #Sustainability',
    likes: 83,
    comments: 24,
    reposts: 11,
  },
  {
    avatar: '/rfci-logo.svg',
    name: 'Resilient Floor Covering Institute',
    handle: 'resilient-floor-covering-institute',
    time: '1w',
    text: 'From EPDs to FloorScore certification, RFCI members are committed to product transparency and environmental stewardship. Discover how resilient flooring is advancing green building goals.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop',
    likes: 62,
    comments: 8,
    reposts: 3,
  },
]

export function LinkedInFeedSection() {
  return (
    <section id="linkedin" className="py-24 md:py-32 bg-rfci-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-rfci-blue mb-4 flex items-center gap-2">
              <LinkedinLogo className="w-4 h-4" weight="fill" /> Stay Connected
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light leading-tight">
              {SITE_SETTINGS.linkedinHeading}
            </h2>
          </div>
          <a
            href={SITE_SETTINGS.linkedinUrl || RFCI_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rfci-blue font-medium text-sm group shrink-0"
          >
            <LinkedinLogo className="w-4 h-4" weight="fill" />
            <span className="relative">
              <span className="relative z-10 flex items-center gap-2">
                Follow on LinkedIn <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rfci-blue group-hover:w-full transition-all duration-300 ease-out" />
            </span>
          </a>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {FAKE_POSTS.map((post, idx) => (
            <SectionReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-white border border-black/5 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Post Header */}
                <div className="p-5 pb-0 flex items-center gap-3">
                  <div className="w-10 h-10 bg-rfci-blue/10 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={post.avatar} alt="" className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-rfci-black truncate">{post.name}</div>
                    <div className="text-xs text-rfci-black/40">{post.time}</div>
                  </div>
                  <LinkedinLogo className="w-5 h-5 text-[#0A66C2] ml-auto shrink-0" weight="fill" />
                </div>

                {/* Post Text */}
                <div className="px-5 pt-4 pb-4">
                  <p className="text-sm text-rfci-black/70 leading-relaxed line-clamp-4">{post.text}</p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="px-5 py-3 flex items-center gap-1 text-xs text-rfci-black/40 border-b border-black/5">
                  <span className="inline-flex items-center gap-0.5">
                    <span className="w-4 h-4 bg-[#0A66C2] rounded-full flex items-center justify-center"><ThumbsUp className="w-2.5 h-2.5 text-white" weight="fill" /></span>
                    <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center -ml-1"><Heart className="w-2.5 h-2.5 text-white" weight="fill" /></span>
                  </span>
                  <span className="ml-1">{post.likes}</span>
                  <span className="ml-auto">{post.comments} comments &middot; {post.reposts} reposts</span>
                </div>

                {/* Action Buttons */}
                <div className="px-5 py-2 flex items-center justify-between text-rfci-black/50">
                  <button className="flex items-center gap-1.5 text-xs font-semibold hover:text-rfci-black/80 transition-colors py-2 px-2">
                    <ThumbsUp className="w-4 h-4" /> Like
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-semibold hover:text-rfci-black/80 transition-colors py-2 px-2">
                    <ChatCircle className="w-4 h-4" /> Comment
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-semibold hover:text-rfci-black/80 transition-colors py-2 px-2">
                    <Repeat className="w-4 h-4" /> Repost
                  </button>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
