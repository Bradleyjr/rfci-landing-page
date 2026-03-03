import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://rfci.com'
  const payload = await getPayload({ config: configPromise })

  // Static routes
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
  const certs = await payload.find({ collection: 'certifications', limit: 50 })
  const certRoutes: MetadataRoute.Sitemap = certs.docs
    .filter((c) => c.slug)
    .map((c) => ({
      url: `${baseUrl}/certifications/${c.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  // Dynamic: flooring types
  const types = await payload.find({ collection: 'flooring-types', limit: 50 })
  const typeRoutes: MetadataRoute.Sitemap = types.docs
    .filter((t) => t.slug)
    .map((t) => ({
      url: `${baseUrl}/flooring/${t.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...certRoutes, ...typeRoutes]
}
