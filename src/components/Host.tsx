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
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass rounded-3xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    <span className="text-4xl font-bold text-primary-foreground">ST</span>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <p className="text-sm text-primary font-medium mb-2">Hosted by</p>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                                    Superteam <span className="gradient-text">Korea</span>
                                </h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Superteam Korea는 Solana 생태계의 성장을 이끄는 한국 커뮤니티입니다.
                                    빌더, 개발자, 크리에이터들이 함께 협력하며 Web3의 미래를 만들어가고 있습니다.
                                    Startup Village Seoul은 Superteam Korea가 주최하는 대표 프로그램입니다.
                                </p>
                                <a
                                    href="https://superteamkr.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" className="group">
                                        Superteam Korea 방문하기
                                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Host;
