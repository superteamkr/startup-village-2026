import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

const prizes = [
    {
        place: "1st Place",
        prize: "$5,000",
        icon: Trophy,
        color: "from-yellow-400 to-amber-500",
        extras: ["Superteam Grant 후보", "투자자 미팅 기회"],
    },
    {
        place: "2nd Place",
        prize: "$3,000",
        icon: Medal,
        color: "from-slate-300 to-slate-400",
        extras: ["Superteam 멤버십", "추가 멘토링"],
    },
    {
        place: "3rd Place",
        prize: "$1,500",
        icon: Award,
        color: "from-amber-600 to-amber-700",
        extras: ["Superteam 멤버십"],
    },
];

const DemoDay = () => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        Demo Day <span className="gradient-text">Prizes</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        여러분의 노력에 보답하는 풍성한 상금
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {prizes.map((prize, index) => (
                        <motion.div
                            key={prize.place}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className={`relative ${index === 0 ? "md:-mt-8" : ""}`}
                        >
                            <div className="glass rounded-2xl p-8 text-center h-full hover:border-primary/50 transition-all duration-300">
                                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${prize.color}`}>
                                    <prize.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{prize.place}</h3>
                                <p className="text-4xl font-bold gradient-text mb-6">{prize.prize}</p>
                                <ul className="space-y-2">
                                    {prize.extras.map((extra, i) => (
                                        <li key={i} className="text-sm text-muted-foreground">
                                            + {extra}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground mt-12"
                >
                    * 특별상 및 파트너사 후원 상품이 추가될 수 있습니다
                </motion.p>
            </div>
        </section>
    );
};

export default DemoDay;
