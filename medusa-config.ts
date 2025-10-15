import { loadEnv, defineConfig } from '@medusajs/framework/utils'

// Doar în development local, NU în production (Railway)
if (process.env.NODE_ENV !== 'production') {
  loadEnv(process.env.NODE_ENV || 'development', process.cwd())
}

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL, // ← ADAUGĂ!
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:7001", 
      authCors: process.env.AUTH_CORS || "http://localhost:9000",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  }
})