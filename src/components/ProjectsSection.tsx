import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder, CheckCircle } from "lucide-react";

const featuredProjects = [
  {
    title: "AI-Powered Tutor Bot (RAG Backend Platform)",
    role: "Lead Engineer",
    context: "Built an intelligent tutoring backend to deliver accurate, textbook-based programming answers via APIs, addressing the challenge of hallucinations and untraceable responses in generic AI systems.",
    problems: [
      "Unreliable AI responses without grounding in authoritative learning material",
      "Slow retrieval from large unstructured textbook content",
      "Lack of transparency and source traceability in generated answers",
    ],
    solution: "Designed and implemented a Retrieval-Augmented Generation (RAG) backend platform that ingests textbook PDFs, performs semantic chunking and vectorization, and constrains language model responses strictly to retrieved context.",
    impact: [
      "Delivered fast, accurate, and textbook-grounded answers",
      "Sub-second semantic retrieval at scale",
      "Improved trust through traceable, source-backed responses",
    ],
    tech: ["Python", "FastAPI", "MongoDB", "Vector Search", "RAG", "Open-Source LLMs"],
    external: "https://programming-learning-bot.vercel.app/ask.html",
    image: "🤖",
  },
  {
    title: "Reactive Proxy for SDP (ms-sdp-products)",
    role: "Lead Engineer",
    context: "Safaricom relied on a legacy SDP proxy with no available source code, limited scalability, and frequent latency issues under peak traffic.",
    problems: [
      "Blocking I/O causing request backlogs",
      "No resilience against downstream SDP failures",
      "Limited observability and slow incident resolution",
    ],
    solution: "Designed and built a fully reactive Spring WebFlux microservice from scratch to proxy and orchestrate requests to SDP using non-blocking I/O and resilience-first design.",
    impact: [
      "~40% improvement in throughput and response time",
      "Improved resilience under peak traffic",
      "Eliminated dependency on an unmaintainable legacy system",
    ],
    tech: ["Java", "Spring WebFlux", "Redis", "Docker", "Jenkins", "Prometheus"],
    visibility: "Internal (Safaricom)",
    image: "⚡",
  },
  {
    title: "E-Newspaper Subscription Platform",
    role: "Microservices Engineer",
    context: "Large-scale e-newspaper platform managing subscriptions, renewals, and billing events with strict reliability requirements.",
    problems: [
      "Manual and error-prone subscription lifecycle handling",
      "Tight coupling between billing and retries",
      "Poor fault tolerance during downstream failures",
    ],
    solution: "Developed event-driven microservices to automate subscriptions, billing retries, and quota enforcement.",
    impact: [
      "Fully automated subscription lifecycle",
      "Improved reliability across millions of transactions",
      "Reduced operational overhead and manual interventions",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Quartz"],
    external: "https://myaccount.safaricom.co.ke/discover/e-newspaper/publications",
    image: "📰",
  },
];

const otherProjects = [
  {
    title: "E-Newspaper Billing Migration (SDP → Huawei CSB)",
    description: "Led backend migration to Huawei CSB, redesigning SOAP/XML billing flows. Achieved 300% revenue growth (KES 20K → 60K/day).",
    tech: ["Java", "Spring Boot", "SOAP", "XML/XSD/WSDL", "PostgreSQL"],
    external: "https://myaccount.safaricom.co.ke/discover/e-newspaper/publications",
  },
  {
    title: "Skiza OTP Consent & Anti-Fraud Engine",
    description: "OTP-based consent workflows with immutable audit trails for regulatory compliance and fraud prevention.",
    tech: ["Java", "Spring Boot", "Redis", "PostgreSQL"],
    external: "https://skiza.mtech.ke/",
  },
  {
    title: "E-Paper PDF Optimizer Microservice",
    description: "Optimized large PDFs for faster load times, reduced bandwidth, and improved accessibility on low-end devices.",
    tech: ["Python", "Image Processing"],
  },
  {
    title: "E-Newspaper USSD Subscription Streaming",
    description: "Decoupled USSD from billing using Kafka, achieving >60% reduction in lost USSD purchases.",
    tech: ["Java", "Spring Boot", "Kafka Streams", "PostgreSQL"],
  },
  {
    title: "E-Paper Notification Service",
    description: "Kafka-based async notification service achieving >99% successful delivery rate for subscription notifications.",
    tech: ["Java", "Spring Boot", "Kafka", "Event-Driven Architecture"],
  },
  {
    title: "QA & Reliability Engineering — M-PESA Ethiopia",
    description: "Automated testing for USSD and wallet transaction flows, achieving >70% test coverage.",
    tech: ["Java", "JUnit", "Selenium", "JMeter", "SOAP", "REST"],
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
              <span className="font-mono text-primary text-xl">03.</span> Project Case Studies
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-5xl mx-auto hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex-1">
                    <p className="font-mono text-primary text-sm mb-1">{project.role}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
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

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Context</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.context}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Problems</h4>
                    <ul className="space-y-1">
                      {project.problems.map((problem, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-destructive mt-1">✗</span> {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-1">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <ul className="flex flex-wrap gap-2 font-mono text-xs text-primary">
                      {project.tech.map((tech) => (
                        <li key={tech} className="bg-primary/10 px-2 py-1 rounded">{tech}</li>
                      ))}
                    </ul>
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
