import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary text-sm mb-4">08. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm always open to discussing new opportunities, challenging projects, 
            or collaborations. Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+254758551314" className="text-muted-foreground hover:text-primary transition-colors">
                  +254 758 551 314
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:norbertokoth01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  norbertokoth01@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <a 
                  href="https://www.linkedin.com/in/norbert-okoth-321325207/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <a 
                  href="https://github.com/codernobert"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitLab Profile
                </a>
              </div>
            </div>
          </div>
          
          <motion.a
            href="mailto:norbertokoth01@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 font-mono px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
