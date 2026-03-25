export type FAQ = {
  question: string
  answer: string
  category: string
  order: number
}

export const FAQS: FAQ[] = [
  {
    question: 'What is resilient flooring?',
    answer:
      'Resilient flooring refers to a category of hard surface flooring materials that offer a degree of flexibility and "give" underfoot. This includes luxury vinyl tile (LVT), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber, cork, and rigid core constructions.',
    category: 'general',
    order: 1,
  },
  {
    question: 'What is the Resilient Floor Covering Institute (RFCI)?',
    answer:
      'RFCI is the trade association for the resilient flooring industry in North America. Founded in 1976, the organization represents manufacturers and suppliers across resilient flooring product categories.',
    category: 'general',
    order: 2,
  },
  {
    question: 'What is FloorScore® certification?',
    answer:
      "FloorScore® is the flooring industry's most recognized indoor air quality certification. It verifies that products comply with California Section 01350 VOC emissions requirements through independent testing and review.",
    category: 'certifications',
    order: 3,
  },
  {
    question: 'What does ASSURE® Certified cover?',
    answer:
      "ASSURE® Certified is RFCI's quality assurance certification for rigid core products. It covers indoor air quality, product performance, vertical deflection, heavy metals, and ortho-phthalates for eligible SPC and WPC constructions.",
    category: 'certifications',
    order: 4,
  },
  {
    question: 'What is an Environmental Product Declaration (EPD)?',
    answer:
      'An EPD is a standardized, third-party verified document that reports the environmental impacts of a product across its life cycle, from raw material extraction through manufacturing and end-of-life.',
    category: 'sustainability',
    order: 5,
  },
  {
    question: 'Is resilient flooring recyclable?',
    answer:
      'Many resilient flooring products are recyclable. Several RFCI member companies support take-back, recycling, and waste-diversion efforts for post-installation and post-consumer material streams.',
    category: 'sustainability',
    order: 6,
  },
  {
    question: 'Can resilient flooring be installed over existing floors?',
    answer:
      "In many cases, yes. Resilient flooring can often be installed over existing hard, smooth surfaces, which can reduce demolition waste and shorten renovation schedules. Subfloor conditions still need to meet the manufacturer's requirements.",
    category: 'installation',
    order: 7,
  },
  {
    question: 'What subfloor preparation is needed for resilient flooring?',
    answer:
      "Subfloors should be clean, dry, smooth, and structurally sound. Specific moisture, flatness, and temperature requirements vary by product, so manufacturer instructions should always guide final preparation.",
    category: 'installation',
    order: 8,
  },
  {
    question: 'How does RFCI membership work?',
    answer:
      'RFCI membership is by invitation and is open to manufacturers and suppliers within the resilient flooring industry. Members participate in advocacy, standards development, certification programs, and educational initiatives.',
    category: 'membership',
    order: 9,
  },
  {
    question: 'How does resilient flooring impact indoor air quality?',
    answer:
      'Resilient flooring can support healthier indoor environments when products are selected with low-emitting certifications such as FloorScore® and when installation and maintenance recommendations are followed.',
    category: 'sustainability',
    order: 11,
  },
  {
    question: 'What are VOCs and why do they matter in flooring?',
    answer:
      'VOCs, or volatile organic compounds, are chemicals that can off-gas from building materials. Low-emitting flooring programs help specifiers identify products that support healthier indoor environments.',
    category: 'sustainability',
    order: 12,
  },
  {
    question: 'What is the difference between FloorScore®, ASSURE® Certified, and AFFIRM™ Certification?',
    answer:
      'FloorScore® focuses on low VOC emissions and indoor air quality. ASSURE® Certified is a rigid core quality assurance program covering performance, vertical deflection, heavy metals, and ortho-phthalates. AFFIRM™ Certification is a broader sustainability certification built on NSF/ANSI 332 that evaluates environmental, health and wellness, and social responsibility criteria.',
    category: 'certifications',
    order: 13,
  },
  {
    question: 'What is the difference between waterproof and water resistant flooring?',
    answer:
      'Water resistant products are designed to handle routine moisture exposure for a period of time, while waterproof products are marketed to resist water damage to the product itself under intended conditions. In both cases, specifiers should still confirm requirements for seams, subfloors, transitions, and installation details.',
    category: 'installation',
    order: 14,
  },
  {
    question: 'What types of resilient flooring are available?',
    answer:
      'The resilient flooring category includes LVT/LVP, rigid core, VCT, solid vinyl tile, sheet vinyl, linoleum, rubber, cork, and other specialized resilient constructions suited to different applications.',
    category: 'general',
    order: 16,
  },
  {
    question: 'How long does resilient flooring last?',
    answer:
      'With proper installation and maintenance, many commercial-grade resilient flooring products can perform for decades. Actual service life depends on product type, traffic conditions, maintenance, and the specific use environment.',
    category: 'general',
    order: 17,
  },
  {
    question: 'What is NSF/ANSI 332?',
    answer:
      'NSF/ANSI 332 is the Sustainability Assessment Standard for Resilient Floor Coverings. It provides the framework behind AFFIRM™ Certification and evaluates environmental, health and wellness, and social responsibility criteria.',
    category: 'sustainability',
    order: 18,
  },
]
