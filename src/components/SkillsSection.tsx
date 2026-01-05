import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud, Wrench, MessageSquare, TestTube, Users, Eye } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Backend",
    icon: Code2,
    skills: ["Java", "Python", "Go", "JavaScript (ES6+)", "REST APIs", "Microservices", "Event-Driven Architecture", "System Design"],
  },
  {
    title: "Frontend & UI",
    icon: Wrench,
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "UI Integration with Backend APIs"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Schema Design", "Indexing", "Sharding"],
  },
  {
    title: "Messaging & Streaming",
    icon: MessageSquare,
    skills: ["Kafka", "Kafka Streams", "RabbitMQ"],
  },
  {
    title: "AI & Data Platforms",
    icon: Cloud,
    skills: ["FastAPI", "Vector Search", "Open-Source LLMs", "RAG"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS (EC2, S3, RDS, CloudWatch)", "CI/CD (Jenkins, GitHub Actions)", "Linux"],
  },
  {
    title: "Observability & Reliability",
    icon: Eye,
    skills: ["Prometheus", "Grafana", "Loki", "Tempo", "Distributed Tracing", "Profiling", "Incident Response"],
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    skills: ["TDD", "BDD", "API Testing", "Performance Testing", "Automation", "JUnit", "Selenium", "JMeter"],
  },
  {
    title: "Collaboration",
    icon: Users,
    skills: ["Agile / Scrum", "Code Reviews", "Cross-Functional Teamwork", "Mentoring"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl">02.</span> Core Technical Skills
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="font-mono text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
