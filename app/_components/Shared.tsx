'use client'

import { useState } from 'react'
import { ArrowRight, List as Menu, X, CaretDown, Leaf, FileText, PlayCircle, Question } from '@phosphor-icons/react'

const sectionToNav: Record<string, string> = {
  'hero': 'About',
  'environments': 'About',
  'flooring-types': 'Learn',
  'standards': 'Certifications',
  'community': 'Newsroom',
  'education': 'Learn',
  'members': 'Members',
}

const navItems = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Learn',
    megaMenu: [
      { label: 'Why Resilient', href: '/why-resilient', desc: 'Product categories, sustainability, and why resilient is growing.', icon: Leaf },
      { label: 'Resources', href: '/resources', desc: 'Technical docs, standards, and sustainable guidance.', icon: FileText },
      { label: 'Videos', href: '/videos', desc: 'Educational content for commercial end users and A&D.', icon: PlayCircle },
      { label: 'FAQ', href: '/faq', desc: 'Common questions answered directly for all audiences.', icon: Question },
    ],
  },
  {
    title: 'Certifications',
    href: '/certifications',
  },
  {
    title: 'Newsroom',
    href: '/newsroom',
  },
  {
    title: 'Members',
    dropdown: [
      { label: 'Board Companies', href: '/members/board-companies' },
      { label: 'Associate Members', href: '/members/associate-members' },
      { label: 'Member Directory', href: '/members/directory' },
    ],
  },
]

export const Navigation = ({
  isScrolled,
  theme = 'light',
  activeSection = null,
}: {
  isScrolled: boolean
  theme?: 'light' | 'dark'
  activeSection?: string | null
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeNavTitle = activeSection ? sectionToNav[activeSection] : null

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5 py-4 shadow-sm'
            : 'bg-white/90 backdrop-blur-md border-b border-black/5 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/rfci-logo.svg" alt="RFCI – Resilient Floor Covering Institute" className="h-7 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeNavTitle === item.title
              return (
                <div key={item.title} className="relative group">
                  <a
                    href={item.href || `#${item.title.toLowerCase()}`}
                    className={`relative flex items-center gap-1 text-sm font-medium tracking-wide py-4 transition-colors ${
                      isActive ? 'text-rfci-blue' : 'text-rfci-black/80 hover:text-rfci-blue'
                    }`}
                  >
                    {item.title}
                    {(item.dropdown || item.megaMenu) && (
                      <CaretDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                    <span
                      className={`absolute bottom-2 left-0 h-[2px] bg-rfci-blue transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>

                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-56 bg-white border border-black/5 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.href}
                            className="block px-5 py-2.5 text-sm text-rfci-black/70 hover:text-rfci-blue hover:bg-rfci-light-gray/20 transition-colors"
                          >
                            {dropItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.megaMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-black/5 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {item.megaMenu.map((megaItem) => (
                          <a
                            key={megaItem.label}
                            href={megaItem.href}
                            className="flex items-start gap-4 p-4 hover:bg-rfci-light-gray/30 transition-colors group/card border border-transparent hover:border-black/5"
                          >
                            <div className="w-10 h-10 bg-rfci-blue/10 flex items-center justify-center shrink-0 text-rfci-blue group-hover/card:bg-rfci-blue group-hover/card:text-white transition-colors">
                              <megaItem.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-display font-medium text-rfci-black mb-1 group-hover/card:text-rfci-blue transition-colors">
                                {megaItem.label}
                              </h4>
                              <p className="text-xs text-rfci-black/60 leading-relaxed">{megaItem.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-rfci-black w-6 h-6" />
            ) : (
              <Menu className="text-rfci-black w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto pb-24">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-rfci-light-gray pb-4">
                <a
                  href={item.href || `#${item.title.toLowerCase()}`}
                  className="text-2xl font-display font-medium text-rfci-black flex justify-between items-center"
                  onClick={() => !(item.dropdown || item.megaMenu) && setMobileMenuOpen(false)}
                >
                  {item.title}
                  {(item.dropdown || item.megaMenu) && <CaretDown className="w-5 h-5 opacity-50" />}
                </a>
                {item.dropdown && (
                  <div className="flex flex-col gap-3 mt-4 pl-4 border-l-2 border-rfci-light-gray/50">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.label}
                        href={dropItem.href}
                        className="text-lg text-rfci-black/70"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                )}
                {item.megaMenu && (
                  <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-rfci-light-gray/50">
                    {item.megaMenu.map((megaItem) => (
                      <a
                        key={megaItem.label}
                        href={megaItem.href}
                        className="flex flex-col gap-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-lg text-rfci-black/80 font-medium">{megaItem.label}</span>
                        <span className="text-xs text-rfci-black/50">{megaItem.desc}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export const Footer = () => (
  <footer className="bg-rfci-black text-white pt-24 pb-12 overflow-hidden relative">
    <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
        <div className="lg:col-span-4">
          <div className="mb-6">
            <img
              src="/rfci-logo.svg"
              alt="RFCI – Resilient Floor Covering Institute"
              className="h-7 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
            The Resilient Floor Covering Institute is the voice of the resilient flooring industry, advancing the
            category through standards, sustainability, and education.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-rfci-teal transition-colors cursor-pointer">
              <span className="text-xs font-bold">IN</span>
            </div>
            <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-rfci-teal transition-colors cursor-pointer">
              <span className="text-xs font-bold">X</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-7">
          <h4 className="font-bold tracking-widest uppercase text-xs text-white/40 mb-6">About</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="/about#who-we-are" className="hover:text-rfci-teal transition-colors">Who We Are</a></li>
            <li><a href="/about#history-mission" className="hover:text-rfci-teal transition-colors">History & Mission</a></li>
            <li><a href="/about#strategic-imperatives" className="hover:text-rfci-teal transition-colors">Strategic Imperatives</a></li>
            <li><a href="/about#board-of-directors" className="hover:text-rfci-teal transition-colors">Board of Directors</a></li>
            <li><a href="/about#community-philanthropy" className="hover:text-rfci-teal transition-colors">Community & Philanthropy</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-bold tracking-widest uppercase text-xs text-white/40 mb-6">Learn</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="/why-resilient" className="hover:text-rfci-teal transition-colors">Why Resilient</a></li>
            <li><a href="/resources" className="hover:text-rfci-teal transition-colors">Resources</a></li>
            <li><a href="/videos" className="hover:text-rfci-teal transition-colors">Videos</a></li>
            <li><a href="/faq" className="hover:text-rfci-teal transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-bold tracking-widest uppercase text-xs text-white/40 mb-6">Organization</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="/certifications" className="hover:text-rfci-teal transition-colors">Certifications</a></li>
            <li><a href="/newsroom" className="hover:text-rfci-teal transition-colors">Newsroom</a></li>
            <li><a href="/members/board-companies" className="hover:text-rfci-teal transition-colors">Board Companies</a></li>
            <li><a href="/members/associate-members" className="hover:text-rfci-teal transition-colors">Associate Members</a></li>
            <li><a href="/members/directory" className="hover:text-rfci-teal transition-colors">Member Directory</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 mt-16 pt-8 border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Resilient Floor Covering Institute. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
)
