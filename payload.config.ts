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
import { SiteSettings } from './globals/SiteSettings'
import { CommunityEvent } from './globals/CommunityEvent'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Members, FlooringTypes, Certifications, Environments, Videos],
  globals: [SiteSettings, CommunityEvent],
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
