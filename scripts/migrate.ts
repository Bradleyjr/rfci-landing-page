/**
 * Database schema migration script (CJS-compatible via tsx).
 * Sets NODE_ENV=development so Payload's pushDevSchema runs,
 * creating all tables in the PostgreSQL database.
 *
 * Usage: npx tsx scripts/migrate.ts
 * Or via npm script: npm run migrate
 */

// Must be set BEFORE payload imports to allow pushDevSchema
process.env.NODE_ENV = 'development'
process.env.PAYLOAD_MIGRATING = 'false'

// Load .env files BEFORE importing Payload (same algorithm as Next.js).
// This must be a static import (it has no env-var dependency itself).
import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd(), true)

async function run() {
  // Dynamic imports AFTER env vars are loaded into process.env
  const [{ default: payload }, { default: configPromise }] = await Promise.all([
    import('payload'),
    import('../payload.config'),
  ])

  console.log('🔄 Starting database schema push...')
  console.log('   DATABASE_URI:', process.env.DATABASE_URI?.replace(/:\/\/.*@/, '://***@'))

  try {
    await payload.init({
      config: configPromise,
      disableOnInit: true,
    })
    console.log('✅ Schema push complete — all tables created/updated.')
    await (payload.db as any).destroy?.()
  } catch (err: any) {
    console.error('❌ Schema push failed:', err.message)
    console.error(err.stack)
    process.exit(1)
  }

  process.exit(0)
}

run()
