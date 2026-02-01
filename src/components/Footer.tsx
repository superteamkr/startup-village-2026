import { motion } from "framer-motion";
import { Twitter, Github, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold gradient-text mb-2">
              Startup Village Seoul
            </h3>
            <p className="text-sm text-muted-foreground">
              Building the future on Solana
            </p>
          </motion.div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Schedule
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors"
            >
              <Globe className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Startup Village Seoul. Built with ❤️ on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
