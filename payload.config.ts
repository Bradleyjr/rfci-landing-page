import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Members } from './collections/Members'
import { FlooringTypes } from './collections/FlooringTypes'
import { Certifications } from './collections/Certifications'
import { Environments } from './collections/Environments'
import { Videos } from './collections/Videos'
import { LinkedInPosts } from './collections/LinkedInPosts'
import { FAQs } from './collections/FAQs'
import { Resources } from './collections/Resources'
import { InspirationProjects } from './collections/InspirationProjects'
import { SiteSettings } from './globals/SiteSettings'
import { CommunityEvent } from './globals/CommunityEvent'
import { AboutPage } from './globals/AboutPage'
import { WhyResilientPage } from './globals/WhyResilientPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      url: ({ data, collectionConfig, globalConfig }: any) => {
        const base = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'
        if (collectionConfig?.slug === 'faqs') return `${base}/faq`
        if (collectionConfig?.slug === 'resources') return `${base}/resources`
        if (collectionConfig?.slug === 'certifications') return `${base}/certifications/${data?.slug || ''}`
        if (collectionConfig?.slug === 'flooring-types') return `${base}/flooring/${data?.slug || ''}`
        if (collectionConfig?.slug === 'inspiration-projects') return `${base}/inspiration`
        if (collectionConfig?.slug === 'members') return `${base}/members`
        if (collectionConfig?.slug === 'videos') return `${base}/videos`
        if (collectionConfig?.slug === 'environments') return `${base}/inspiration`
        if (collectionConfig?.slug === 'linkedin-posts') return `${base}/`
        if (globalConfig?.slug === 'site-settings') return `${base}/`
        if (globalConfig?.slug === 'about-page') return `${base}/about`
        if (globalConfig?.slug === 'why-resilient-page') return `${base}/why-resilient`
        if (globalConfig?.slug === 'community-event') return `${base}/`
        return `${base}/`
      },
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1280, height: 800 },
      ],
      collections: [
        'faqs', 'resources', 'certifications', 'flooring-types',
        'inspiration-projects', 'members', 'videos', 'environments',
        'linkedin-posts',
      ],
      globals: ['site-settings', 'about-page', 'why-resilient-page', 'community-event'],
    },
  },
  collections: [Users, Media, Members, FlooringTypes, Certifications, Environments, Videos, LinkedInPosts, FAQs, Resources, InspirationProjects],
  globals: [SiteSettings, CommunityEvent, AboutPage, WhyResilientPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: process.env.DATABASE_URI?.startsWith('postgresql') || process.env.DATABASE_URI?.startsWith('postgres')
    ? postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI }, push: true })
    : sqliteAdapter({ client: { url: process.env.DATABASE_URI || 'file:./rfci-dev.db' } }),
  sharp,
})
