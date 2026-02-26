import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd(), true)

async function run() {
  const [{ default: payload }, { default: configPromise }] = await Promise.all([
    import('payload'),
    import('../payload.config'),
  ])

  await payload.init({ config: configPromise, disableOnInit: true })

  // ── Helper: skip if collection already has documents ─────────────────────
  async function seedCollection(slug: string, docs: object[], label: string) {
    const existing = await payload.find({ collection: slug as any, limit: 1 })
    if (existing.totalDocs > 0) {
      console.log(`⏭  ${label}: already has data, skipping`)
      return
    }
    for (const doc of docs) {
      await payload.create({ collection: slug as any, data: doc as any })
    }
    console.log(`✅ ${label}: seeded ${docs.length} documents`)
  }

  // ── Flooring Types ────────────────────────────────────────────────────────
  await seedCollection('flooring-types', [
    {
      title: 'Luxury Vinyl',
      subtitle: 'LVT · LVP · SPC · WPC',
      description: 'The fastest-growing category in flooring. Waterproof, durable, and available in realistic wood and stone visuals—LVT leads commercial and residential markets alike.',
      accentColor: '#9CA3AF',
      tags: [
        { label: 'Waterproof', variant: 'green' },
        { label: 'High Traffic', variant: 'tan' },
        { label: 'Easy Install', variant: 'gray' },
      ],
      order: 1,
    },
    {
      title: 'Sheet Vinyl',
      subtitle: 'Homogeneous · Heterogeneous',
      description: 'A seamless, hygienic surface ideal for healthcare and commercial environments. Broad design flexibility with outstanding durability.',
      accentColor: '#B0C4DE',
      tags: [
        { label: 'Hygienic', variant: 'green' },
        { label: 'Seamless', variant: 'tan' },
      ],
      order: 2,
    },
    {
      title: 'Rubber',
      subtitle: 'Vulcanized · Recycled Content',
      description: 'Premium performance flooring offering unmatched resilience, acoustic properties, and slip resistance. The preferred choice for healthcare and education.',
      accentColor: '#D4A574',
      tags: [
        { label: 'Acoustic', variant: 'green' },
        { label: 'Slip Resistant', variant: 'tan' },
        { label: 'Recycled Content', variant: 'gray' },
      ],
      order: 3,
    },
    {
      title: 'Linoleum',
      subtitle: 'Natural · Sustainable',
      description: 'Made from natural raw materials including linseed oil, wood flour, and limestone. A 150-year legacy of sustainable, biobased flooring.',
      accentColor: '#8FBC8F',
      tags: [
        { label: 'Bio-based', variant: 'green' },
        { label: 'Carbon Neutral', variant: 'green' },
      ],
      order: 4,
    },
    {
      title: 'Cork',
      subtitle: 'Natural · Acoustic',
      description: 'Harvested from the bark of cork oak trees without harming the tree, cork provides warmth, acoustic comfort, and natural beauty.',
      accentColor: '#C4A882',
      tags: [
        { label: 'Renewable', variant: 'green' },
        { label: 'Acoustic', variant: 'tan' },
      ],
      order: 5,
    },
  ], 'Flooring Types')

  // ── Certifications ────────────────────────────────────────────────────────
  await seedCollection('certifications', [
    {
      slug: 'floorscore',
      title: 'FloorScore®',
      iconName: 'shieldCheck',
      description: 'The leading IAQ certification for hard surface flooring products, adhesives, and underlayments. Developed with SCS Global Services, FloorScore tests for over 100 VOC emissions.',
      stats: [
        { value: '10,000+', label: 'Certified Products' },
        { value: '97%', label: 'Market Coverage' },
      ],
      order: 1,
    },
    {
      slug: 'rfci-program',
      title: 'RFCI Program',
      iconName: 'fileText',
      description: 'Our comprehensive sustainability certification addresses lifecycle impacts, recycled content, and end-of-life recovery. Recognized by LEED, BREEAM, and WELL Building Standard.',
      stats: [
        { value: '45+', label: 'Member Companies' },
        { value: '1B+ sq ft', label: 'Certified Annually' },
      ],
      order: 2,
    },
  ], 'Certifications')

  // ── Environments ──────────────────────────────────────────────────────────
  await seedCollection('environments', [
    { name: 'Healthcare',    flooringType: 'Rubber Flooring',   order: 1 },
    { name: 'Schools',       flooringType: 'Linoleum',          order: 2 },
    { name: 'Corporations',  flooringType: 'Luxury Vinyl Tile', order: 3 },
    { name: 'Retail Spaces', flooringType: 'Sheet Vinyl',       order: 4 },
  ], 'Environments')

  // ── Videos ────────────────────────────────────────────────────────────────
  await seedCollection('videos', [
    {
      title: 'The Future of Circularity in Resilient Flooring',
      duration: '12 min watch',
      featured: true,
      order: 1,
    },
    {
      title: 'Understanding Acoustic Performance',
      duration: '6 min watch',
      featured: false,
      order: 2,
    },
    {
      title: 'Installation Best Practices for LVT',
      duration: '8 min watch',
      featured: false,
      order: 3,
    },
  ], 'Videos')

  // ── Members ───────────────────────────────────────────────────────────────
  await seedCollection('members', [
    { name: 'AHF Products',      website: 'https://ahfproducts.com',      row: '1', order: 1 },
    { name: 'American Biltrite', website: 'https://americanbiltrite.com', row: '1', order: 2 },
    { name: 'Beauflor',          website: 'https://beauflor.com',         row: '1', order: 3 },
    { name: 'Bentley',           website: 'https://bentleymills.com',     row: '1', order: 4 },
    { name: 'CFL',               website: 'https://cfloors.com',          row: '1', order: 5 },
    { name: 'Classen',           website: 'https://classen.de',           row: '1', order: 6 },
    { name: 'Congoleum',         website: 'https://congoleum.com',        row: '1', order: 7 },
    { name: 'Engineered Floors', website: 'https://engineeredfloors.com', row: '1', order: 8 },
    { name: 'Gerflor',           website: 'https://gerflor.com',          row: '1', order: 9 },
    { name: 'HMTX Industries',   website: 'https://hmtx.com',            row: '1', order: 10 },
    { name: 'Interface',         website: 'https://interface.com',        row: '1', order: 11 },
    { name: 'Karndean',          website: 'https://karndean.com',         row: '1', order: 12 },
    { name: 'Mannington',        website: 'https://mannington.com',       row: '2', order: 1 },
    { name: 'Mohawk',            website: 'https://mohawkflooring.com',   row: '2', order: 2 },
    { name: 'MSI',               website: 'https://msisurfaces.com',      row: '2', order: 3 },
    { name: 'Novalis',           website: 'https://novalisfloors.com',    row: '2', order: 4 },
    { name: 'NOX Corp',          website: 'https://nox-corp.com',         row: '2', order: 5 },
    { name: 'Roppe',             website: 'https://roppe.com',            row: '2', order: 6 },
    { name: 'Shaw',              website: 'https://shawfloors.com',       row: '2', order: 7 },
    { name: 'Tarkett',           website: 'https://tarkett.com',          row: '2', order: 8 },
    { name: 'Torlys',            website: 'https://torlys.com',           row: '2', order: 9 },
    { name: 'Wellmade',          website: 'https://wellmadefloors.com',   row: '2', order: 10 },
    { name: 'Windmöller',        website: 'https://windmoeller.com',      row: '2', order: 11 },
  ], 'Members')

  console.log('\n🌱 Seed complete.')
  await (payload.db as any).destroy?.()
  process.exit(0)
}

run().catch((err) => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
