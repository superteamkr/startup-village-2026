import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import abstractImage from "@/assets/abstract-shapes.jpg";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={abstractImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Applications Now Open
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready to Build the{" "}
            <span className="gradient-text">Future?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the most ambitious builders in Web3 for an unforgettable week
            of creation, connection, and competition.
          </p>

          <div className="flex justify-center mb-12">
            <a href="https://tally.so/r/RGPJ2K" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="black" className="font-medium">
                Apply Now
              </Button>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
