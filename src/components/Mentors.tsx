import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

import ChrisImg from "@/assets/Chris.png";
import JYImg from "@/assets/JY.png";
import MinImg from "@/assets/Min.png";
import JaehyunImg from "@/assets/jaehyun.png";

const PersonCard = ({ person }: { person: { name: string; org: string; background?: string; image?: string } }) => {
    return (
        <Card className="glass hover:border-primary/50 transition-all duration-300 h-full">
            <CardContent className="p-6 flex flex-col h-full">
                {person.image ? (
                    <img
                        src={person.image}
                        alt={person.name}
                        className="w-[65px] h-[80px] rounded-xl object-cover mx-auto mb-4"
                    />
                ) : (
                    <div className="w-[65px] h-[80px] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{person.name.charAt(0)}</span>
                    </div>
                )}
                <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold">{person.name}</h3>
                    <p className="text-sm font-medium text-primary">{person.org}</p>
                    {person.background && (
                        <p className="text-xs text-muted-foreground pt-2">{person.background}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

const Mentors = () => {
    const { t } = useLanguage();

    const mentors = [
        {
            name: "Chris Park",
            org: "Head of Korea, BitGo",
            background: t("전) KB자산운용, Ignight Capital", "Former: KB Asset Management, Ignight Capital"),
            image: ChrisImg
        },
        {
            name: "YK",
            org: "Plan G",
            background: t("전) Hashed", "Former: Hashed")
        },
        {
            name: "Min",
            org: "Presto Labs",
            background: t("전) JPMorgan", "Former: JPMorgan"),
            image: MinImg
        },
        {
            name: t("김지윤", "Jiyoon Kim"),
            org: t("CTO, 스테이지파이브", "CTO, Stage Five"),
            background: t("전) 현대오토에버 CTO", "Former: Hyundai AutoEver CTO"),
            image: JYImg
        },
        {
            name: "Jaehyun Kim",
            org: "Superteam Korea Co-Lead",
            image: JaehyunImg
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
                        <span className="gradient-text">Mentors & Judges</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t(
                            "다양한 분야의 전문가들이 여러분의 멘토 및 심사위원으로 준비되어있습니다",
                            "Experts from various fields will mentor and judge your projects"
                        )}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PersonCard person={mentor} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentors;
