import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const winners = [
    {
        place: "🥇 1등",
        project: "DeFi Aggregator",
        team: "Team Alpha",
        description: "Solana 기반 최적 스왑 경로를 찾아주는 DEX 애그리게이터",
    },
    {
        place: "🥈 2등",
        project: "NFT Marketplace",
        team: "Team Beta",
        description: "크리에이터 친화적인 NFT 마켓플레이스 플랫폼",
    },
    {
        place: "🥉 3등",
        project: "Social Wallet",
        team: "Team Gamma",
        description: "소셜 리커버리 기능이 탑재된 사용자 친화적 지갑",
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
                            <Card className="h-full glass hover:border-primary/50 transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-lg font-bold">{winner.place}</span>
                                        <Trophy className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">{winner.project}</h3>
                                    <p className="text-sm text-primary mb-3">{winner.team}</p>
                                    <p className="text-muted-foreground text-sm">{winner.description}</p>
                                </CardContent>
                            </Card>
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
                    * 예시 데이터입니다. 실제 수상작 정보로 업데이트 예정
                </motion.p>
            </div>
        </section>
    );
};

export default Showcase2025;
