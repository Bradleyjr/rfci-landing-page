import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { CertificationDetail } from './CertificationDetail'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CERTS_FALLBACK: Record<string, any> = {
  floorscore: {
    slug: 'floorscore',
    title: 'FloorScore®',
    iconName: 'shieldCheck',
    description: 'FloorScore is the flooring industry\'s most recognized indoor air quality certification. It\'s independently administered by SCS Global Services and verifies that a product meets California\'s strict VOC emissions standards—one of the toughest benchmarks in the world.',
    image: { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: '10,000+', label: 'Certified Products' },
      { value: '97%', label: 'Market Coverage' },
    ],
    benefits: [
      { title: 'Indoor Air Quality', description: 'Ensures flooring products meet strict VOC emission limits, protecting occupant health.' },
      { title: 'Green Building Credits', description: 'Recognized by LEED, WELL, and other rating systems as evidence of low-emitting materials.' },
      { title: 'California Compliance', description: 'Meets California Section 01350 — one of the world\'s most stringent IAQ standards.' },
      { title: 'Independent Verification', description: 'Administered by SCS Global Services, a trusted third-party certification body.' },
    ],
    process: [
      { step: 'Product Submission', description: 'Manufacturer submits products for testing under the FloorScore program.' },
      { step: 'Emissions Testing', description: 'Products undergo rigorous VOC emissions testing in accredited laboratories.' },
      { step: 'Compliance Review', description: 'SCS Global Services reviews test results against California Section 01350 criteria.' },
      { step: 'Certification & Listing', description: 'Certified products are listed in the SCS database and can display the FloorScore mark.' },
    ],
  },
  assure: {
    slug: 'assure',
    title: 'ASSURE® Certified',
    iconName: 'leaf',
    description: 'ASSURE® is RFCI\'s third-party sustainability certification for resilient flooring products. It evaluates products across the full lifecycle—raw materials, manufacturing, product performance, and end-of-life—giving manufacturers a rigorous and credible way to demonstrate sustainability leadership.',
    image: { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'Full Lifecycle', label: 'Assessment Scope' },
      { value: '100%', label: 'Third-Party Verified' },
    ],
    benefits: [
      { title: 'Full Lifecycle Assessment', description: 'Evaluates environmental impact from raw materials through end-of-life recovery.' },
      { title: 'Sustainability Leadership', description: 'Demonstrates commitment to sustainability across the entire product lifecycle.' },
      { title: 'Green Building Support', description: 'Supports credits in LEED, WELL, and other green building rating systems.' },
      { title: 'Market Differentiation', description: 'Provides a credible, third-party verified sustainability claim for specified products.' },
    ],
    process: [
      { step: 'Application', description: 'Manufacturer applies to the ASSURE program and submits product documentation.' },
      { step: 'Lifecycle Assessment', description: 'Products evaluated across raw materials, manufacturing, performance, and end-of-life.' },
      { step: 'Third-Party Audit', description: 'Independent auditors verify compliance with ASSURE program requirements.' },
      { step: 'Certification', description: 'Certified products receive the ASSURE mark and are listed in the program directory.' },
    ],
  },
  affirm: {
    slug: 'affirm',
    title: 'AFFIRM™ Certified',
    iconName: 'globe',
    description: 'AFFIRM™ is RFCI\'s material health certification program for resilient flooring. It evaluates and discloses the chemical ingredients in flooring products, helping manufacturers demonstrate transparency and enabling specifiers to make informed decisions about material health.',
    image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'Ingredient', label: 'Level Transparency' },
      { value: '100%', label: 'Third-Party Verified' },
    ],
    benefits: [
      { title: 'Material Transparency', description: 'Full disclosure of chemical ingredients used in flooring products.' },
      { title: 'Informed Specification', description: 'Enables architects and designers to make science-based material health decisions.' },
      { title: 'WELL Building Support', description: 'Supports WELL Building Standard material optimization credits.' },
      { title: 'Chemical Safety', description: 'Evaluates ingredients against authoritative hazard lists for human and environmental health.' },
    ],
    process: [
      { step: 'Ingredient Disclosure', description: 'Manufacturer provides full chemical ingredient inventory for evaluation.' },
      { step: 'Hazard Screening', description: 'Ingredients assessed against GreenScreen and other authoritative hazard databases.' },
      { step: 'Independent Review', description: 'Third-party assessors verify ingredient data and hazard screening results.' },
      { step: 'Certification & Reporting', description: 'Certified products receive the AFFIRM mark with a published material health report.' },
    ],
  },
  epd: {
    slug: 'epd',
    title: 'Environmental Product Declarations',
    iconName: 'globe',
    description: 'An Environmental Product Declaration (EPD) is a standardized, third-party verified document that transparently reports the environmental impact of a product across its entire lifecycle. EPDs are based on ISO 14025 standards and provide architects and designers with the data they need to make environmentally informed specification decisions.',
    image: { url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'ISO 14025', label: 'Standard' },
    ],
    benefits: [
      { title: 'Environmental Transparency', description: 'Standardized reporting of environmental impact across the full product lifecycle.' },
      { title: 'LEED Credits', description: 'EPDs contribute to LEED v4 Material & Resources credits for environmental product information.' },
      { title: 'Comparative Analysis', description: 'Enables apples-to-apples comparison of environmental performance between products.' },
      { title: 'ISO Compliance', description: 'Based on ISO 14025, the international standard for Type III environmental declarations.' },
    ],
    process: [
      { step: 'Life Cycle Assessment', description: 'Conduct an LCA per ISO 14044 covering raw materials, manufacturing, use, and disposal.' },
      { step: 'PCR Alignment', description: 'Ensure the LCA follows the relevant Product Category Rules for resilient flooring.' },
      { step: 'Third-Party Verification', description: 'Independent verifier reviews the LCA and EPD document for accuracy and completeness.' },
      { step: 'Publication & Registration', description: 'Verified EPD is published and registered with a program operator.' },
    ],
  },
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'certifications',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const cert = result.docs[0] || CERTS_FALLBACK[slug]
  if (!cert) return { title: 'Certification | RFCI' }

  return {
    title: `${cert.title} | RFCI Certifications`,
    description: cert.description,
  }
}

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const [certResult, allCertsResult] = await Promise.all([
    payload.find({
      collection: 'certifications',
      where: { slug: { equals: slug } },
      limit: 1,
    }),
    payload.find({
      collection: 'certifications',
      sort: 'order',
      limit: 20,
    }),
  ])

  const cert = certResult.docs[0] || CERTS_FALLBACK[slug]
  if (!cert) notFound()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let otherCerts = allCertsResult.docs.filter((c: any) => c.slug !== slug)

  // If CMS returned no other certs, use fallback data
  if (otherCerts.length === 0) {
    otherCerts = Object.values(CERTS_FALLBACK).filter((c) => c.slug !== slug)
  }

  return <CertificationDetail certification={cert} otherCertifications={otherCerts} />
}
