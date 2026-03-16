import { motion } from "framer-motion";
export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* {skills.map((skill, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 text-center text-lg font-semibold hover:bg-black hover:text-white transition"
          >
            {skill}
          </div>
        ))} */}

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border rounded-xl p-6 text-center text-lg font-semibold hover:bg-black hover:text-white transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
