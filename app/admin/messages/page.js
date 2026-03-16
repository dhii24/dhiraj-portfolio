import { connectDB } from "@/lib/mongodb"
import Message from "@/models/Message"

export default async function MessagesPage() {

  await connectDB()

  const messages = await Message.find()

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Contact Messages
      </h1>

      <div className="space-y-6">

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