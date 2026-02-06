import { motion } from "framer-motion";
import { Trophy, Medal, Award, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DemoDay = () => {
    const { t } = useLanguage();

    const prizes = [
        {
            place: t("1등", "1st Place"),
            prize: "TBD",
            icon: Trophy,
            color: "from-yellow-400 to-amber-500",
        },
        {
            place: t("2등", "2nd Place"),
            prize: "TBD",
            icon: Medal,
            color: "from-slate-300 to-slate-400",
        },
        {
            place: t("3등", "3rd Place"),
            prize: "TBD",
            icon: Award,
            color: "from-amber-600 to-amber-700",
        },
        {
            place: "University Prize",
            prize: "TBD",
            icon: GraduationCap,
            color: "from-blue-400 to-blue-600",
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
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        <span className="gradient-text">Prizes</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-4">
                        {t("우수 프로젝트 3개 선발", "3 Outstanding Projects Selected")}
                    </p>
                    <p className="text-3xl font-bold gradient-text mb-6">
                        {t("총 상금 $10,000+", "Total Prize $10,000+")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                    {prizes.map((prize, index) => (
                        <motion.div
                            key={prize.place}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="glass rounded-2xl p-6 text-center h-full hover:border-primary/50 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${prize.color}`}>
                                    <prize.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{prize.place}</h3>
                                <p className="text-3xl font-bold gradient-text">{prize.prize}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground max-w-2xl mx-auto"
                >
                    <p className="leading-relaxed">
                        {t(
                            "프로그램 종료 이후 지속적인 프로젝트 빌딩 지원, 생태계 핵심 네트워크 연결, 투자 기회 탐색 지원",
                            "Continued project building support after program completion, connection to key ecosystem networks, and investment opportunity exploration support"
                        )}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoDay;
