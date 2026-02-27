import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd(), true)

const FORCE = process.argv.includes('--force')

async function run() {
  const [{ default: payload }, { default: configPromise }] = await Promise.all([
    import('payload'),
    import('../payload.config'),
  ])

  await payload.init({ config: configPromise, disableOnInit: true })

  // ── Helper: seed a collection (skip if data exists, unless --force) ─────────
  async function seedCollection(slug: string, docs: object[], label: string) {
    const existing = await payload.find({ collection: slug as any, limit: 1 })
    if (existing.totalDocs > 0 && !FORCE) {
      console.log(`⏭  ${label}: already has data, skipping (use --force to overwrite)`)
      return
    }
    if (existing.totalDocs > 0 && FORCE) {
      const all = await payload.find({ collection: slug as any, limit: 1000 })
      for (const doc of all.docs) {
        await payload.delete({ collection: slug as any, id: doc.id })
      }
      console.log(`🗑  ${label}: cleared ${all.docs.length} existing documents`)
    }
    for (const doc of docs) {
      await payload.create({ collection: slug as any, data: doc as any })
    }
    console.log(`✅ ${label}: seeded ${docs.length} documents`)
  }

  // ── Helper: seed a global (always upserts) ───────────────────────────────────
  async function seedGlobal(slug: string, data: object, label: string) {
    try {
      await payload.updateGlobal({ slug: slug as any, data: data as any })
      console.log(`✅ ${label}: global updated`)
    } catch (err: any) {
      console.warn(`⚠  ${label}: ${err.message}`)
    }
  }

  // ── Flooring Types ────────────────────────────────────────────────────────
  await seedCollection('flooring-types', [
    {
      title: 'Flexible LVT',
      subtitle: 'Luxury Vinyl Tile · Planks',
      description: 'The most popular choice in residential and commercial flooring. Flexible LVT is waterproof, durable, and comes in wood and stone visuals. It installs easily and holds up in high-traffic areas.',
      accentColor: '#9CA3AF',
      tags: [
        { label: 'Waterproof', variant: 'green' },
        { label: 'High Traffic', variant: 'tan' },
        { label: 'Easy Install', variant: 'gray' },
      ],
      order: 1,
    },
    {
      title: 'Rigid Core',
      subtitle: 'SPC · WPC · Multilayer',
      description: 'A stiffer, more dimensionally stable version of LVT. Rigid core products resist temperature swings and indentation, making them a strong choice for challenging environments.',
      accentColor: '#78909C',
      tags: [
        { label: 'Waterproof', variant: 'green' },
        { label: 'Dimensionally Stable', variant: 'tan' },
      ],
      order: 2,
    },
    {
      title: 'Heterogeneous Sheet Vinyl',
      subtitle: 'Multi-layer · Printed Design',
      description: 'A multi-layer sheet vinyl with a printed design layer, giving it strong customization options. A go-to for healthcare, education, and commercial spaces that need both durability and design flexibility.',
      accentColor: '#B0C4DE',
      tags: [
        { label: 'Hygienic', variant: 'green' },
        { label: 'Seamless', variant: 'tan' },
      ],
      order: 3,
    },
    {
      title: 'Homogeneous Sheet Vinyl',
      subtitle: 'Through-body · Single Layer',
      description: 'A solid, single-layer vinyl sheet where the color and pattern run all the way through. Extremely durable and easy to maintain — widely used in hospitals and laboratories.',
      accentColor: '#90A4AE',
      tags: [
        { label: 'Hygienic', variant: 'green' },
        { label: 'Through-body Color', variant: 'tan' },
      ],
      order: 4,
    },
    {
      title: 'Solid Vinyl Tile',
      subtitle: 'SVT · Flexible Tiles',
      description: 'Flexible vinyl tiles made from solid PVC compounds. A cost-effective, durable option for commercial spaces with the added benefit of individual tile replacement when needed.',
      accentColor: '#A5B4BC',
      tags: [
        { label: 'Cost-effective', variant: 'green' },
        { label: 'Replaceable Tiles', variant: 'tan' },
      ],
      order: 5,
    },
    {
      title: 'Vinyl Composition Tile',
      subtitle: 'VCT · Commercial Standard',
      description: 'A proven commercial staple made from vinyl and limestone. VCT is extremely durable and cost-effective in high-traffic areas like retail and schools. Requires periodic waxing to maintain its finish.',
      accentColor: '#CFD8DC',
      tags: [
        { label: 'Durable', variant: 'green' },
        { label: 'Cost-effective', variant: 'tan' },
      ],
      order: 6,
    },
    {
      title: 'Rubber',
      subtitle: 'Vulcanized · Recycled Content',
      description: 'Outstanding durability, acoustic performance, and slip resistance. Common in gyms, hospitals, and transit facilities. Often made with recycled rubber content.',
      accentColor: '#D4A574',
      tags: [
        { label: 'Acoustic', variant: 'green' },
        { label: 'Slip Resistant', variant: 'tan' },
        { label: 'Recycled Content', variant: 'gray' },
      ],
      order: 7,
    },
    {
      title: 'Linoleum',
      subtitle: 'Natural · Bio-based',
      description: 'Made from linseed oil, wood flour, and limestone — natural materials used in flooring for over 150 years. Biodegradable, antimicrobial, and carbon neutral.',
      accentColor: '#8FBC8F',
      tags: [
        { label: 'Bio-based', variant: 'green' },
        { label: 'Carbon Neutral', variant: 'green' },
      ],
      order: 8,
    },
    {
      title: 'Cork',
      subtitle: 'Natural · Acoustic',
      description: 'Harvested from cork oak bark without cutting the tree. Warm underfoot, naturally acoustic, and a fully renewable resource.',
      accentColor: '#C4A882',
      tags: [
        { label: 'Renewable', variant: 'green' },
        { label: 'Acoustic', variant: 'tan' },
      ],
      order: 9,
    },
  ], 'Flooring Types')

  // ── Certifications ────────────────────────────────────────────────────────
  await seedCollection('certifications', [
    {
      slug: 'floorscore',
      title: 'FloorScore®',
      iconName: 'shieldCheck',
      description: 'The leading indoor air quality certification for hard surface flooring. Developed with SCS Global Services, FloorScore tests for over 100 VOC emissions. It is specified by LEED, WELL, and CHPS and recognized in commercial and government procurement worldwide.',
      stats: [
        { value: '10,000+', label: 'Certified Products' },
        { value: '97%', label: 'Market Coverage' },
      ],
      order: 1,
    },
    {
      slug: 'assure',
      title: 'ASSURE® Certified',
      iconName: 'leaf',
      description: 'ASSURE® is RFCI\'s third-party sustainability certification for resilient flooring products. It evaluates products across the full lifecycle—raw materials, manufacturing, product performance, and end-of-life—giving manufacturers a rigorous and credible way to demonstrate sustainability leadership.',
      stats: [
        { value: 'Full Lifecycle', label: 'Assessment Scope' },
        { value: '100%', label: 'Third-Party Verified' },
      ],
      order: 2,
    },
    {
      slug: 'affirm',
      title: 'AFFIRM™ Certified',
      iconName: 'globe',
      description: 'AFFIRM™ is RFCI\'s material health certification program for resilient flooring. It evaluates and discloses the chemical ingredients in flooring products, helping manufacturers demonstrate transparency and enabling specifiers to make informed decisions about material health.',
      stats: [
        { value: 'Ingredient', label: 'Level Transparency' },
        { value: '100%', label: 'Third-Party Verified' },
      ],
      order: 3,
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
      title: 'Resilient Flooring: Verified and Certified!',
      description: 'Certifications, declarations, and ecolabels provide sustainability and health and wellness information that subsequently supports requirements in building rating systems.',
      duration: '17 min watch',
      thumbnailUrl: 'https://rfci.com/wp-content/uploads/2023/11/Photograph-1_CEU-Cover-Photo_no-Title_PNG-500x300.png',
      courseUrl: 'https://rfci.com/courses/resilient-flooring-verified-and-certified/',
      featured: true,
      order: 1,
    },
    {
      title: 'Demystifying EPDs in Sustainable Design',
      description: 'Environmental Product Declarations (EPDs) can be a powerful tool to use when choosing materials for commercial projects. Understanding the ins & outs of this valuable tool has never been more necessary.',
      duration: '19 min watch',
      thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/11/Optimized-3-500x300.jpg',
      courseUrl: 'https://rfci.com/courses/demystifying-epds-in-sustainable-design/',
      featured: false,
      order: 2,
    },
    {
      title: 'Resilient Flooring and Sustainability',
      description: 'It is important for a specifier to utilize a multi-attribute approach for the selection of resilient flooring products to verify performance, durability, sustainability, and material health attributes.',
      duration: '19 min watch',
      thumbnailUrl: 'https://rfci.com/wp-content/uploads/2022/10/Optimized-2-500x300.jpg',
      courseUrl: 'https://rfci.com/courses/resilient-flooring-and-sustainability/',
      featured: false,
      order: 3,
    },
    {
      title: 'Resilient Flooring and Materiality',
      description: 'When specifying products for the built environment, it is important to transparently understand the origin of material ingredients, how materials are used to produce resilient floor products.',
      duration: '19 min watch',
      thumbnailUrl: 'https://rfci.com/wp-content/uploads/2021/11/Resilient-Flooring-Materiality-Course-Image-Cropped-1-500x300.png',
      courseUrl: 'https://rfci.com/courses/resilient-flooring-materiality/',
      featured: false,
      order: 4,
    },
  ], 'Videos')

  // ── Members ───────────────────────────────────────────────────────────────
  await seedCollection('members', [
    { name: 'AHF Products',      logoUrl: 'https://rfci.com/wp-content/uploads/2022/01/AHF-gray.jpg',                website: 'https://ahfproducts.com',      row: '1', order: 1 },
    { name: 'American Biltrite', logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/American-Biltrite-gray.jpg',  website: 'https://americanbiltrite.com', row: '1', order: 2 },
    { name: 'Beauflor',          logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/beauflor-gray.jpg',           website: 'https://beauflor.com',         row: '1', order: 3 },
    { name: 'Bentley',           logoUrl: 'https://rfci.com/wp-content/uploads/2023/07/Bentley-gray.jpg',            website: 'https://bentleymills.com',     row: '1', order: 4 },
    { name: 'CFL',               logoUrl: 'https://rfci.com/wp-content/uploads/2021/01/cfl-grey-1.jpg',              website: 'https://cfloors.com',          row: '1', order: 5 },
    { name: 'Classen',           logoUrl: 'https://rfci.com/wp-content/uploads/2025/02/classen-gray-img.jpg',        website: 'https://classen.de',           row: '1', order: 6 },
    { name: 'Congoleum',         logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/congoleum-gray.jpg',          website: 'https://congoleum.com',        row: '1', order: 7 },
    { name: 'Engineered Floors', logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/Engineered-Floors-gray.jpg',  website: 'https://engineeredfloors.com', row: '1', order: 8 },
    { name: 'Gerflor',           logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/gerflor-gray.jpg',            website: 'https://gerflor.com',          row: '1', order: 9 },
    { name: 'HMTX Industries',   logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/hmtx-gray.jpg',               website: 'https://hmtx.com',            row: '1', order: 10 },
    { name: 'Interface',         logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/interface-gray.jpg',          website: 'https://interface.com',        row: '1', order: 11 },
    { name: 'Karndean',          logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/karndean-gray.jpg',           website: 'https://karndean.com',         row: '1', order: 12 },
    { name: 'Mannington',        logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/mannington-gray.jpg',         website: 'https://mannington.com',       row: '2', order: 1 },
    { name: 'Mohawk',            logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/mohawk-gray.jpg',             website: 'https://mohawkflooring.com',   row: '2', order: 2 },
    { name: 'MSI',               logoUrl: 'https://rfci.com/wp-content/uploads/2022/04/MSI-gray.jpg',                website: 'https://msisurfaces.com',      row: '2', order: 3 },
    { name: 'Novalis',           logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/Novalis-gray.jpg',            website: 'https://novalisfloors.com',    row: '2', order: 4 },
    { name: 'NOX Corp',          logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/nox-corp-gray.jpg',           website: 'https://nox-corp.com',         row: '2', order: 5 },
    { name: 'Roppe',             logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/roppe-gray.jpg',              website: 'https://roppe.com',            row: '2', order: 6 },
    { name: 'Shaw',              logoUrl: 'https://rfci.com/wp-content/uploads/2022/04/Shaw-gray.jpg',               website: 'https://shawfloors.com',       row: '2', order: 7 },
    { name: 'Tarkett',           logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/Tarkett-gray.jpg',            website: 'https://tarkett.com',          row: '2', order: 8 },
    { name: 'Torlys',            logoUrl: 'https://rfci.com/wp-content/uploads/2018/10/torlys-logo-gray.png',        website: 'https://torlys.com',           row: '2', order: 9 },
    { name: 'Wellmade',          logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/wellmade-gray.jpg',           website: 'https://wellmadefloors.com',   row: '2', order: 10 },
    { name: 'Windmöller',        logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-gray-1.jpg',       website: 'https://windmoeller.com',      row: '2', order: 11 },
  ], 'Members')

  // ── SiteSettings global ───────────────────────────────────────────────────
  await seedGlobal('site-settings', {
    heroLine1: 'FLOORS WORTH',
    heroLine2: 'STANDING ON.',
    heroSubheading: 'RFCI is the trade association for the resilient flooring industry. We bring together manufacturers and suppliers to set standards, run certification programs, and advance the category.',
    heroCta: 'Learn about RFCI',
    heroBoxText: 'Find out who our members are, what certifications we run, and how we support the industry.',
  }, 'SiteSettings')

  // ── CommunityEvent global ─────────────────────────────────────────────────
  await seedGlobal('community-event', {
    sectionHeading: 'Where the industry comes together.',
    sectionSubheading: "Twice a year, RFCI members and industry professionals get together to share what's working, talk through technical standards, and discuss sustainability. If you work in resilient flooring, this is where you want to be.",
    eventTitle: 'Fall Industry Meeting',
    eventLocation: 'Austin, TX',
    eventDate: 'Oct 12–14',
  }, 'CommunityEvent')

  console.log('\n🌱 Seed complete.')
  await (payload.db as any).destroy?.()
  process.exit(0)
}

run().catch((err) => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
