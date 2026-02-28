'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FunnelSimple, MapPin, Buildings, X, ArrowRight } from '@phosphor-icons/react'
import { PageLayout } from '../../_components/PageLayout'
import { PageHero } from '../../_components/PageHero'
import { SectionReveal } from '../../_components/SectionReveal'
import { mediaUrl } from '../../_lib/transforms'

const PROJECTS_STATIC = [
  {
    title: 'Memorial Healthcare Center',
    description:
      'A comprehensive resilient flooring installation spanning patient rooms, corridors, and common areas. The design team selected luxury vinyl tile for its durability, easy maintenance, and ability to create a warm, healing environment.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    },
    flooringType: { title: 'Luxury Vinyl Tile (LVT)' },
    environment: { name: 'Healthcare' },
    location: 'Atlanta, GA',
    architect: 'HKS Architects',
    featured: true,
  },
  {
    title: 'Westfield Elementary School',
    description:
      'Bio-based linoleum flooring selected for its natural composition, durability, and vibrant color options perfect for educational environments.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    },
    flooringType: { title: 'Linoleum' },
    environment: { name: 'Education' },
    location: 'Portland, OR',
    featured: false,
  },
  {
    title: 'The Grand Hotel & Conference Center',
    description:
      'Sheet vinyl flooring throughout the lobby, ballrooms, and conference rooms, chosen for its design versatility and superior moisture resistance.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    },
    flooringType: { title: 'Sheet Vinyl' },
    environment: { name: 'Hospitality' },
    location: 'Nashville, TN',
    featured: false,
  },
  {
    title: 'Summit Corporate Headquarters',
    description:
      'Rubber flooring installed in the fitness center and common areas, selected for its exceptional durability, acoustic properties, and comfort underfoot.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    },
    flooringType: { title: 'Rubber' },
    environment: { name: 'Corporate' },
    location: 'Chicago, IL',
    architect: 'Gensler',
    featured: false,
  },
  {
    title: 'Riverside Senior Living Community',
    description:
      'Cork flooring chosen for its natural warmth, acoustic comfort, and slip resistance — ideal for senior living applications.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    },
    flooringType: { title: 'Cork' },
    environment: { name: 'Senior Living' },
    location: 'Scottsdale, AZ',
    featured: false,
  },
  {
    title: 'Metro Transit Authority Stations',
    description:
      'VCT installed across high-traffic transit station concourses, valued for its extreme durability, low lifecycle cost, and ease of maintenance.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    },
    flooringType: { title: 'Vinyl Composition Tile (VCT)' },
    environment: { name: 'Transportation' },
    location: 'Denver, CO',
    featured: false,
  },
]

function getImageUrl(project: any): string {
  return mediaUrl(project.featuredImage, '') || project.featuredImage?.url || ''
}

