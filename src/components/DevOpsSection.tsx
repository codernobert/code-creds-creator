import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, CheckCircle, ArrowRight } from "lucide-react";

const pipelineSteps = ["Git", "CI", "Tests", "Security Scan", "Docker Build", "Deploy", "Monitor"];

const capabilities = [
  "Automated builds and unit/integration tests",
  "Static analysis and security scanning (SonarQube, Snyk)",
  "Dockerized deployments via Jenkins / GitLab CI",
  "Infrastructure as Code with Terraform",
  "Production monitoring with Prometheus & Grafana",
];

const DevOpsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="devops" className="py-24 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl">06.</span> DevOps & CI/CD
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              I build software with a strong ownership mindset — from code to production. 
              My focus is on fast feedback loops, safe deployments, and operational visibility.
            </p>

            {/* Pipeline Visualization */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-primary" />
                CI/CD Pipeline
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {pipelineSteps.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 font-mono text-sm text-primary"
                    >
                      {step}
                    </motion.div>
                    {index < pipelineSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Pipeline Capabilities</h3>
              <ul className="space-y-2">
                {capabilities.map((cap, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground text-sm italic">
              I design CI/CD pipelines to support frequent, low-risk releases with rapid rollback and clear production visibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsSection;
