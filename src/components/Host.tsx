import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Superteam Korea */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="glass rounded-3xl p-8 h-full">
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    <span className="text-3xl font-bold text-primary-foreground">ST</span>
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

                    {/* Solana Foundation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="glass rounded-3xl p-8 h-full">
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    <span className="text-3xl font-bold text-primary-foreground">◎</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black mb-3">
                                        Solana Foundation
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Supporting the growth and adoption of the Solana ecosystem.
                                    </p>
                                    <a
                                        href="https://solana.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" className="group">
                                            Visit
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
