import { motion } from "framer-motion";
import { Code2, Users, Trophy, Rocket, Lightbulb, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Build",
    description:
      "Develop cutting-edge applications on Solana with hands-on workshops and expert mentorship.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "Network with top founders, investors, and builders from the global Solana ecosystem.",
  },
  {
    icon: Trophy,
    title: "Win",
    description:
      "Compete for $500K+ in prizes and gain direct access to leading Web3 accelerators.",
  },
];

const highlights = [
  {
    icon: Rocket,
    stat: "100+",
    label: "Teams",
  },
  {
    icon: Lightbulb,
    stat: "50+",
    label: "Mentors",
  },
  {
    icon: Zap,
    stat: "$500K+",
    label: "In Prizes",
  },
];

const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why <span className="gradient-text">Join Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seven days of intensive building, learning, and connecting with the
            best minds in blockchain.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 hover:glow-primary">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <span className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {item.stat}
                </span>
                <span className="text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
