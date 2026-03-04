export type Environment = {
  name: string
  flooringType: string
  image?: { url: string }
  order: number
}

export const ENVIRONMENTS: Environment[] = [
  { name: 'Lorem Ipsum',        flooringType: 'Dolor Sit Amet',        image: { url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop' }, order: 1 },
  { name: 'Consectetur Elit',   flooringType: 'Sed Eiusmod',           image: { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop' }, order: 2 },
  { name: 'Tempor Incididunt',  flooringType: 'Labore Dolore',         image: { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' }, order: 3 },
  { name: 'Magna Aliqua',       flooringType: 'Veniam Nostrud',        image: { url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop' }, order: 4 },
  { name: 'Ut Enim Minim',      flooringType: 'Quis Exercitation',     image: { url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop' }, order: 5 },
  { name: 'Ullamco Laboris',    flooringType: 'Nisi Aliquip',          image: { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' }, order: 6 },
  { name: 'Commodo Consequat',  flooringType: 'Duis Aute Irure',       image: { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' }, order: 7 },
  { name: 'Reprehenderit',      flooringType: 'Voluptate Velit',       image: { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop' }, order: 8 },
]
