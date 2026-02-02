import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const mentors = [
    { name: "TBA", role: "Mentor", org: "Coming Soon" },
    { name: "TBA", role: "Mentor", org: "Coming Soon" },
    { name: "TBA", role: "Mentor", org: "Coming Soon" },
    { name: "TBA", role: "Mentor", org: "Coming Soon" },
    { name: "TBA", role: "Mentor", org: "Coming Soon" },
    { name: "TBA", role: "Mentor", org: "Coming Soon" },
];

const PersonCard = ({ person }: { person: { name: string; role: string; org: string } }) => (
    <Card className="glass hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">?</span>
            </div>
            <h3 className="font-semibold text-lg">{person.name}</h3>
            <p className="text-primary text-sm">{person.role}</p>
            <p className="text-muted-foreground text-sm">{person.org}</p>
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
                        <span className="gradient-text">Mentors</span>
                    </h2>
                    <p className="text-muted-foreground">
                        곧 공개됩니다
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
