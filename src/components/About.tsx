import { motion } from "framer-motion";
import buildersImage from "@/assets/builders-workspace.jpg";

const About = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Where Ideas Become{" "}
              <span className="gradient-text">Reality</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Startup Village Seoul 2026 is an immersive one-week program
              designed for ambitious builders ready to create the next
              generation of Web3 applications on Solana.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join founders, developers, and innovators from around the world
              in Seoul's vibrant tech scene. Get hands-on guidance from Solana
              core contributors, access to exclusive resources, and the chance
              to win substantial prizes.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Duration", value: "7 Days" },
                { label: "Location", value: "Seoul" },
                { label: "Format", value: "In-Person" },
                { label: "Cost", value: "Free*" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <span className="block text-2xl font-bold gradient-text">
                    {fact.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={buildersImage}
                alt="Builders collaborating at Startup Village"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/20" />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 glow-primary"
            >
              <span className="text-3xl font-bold gradient-text">2026</span>
              <span className="block text-sm text-muted-foreground">
                Third Edition
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
