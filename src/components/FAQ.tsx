import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
    const { t } = useLanguage();

    const faqs = [
        {
            question: t("Startup Village Seoul 2026은 어떤 행사인가요?", "What is Startup Village Seoul 2026?"),
            answer: t("Solana 생태계의 빌더들이 모여 1주일간 함께 모여서 프로젝트를 개발하고 네트워킹하는 집중 프로그램입니다.", "An immersive program where builders in the Solana ecosystem gather for a week to develop projects and network.")
        },
        {
            question: t("참가 대상은 누구인가요?", "Who can participate?"),
            answer: t("Web3와 Solana에 관심 있는 개발자, 기획자, 디자이너라면 누구나 신청 가능합니다. 선발 과정을 통해 최종 참가자가 결정됩니다.", "Anyone interested in Web3 and Solana—developers, planners, and designers—can apply. Final participants are selected through a screening process.")
        },
        {
            question: t("참가 비용이 있나요?", "Is there a participation fee?"),
            answer: t("프로그램 참가는 무료입니다. 개인 경비 및 항공권 등은 본인 부담입니다.", "Program participation is free. Personal expenses and airfare are the participant's responsibility.")
        },
        {
            question: t("개발 경험이 없어도 참여할 수 있나요?", "Can I participate without development experience?"),
            answer: t("네, 열정 있는 기획자와 디자이너도 환영합니다. 다만 팀 빌딩 과정에서 개발 역량을 보유한 팀원을 만나는 것이 중요합니다.", "Yes, passionate planners and designers are also welcome. However, it's important to find team members with development skills during team building.")
        },
        {
            question: t("Demo Day 상금은 어떻게 되나요?", "What are the Demo Day prizes?"),
            answer: t("최종 심사를 통해 우수 팀들에게 총 상금 $15,000 상당의 보상이 제공될 예정입니다.", "Outstanding teams will receive rewards totaling $15,000 through the final judging process.")
        }
    ];
    return (
        <section id="faq" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                            <span className="gradient-text">FAQ</span>
                        </h2>
                        <p className="text-muted-foreground">{t("행사에 대해 궁금한 점들을 확인해보세요.", "Find answers to common questions about the event.")}</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-md pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
