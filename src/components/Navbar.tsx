import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoColor from "@/assets/logo-color.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div
          className={cn(
            "rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300",
            isScrolled
              ? "backdrop-blur-md bg-background/[0.02] border-[1.5px] border-white/10"
              : "bg-transparent"
          )}
        >
          <a href="#" className="flex items-center">
            <img src={logoColor} alt="Startup Village Seoul" className="h-10 md:h-[42px] w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#schedule"
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              Schedule
            </a>
            <a
              href="#faq"
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
            <a
              href="https://luma.com/startupvillagekr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              Events
            </a>
            <a href="https://tally.so/r/RGPJ2K" target="_blank" rel="noopener noreferrer">
              <Button variant="black" size="sm" className="font-medium">
                Apply Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass rounded-2xl mt-2 p-6"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#schedule"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Schedule
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
              <a
                href="https://luma.com/startupvillagekr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Events
              </a>
              <a href="https://tally.so/r/RGPJ2K" target="_blank" rel="noopener noreferrer">
                <Button variant="black" className="mt-2 font-medium">
                  Apply Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
