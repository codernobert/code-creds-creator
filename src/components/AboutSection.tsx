import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl">01.</span> Professional Summary
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Full stack engineer with <span className="text-primary font-semibold">5+ years</span> designing 
                high scale, fault tolerant REST APIs, distributed systems, and modern frontends 
                serving <span className="text-primary font-semibold">millions of users</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Expert in <span className="text-primary">Java (Spring Boot/WebFlux)</span>, 
                <span className="text-primary"> Python</span>, and 
                <span className="text-primary"> React</span>, with deep experience in microservices, 
                event driven architectures, cloud native deployments, AI powered platforms, 
                and production observability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proven track record delivering resilient, high throughput platforms, 
                mentoring engineers, and driving architectural decisions that improve 
                performance, reliability, and revenue growth.
              </p>

              <div className="pt-4">
                <p className="text-muted-foreground mb-4">
                  Core technologies I work with:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "Java (Spring Boot/WebFlux)",
                    "Python (FastAPI)",
                    "Go",
                    "React / JavaScript",
                    "PostgreSQL / MongoDB",
                    "Kafka / Redis",
                    "Docker / Kubernetes",
                    "AWS / CI/CD"
                  ].map((tech) => (
                    <li key={tech} className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">▹</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <div className="relative bg-card rounded-lg overflow-hidden border border-border">
                  <div className="aspect-square bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-mono text-4xl text-primary">NO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
