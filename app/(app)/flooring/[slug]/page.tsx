import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { FlooringDetail } from './FlooringDetail'

export const dynamic = 'force-dynamic'

const CERT_FLOORSCORE = { slug: 'floorscore', title: 'FloorScore®', iconName: 'shieldCheck', description: 'Indoor air quality certification verifying low VOC emissions.' }
const CERT_ASSURE = { slug: 'assure', title: 'ASSURE® Certified', iconName: 'leaf', description: 'Third-party sustainability certification across the full product lifecycle.' }
const CERT_AFFIRM = { slug: 'affirm', title: 'AFFIRM™ Certified', iconName: 'globe', description: 'Material health certification disclosing chemical ingredients.' }
const CERT_EPD = { slug: 'epd', title: 'Environmental Product Declarations', iconName: 'globe', description: 'Standardized environmental impact reporting based on ISO 14025.' }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FLOORING_FALLBACK: Record<string, any> = {
  'flexible-lvt': {
    title: 'Flexible LVT', subtitle: 'Luxury Vinyl Tile · Planks', slug: 'flexible-lvt',
    accentColor: '#0164DB',
    description: 'The leading resilient flooring product in North America. Available in tile and plank formats with high-definition wood and stone visuals. Waterproof, dimensionally stable, and specified across residential and commercial projects.',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'High Traffic', variant: 'amber' }, { label: 'Easy Install', variant: 'gray' }],
    features: [
      { title: 'High-Definition Printing', description: 'Advanced digital printing creates realistic wood and stone visuals that are virtually indistinguishable from natural materials.' },
      { title: 'Waterproof Construction', description: 'Engineered to handle moisture-prone environments including kitchens, bathrooms, and commercial spaces.' },
      { title: 'Click-Lock Installation', description: 'Floating floor installation with click-lock technology enables fast installation without adhesive.' },
      { title: 'Wear Layer Protection', description: 'Durable wear layers resist scratches, stains, and daily wear in high-traffic environments.' },
    ],
    applications: [
      { environment: 'Healthcare', description: 'Ideal for patient rooms, corridors, and common areas requiring moisture resistance and easy maintenance.' },
      { environment: 'Education', description: 'Durable and cost-effective for classrooms, hallways, and administrative spaces.' },
      { environment: 'Hospitality', description: 'Design versatility and water resistance make it perfect for hotel rooms, lobbies, and restaurants.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_AFFIRM],
  },
  'rigid-core': {
    title: 'Rigid Core', subtitle: 'SPC · WPC · Multilayer', slug: 'rigid-core',
    accentColor: '#455A64',
    description: 'A multilayer construction with a rigid mineral or polymer core. Dimensionally stable across temperature fluctuations and resistant to indentation under heavy static loads.',
    tags: [{ label: 'Waterproof', variant: 'green' }, { label: 'Dimensionally Stable', variant: 'amber' }, { label: 'ASSURE Eligible', variant: 'gray' }],
    features: [
      { title: 'Rigid Core Technology', description: 'Stone polymer composite (SPC) or wood polymer composite (WPC) core provides dimensional stability.' },
      { title: 'Temperature Resistance', description: 'Maintains stability across wide temperature ranges, ideal for sunrooms and unconditioned spaces.' },
      { title: 'Indentation Resistance', description: 'Rigid core resists indentation from heavy furniture and rolling loads.' },
      { title: 'Integrated Underlayment', description: 'Many products include attached underlayment for acoustic comfort and faster installation.' },
    ],
    applications: [
      { environment: 'Commercial Office', description: 'Handles rolling chair loads and heavy foot traffic in open office environments.' },
      { environment: 'Retail', description: 'Indentation resistance and design options make it suitable for retail showrooms.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_AFFIRM],
  },
  'heterogeneous-sheet-vinyl': {
    title: 'Heterogeneous Sheet Vinyl', subtitle: 'Multi-Layer · Printed Design', slug: 'heterogeneous-sheet-vinyl',
    accentColor: '#00897B',
    description: 'Sheet vinyl flooring with multiple layers including a printed design layer. Comes in wide rolls for minimal seaming. Ideal for healthcare and education where hygiene and moisture control are critical.',
    tags: [{ label: 'Seamless', variant: 'green' }, { label: 'Healthcare', variant: 'amber' }],
    features: [
      { title: 'Minimal Seams', description: 'Wide roll format reduces seams, creating a more hygienic surface for healthcare environments.' },
      { title: 'Design Flexibility', description: 'Printed design layer offers unlimited visual options including wood, stone, and abstract patterns.' },
      { title: 'Flash Cove Installation', description: 'Can be heat-welded and coved up walls for seamless, waterproof transitions.' },
    ],
    applications: [
      { environment: 'Healthcare', description: 'Flash cove capability and minimal seams support infection control requirements.' },
      { environment: 'Education', description: 'Cost-effective and easy to maintain across large square-footage installations.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_EPD],
  },
  'homogeneous-sheet-vinyl': {
    title: 'Homogeneous Sheet Vinyl', subtitle: 'Through-Body · Single Layer', slug: 'homogeneous-sheet-vinyl',
    accentColor: '#5E35B1',
    description: 'Sheet vinyl with color and pattern running through the entire thickness of the material. Can be refinished multiple times and offers excellent lifecycle value in high-traffic commercial environments.',
    tags: [{ label: 'Through-Body Color', variant: 'green' }, { label: 'Refinishable', variant: 'amber' }],
    features: [
      { title: 'Through-Body Construction', description: 'Color and pattern extend through the full thickness, so scratches and wear don\'t reveal a different layer.' },
      { title: 'Refinishable Surface', description: 'Can be sanded and refinished multiple times to restore original appearance.' },
      { title: 'Extreme Durability', description: 'Designed for the most demanding commercial environments with decades of service life.' },
    ],
    applications: [
      { environment: 'Healthcare', description: 'Through-body construction resists gurney traffic and can be refinished in place.' },
      { environment: 'Transportation', description: 'Extreme durability for airport concourses, train stations, and transit hubs.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_EPD],
  },
  'vct': {
    title: 'Vinyl Composition Tile', subtitle: 'VCT · Commercial Standard', slug: 'vct',
    accentColor: '#E65100',
    description: 'The heritage commercial flooring product. VCT offers the lowest installed cost of any resilient product and can be stripped, waxed, and refinished indefinitely. Widely specified in K-12, grocery, and retail.',
    tags: [{ label: 'Low Cost', variant: 'green' }, { label: 'Refinishable', variant: 'amber' }, { label: 'Commercial', variant: 'gray' }],
    features: [
      { title: 'Lowest Installed Cost', description: 'The most economical resilient flooring option with proven performance over decades.' },
      { title: 'Infinite Refinishability', description: 'Can be stripped and rewaxed indefinitely, making it the longest-lifecycle flooring available.' },
      { title: 'Familiar Installation', description: 'Well-understood installation methods with a deep installer knowledge base.' },
    ],
    applications: [
      { environment: 'K-12 Education', description: 'Budget-friendly and easy to maintain across large school campuses.' },
      { environment: 'Retail & Grocery', description: 'Handles heavy cart traffic and can be maintained with standard janitorial equipment.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'linoleum': {
    title: 'Linoleum', subtitle: 'Bio-Based · Natural', slug: 'linoleum',
    accentColor: '#2E7D32',
    description: 'Made from linseed oil, wood flour, cork dust, and other natural materials on a jute backing. Linoleum is inherently sustainable, bacteriostatic, and available in vibrant colors.',
    tags: [{ label: 'Bio-Based', variant: 'green' }, { label: 'Bacteriostatic', variant: 'amber' }, { label: 'Colorful', variant: 'gray' }],
    features: [
      { title: 'Natural Composition', description: 'Made from renewable materials including linseed oil, wood flour, and cork dust.' },
      { title: 'Bacteriostatic Properties', description: 'Linseed oil naturally inhibits bacterial growth on the floor surface.' },
      { title: 'Vibrant Color Palette', description: 'Available in an extensive range of colors that run through the full thickness.' },
    ],
    applications: [
      { environment: 'Education', description: 'Natural composition and vibrant colors make it popular in schools and universities.' },
      { environment: 'Healthcare', description: 'Bacteriostatic properties support hygienic environments in clinical settings.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_ASSURE, CERT_EPD],
  },
  'rubber': {
    title: 'Rubber Flooring', subtitle: 'Synthetic & Natural Rubber', slug: 'rubber',
    accentColor: '#37474F',
    description: 'Premium resilient flooring made from synthetic or natural rubber. Exceptional durability, acoustic performance, and comfort underfoot. The standard for high-end commercial and institutional environments.',
    tags: [{ label: 'Acoustic', variant: 'green' }, { label: 'Premium', variant: 'amber' }, { label: 'Slip Resistant', variant: 'gray' }],
    features: [
      { title: 'Superior Acoustics', description: 'Excellent sound absorption reduces impact noise in multi-story buildings.' },
      { title: 'Extreme Durability', description: 'Resists heavy rolling loads, abrasion, and cigarette burns without showing damage.' },
      { title: 'Ergonomic Comfort', description: 'Natural resilience reduces fatigue for standing workers and provides cushion on impact.' },
    ],
    applications: [
      { environment: 'Corporate', description: 'Premium aesthetics and acoustic performance for executive offices and conference rooms.' },
      { environment: 'Fitness', description: 'Impact absorption and slip resistance make it ideal for gyms and athletic facilities.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'cork': {
    title: 'Cork Flooring', subtitle: 'Natural · Renewable', slug: 'cork',
    accentColor: '#8D6E63',
    description: 'Harvested from the bark of cork oak trees without harming the tree. Cork flooring offers natural thermal insulation, acoustic comfort, and a uniquely warm aesthetic. Hypoallergenic and antimicrobial.',
    tags: [{ label: 'Renewable', variant: 'green' }, { label: 'Thermal Insulation', variant: 'amber' }, { label: 'Hypoallergenic', variant: 'gray' }],
    features: [
      { title: 'Sustainable Harvest', description: 'Cork bark regenerates every 9 years, making it one of the most renewable flooring materials.' },
      { title: 'Natural Insulation', description: 'Excellent thermal and acoustic insulation properties reduce energy costs and noise transmission.' },
      { title: 'Hypoallergenic', description: 'Naturally resistant to mold, mildew, and allergens for healthier indoor environments.' },
    ],
    applications: [
      { environment: 'Senior Living', description: 'Warm underfoot, slip-resistant, and cushioning for fall protection.' },
      { environment: 'Residential', description: 'Natural warmth and quiet comfort for bedrooms, living rooms, and home offices.' },
    ],
    relatedCertifications: [CERT_FLOORSCORE, CERT_EPD],
  },
  'wall-base': {
    title: 'Resilient Wall Base', subtitle: 'Cove Base · Accessories', slug: 'wall-base',
    accentColor: '#546E7A',
    description: 'Vinyl and rubber wall base products that provide a clean, durable transition between floor and wall. Available in cove, straight, or carpet profiles in heights from 2.5" to 6".',
    tags: [{ label: 'Accessory', variant: 'gray' }, { label: 'Durable', variant: 'green' }],
    features: [
      { title: 'Clean Transitions', description: 'Provides a finished, professional transition between flooring and wall surfaces.' },
      { title: 'Multiple Profiles', description: 'Available in cove base, straight base, and carpet base profiles for any installation.' },
      { title: 'Color Matching', description: 'Extensive color selection to coordinate with virtually any flooring product.' },
    ],
    applications: [
      { environment: 'Commercial', description: 'Standard specification for commercial projects requiring durable wall-to-floor transitions.' },
    ],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'flooring-types',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const ft = result.docs[0]
  if (!ft) {
    const fallback = FLOORING_FALLBACK[slug]
    if (fallback) {
      return {
        title: `${fallback.title} | RFCI Resilient Flooring`,
        description: fallback.description,
      }
    }
    return { title: 'Flooring Type | RFCI' }
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    title: `${(ft as any).title} | RFCI Resilient Flooring`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    description: (ft as any).description,
  }
}

export default async function FlooringTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const [ftResult, allResult] = await Promise.all([
    payload.find({
      collection: 'flooring-types',
      where: { slug: { equals: slug } },
      limit: 1,
    }),
    payload.find({
      collection: 'flooring-types',
      sort: 'order',
      limit: 50,
    }),
  ])

  const ft = ftResult.docs[0]
  if (!ft) {
    const fallback = FLOORING_FALLBACK[slug]
    if (!fallback) notFound()

    const otherTypes = allResult.docs.length > 0
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? allResult.docs.filter((t: any) => t.slug !== slug)
      : Object.values(FLOORING_FALLBACK).filter((t) => t.slug !== slug)

    return <FlooringDetail flooringType={fallback} otherTypes={otherTypes} />
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const otherTypes = allResult.docs.filter((t: any) => t.slug !== slug)

  return <FlooringDetail flooringType={ft} otherTypes={otherTypes} />
}
