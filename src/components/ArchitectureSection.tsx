import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Box, CheckCircle } from "lucide-react";

const principles = [
  "Clear separation of concerns between APIs, domain logic, and integrations",
  "Stateless services to enable horizontal scaling",
  "Event-driven designs to reduce coupling and improve reliability",
  "Idempotent workflows for financial and billing systems",
  "Observability-first mindset (logs, metrics, traces)",
];

const architectureDiagrams = [
  {
    title: "Reactive SDP Proxy",
    diagram: `Client → API Gateway → Reactive WebFlux Proxy → SDP
         Redis · Circuit Breakers · Prometheus`,
    description: "This system replaced an unmaintainable legacy proxy and delivered predictable latency under peak load while improving throughput by ~40%.",
  },
  {
    title: "E-Newspaper Subscription Platform",
    diagram: `Clients → API Gateway → Subscription Service → Billing Service → Kafka Topics → Notification Service
         PostgreSQL · Quartz Scheduler · Idempotent Flows`,
    description: "Event-driven microservices automate subscription lifecycles, ensuring reliability, idempotent billing, and seamless integration across millions of transactions.",
  },
  {
    title: "Billing Migration (SDP → Huawei CSB)",
    diagram: `Clients → API Gateway → Payment Orchestration → Huawei CSB
         SOAP/XML · XSD/WSDL Validation · Modular Billing Layer`,
    description: "Modular payment orchestration layer ensures reliable SOAP/XML integrations, reduces failures, and enables new products.",
  },
];

const ArchitectureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="font-mono text-primary text-xl">05.</span> Architecture Thinking
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              I design backend systems with a strong focus on scalability, resilience, 
              and long-term maintainability. My architectural decisions are guided by 
              real production constraints — traffic spikes, partial failures, and evolving business needs.
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Box className="w-5 h-5 text-primary" />
                Key Design Principles
              </h3>
              <ul className="space-y-2">
                {principles.map((principle, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>

            {architectureDiagrams.map((arch, index) => (
              <motion.div
                key={arch.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6"
              >
                <h3 className="font-semibold text-foreground mb-4">Example: {arch.title}</h3>
                <div className="bg-background/50 rounded-lg p-4 mb-4 font-mono text-sm text-primary overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{arch.diagram}</pre>
                </div>
                <p className="text-muted-foreground text-sm">{arch.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
