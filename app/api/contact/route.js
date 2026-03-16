// import { connectDB } from "../lib/mongodb"
import { connectDB } from "@/lib/mongodb"
import Message from "@/models/Message"

export async function POST(req) {

  const body = await req.json()

  await connectDB()

  const message = await Message.create(body)

  return Response.json({
    success: true,
    data: message
  })

}