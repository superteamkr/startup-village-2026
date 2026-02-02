import { motion } from "framer-motion";
import buildersImage from "@/assets/builders-workspace.jpg";

const About = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
              What is <span className="gradient-text">Startup Village?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Startup Village Seoul 2026 is an immersive one-week program
              designed for ambitious builders ready to create the next
              generation of Web3 applications on Solana.
            </p>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join founders, developers, and innovators from around the world
              in Seoul's vibrant tech scene. Get hands-on guidance from Solana
              core contributors, access to exclusive resources, and the chance
              to win substantial prizes.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Duration", value: "7 Days" },
                { label: "Location", value: "Seoul" },
                { label: "Format", value: "In-Person" },
                { label: "Cost", value: "Free*" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <span className="block text-3xl font-bold gradient-text mb-2">
                    {fact.value}
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
