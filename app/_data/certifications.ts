export type Certification = {
  slug: string
  title: string
  iconName: 'shieldCheck' | 'seal' | 'certificate' | 'globe'
  logoUrl?: string
  description: string
  image?: { url: string }
  stats?: Array<{ value: string; label: string }>
  benefits?: Array<{ title: string; description: string }>
  process?: Array<{ step: string; description: string }>
  downloads?: Array<{ title: string; description?: string; url: string; year?: string; category?: string; isLink?: boolean }>
  faqs?: Array<{ question: string; answer: string }>
  recognizedPrograms?: string[]
  certifiedProductsUrl?: string
  contactInfo?: { name: string; phone: string; email: string; organization: string }
  processLabel?: string
  processHeading?: string
  getStartedText?: string
  getStartedDescription?: string
  getStartedUrl?: string
  ctaText?: string
  ctaUrl?: string
  order: number
}

export const CERTIFICATIONS: Certification[] = [
  {
    slug: 'floorscore',
    title: 'FloorScore\u00ae',
    iconName: 'shieldCheck',
    logoUrl: '/media/cert-logos/floorscore.svg',
    description: 'FloorScore\u00ae is the flooring industry\'s most recognized indoor air quality (IAQ) certification. Independently administered by SCS Global Services, it verifies that a product meets California Section 01350 VOC emissions standards \u2014 one of the most stringent IAQ benchmarks in the world.',
    stats: [
      { value: 'CA 01350', label: 'Emissions Standard' },
      { value: 'SCS Global', label: 'Certification Body' },
    ],
    benefits: [
      { title: 'Indoor Air Quality Protection', description: 'Certifies that VOC emissions meet California Section 01350 \u2014 a stringent IAQ standard for building materials in North America.' },
      { title: 'Independent SCS Verification', description: 'SCS Global Services reviews all emissions test reports, determines compliance, and conducts periodic manufacturing plant inspections.' },
      { title: 'LEED & Green Building Credits', description: 'Recognized by LEED, WELL, BREEAM, CHPS, Green Globes, and many other green building rating systems.' },
      { title: 'Healthier Occupant Environments', description: 'Most people spend over 90% of their time indoors. FloorScore-certified products contribute measurably to cleaner air and healthier occupants.' },
      { title: 'Ongoing Compliance', description: 'Certification requires annual desk reviews, periodic manufacturing audits, and documented quality control \u2014 not a one-time stamp.' },
    ],
    process: [
      { step: 'Product Submission', description: 'Manufacturer submits products for testing under the FloorScore program through SCS Global Services.' },
      { step: 'Independent Emissions Testing', description: 'Products are tested in accredited laboratories for VOC emissions per California Standard Method v1.2.' },
      { step: 'SCS Compliance Review', description: 'SCS reviews all test reports and determines whether results meet the concentration limits for listed VOCs under CA Section 01350.' },
      { step: 'Manufacturing Audit', description: 'SCS conducts on-site manufacturing plant inspections to review formulas, processing, and quality control procedures.' },
      { step: 'Certification & Annual Renewal', description: 'Certified products are listed in the SCS database, can display the FloorScore mark, and undergo annual desk reviews to maintain certification.' },
    ],
    downloads: [
      { title: 'FloorScore Product Certification Requirements', description: 'Full program requirements and certification details from SCS Global Services.', url: 'https://www.scsglobalservices.com/services/floorscore', category: 'Links & Documents', isLink: true },
      { title: 'FloorScore Certification Application', description: 'Apply for FloorScore IAQ certification through SCS Global Services.', url: 'https://www.scsglobalservices.com/files/applications/ECS_APP_IAQFloorscoreApp_V2-0_082812.pdf', category: 'Links & Documents' },
      { title: 'CDPH Standard Method v1.1', description: 'California Standard Method for Testing and Evaluation of VOC Emissions from Indoor Sources.', url: 'https://www.scsglobalservices.com/files/standards/CDPH_EHLB_StandardMethod_V1_1_2010.pdf', category: 'Links & Documents' },
    ],
    faqs: [
      { question: 'Where can I find a list of flooring products that have earned the FloorScore\u00ae seal?', answer: 'A current list is maintained by SCS Global Services at scscertified.com.' },
      { question: 'In short, what does FloorScore\u00ae require?', answer: 'To earn the FloorScore seal, a product must satisfy requirements including: testing demonstrating compliance with emission concentrations for listed VOCs under California Section 01350; manufacturing facility on-site audits and yearly surveillance audits; annual product re-testing; product record keeping; and a documented quality control plan.' },
      { question: 'What does IAQ stand for?', answer: 'Indoor Air Quality (IAQ) refers to the condition of the air inside buildings\u2014especially as it relates to the health, comfort, and well-being of occupants. It is influenced by factors such as ventilation, humidity, and the presence of pollutants, including dust, allergens, and volatile organic compounds (VOCs)\u2014chemicals emitted from products like flooring, paints, and furnishings.' },
      { question: 'What are VOCs?', answer: 'Volatile Organic Compounds (VOCs) are a group of carbon-based chemicals that easily evaporate into the air at room temperature. They are commonly emitted from products such as paints, adhesives, flooring, and furnishings, and can impact IAQ (Indoor Air Quality) and occupant health depending on their concentration and exposure levels.' },
      { question: 'Why does IAQ matter to me?', answer: 'If you\u2019re like most people, you spend over 90% of your life indoors. Poor IAQ can be a factor in a variety of health problems, such as headaches and dizziness and more serious long-term effects.' },
      { question: 'Are some people more sensitive to VOCs than others?', answer: 'Yes. During installation when VOC levels can be higher, people who are sensitive to odors or chemicals should avoid the area. FloorScore certification does not include the installation process.' },
    ],
    recognizedPrograms: [
      'U.S. Green Building Council LEED Rating System',
      'LEED for New Construction (NC)',
      'LEED for Commercial Interiors (CI)',
      'LEED for Core and Shell (CS)',
      'LEED for Healthcare (HC)',
      'LEED for Schools',
      'LEED for Homes',
      'LEED for Existing Buildings (EB)',
      'Green Guide for Health Care',
      'ANSI/GBI 01-2010 Green Building Assessment Protocol',
      'ASHRAE/USGBC/IES Standard 189.1',
      'NAHB ANSI National Green Building Standard',
      'BREEAM',
      'Collaborative for High Performance Schools (CHPS)',
      'NSF/ANSI 332 Sustainability Assessment for Resilient Floor Coverings',
      'EPA Tools for Schools Program',
    ],
    certifiedProductsUrl: 'https://www.scsglobalservices.com/certified-green-products-guide?category=63&program=25',
    getStartedText: 'Apply for FloorScore Certification',
    getStartedDescription: 'FloorScore certification is administered by SCS Global Services. Contact SCS to submit your product for emissions testing and begin the certification process.',
    getStartedUrl: 'https://www.scsglobalservices.com/services/floorscore',
    ctaText: 'Find FloorScore Certified Products',
    ctaUrl: 'https://www.scsglobalservices.com/certified-green-products-guide?category=63&program=25',
    image: { url: '/media/cert-photos/floorscore.png' },
    order: 1,
  },
  {
    slug: 'assure',
    title: 'ASSURE\u00ae Certified',
    iconName: 'seal',
    logoUrl: '/media/cert-logos/assure.svg',
    description: 'ASSURE\u00ae Certified was developed by RFCI to establish uniform quality standards for all rigid core luxury flooring (WPC and SPC) sold in North America, regardless of where it is manufactured. Products are independently tested and certified by SCS Global Services.',
    stats: [
      { value: 'WPC + SPC', label: 'Rigid Core Products' },
      { value: 'SCS Global', label: 'Certification Body' },
    ],
    benefits: [
      { title: 'Indoor Air Quality Assurance', description: 'Products must comply with CDPH Standard Method v1.2 at half the corresponding CREL \u2014 a stricter IAQ threshold than many competing certifications.' },
      { title: 'Performance & Vertical Deflection', description: 'Products must pass ASTM F3261 performance testing and include vertical deflection evaluation to confirm rigid core structural integrity under load.' },
      { title: 'Heavy Metals Screened', description: 'Tested for lead, hexavalent chromium, cadmium, and mercury via EPA SW 846 Method 3052. Products must meet established concentration thresholds.' },
      { title: 'Ortho-Phthalates Screened', description: 'Products are tested for individual and combined ortho-phthalates per ASTM F3414, CPSC-CH-C1001-09.4, or GB/T 22048-2008 and must meet established concentration limits.' },
      { title: 'Supply Chain Transparency', description: 'Manufacturers must maintain quality control procedures covering material suppliers, product traceability, chain of custody, and internal QC testing.' },
      { title: 'Specifier Confidence', description: 'ASSURE helps architects, designers, retailers, and end users identify rigid core products that meet a consistent, independently verified quality benchmark.' },
    ],
    process: [
      { step: 'Application to SCS Global', description: 'Contact SCS Global Services to begin the ASSURE certification process and submit product documentation.' },
      { step: 'IAQ Emissions Testing', description: 'Products undergo CDPH Standard Method v1.2 testing. Must meet concentration limits at half the corresponding CREL for listed VOCs.' },
      { step: 'Performance, Vertical Deflection & Chemistry Testing', description: 'Products are tested per ASTM F3261 and associated rigid core criteria for performance and vertical deflection, plus EPA SW 846 and ASTM F3414, CPSC-CH-C1001-09.4, or GB/T 22048-2008 for chemistry screening.' },
      { step: 'Manufacturing Facility Audit', description: 'On-site audit of the manufacturing facility confirms compliant quality control procedures.' },
      { step: 'Certification & Badge Use', description: 'Certified products earn the ASSURE Certified badge and are listed in the program directory.' },
    ],
    downloads: [
      { title: 'ASSURE Certified Information Flyer (English)', description: 'Program overview and certification requirements for rigid core luxury flooring.', url: 'https://rfci.com/wp-content/uploads/2023/06/Download-our-Information-flyer-English.pdf', category: 'Program Documents' },
      { title: 'ASSURE Certified Information Flyer (Chinese)', description: '\u4e2d\u6587\u7248\u672c \u2014 Program overview and certification requirements.', url: 'https://rfci.com/wp-content/uploads/2023/06/Download-our-Information-flyer-Chinese.pdf', category: 'Program Documents' },
      { title: 'ASSURE Certification Application', description: 'Application form to begin the ASSURE certification process with SCS Global Services.', url: 'https://rfci.com/wp-content/uploads/2020/02/ECS_APP_Assure_122219-2.docx', category: 'Program Documents' },
    ],
    faqs: [
      { question: 'What does SPC mean?', answer: 'Solid Polymer Core (SPC) refers to a rigid core flooring made from a blend of limestone powder and stabilizers, creating a dense, durable, and highly water-resistant product.' },
      { question: 'What does WPC mean?', answer: 'Expanded Polymer Core (WPC) is a rigid core flooring that combines wood or wood-like materials with plastic composites, resulting in a slightly softer, more cushioned feel underfoot.' },
      { question: 'What does "multi-layered" mean?', answer: '"Multi-layered" describes flooring constructed with several distinct layers\u2014typically including a wear layer, design layer, core, and backing\u2014each contributing to performance, durability, and comfort.' },
      { question: 'What does a "floating floor" mean?', answer: 'A "floating floor" is installed without being glued or nailed to the subfloor. Instead, planks or tiles lock together and rest on top of the subfloor, allowing for easier installation and natural movement.' },
      { question: 'What are the key differences between SPC and WPC rigid core flooring?', answer: 'SPC is denser, more rigid, and better suited for high-traffic or commercial environments, while WPC is thicker, quieter, and more comfortable underfoot, making it a popular choice for residential spaces.' },
      { question: 'What is the Vertical Deflection test?', answer: 'The Vertical Deflection test is part of ASSURE\u00ae Certified and measures how much a flooring product flexes or compresses under a concentrated load. It helps evaluate a floor\'s resistance to compromising the locking profile of the planks or tiles after installation.' },
    ],
    certifiedProductsUrl: 'https://www.scsglobalservices.com/certified-green-products-guide?category=63&program=349',
    getStartedText: 'Start ASSURE Certification',
    getStartedDescription: 'ASSURE certification is administered by SCS Global Services. Reach out to begin the application process, arrange independent testing, and schedule a manufacturing facility audit.',
    getStartedUrl: 'mailto:remelander@scsglobalservices.com',
    contactInfo: {
      name: 'Rob Emelander',
      phone: '616 502 6090',
      email: 'remelander@scsglobalservices.com',
      organization: 'SCS Global Services',
    },
    ctaText: 'Find ASSURE Certified Products',
    ctaUrl: 'https://www.scsglobalservices.com/certified-green-products-guide?category=63&program=349',
    image: { url: '/media/cert-photos/assure.png' },
    order: 2,
  },
  {
    slug: 'affirm',
    title: 'AFFIRM\u2122 Certified',
    iconName: 'certificate',
    logoUrl: '/media/cert-logos/affirm.svg',
    description: 'AFFIRM\u2122 Certified is a sustainability certification for resilient flooring based on an ANSI-accredited consensus standard. It evaluates products across environmental, health & wellness, and social impact categories \u2014 with two certification levels and independent third-party verification.',
    stats: [
      { value: 'ANSI', label: 'Accredited Standard' },
      { value: 'Level 1 + 2', label: 'Certification Tiers' },
    ],
    benefits: [
      { title: 'ANSI-Accredited Standard', description: 'The AFFIRM standard is developed through an ANSI-accredited consensus process involving public health, industry, and user stakeholders.' },
      { title: 'Three Impact Areas', description: 'Covers Environmental, Health and Wellness, and Social Responsibility requirements \u2014 a true multi-attribute sustainability standard.' },
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
    faqs: [
{ question: 'Why do we need AFFIRM Certified?', answer: 'The AFFIRM Certified label provides a way for designers, architects, facility managers, procurement agents and end-users to easily recognize that a resilient flooring product has completed a third party, independent certification process demonstrating commitment to sustainability, human health, and social responsibility. Because there are both required (Level 1) and optional criteria (Level 2), manufacturers can use the standard for continual improvement.' },
      { question: 'How does AFFIRM differ from other certifications?', answer: 'Multi-attribute standards like AFFIRM are responsive to market requests for a more comprehensive approach for determining environmentally preferable products. Single attribute programs serve a purpose, but more comprehensive standards like AFFIRM include environmental, health and wellness, and social responsibility requirements \u2014 highly indicative of environmentally preferable products (EPP).' },
      { question: 'How does AFFIRM Certified work?', answer: 'Products are required to minimally meet all Level 1 requirements to be certified. Level 2 includes optional additional criteria with a minimum number of criteria being met within each of the three impact areas. As organizations evaluate continuous improvement, additional Level 2 criteria can be met, which is reflected in updated Transparency Scorecards as part of their certification documentation.' },
      { question: 'Who worked on the AFFIRM standard?', answer: 'The AFFIRM standard and its revisions are developed through the involvement of stakeholders directly affected by the scope of the standard. A joint committee including public health, industry, and user members is responsible for proposing standards, voting on standards, ensuring public health and safety, and addressing environmental concerns.' },
      { question: 'What products have been certified against this standard?', answer: 'For current information on certified products, visit RFCI\u2019s dedicated ecomedes database and search for AFFIRM Certified under Certifications and Ecolabels.' },
    ],
    certifiedProductsUrl: 'https://rfci.ecomedes.com/',
    getStartedText: 'Learn About AFFIRM Certification',
    getStartedDescription: 'AFFIRM certification is developed through an ANSI-accredited process administered by NSF. Visit NSF to learn how to participate and pursue certification for your products.',
    getStartedUrl: 'https://www.nsf.org/standards-development/participate-nsf-standards-development',
    ctaText: 'Find AFFIRM Certified Products',
    ctaUrl: 'https://rfci.ecomedes.com/',
    image: { url: '/media/cert-photos/affirm.png' },
    order: 3,
  },
  {
    slug: 'epd',
    title: 'Industry Wide Environmental Product Declarations',
    iconName: 'globe',
    description: 'An Environmental Product Declaration (EPD) is a transparent, objective report that communicates product content and environmental impacts across a product or product category life cycle. A life cycle assessment (LCA) is based on the ISO 14040 Standard and a Type III Environmental Product Declaration (EPD) is compliant with ISO 14025 Standard and is third party verified. An EPD is utilized by specifiers to better understand environmental impacts of a product and to comply with material requirements in building rating systems, such as Green Globes\u00ae and LEED\u00ae.\n\nThe resilient flooring Industry Wide Type III Environmental Product Declarations include industry average data for nine resilient flooring product types, including Heterogeneous Sheet Vinyl, Homogeneous Sheet Vinyl, Luxury Vinyl Tile (LVT) \u2013 Gluedown, Luxury Vinyl Tile (LVT) \u2013 Looselay, Rubber Sheet and Tile, Rigid Core \u2013 SPC, Rigid Core \u2013 WPC, Solid Vinyl Tile (SVT), Vinyl Composition Tile (VCT). The Product Category Rules utilized for the Life Cycle Assessment and EPD is ULE 10010-7 Product Category Rules (PCR) Guidance for Building Related Products and Services Part B: Flooring EPD Requirements.',
    stats: [
      { value: 'ISO 14025 + 14040', label: 'EPD Standards' },
      { value: '9', label: 'Product Types Covered' },
    ],
    benefits: [],
    downloads: [
      { title: 'Heterogeneous Vinyl Flooring', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10144_RFCI_Heterogeneous-Sheet_050924_compressed.pdf' },
      { title: 'Homogeneous Vinyl Flooring', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10145_RFCI_Homogeneous-Sheet_050924_compressed.pdf' },
      { title: 'Luxury Vinyl Tile (LVT) \u2013 Gluedown', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10146_RFCI_LVT-Gluedown_050924_compressed.pdf' },
      { title: 'Luxury Vinyl Tile (LVT) \u2013 Looselay', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10147_RFCI_LVT-LooseLay_050924_compressed.pdf' },
      { title: 'Rubber Sheet and Tile', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10148_RFCI_Rubber-Flooring_050924_compressed.pdf' },
      { title: 'Rigid Core \u2013 SPC', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10149_RFCI_SPC-RigidCore_050924_compressed.pdf' },
      { title: 'Rigid Core \u2013 WPC', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10152_RFCI_WPC-RigidCore_050924_compressed.pdf' },
      { title: 'Solid Vinyl Tile (SVT)', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10150_RFCI_SVT_050924_compressed.pdf' },
      { title: 'Vinyl Composition Tile (VCT)', year: '2024', category: '2024 Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2024/05/SCS-EPD-10151_RFCI_VCT_050924_compressed.pdf' },
      { title: 'Heterogeneous Vinyl Flooring', year: '2019', category: '2019 Archived Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2019/01/101.1_RFCI_EPD_Heterogeneous-Vinyl-Flooring.pdf' },
      { title: 'Homogeneous Vinyl Flooring', year: '2019', category: '2019 Archived Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2019/01/102.1_RFCI_EPD_Homogeneous-Vinyl-Flooring.pdf' },
      { title: 'Rigid Core Flooring', year: '2019', category: '2019 Archived Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2019/01/103.1_RFCI_EPD_Rigid-Core-Flooring.pdf' },
      { title: 'Rubber Flooring', year: '2019', category: '2019 Archived Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2019/01/104.1_RFCI_EPD_Rubber-Flooring.pdf' },
      { title: 'Vinyl Tile', year: '2019', category: '2019 Archived Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2019/01/106.1_RFCI_EPD_Vinyl-Tile.pdf' },
      { title: 'Vinyl Composition Tile', year: '2019', category: '2019 Archived Industry Wide EPDs', url: 'https://rfci.com/wp-content/uploads/2019/01/105.1_RFCI_EPD_Vinyl-Composition-Tile.pdf' },
    ],
    ctaText: 'View All EPDs on RFCI.com',
    ctaUrl: 'https://rfci.com/environmental-product-declaration/',
    image: { url: '/media/cert-photos/epd.jpg' },
    order: 4,
  },
]
