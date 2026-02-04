import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
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
                        <span className="gradient-text">Host</span>
                    </h2>
                </motion.div>

                <div className="max-w-md mx-auto">
                    {/* Superteam Korea */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="glass rounded-3xl p-8 h-full">
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white p-4 flex items-center justify-center">
                                    <img
                                        src={stkrLogo}
                                        alt="Superteam Korea Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black mb-3">
                                        Superteam Korea
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Solana 생태계의 성장을 이끄는 한국 커뮤니티입니다.
                                    </p>
                                    <a
                                        href="https://superteamkr.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" className="group">
                                            방문하기
                                            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Host;
