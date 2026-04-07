export type Certification = {
  slug: string
  title: string
  iconName: 'shieldCheck' | 'seal' | 'certificate' | 'globe'
  logoUrl?: string
  description: string
  summary?: string
  image?: { url: string }
  iaqGraphic?: string
  stats?: Array<{ value: string; label: string }>
  benefits?: Array<{ title: string; description: string }>
  process?: Array<{ step: string; description: string }>
  downloads?: Array<{ title: string; description?: string; url: string; year?: string; category?: string; isLink?: boolean }>
  supplementaryLinks?: Array<{ title: string; description?: string; url: string; isDownload?: boolean }>
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
    description: 'When it comes to indoor air quality, a primary concern is the emission level of specific volatile organic compounds (VOCs). FloorScore\u00ae IAQ Certification means that a flooring product is independently certified by SCS to comply with the volatile organic compound emissions criteria of the California Section 01350 Program. Hundreds of resilient hard surface flooring materials and their adhesives bear the FloorScore\u00ae seal. This seal tells you that the products have been independently certified by SCS to comply with the volatile organic compound emissions criteria of the California Section 01350 Program (California Standard Method for the Testing and Evaluation of Volatile Organic Chemical Emissions from Indoor Sources Using Environmental Chambers, Version 1.2). Any product that has met these stringent standards is a product that will contribute to good indoor air quality.',
    summary: 'FloorScore\u00ae certifies that resilient flooring products meet California Section 01350 VOC emissions standards — one of the most stringent indoor air quality benchmarks in North America. Independently administered by SCS Global Services.',
    iaqGraphic: '/media/floorscore-iaq-graphic.png',
    stats: [
      { value: 'CA 01350', label: 'Emissions Standard' },
      { value: 'SCS Global', label: 'Certification Body' },
    ],
    benefits: [
      { title: 'IAQ Certification for Flooring', description: 'FloorScore\u00ae certifies that a flooring product\u2019s VOC emissions comply with the California Section 01350 Program \u2014 one of the most stringent IAQ benchmarks for building materials in North America.' },
      { title: 'Administered by SCS Global Services', description: 'As a third-party independent certification firm, SCS audits and determines whether products qualify for the FloorScore\u00ae seal by reviewing all VOC emissions test reports, determining whether results meet California Section 01350 requirements, and conducting periodic manufacturing plant inspections.' },
      { title: 'Recognized by Green Building Programs', description: 'FloorScore\u00ae certified products are recognized by LEED, CHPS, BREEAM, Green Globes, NAHB ANSI National Green Building Standard, ASHRAE/USGBC/IES Standard 189.1, and many other green building rating systems.' },
      { title: 'Healthier Air for Occupants', description: 'IAQ is important because most people spend around 90% of their time indoors. Poor quality air can increase risk for a variety of health problems, including headaches, dizziness, and more serious long-term conditions.' },
      { title: 'Ongoing Compliance', description: 'To earn and maintain the FloorScore\u00ae seal, products must satisfy requirements including: testing demonstrating compliance with emission concentrations for listed VOCs under California Section 01350; manufacturing facility on-site audits and yearly surveillance audits; annual product re-testing; product record keeping; and a documented quality control plan.' },
    ],
    process: [
      { step: 'Product Submission', description: 'Manufacturer submits products for testing under the FloorScore program through SCS Global Services.' },
      { step: 'Independent Emissions Testing', description: 'Products are tested in accredited laboratories for VOC emissions per California Standard Method v1.2.' },
      { step: 'SCS Compliance Review', description: 'SCS reviews all test reports and determines whether results meet the concentration limits for listed VOCs under CA Section 01350.' },
      { step: 'Manufacturing Audit', description: 'SCS conducts on-site manufacturing plant inspections to review formulas, processing, and quality control procedures.' },
      { step: 'Certification & Annual Renewal', description: 'Certified products are listed in the SCS database, can display the FloorScore mark, and undergo annual desk reviews to maintain certification.' },
    ],
    downloads: [],
    supplementaryLinks: [
      { title: 'FloorScore\u00ae One-Page Overview', description: 'A concise summary of the FloorScore program, requirements, and certification process.', url: 'https://cdn.scsglobalservices.com/files/program_documents/FloorScore_one_sheet_V3.6.pdf', isDownload: true },
      { title: 'Full FloorScore\u00ae Certification Details', description: 'Benefits, how to get certified, requirements, and more at SCS Global Services.', url: 'https://www.scsglobalservices.com/services/floorscore', isDownload: false },
      { title: 'About SCS Global Services', description: 'Learn about SCS Global Services, the independent third-party body that administers FloorScore\u00ae.', url: 'https://www.scsglobalservices.com/about/company', isDownload: false },
    ],
    faqs: [
      { question: 'Where can I find a list of flooring products that have earned the FloorScore\u00ae seal?', answer: 'A current list is maintained at http://www.scscertified.com/products/program.php?a=FloorScore.' },
      { question: 'Where can I find the FloorScore\u00ae test procedure and certification requirements?', answer: 'You can find them on SCS\u2019s website at scsglobalservices.com/services/floorscore.' },
      { question: 'In short, what does FloorScore\u00ae require?', answer: 'To earn the FloorScore\u00ae seal, a flooring product must satisfy the requirements of the SCS-EC-10.2-2007 Environmental Certification Program \u2014 Indoor Air Quality Performance, which includes: testing demonstrating compliance with emission concentrations for listed VOCs under California Section 01350; manufacturing facility on-site audits and yearly surveillance audits; annual product re-testing; product record keeping; and a documented quality control plan.' },
      { question: 'Why does IAQ matter to me?', answer: 'If you\u2019re like most people, you spend over 90% of your life indoors.' },
      { question: 'Are some people more sensitive to VOCs?', answer: 'Yes. During installation when VOC levels can be higher, people who are sensitive to odors or chemicals should avoid the area. Floorscore certification does not include the installation process.' },
      { question: 'Why is hard surface flooring recommended for classrooms, offices and homes?', answer: 'Hard surface floors are easy to clean and maintain because they provide a one-dimensional surface that doesn\u2019t absorb odors, spills, dust or soil. They also don\u2019t easily retain moisture, which can promote the growth of microorganisms, such as dust mites and mold, that can contribute to poor IAQ.' },
      { question: 'Where can I learn more?', answer: 'The U.S. Environmental Protection Agency (EPA) maintains a web site that provides information on indoor air quality at www.epa.gov/iaq/ia-intro.html. You can also find out about all the indoor air quality certifications offered by SCS at http://www.scscertified.com/gbc/indoor_air_quality.php.' },
      { question: 'Can IAQ really be improved?', answer: 'Absolutely. Here are five ways to improve your IAQ: improve your HVAC system design and maintenance; ensure adequate ventilation with clean air; improve air filtering; schedule maintenance or remodeling for minimum impact; and control the sources of volatile organic compounds (VOCs).' },
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
      'ANSI/GBI 01-2010 Green Building Assessment Protocol for Commercial Buildings',
      'ASHRAE/USGBC/IES Standard 189.1 Standard for the Design of High-Performance Green Buildings',
      'NAHB ANSI National Green Building Standard',
      'BREEAM',
      'Collaboration for High Performance Schools (CHPS)',
      'CSI Green Format',
      'HBN Pharos Project',
      'NSF/ANSI 332-2010 Sustainability Assessment for Resilient Floor Coverings',
      'Florida Green Home Standard',
      'City of Scottsdale Environmental Rating System',
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
    description: 'ASSURE\u00ae Certified was conceived and developed by the Resilient Floor Covering Institute (RFCI) as a way to establish uniform standards of quality for all rigid core luxury flooring products sold in North America; regardless of where they are manufactured. ASSURE\u00ae Certified standards apply to WPC or SPC construction. Rigid core luxury products that carry the ASSURE\u00ae Certified badge have been tested and certified by SCS Global, an international leader in third-party certification and standards development. You can be assured that this rigid core luxury product has been manufactured to the highest standards and meets the specific ASSURE\u00ae Certified requirements in indoor air quality, specific performance properties, heavy metals content, and ortho-phthalates.',
    summary: 'ASSURE\u00ae Certified establishes uniform quality standards for rigid core luxury flooring (WPC and SPC) sold in North America, regardless of where it is manufactured. Products are independently tested and certified by SCS Global Services.',
    stats: [
      { value: 'WPC + SPC', label: 'Rigid Core Products' },
      { value: 'SCS Global', label: 'Certification Body' },
    ],
    benefits: [
      { title: 'Indoor Air Quality Compliant', description: 'Must comply with CDPH Standard Method v1.2 testing and meet the concentration limits of \u00bd the corresponding CREL in Appendix C when a product is modeled as flooring for both the classroom and private office scenarios. (See Appendix C for target list of VOCs and concentration limits.)' },
      { title: 'Performance Tested', description: 'Must meet ASTM F3261 Characteristics testing for composition, size tolerance, product thickness, and wear layer thickness. (See Appendix B for full list of testing parameters.)' },
      { title: 'Heavy Metals', description: 'Must be tested for lead, hexavalent chromium, cadmium, and mercury per test method EPA SW 846 Method 3052 and not exceed the limits of 100 PPM by combined weight. Additionally, Manufacturers attest that neither lead, mercury, cadmium, and hexavalent chromium were intentionally added to the product in the manufacturing process.' },
      { title: 'Ortho-Phthalates', description: 'Must be tested per ASTM F3414, CPSC-CH-C1001-09.4 or GB/T 22048-2008. Products cannot exceed 1,000 PPM for individual or total ortho-phthalates.' },
      { title: 'Manufacturer Quality Control', description: 'Manufacturer must have a quality control procedure to control material suppliers, product traceability, chain of custody, internal QC testing, and segregation of non-conforming products/materials.' },
      { title: 'On-Site Manufacturing Audit', description: 'An on-site audit of the manufacturing facility must confirm compliant quality control procedures, material inputs, and scope of products intended for certification. If previous on-site internal audits have been conducted through the FloorScore\u00ae certification program and continued conformance is met, the on-site audit requirement is waived.' },
    ],
    process: [
      { step: 'Application to SCS Global', description: 'Contact SCS Global Services to begin the ASSURE certification process and submit product documentation.' },
      { step: 'IAQ Emissions Testing', description: 'Products undergo CDPH Standard Method v1.2 testing. Must meet concentration limits at half the corresponding CREL for listed VOCs.' },
      { step: 'Performance, Vertical Deflection & Chemistry Testing', description: 'Products are tested per ASTM F3261 and associated rigid core criteria for performance and vertical deflection, plus EPA SW 846 and ASTM F3414, CPSC-CH-C1001-09.4, or GB/T 22048-2008 for chemistry screening.' },
      { step: 'Manufacturing Facility Audit', description: 'On-site audit of the manufacturing facility confirms compliant quality control procedures.' },
      { step: 'Certification & Badge Use', description: 'Certified products earn the ASSURE Certified badge and are listed in the program directory.' },
    ],
    downloads: [],
    supplementaryLinks: [
      { title: 'ASSURE\u00ae Certified One-Page Overview', description: 'Program overview and certification requirements for rigid core luxury flooring.', url: 'https://cdn.scsglobalservices.com/files/program_documents/Assure_one_sheet_V2.pdf', isDownload: true },
      { title: 'Full ASSURE\u00ae Certification Details', description: 'Benefits, how to get certified, requirements, and more at SCS Global Services.', url: 'https://www.scsglobalservices.com/services/assure-certified', isDownload: false },
      { title: 'About SCS Global Services', description: 'Learn about SCS Global Services, the independent third-party body that administers ASSURE\u00ae Certified.', url: 'https://www.scsglobalservices.com/about/company', isDownload: false },
    ],
    faqs: [],
    certifiedProductsUrl: 'https://www.scsglobalservices.com/certified-green-products-guide?category=63&program=349',
    getStartedText: 'Start ASSURE Certification',
    getStartedDescription: 'Product certification is met upon completion of the following requirements for both quality assurance, testing, and a satisfactory on-site audit of the manufacturing facility. Manufacturer has a quality control procedure to control material suppliers, product traceability, chain of custody, internal QC testing, segregation of non-conforming products/materials.',
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
    logoUrl: '/media/cert-logos/affirm-certified.png',
    description: 'AFFIRM\u2122 Certified is a sustainable certification for resilient flooring products that is based on compliance with the AFFIRM\u2122 Certified: Sustainable Assessment of Resilient Floor Covering. The standard\u2019s criteria include environmental, health and wellness, and social impact categories. The AFFIRM\u2122 Certified label on a resilient flooring product provides the specifier and consumer assurance that the resilient flooring product is meeting sustainability requirements and is third-party certified.',
    summary: 'AFFIRM\u2122 Certified is a multi-attribute sustainability certification for resilient flooring, based on NSF/ANSI Standard 332. It covers environmental performance, health & wellness, and social responsibility \u2014 with required (Level 1) and optional (Level 2) criteria.',
    stats: [
      { value: 'ANSI', label: 'Accredited Standard' },
      { value: 'Level 1 + 2', label: 'Certification Tiers' },
    ],
    benefits: [
      { title: 'ANSI-Accredited Consensus Standard', description: 'The AFFIRM\u2122 Certified standard is based upon criteria developed by a consensus process accredited by the American National Standards Institute (ANSI), verifying that standards are developed through the involvement of stakeholders directly affected by the scope of the standard.' },
      { title: 'Consensus Process', description: 'A joint committee including public health, industry, and user members is responsible for proposing standards, voting on standards, ensuring public health and safety, addressing environmental concerns, and responding to requests for interpretations of AFFIRM\u2122 Certified standards.' },
      { title: 'Public Health Council Review', description: 'A unique feature of the AFFIRM\u2122 Certified process is the review of all standards by the Council of Public Health Consultants \u2014 composed of representatives of professional organizations, federal and state regulatory agencies, academic institutions, and nationally or internationally recognized public health and environmental leaders.' },
      { title: 'Two Certification Levels', description: 'Products are required to minimally meet all Level 1 requirements to be certified. Level 2 includes optional additional criteria with a minimum number of criteria being met within each of the three impact areas \u2014 environmental, health and wellness, and social. Updated Transparency Scorecards reflect continual improvement.' },
      { title: 'Specifier Confidence', description: 'The AFFIRM\u2122 Certified label provides a way for designers, architects, facility managers, procurement agents and end-users to easily recognize that a resilient flooring product has completed a third-party, independent certification process demonstrating commitment to sustainability, human health, and social responsibility.' },
      { title: 'Environmentally Preferable Product (EPP)', description: 'Many government agencies have mandated EPP programs, including ecolabels that are part of the certifications represented in the ecomedes database. AFFIRM\u2122 Certified products provide specifiers in the private sector, NGOs, and government agencies a way to meet Environmentally Preferable Product (EPP) requirements.' },
    ],
    process: [
      { step: 'Application', description: 'Manufacturer applies to the AFFIRM program and submits product documentation for evaluation.' },
      { step: 'Level 1 Compliance Review', description: 'Products are evaluated against mandatory Level 1 criteria covering environmental, health and wellness, and social requirements.' },
      { step: 'Level 2 Assessment (Optional)', description: 'Manufacturers may pursue additional Level 2 criteria within each impact area to achieve higher certification recognition.' },
      { step: 'Third-Party Verification', description: 'Independent assessors verify compliance with all stated criteria.' },
      { step: 'Certification & Transparency Scorecard', description: 'Certified products receive the AFFIRM label and a published Transparency Scorecard reflecting their certification level.' },
    ],
    downloads: [],
    supplementaryLinks: [
      { title: 'NSF/ANSI Standard 332', description: 'The full standard document: Sustainability Assessment for Resilient Floor Coverings.', url: 'https://webstore.ansi.org/standards/nsf/nsfansi3322022', isDownload: false },
    ],
    faqs: [
      { question: 'What is resilient flooring and where is it used?', answer: 'Resilient flooring refers to flooring materials that have a relatively firm surface yet characteristically have \u201cgive and take\u201d when walked on. These include many kinds of vinyl floors \u2013 vinyl sheet flooring, vinyl composition tile, and luxury vinyl tiles and planks \u2013 as well as linoleum, rubber, cork and wall base products. They are used in many commercial applications for their durability, design flexibility and environmental attributes.' },
      { question: 'Why do we need AFFIRM\u2122 Certified?', answer: 'AFFIRM\u2122 Certified label provides a way for designers, architects, facility managers, procurement agents and end-users to easily recognize a resilient flooring product has completed a third party, independent certification process that demonstrates their commitment to sustainability, human health, and social responsibility. Because there are both required (Level 1) and optional criteria (Level 2) in the AFFIRM\u2122 Certified Sustainability Assessment Standard, the product manufacturer can use the standard for continual improvement of their product formulations maximizing transparency throughout the supply chain.' },
      { question: 'How does AFFIRM\u2122 Certified differ from other certifications?', answer: 'Multi-attribute standards are responsive to market requests for a more comprehensive approach for determining environmentally preferable products just as single attribute certification programs responded to market demands for gauging issues such as indoor air quality. Single attribute programs serve a purpose but more comprehensive standards such as AFFIRM\u2122 Certified include environmental, health and wellness, and social responsibility requirements highly indicative of environmentally preferable products (EPP). Many government agencies have mandated EPP programs, including ecolabels that are part of the certifications represented in the ecomedes\u00ae database. AFFIRM\u2122 Certified products meeting the criteria established in AFFIRM\u2122 Certified provide specifiers in the private sector, NGOs, and government agencies a way to meet Environmentally Preferable Product (EPP) requirements.' },
      { question: 'How does AFFIRM\u2122 Certified work?', answer: 'AFFIRM\u2122 Certified products are required to minimally meet all Level 1 requirements included in the AFFIRM\u2122 Certified Standard to be certified. Level 2 includes optional additional criteria with a minimum number of criteria being met within each of the three impact areas \u2013 environmental, health and wellness, and social. As organizations seeking certification evaluate continuous improvement, there is an opportunity for additional Level 2 criteria to be met, which is reflected in updated Transparency Scorecards as part of their certification documentation.' },
      { question: 'Who worked on the AFFIRM\u2122 Certified standard?', answer: 'The AFFIRM\u2122 Certified standard and revisions to the standard are developed through the involvement of stakeholders who are directly affected by the scope of the standard. A joint committee including public health, industry, and user members is responsible for proposing standards, voting on standards, ensuring public health and safety, addressing environmental concerns, and responding to requests for interpretations of NSF standards. NSF also requires the review of all standards by the NSF Council of Public Health Consultants. The Council of Public Health Consultants is composed of representatives of professional organizations, federal and state regulatory agencies, and academic institutions, as well as nationally or internationally recognized individuals who have demonstrated leadership in the public health and environmental fields as part of the review and balloting process for the updated AFFIRM\u2122 Certified standard.' },
      { question: 'What products have been certified against this standard?', answer: 'For current information on certified products, visit RFCI\u2019s dedicated ecomedes\u00ae database and search for AFFIRM\u2122 Certified under Certifications and Ecolabels. For additional product manufacturer information go to RFCI Institute and click on specific member logos under Flooring Manufacturers.' },
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
    summary: 'Industry-wide EPDs communicate the environmental impacts of resilient flooring products across their full life cycle. RFCI publishes third-party verified EPDs for nine resilient flooring product categories.',
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
