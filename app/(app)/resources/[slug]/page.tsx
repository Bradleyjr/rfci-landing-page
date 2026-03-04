import { notFound } from 'next/navigation'
import { VideoDetail } from './VideoDetail'
import { ArticleDetail } from './ArticleDetail'
import { RESOURCES } from '../../../_data/resources'

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = params.slug as string
  const resource = RESOURCES.find(r => r.slug === slug)
  if (!resource) return { title: 'Resource | RFCI' }

  return {
    title: `${resource.title} | RFCI Resources`,
    description: resource.description,
  }
}

export async function generateStaticParams() {
  return RESOURCES.map(resource => ({
    slug: resource.slug,
  }))
}

export default function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = params.slug as string
  const resource = RESOURCES.find(r => r.slug === slug)
  if (!resource) notFound()

  // Get related resources: same category first, then any others, excluding current
  const otherResources = RESOURCES.filter((r) => r.slug !== slug)
  const sameCategory = otherResources.filter((r) => r.category && r.category === resource.category)
  const relatedResources = sameCategory.length >= 3
    ? sameCategory.slice(0, 3)
    : [...sameCategory, ...otherResources.filter((r) => !sameCategory.includes(r))].slice(0, 3)

  const DetailComponent = resource.type === 'video' ? VideoDetail : ArticleDetail

  return <DetailComponent resource={resource} relatedResources={relatedResources} />
}
