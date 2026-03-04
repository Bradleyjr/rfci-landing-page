import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { VideoDetail } from './VideoDetail'
import { ArticleDetail } from './ArticleDetail'
import { RefreshRouteOnSave } from '../../../_components/RefreshRouteOnSave'


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'resources',
    where: { slug: { equals: slug } },
    limit: 1,
    draft: true,
  })
  const resource = result.docs[0]
  if (!resource) return { title: 'Resource | RFCI' }

  return {
    title: `${resource.title} | RFCI Resources`,
    description: resource.description,
  }
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const [resourceResult, allResourcesResult] = await Promise.all([
    payload.find({
      collection: 'resources',
      where: { slug: { equals: slug } },
      limit: 1,
      draft: true,
    }),
    payload.find({
      collection: 'resources',
      sort: 'order',
      limit: 50,
      draft: true,
    }),
  ])

  const resource = resourceResult.docs[0]
  if (!resource) notFound()

  // Get related resources: same category first, then any others, excluding current
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const otherResources = allResourcesResult.docs.filter((r: any) => r.slug !== slug)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sameCategory = otherResources.filter((r: any) => r.category && r.category === resource.category)
  const relatedResources = sameCategory.length >= 3
    ? sameCategory.slice(0, 3)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : [...sameCategory, ...otherResources.filter((r: any) => !sameCategory.includes(r))].slice(0, 3)

  const DetailComponent = resource.type === 'video' ? VideoDetail : ArticleDetail

  return (
    <>
      <RefreshRouteOnSave />
      <DetailComponent resource={resource} relatedResources={relatedResources} />
    </>
  )
}
