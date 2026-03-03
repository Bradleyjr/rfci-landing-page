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
    // If push fails due to enum type conflicts, drop the stale enums and retry
    if (err.message?.includes('SET DATA TYPE') && err.message?.includes('enum')) {
      console.log('⚠️  Enum conflict detected — dropping stale enum types and retrying...')
      const db = (payload.db as any)
      const pool = db.pool
      if (pool) {
        // Drop all custom enum types so they can be recreated
        const enumsResult = await pool.query(
          `SELECT typname FROM pg_type WHERE typtype = 'e' AND typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')`
        )
        for (const row of enumsResult.rows) {
          try {
            await pool.query(`DROP TYPE IF EXISTS "public"."${row.typname}" CASCADE`)
          } catch { /* ignore */ }
        }
        await db.destroy?.()
      }
      // Re-init from scratch
      const [{ default: payload2 }, { default: configPromise2 }] = await Promise.all([
        import('payload'),
        import('../payload.config'),
      ])
      await payload2.init({
        config: configPromise2,
        disableOnInit: true,
      })
      console.log('✅ Schema push complete after enum fix.')
      await (payload2.db as any).destroy?.()
    } else {
      console.error('❌ Schema push failed:', err.message)
      console.error(err.stack)
      process.exit(1)
    }
  }

  process.exit(0)
}

run()
