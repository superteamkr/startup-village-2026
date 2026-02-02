import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import logoBlack from "@/assets/logo-black.svg";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Fade to white effect: opacity 0 at start, ~0.85 at the end of hero section
  const whiteOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.85]);
  // Slight scale effect for the background to make it feel more dynamic
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={targetRef} className="relative h-[100vh] overflow-hidden">
      {/* Background Container - Fixed/Sticky behavior */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ scale: backgroundScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Subtle initial gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-transparent to-background/40" />

        {/* Dynamic White Fade Overlay */}
        <motion.div
          style={{ opacity: whiteOverlayOpacity }}
          className="absolute inset-0 z-20 bg-white"
        />
      </div>

      {/* Content - Absolute positioned over the sticky background to scroll naturally */}
      <div className="absolute inset-0 top-0 h-screen z-30 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center mb-20"
            >
              <img
                src={logoBlack}
                alt="Startup Village Seoul 2026"
                className="h-52 md:h-76 lg:h-[22.5rem] w-auto"
              />
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 max-w-3xl mx-auto"
            >
              Connect, Build, and Win on{" "}
              <span className="gradient-text">Solana</span>
            </motion.p>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-8 text-foreground font-bold"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Feb 22 ~ 28</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Seoul, South Korea</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="https://tally.so/r/RGPJ2K" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="black" className="font-medium">
                  Apply Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
