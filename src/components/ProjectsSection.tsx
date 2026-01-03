import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Cloud Analytics Platform",
    description:
      "A comprehensive analytics dashboard for monitoring cloud infrastructure. Features real-time data visualization, alerting systems, and automated reporting with customizable widgets.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "analytics",
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "Full-stack marketplace application with vendor management, payment processing, and inventory tracking. Built with modern web technologies and scalable architecture.",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "ecommerce",
  },
  {
    title: "AI Content Generator",
    description:
      "Machine learning-powered content generation tool that creates marketing copy, blog posts, and social media content. Integrates with popular CMS platforms.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    github: "https://github.com",
    external: "https://example.com",
    image: "ai",
  },
];

const otherProjects = [
  {
    title: "Task Management CLI",
    description: "A command-line tool for managing tasks and projects with Git integration.",
    tech: ["Go", "SQLite", "Cobra"],
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with location-based forecasts and interactive maps.",
    tech: ["Vue.js", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Markdown Editor",
    description: "A minimal markdown editor with live preview and export capabilities.",
    tech: ["React", "Remark", "CodeMirror"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Template",
    description: "Open-source developer portfolio template with customizable themes.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "API Rate Limiter",
    description: "Middleware library for implementing rate limiting in Node.js applications.",
    tech: ["Node.js", "Redis", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Browser Extension",
    description: "Productivity extension for managing bookmarks and reading lists.",
    tech: ["JavaScript", "Chrome API", "IndexedDB"],
    github: "https://github.com",
    external: "https://example.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl">03.</span> Things I've Built
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-transparent transition-all duration-300" />
                    <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-lg overflow-hidden border border-border">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="font-mono text-primary/50 text-6xl">
                          {project.image === "analytics" && "📊"}
                          {project.image === "ecommerce" && "🛒"}
                          {project.image === "ai" && "🤖"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-6 md:row-start-1 ${
                    index % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
                  } relative z-10`}
                >
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-border mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center justify-between mb-4">
                      <Folder className="w-10 h-10 text-primary" />
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.external && (
                          <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm flex-1 mb-4">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                      {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
