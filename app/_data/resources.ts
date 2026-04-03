import { PRESS_RELEASES } from './press-releases'

export type Resource = {
  title: string
  slug: string
  description?: string
  type: 'technical' | 'video' | 'certification' | 'declaration' | 'article' | 'guide' | 'website' | 'press'
  category?: string
  iconName?: string
  internalUrl?: string
  externalUrl?: string
  downloadUrl?: string
  videoUrl?: string
  thumbnailUrl?: string
  body?: string
  date?: string
  order: number
}

export const RESOURCES: Resource[] = [
  // Certifications (ordered: FloorScore → ASSURE → AFFIRM)
  {
    title: 'FloorScore\u00AE',
    slug: 'floorscore',
    description:
      'FloorScore IAQ Certification means that a flooring product is independently certified by SCS to comply with the volatile organic compound emissions criteria of the California Section 01350 Program.',
    type: 'certification',
    category: 'Sustainability',
    iconName: 'shieldCheck',
    internalUrl: '/certifications/floorscore',
    downloadUrl:
      'https://www.scsglobalservices.com/files/applications/ECS_APP_IAQFloorscoreApp_V2-0_082812.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/02/Untitled-design-95-300x300.png',
    order: 1,
  },
  {
    title: 'ASSURE\u00AE Certified',
    slug: 'assure-certified',
    description:
      'ASSURE verifies that rigid core luxury flooring meets uniform quality standards for indoor air quality, performance, heavy metals, and ortho-phthalates.',
    type: 'certification',
    category: 'Sustainability',
    iconName: 'seal',
    internalUrl: '/certifications/assure',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2023/06/Download-our-Information-flyer-English.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/RFCI-ASSURE-Certified-Green-space-v2-300x300.jpg',
    order: 2,
  },
  {
    title: 'AFFIRM\u2122 Certified',
    slug: 'affirm-certified',
    description:
      'Certified to AFFIRM\u2122 Certified Sustainability Assessment for Resilient Floor Coverings.',
    type: 'certification',
    category: 'Sustainability',
    iconName: 'certificate',
    internalUrl: '/certifications/affirm',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/NSF-ANSI-332-300x300.jpg',
    order: 3,
  },

  // Technical Papers
  {
    title: 'Defining Carbon',
    slug: 'defining-carbon',
    type: 'technical',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Final-Defining-Carbon-Resource_2_27_2024.pdf',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Final-Defining-Carbon-Resource_2_27_2024.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Defining-Carbon_Resource-Hub_Azul-Arc_AB_Rubber-300x198.jpg',
    order: 5,
  },
  {
    title: 'Maintenance Application Guide',
    slug: 'maintenance-application-guide',
    type: 'technical',
    category: 'Technical Information',
    externalUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Final-Maintenance-Guide_2_27_2024_w-APPENDIX-A.pdf',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Final-Maintenance-Guide_2_27_2024_w-APPENDIX-A.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Maintenance_Photo_Azul-Arc-Resource-Hub_Teknoflor-300x203.jpeg',
    order: 6,
  },
  {
    title: 'Moisture Mitigation',
    slug: 'moisture-mitigation',
    type: 'technical',
    category: 'Installation',
    externalUrl:
      'https://rfci.com/wp-content/uploads/2022/02/Moisture-and-Resilient-Floor-Covering_09_29_2022_Final.pdf',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2022/02/Moisture-and-Resilient-Floor-Covering_09_29_2022_Final.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/02/MM2-300x200.jpg',
    order: 7,
  },
  {
    title: 'Resilient Flooring & Castors',
    slug: 'resilient-flooring-castors',
    type: 'technical',
    category: 'Technical Information',
    externalUrl:
      'https://rfci.com/wp-content/uploads/2024/07/Castor-Resource_FINAL_5_13_2024.pdf',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2024/07/Castor-Resource_FINAL_5_13_2024.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2024/07/Castor-Resource-Hub_Photo-300x199.jpeg',
    order: 8,
  },
  {
    title: 'Verified and Certified! (Technical Paper)',
    slug: 'verified-certified-paper',
    type: 'technical',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Final-Certifications-Resource_2_27_2024.pdf',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Final-Certifications-Resource_2_27_2024.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Verified_Certified_Azul-Arc_Resource_Hub_Mannington-Mills-1-300x149.jpeg',
    order: 9,
  },

  // Videos - Featured CEU (first 4 in video library)
  {
    title: 'Resilient Flooring: Verified and Certified!',
    slug: 'verified-certified-video',
    description:
      'Certifications, declarations, and ecolabels provide sustainability and health and wellness information that subsequently supports requirements in building rating systems.',
    type: 'video',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/courses/resilient-flooring-verified-and-certified/',
    videoUrl: 'https://vimeo.com/889986028',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Verified_Certified_Azul-Arc_CEU-Program_Resource-Hub-300x173.png',
    order: 1,
  },
  {
    title: 'Demystifying EPDs in Sustainable Design',
    slug: 'demystifying-epds',
    description:
      'Environmental Product Declarations (EPDs) can be a powerful tool to use when choosing materials for commercial projects. Understanding the ins & outs of this valuable tool has never been more necessary.',
    type: 'video',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/courses/demystifying-epds-in-sustainable-design/',
    videoUrl: 'https://vimeo.com/770737791',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/11/Optimized-3-500x300.jpg',
    order: 2,
  },
  {
    title: 'Resilient Flooring and Sustainability',
    slug: 'resilient-flooring-sustainability',
    description:
      'It is important for a specifier to utilize a multi-attribute approach for the selection of resilient flooring products to verify performance, durability, sustainability, and material health attributes.',
    type: 'video',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/courses/resilient-flooring-and-sustainability/',
    videoUrl: 'https://vimeo.com/759120070',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/10/Optimized-2-500x300.jpg',
    order: 3,
  },
  {
    title: 'Resilient Flooring and Materiality',
    slug: 'resilient-flooring-materiality',
    description:
      'When specifying products for the built environment, it is important to transparently understand the origin of material ingredients, how materials are used to produce resilient floor products.',
    type: 'video',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/courses/resilient-flooring-materiality/',
    videoUrl: 'https://vimeo.com/889960016',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/11/Resilient-Flooring-Materiality-Course-Image-Cropped-300x194.png',
    order: 4,
  },

  // Videos - Flooring Types (client-specified order after featured CEU videos)
  {
    title: 'Vinyl Resilient Flooring Types',
    slug: 'vinyl-resilient-flooring-types',
    description:
      'Resilient Flooring Type: Vinyl. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'All Vinyl Flooring Types',
    externalUrl: 'https://rfci.com/resources/vinyl-resilient-flooring-types/',
    videoUrl: 'https://www.youtube.com/watch?v=UEpvCY2Gplc',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/09/vinyl-res-flooring-types-1-300x300.jpg',
    order: 5,
  },
  {
    title: 'Rigid Core: SPC & WPC',
    slug: 'rigid-core-spc-wpc',
    description:
      'Resilient Flooring Type: Rigid Core. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Rigid Core',
    externalUrl: 'https://rfci.com/resources/rigid-core-spc-wpc/',
    videoUrl: 'https://www.youtube.com/watch?v=LJUFYGEOlbU',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/rigid-core-replacement-300x208.jpeg',
    order: 6,
  },
  {
    title: 'Luxury Vinyl Tile & Luxury Vinyl Plank',
    slug: 'luxury-vinyl-tile-plank',
    description:
      'Resilient Flooring Type: LVT/LVP. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Luxury Vinyl Tile/Luxury Vinyl Plank',
    externalUrl:
      'https://rfci.com/resources/luxury-vinyl-tile-luxury-vinyl-plank/',
    videoUrl: 'https://www.youtube.com/watch?v=EEeOxO_3ZS0',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/Luxury-Vinyl-Tile-Luxury-Vinyl-Plank-300x200.jpg',
    order: 7,
  },
  {
    title: 'Sheet Vinyl \u2014 Homogeneous',
    slug: 'homogeneous-sheet-vinyl',
    description:
      'Resilient Flooring Type: Sheet Vinyl (Homogeneous). Through-body single-layer construction. Performance, production, installation, and advantages.',
    type: 'video',
    category: 'Sheet Vinyl',
    externalUrl: 'https://rfci.com/resources/homogeneous-sheet-vinyl/',
    videoUrl: 'https://www.youtube.com/watch?v=Stq-QSVFnqM',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/09/homogeneous-sheet-replacement-300x300.jpeg',
    order: 8,
  },
  {
    title: 'Sheet Vinyl \u2014 Heterogeneous',
    slug: 'heterogeneous-sheet-vinyl',
    description:
      'Resilient Flooring Type: Sheet Vinyl (Heterogeneous). Multi-layer construction with printed design layer. Performance, production, installation, and advantages.',
    type: 'video',
    category: 'Sheet Vinyl',
    videoUrl: 'https://www.youtube.com/watch?v=3pWQnT0UWxM',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/Heterogeneous-Sheet-Vinyl-300x172.png',
    order: 9,
  },
  {
    title: 'Solid Vinyl Tile',
    slug: 'solid-vinyl-tile',
    description:
      'Resilient Flooring Type: Solid Vinyl Tile. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Solid Vinyl Tile',
    externalUrl: 'https://rfci.com/resources/solid-vinyl-tile/',
    videoUrl: 'https://www.youtube.com/watch?v=lyXNSENWFtQ',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/solid-vinyl-tile-replacement-300x200.jpeg',
    order: 10,
  },
  {
    title: 'Vinyl Composition Tile (VCT)',
    slug: 'vinyl-composition-tile-vct',
    description:
      'Resilient Flooring Type: Vinyl Composition Tile. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Vinyl Composition Tile',
    externalUrl: 'https://rfci.com/resources/vinyl-composition-tile-vct/',
    videoUrl: 'https://www.youtube.com/watch?v=QvSHgL-ArT4',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/09/VCT-replacement-2-225x300.jpg',
    order: 11,
  },
  {
    title: 'Rubber Tile & Sheet',
    slug: 'rubber-tile-sheet',
    description:
      'Resilient Flooring Type: Rubber Tile & Sheet. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Rubber',
    externalUrl: 'https://rfci.com/resources/rubber-tile-sheet/',
    videoUrl: 'https://www.youtube.com/watch?v=3PHNbahJdsw',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/Rubber-Tile-300x300.jpg',
    order: 12,
  },
  {
    title: 'Linoleum Tile & Sheet',
    slug: 'linoleum-tile-sheet',
    description:
      'Resilient Flooring Type: Linoleum. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Linoleum',
    externalUrl: 'https://rfci.com/resources/linoleum-tile-sheet/',
    videoUrl: 'https://www.youtube.com/watch?v=lNrlQIE0QmU',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/linoleum-replacement-1-300x300.jpg',
    order: 13,
  },
  {
    title: 'Other Polymeric Resilient Flooring',
    slug: 'other-polymeric-resilient-flooring',
    description:
      'Resilient Flooring Type: Other Polymers & Composites. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Other Polymers & Composites',
    externalUrl:
      'https://rfci.com/resources/other-polymeric-resilient-flooring/',
    videoUrl: 'https://www.youtube.com/watch?v=1KP4k1VfsrI',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/Other-Polymers-Composites-300x156.png',
    order: 14,
  },
  {
    title: 'Cork Tile',
    slug: 'cork-tile',
    description:
      'Resilient Flooring Type: Cork. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Cork',
    externalUrl: 'https://rfci.com/resources/cork-tile/',
    videoUrl: 'https://www.youtube.com/watch?v=1WPqNn3iFDM',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/cork-tile-300x189.png',
    order: 15,
  },


  // Articles
  {
    title: 'Resilient Flooring: The Sustainable Specification',
    slug: 'resilient-flooring-sustainable-specification',
    description:
      'How resilient flooring contributes to sustainable building design through lifecycle performance, recyclability, and environmental certifications.',
    type: 'article',
    category: 'Sustainability',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/11/LVT-Armstrong-Floors-300x300.jpeg',
    body: '<p class="text-label font-bold tracking-widest uppercase text-rfci-black/50 mb-6">ARTICLE SOURCE: The Construction Specifier</p><a href="https://www.constructionspecifier.com/publications/de/202110/index.html" target="_blank" rel="noopener noreferrer"><img src="https://rfci.com/wp-content/uploads/2021/11/LVT-Armstrong-Floors.jpeg" alt="Resilient Flooring: The Sustainable Specification" class="w-full mb-8 hover:opacity-90 transition-opacity duration-200" /></a><p>For more details, please click <a href="https://www.constructionspecifier.com/publications/de/202110/index.html" target="_blank" rel="noopener noreferrer">here</a>.</p>',
    order: 25,
  },
  {
    title: 'Glossary',
    slug: 'glossary',
    description:
      'An A\u2013Z glossary of resilient flooring terms, certifications, product types, and technical language used throughout RFCI resources.',
    type: 'guide',
    category: 'Reference',
    thumbnailUrl:
      '/images/inspiration/applications/homes/EL04-RS.jpg',
    order: 32,
  },

  // External Websites
  {
    title: 'Beautifully Responsible',
    slug: 'beautifully-responsible',
    type: 'website',
    category: 'Resilient Flooring Benefits',
    externalUrl: 'https://beautifullyresponsible.com',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/BR-replacement-300x197.jpg',
    order: 26,
  },
  {
    title: 'RFCI + ecomedes Product Database',
    slug: 'rfci-ecomedes',
    type: 'website',
    category: 'Sustainability',
    externalUrl: 'https://rfci.ecomedes.com/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/08/ecomedes-logo-300x300.jpg',
    order: 30,
  },

  {
    title: 'Testimonial Video Archive',
    slug: 'testimonial-videos',
    description:
      'A dedicated home for RFCI testimonial videos from members, partners, and industry stakeholders.',
    type: 'website',
    category: 'Videos',
    internalUrl: '/about#testimonials',
    thumbnailUrl:
      '/images/inspiration/applications/restaurants/33677_HerringboneAuroraOak-ROOM-1.jpg',
    order: 36,
  },

  // Press Releases
  ...PRESS_RELEASES.map((pr, i) => ({
    title: pr.title,
    slug: pr.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    description: pr.excerpt,
    type: 'press' as const,
    category: pr.category,
    externalUrl: pr.pdfUrl || pr.externalUrl,
    date: pr.date,
    order: 200 + i,
  })),
]
