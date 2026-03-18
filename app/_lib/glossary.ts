import { GLOSSARY_ENTRIES, glossarySlug, type GlossaryEntry } from '../_data/glossary'

export function glossaryHref(term: string): string {
  return `/resources/glossary#${glossarySlug(term)}`
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function glossaryMatcher(candidate: string): RegExp {
  const normalized = candidate
    .toLowerCase()
    .replace(/[®™]/g, '')
    .replace(/['’]/g, '')

  const escaped = escapeRegExp(normalized).replace(/\s+/g, '\\s+')
  return new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`, 'i')
}

export function findGlossaryEntries(text: string, maxResults = 4): GlossaryEntry[] {
  const normalized = text
    .toLowerCase()
    .replace(/[®™]/g, '')
    .replace(/['’]/g, '')

  return GLOSSARY_ENTRIES
    .filter((entry) =>
      [entry.term, ...entry.aliases].some((candidate) =>
        glossaryMatcher(candidate).test(normalized),
      ),
    )
    .sort((a, b) => a.order - b.order)
    .slice(0, maxResults)
}
