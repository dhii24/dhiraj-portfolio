// // import { connectDB } from "../lib/mongodb"
// import { connectDB } from "@/lib/mongodb"
// import Message from "@/models/Message"

// export async function POST(req) {

//   const body = await req.json()

//   await connectDB()

//   const message = await Message.create(body)

//   return Response.json({
//     success: true,
//     data: message
//   })

// }


import { connectDB } from "@/lib/mongodb"
import Message from "@/models/Message"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const body = await req.json()

    await connectDB()

    const message = await Message.create(body)

    return NextResponse.json({
      success: true,
      data: message
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({
      success: false,
      error: "Failed to save message"
    }, { status: 500 })
  }
}