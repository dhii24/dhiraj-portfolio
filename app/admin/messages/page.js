import { connectDB } from "@/lib/mongodb"
import Message from "@/models/Message"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function MessagesPage() {

  let messages = []
  let loadError = null

  try {
    await connectDB()
    messages = await Message.find().sort({ createdAt: -1 })
  } catch (err) {
    loadError = err
  }

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Contact Messages
      </h1>

      {loadError ? (
        <div className="border border-red-300 bg-red-50 text-red-800 p-4 rounded-lg mb-6">
          Failed to load messages. Check your `MONGO_URI` credentials / Atlas user permissions.
        </div>
      ) : null}

      <div className="space-y-6">

        {!loadError && messages.length === 0 ? (
          <div className="text-gray-600">No messages yet.</div>
        ) : null}

        {messages.map((msg) => (

          <div
            key={msg._id}
            className="border p-6 rounded-lg"
          >

            <p><b>Name:</b> {msg.name}</p>
            <p><b>Email:</b> {msg.email}</p>
            <p><b>Message:</b> {msg.message}</p>

          </div>

        ))}

      </div>

    </div>

  )
}