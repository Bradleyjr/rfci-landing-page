export type GlossaryCategory =
  | 'Certifications'
  | 'Flooring Types'
  | 'Installation'
  | 'Materials'
  | 'Manufacturing'
  | 'Performance'
  | 'Sustainability'
  | 'Industry Terms'

export type GlossaryEntry = {
  term: string
  definition: string
  category: GlossaryCategory
  aliases: string[]
  relatedTerms: string[]
  order: number
}

type GlossarySeed = {
  term: string
  definition: string
  category?: GlossaryCategory
  aliases?: string[]
  relatedTerms?: string[]
}

function glossaryKey(term: string): string {
  return term
    .toLowerCase()
    .replace(/[®™]/g, '')
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function glossarySlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const SCRAPED_GLOSSARY_SEEDS: GlossarySeed[] = [
  {
    term: 'Above-Grade',
    definition:
      'Above the surface of the ground, as related to floor location, above a well-ventilated space with at least 18 in. between the bottom of the lowest horizontal structural member and any point of the ground.',
  },
  {
    term: 'Abrasion',
    definition: 'Wearing, grinding, or rubbing away by friction.',
  },
  {
    term: 'Across Machine Direction',
    definition:
      'The direction perpendicular to which a product moves through the manufacturing process.',
  },
  {
    term: 'Asphalt Tile',
    definition:
      'An obsolete floor surfacing unit composed of asphalt or hydrocarbon resins, or both, crysotile asbestos fibers, mineral fillers, and pigments.',
  },
  {
    term: 'Adhered',
    definition: '(See Perimeter Adhered)',
  },
  {
    term: 'Aluminum Oxide',
    definition:
      'Added to the urethane finish for increased abrasion resistance of the wear layer.',
  },
  {
    term: 'ASSURE® Certified',
    definition:
      'A third-party quality assurance testing program for rigid core flooring products developed by RFCI and conducted by SCS Global.',
  },
  {
    term: 'Backing',
    definition:
      'Vinyl is constructed of several different layers: the wear layer, the printed or decorative layer, an inner core consisting of a foam and vinyl layer, and a backing. The type of backing determines how it can be installed.',
  },
  {
    term: 'Beautifully Responsible®',
    definition:
      "RFCI's consumer-facing message about family-friendly, eco-friendly resilient flooring that matches style, budget, and sustainable values.",
  },
  {
    term: 'Below-Grade',
    definition:
      'Below the surface of the ground, as related to floor location, part or all of the floor is below the ground.',
  },
  {
    term: 'Concrete',
    definition:
      'A hard, strong material made by mixing a cementing material, commonly Portland cement, and a mineral aggregate with sufficient water to cause the cement to set and bind the entire mass.',
  },
  {
    term: 'Coefficient of Friction',
    definition:
      'The ratio of the tangential force needed to start or maintain uniform relative motion between two contacting surfaces to the perpendicular force holding them in contact.',
  },
  {
    term: 'Cushioned Vinyl Flooring',
    definition:
      'Any vinyl sheet floor covering incorporating a foam layer as part of its construction.',
  },
  {
    term: 'Cork Tile',
    definition:
      'A floor surfacing unit made from natural cork shavings compressed and baked to be thoroughly and uniformly bonded together.',
  },
  {
    term: 'Cork',
    definition:
      'The bark of a tree commonly known as Cork Oak and native to the Mediterranean region. The bark naturally splits every 9 to 15 years and can be safely harvested without harming the tree. Cork is naturally hypoallergenic and resistant to mold and mildew.',
  },
  {
    term: 'Decorative Layer',
    definition:
      'The layer that expresses the design of the floor, whether it resembles natural surfaces like wood or stone, or patterns or colors.',
  },
  {
    term: 'Dimensional Stability',
    definition:
      'The ability of resilient flooring to retain its original dimensions during the service life of the product.',
  },
  {
    term: 'Drying Room Yellowing',
    definition:
      'A yellowish cast on linoleum resulting from the oxidation process that will go away with light exposure. Without continued light exposure, the cast may reappear.',
  },
  {
    term: 'Embossed',
    definition:
      'Having a permanent multilevel surface produced by mechanical or chemical means.',
  },
  {
    term: 'Flexibility',
    definition:
      'The ability to be bent, turned, or twisted without cracking, breaking, or showing other permanent damage, with or without returning to its former shape.',
  },
  {
    term: 'Floating',
    definition:
      'A method of vinyl flooring installation in which the flooring is not bonded to the substrate by any adhesive.',
  },
  {
    term: 'Friction Resistance',
    definition:
      'Resistance to the relative motion of one body sliding, rolling, or flowing over another with which it is in contact.',
  },
  {
    term: 'Full Spread',
    definition:
      'A vinyl flooring installation method in which the adhesive is trowled over the entire substrate.',
  },
  {
    term: 'Gouge',
    definition:
      'A groove or cavity in the flooring surface accompanied by material removal and penetration below the immediate flooring surface.',
  },
  {
    term: 'Heat Welded Seam',
    definition:
      'A seam produced by grooving abutting edges of resilient flooring and filling the grooves with heated, fused, or melted material to provide a bond and seal. A glazing or top coating may be applied after the seam is trimmed.',
  },
  {
    term: 'Heterogeneous',
    definition: 'Consisting of dissimilar ingredients, constituents, or compositions.',
  },
  {
    term: 'Heterogeneous Resilient Flooring',
    definition:
      'A resilient floor surfacing material consisting of layers of dissimilar compositions or colors, or both.',
  },
  {
    term: 'Homogeneous Rubber Flooring',
    definition:
      'A rubber floor surfacing material, in sheet or tile form, that is of uniform structure and composition throughout. It usually consists of compounded natural or synthetic rubbers, or both, in combination with mineral fillers, pigments, and other additives.',
  },
  {
    term: 'Homogeneous Vinyl Flooring',
    definition:
      'A floor surfacing material in sheet or tile form that is of uniform structure and composition throughout. It usually consists of vinyl plastic resins, plasticizers, fillers, pigments, and stabilizers.',
  },
  {
    term: 'Hydraulic Cement',
    definition:
      'A binder system used in concrete subfloor assemblies that hardens by chemical reaction with water and is capable of doing so even under water.',
  },
  {
    term: 'Injection Molded Flooring',
    definition:
      'A floor surfacing material made by driving or forcing a polymeric compound into a mold.',
  },
  {
    term: 'Inlaid Sheet Flooring',
    definition:
      'A floor surfacing material in which the decorative pattern or design is formed by colored areas set into the surface. The design so formed may or may not extend through to a backing.',
  },
  {
    term: 'Inner Core',
    definition:
      'Consisting of a foam and vinyl wear layer, the inner core provides durability, insulation, and comfort.',
  },
  {
    term: 'Lightweight Concrete',
    definition: 'Concrete with a density of less than 115 lb/ft³ (1840 kg/m³).',
  },
  {
    term: 'Linoleum',
    definition:
      'Made of natural ingredients that include linseed oil, cork, limestone, wood flour, and tree resins. The color goes all the way through, making it extremely wearable and durable.',
  },
  {
    term: 'Linoleum Cement',
    definition:
      'The binder in linoleum consisting of a mixture of linseed oil, pine rosin, fossil or other resins or rosins, or an equivalent oxidized oleoresinous binder.',
  },
  {
    term: 'Machine Direction',
    definition:
      'The direction in which a product moves through the manufacturing process.',
  },
  {
    term: 'Mar',
    definition:
      'A mark made on the flooring surface by the deposition of material from friction or rubbing of traffic bodies against the surface.',
  },
  {
    term: 'Oleoresin',
    definition: 'A plant product containing chiefly essential oil and resin.',
  },
  {
    term: 'On-Grade',
    definition:
      'In contact with the ground, as related to floor location, in contact with the ground or with less than 18 in. (457.2 mm) of well-ventilated space between the bottom of the lowest horizontal structural member and any point of the ground.',
  },
  {
    term: 'Patching Compound',
    definition:
      'Compound used to fill or smooth minor depressions or irregularities in a flooring surface.',
  },
  {
    term: 'Perimeter Adhered',
    definition:
      'A vinyl flooring installation method in which adhesive is only applied to the perimeter of the flooring and also at the seams.',
  },
  {
    term: 'Plank',
    definition: 'A form of resilient floor covering having an aspect ratio greater than 2:1.',
  },
  {
    term: 'Polymeric Poured (Seamless) Floors',
    definition:
      'A floor surfacing material composed of polymeric materials applied to the substrate in liquid form alone or in combination with mineral or plastic aggregates, desiccants, or fillers.',
  },
  {
    term: 'Post-Consumer Recycled Content',
    definition:
      'The portion, often expressed as a percent by weight, of material used in the manufacture of a new product where the material has been recovered or otherwise diverted from disposal.',
  },
  {
    term: 'Pre-Consumer Recycled Content',
    definition:
      'Material recovered or diverted from industrial waste streams for use in the manufacture of a new product or a product made by a new process, often expressed as a percent by weight. This excludes materials and by-products generated from and commonly reused or reworked within the original manufacturing process.',
  },
  {
    term: 'Printed Sheet Vinyl Flooring',
    definition:
      'A floor surfacing material that has a printed pattern and is protected with a wear layer of transparent or translucent vinyl plastic. The wear layer may also include a specialty performance top coating.',
  },
  {
    term: 'Recycled Content',
    definition:
      'The sum, normally expressed as a percent by weight, of post-industrial or pre-consumer recycled material plus post-consumer recycled material.',
  },
  {
    term: 'Resilient',
    definition:
      'These floors have some give or elasticity when walked on. The category includes Flexible Luxury Vinyl (LVT/LVP), Rigid Core, Solid Vinyl Tile (SVT), Vinyl Composition Tile (VCT), Sheet Vinyl, Linoleum, Rubber, and Cork.',
  },
  {
    term: 'Resin',
    definition:
      'Any of various solid or semi-solid amorphous fusible natural organic substances that are usually transparent or translucent and yellowish to brown and are formed in plant secretions. It can also refer to synthetic products that share some properties of natural resins.',
  },
  {
    term: 'Rosin',
    definition:
      'A translucent amber to almost black brittle friable resin obtained by chemical means from the oleoresin or dead wood of pine trees or from tall oil.',
  },
  {
    term: 'Rotogravure',
    definition:
      'A commonly used method for making residential vinyl floors. A print cylinder spins while the vinyl core layer passes underneath, systematically printing colored ink dyes to create the pattern.',
  },
  {
    term: 'Rubber',
    definition:
      'Rubber flooring is extremely durable, quiet, and warm to walk on. It also resists dents and stains, though installation should follow product-specific guidance for best performance.',
  },
  {
    term: 'Seams',
    definition:
      'Since sheet vinyl comes in 6 ft and 12 ft widths, seaming may be necessary depending on the area to be covered. Certain patterns hide seams better than others.',
  },
  {
    term: 'Seam Sealer',
    definition:
      'A thin liquid adhesive applied to cut edges to lock them in and prevent edge ravel. Seam sealers may be visible depending on vinyl textures and finishes.',
  },
  {
    term: 'Sheet, Resilient Flooring',
    definition:
      'Flexible resilient flooring, packaged in roll form, in which the length substantially exceeds the width.',
  },
  {
    term: 'Solid Vinyl Tile',
    definition:
      'A resilient tile flooring composed of binder, fillers, and pigments compounded with suitable stabilizers and processing aids. The tile meets the requirements of ASTM Specification F1700.',
  },
  {
    term: 'Static Coefficient of Friction',
    definition:
      'The ratio of the tangential force needed to start uniform relative motion between two contacting surfaces to the perpendicular force holding them in contact.',
  },
  {
    term: 'Tangential Force',
    definition:
      'A force that acts on a moving body in the direction of a tangent to the curved path of the body.',
  },
  {
    term: 'Substrate',
    definition:
      'The surface on which vinyl flooring will be laid. Installation over wood substrates often requires underlayment, while concrete substrates typically require surface preparation.',
  },
  {
    term: 'Subflooring',
    definition:
      'A rough floor on top of which vinyl flooring is applied. It is the structural layer intended to provide support for design loadings and may receive resilient flooring directly or through an underlayment.',
  },
  {
    term: 'Terrazzo',
    definition:
      'A form of mosaic flooring made by embedding marble, onyx, granite, quartz, or glass chips in cementitious or resinous matrices. It is poured in place, cured, ground, and then polished.',
  },
  {
    term: 'Tile, Resilient Flooring',
    definition:
      'Resilient flooring that is finished to resemble ceramic or stone tiles.',
  },
  {
    term: 'Traction',
    definition:
      'The adhesive friction of a body on a surface on which it moves.',
  },
  {
    term: 'Vinyl Asbestos Tile (VAT)',
    definition:
      'An obsolete form of resilient tile composed of vinyl plastic binders, crysotile asbestos fibers, mineral fillers, and pigments.',
  },
  {
    term: 'VCT Vinyl Composition Tiles',
    definition:
      'A resilient floor covering composed of binder, fillers, and pigments. The binder consists of one or more vinyl chloride resins or copolymers compounded with suitable plasticizers and stabilizers.',
  },
  {
    term: 'Vinyl',
    definition:
      'Made from a mixture of polyvinyl chloride and plasticizer, vinyl is usually flexible and non-porous. Pigments are added for color.',
  },
  {
    term: 'Wearlayer',
    definition:
      'A layer of material applied to the top surface of vinyl flooring. Its thickness varies by product and strongly influences resistance to stains, scuffs, and scratches.',
  },
  {
    term: 'Wear',
    definition:
      "The accumulative and integrative action of deleterious mechanical influences encountered in use that tend to impair a material's serviceability, including abrasion, scratching, gouging, and scuffing.",
  },
]

const ADDITIONAL_GLOSSARY_SEEDS: GlossarySeed[] = [
  {
    term: 'Underlayment',
    definition:
      'A material placed under resilient flooring or other finished flooring to provide a suitable installation surface.',
    category: 'Installation',
    relatedTerms: ['Subflooring', 'Substrate'],
  },
]

const MODERN_GLOSSARY_OVERRIDES: GlossarySeed[] = [
  {
    term: 'AFFIRM™ Certified',
    definition:
      "RFCI's multi-attribute sustainability certification built on NSF/ANSI 332. It evaluates resilient flooring products across environmental, health and wellness, and social responsibility criteria, with independent verification.",
    category: 'Certifications',
    aliases: ['AFFIRM™', 'NSF/ANSI 332'],
    relatedTerms: ['Material Health', 'Environmental Product Declaration', 'Ecomedes®'],
  },
  {
    term: 'ASSURE® Certified',
    definition:
      "RFCI's quality assurance certification for rigid core products, including SPC and WPC constructions. The program evaluates indoor air quality, performance, vertical deflection, heavy metals, and ortho-phthalates.",
    category: 'Certifications',
    aliases: ['ASSURE®'],
    relatedTerms: ['Rigid Core', 'Vertical Deflection', 'FloorScore®'],
  },
  {
    term: 'Environmental Product Declaration',
    definition:
      "A third-party verified report that communicates a product's environmental impacts across its life cycle using standardized LCA methodology. RFCI publishes industry-wide EPDs for multiple resilient flooring product types.",
    category: 'Sustainability',
    aliases: ['EPD', 'Environmental Product Declarations'],
    relatedTerms: ['Material Health', 'AFFIRM™ Certified', 'Ecomedes®'],
  },
  {
    term: 'FloorScore®',
    definition:
      'An indoor air quality certification administered by SCS Global Services that verifies flooring products comply with California Section 01350 VOC emissions requirements.',
    category: 'Certifications',
    aliases: ['FloorScore® certification', 'FloorScore® Certified'],
    relatedTerms: ['VOC', 'ASSURE® Certified'],
  },
  {
    term: 'Material Health',
    definition:
      "A way of evaluating how a product's ingredients affect people and the environment. In resilient flooring, material health often relates to ingredient disclosure, substances of concern, and third-party certifications such as AFFIRM™.",
    category: 'Sustainability',
    aliases: ['healthy materials'],
    relatedTerms: ['AFFIRM™ Certified', 'VOC', 'Environmental Product Declaration'],
  },
  {
    term: 'Rigid Core',
    definition:
      'A resilient flooring category with a rigid polymeric core, a decorative top surface, and often an attached underlayment. The two main rigid core constructions are SPC and WPC.',
    category: 'Flooring Types',
    aliases: ['multilayer flooring'],
    relatedTerms: ['SPC', 'WPC', 'ASSURE® Certified'],
  },
  {
    term: 'SPC',
    definition:
      'Solid Polymer Core rigid core flooring. SPC products are known for density, indentation resistance, and dimensional stability in demanding environments.',
    category: 'Flooring Types',
    aliases: ['Stone Polymer Composite', 'Solid Polymer Core'],
    relatedTerms: ['Rigid Core', 'WPC', 'ASSURE® Certified'],
  },
  {
    term: 'VOC',
    definition:
      'Volatile Organic Compound. VOCs can off-gas from some building materials, so RFCI programs like FloorScore® focus on testing and documenting low-emitting resilient flooring products.',
    category: 'Performance',
    aliases: ['volatile organic compound', 'volatile organic compounds'],
    relatedTerms: ['FloorScore®', 'Material Health'],
  },
  {
    term: 'Vertical Deflection',
    definition:
      'A performance measure used to evaluate how much a flooring product flexes under load. For rigid core products, it helps confirm structural integrity and contributes to ASSURE® Certified performance qualification.',
    category: 'Performance',
    aliases: ['deflection'],
    relatedTerms: ['ASSURE® Certified', 'Rigid Core'],
  },
  {
    term: 'Water Resistant',
    definition:
      'A product characteristic indicating the flooring can resist routine moisture exposure for a period of time, but not necessarily prevent water from penetrating every joint, edge, or substrate condition.',
    category: 'Performance',
    aliases: ['moisture resistant'],
    relatedTerms: ['Waterproof', 'Slip Resistance'],
  },
  {
    term: 'Waterproof',
    definition:
      'A claim typically used when a flooring product is designed so water will not damage the product itself under intended conditions. It does not eliminate the need to follow manufacturer instructions for seams, subfloors, adhesives, and perimeter details.',
    category: 'Performance',
    aliases: ['water proof'],
    relatedTerms: ['Water Resistant', 'Rigid Core'],
  },
  {
    term: 'WPC',
    definition:
      'Expanded Polymer Core rigid core flooring. WPC constructions are generally thicker and lighter than SPC, often with added underfoot comfort and acoustical benefits.',
    category: 'Flooring Types',
    aliases: ['Wood Polymer Composite', 'Expanded Polymer Core'],
    relatedTerms: ['Rigid Core', 'SPC', 'ASSURE® Certified'],
  },
  {
    term: 'Ecomedes®',
    definition:
      "RFCI's product transparency database, used by architects, designers, and specifiers to find resilient flooring products and review certifications, declarations, and green building attributes in one place.",
    category: 'Sustainability',
    aliases: ['RFCI Ecomedes', 'product database'],
    relatedTerms: ['AFFIRM™ Certified', 'Environmental Product Declaration'],
  },
]

const CATEGORY_TERMS: Record<GlossaryCategory, string[]> = {
  Certifications: ['AFFIRM™ Certified', 'ASSURE® Certified', 'FloorScore®'],
  'Flooring Types': [
    'Asphalt Tile',
    'Cork',
    'Cork Tile',
    'Cushioned Vinyl Flooring',
    'Heterogeneous Resilient Flooring',
    'Homogeneous Rubber Flooring',
    'Homogeneous Vinyl Flooring',
    'Injection Molded Flooring',
    'Inlaid Sheet Flooring',
    'Linoleum',
    'Plank',
    'Polymeric Poured (Seamless) Floors',
    'Printed Sheet Vinyl Flooring',
    'Resilient',
    'Rigid Core',
    'Rubber',
    'Sheet, Resilient Flooring',
    'Solid Vinyl Tile',
    'SPC',
    'Tile, Resilient Flooring',
    'VCT Vinyl Composition Tiles',
    'Vinyl',
    'Vinyl Asbestos Tile (VAT)',
    'WPC',
  ],
  Installation: [
    'Above-Grade',
    'Adhered',
    'Below-Grade',
    'Floating',
    'Full Spread',
    'Heat Welded Seam',
    'On-Grade',
    'Patching Compound',
    'Perimeter Adhered',
    'Seam Sealer',
    'Seams',
    'Subflooring',
    'Substrate',
    'Underlayment',
  ],
  Materials: [
    'Aluminum Oxide',
    'Concrete',
    'Hydraulic Cement',
    'Lightweight Concrete',
    'Linoleum Cement',
    'Oleoresin',
    'Resin',
    'Rosin',
    'Terrazzo',
  ],
  Manufacturing: [
    'Across Machine Direction',
    'Backing',
    'Decorative Layer',
    'Inner Core',
    'Machine Direction',
    'Rotogravure',
  ],
  Performance: [
    'Abrasion',
    'Coefficient of Friction',
    'Dimensional Stability',
    'Drying Room Yellowing',
    'Embossed',
    'Flexibility',
    'Friction Resistance',
    'Gouge',
    'Heterogeneous',
    'Mar',
    'Static Coefficient of Friction',
    'Tangential Force',
    'Traction',
    'Vertical Deflection',
    'VOC',
    'Water Resistant',
    'Waterproof',
    'Wear',
    'Wearlayer',
  ],
  Sustainability: [
    'Beautifully Responsible®',
    'Environmental Product Declaration',
    'Material Health',
    'Post-Consumer Recycled Content',
    'Pre-Consumer Recycled Content',
    'Recycled Content',
    'Ecomedes®',
  ],
  'Industry Terms': [],
}

const ALIAS_LOOKUP: Record<string, string[]> = {
  [glossaryKey('Above-Grade')]: ['Above Grade'],
  [glossaryKey('Below-Grade')]: ['Below Grade'],
  [glossaryKey('On-Grade')]: ['On Grade'],
  [glossaryKey('Beautifully Responsible®')]: ['Beautifully ResponsibleTM'],
  [glossaryKey('Coefficient of Friction')]: ['COF'],
  [glossaryKey('Homogeneous Rubber Flooring')]: ['Homogenous Rubber Flooring'],
  [glossaryKey('Injection Molded Flooring')]: ['Injection molded Flooring'],
  [glossaryKey('Pre-Consumer Recycled Content')]: ['Pre-Consumer Recycle Content'],
  [glossaryKey('Sheet, Resilient Flooring')]: ['Sheet Resilient Flooring'],
  [glossaryKey('Static Coefficient of Friction')]: ['SCOF'],
  [glossaryKey('Tile, Resilient Flooring')]: ['Tile Resilient Flooring'],
  [glossaryKey('VCT Vinyl Composition Tiles')]: [
    'VCT',
    'Vinyl Composition Tile',
    'Vinyl Composition Tiles',
  ],
  [glossaryKey('Vinyl Asbestos Tile (VAT)')]: ['VAT', 'Vinyl Asbestos Tile'],
  [glossaryKey('Wearlayer')]: ['Wear Layer'],
}

const RELATED_LOOKUP: Record<string, string[]> = {
  [glossaryKey('Abrasion')]: ['Wear', 'Aluminum Oxide'],
  [glossaryKey('Adhered')]: ['Perimeter Adhered'],
  [glossaryKey('Coefficient of Friction')]: [
    'Static Coefficient of Friction',
    'Traction',
  ],
  [glossaryKey('Heat Welded Seam')]: ['Seams', 'Seam Sealer'],
  [glossaryKey('Heterogeneous')]: ['Heterogeneous Resilient Flooring'],
  [glossaryKey('Linoleum')]: ['Linoleum Cement'],
  [glossaryKey('Post-Consumer Recycled Content')]: [
    'Pre-Consumer Recycled Content',
    'Recycled Content',
  ],
  [glossaryKey('Pre-Consumer Recycled Content')]: [
    'Post-Consumer Recycled Content',
    'Recycled Content',
  ],
  [glossaryKey('Recycled Content')]: [
    'Post-Consumer Recycled Content',
    'Pre-Consumer Recycled Content',
  ],
  [glossaryKey('Resilient')]: [],
  [glossaryKey('Rubber')]: ['Homogeneous Rubber Flooring'],
  [glossaryKey('Subflooring')]: ['Substrate', 'Underlayment'],
  [glossaryKey('Substrate')]: ['Subflooring', 'Underlayment'],
  [glossaryKey('Traction')]: ['Coefficient of Friction'],
  [glossaryKey('VCT Vinyl Composition Tiles')]: ['Solid Vinyl Tile', 'Vinyl'],
  [glossaryKey('Vinyl')]: ['Solid Vinyl Tile', 'VCT Vinyl Composition Tiles'],
  [glossaryKey('Wear')]: ['Abrasion', 'Wearlayer'],
  [glossaryKey('Wearlayer')]: ['Aluminum Oxide', 'Wear'],
}

function inferCategory(term: string): GlossaryCategory {
  const key = glossaryKey(term)

  for (const [category, terms] of Object.entries(CATEGORY_TERMS)) {
    if (terms.some((candidate) => glossaryKey(candidate) === key)) {
      return category as GlossaryCategory
    }
  }

  return 'Industry Terms'
}

function inferAliases(term: string): string[] {
  return ALIAS_LOOKUP[glossaryKey(term)] ?? []
}

function inferRelatedTerms(term: string): string[] {
  return RELATED_LOOKUP[glossaryKey(term)] ?? []
}

function mergeUnique(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)))
}

