import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_URI

/** Reuse connection across HMR / serverless warm invocations (Next.js + Mongoose). */
const globalForMongoose = globalThis

if (!globalForMongoose._mongooseCache) {
  globalForMongoose._mongooseCache = { conn: null, promise: null }
}

const cache = globalForMongoose._mongooseCache

export async function connectDB() {
  if (!MONGODB_URI?.trim()) {
    throw new Error(
      "Missing MONGO_URI. Add MONGO_URI to .env.local (or .env), restart `npm run dev`, and on Vercel add it under Project → Settings → Environment Variables."
    )
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection
  }

  if (cache.promise) {
    try {
      await cache.promise
    } catch {
      cache.promise = null
      cache.conn = null
    }
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "portfolio",
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 15_000,
      })
      .then((m) => {
        cache.conn = m.connection
        return m.connection
      })
  }

  try {
    await cache.promise
  } catch (err) {
    cache.promise = null
    cache.conn = null

    const isSrvLookupIssue =
      err?.syscall === "querySrv" ||
      err?.code === "ECONNREFUSED" ||
      (typeof err?.message === "string" && err.message.includes("querySrv"))

    if (isSrvLookupIssue && /^mongodb\+srv:\/\//i.test(MONGODB_URI)) {
      throw new Error(
        [
          "MongoDB SRV lookup failed (mongodb+srv).",
          "Use an Atlas connection string that starts with mongodb:// (not mongodb+srv), or fix DNS (e.g. 1.1.1.1).",
          `Details: ${err?.message ?? String(err)}`,
        ].join(" ")
      )
    }

    throw err
  }

  return mongoose.connection
}
