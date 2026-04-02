import { notFound } from 'next/navigation'
import { FlooringDetail } from './FlooringDetail'
import { FLOORING_TYPES } from '../../../_data/flooring-types'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ft = FLOORING_TYPES.find(f => f.slug === slug)
  if (!ft) return { title: 'Flooring Type | RFCI' }

  return {
    title: `${ft.title} | RFCI Resilient Flooring`,
    description: ft.description,
  }
}

export function generateStaticParams() {
  return FLOORING_TYPES.map(ft => ({ slug: ft.slug }))
}

export default async function FlooringTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ft = FLOORING_TYPES.find(f => f.slug === slug)
  if (!ft) notFound()

  const otherTypes = FLOORING_TYPES.filter(t => t.slug !== slug)
  return <FlooringDetail flooringType={ft} otherTypes={otherTypes} />
}