export function InspirationGallery({
  projects,
  flooringTypes,
  environments,
}: {
  projects: any[]
  flooringTypes: any[]
  environments: any[]
  members: any[]
}) {
  const allProjects = projects.length > 0 ? projects : PROJECTS_STATIC

  const [filterFlooringType, setFilterFlooringType] = useState('')
  const [filterEnvironment, setFilterEnvironment] = useState('')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  // Build filter options from CMS data or fallback to static
  const flooringTypeOptions =
    flooringTypes.length > 0
      ? flooringTypes.map((ft: any) => ft.title)
      : [...new Set(PROJECTS_STATIC.map((p) => p.flooringType?.title).filter(Boolean))]

  const environmentOptions =
    environments.length > 0
      ? environments.map((e: any) => e.name)
      : [...new Set(PROJECTS_STATIC.map((p) => p.environment?.name).filter(Boolean))]

  const filteredProjects = allProjects.filter((project: any) => {
    const ftTitle = project.flooringType?.title || ''
    const envName = project.environment?.name || ''
    if (filterFlooringType && ftTitle !== filterFlooringType) return false
    if (filterEnvironment && envName !== filterEnvironment) return false
    return true
  })

  const resetFilters = () => {
    setFilterFlooringType('')
    setFilterEnvironment('')
  }

  const activeProject = selectedProject !== null ? filteredProjects[selectedProject] : null

  return (
    <PageLayout>
      <PageHero
        label="Inspiration"
        heading={
          <>
            Real-world <span className="font-semibold text-rfci-blue">installations.</span>
          </>
        }
        subheading="Explore resilient flooring projects from RFCI member companies across healthcare, education, hospitality, corporate, and more."
      />

      {/* Filter Bar */}
      <section className="bg-rfci-cream pb-6 pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionReveal>
            <div className="flex flex-wrap items-center gap-3">
              <FunnelSimple className="w-5 h-5 text-rfci-black/40" weight="bold" />

              <select
                value={filterFlooringType}
                onChange={(e) => setFilterFlooringType(e.target.value)}
                className="border border-black/10 px-4 py-2.5 text-sm bg-white focus:border-rfci-blue outline-none rounded-md"
              >
                <option value="">All Flooring Types</option>
                {flooringTypeOptions.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <select
                value={filterEnvironment}
                onChange={(e) => setFilterEnvironment(e.target.value)}
                className="border border-black/10 px-4 py-2.5 text-sm bg-white focus:border-rfci-blue outline-none rounded-md"
              >
                <option value="">All Environments</option>
                {environmentOptions.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              {(filterFlooringType || filterEnvironment) && (
                <button
                  onClick={resetFilters}
                  className="text-sm text-rfci-blue hover:text-rfci-blue/80 font-bold tracking-wider uppercase transition-colors"
                >
                  Reset
                </button>
              )}
            </div>

            <p className="text-sm text-rfci-black/50 mt-4">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-rfci-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project: any, i: number) => (
              <SectionReveal key={project.id || project.title} delay={Math.min(i * 0.06, 0.3)}>
                <div
                  className="bg-white border border-black/5 hover:border-rfci-blue/20 hover:shadow-lg transition-all rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedProject(i)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={getImageUrl(project)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="text-white font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        View Project <ArrowRight weight="bold" className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.flooringType?.title && (
                        <span className="text-[10px] font-bold tracking-widest uppercase bg-rfci-blue/10 text-rfci-blue px-2.5 py-1 rounded-full">
                          {project.flooringType.title}
                        </span>
                      )}
                      {project.environment?.name && (
                        <span className="text-[10px] font-bold tracking-widest uppercase bg-rfci-black/5 text-rfci-black/60 px-2.5 py-1 rounded-full">
                          {project.environment.name}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-display font-medium text-rfci-black mb-2 leading-snug">
                      {project.title}
                    </h3>

                    {project.location && (
                      <p className="text-sm text-rfci-black/50 flex items-center gap-1.5 mb-1">
                        <MapPin weight="fill" className="w-3.5 h-3.5" />
                        {project.location}
                      </p>
                    )}

                    {project.architect && (
                      <p className="text-sm text-rfci-black/50 flex items-center gap-1.5">
                        <Buildings weight="fill" className="w-3.5 h-3.5" />
                        {project.architect}
                      </p>
                    )}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-rfci-black/40 text-lg">No projects match the selected filters.</p>
              <button
                onClick={resetFilters}
                className="mt-4 text-rfci-blue hover:text-rfci-blue/80 font-bold text-sm tracking-wider uppercase transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Have a project to <span className="font-semibold text-rfci-blue">share?</span>
            </h2>
            <p className="text-rfci-black/60 max-w-xl mx-auto mb-8">
              RFCI members can submit their resilient flooring installations to be featured in our
              inspiration gallery.
            </p>
            <a
              href="/about#contact"
              className="inline-flex items-center gap-2 bg-rfci-blue text-white px-6 py-3 rounded-full font-bold text-label tracking-widest uppercase hover:bg-rfci-blue/90 transition-colors"
            >
              Get in Touch
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white max-w-4xl w-full mx-auto max-h-[90vh] overflow-y-auto rounded-xl my-4 md:my-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-md"
              >
                <X weight="bold" className="w-5 h-5" />
              </button>

              {/* Featured Image */}
              <div className="aspect-[16/9] overflow-hidden rounded-t-xl">
                <img
                  src={getImageUrl(activeProject)}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.flooringType?.title && (
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-rfci-blue/10 text-rfci-blue px-2.5 py-1 rounded-full">
                      {activeProject.flooringType.title}
                    </span>
                  )}
                  {activeProject.environment?.name && (
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-rfci-black/5 text-rfci-black/60 px-2.5 py-1 rounded-full">
                      {activeProject.environment.name}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-medium text-rfci-black mb-4">
                  {activeProject.title}
                </h2>

                {activeProject.description && (
                  <p className="text-rfci-black/60 leading-relaxed mb-6">
                    {activeProject.description}
                  </p>
                )}

                {/* Metadata */}
                <div className="border-t border-black/5 pt-6 grid sm:grid-cols-2 gap-4">
                  {activeProject.location && (
                    <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                      <MapPin weight="fill" className="w-4 h-4 text-rfci-blue" />
                      <span className="font-medium text-rfci-black/80">Location:</span>
                      {activeProject.location}
                    </div>
                  )}
                  {activeProject.architect && (
                    <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                      <Buildings weight="fill" className="w-4 h-4 text-rfci-blue" />
                      <span className="font-medium text-rfci-black/80">Architect:</span>
                      {activeProject.architect}
                    </div>
                  )}
                  {activeProject.flooringType?.title && (
                    <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                      <span className="font-medium text-rfci-black/80">Flooring:</span>
                      {activeProject.flooringType.title}
                    </div>
                  )}
                  {activeProject.environment?.name && (
                    <div className="flex items-center gap-2 text-sm text-rfci-black/60">
                      <span className="font-medium text-rfci-black/80">Environment:</span>
                      {activeProject.environment.name}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  )
}
