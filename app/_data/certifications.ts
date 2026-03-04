export type Certification = {
  slug: string
  title: string
  iconName: 'shieldCheck' | 'fileText' | 'leaf' | 'globe'
  description: string
  image?: { url: string }
  stats?: Array<{ value: string; label: string }>
  benefits?: Array<{ title: string; description: string }>
  process?: Array<{ step: string; description: string }>
  downloads?: Array<{ title: string; description?: string; url: string; year?: string; category?: string }>
  ctaText?: string
  ctaUrl?: string
  order: number
}

export const CERTIFICATIONS: Certification[] = [
  {
    slug: 'floorscore',
    title: 'Lorem Ipsum\u00ae',
    iconName: 'shieldCheck',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    stats: [
      { value: '10,000+', label: 'Certified Products' },
      { value: '90%', label: 'Of time spent indoors' },
    ],
    benefits: [
      { title: 'Lorem Ipsum Dolor', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.' },
      { title: 'Sit Amet Consectetur', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.' },
      { title: 'Adipiscing Elit Sed', description: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.' },
      { title: 'Eiusmod Tempor Magna', description: 'Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.' },
      { title: 'Veniam Nostrud Labore', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.' },
      { title: 'Aliquip Commodo Nisi', description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
    ],
    process: [
      { step: 'Product Submission', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
      { step: 'Independent Emissions Testing', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.' },
      { step: 'SCS Compliance Review', description: 'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.' },
      { step: 'Manufacturing Audit', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.' },
      { step: 'Certification & Annual Renewal', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.' },
    ],
    downloads: [
      { title: 'FloorScore Certification Application', description: 'SCS Global Services application form for FloorScore IAQ certification.', url: 'https://www.scsglobalservices.com/files/applications/ECS_APP_IAQFloorscoreApp_V2-0_082812.pdf', category: 'Program Documents' },
    ],
    ctaText: 'Find FloorScore Certified Products',
    ctaUrl: 'https://www.scsglobalservices.com/services/floorscore',
    order: 1,
  },
  {
    slug: 'assure',
    title: 'Dolor Sit\u00ae Amet',
    iconName: 'leaf',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur esse possimus omnes quas voluptates sit aspernatur aut odit aut.',
    stats: [
      { value: 'WPC + SPC', label: 'Rigid Core Products' },
      { value: '100PPM', label: 'Max Heavy Metals' },
    ],
    benefits: [
      { title: 'Dolor Reprehenderit', description: 'At explicabo ipsa sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus.' },
      { title: 'Voluptate Velit', description: 'Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.' },
      { title: 'Cillum Dolore Fugiat', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.' },
      { title: 'Pariatur Excepteur', description: 'Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.' },
      { title: 'Occaecat Cupidatat', description: 'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor.' },
      { title: 'Proident Sunt Culpa', description: 'Amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam.' },
    ],
    process: [
      { step: 'Application to SCS Global', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua.' },
      { step: 'IAQ Emissions Testing', description: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.' },
      { step: 'Performance & Chemistry Testing', description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.' },
      { step: 'Manufacturing Facility Audit', description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error voluptatem.' },
      { step: 'Certification & Badge Use', description: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.' },
    ],
    downloads: [
      { title: 'ASSURE Certified Information Flyer (English)', description: 'Program overview and certification requirements for rigid core luxury flooring.', url: 'https://rfci.com/wp-content/uploads/2023/06/Download-our-Information-flyer-English.pdf', category: 'Program Documents' },
      { title: 'ASSURE Certified Information Flyer (Spanish)', description: 'Resumen del programa y requisitos de certificaci\u00f3n.', url: 'https://rfci.com/wp-content/uploads/2023/06/Download-our-Information-flyer-Spanish.pdf', category: 'Program Documents' },
    ],
    ctaText: 'Learn About ASSURE Certification',
    ctaUrl: 'https://rfci.com/resources/assurecertified/',
    order: 2,
  },
  {
    slug: 'affirm',
    title: 'Consectetur\u2122 Adipiscing',
    iconName: 'globe',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
    stats: [
      { value: 'ANSI', label: 'Accredited Standard' },
      { value: 'Level 1 + 2', label: 'Certification Tiers' },
    ],
    benefits: [
      { title: 'Lorem Amet Dolor', description: 'Consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim.' },
      { title: 'Ipsum Sit Consectetur', description: 'Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in.' },
      { title: 'Adipiscing Sed Eiusmod', description: 'Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
      { title: 'Tempor Incididunt Labore', description: 'Qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.' },
      { title: 'Dolore Magna Aliqua', description: 'Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.' },
      { title: 'Minim Veniam Quis', description: 'Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam.' },
    ],
    process: [
      { step: 'Application', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { step: 'Level 1 Compliance Review', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.' },
      { step: 'Level 2 Assessment (Optional)', description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt.' },
      { step: 'Third-Party Verification', description: 'Culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
      { step: 'Certification & Transparency Scorecard', description: 'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.' },
    ],
    ctaText: 'Find AFFIRM Certified Products',
    ctaUrl: 'https://rfci.ecomedes.com/',
    order: 3,
  },
  {
    slug: 'epd',
    title: 'Sed Eiusmod Tempor Incididunt',
    iconName: 'globe',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur esse possimus omnes quas voluptates sit aspernatur aut odit aut fugit sed.',
    stats: [
      { value: 'ISO 14025', label: 'EPD Standard' },
      { value: '9', label: 'Product Types Covered' },
    ],
    benefits: [
      { title: 'Nostrud Exercitation', description: 'Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.' },
      { title: 'Ullamco Laboris Nisi', description: 'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad.' },
      { title: 'Aliquip Commodo Ea', description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.' },
      { title: 'Consequat Duis Aute', description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.' },
      { title: 'Irure Dolor Velit', description: 'Mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.' },
      { title: 'Esse Cillum Dolore', description: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas.' },
    ],
    process: [
      { step: 'Life Cycle Assessment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.' },
      { step: 'Product Category Rules Alignment', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.' },
      { step: 'Third-Party Verification', description: 'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
      { step: 'EPD Publication & Registration', description: 'Qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
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
    order: 4,
  },
]
