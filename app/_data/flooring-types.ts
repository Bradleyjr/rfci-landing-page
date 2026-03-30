export type FlooringType = {
  title: string
  subtitle: string
  description: string
  accentColor: string
  slug?: string
  tags: Array<{ label: string; variant: 'green' | 'tan' | 'gray' }>
  longDescription?: string
  heroImage?: { url: string }
  productImage?: string
  /** Room-scene image for the homepage carousel. Falls back to productImage if absent. */
  carouselImage?: string
  features?: Array<{ title: string; description: string }>
  applications?: Array<{ environment: string; description: string }>
  relatedCertifications?: string[]
  order: number
}

export const FLOORING_TYPES: FlooringType[] = [
  {
    title: 'Flexible LVT/LVP',
    subtitle: 'Luxury Vinyl Tile \u00b7 Planks',
    slug: 'flexible-lvt',
    description: 'Luxury vinyl tile (LVT) is a flexible resilient flooring category produced in tiles or planks. Design realism, easy maintenance, and strong water-resistant performance make it a practical alternative to ceramic tile, stone, and hardwood in many spaces.',
    accentColor: '#9CA3AF',
    productImage: '/media/flooring/flexible-lvp.png',
    carouselImage: '/images/inspiration/applications/homes/Living-0148-Alt-02-HiResJPG-scaled.jpg',
    tags: [
      { label: 'Water Resistant', variant: 'green' },
      { label: 'High Traffic', variant: 'tan' },
      { label: 'Glue Down', variant: 'gray' },
    ],
    order: 1,
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC \u00b7 WPC \u00b7 Multilayer',
    slug: 'rigid-core',
    description: 'Rigid Core is a resilient flooring category with a rigid polymeric core, a decorative top surface, and often an attached underlayment. Available in WPC and SPC constructions, it is widely specified where dimensional stability, floating installation, and strong moisture performance are priorities.',
    accentColor: '#78909C',
    productImage: '/media/flooring/rigid-core.png',
    carouselImage: '/images/inspiration/applications/homes/Kitchen-0559-Alt-03-HiResJPG-scaled.jpg',
    tags: [
      { label: 'Waterproof', variant: 'green' },
      { label: 'Click Installation', variant: 'tan' },
    ],
    order: 2,
  },
  {
    title: 'Sheet Vinyl',
    subtitle: 'Heterogeneous \u00b7 Homogeneous',
    slug: 'sheet-vinyl',
    description: 'Sheet vinyl is offered in two primary constructions: heterogeneous (multi-layer with a printed design layer, available in 6\u2019 and 12\u2019 widths for residential and commercial use) and homogeneous (through-body single-layer construction where color and pattern run the full thickness, prized in healthcare and institutional settings). Both deliver seamless, hygienic surfaces with heat-weldable seams.',
    accentColor: '#B0C4DE',
    productImage: '/images/inspiration/applications/apartments/Sheet-Vinyl-Blacktex-HD-Avant-Garde_Bone-Venice-Wood-906M.jpg',
    carouselImage: '/images/inspiration/applications/workplace/large-Melodia_HO_VinylSheet_CaseWestern_Cle_Clinic_SchoolofDentistry_HiRes-34.jpg',
    tags: [
      { label: 'Hygienic', variant: 'green' },
      { label: 'Seamless', variant: 'tan' },
      { label: 'Through-body Option', variant: 'gray' },
    ],
    order: 3,
  },
  {
    title: 'Solid Vinyl Tile (SVT)',
    subtitle: 'SVT \u00b7 Flexible Tiles',
    slug: 'solid-vinyl-tile',
    description: 'Solid vinyl tile (SVT) is a type of flexible resilient flooring often used in healthcare, institutional, and educational settings. Versatile and easy to handle, SVT can be used to create patterns and shapes within an overall creative floor design.',
    accentColor: '#A5B4BC',
    productImage: '/images/inspiration/applications/hospitals/abpure_hospital_ABS-36-45-73-83-87.jpg',
    tags: [
      { label: 'Cost-effective', variant: 'green' },
      { label: 'Replaceable Tiles', variant: 'tan' },
    ],
    order: 4,
  },
  {
    title: 'Vinyl Composition Tile (VCT)',
    subtitle: 'VCT \u00b7 Commercial Standard',
    slug: 'vct',
    description: 'Vinyl Composition Tile (VCT) is a finished flooring material used primarily in commercial and institutional applications. A popular choice due to its low cost and durability, with through-color construction that provides years of lasting beauty.',
    accentColor: '#CFD8DC',
    productImage: '/media/flooring/vct.png',
    carouselImage: '/images/inspiration/applications/retail/Expressions_VYL_VCT_Hospitality_1240_1347_1789_RS_HiRes.jpg',
    tags: [
      { label: 'Durable', variant: 'green' },
      { label: 'Cost-effective', variant: 'tan' },
    ],
    order: 6,
  },
  {
    title: 'Rubber',
    subtitle: 'Vulcanized \u00b7 Recycled Content',
    slug: 'rubber',
    description: 'Available in sheets or tiles, this resilient flooring option is sleek, contemporary, and comfortable underfoot. Colors are contained throughout the thickness and won\'t fade or wear. Waterproof and slip-resistant, ideal for high-traffic institutional and commercial facilities.',
    accentColor: '#D4A574',
    productImage: '/media/flooring/rubber.png',
    carouselImage: '/images/inspiration/applications/hospitals/abpure_hospital-corridor_ABS-3490.jpg',
    tags: [
      { label: 'Acoustic', variant: 'green' },
      { label: 'Slip Resistant', variant: 'tan' },
      { label: 'Recycled Content', variant: 'gray' },
    ],
    order: 7,
  },
  {
    title: 'Linoleum',
    subtitle: 'Natural \u00b7 Bio-based',
    slug: 'linoleum',
    description: 'Invented in the 1860s, linoleum is experiencing a revival in popularity due to its natural ingredients and environmental properties. Made from linseed oil, wood flour, limestone, cork, tree resins, and jute backing.',
    accentColor: '#8FBC8F',
    productImage: '/images/inspiration/applications/hospitals/Lino_Healthcare_Hall_RS.jpg',
    tags: [
      { label: 'Bio-based', variant: 'green' },
      { label: 'Low Carbon', variant: 'green' },
      { label: 'Antibacterial', variant: 'gray' },
    ],
    order: 8,
  },
  {
    title: 'Cork',
    subtitle: 'Natural \u00b7 Acoustic',
    slug: 'cork',
    description: 'Sleek and contemporary, this resilient flooring is enjoying renewed interest. Warm and soft underfoot, cork is a natural insulator that muffles sound and lowers energy bills. Available in tiles or planks in a variety of colors and sizes.',
    accentColor: '#C4A882',
    productImage: '/images/inspiration/applications/apartments/RS_CCU91100-FSC-MX_Cork-XP-Burl-Natural_Res-scaled.jpg',
    tags: [
      { label: 'Renewable', variant: 'green' },
      { label: 'Acoustic', variant: 'tan' },
      { label: 'Hypoallergenic', variant: 'gray' },
    ],
    order: 9,
  },
]
