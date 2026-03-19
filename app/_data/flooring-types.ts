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
  features?: Array<{ title: string; description: string }>
  applications?: Array<{ environment: string; description: string }>
  relatedCertifications?: string[]
  order: number
}

export const FLOORING_TYPES: FlooringType[] = [
  {
    title: 'Flexible LVT',
    subtitle: 'Luxury Vinyl Tile \u00b7 Planks',
    description: 'Luxury vinyl tile (LVT) is a flexible resilient flooring category produced in tiles or planks. Design realism, easy maintenance, and strong water-resistant performance make it a practical alternative to ceramic tile, stone, and hardwood in many spaces.',
    accentColor: '#9CA3AF',
    productImage: '/media/flooring/flexible-lvp.png',
    tags: [
      { label: 'Water Resistant', variant: 'green' },
      { label: 'High Traffic', variant: 'tan' },
      { label: 'Easy Install', variant: 'gray' },
    ],
    order: 1,
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC \u00b7 WPC \u00b7 Multilayer',
    description: 'Rigid Core is a resilient flooring category with a rigid polymeric core, a decorative top surface, and often an attached underlayment. Available in WPC and SPC constructions, it is widely specified where dimensional stability, floating installation, and waterproof product performance are priorities.',
    accentColor: '#78909C',
    productImage: '/media/flooring/rigid-core.png',
    tags: [
      { label: 'Waterproof', variant: 'green' },
      { label: 'Dimensionally Stable', variant: 'tan' },
    ],
    order: 2,
  },
  {
    title: 'Heterogeneous Sheet Vinyl',
    subtitle: 'Multi-layer \u00b7 Printed Design',
    description: 'The vinyl sheet flooring offered today is the product of years of advancements in manufacturing technology providing more depth and texture than ever before. Typically offered in 6\' and 12\' widths for commercial and residential spaces.',
    accentColor: '#B0C4DE',
    tags: [
      { label: 'Hygienic', variant: 'green' },
      { label: 'Seamless', variant: 'tan' },
    ],
    order: 3,
  },
  {
    title: 'Homogeneous Sheet Vinyl',
    subtitle: 'Through-body \u00b7 Single Layer',
    description: 'Made of a single layer with through-color construction, meaning the color and visual on the surface goes all the way through the floor. This gives the flooring rigidity, toughness, and vibrancy. Incredibly durable and stain resistant.',
    accentColor: '#90A4AE',
    tags: [
      { label: 'Hygienic', variant: 'green' },
      { label: 'Through-body Color', variant: 'tan' },
    ],
    order: 4,
  },
  {
    title: 'Solid Vinyl Tile',
    subtitle: 'SVT \u00b7 Flexible Tiles',
    description: 'Solid vinyl tile (SVT) is a type of flexible resilient flooring often used in healthcare, institutional, and educational settings. Versatile and easy to handle, SVT can be used to create patterns and shapes within an overall creative floor design.',
    accentColor: '#A5B4BC',
    tags: [
      { label: 'Cost-effective', variant: 'green' },
      { label: 'Replaceable Tiles', variant: 'tan' },
    ],
    order: 5,
  },
  {
    title: 'Vinyl Composition Tile',
    subtitle: 'VCT \u00b7 Commercial Standard',
    description: 'Vinyl Composition Tile (VCT) is a finished flooring material used primarily in commercial and institutional applications. A popular choice due to its low cost and durability, with through-color construction that provides years of lasting beauty.',
    accentColor: '#CFD8DC',
    productImage: '/media/flooring/vct.png',
    tags: [
      { label: 'Durable', variant: 'green' },
      { label: 'Cost-effective', variant: 'tan' },
    ],
    order: 6,
  },
  {
    title: 'Rubber',
    subtitle: 'Vulcanized \u00b7 Recycled Content',
    description: 'Available in sheets or tiles, this resilient flooring option is sleek, contemporary, and comfortable underfoot. Colors are contained throughout the thickness and won\'t fade or wear. Waterproof and slip-resistant, ideal for high-traffic institutional and commercial facilities.',
    accentColor: '#D4A574',
    productImage: '/media/flooring/rubber.png',
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
    description: 'Invented in the 1860s, linoleum is experiencing a revival in popularity due to its natural ingredients and environmental properties. Made from linseed oil, wood flour, limestone, cork, tree resins, and jute backing.',
    accentColor: '#8FBC8F',
    tags: [
      { label: 'Bio-based', variant: 'green' },
      { label: 'Carbon Neutral', variant: 'green' },
    ],
    order: 8,
  },
  {
    title: 'Cork',
    subtitle: 'Natural \u00b7 Acoustic',
    description: 'Sleek and contemporary, this resilient flooring is enjoying renewed interest. Warm and soft underfoot, cork is a natural insulator that muffles sound and lowers energy bills. Available in tiles or planks in a variety of colors and sizes.',
    accentColor: '#C4A882',
    tags: [
      { label: 'Renewable', variant: 'green' },
      { label: 'Acoustic', variant: 'tan' },
    ],
    order: 9,
  },
]
