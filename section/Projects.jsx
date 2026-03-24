import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaGithub } from "react-icons/fa"

export default function Projects() {
  const projects = [
    {
      title: "Gym-Member-Management-App",
      description: "Gym Member Management App using Node.js, Express, MongoDB",
      tech: "Tailwind CSS, Node.js, Express.js, MongoDB, EJS for templating",
      github: "https://github.com/dhii24/gym-member-management-app",
      // live: "https://password-manager-demo.vercel.app",
    },
    {
      title: "React-Weather-App",
      description:
        "Weather app that fetches temperature, humidity across the nation",
      tech: "React, JavaScript(ES6), Weather API(OpenWeather API)",
      github: "https://github.com/dhii24/react-weather-app",
      // live: "https://task-manager-demo.vercel.app",
    },
    {
      title: "CN-Visual-Lab",
      description: "Computer Networks Visual Lab using HTML,Tailwind, JS",
      tech: " Tailwind CSS, JavaScript, Computer Networks Concepts",
      github: "https://github.com/dhii24/cn-visual-lab",
      // live: "https://task-manager-demo.vercel.app",
    },
    {
      title: "Netflix-Clone",
      description: "Developed a Netflix clone using HTML, CSS",
      tech: "HTML, CSS",
      github: "https://github.com/dhii24/Netflix-Clone",
      // live: "https://github-oauth-demo.vercel.app",
    },
    {
      title: "Todo-List",
      description: "Simple To-Do list using HTML, CSS, JS",
      tech: "React, Express, MongoDB",
      github: "https://github.com/dhii24/todo-list",
      // live: "https://task-manager-demo.vercel.app",
    },
    {
      title: "Login-Page",
      description: "Simple Login Page",
      tech: "HTML, CSS",
      github: "https://github.com/dhii24/Login-Page",
      // live: "https://task-manager-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          A few things I’ve built recently.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-muted text-sm font-semibold text-foreground">
                  {project.title?.[0] ?? "P"}
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {String(project.tech || "")
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .slice(0, 6)
                  .map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <Button variant="outline" asChild className="gap-2">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </Button>

              {project.live ? (
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




