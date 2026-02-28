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
