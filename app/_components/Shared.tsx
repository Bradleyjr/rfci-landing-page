'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { List as Menu, X, CaretDown, Leaf, FileText, PlayCircle, ShieldCheck, Seal, Certificate, Globe, Images, MapPin, EnvelopeSimple, LinkedinLogo, ArrowSquareOut } from '@phosphor-icons/react'

const navItems = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Resources',
    megaMenu: [
      { label: 'Why Resilient', href: '/why-resilient', desc: 'What makes resilient flooring a smart choice for your space.', icon: Leaf },
      { label: 'Flooring Types', href: '/flooring', desc: 'Explore the full range of resilient flooring products.', icon: FileText },
      { label: 'Inspiration Gallery', href: '/inspiration', desc: 'Real installations showcasing resilient flooring in action.', icon: Images },
      { label: 'Resources', href: '/resources', desc: 'Technical documents, standards, and sustainability guides.', icon: FileText },
      { label: 'Glossary', href: '/resources/glossary', desc: 'A searchable A–Z reference for resilient flooring terminology.', icon: FileText },
    ],
    highlight: {
      label: 'ecomedes',
      href: 'https://rfci.ecomedes.com/',
      logo: 'https://static.wixstatic.com/media/4d8d9d_10fe60eb91d1408cb8b3be4f23925209~mv2.png/v1/fill/w_288,h_288,al_c,q_85,enc_avif,quality_auto/Ecomedes_logo_oncecolor_black.png',
      desc: 'Search certified resilient flooring products for green building projects.',
      external: true,
    },
  },
  {
    title: 'Sustainability',
    megaMenu: [
      { label: 'FloorScore®', href: '/certifications/floorscore', desc: 'The leading indoor air quality certification for hard surface flooring.', icon: ShieldCheck },
      { label: 'ASSURE® Certified', href: '/certifications/assure', desc: 'Third-party sustainability certification across the full product lifecycle.', icon: Seal },
      { label: 'AFFIRM™ Certified', href: '/certifications/affirm', desc: 'Material health certification for resilient flooring products.', icon: Certificate },
      { label: 'Environmental Product Declaration', href: '/certifications/epd', desc: 'Transparent reporting of environmental impact across a product\'s lifecycle.', icon: Globe },
    ],
  },
  {
    title: 'Member Directory',
    href: '/members',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export const Navigation = ({
  isScrolled,
  theme = 'light',
}: {
  isScrolled: boolean
  theme?: 'light' | 'dark'
}) => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [openMobileMega, setOpenMobileMega] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)

  // Close mobile menu on Escape + lock body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const isActive = (item: typeof navItems[0]) => {
    if (item.href) return pathname === item.href
    if (item.megaMenu) return item.megaMenu.some(child => pathname === child.href || pathname.startsWith(child.href + '/'))
    return false
  }

  const handleEnter = (title: string) => {
    if (closeTimeout) clearTimeout(closeTimeout)
    setOpenMenu(title)
  }
  const handleLeave = () => {
    const timeout = setTimeout(() => setOpenMenu(null), 150)
    setCloseTimeout(timeout)
  }

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5 py-4 shadow-sm'
            : 'bg-white/90 backdrop-blur-md border-b border-black/5 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img src="/rfci-logo.svg" alt="RFCI – Resilient Floor Covering Institute" className="h-10 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.megaMenu && handleEnter(item.title)}
                onMouseLeave={() => item.megaMenu && handleLeave()}
              >
                <a
                  href={item.href || `#${item.title.toLowerCase()}`}
                  className={`relative flex items-center gap-1 text-sm font-medium tracking-wide py-1 transition-colors ${
                    openMenu === item.title || isActive(item) ? 'text-rfci-blue' : 'text-rfci-black/60 hover:text-rfci-blue'
                  }`}
                >
                  {item.title}
                  {item.megaMenu && (
                    <CaretDown className={`w-3 h-3 opacity-50 transition-transform duration-300 ${openMenu === item.title ? 'rotate-180' : ''}`} />
                  )}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-rfci-blue transition-all duration-300 ${openMenu === item.title || isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
                </div>
            ))}
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

        {/* Mega menu panels — drop from nav bottom edge */}
        {navItems.filter(item => item.megaMenu).map((item) => (
          <div
            key={item.title}
            className={`hidden md:block absolute top-full left-0 w-full bg-white shadow-2xl border-t border-black/5 transition-all duration-300 ${
              openMenu === item.title
                ? 'opacity-100 visible'
                : 'opacity-0 invisible pointer-events-none'
            }`}
            onMouseEnter={() => handleEnter(item.title)}
            onMouseLeave={handleLeave}
          >
            <div className={`max-w-7xl mx-auto px-6 md:px-12 py-8`}>
              <div className={`flex gap-8 ${item.highlight ? '' : ''}`}>
                <div className={`grid gap-4 ${item.megaMenu!.length > 4 ? 'grid-cols-3' : 'grid-cols-2'} ${item.highlight ? 'flex-1' : 'max-w-[860px]'}`}>
                  {item.megaMenu!.map((megaItem) => {
                    // A sibling child has a more-specific exact match — don't let a shorter prefix claim active state
                    const exactSiblingMatch = item.megaMenu!.some(
                      sibling => sibling.href !== megaItem.href && pathname === sibling.href
                    )
                    const isMegaActive =
                      pathname === megaItem.href ||
                      (!exactSiblingMatch && pathname.startsWith(megaItem.href + '/'))
                    return (
                      <a
                        key={megaItem.label}
                        href={megaItem.href}
                        className={`flex items-start gap-4 p-4 transition-colors group/card border ${
                          isMegaActive
                            ? 'bg-rfci-blue/5 border-rfci-blue/20'
                            : 'border-transparent hover:bg-rfci-light-gray/30 hover:border-black/5'
                        }`}
                      >
                        <megaItem.icon className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isMegaActive ? 'text-rfci-blue' : 'text-rfci-black/30 group-hover/card:text-rfci-blue'}`} />
                        <div>
                          <h4 className={`font-display font-medium mb-1 transition-colors ${isMegaActive ? 'text-rfci-blue' : 'text-rfci-black group-hover/card:text-rfci-blue'}`}>
                            {megaItem.label}
                          </h4>
                          <p className="text-xs text-rfci-black/60 leading-relaxed">{megaItem.desc}</p>
                        </div>
                        {isMegaActive && (
                          <div className="ml-auto shrink-0 w-1.5 h-1.5 rounded-full bg-rfci-blue mt-1.5" />
                        )}
                      </a>
                    )
                  })}
                </div>

                {/* Highlighted external link — right column spanning full height */}
                {item.highlight && (
                  <div className="w-64 shrink-0 border-l border-black/5 pl-8 flex">
                    <a
                      href={item.highlight.href}
                      target={item.highlight.external ? '_blank' : undefined}
                      rel={item.highlight.external ? 'noopener noreferrer' : undefined}
                      className="flex flex-col items-center justify-center text-center p-6 bg-rfci-cream/50 hover:bg-rfci-cream transition-colors group/hl flex-1"
                    >
                      {item.highlight.logo ? (
                        <img src={item.highlight.logo} alt={item.highlight.label} className="h-[84px] w-auto mb-4 opacity-70 group-hover/hl:opacity-100 transition-opacity duration-300" />
                      ) : (
                        <div className="w-12 h-12 bg-rfci-blue/10 flex items-center justify-center text-rfci-blue group-hover/hl:bg-rfci-blue group-hover/hl:text-white transition-colors mb-4">
                          <ArrowSquareOut className="w-6 h-6" />
                        </div>
                      )}
                      <p className="text-xs text-rfci-black/50 leading-relaxed mb-4">{item.highlight.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rfci-blue tracking-wide uppercase">
                        Visit site <ArrowSquareOut className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto pb-24">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-rfci-light-gray pb-4">
                {item.megaMenu ? (
                  <button
                    className={`w-full text-2xl font-display font-medium text-left flex justify-between items-center ${isActive(item) ? 'text-rfci-blue' : 'text-rfci-black'}`}
                    onClick={() => setOpenMobileMega(openMobileMega === item.title ? null : item.title)}
                  >
                    {item.title}
                    <CaretDown className={`w-5 h-5 opacity-50 transition-transform duration-300 ${openMobileMega === item.title ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={item.href || '#'}
                    className={`text-2xl font-display font-medium ${isActive(item) ? 'text-rfci-blue' : 'text-rfci-black'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                )}
                {item.megaMenu && openMobileMega === item.title && (
                  <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-rfci-light-gray/50">
                    {item.megaMenu.map((megaItem) => (
                      <a
                        key={megaItem.label}
                        href={megaItem.href}
                        className="flex flex-col gap-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className={`text-lg font-medium ${pathname === megaItem.href ? 'text-rfci-blue' : 'text-rfci-black/60'}`}>{megaItem.label}</span>
                        <span className="text-xs text-rfci-black/50">{megaItem.desc}</span>
                      </a>
                    ))}
                    {item.highlight && (
                      <div className="mt-2 pt-3 border-t border-rfci-light-gray/30">
                        <a
                          href={item.highlight.href}
                          target={item.highlight.external ? '_blank' : undefined}
                          rel={item.highlight.external ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-lg font-medium text-rfci-blue">{item.highlight.label}</span>
                          {item.highlight.external && <ArrowSquareOut className="w-4 h-4 text-rfci-blue/60" />}
                        </a>
                        <span className="text-xs text-rfci-black/50">{item.highlight.desc}</span>
                      </div>
                    )}
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
            <a href="/">
              <img
                src="/rfci-logo.svg"
                alt="RFCI – Resilient Floor Covering Institute"
                className="h-7 w-auto brightness-0 invert"
              />
            </a>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
            The trade association representing the resilient flooring industry in North America since 1976.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/resilient-floor-covering-institute/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-rfci-blue transition-colors duration-200">
              <LinkedinLogo className="w-4 h-4" weight="fill" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-7">
          <h4 className="font-bold tracking-widest uppercase text-label text-white/40 mb-6">About</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="/about" className="hover:text-rfci-blue transition-colors duration-200">About RFCI</a></li>
            <li><a href="/members" className="hover:text-rfci-blue transition-colors duration-200">Member Directory</a></li>
            <li><a href="/contact" className="hover:text-rfci-blue transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-bold tracking-widest uppercase text-label text-white/40 mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="/why-resilient" className="hover:text-rfci-blue transition-colors duration-200">Why Resilient</a></li>
            <li><a href="/flooring" className="hover:text-rfci-blue transition-colors duration-200">Flooring Types</a></li>
            <li><a href="/inspiration" className="hover:text-rfci-blue transition-colors duration-200">Inspiration Gallery</a></li>
            <li><a href="/resources" className="hover:text-rfci-blue transition-colors duration-200">Resources</a></li>
            <li><a href="/resources/glossary" className="hover:text-rfci-blue transition-colors duration-200">Glossary</a></li>

            <li><a href="https://rfci.ecomedes.com/" target="_blank" rel="noopener noreferrer" className="hover:text-rfci-blue transition-colors duration-200">ecomedes®</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-bold tracking-widest uppercase text-label text-white/40 mb-6">Sustainability</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="/certifications/floorscore" className="hover:text-rfci-blue transition-colors duration-200">FloorScore®</a></li>
            <li><a href="/certifications/assure" className="hover:text-rfci-blue transition-colors duration-200">ASSURE® Certified</a></li>
            <li><a href="/certifications/affirm" className="hover:text-rfci-blue transition-colors duration-200">AFFIRM™ Certified</a></li>
            <li><a href="/certifications/epd" className="hover:text-rfci-blue transition-colors duration-200">EPDs</a></li>
          </ul>
        </div>
      </div>

      {/* Contact Block */}
      <div className="border-t border-white/10 pt-10 mb-10">
        <div className="grid md:grid-cols-2 gap-8 text-sm text-white/60">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-rfci-blue" />
            <div>
              <div className="font-medium text-white/80 mb-1">RFCI Headquarters</div>
              115 Broad Street, Suite 201<br />
              LaGrange, Georgia 30240
            </div>
          </div>
          <div className="flex items-start gap-3">
            <EnvelopeSimple className="w-4 h-4 mt-0.5 shrink-0 text-rfci-blue" />
            <div>
              <div className="font-medium text-white/80 mb-1">Email</div>
              <a href="mailto:info@rfci.com" className="hover:text-rfci-blue transition-colors duration-200">info@rfci.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 mt-16 pt-8 border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Resilient Floor Covering Institute. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:text-white transition-colors duration-200">Terms &amp; Conditions</a>
          <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </div>
  </footer>
)
