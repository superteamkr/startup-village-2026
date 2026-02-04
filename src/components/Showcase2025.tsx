import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import bioletLogo from "@/assets/biolet.png";
import buffTradeLogo from "@/assets/buff.trade.png";
import latticaLogo from "@/assets/lattica.png";

const winners = [
    {
        place: "🥇 First Place",
        project: "Biolet",
        team: "Biolet",
        description: "View project details on Colosseum Arena",
        link: "https://arena.colosseum.org/projects/explore/biolet",
        image: bioletLogo,
    },
    {
        place: "🥈 Second Place",
        project: "Buff.trade",
        team: "Buff.trade",
        description: "View project details on Colosseum Arena",
        link: "https://arena.colosseum.org/projects/explore/buff.trade",
        image: buffTradeLogo,
    },
    {
        place: "🥉 Third Place",
        project: "Lattica",
        team: "Lattica",
        description: "View project details on Colosseum Arena",
        link: "https://arena.colosseum.org/projects/explore/lattica",
        image: latticaLogo,
    },
];

const Showcase2025 = () => {
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
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        지난 Startup Village에서 탄생한 혁신적인 프로젝트들
                    </p>
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
                                    <div className="h-48 overflow-hidden relative">
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
                                        <h3 className="text-xl font-bold mb-1">{winner.project}</h3>
                                        <p className="text-sm text-foreground/80 mb-3 font-medium">{winner.team}</p>
                                        <p className="text-muted-foreground text-sm line-clamp-2">{winner.description}</p>
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
