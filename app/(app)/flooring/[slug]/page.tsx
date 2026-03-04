import { notFound } from 'next/navigation'
import { FlooringDetail } from './FlooringDetail'
import { FLOORING_TYPES } from '../../../_data/flooring-types'
import { CERTIFICATIONS } from '../../../_data/certifications'

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ft = FLOORING_TYPES.find((t: any) => (t.slug || generateSlug(t.title)) === slug)
  if (!ft) return { title: 'Flooring Type | RFCI' }

  return {
    title: `${ft.title} | RFCI Resilient Flooring`,
    description: ft.description,
  }
}

export default async function FlooringTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ft = FLOORING_TYPES.find((t: any) => (t.slug || generateSlug(t.title)) === slug)
  if (!ft) notFound()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const otherTypes = FLOORING_TYPES.filter((t: any) => (t.slug || generateSlug(t.title)) !== slug)

  return (
    <FlooringDetail flooringType={ft} otherTypes={otherTypes} />
  )
}
