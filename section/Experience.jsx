import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      role: "Web Developer",
      company: "Edu Tainer",
      location: "Remote",
      period: "Feb 2026 — Present",
      points: [
        "Built interactive user interfaces using HTML, CSS, and JavaScript to ensure a smooth experience across different screen sizes",
        "Developed and maintained web applications using React 19 and Next.js to create efficient, fast-loading components.",
        "Utilized Python to handle data-related tasks and support the logic behind web features.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Python"],
    },
  ]

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Work experience
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          WHAT I HAVE DONE SO FAR
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <ol className="relative border-s border-border ps-6">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.role}-${exp.period}`} className="mb-10">
              <span
                className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-foreground"
                aria-hidden="true"
              />

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {exp.role} <span className="text-muted-foreground">•</span>{" "}
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 ps-5 text-sm text-muted-foreground">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                {exp.tech?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

