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
              <span className="font-mono text-primary text-xl">01.</span> About Me
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm John, a software engineer based in San Francisco, CA. 
                I enjoy creating things that live on the internet, whether that be 
                websites, applications, or anything in between.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My interest in web development started back in 2015 when I decided 
                to try editing custom Tumblr themes — turns out hacking together a 
                custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at 
                <span className="text-primary"> startups</span>, 
                <span className="text-primary"> tech companies</span>, and 
                <span className="text-primary"> agencies</span>. My main focus 
                these days is building accessible, inclusive products and digital 
                experiences for a variety of clients.
              </p>

              <div className="pt-4">
                <p className="text-muted-foreground mb-4">
                  Here are a few technologies I've been working with recently:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {["TypeScript", "React", "Node.js", "Next.js", "PostgreSQL", "AWS"].map((tech) => (
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
                      <span className="font-mono text-4xl text-primary">JD</span>
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
