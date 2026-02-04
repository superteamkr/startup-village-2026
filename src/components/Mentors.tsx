import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const mentors = [
    {
        name: "Chris Park",
        role: "Mentor & Judge",
        org: "BitGo Head of Korea",
        background: "전) 홍콩 프랍 트레이딩 펌, KB자산운용, Ignight Capital"
    },
    {
        name: "Jun Kim",
        role: "Mentor & Judge",
        org: "Plan G 리드",
        background: ""
    },
    {
        name: "YK",
        role: "Mentor & Judge",
        org: "Plan G",
        background: "전) Hashed"
    },
    {
        name: "Min",
        role: "Mentor & Judge",
        org: "Presto",
        background: "전) JPMorgan"
    },
    {
        name: "김지윤",
        role: "Mentor & Judge",
        org: "스테이지파이브 CTO",
        background: "전) 현대오토에버 CTO"
    },
];

const PersonCard = ({ person }: { person: { name: string; role: string; org: string; background?: string; description?: string } }) => (
    <Card className="glass hover:border-primary/50 transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{person.name.charAt(0)}</span>
            </div>
            <h3 className="font-bold text-xl mb-1 text-center">{person.name}</h3>
            <p className="text-primary text-sm font-medium text-center mb-2">{person.role}</p>
            <p className="text-foreground text-sm font-semibold text-center mb-3">{person.org}</p>
            {person.background && (
                <p className="text-muted-foreground text-xs text-center mb-3">{person.background}</p>
            )}
            {person.description && (
                <p className="text-muted-foreground text-sm leading-relaxed text-left mt-auto pt-3 border-t border-border/50">
                    {person.description}
                </p>
            )}
        </CardContent>
    </Card>
);

const Mentors = () => {
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
                        다양한 분야의 전문가들이 여러분의 프로젝트를 멘토링하고 심사합니다
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
