// import mongoose from "mongoose"

// const MONGODB_URI = "mongodb://127.0.0.1:27017/portfolio"

// export const connectDB = async () => {

//   if (mongoose.connection.readyState >= 1) {
//     return
//   }

//   await mongoose.connect(MONGODB_URI)

//   console.log("MongoDB connected")
// }

import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_URI

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI environment variable")
}

let isConnected = false

export const connectDB = async () => {
  if (isConnected) return

  if (mongoose.connection.readyState >= 1) {
    isConnected = true
    return
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "portfolio",
    })
  } catch (err) {
    const isSrvLookupIssue =
      err?.syscall === "querySrv" ||
      err?.code === "ECONNREFUSED" ||
      (typeof err?.message === "string" && err.message.includes("querySrv"))

    if (isSrvLookupIssue && /^mongodb\+srv:\/\//i.test(MONGODB_URI)) {
      throw new Error(
        [
          "MongoDB connection failed during SRV DNS lookup (mongodb+srv).",
          "",
          "Your network/DNS is blocking SRV records for Atlas. Fix options:",
          "1) Use a standard (non-SRV) connection string from MongoDB Atlas (Drivers -> Node.js) that starts with 'mongodb://...' and set it as MONGO_URI",
          "2) Or change your DNS/network (try a different network or set DNS to 1.1.1.1 / 8.8.8.8) so SRV lookups work",
          "",
          `Original error: ${err?.message ?? String(err)}`,
        ].join("\n")
      )
    }

    throw err
  }

  isConnected = true
  console.log("MongoDB connected")
}