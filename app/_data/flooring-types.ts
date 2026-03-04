export type FlooringType = {
  title: string
  subtitle: string
  description: string
  accentColor: string
  slug?: string
  tags: Array<{ label: string; variant: 'green' | 'tan' | 'gray' }>
  longDescription?: string
  heroImage?: { url: string }
  features?: Array<{ title: string; description: string }>
  applications?: Array<{ environment: string; description: string }>
  relatedCertifications?: string[]
  order: number
}

export const FLOORING_TYPES: FlooringType[] = [
  {
    title: 'Flexible LVT',
    subtitle: 'Luxury Vinyl Tile \u00b7 Planks',
    description: 'The most popular choice in residential and commercial flooring. Flexible LVT is waterproof, durable, and comes in wood and stone visuals. It installs easily and holds up in high-traffic areas.',
    accentColor: '#9CA3AF',
    tags: [
      { label: 'Waterproof', variant: 'green' },
      { label: 'High Traffic', variant: 'tan' },
      { label: 'Easy Install', variant: 'gray' },
    ],
    order: 1,
  },
  {
    title: 'Rigid Core',
    subtitle: 'SPC \u00b7 WPC \u00b7 Multilayer',
    description: 'A stiffer, more dimensionally stable version of LVT. Rigid core products resist temperature swings and indentation, making them a strong choice for challenging environments.',
    accentColor: '#78909C',
    tags: [
      { label: 'Waterproof', variant: 'green' },
      { label: 'Dimensionally Stable', variant: 'tan' },
    ],
    order: 2,
  },
  {
    title: 'Heterogeneous Sheet Vinyl',
    subtitle: 'Multi-layer \u00b7 Printed Design',
    description: 'A multi-layer sheet vinyl with a printed design layer, giving it strong customization options. A go-to for healthcare, education, and commercial spaces that need both durability and design flexibility.',
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
    description: 'A solid, single-layer vinyl sheet where the color and pattern run all the way through. Extremely durable and easy to maintain \u2014 widely used in hospitals and laboratories.',
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
    description: 'Flexible vinyl tiles made from solid PVC compounds. A cost-effective, durable option for commercial spaces with the added benefit of individual tile replacement when needed.',
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
    description: 'A proven commercial staple made from vinyl and limestone. VCT is extremely durable and cost-effective in high-traffic areas like retail and schools. Requires periodic waxing to maintain its finish.',
    accentColor: '#CFD8DC',
    tags: [
      { label: 'Durable', variant: 'green' },
      { label: 'Cost-effective', variant: 'tan' },
    ],
    order: 6,
  },
  {
    title: 'Rubber',
    subtitle: 'Vulcanized \u00b7 Recycled Content',
    description: 'Outstanding durability, acoustic performance, and slip resistance. Common in gyms, hospitals, and transit facilities. Often made with recycled rubber content.',
    accentColor: '#D4A574',
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
    description: 'Made from linseed oil, wood flour, and limestone \u2014 natural materials used in flooring for over 150 years. Biodegradable, antimicrobial, and carbon neutral.',
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
    description: 'Harvested from cork oak bark without cutting the tree. Warm underfoot, naturally acoustic, and a fully renewable resource.',
    accentColor: '#C4A882',
    tags: [
      { label: 'Renewable', variant: 'green' },
      { label: 'Acoustic', variant: 'tan' },
    ],
    order: 9,
  },
]
