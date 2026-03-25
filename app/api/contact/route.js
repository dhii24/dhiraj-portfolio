import { connectDB } from "@/lib/mongodb"
import Message from "@/models/Message"
import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req) {
  try {
    const body = await req.json()
    const name = typeof body?.name === "string" ? body.name.trim() : ""
    const email = typeof body?.email === "string" ? body.email.trim() : ""
    const message = typeof body?.message === "string" ? body.message.trim() : ""

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in name, email, and message." },
        { status: 400 }
      )
    }

    await connectDB()

    const doc = await Message.create({ name, email, message })

    return NextResponse.json({
      success: true,
      data: doc,
    })
  } catch (err) {
    console.error(err)

    let message = "Failed to save message"
    if (err?.message?.includes?.("MONGO_URI")) {
      message = err.message
    } else if (err?.code === 8000 || err?.codeName === "AtlasError") {
      message =
        "Database login failed. In MongoDB Atlas: verify the database user password, URL-encode special characters in MONGO_URI, and allow network access (0.0.0.0/0 for Vercel)."
    } else if (
      err?.code === "ENOTFOUND" ||
      err?.message?.includes?.("querySrv")
    ) {
      message =
        "Cannot reach MongoDB. Try a mongodb:// (non-SRV) Atlas string or check DNS/network."
    } else if (typeof err?.message === "string" && err.message.length < 220) {
      message = err.message
    }

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    )
  }
}
