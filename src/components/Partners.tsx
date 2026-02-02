import { motion } from "framer-motion";

const partners = [
    { name: "Solana Foundation", type: "Ecosystem" },
    { name: "Superteam", type: "Community" },
    { name: "Google for Startups", type: "Venue Partner" },
];

const Partners = () => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12">
                        <span className="gradient-text">Partners</span>
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass rounded-xl px-8 py-4 text-center"
                            >
                                <p className="font-semibold">{partner.name}</p>
                                <p className="text-xs text-muted-foreground">{partner.type}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
