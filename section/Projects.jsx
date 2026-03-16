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
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col h-full"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

            <p className="text-gray-500 mb-4">{project.description}</p>

            <p className="text-sm font-medium mb-6">{project.tech}</p>

            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                className="border px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




