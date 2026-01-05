import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Download } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Safaricom PLC",
    period: "Oct 2022 – Present",
    responsibilities: [
      "Built cloud-native microservices serving millions of users using Java and Python",
      "Developed a high-throughput reactive API proxy, reducing latency by ~40% and request backlogs by ~60%",
      "Implemented resilience patterns (circuit breakers, retries, timeouts), idempotency, and Redis caching",
      "Designed Kafka-based event-driven workflows, processing millions of subscription events monthly",
      "Optimized billing APIs and PostgreSQL schemas, reducing manual operations by ~70%",
      "Designed and built an AI-Powered Tutor Bot (RAG backend platform)",
      "Migrated legacy workflows (SDP → Huawei CSB), driving ~300% revenue growth",
      "Built OTP consent and anti-fraud workflows with immutable audit trails",
      "Owned observability and incident response using Prometheus, Grafana, reducing diagnosis time by ~50%",
    ],
  },
  {
    title: "Software Developer in Test",
    company: "Safaricom PLC – M-PESA Ethiopia",
    period: "Feb 2022 – Sep 2022",
    responsibilities: [
      "Automated high-volume financial transaction test suites with 70%+ coverage",
      "Integrated automated testing into CI/CD pipelines, reducing production regressions",
      "Validated USSD, wallet operations, and integration flows for financial-grade systems",
    ],
  },
  {
    title: "Software Engineer — Independent Consultant",
    company: "Self-Employed",
    period: "Jan 2021 – Feb 2022",
    responsibilities: [
      "Delivered backend REST APIs and systems using Java and Python",
      "Focused on scalability, automation, performance optimization, and clean architecture",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl">04.</span> Professional Experience
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-primary font-mono text-sm mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span> {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-foreground">Education</h3>
            </div>
            <p className="text-foreground font-medium">BSc. Business Information Technology</p>
            <p className="text-muted-foreground text-sm">
              Jomo Kenyatta University of Agriculture & Technology (JKUAT)
            </p>
            <p className="text-muted-foreground text-sm font-mono">Aug 2018 – Dec 2021</p>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
