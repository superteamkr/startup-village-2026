import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Startup Village Seoul 2026은 어떤 행사인가요?",
        answer: "Solana 생태계의 빌더들이 모여 1주일간 함께 거주하며 프로젝트를 개발하고 네트워킹하는 임머시브 프로그램입니다."
    },
    {
        question: "참가 대상은 누구인가요?",
        answer: "Web3와 Solana에 관심 있는 개발자, 기획자, 디자이너라면 누구나 신청 가능합니다. 선발 과정을 통해 최종 참가자가 결정됩니다."
    },
    {
        question: "참가 비용이 있나요?",
        answer: "프로그램 참가 및 숙박(해당 시)은 무료로 제공됩니다. 개인 경비 및 항공권 등은 본인 부담입니다."
    },
    {
        question: "개발 경험이 없어도 참여할 수 있나요?",
        answer: "네, 열정 있는 기획자와 디자이너도 환영합니다. 다만 팀 빌딩 과정에서 개발 역량을 보유한 팀원을 만나는 것이 중요합니다."
    },
    {
        question: "Demo Day 상금은 어떻게 되나요?",
        answer: "최종 심사를 통해 우수 팀들에게 총 상금 $50,000 상당의 보상이 제공될 예정입니다."
    }
];

const FAQ = () => {
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
                            FAQ
                        </h2>
                        <p className="text-muted-foreground">행사에 대해 궁금한 점들을 확인해보세요.</p>
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