function buildGlossaryEntries(seeds: GlossarySeed[]): GlossaryEntry[] {
  const deduped = new Map<string, GlossarySeed>()

  for (const seed of seeds) {
    deduped.set(glossaryKey(seed.term), seed)
  }

  return [...deduped.values()]
    .sort((left, right) => left.term.localeCompare(right.term))
    .map((seed, index) => {
      const aliases = mergeUnique([...(seed.aliases ?? []), ...inferAliases(seed.term)]).filter(
        (alias) => glossaryKey(alias) !== glossaryKey(seed.term),
      )

      const relatedTerms = mergeUnique([
        ...(seed.relatedTerms ?? []),
        ...inferRelatedTerms(seed.term),
      ]).filter((relatedTerm) => glossaryKey(relatedTerm) !== glossaryKey(seed.term))

      return {
        term: seed.term,
        definition: seed.definition,
        category: seed.category ?? inferCategory(seed.term),
        aliases,
        relatedTerms,
        order: index + 1,
      }
    })
}

export const GLOSSARY_ENTRIES: GlossaryEntry[] = buildGlossaryEntries([
  ...SCRAPED_GLOSSARY_SEEDS,
  ...ADDITIONAL_GLOSSARY_SEEDS,
  ...MODERN_GLOSSARY_OVERRIDES,
])
