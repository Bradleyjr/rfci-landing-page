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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
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
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
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
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
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
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum amet.',
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
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa.',
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
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
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
    description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.',
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
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur sed delectus ut aut reiciendis voluptatibus.',
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
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum.',
    accentColor: '#C4A882',
    tags: [
      { label: 'Renewable', variant: 'green' },
      { label: 'Acoustic', variant: 'tan' },
    ],
    order: 9,
  },
]
