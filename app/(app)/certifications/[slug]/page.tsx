import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { CertificationDetail } from './CertificationDetail'
import { RefreshRouteOnSave } from '../../../_components/RefreshRouteOnSave'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CERTS_FALLBACK: Record<string, any> = {
  floorscore: {
    slug: 'floorscore',
    title: 'FloorScore®',
    iconName: 'shieldCheck',
    description: 'FloorScore® is the flooring industry\'s most recognized indoor air quality (IAQ) certification. Independently administered by SCS Global Services, it verifies that a product meets California Section 01350 VOC emissions standards — one of the most stringent IAQ benchmarks in the world.',
    image: { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: '10,000+', label: 'Certified Products' },
      { value: '90%', label: 'Of time spent indoors' },
      { value: 'CA 01350', label: 'Emissions Standard' },
    ],
    benefits: [
      { title: 'Indoor Air Quality Protection', description: 'Certifies that VOC emissions meet California Section 01350 — the most stringent IAQ standard for building materials in North America.' },
      { title: 'Independent SCS Verification', description: 'SCS Global Services reviews all emissions test reports, determines compliance, and conducts periodic manufacturing plant inspections.' },
      { title: 'LEED & Green Building Credits', description: 'Recognized by LEED (NC, CI, CS, HC, Schools, Homes, EB), WELL, BREEAM, CHPS, Green Globes, and more.' },
      { title: 'Healthier Occupant Environments', description: 'Most people spend over 90% of their time indoors. FloorScore-certified products contribute measurably to cleaner air and healthier occupants.' },
      { title: 'Annual Re-Testing Required', description: 'Certification requires yearly product re-testing, on-site manufacturing audits, and documented quality control — not a one-time stamp.' },
      { title: 'Hard Surface Advantage', description: 'Hard surface flooring does not retain moisture, odors, dust mites, or mold the way carpet can — making it the recommended choice for schools, offices, and healthcare.' },
    ],
    process: [
      { step: 'Product Submission', description: 'Manufacturer submits products for testing under the FloorScore program through SCS Global Services.' },
      { step: 'Independent Emissions Testing', description: 'Products are tested in accredited laboratories for VOC emissions per California Standard Method v1.2.' },
      { step: 'SCS Compliance Review', description: 'SCS reviews all test reports and determines whether results meet the concentration limits for listed VOCs under CA Section 01350.' },
      { step: 'Manufacturing Audit', description: 'SCS conducts on-site manufacturing plant inspections to review formulas, processing, and quality control procedures.' },
      { step: 'Certification & Annual Renewal', description: 'Certified products are listed in the SCS database, can display the FloorScore mark, and must pass annual re-testing to maintain certification.' },
    ],
    ctaText: 'Find FloorScore Certified Products',
    ctaUrl: 'https://www.scsglobalservices.com/services/floorscore',
  },
  assure: {
    slug: 'assure',
    title: 'ASSURE® Certified',
    iconName: 'leaf',
    description: 'ASSURE® Certified was developed by RFCI to establish uniform quality standards for all rigid core luxury flooring (WPC and SPC) sold in North America, regardless of where it is manufactured. Products are independently tested and certified by SCS Global Services.',
    image: { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'WPC + SPC', label: 'Rigid Core Products' },
      { value: '100PPM', label: 'Max Heavy Metals' },
      { value: 'SCS Global', label: 'Certification Body' },
    ],
    benefits: [
      { title: 'Indoor Air Quality Assurance', description: 'Products must comply with CDPH Standard Method v1.2 at half the corresponding CREL — a stricter IAQ threshold than many competing certifications.' },
      { title: 'Performance Testing', description: 'Must pass ASTM F3261 testing covering composition, size tolerance, product thickness, and wear layer thickness.' },
      { title: 'Heavy Metals Free', description: 'Tested for lead, hexavalent chromium, cadmium, and mercury via EPA SW 846 Method 3052. Total combined limit: 100 PPM.' },
      { title: 'Ortho-Phthalates Free', description: 'Products cannot exceed 1,000 PPM for any individual or combined ortho-phthalates — tested per ASTM F3414.' },
      { title: 'Supply Chain Transparency', description: 'Manufacturers must maintain quality control procedures covering material suppliers, product traceability, chain of custody, and internal QC testing.' },
      { title: 'Fastest Growing Segment', description: 'Rigid core luxury flooring is North America\'s fastest-growing resilient flooring segment. ASSURE ensures consumer confidence as new manufacturers enter the market.' },
    ],
    process: [
      { step: 'Application to SCS Global', description: 'Contact SCS Global Services to begin the ASSURE certification process and submit product documentation.' },
      { step: 'IAQ Emissions Testing', description: 'Products undergo CDPH Standard Method v1.2 testing. Must meet concentration limits at half the corresponding CREL for listed VOCs.' },
      { step: 'Performance & Chemistry Testing', description: 'Products tested per ASTM F3261 (performance), EPA SW 846 (heavy metals), and ASTM F3414 (ortho-phthalates).' },
      { step: 'Manufacturing Facility Audit', description: 'On-site audit of the manufacturing facility confirms compliant quality control procedures. (Waived if FloorScore certification audit was previously completed.)' },
      { step: 'Certification & Badge Use', description: 'Certified products earn the ASSURE Certified badge and are listed in the program directory.' },
    ],
    ctaText: 'Learn About ASSURE Certification',
    ctaUrl: 'https://rfci.com/resources/assurecertified/',
  },
  affirm: {
    slug: 'affirm',
    title: 'AFFIRM™ Certified',
    iconName: 'globe',
    description: 'AFFIRM™ Certified is a sustainability certification for resilient flooring based on an ANSI-accredited standard. It evaluates products across environmental, health & wellness, and social impact categories — with two certification levels and independent third-party verification.',
    image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'ANSI', label: 'Accredited Standard' },
      { value: '3', label: 'Impact Categories' },
      { value: 'Level 1 + 2', label: 'Certification Tiers' },
    ],
    benefits: [
      { title: 'ANSI-Accredited Standard', description: 'The AFFIRM standard is developed through an ANSI-accredited consensus process involving public health, industry, and user stakeholders.' },
      { title: 'Three Impact Areas', description: 'Covers Environmental requirements, Health and Wellness, and Social Responsibility — a true multi-attribute sustainability standard.' },
      { title: 'Two Certification Levels', description: 'Level 1 is required baseline compliance. Level 2 is optional and rewards products that meet additional criteria across the three impact areas.' },
      { title: 'Public Health Council Review', description: 'All standards reviewed by the AFFIRM Council of Public Health Consultants — composed of professionals from federal and state agencies, academic institutions, and recognized public health leaders.' },
      { title: 'Specifier Confidence', description: 'The AFFIRM label enables architects, designers, facility managers, and procurement agents to easily verify third-party sustainability compliance.' },
      { title: 'Government Procurement Ready', description: 'Many government agencies mandate Environmentally Preferable Product (EPP) programs. AFFIRM certified products are recognized in the ecomedes database to meet these requirements.' },
    ],
    process: [
      { step: 'Application', description: 'Manufacturer applies to the AFFIRM program and submits product documentation for evaluation.' },
      { step: 'Level 1 Compliance Review', description: 'Products are evaluated against mandatory Level 1 criteria covering environmental, health and wellness, and social requirements.' },
      { step: 'Level 2 Assessment (Optional)', description: 'Manufacturers may pursue additional Level 2 criteria within each impact area to achieve higher certification recognition.' },
      { step: 'Third-Party Verification', description: 'Independent assessors verify compliance with all stated criteria.' },
      { step: 'Certification & Transparency Scorecard', description: 'Certified products receive the AFFIRM label and a published Transparency Scorecard reflecting their certification level.' },
    ],
    ctaText: 'Find AFFIRM Certified Products',
    ctaUrl: 'https://rfci.ecomedes.com/',
  },
  epd: {
    slug: 'epd',
    title: 'Environmental Product Declarations',
    iconName: 'globe',
    description: 'An Environmental Product Declaration (EPD) is a transparent, third-party verified document that communicates the environmental impacts of a product across its full lifecycle — based on ISO 14025 and ISO 14040 standards. RFCI publishes Industry Wide EPDs for nine resilient flooring product types.',
    image: { url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop' },
    stats: [
      { value: 'ISO 14025', label: 'EPD Standard' },
      { value: '9', label: 'Product Types Covered' },
      { value: '2024', label: 'Current EPD Version' },
    ],
    benefits: [
      { title: 'Full Lifecycle Transparency', description: 'EPDs report environmental impact from raw material extraction through manufacturing, use phase, and end-of-life — per ISO 14040 Life Cycle Assessment methodology.' },
      { title: 'LEED & Green Globes Credits', description: 'EPDs contribute to LEED v4, v4.1, and v5 Material and Resources credits and Green Globes credits for environmental product information.' },
      { title: 'Industry Wide EPDs Available', description: 'RFCI publishes industry-average EPDs for 9 resilient flooring types: Heterogeneous Sheet, Homogeneous Sheet, LVT Gluedown, LVT Looselay, Rubber, Rigid Core SPC, Rigid Core WPC, Solid Vinyl Tile, and VCT.' },
      { title: 'ISO 14025 Compliant', description: 'All RFCI EPDs are Type III declarations compliant with ISO 14025, the international standard for Environmental Product Declarations.' },
      { title: 'Comparative Analysis Tool', description: 'EPDs enable apples-to-apples environmental comparison between flooring products, giving specifiers objective data for decision-making.' },
      { title: '2024 EPDs Now Available', description: 'Updated 2024 Industry Wide EPDs reflect current manufacturing data and supersede the 2019 archived versions, which remain available for reference.' },
    ],
    process: [
      { step: 'Life Cycle Assessment', description: 'Conduct an LCA per ISO 14040 and 14044 covering raw material extraction, manufacturing, distribution, use, and end-of-life.' },
      { step: 'Product Category Rules Alignment', description: 'Ensure the LCA follows ULE 10010-7 Product Category Rules (PCR) for building-related flooring products.' },
      { step: 'Third-Party Verification', description: 'An independent verifier reviews the LCA and EPD document for accuracy and completeness before publication.' },
      { step: 'EPD Publication & Registration', description: 'The verified EPD is published and registered with a program operator, making it publicly available for specifier reference.' },
    ],
    downloads: [
      { title: 'Heterogeneous Sheet', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10144_RFCI_Heterogeneous-Sheet_050924_compressed.pdf' },
      { title: 'Homogeneous Sheet', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10145_RFCI_Homogeneous-Sheet_050924_compressed.pdf' },
      { title: 'Luxury Vinyl Tile (LVT) \u2014 Gluedown', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10146_RFCI_LVT-Gluedown_050924_compressed.pdf' },
      { title: 'Luxury Vinyl Tile (LVT) \u2014 Looselay', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10147_RFCI_LVT-Looselay_050924_compressed.pdf' },
      { title: 'Rigid Core \u2014 SPC', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10148_RFCI_Rigid-Core-SPC_050924_compressed.pdf' },
      { title: 'Rigid Core \u2014 WPC', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10149_RFCI_Rigid-Core-WPC_050924_compressed.pdf' },
      { title: 'Rubber Sheet and Tile', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10150_RFCI_Rubber_050924_compressed.pdf' },
      { title: 'Solid Vinyl Tile', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10151_RFCI_Solid-Vinyl-Tile_050924_compressed.pdf' },
      { title: 'Vinyl Composition Tile (VCT)', year: '2024', category: '2024 Current EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10152_RFCI_VCT_050924_compressed.pdf' },
      { title: 'Heterogeneous Sheet', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2021/09/SCS-EPD-05374_RFCI-Heterogeneous_101519.pdf' },
      { title: 'Homogeneous Sheet', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2021/09/SCS-EPD-05375_RFCI-Homogeneous_101519.pdf' },
      { title: 'Luxury Vinyl Tile (LVT) \u2014 Gluedown', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2021/09/SCS-EPD-05376_RFCI-LVT-Gluedown_101519.pdf' },
      { title: 'Luxury Vinyl Tile (LVT) \u2014 Looselay', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2021/09/SCS-EPD-05377_RFCI-LVT-Looselay_101519.pdf' },
      { title: 'Rigid Core \u2014 SPC', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2022/03/SCS-EPD-07527_RFCI-Rigid-Core-SPC_032322.pdf' },
      { title: 'Rigid Core \u2014 WPC', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2022/03/SCS-EPD-07528_RFCI-Rigid-Core-WPC_032322.pdf' },
      { title: 'Rubber Sheet and Tile', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2021/09/SCS-EPD-05378_RFCI-Rubber_101519.pdf' },
      { title: 'Solid Vinyl Tile', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2021/09/SCS-EPD-05379_RFCI-Solid-Vinyl-Tile_101519.pdf' },
      { title: 'Vinyl Composition Tile (VCT)', year: '2019', category: '2019 Archived EPDs', url: 'https://rfci.com/wp-content/uploads/2021/09/SCS-EPD-05380_RFCI-VCT_101519.pdf' },
    ],
    ctaText: 'View RFCI Industry Wide EPDs',
    ctaUrl: 'https://rfci.com/environmental-product-declaration/',
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
    draft: true,
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
      draft: true,
    }),
    payload.find({
      collection: 'certifications',
      sort: 'order',
      limit: 20,
      draft: true,
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

  return (
    <>
      <RefreshRouteOnSave />
      <CertificationDetail certification={cert} otherCertifications={otherCerts} />
    </>
  )
}
