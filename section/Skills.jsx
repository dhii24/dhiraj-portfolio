import { motion } from "framer-motion";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si"

export default function Skills() {
  const skills = [
    { label: "HTML", Icon: SiHtml5 },
    { label: "CSS", Icon: SiCss },
    { label: "JavaScript", Icon: SiJavascript },
    { label: "React", Icon: SiReact },
    { label: "Next.js", Icon: SiNextdotjs },
    { label: "Node.js", Icon: SiNodedotjs },
    { label: "Express", Icon: SiExpress },
    { label: "MongoDB", Icon: SiMongodb },
    { label: "Tailwind CSS", Icon: SiTailwindcss },
    { label: "Git", Icon: SiGit },
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Tech stack
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Tools I use to build reliable web apps.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map(({ label, Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-4 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
