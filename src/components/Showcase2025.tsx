import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import bioletLogo from "@/assets/biolet.png";
import buffTradeLogo from "@/assets/buff.trade.png";
import latticaLogo from "@/assets/lattica.png";

const Showcase2025 = () => {
    const { t } = useLanguage();

    const winners = [
        {
            place: "🥇 First Place",
            project: "Biolet",
            link: "https://arena.colosseum.org/projects/explore/biolet",
            image: bioletLogo,
        },
        {
            place: "🥈 Second Place",
            project: "Buff.trade",
            link: "https://arena.colosseum.org/projects/explore/buff.trade",
            image: buffTradeLogo,
        },
        {
            place: "🥉 Third Place",
            project: "Lattica",
            link: "https://arena.colosseum.org/projects/explore/lattica",
            image: latticaLogo,
        },
    ];
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        2025 <span className="gradient-text">Winners</span>
                    </h2>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {winners.map((winner, index) => (
                        <motion.div
                            key={winner.project}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <a
                                href={winner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <Card className="h-full glass hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col">
                                    <div className="h-36 overflow-hidden relative">
                                        <img
                                            src={winner.image}
                                            alt={winner.project}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className="absolute top-2 right-2 bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20">
                                            <div className="flex items-center gap-1.5">
                                                <Trophy className="w-3.5 h-3.5 text-primary" />
                                                <span className="text-xs font-bold text-white">{winner.place.split(' ')[0]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6 flex-1 flex flex-col relative z-20 bg-background/50 backdrop-blur-md">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-primary/80">{winner.place.split(' ').slice(1).join(' ')}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{winner.project}</h3>
                                        <Button variant="outline" size="sm" className="w-full group">
                                            {t("더 알아보기", "Learn More")}
                                            <ExternalLink className="ml-2 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground mt-8 text-sm"
                >
                    {/* Updated with 2025 winners */}
                </motion.p>
            </div>
        </section>
    );
};

export default Showcase2025;
