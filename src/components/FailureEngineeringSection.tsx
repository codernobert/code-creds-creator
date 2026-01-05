import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, AlertTriangle } from "lucide-react";

const failures = [
  { type: "Downstream outages", solution: "circuit breakers, retries, timeouts" },
  { type: "Traffic spikes", solution: "non-blocking I/O, backpressure, scaling" },
  { type: "Duplicate requests", solution: "idempotency keys and Redis guards" },
  { type: "Partial failures", solution: "transactional boundaries and compensations" },
  { type: "Data inconsistencies", solution: "audit logs and reconciliation flows" },
  { type: "Human error", solution: "validation, safe defaults, rollback strategies" },
];

const FailureEngineeringSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="failure-engineering" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl">07.</span> Failure Engineering
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              In real-world distributed systems, failures are inevitable. 
              I design systems to fail safely, recover gracefully, and protect revenue, 
              data integrity, and customer trust.
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Failures I Explicitly Design For
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {failures.map((failure, index) => (
                  <motion.div
                    key={failure.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-background/50 rounded-lg"
                  >
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{failure.type}</p>
                      <p className="text-muted-foreground text-xs">{failure.solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <p className="text-foreground font-medium">
                My goal is not just to make systems work, but to make them{" "}
                <span className="text-primary">predictable under failure</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FailureEngineeringSection;
