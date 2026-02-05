import { motion } from "framer-motion";
import googleCloudLogo from "@/assets/google_cloud.png";

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
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass rounded-xl px-8 py-6"
                        >
                            <img
                                src={googleCloudLogo}
                                alt="Google Cloud"
                                className="h-8 w-auto"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
