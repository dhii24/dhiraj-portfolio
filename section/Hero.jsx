export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-6">
      <h1 className="text-5xl font-bold mb-6">Hi, I'm Dhiraj 👋</h1>

      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Full Stack MERN Developer passionate about building fast, scalable and
        user-friendly web applications.
      </p>

      <div className="flex gap-6">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          View Projects
        </button>

        <button className="border border-black px-6 py-3 rounded-lg">
          Contact Me
        </button>
      </div>
    </section>
  );
}
