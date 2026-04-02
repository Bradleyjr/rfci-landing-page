'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { PageLayout } from '../../../_components/PageLayout'
import { PageHero } from '../../../_components/PageHero'
import { SectionReveal } from '../../../_components/SectionReveal'
import { glossaryHref } from '../../../_lib/glossary'
import { glossarySlug, type GlossaryEntry } from '../../../_data/glossary'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export function GlossaryPage({ entries }: { entries: GlossaryEntry[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeLetter, setActiveLetter] = useState('all')

  const filteredEntries = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase()

    return entries.filter((entry) => {
      const matchesLetter =
        activeLetter === 'all' || entry.term[0]?.toUpperCase() === activeLetter
      const haystack = [entry.term, entry.definition, ...entry.aliases, ...entry.relatedTerms]
        .join(' ')
        .toLowerCase()
      const matchesSearch = !normalized || haystack.includes(normalized)
      return matchesLetter && matchesSearch
    })
  }, [activeLetter, entries, searchTerm])

  const groupedEntries = useMemo(() => {
    return filteredEntries.reduce<Record<string, GlossaryEntry[]>>((groups, entry) => {
      const letter = entry.term[0]?.toUpperCase() ?? '#'
      if (!groups[letter]) groups[letter] = []
      groups[letter].push(entry)
      return groups
    }, {})
  }, [filteredEntries])

  return (
    <PageLayout>
      <PageHero
        label="Glossary"
        heading={<>Resilient flooring <span className="font-semibold text-rfci-blue">glossary</span></>}
        subheading="Definitions for RFCI certifications, flooring types, sustainability language, and technical terms used throughout the site."
      />

      <section className="bg-rfci-cream py-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="relative mb-6">
            <MagnifyingGlass
              className="absolute left-4 top-1/2 -translate-y-1/2 text-rfci-black/40"
              size={20}
              weight="bold"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search terms, acronyms, and definitions..."
              className="w-full rounded-lg border border-black/10 bg-white py-3 pl-12 pr-4 text-rfci-black placeholder:text-rfci-black/40 focus:border-rfci-blue focus:outline-none transition-colors duration-200"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveLetter('all')}
              className={`rounded-full px-4 py-2 text-label font-bold tracking-widest uppercase transition-colors ${
                activeLetter === 'all'
                  ? 'bg-rfci-blue text-white'
                  : 'bg-white text-rfci-black/60 hover:text-rfci-black'
              }`}
            >
              All
            </button>
            {LETTERS.map((letter) => {
              const enabled = entries.some((entry) => entry.term[0]?.toUpperCase() === letter)
              return (
                <button
                  key={letter}
                  onClick={() => enabled && setActiveLetter(letter)}
                  disabled={!enabled}
                  className={`rounded-full px-3 py-2 text-label font-bold tracking-widest uppercase transition-colors ${
                    activeLetter === letter
                      ? 'bg-rfci-blue text-white'
                      : 'bg-white text-rfci-black/60 hover:text-rfci-black disabled:text-rfci-black/20 disabled:hover:text-rfci-black/20'
                  }`}
                >
                  {letter}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-rfci-cream pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {Object.keys(groupedEntries).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(groupedEntries)
                .sort(([left], [right]) => left.localeCompare(right))
                .map(([letter, letterEntries]) => (
                  <div key={letter}>
                    <SectionReveal className="mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rfci-blue text-xl font-display font-semibold text-white">
                        {letter}
                      </div>
                    </SectionReveal>

                    <div className="space-y-4">
                      {letterEntries.map((entry, index) => (
                        <SectionReveal key={entry.term} delay={index * 0.04}>
                          <article
                            id={glossarySlug(entry.term)}
                            className="border border-black/5 bg-white p-6 md:p-8 scroll-mt-40"
                          >
                            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                              <div>
                                <div className="mb-2 text-label font-bold tracking-widest uppercase text-rfci-blue">
                                  {entry.category}
                                </div>
                                <h3 className="text-xl md:text-2xl font-display font-light text-rfci-black">
                                  {entry.term}
                                </h3>
                              </div>

                            </div>

                            <p className="text-base leading-relaxed text-rfci-black/65 font-light">
                              {entry.definition}
                            </p>

                            {entry.relatedTerms.length > 0 && (
                              <div className="mt-5 border-t border-black/5 pt-5">
                                <div className="mb-3 text-label font-bold tracking-widest uppercase text-rfci-black/40">
                                  Related terms
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {entry.relatedTerms.map((term) => (
                                    <Link
                                      key={term}
                                      href={glossaryHref(term)}
                                      className="rounded-full border border-rfci-blue/20 px-3 py-1 text-label font-bold uppercase tracking-widest text-rfci-blue hover:bg-rfci-blue hover:text-white transition-colors duration-200"
                                    >
                                      {term}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </article>
                        </SectionReveal>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <SectionReveal>
              <div className="border border-black/5 bg-white p-10 text-center">
                <h2 className="mb-3 text-4xl md:text-5xl font-display font-light text-rfci-black">No glossary matches</h2>
                <p className="text-base mx-auto max-w-xl text-rfci-black/60 font-light leading-relaxed">
                  Try a broader keyword or choose a different letter to explore RFCI terminology.
                </p>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
