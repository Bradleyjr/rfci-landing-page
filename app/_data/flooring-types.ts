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
    title: 'Lorem Ipsum',
    subtitle: 'Dolor Sit \u00b7 Amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    accentColor: '#9CA3AF',
    tags: [
      { label: 'Lorem', variant: 'green' },
      { label: 'Ipsum', variant: 'tan' },
      { label: 'Dolor', variant: 'gray' },
    ],
    order: 1,
  },
  {
    title: 'Dolor Amet',
    subtitle: 'Sed \u00b7 Do \u00b7 Eiusmod',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    accentColor: '#78909C',
    tags: [
      { label: 'Lorem', variant: 'green' },
      { label: 'Amet', variant: 'tan' },
    ],
    order: 2,
  },
  {
    title: 'Consectetur Adipiscing',
    subtitle: 'Tempor \u00b7 Incididunt',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    accentColor: '#B0C4DE',
    tags: [
      { label: 'Consectetur', variant: 'green' },
      { label: 'Adipiscing', variant: 'tan' },
    ],
    order: 3,
  },
  {
    title: 'Sed Eiusmod Tempor',
    subtitle: 'Labore \u00b7 Dolore',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum amet.',
    accentColor: '#90A4AE',
    tags: [
      { label: 'Consectetur', variant: 'green' },
      { label: 'Elit Sed', variant: 'tan' },
    ],
    order: 4,
  },
  {
    title: 'Magna Aliqua',
    subtitle: 'Magna \u00b7 Aliqua',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa.',
    accentColor: '#A5B4BC',
    tags: [
      { label: 'Eiusmod', variant: 'green' },
      { label: 'Tempor', variant: 'tan' },
    ],
    order: 5,
  },
  {
    title: 'Veniam Nostrud',
    subtitle: 'Veniam \u00b7 Nostrud',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
    accentColor: '#CFD8DC',
    tags: [
      { label: 'Incididunt', variant: 'green' },
      { label: 'Labore', variant: 'tan' },
    ],
    order: 6,
  },
  {
    title: 'Exercitation',
    subtitle: 'Quis \u00b7 Exercitation',
    description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.',
    accentColor: '#D4A574',
    tags: [
      { label: 'Dolore', variant: 'green' },
      { label: 'Magna', variant: 'tan' },
      { label: 'Aliqua', variant: 'gray' },
    ],
    order: 7,
  },
  {
    title: 'Ullamco',
    subtitle: 'Ullamco \u00b7 Laboris',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur sed delectus ut aut reiciendis voluptatibus.',
    accentColor: '#8FBC8F',
    tags: [
      { label: 'Veniam', variant: 'green' },
      { label: 'Nostrud', variant: 'green' },
    ],
    order: 8,
  },
  {
    title: 'Laboris',
    subtitle: 'Nisi \u00b7 Aliquip',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum.',
    accentColor: '#C4A882',
    tags: [
      { label: 'Quis', variant: 'green' },
      { label: 'Nisi', variant: 'tan' },
    ],
    order: 9,
  },
]
