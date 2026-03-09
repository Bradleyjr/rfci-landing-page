import type { MetadataRoute } from 'next'
import { CERTIFICATIONS } from './_data/certifications'
import { FLOORING_TYPES } from './_data/flooring-types'

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://rfci.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/why-resilient`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/flooring`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/certifications`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/members`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/inspiration`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/videos`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Dynamic: certifications
  const certRoutes: MetadataRoute.Sitemap = CERTIFICATIONS.filter((c) => c.slug).map((c) => ({
    url: `${baseUrl}/certifications/${c.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic: flooring types
  const typeRoutes: MetadataRoute.Sitemap = FLOORING_TYPES.filter((t) => t.title)
    .map((t) => {
      const slug = t.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      return {
        url: `${baseUrl}/flooring/${slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }
    })

  return [...staticRoutes, ...certRoutes, ...typeRoutes]
}
