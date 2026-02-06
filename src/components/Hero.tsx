import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.png";
import heroBgMobile from "@/assets/hero-bg-mobile.png";
import logoBlack from "@/assets/logo-black.svg";
import solanaLogo from "@/assets/logo-dark.png";
import superteamLogo from "@/assets/stkr_logo.png";

const Hero = () => {
  const { t } = useLanguage();
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
          {/* Desktop background */}
          <img
            src={heroBg}
            alt="Hero Background"
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile background */}
          <img
            src={heroBgMobile}
            alt="Hero Background Mobile"
            className="block md:hidden w-full h-full object-cover"
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

      {/* Top Logo Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-16 md:top-24 left-0 right-0 z-40 flex items-center justify-center gap-8 md:gap-12"
      >
        <img
          src={solanaLogo}
          alt="Solana Foundation"
          className="h-7 md:h-9 w-auto"
        />
        <img
          src={superteamLogo}
          alt="Superteam KR"
          className="h-8 md:h-10 w-auto"
        />
      </motion.div>

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
              className="flex justify-center mb-12"
            >
              <img
                src={logoBlack}
                alt="Startup Village Seoul 2026"
                className="h-52 md:h-[20rem] lg:h-[22.5rem] w-auto"
              />
            </motion.div>

            {/* Season 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              Season 2
            </motion.p>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-6 max-w-3xl mx-auto"
            >
              Connect, Build, and Win on Solana
            </motion.p>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-8 text-foreground font-bold"
            >
              <div className="flex items-center gap-2">
                <span>2026.02.22 ~ 28</span>
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
                  {t("지원하기", "Apply Now")}
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
