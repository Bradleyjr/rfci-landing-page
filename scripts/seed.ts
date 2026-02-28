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
      title: 'FloorScore\u00ae',
      iconName: 'shieldCheck',
      description: 'FloorScore\u00ae is the flooring industry\'s most recognized indoor air quality (IAQ) certification. Independently administered by SCS Global Services, it verifies that a product meets California Section 01350 VOC emissions standards \u2014 one of the most stringent IAQ benchmarks in the world.',
      stats: [
        { value: '10,000+', label: 'Certified Products' },
        { value: '90%', label: 'Of time spent indoors' },
      ],
      benefits: [
        { title: 'Indoor Air Quality Protection', description: 'Certifies that VOC emissions meet California Section 01350 \u2014 the most stringent IAQ standard for building materials in North America.' },
        { title: 'Independent SCS Verification', description: 'SCS Global Services reviews all emissions test reports, determines compliance, and conducts periodic manufacturing plant inspections.' },
        { title: 'LEED & Green Building Credits', description: 'Recognized by LEED (NC, CI, CS, HC, Schools, Homes, EB), WELL, BREEAM, CHPS, Green Globes, and more.' },
        { title: 'Healthier Occupant Environments', description: 'Most people spend over 90% of their time indoors. FloorScore-certified products contribute measurably to cleaner air and healthier occupants.' },
        { title: 'Annual Re-Testing Required', description: 'Certification requires yearly product re-testing, on-site manufacturing audits, and documented quality control \u2014 not a one-time stamp.' },
        { title: 'Hard Surface Advantage', description: 'Hard surface flooring does not retain moisture, odors, dust mites, or mold the way carpet can \u2014 making it the recommended choice for schools, offices, and healthcare.' },
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
      order: 1,
    },
    {
      slug: 'assure',
      title: 'ASSURE\u00ae Certified',
      iconName: 'leaf',
      description: 'ASSURE\u00ae Certified was developed by RFCI to establish uniform quality standards for all rigid core luxury flooring (WPC and SPC) sold in North America, regardless of where it is manufactured. Products are independently tested and certified by SCS Global Services.',
      stats: [
        { value: 'WPC + SPC', label: 'Rigid Core Products' },
        { value: '100PPM', label: 'Max Heavy Metals' },
      ],
      benefits: [
        { title: 'Indoor Air Quality Assurance', description: 'Products must comply with CDPH Standard Method v1.2 at half the corresponding CREL \u2014 a stricter IAQ threshold than many competing certifications.' },
        { title: 'Performance Testing', description: 'Must pass ASTM F3261 testing covering composition, size tolerance, product thickness, and wear layer thickness.' },
        { title: 'Heavy Metals Free', description: 'Tested for lead, hexavalent chromium, cadmium, and mercury via EPA SW 846 Method 3052. Total combined limit: 100 PPM.' },
        { title: 'Ortho-Phthalates Free', description: 'Products cannot exceed 1,000 PPM for any individual or combined ortho-phthalates \u2014 tested per ASTM F3414.' },
        { title: 'Supply Chain Transparency', description: 'Manufacturers must maintain quality control procedures covering material suppliers, product traceability, chain of custody, and internal QC testing.' },
        { title: 'Fastest Growing Segment', description: 'Rigid core luxury flooring is North America\'s fastest-growing resilient flooring segment. ASSURE ensures consumer confidence as new manufacturers enter the market.' },
      ],
      process: [
        { step: 'Application to SCS Global', description: 'Contact SCS Global Services to begin the ASSURE certification process and submit product documentation.' },
        { step: 'IAQ Emissions Testing', description: 'Products undergo CDPH Standard Method v1.2 testing. Must meet concentration limits at half the corresponding CREL for listed VOCs.' },
        { step: 'Performance & Chemistry Testing', description: 'Products tested per ASTM F3261 (performance), EPA SW 846 (heavy metals), and ASTM F3414 (ortho-phthalates).' },
        { step: 'Manufacturing Facility Audit', description: 'On-site audit of the manufacturing facility confirms compliant quality control procedures.' },
        { step: 'Certification & Badge Use', description: 'Certified products earn the ASSURE Certified badge and are listed in the program directory.' },
      ],
      ctaText: 'Learn About ASSURE Certification',
      ctaUrl: 'https://rfci.com/resources/assurecertified/',
      order: 2,
    },
    {
      slug: 'affirm',
      title: 'AFFIRM\u2122 Certified',
      iconName: 'globe',
      description: 'AFFIRM\u2122 Certified is a sustainability certification for resilient flooring based on an ANSI-accredited standard. It evaluates products across environmental, health & wellness, and social impact categories \u2014 with two certification levels and independent third-party verification.',
      stats: [
        { value: 'ANSI', label: 'Accredited Standard' },
        { value: 'Level 1 + 2', label: 'Certification Tiers' },
      ],
      benefits: [
        { title: 'ANSI-Accredited Standard', description: 'The AFFIRM standard is developed through an ANSI-accredited consensus process involving public health, industry, and user stakeholders.' },
        { title: 'Three Impact Areas', description: 'Covers Environmental requirements, Health and Wellness, and Social Responsibility \u2014 a true multi-attribute sustainability standard.' },
        { title: 'Two Certification Levels', description: 'Level 1 is required baseline compliance. Level 2 is optional and rewards products that meet additional criteria across the three impact areas.' },
        { title: 'Public Health Council Review', description: 'All standards reviewed by the AFFIRM Council of Public Health Consultants \u2014 composed of professionals from federal and state agencies, academic institutions, and recognized public health leaders.' },
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
      order: 3,
    },
    {
      slug: 'epd',
      title: 'Environmental Product Declarations',
      iconName: 'globe',
      description: 'An Environmental Product Declaration (EPD) is a transparent, third-party verified document that communicates the environmental impacts of a product across its full lifecycle \u2014 based on ISO 14025 and ISO 14040 standards. RFCI publishes Industry Wide EPDs for nine resilient flooring product types.',
      stats: [
        { value: 'ISO 14025', label: 'EPD Standard' },
        { value: '9', label: 'Product Types Covered' },
      ],
      benefits: [
        { title: 'Full Lifecycle Transparency', description: 'EPDs report environmental impact from raw material extraction through manufacturing, use phase, and end-of-life \u2014 per ISO 14040 Life Cycle Assessment methodology.' },
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
      ctaText: 'View RFCI Industry Wide EPDs',
      ctaUrl: 'https://rfci.com/environmental-product-declaration/',
      order: 4,
    },
  ], 'Certifications')

  // ── Environments ──────────────────────────────────────────────────────────
  await seedCollection('environments', [
    { name: 'Single-Family Homes',  flooringType: 'Luxury Vinyl Plank',      order: 1 },
    { name: 'Apartments & Condos',  flooringType: 'Rigid Core LVT',          order: 2 },
    { name: 'Townhomes & Duplexes', flooringType: 'Flexible LVT',            order: 3 },
    { name: 'Vacation & Rentals',   flooringType: 'Sheet Vinyl',             order: 4 },
    { name: 'Senior Living',        flooringType: 'Rubber Flooring',         order: 5 },
    { name: 'Offices',              flooringType: 'Luxury Vinyl Tile',       order: 6 },
    { name: 'Healthcare',           flooringType: 'Homogeneous Sheet Vinyl', order: 7 },
    { name: 'Education',            flooringType: 'Linoleum',                order: 8 },
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
    // Board members (Flooring Manufacturers)
    { name: 'AHF Products',      logoUrl: 'https://rfci.com/wp-content/uploads/2022/01/AHF-gray.jpg',                website: 'https://ahfproducts.com',      tier: 'board', row: '1', order: 1 },
    { name: 'American Biltrite', logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/American-Biltrite-gray.jpg',  website: 'https://americanbiltrite.com', tier: 'board', row: '1', order: 2 },
    { name: 'Beauflor',          logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/beauflor-gray.jpg',           website: 'https://beauflor.com',         tier: 'board', row: '1', order: 3 },
    { name: 'Bentley',           logoUrl: 'https://rfci.com/wp-content/uploads/2023/07/Bentley-gray.jpg',            website: 'https://bentleymills.com',     tier: 'board', row: '1', order: 4 },
    { name: 'CFL',               logoUrl: 'https://rfci.com/wp-content/uploads/2021/01/cfl-grey-1.jpg',              website: 'https://cfloors.com',          tier: 'board', row: '1', order: 5 },
    { name: 'Classen',           logoUrl: 'https://rfci.com/wp-content/uploads/2025/02/classen-gray-img.jpg',        website: 'https://classen.de',           tier: 'board', row: '1', order: 6 },
    { name: 'Congoleum',         logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/congoleum-gray.jpg',          website: 'https://congoleum.com',        tier: 'board', row: '1', order: 7 },
    { name: 'Engineered Floors', logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/Engineered-Floors-gray.jpg',  website: 'https://engineeredfloors.com', tier: 'board', row: '1', order: 8 },
    { name: 'Gerflor',           logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/gerflor-gray.jpg',            website: 'https://gerflor.com',          tier: 'board', row: '1', order: 9 },
    { name: 'HMTX Industries',   logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/hmtx-gray.jpg',               website: 'https://hmtx.com',            tier: 'board', row: '1', order: 10 },
    { name: 'Interface',         logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/interface-gray.jpg',          website: 'https://interface.com',        tier: 'board', row: '1', order: 11 },
    { name: 'Karndean',          logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/karndean-gray.jpg',           website: 'https://karndean.com',         tier: 'board', row: '1', order: 12 },
    { name: 'Lonseal',                                                                                                                                        tier: 'board', row: '2', order: 1 },
    { name: 'Mannington',        logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/mannington-gray.jpg',         website: 'https://mannington.com',       tier: 'board', row: '2', order: 2 },
    { name: 'Mohawk',            logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/mohawk-gray.jpg',             website: 'https://mohawkflooring.com',   tier: 'board', row: '2', order: 3 },
    { name: 'MSI',               logoUrl: 'https://rfci.com/wp-content/uploads/2022/04/MSI-gray.jpg',                website: 'https://msisurfaces.com',      tier: 'board', row: '2', order: 4 },
    { name: 'Novalis',           logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/Novalis-gray.jpg',            website: 'https://novalisfloors.com',    tier: 'board', row: '2', order: 5 },
    { name: 'NOX Corp',          logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/nox-corp-gray.jpg',           website: 'https://nox-corp.com',         tier: 'board', row: '2', order: 6 },
    { name: 'Roppe',             logoUrl: 'https://rfci.com/wp-content/uploads/2018/04/roppe-gray.jpg',              website: 'https://roppe.com',            tier: 'board', row: '2', order: 7 },
    { name: 'Shaw',              logoUrl: 'https://rfci.com/wp-content/uploads/2022/04/Shaw-gray.jpg',               website: 'https://shawfloors.com',       tier: 'board', row: '2', order: 8 },
    { name: 'Tarkett',           logoUrl: 'https://rfci.com/wp-content/uploads/2020/10/Tarkett-gray.jpg',            website: 'https://tarkett.com',          tier: 'board', row: '2', order: 9 },
    { name: 'Torlys',            logoUrl: 'https://rfci.com/wp-content/uploads/2018/10/torlys-logo-gray.png',        website: 'https://torlys.com',           tier: 'board', row: '2', order: 10 },
    { name: 'Wellmade',          logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/wellmade-gray.jpg',           website: 'https://wellmadefloors.com',   tier: 'board', row: '2', order: 11 },
    { name: 'Windm\u00F6ller',        logoUrl: 'https://rfci.com/wp-content/uploads/2020/02/windmoller-gray-1.jpg',       website: 'https://windmoeller.com',      tier: 'board', row: '2', order: 12 },
    // Supply Chain Partners (Associate members)
    { name: 'Amorim',                tier: 'associate', order: 1 },
    { name: 'AM Stabilizers',        tier: 'associate', order: 2 },
    { name: 'Baerlocher',            tier: 'associate', order: 3 },
    { name: 'BASF',                  tier: 'associate', order: 4 },
    { name: 'Bostik',                tier: 'associate', order: 5 },
    { name: 'DMX Membranes',         tier: 'associate', order: 6 },
    { name: 'Dow',                   tier: 'associate', order: 7 },
    { name: 'Eastman Chemical',      tier: 'associate', order: 8 },
    { name: 'Formosa Plastics',      tier: 'associate', order: 9 },
    { name: 'Interprint',            tier: 'associate', order: 10 },
    { name: 'i4F',                   tier: 'associate', order: 11 },
    { name: 'Klockner Pentaplast',   tier: 'associate', order: 12 },
    { name: 'Lighthouse Adhesive',   tier: 'associate', order: 13 },
    { name: 'Mapei',                 tier: 'associate', order: 14 },
    { name: 'Microban',              tier: 'associate', order: 15 },
    { name: 'Mondo',                 tier: 'associate', order: 16 },
    { name: 'Revive',                tier: 'associate', order: 17 },
    { name: 'Owens Corning',         tier: 'associate', order: 18 },
    { name: 'OxyChem',               tier: 'associate', order: 19 },
    { name: 'Patcham USA',           tier: 'associate', order: 20 },
    { name: 'Penn Color',            tier: 'associate', order: 21 },
    { name: 'Performance Additives', tier: 'associate', order: 22 },
    { name: 'PLI Pak-Lite',          tier: 'associate', order: 23 },
    { name: 'POLYTEX',               tier: 'associate', order: 24 },
    { name: 'Schattdecor',           tier: 'associate', order: 25 },
    { name: 'SELIT',                 tier: 'associate', order: 26 },
    { name: 'Shintech',              tier: 'associate', order: 27 },
    { name: 'Taylor Adhesives',      tier: 'associate', order: 28 },
    { name: 'TEC',                   tier: 'associate', order: 29 },
    { name: 'TMT America',           tier: 'associate', order: 30 },
    { name: 'V\u00E4linge',               tier: 'associate', order: 31 },
    { name: 'Valtris',               tier: 'associate', order: 32 },
    { name: 'Versatrim',             tier: 'associate', order: 33 },
    { name: 'Vestolite',             tier: 'associate', order: 34 },
    { name: 'WW Henry',              tier: 'associate', order: 35 },
  ], 'Members')

  // ── LinkedIn Posts ────────────────────────────────────────────────────────
  await seedCollection('linkedin-posts', [
    {
      title: 'RFCI Welcomes New Board Members for 2026',
      excerpt: 'We are pleased to announce the appointment of three new board members who bring decades of industry experience to RFCI.',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
      postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
      postDate: 'Feb 20, 2026',
      order: 1,
    },
    {
      title: 'FloorScore Reaches 10,000 Certified Products',
      excerpt: 'A milestone for indoor air quality certification — FloorScore now covers more than 10,000 products worldwide.',
      imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop',
      postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
      postDate: 'Feb 12, 2026',
      order: 2,
    },
    {
      title: 'Spring Industry Meeting Registration Open',
      excerpt: 'Join us in Nashville this April for two days of technical sessions, networking, and industry updates.',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
      postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
      postDate: 'Jan 30, 2026',
      order: 3,
    },
    {
      title: 'Resilient Flooring Market Hits Record High',
      excerpt: 'New data confirms resilient flooring holds 65% of all hard surface flooring installations in North America.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      postUrl: 'https://www.linkedin.com/company/resilient-floor-covering-institute/',
      postDate: 'Jan 18, 2026',
      order: 4,
    },
  ], 'LinkedIn Posts')

  // ── SiteSettings global ───────────────────────────────────────────────────
  await seedGlobal('site-settings', {
    heroLine1: 'RESILIENT FLOOR',
    heroLine2: 'COVERING INSTITUTE',
    heroSubheading: 'The trade association representing the resilient flooring industry. Setting standards, running certification programs, and advancing the number one flooring category in North America since 1929.',
    heroCta: 'Explore RFCI',
    heroBoxText: 'Discover our certification programs, meet our member manufacturers, and learn how RFCI protects and promotes the resilient flooring industry.',
  }, 'SiteSettings')

  // ── CommunityEvent global ─────────────────────────────────────────────────
  await seedGlobal('community-event', {
    sectionHeading: 'Where the industry comes together.',
    sectionSubheading: "Twice a year, RFCI members and industry professionals get together to share what's working, talk through technical standards, and discuss sustainability. If you work in resilient flooring, this is where you want to be.",
    eventTitle: 'Fall Industry Meeting',
    eventLocation: 'Austin, TX',
    eventDate: 'Oct 12–14',
  }, 'CommunityEvent')

  // ── AboutPage global ──────────────────────────────────────────────────
  await seedGlobal('about-page', {
    heroHeading: 'The voice of resilient flooring.',
    heroSubheading: 'Founded in 1976, the Resilient Floor Covering Institute is the trade association for North America\u2019s resilient flooring industry\u2014representing the manufacturers and suppliers behind vinyl, rubber, linoleum, and cork flooring.',
    missionStatement: 'RFCI is a non-profit organization that brings the resilient flooring industry together to advocate, educate, and lead\u2014advancing the interests of manufacturers, specifiers, and end users alike.',
    strategicPillars: [
      { number: '01', title: 'Advocacy & Government Affairs', description: 'Represent the resilient flooring industry before legislative and regulatory bodies at federal, state, and local levels.' },
      { number: '02', title: 'Certification Programs', description: 'Administer FloorScore, ASSURE, and AFFIRM certification programs that independently verify indoor air quality, sustainability, and material health.' },
      { number: '03', title: 'Technical Standards', description: 'Develop and maintain industry standards, recommended work practices, and installation guidelines that ensure product quality and performance.' },
      { number: '04', title: 'Sustainability Leadership', description: 'Publish Environmental Product Declarations, promote lifecycle assessment, and advance recycling and end-of-life recovery programs.' },
      { number: '05', title: 'Education & Outreach', description: 'Provide AIA-approved continuing education, industry research, and resources to architects, designers, facility managers, and specifiers.' },
    ],
  }, 'AboutPage')

  // ── WhyResilientPage global ───────────────────────────────────────────
  await seedGlobal('why-resilient-page', {
    heroHeading: 'Why resilient flooring?',
    heroSubheading: 'Resilient flooring is the fastest-growing segment of the hard surface flooring market\u2014and for good reason. It delivers unmatched versatility across design, performance, and sustainability.',
    heroStatValue: '65',
    heroStatLabel: 'of hard surface flooring installed in North America',
    benefits: [
      { title: 'Easy Maintenance', description: 'Simple cleaning protocols and minimal upkeep keep lifecycle costs low and surfaces looking new for years.' },
      { title: 'Water Resistance', description: 'Engineered to handle moisture-prone environments\u2014from kitchens and baths to healthcare and hospitality.' },
      { title: 'Cost Effective', description: 'Competitive installed cost paired with a long service life delivers strong value across the full lifecycle.' },
      { title: 'Design Versatility', description: 'Realistic wood, stone, and custom visuals across tile, plank, and sheet formats for any design vision.' },
      { title: 'Sustainability', description: 'Recyclable materials, low-VOC manufacturing, and third-party certifications support green building goals.' },
      { title: 'Certified Performance', description: 'FloorScore, ASSURE, and AFFIRM certifications provide independent verification of indoor air quality and sustainability.' },
      { title: 'Dimensional Stability', description: 'Resistant to temperature fluctuations and moisture expansion, making it ideal for challenging subfloor conditions.' },
      { title: 'Comfort Underfoot', description: 'Resilient by definition\u2014these floors flex underfoot, reducing fatigue and impact noise in high-traffic environments.' },
    ],
    historyMilestones: [
      { year: '1845', title: 'Linoleum Invented', description: 'Frederick Walton patents linoleum in England, creating the first true resilient floor covering from linseed oil and natural materials.' },
      { year: '1872', title: 'US Manufacturing Begins', description: 'The American Linoleum Manufacturing Company opens in Staten Island, New York, launching domestic resilient flooring production.' },
      { year: '1933', title: 'Vinyl Composition Tile', description: 'VCT is introduced as a durable, affordable alternative for commercial spaces, quickly becoming the standard in schools and hospitals.' },
      { year: '1950s', title: 'The Vinyl Boom', description: 'Post-war construction drives massive adoption of sheet vinyl and VCT across residential and commercial markets nationwide.' },
      { year: '1960s', title: 'Cushioned Vinyl', description: 'Cushion-backed sheet vinyl delivers improved comfort underfoot and sound absorption, expanding resilient flooring into new applications.' },
      { year: 'Today', title: '#2 in North America', description: 'Resilient flooring accounts for 65% of all hard surface flooring installed in North America, driven by LVT innovation and sustainability leadership.' },
    ],
  }, 'WhyResilientPage')

  // ── FAQs ──────────────────────────────────────────────────────────────
  function textToLexical(text: string) {
    return {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [{ type: 'text', text, version: 1 }],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    }
  }

  const faqEntries = [
    { question: 'What is resilient flooring?', answer: 'Resilient flooring refers to a category of hard surface flooring materials that offer a degree of flexibility and "give" underfoot. This includes luxury vinyl tile (LVT), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber, and cork flooring.', category: 'general', order: 1 },
    { question: 'What is the Resilient Floor Covering Institute (RFCI)?', answer: 'RFCI is the trade association for the resilient flooring industry in North America. Founded in 1976, we represent manufacturers and suppliers of vinyl, rubber, linoleum, and cork flooring products.', category: 'general', order: 2 },
    { question: 'What is FloorScore certification?', answer: "FloorScore is the flooring industry's most recognized indoor air quality certification. It independently verifies that a flooring product meets California's strict VOC emissions standards (CA Section 01350), one of the toughest air quality benchmarks in the world.", category: 'certifications', order: 3 },
    { question: 'What does ASSURE certification cover?', answer: "ASSURE is RFCI's third-party sustainability certification that evaluates resilient flooring products across the full lifecycle\u2014raw materials, manufacturing, product performance, and end-of-life recovery.", category: 'certifications', order: 4 },
    { question: 'What is an Environmental Product Declaration (EPD)?', answer: 'An EPD is a standardized, third-party verified document that transparently reports the environmental impact of a product across its entire lifecycle, from raw material extraction through manufacturing, use, and end-of-life disposal.', category: 'sustainability', order: 5 },
    { question: 'Is resilient flooring recyclable?', answer: 'Many resilient flooring products are recyclable. Several RFCI member companies operate take-back and recycling programs for post-installation and post-consumer flooring waste. The industry is continuously expanding recycling capabilities.', category: 'sustainability', order: 6 },
    { question: 'Can resilient flooring be installed over existing floors?', answer: "In many cases, yes. Resilient flooring can often be installed over existing hard, smooth surfaces, which can reduce demolition waste and installation time. However, subfloor conditions must meet the manufacturer's requirements.", category: 'installation', order: 7 },
    { question: 'What subfloor preparation is needed for resilient flooring?', answer: "Subfloors must be clean, dry, smooth, and structurally sound. Specific moisture, flatness, and temperature requirements vary by product. Always follow the manufacturer's installation guidelines.", category: 'installation', order: 8 },
    { question: 'How does RFCI membership work?', answer: 'RFCI membership is by invitation and is open to manufacturers and suppliers within the resilient flooring industry. Members participate in industry advocacy, certification programs, and educational initiatives.', category: 'membership', order: 9 },
    { question: 'Does RFCI offer continuing education?', answer: 'Yes. RFCI provides AIA-approved continuing education units (CEUs) covering topics like indoor air quality, sustainability certifications, material health, and Environmental Product Declarations.', category: 'general', order: 10 },
    { question: 'How does resilient flooring impact indoor air quality?', answer: 'Resilient flooring can significantly contribute to healthy indoor environments. Products certified through FloorScore meet California Section 01350 standards for low VOC emissions\u2014one of the strictest indoor air quality benchmarks in the world.', category: 'sustainability', order: 11 },
    { question: 'What are VOCs and why do they matter in flooring?', answer: 'VOCs (Volatile Organic Compounds) are chemicals that can off-gas from building materials, including some flooring products. Prolonged exposure to high VOC levels may cause headaches, respiratory irritation, and other health effects. FloorScore-certified resilient flooring products are independently tested to ensure VOC emissions fall well below recognized health thresholds.', category: 'sustainability', order: 12 },
    { question: 'What is the difference between FloorScore, ASSURE, and AFFIRM?', answer: "FloorScore certifies that a product meets strict indoor air quality (VOC emission) standards. ASSURE evaluates broader sustainability criteria across a product's full lifecycle. AFFIRM is an ANSI-accredited program that verifies product composition and regulatory compliance through independent lab testing.", category: 'certifications', order: 13 },
    { question: 'How does resilient flooring compare to carpet for health and maintenance?', answer: 'Resilient flooring offers several advantages over carpet in health-sensitive environments. Its smooth, non-porous surface does not harbor dust mites, mold, or allergens the way carpet fibers can. It is easier to clean and disinfect, which is why it is the preferred flooring in healthcare, education, and food-service settings.', category: 'general', order: 14 },
    { question: 'What types of resilient flooring are available?', answer: 'The resilient flooring category includes luxury vinyl tile and plank (LVT/LVP), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber flooring, cork flooring, and rigid-core products like WPC and SPC.', category: 'general', order: 15 },
    { question: 'How long does resilient flooring last?', answer: 'With proper installation and maintenance, commercial-grade resilient flooring can last 20 years or more. Luxury vinyl and rubber flooring in particular are known for exceptional durability.', category: 'general', order: 16 },
    { question: 'What is NSF/ANSI 332?', answer: 'NSF/ANSI 332 is the Sustainability Assessment Standard for Resilient Floor Coverings. It provides a framework for evaluating the environmental and social responsibility of resilient flooring products across their full lifecycle. Products are rated at Silver, Gold, or Platinum levels.', category: 'sustainability', order: 17 },
  ]

  await seedCollection('faqs', faqEntries.map(f => ({
    ...f,
    answer: textToLexical(f.answer),
  })), 'FAQs')

  // ── Resources ─────────────────────────────────────────────────────────
  await seedCollection('resources', [
    { title: 'FloorScore Indoor Air Quality', description: 'Learn how FloorScore certification ensures hard surface flooring meets California Section 01350 VOC emission standards.', type: 'sustainability', externalUrl: 'https://rfci.com/floorscore/', order: 1 },
    { title: 'ASSURE Certification Overview', description: 'ASSURE verifies that rigid core luxury flooring meets uniform quality standards for indoor air quality, performance, heavy metals, and phthalates.', type: 'sustainability', externalUrl: 'https://rfci.com/resources/assurecertified/', order: 2 },
    { title: 'AFFIRM Sustainability Standard', description: 'AFFIRM is an ANSI-accredited sustainability certification for resilient flooring covering environmental, health, and social responsibility.', type: 'sustainability', externalUrl: 'https://rfci.com/affirm/', order: 3 },
    { title: 'Resilient Flooring Installation Guide', description: 'Best practices for subfloor preparation, adhesive selection, acclimation, and proper installation of resilient flooring products.', type: 'technical', externalUrl: 'https://rfci.com/resources/', order: 4 },
    { title: 'Recommended Work Practices for Removal of Resilient Floor Coverings', description: 'RFCI-recommended procedures for the safe removal of existing resilient flooring, including guidelines for handling older materials.', type: 'technical', externalUrl: 'https://rfci.com/installation/', order: 5 },
    { title: 'NSF/ANSI 332 Assessment Standard', description: 'The sustainability assessment standard for resilient floor coverings covering raw materials, manufacturing, long-term value, and end-of-life management.', type: 'standard', externalUrl: 'https://rfci.com/resources/', order: 6 },
    { title: 'Industry Wide EPDs (2024)', description: 'Updated 2024 Environmental Product Declarations for nine resilient flooring product types, based on ISO 14025 and ISO 14040 standards.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 7 },
    { title: 'Resilient Flooring Care & Maintenance', description: 'Comprehensive guide to cleaning, maintaining, and extending the lifecycle of all resilient flooring types.', type: 'technical', externalUrl: 'https://rfci.com/resources/', order: 8 },
    { title: 'Moisture Testing Standards', description: 'ASTM standards and procedures for testing subfloor moisture content before installing resilient flooring.', type: 'standard', externalUrl: 'https://rfci.com/installation/', order: 9 },
    { title: 'CEU: Resilient Flooring Verified and Certified!', description: 'AIA-approved continuing education course covering FloorScore, ASSURE, AFFIRM, and EPD certifications for resilient flooring.', type: 'technical', externalUrl: 'https://rfci.com/courses/resilient-flooring-verified-and-certified/', order: 10 },
    { title: 'CEU: Demystifying EPDs in Sustainable Design', description: 'AIA-approved course on understanding and utilizing Environmental Product Declarations for sustainable material specification.', type: 'sustainability', externalUrl: 'https://rfci.com/courses/demystifying-epds-in-sustainable-design/', order: 11 },
    { title: 'CEU: Resilient Flooring and Sustainability', description: 'Multi-attribute approach for selecting resilient flooring products to verify performance, durability, and material health attributes.', type: 'sustainability', externalUrl: 'https://rfci.com/courses/resilient-flooring-and-sustainability/', order: 12 },
    { title: 'CEU: Resilient Flooring and Materiality', description: 'Understanding the origin of material ingredients and how they are used to produce resilient floor products.', type: 'technical', externalUrl: 'https://rfci.com/courses/resilient-flooring-materiality/', order: 13 },
    { title: 'Heterogeneous Sheet Vinyl EPD', description: 'Industry Wide Environmental Product Declaration for heterogeneous (multi-layer) sheet vinyl flooring.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 14 },
    { title: 'Rigid Core SPC EPD', description: 'Industry Wide Environmental Product Declaration for rigid core SPC (Stone Polymer Composite) flooring.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 15 },
    { title: 'Rigid Core WPC EPD', description: 'Industry Wide Environmental Product Declaration for rigid core WPC (Wood Polymer Composite) flooring.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 16 },
    { title: 'VCT EPD', description: 'Industry Wide Environmental Product Declaration for vinyl composition tile (VCT) flooring products.', type: 'sustainability', externalUrl: 'https://rfci.com/environmental-product-declaration/', order: 17 },
  ], 'Resources')

  console.log('\n🌱 Seed complete.')
  await (payload.db as any).destroy?.()
  process.exit(0)
}

run().catch((err) => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
