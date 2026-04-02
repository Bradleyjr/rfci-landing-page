'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X, ArrowRight, Buildings, MapPin } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PhotoPageHero } from '../../_components/PhotoPageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'
import { PROJECTS_STATIC } from './InspirationGallery'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getImageUrl(project: any): string {
  return mediaUrl(project.featuredImage, '') || project.imageUrl || project.featuredImage?.url || ''
}

function getProjectId(project: any): string {
  return project.id || project.slug || project.title
}

function getEnvironmentName(project: any): string {
  return project.environment?.name || project.environmentName || ''
}

function getMemberName(project: any): string {
  return project.member?.name || project.memberName || ''
}

// ---------------------------------------------------------------------------
// Aspect ratio cycle for masonry visual interest
// ---------------------------------------------------------------------------

const ASPECT_CYCLE = [
  'aspect-[3/4]',
  'aspect-[4/3]',
  'aspect-square',
  'aspect-[3/5]',
  'aspect-[4/3]',
  'aspect-[3/4]',
  'aspect-[16/9]',
  'aspect-square',
] as const

// ---------------------------------------------------------------------------
// Grid card item with AnimatePresence transitions
// ---------------------------------------------------------------------------

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 16,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: (i % 4) * 0.06,
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.55, 0, 1, 0.45] as [number, number, number, number],
    },
  },
}

