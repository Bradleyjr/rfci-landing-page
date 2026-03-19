import { PRESS_RELEASES } from './press-releases'

export type Resource = {
  title: string
  slug: string
  description?: string
  type: 'technical' | 'video' | 'certification' | 'declaration' | 'article' | 'website' | 'press'
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
  // Certifications
  {
    title: 'AFFIRM\u2122 Certified',
    slug: 'affirm-certified',
    description:
      'Certified to AFFIRM\u2122 Certified Sustainability Assessment for Resilient Floor Coverings.',
    type: 'certification',
    category: 'Sustainability',
    iconName: 'certificate',
    externalUrl: 'https://rfci.com/resources/affirm-certified/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/NSF-ANSI-332-300x300.jpg',
    order: 1,
  },
  {
    title: 'ASSURE\u00AE Certified',
    slug: 'assure-certified',
    description:
      'ASSURE verifies that rigid core luxury flooring meets uniform quality standards for indoor air quality, performance, heavy metals, and phthalates.',
    type: 'certification',
    category: 'Sustainability',
    iconName: 'seal',
    externalUrl: 'https://rfci.com/resources/assurecertified/',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2023/06/Download-our-Information-flyer-English.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/RFCI-ASSURE-Certified-Green-space-v2-300x300.jpg',
    order: 2,
  },
  {
    title: 'FloorScore\u00AE',
    slug: 'floorscore',
    description:
      'FloorScore IAQ Certification means that a flooring product is independently certified by SCS to comply with the volatile organic compound emissions criteria of the California Section 01350 Program.',
    type: 'certification',
    category: 'Sustainability',
    iconName: 'shieldCheck',
    externalUrl: 'https://rfci.com/floorscore/',
    downloadUrl:
      'https://www.scsglobalservices.com/files/applications/ECS_APP_IAQFloorscoreApp_V2-0_082812.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/02/Untitled-design-95-300x300.png',
    order: 3,
  },

  // Declarations
  {
    title: 'Environmental Product Declaration',
    slug: 'environmental-product-declaration',
    description:
      'Transparent lifecycle reporting for resilient flooring products, including current 2024 industry-wide EPDs and archived 2019 declarations for reference.',
    type: 'declaration',
    category: 'Sustainability',
    externalUrl: 'https://rfci.com/environmental-product-declaration/',
    downloadUrl:
      'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10144_RFCI_Heterogeneous-Sheet_050924_compressed.pdf',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/02/earth-300x300-1-300x300.png',
    order: 4,
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

  // Videos - Flooring Types
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
    order: 10,
  },
  {
    title: 'Heterogeneous Sheet Vinyl',
    slug: 'heterogeneous-sheet-vinyl',
    description:
      'Resilient Flooring Type: Heterogeneous Sheet Vinyl. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Heterogeneous Sheet Vinyl',
    videoUrl: 'https://www.youtube.com/watch?v=3pWQnT0UWxM',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/10/Heterogeneous-Sheet-Vinyl-300x172.png',
    order: 11,
  },
  {
    title: 'Homogeneous Sheet Vinyl',
    slug: 'homogeneous-sheet-vinyl',
    description:
      'Resilient Flooring Type: Homogeneous Sheet Vinyl. Performance, production, construction, installation, and advantages.',
    type: 'video',
    category: 'Homogeneous Sheet Vinyl',
    externalUrl: 'https://rfci.com/resources/homogeneous-sheet-vinyl/',
    videoUrl: 'https://www.youtube.com/watch?v=Stq-QSVFnqM',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/09/homogeneous-sheet-replacement-300x300.jpeg',
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
    order: 14,
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
    order: 15,
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
    order: 16,
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
    order: 17,
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
    order: 18,
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
    order: 19,
  },
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
    order: 20,
  },

  // Videos - Educational
  {
    title: "Owner's Project Requirements (OPR)",
    slug: 'owners-project-requirements-opr',
    description:
      "Establish the owner's requirements for product selection, including performance characteristics, sustainability goals, and maintenance considerations.",
    type: 'video',
    category: 'Owner Project Requirements',
    externalUrl: 'https://rfci.com/resources/owners-project-requirements-opr/',
    videoUrl: 'https://www.youtube.com/watch?v=gnkNIsj5kjI',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/09/OPR-replacement-300x300.jpg',
    order: 21,
  },
  {
    title: 'Project Conditions',
    slug: 'project-conditions',
    description:
      'Understand importance of subfloor preparation for successful installation.',
    type: 'video',
    category: 'Matter of Practice',
    externalUrl: 'https://rfci.com/resources/project-conditions/',
    videoUrl: 'https://www.youtube.com/watch?v=wbJXGYu6Wvk',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/09/Project-Conditions-Image-300x270.jpg',
    order: 22,
  },
  {
    title: 'Resilient Flooring & Materiality',
    slug: 'resilient-flooring-materiality',
    description: 'Transparency, Product Service Life, and Performance.',
    type: 'video',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/videos/resilient-flooring-materiality/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/11/Resilient-Flooring-Materiality-Course-Image-Cropped-300x194.png',
    order: 23,
  },
  {
    title: 'Verified and Certified! (Video)',
    slug: 'verified-certified-video',
    description:
      'Sustainable certifications and declarations for resilient flooring \u2014 FloorScore, ASSURE, AFFIRM, and Environmental Product Declarations.',
    type: 'video',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/videos/resilient-flooring-verified-and-certified/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2024/04/Verified_Certified_Azul-Arc_CEU-Program_Resource-Hub-300x173.png',
    order: 24,
  },

  // Articles
  {
    title: 'Resilient Flooring: The Sustainable Specification',
    slug: 'resilient-flooring-sustainable-specification',
    description:
      'How resilient flooring contributes to sustainable building design through lifecycle performance, recyclability, and environmental certifications.',
    type: 'article',
    category: 'Sustainability',
    externalUrl:
      'https://rfci.com/resources/resilient-flooring-the-sustainable-specification/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/11/LVT-Armstrong-Floors-300x300.jpeg',
    order: 25,
    body: `<h2>Why Resilient Flooring is the Sustainable Choice</h2>
<p>Resilient flooring has emerged as one of the most sustainable flooring categories available to architects, designers, and facility managers. With a combination of long product service life, low maintenance requirements, and growing recyclability, resilient flooring delivers measurable environmental benefits across every phase of the building lifecycle.</p>
<h3>Lifecycle Performance</h3>
<p>Resilient flooring products are engineered for durability. Vinyl composition tile (VCT), luxury vinyl tile (LVT), rubber, linoleum, and other resilient categories routinely deliver 20+ year service lives in commercial applications. This longevity reduces the frequency of replacement, lowering both cost and environmental impact over the life of a building.</p>
<h3>Indoor Air Quality</h3>
<p>Programs like FloorScore ensure that resilient flooring meets the most stringent VOC emissions standards. Hard surface flooring does not trap dust, allergens, or moisture the way soft surfaces can, contributing to healthier indoor environments for building occupants.</p>
<h3>Environmental Product Declarations</h3>
<p>RFCI publishes Industry Wide Environmental Product Declarations (EPDs) for nine resilient flooring product types. These third-party verified documents provide transparent lifecycle environmental impact data, enabling architects and specifiers to make informed decisions and earn green building credits under LEED, Green Globes, and other rating systems.</p>`,
  },
  {
    title: 'Understanding Material Health in Resilient Flooring',
    slug: 'understanding-material-health',
    description:
      'A guide to material health transparency, ingredient disclosure, and the role of AFFIRM certification in resilient flooring.',
    type: 'article',
    category: 'Sustainability',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    order: 31,
    body: `<h2>What is Material Health?</h2>
<p>Material health refers to the impact that the chemical composition of building products has on human health and the environment. As sustainability standards evolve, specifiers increasingly demand transparency about what goes into the products they specify \u2014 not just how those products perform.</p>
<h3>The Role of AFFIRM Certification</h3>
<p>AFFIRM Certified is RFCI\u2019s multi-attribute sustainability certification built on an ANSI-accredited standard. It evaluates resilient flooring products across three impact categories: Environmental, Health & Wellness, and Social Responsibility. The program provides two certification levels, giving manufacturers a clear pathway to demonstrate their commitment to material health and sustainability.</p>
<h3>Ingredient Transparency</h3>
<p>Modern specification increasingly requires ingredient-level transparency. Health Product Declarations (HPDs), Declare labels, and programs like AFFIRM provide the framework for manufacturers to disclose product ingredients and demonstrate compliance with health-based thresholds for substances of concern.</p>`,
  },
  {
    title: 'Glossary',
    slug: 'glossary',
    description:
      'An A–Z glossary of resilient flooring terms, certifications, product types, and technical language used throughout RFCI resources.',
    type: 'article',
    category: 'Reference',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
    order: 32,
  },
  {
    title: 'Safety, Slip Resistance & ADA',
    slug: 'safety-slip-resistance',
    description:
      'Updated guidance on resilient flooring safety, slip resistance, and current ADA framing for stable, firm, slip-resistant surfaces.',
    type: 'article',
    category: 'Technical Information',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    order: 33,
    body: `<h2>Safety starts with the surface</h2>
<p>Resilient flooring is specified in settings where safety, cleanability, durability, and maintenance all matter at the same time. Slip resistance should be evaluated as part of the entire flooring system, including the product, finish, maintenance protocol, contaminants, expected footwear, and the way the space will actually be used.</p>
<h3>Slip Resistance and Resilient Flooring</h3>
<p>Slip resistance describes a surface’s ability to help counteract loss of traction. It is influenced by many variables, including surface texture, wear, soil load, wet or contaminated conditions, footwear, and maintenance practices. Coefficient of friction data can be informative, but it should not be treated as a universal pass-or-fail rule across all occupancies.</p>
<p>For resilient flooring projects, the goal is not to chase a single lab number. The goal is to specify a surface and maintenance strategy appropriate to the actual environment, then coordinate that decision with the flooring manufacturer, adhesive system, transitions, and cleaning program.</p>
<h3>Americans with Disabilities Act</h3>
<p>Older ADA guidance is often quoted for static coefficient of friction values of 0.6 on level surfaces and 0.8 on ramps. Those figures came from the appendix to the 1991 ADA Accessibility Guidelines and were later withdrawn after significant criticism of the science behind using those numbers as requirements.</p>
<p>Under the 2010 ADA Standards for Accessible Design, the active expectation is that floor and ground surfaces be stable, firm, and slip resistant. For today’s projects, that broader performance standard is the appropriate reference point.</p>
<h3>Specifier checklist</h3>
<ul>
<li>Confirm the flooring product is intended for the occupancy, traffic pattern, and cleaning protocol.</li>
<li>Review manufacturer guidance for wet areas, transitions, ramps, entrances, and maintenance products.</li>
<li>Coordinate slip-resistance expectations with the full flooring assembly instead of relying on one coefficient value in isolation.</li>
<li>Document maintenance procedures, because improper finish build-up, residue, or contamination can change in-use performance.</li>
</ul>`,
  },
  {
    title: 'Nine Steps to Superior Sustainability',
    slug: 'nine-steps-to-superior-sustainability',
    description:
      'A refreshed sustainability framework for resilient flooring that now includes AFFIRM and the RFCI ecomedes product database.',
    type: 'article',
    category: 'Sustainability',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
    order: 34,
    body: `<h2>Nine steps to superior sustainability</h2>
<p>Resilient flooring sustainability is no longer defined by a single claim. It is built through transparency, verified performance, responsible manufacturing, and better decision-making tools for specifiers. This updated framework reflects the programs and resources RFCI uses today.</p>
<ol>
<li><strong>Design for long service life.</strong> Durable floors that perform in-use reduce premature replacement and help lower lifecycle impacts.</li>
<li><strong>Prioritize healthy indoor environments.</strong> Programs such as FloorScore verify low-emitting products for better indoor air quality.</li>
<li><strong>Document environmental impacts.</strong> Industry-wide Environmental Product Declarations provide standardized lifecycle reporting for resilient flooring types.</li>
<li><strong>Advance material health.</strong> AFFIRM Certified helps specifiers evaluate environmental, health and wellness, and social responsibility criteria through an ANSI-based framework.</li>
<li><strong>Verify rigid core quality.</strong> ASSURE supports confidence in rigid core product performance, chemistry screening, and structural testing.</li>
<li><strong>Use better specification tools.</strong> The RFCI ecomedes database gives designers and specifiers one place to review certifications, declarations, and green building attributes.</li>
<li><strong>Support responsible manufacturing.</strong> Manufacturers continue improving raw material sourcing, process efficiency, and waste reduction.</li>
<li><strong>Expand recycling and recovery.</strong> Take-back programs, post-installation recovery, and landfill diversion remain important parts of resilient flooring stewardship.</li>
<li><strong>Keep educating the market.</strong> CEUs, technical papers, and shared standards help teams make better product decisions over time.</li>
</ol>
<p>Sustainability works best when the full picture is visible. Certifications, declarations, and searchable product data make it easier to specify resilient flooring with confidence.</p>`,
  },

  // External Websites
  {
    title: 'Beautifully Responsible',
    slug: 'beautifully-responsible',
    type: 'website',
    category: 'Resilient Flooring Benefits',
    externalUrl: 'https://beautifullyresponsible.com/articles/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/BR-replacement-300x197.jpg',
    order: 26,
  },
  {
    title: 'Building Transparency',
    slug: 'building-transparency',
    type: 'website',
    category: 'Sustainability',
    externalUrl: 'https://www.buildingtransparency.org/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2022/02/Untitled-design-90-300x300-1-300x300.png',
    order: 27,
  },
  {
    title: 'Chemistry in Building and Construction',
    slug: 'chemistry-building-construction',
    type: 'website',
    category: 'Chemistry',
    externalUrl: 'https://www.buildingwithchemistry.org/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/Untitled-design-75-300x300.png',
    order: 28,
  },
  {
    title: 'INSTALL International Standards and Training Alliance',
    slug: 'install-standards-training',
    type: 'website',
    category: 'Installation',
    externalUrl: 'https://installfloors.org/',
    thumbnailUrl:
      'https://rfci.com/wp-content/uploads/2021/12/Untitled-design-100-300x300.png',
    order: 29,
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
    internalUrl: '/testimonial-videos',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop',
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
