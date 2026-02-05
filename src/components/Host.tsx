import { motion } from "framer-motion";
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
                        <span className="gradient-text">Hosted by</span>
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
                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white p-3 flex items-center justify-center">
                                        <svg viewBox="0 0 397.7 311.7" className="w-full h-full">
                                            <linearGradient id="solana-gradient-a" x1="360.879" x2="141.213" y1="351.455" y2="-69.294" gradientTransform="matrix(1 0 0 -1 0 314)" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#00ffa3"/>
                                                <stop offset="1" stopColor="#dc1fff"/>
                                            </linearGradient>
                                            <linearGradient id="solana-gradient-b" x1="264.829" x2="45.163" y1="401.601" y2="-19.148" gradientTransform="matrix(1 0 0 -1 0 314)" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#00ffa3"/>
                                                <stop offset="1" stopColor="#dc1fff"/>
                                            </linearGradient>
                                            <linearGradient id="solana-gradient-c" x1="312.548" x2="92.882" y1="376.688" y2="-44.061" gradientTransform="matrix(1 0 0 -1 0 314)" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#00ffa3"/>
                                                <stop offset="1" stopColor="#dc1fff"/>
                                            </linearGradient>
                                            <path fill="url(#solana-gradient-a)" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/>
                                            <path fill="url(#solana-gradient-b)" d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/>
                                            <path fill="url(#solana-gradient-c)" d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Solana Foundation
                                    </h3>
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
                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white p-3 flex items-center justify-center">
                                        <img
                                            src={stkrLogo}
                                            alt="Superteam Korea Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        Superteam Korea
                                    </h3>
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