function MasonryCard({
  project,
  index,
  onClick,
}: {
  project: any
  index: number
  onClick: () => void
}) {
  const aspect = ASPECT_CYCLE[index % ASPECT_CYCLE.length]
  const imageUrl = getImageUrl(project)
  const member = getMemberName(project)
  const environment = getEnvironmentName(project)

  return (
    <motion.div
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="break-inside-avoid mb-3 md:mb-4 cursor-pointer group bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all duration-200"
      onClick={onClick}
    >
      {/* Image with fixed aspect ratio */}
      <div className={`${aspect} w-full relative overflow-hidden`}>
        <img
          src={imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rfci-black/80 via-rfci-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-display font-light text-xl md:text-2xl leading-snug mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {member && (
              <span className="text-[9px] font-bold tracking-widest uppercase text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5">
                {member}
              </span>
            )}
            {environment && (
              <span className="text-[9px] font-bold tracking-widest uppercase text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5">
                {environment}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Sticky filter bar
// ---------------------------------------------------------------------------

function FilterBar({
  environmentOptions,
  manufacturerOptions,
  filterEnvironment,
  filterManufacturer,
  setFilterEnvironment,
  setFilterManufacturer,
  filteredCount,
  totalCount,
  resetFilters,
  isSticky,
}: {
  environmentOptions: string[]
  manufacturerOptions: string[]
  filterEnvironment: string
  filterManufacturer: string
  setFilterEnvironment: (v: string) => void
  setFilterManufacturer: (v: string) => void
  filteredCount: number
  totalCount: number
  resetFilters: () => void
  isSticky: boolean
}) {
  const hasFilters = filterEnvironment || filterManufacturer

  const pill = (active: boolean) =>
    [
      'inline-flex items-center text-label font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap',
      active
        ? 'bg-rfci-blue text-white'
        : 'bg-rfci-white text-rfci-black/50 hover:text-rfci-black hover:bg-white',
    ].join(' ')

  return (
    <div
      className={[
        'sticky top-0 z-30 bg-rfci-cream/95 backdrop-blur-md border-b border-black/5 transition-shadow duration-200',
        isSticky ? 'shadow-md' : '',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        {/* Manufacturer dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-label font-bold tracking-widest uppercase text-rfci-black/30 hidden sm:block">
            Mfg
          </span>
          <div className="relative">
            <select
              value={filterManufacturer}
              onChange={(e) => setFilterManufacturer(e.target.value)}
              className={[
                'text-label font-bold tracking-widest uppercase pl-4 pr-8 py-2 rounded-full border-0 cursor-pointer transition-all duration-200 appearance-none',
                filterManufacturer
                  ? 'bg-rfci-blue text-white'
                  : 'bg-rfci-white text-rfci-black/50 hover:text-rfci-black hover:bg-white',
              ].join(' ')}
            >
              <option value="">All Mfg</option>
              {manufacturerOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            {/* Custom chevron */}
            <span
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
              aria-hidden
            >
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke={filterManufacturer ? 'white' : '#94a3b8'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="w-px h-4 bg-rfci-black/10 hidden sm:block" />

        {/* Environment pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-label font-bold tracking-widest uppercase text-rfci-black/30 hidden sm:block">
            Space
          </span>
          <button onClick={() => setFilterEnvironment('')} className={pill(!filterEnvironment)}>
            All
          </button>
          {environmentOptions.map((o) => (
            <button
              key={o}
              onClick={() => setFilterEnvironment(filterEnvironment === o ? '' : o)}
              className={pill(filterEnvironment === o)}
            >
              {o}
            </button>
          ))}
        </div>

        {/* Count + clear */}
        <div className="ml-auto flex items-center gap-3 shrink-0">
          <span className="text-label font-bold tracking-widest uppercase text-rfci-black/30">
            {filteredCount}/{totalCount}
          </span>
          <AnimatePresence>
            {hasFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                onClick={resetFilters}
                className="text-label font-bold tracking-widest uppercase text-rfci-blue hover:text-rfci-blue/70 transition-colors inline-flex items-center gap-1"
              >
                <X weight="bold" className="w-3 h-3" />
                Clear
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Detail modal — exact pattern from InspirationGallery.tsx
// ---------------------------------------------------------------------------

function DetailModal({
  project,
  onClose,
}: {
  project: any
  onClose: () => void
}) {
  const imageUrl = getImageUrl(project)
  const member = getMemberName(project)
  const environment = getEnvironmentName(project)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white max-w-4xl w-full mx-auto max-h-[90vh] overflow-y-auto my-4 md:my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 hover:bg-white transition-colors shadow-md"
          aria-label="Close"
        >
          <X weight="bold" className="w-5 h-5" />
        </button>

        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {member && (
              <span className="text-label font-bold tracking-widest uppercase bg-rfci-black/8 text-rfci-black/70 px-2.5 py-1">
                {member}
              </span>
            )}
            {environment && (
              <span className="text-label font-bold tracking-widest uppercase bg-rfci-black/5 text-rfci-black/60 px-2.5 py-1">
                {environment}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-display font-light text-rfci-black mb-4">
            {project.title}
          </h3>

          {project.description && (
            <p className="text-base text-rfci-black/60 leading-relaxed mb-6">{project.description}</p>
          )}

          <div className="border-t border-black/5 pt-6 grid sm:grid-cols-2 gap-4">
            {member && (
              <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                <Buildings weight="fill" className="w-4 h-4 text-rfci-blue shrink-0" />
                <span className="font-medium text-rfci-black/60">Manufacturer:</span>
                {member}
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                <MapPin weight="fill" className="w-4 h-4 text-rfci-blue shrink-0" />
                <span className="font-medium text-rfci-black/60">Location:</span>
                {project.location}
              </div>
            )}
            {environment && (
              <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                <span className="font-medium text-rfci-black/60">Environment:</span>
                {environment}
              </div>
            )}
            {project.flooringTypeName && (
              <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                <span className="font-medium text-rfci-black/60">Flooring Type:</span>
                {project.flooringTypeName}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function InspirationGrid({
  projects,
  environments,
}: {
  projects: any[]
  flooringTypes?: any[]
  environments: any[]
  members?: any[]
}) {
  const allProjects = projects.length > 0 ? projects : PROJECTS_STATIC

  const [filterEnvironment, setFilterEnvironment] = useState('')
  const [filterManufacturer, setFilterManufacturer] = useState('')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [isFilterSticky, setIsFilterSticky] = useState(false)
  const filterSentinelRef = useRef<HTMLDivElement>(null)

  // Detect when filter bar becomes sticky
  useEffect(() => {
    const el = filterSentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsFilterSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Close modal on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProjectId(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Derive environment options from the actual project data so filters always match real entries
  const environmentOptions = [
    ...new Set(allProjects.map((p: any) => getEnvironmentName(p)).filter(Boolean)),
  ].sort()

  const manufacturerOptions = [
    ...new Set(allProjects.map((p: any) => getMemberName(p)).filter(Boolean)),
  ].sort()

  const filteredProjects = allProjects.filter((project: any) => {
    if (filterEnvironment && getEnvironmentName(project) !== filterEnvironment) return false
    if (filterManufacturer && getMemberName(project) !== filterManufacturer) return false
    return true
  })

  const resetFilters = useCallback(() => {
    setFilterEnvironment('')
    setFilterManufacturer('')
  }, [])

  const activeProject = selectedProjectId
    ? allProjects.find((p: any) => getProjectId(p) === selectedProjectId)
    : null

  return (
    <PageLayout>
      {/* Hero */}
      <PhotoPageHero
        label="Inspiration"
        heading={<>Real-world <span className="font-semibold">installations</span></>}
        subheading="Explore resilient flooring projects from RFCI member companies across healthcare, education, hospitality, corporate, and more."
        photo={{
          src: 'https://rfci.com/wp-content/uploads/2022/04/RCP6544-GhostElm-UniversityLibrary_CM.jpg',
          alt: 'Karndean Ghost Elm resilient flooring in university library',
        }}
      />

      {/* Sentinel for sticky detection — sits just above the filter bar */}
      <div ref={filterSentinelRef} aria-hidden />

      {/* Filter bar — sticky */}
      <FilterBar
        environmentOptions={environmentOptions}
        manufacturerOptions={manufacturerOptions}
        filterEnvironment={filterEnvironment}
        filterManufacturer={filterManufacturer}
        setFilterEnvironment={setFilterEnvironment}
        setFilterManufacturer={setFilterManufacturer}
        filteredCount={filteredProjects.length}
        totalCount={allProjects.length}
        resetFilters={resetFilters}
        isSticky={isFilterSticky}
      />

      {/* Masonry grid section */}
      <section className="bg-rfci-cream py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          {filteredProjects.length > 0 ? (
            /* CSS columns masonry: 2 → 3 → 4 */
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project: any, i: number) => (
                  <MasonryCard
                    key={getProjectId(project)}
                    project={project}
                    index={i}
                    onClick={() => setSelectedProjectId(getProjectId(project))}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <p className="text-rfci-black/40 text-lg mb-4">
                No projects match your filters.
              </p>
              <button
                onClick={resetFilters}
                className="text-rfci-blue hover:text-rfci-blue/70 font-semibold text-sm transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Have a project to{' '}
              <span className="font-semibold text-rfci-blue">share?</span>
            </h2>
            <p className="text-base text-rfci-black/60 max-w-xl mx-auto mb-8">
              RFCI members can submit their resilient flooring installations to be featured in our
              inspiration gallery.
            </p>
            <a
              href="mailto:info@rfci.com"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-8 py-3.5 text-sm font-semibold hover:bg-rfci-black transition-colors duration-200 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {activeProject && (
          <DetailModal
            key={selectedProjectId}
            project={activeProject}
            onClose={() => setSelectedProjectId(null)}
          />
        )}
      </AnimatePresence>
    </PageLayout>
  )
}
