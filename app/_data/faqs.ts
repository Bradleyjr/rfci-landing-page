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
      'Resilient flooring refers to a category of hard surface flooring materials that offer a degree of flexibility and "give" underfoot. This includes luxury vinyl tile (LVT), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber, and cork flooring.',
    category: 'general',
    order: 1,
  },
  {
    question: 'What is the Resilient Floor Covering Institute (RFCI)?',
    answer:
      'RFCI is the trade association for the resilient flooring industry in North America. Founded in 1976, we represent manufacturers and suppliers of vinyl, rubber, linoleum, and cork flooring products.',
    category: 'general',
    order: 2,
  },
  {
    question: 'What is FloorScore certification?',
    answer:
      "FloorScore is the flooring industry's most recognized indoor air quality certification. It independently verifies that a flooring product meets California's strict VOC emissions standards (CA Section 01350), one of the toughest air quality benchmarks in the world.",
    category: 'certifications',
    order: 3,
  },
  {
    question: 'What does ASSURE certification cover?',
    answer:
      "ASSURE is RFCI's third-party sustainability certification that evaluates resilient flooring products across the full lifecycle\u2014raw materials, manufacturing, product performance, and end-of-life recovery.",
    category: 'certifications',
    order: 4,
  },
  {
    question: 'What is an Environmental Product Declaration (EPD)?',
    answer:
      'An EPD is a standardized, third-party verified document that transparently reports the environmental impact of a product across its entire lifecycle, from raw material extraction through manufacturing, use, and end-of-life disposal.',
    category: 'sustainability',
    order: 5,
  },
  {
    question: 'Is resilient flooring recyclable?',
    answer:
      'Many resilient flooring products are recyclable. Several RFCI member companies operate take-back and recycling programs for post-installation and post-consumer flooring waste. The industry is continuously expanding recycling capabilities.',
    category: 'sustainability',
    order: 6,
  },
  {
    question: 'Can resilient flooring be installed over existing floors?',
    answer:
      "In many cases, yes. Resilient flooring can often be installed over existing hard, smooth surfaces, which can reduce demolition waste and installation time. However, subfloor conditions must meet the manufacturer's requirements.",
    category: 'installation',
    order: 7,
  },
  {
    question: 'What subfloor preparation is needed for resilient flooring?',
    answer:
      "Subfloors must be clean, dry, smooth, and structurally sound. Specific moisture, flatness, and temperature requirements vary by product. Always follow the manufacturer's installation guidelines.",
    category: 'installation',
    order: 8,
  },
  {
    question: 'How does RFCI membership work?',
    answer:
      'RFCI membership is by invitation and is open to manufacturers and suppliers within the resilient flooring industry. Members participate in industry advocacy, certification programs, and educational initiatives.',
    category: 'membership',
    order: 9,
  },
  {
    question: 'Does RFCI offer continuing education?',
    answer:
      'Yes. RFCI provides AIA-approved continuing education units (CEUs) covering topics like indoor air quality, sustainability certifications, material health, and Environmental Product Declarations.',
    category: 'general',
    order: 10,
  },
  {
    question: 'How does resilient flooring impact indoor air quality?',
    answer:
      'Resilient flooring can significantly contribute to healthy indoor environments. Products certified through FloorScore meet California Section 01350 standards for low VOC emissions\u2014one of the strictest indoor air quality benchmarks in the world.',
    category: 'sustainability',
    order: 11,
  },
  {
    question: 'What are VOCs and why do they matter in flooring?',
    answer:
      'VOCs (Volatile Organic Compounds) are chemicals that can off-gas from building materials, including some flooring products. Prolonged exposure to high VOC levels may cause headaches, respiratory irritation, and other health effects. FloorScore-certified resilient flooring products are independently tested to ensure VOC emissions fall well below recognized health thresholds.',
    category: 'sustainability',
    order: 12,
  },
  {
    question: 'What is the difference between FloorScore, ASSURE, and AFFIRM?',
    answer:
      "FloorScore certifies that a product meets strict indoor air quality (VOC emission) standards. ASSURE evaluates broader sustainability criteria across a product's full lifecycle. AFFIRM is an ANSI-accredited program that verifies product composition and regulatory compliance through independent lab testing.",
    category: 'certifications',
    order: 13,
  },
  {
    question: 'How does resilient flooring compare to carpet for health and maintenance?',
    answer:
      'Resilient flooring offers several advantages over carpet in health-sensitive environments. Its smooth, non-porous surface does not harbor dust mites, mold, or allergens the way carpet fibers can. It is easier to clean and disinfect, which is why it is the preferred flooring in healthcare, education, and food-service settings.',
    category: 'general',
    order: 14,
  },
  {
    question: 'What types of resilient flooring are available?',
    answer:
      'The resilient flooring category includes luxury vinyl tile and plank (LVT/LVP), vinyl composition tile (VCT), sheet vinyl, linoleum, rubber flooring, cork flooring, and rigid-core products like WPC and SPC.',
    category: 'general',
    order: 15,
  },
  {
    question: 'How long does resilient flooring last?',
    answer:
      'With proper installation and maintenance, commercial-grade resilient flooring can last 20 years or more. Luxury vinyl and rubber flooring in particular are known for exceptional durability.',
    category: 'general',
    order: 16,
  },
  {
    question: 'What is NSF/ANSI 332?',
    answer:
      'NSF/ANSI 332 is the Sustainability Assessment Standard for Resilient Floor Coverings. It provides a framework for evaluating the environmental and social responsibility of resilient flooring products across their full lifecycle. Products are rated at Silver, Gold, or Platinum levels.',
    category: 'sustainability',
    order: 17,
  },
]
