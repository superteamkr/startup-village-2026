import { motion } from "framer-motion";
import solanaLogotype from "@/assets/Solana Foundation Logotype - Color Black.svg";
import stkrLogo from "@/assets/stkr_logo.png";

const Host = () => {

    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        <span className="gradient-text">Hosts</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Solana Foundation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <a
                            href="https://solana.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="w-48 h-28 rounded-xl overflow-hidden flex items-center justify-center">
                                        <img
                                            src={solanaLogotype}
                                            alt="Solana Foundation"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Superteam Korea */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <a
                            href="https://superteamkr.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="w-48 h-28 rounded-xl overflow-hidden flex items-center justify-center">
                                        <img
                                            src={stkrLogo}
                                            alt="Superteam Korea Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Host;
