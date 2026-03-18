import { notFound } from 'next/navigation'
import { CertificationDetail } from './CertificationDetail'
import { CERTIFICATIONS } from '../../../_data/certifications'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cert = CERTIFICATIONS.find(c => c.slug === slug)
  if (!cert) return { title: 'Certification | RFCI' }

  return {
    title: `${cert.title} | RFCI Certifications`,
    description: cert.description,
  }
}

export function generateStaticParams() {
  return CERTIFICATIONS.map(cert => ({
    slug: cert.slug,
  }))
}

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cert = CERTIFICATIONS.find(c => c.slug === slug)
  if (!cert) notFound()

  const otherCerts = CERTIFICATIONS.filter(c => c.slug !== slug)

  return <CertificationDetail certification={cert} otherCertifications={otherCerts} />
}
