export type EnvironmentHotspot = {
  id: string
  label: string
  detail: string
  positionClass: string
}

export type Environment = {
  name: string
  flooringType: string
  description: string
  featuredProject: string
  image: { url: string }
  hotspots: EnvironmentHotspot[]
  order: number
}

export const ENVIRONMENTS: Environment[] = [
  {
    name: 'Healthcare',
    flooringType: 'Homogeneous Sheet Vinyl',
    description: 'Seamless visuals, cleanability, and dependable underfoot performance support patient rooms, corridors, and treatment areas.',
    featuredProject: 'Gerflor Mipolam Symbioz Healthcare',
    image: {
      url: 'https://rfci.com/wp-content/uploads/2019/10/Healthcare_Mipolam-Symbioz_Homogeneous-Sheet.jpg',
    },
    hotspots: [
      {
        id: 'cleanability',
        label: 'Cleanability',
        detail: 'Heat-welded seams and monolithic visuals support infection-control protocols.',
        positionClass: 'top-[24%] left-[22%]',
      },
      {
        id: 'comfort',
        label: 'Comfort',
        detail: 'Resilient surfaces reduce fatigue for staff who spend long shifts on their feet.',
        positionClass: 'top-[46%] right-[24%]',
      },
      {
        id: 'durability',
        label: 'Durability',
        detail: 'Built to handle rolling loads, heavy cleaning cycles, and nonstop traffic.',
        positionClass: 'bottom-[20%] left-[42%]',
      },
    ],
    order: 1,
  },
  {
    name: 'Schools',
    flooringType: 'Rubber and Linoleum',
    description: 'Classrooms, libraries, and corridors benefit from acoustic comfort, slip resistance, and low-maintenance finishes.',
    featuredProject: 'Roppe Rubber Sports Flooring at Yale Elementary School',
    image: {
      url: 'https://rfci.com/wp-content/uploads/2019/06/YaleES-RichardsonTx-Roppe-Oct178403.jpg',
    },
    hotspots: [
      {
        id: 'acoustics',
        label: 'Acoustics',
        detail: 'Noise-dampening materials help busy school environments feel calmer and more focused.',
        positionClass: 'top-[22%] right-[18%]',
      },
      {
        id: 'safety',
        label: 'Safety',
        detail: 'Slip-resistant surfaces support active students across halls, cafeterias, and gyms.',
        positionClass: 'top-[50%] left-[20%]',
      },
      {
        id: 'maintenance',
        label: 'Maintenance',
        detail: 'Easy daily cleaning helps facilities teams manage large square footage efficiently.',
        positionClass: 'bottom-[18%] right-[30%]',
      },
    ],
    order: 2,
  },
  {
    name: 'Corporations',
    flooringType: 'Luxury Vinyl Tile',
    description: 'Modern workplaces use resilient flooring to balance brand-forward aesthetics with comfort, flexibility, and long lifecycle value.',
    featuredProject: 'Bentley Memory Craftsman Workplace',
    image: {
      url: 'https://rfci.com/wp-content/uploads/2023/07/memory-craftsman-random-ashlar-9x48-1.jpeg',
    },
    hotspots: [
      {
        id: 'design',
        label: 'Design range',
        detail: 'Wood, stone, and abstract looks help workplace interiors feel intentional rather than utilitarian.',
        positionClass: 'top-[26%] left-[18%]',
      },
      {
        id: 'adaptability',
        label: 'Adaptability',
        detail: 'Products work across open offices, collaboration zones, and private rooms.',
        positionClass: 'top-[44%] right-[22%]',
      },
      {
        id: 'value',
        label: 'Lifecycle value',
        detail: 'Durable wear layers keep replacement cycles and maintenance disruption in check.',
        positionClass: 'bottom-[20%] left-[44%]',
      },
    ],
    order: 3,
  },
  {
    name: 'Retail',
    flooringType: 'Flexible LVT',
    description: 'Retail spaces rely on resilient flooring for visual impact, fast upkeep, and performance under constant foot traffic.',
    featuredProject: 'Sonata Boutique Retail',
    image: {
      url: 'https://rfci.com/wp-content/uploads/2022/03/sonata_boutique_CEO-01-03.jpg',
    },
    hotspots: [
      {
        id: 'branding',
        label: 'Brand expression',
        detail: 'High-definition visuals help stores build a memorable customer experience.',
        positionClass: 'top-[24%] left-[24%]',
      },
      {
        id: 'traffic',
        label: 'Traffic ready',
        detail: 'Resilient surfaces stand up to carts, fixtures, and concentrated daily wear.',
        positionClass: 'top-[50%] right-[20%]',
      },
      {
        id: 'cleanup',
        label: 'Fast cleanup',
        detail: 'Simple maintenance keeps merchandising spaces polished with less downtime.',
        positionClass: 'bottom-[18%] left-[46%]',
      },
    ],
    order: 4,
  },
]
