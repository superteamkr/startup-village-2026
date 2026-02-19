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
            question: t("스타트업 빌리지는 어떤 프로그램인가요?", "What is Startup Village?"),
            answer: t(
                "솔라나 생태계 빌더들이 1주일간 함께 프로젝트를 개발하고 네트워킹하는 집중 프로그램입니다.",
                "An intensive program where Solana ecosystem builders gather for a week to develop projects and network together."
            )
        },
        {
            question: t("참가 대상은 누구인가요?", "Who can participate?"),
            answer: t(
                "블록체인/Web3와 솔라나에 관심 있는 창업자, 개발자, 기획자, 디자이너라면 누구나 지원 가능합니다. 제출해주신 지원서를 토대로 프로그램 참가자가 선정됩니다.",
                "Anyone interested in blockchain/Web3 and Solana—founders, developers, planners, and designers—can apply. Participants are selected based on the submitted applications."
            )
        },
        {
            question: t("참가자 선발은 언제 확정되나요?", "When will participant selection be confirmed?"),
            answer: t(
                "선착순으로 지원서를 검토하며, 일찍 지원하실수록 참가가 빠르게 확정됩니다. 참가 인원이 제한되어 있으니 빠른 지원을 추천드립니다.",
                "Applications are reviewed on a first-come, first-served basis. The earlier you apply, the faster your participation will be confirmed. We recommend applying early as spots are limited."
            )
        },
        {
            question: t("참가 비용이 있나요?", "Is there a participation fee?"),
            answer: t(
                "프로그램 참가는 무료입니다. 개인 노트북, 장비, 교통비 등은 본인 부담입니다.",
                "Program participation is free. Personal laptops, equipment, and transportation costs are the participant's responsibility."
            )
        },
        {
            question: t("숙박은 제공되나요?", "Is accommodation provided?"),
            answer: t(
                "숙박은 제공되지 않습니다.",
                "Accommodation is not provided."
            )
        },
        {
            question: t("개발 경험이 없어도 참여할 수 있나요?", "Can I participate without development experience?"),
            answer: t(
                "네, 솔라나 생태계 프로젝트 빌딩에 열정이 있으신 분은 누구나 환영합니다. 다만 팀 빌딩 과정에서 개발 역량을 보유한 팀원을 만나는 것이 중요합니다.",
                "Yes, anyone passionate about building projects in the Solana ecosystem is welcome. However, it's important to find team members with development skills during team building."
            )
        },
        {
            question: t("자세한 일정은 어디서 확인하나요?", "Where can I check the detailed schedule?"),
            answer: null,
            answerWithLink: true
        },
        {
            question: t("상금은 어떻게 받나요?", "How do I receive the prize?"),
            answer: t(
                "데모 데이 최종 심사를 통해 우수한 3개 프로젝트를 선발합니다. 선발된 팀은 Colosseum 해커톤에 프로젝트를 제출해야 상금을 수령할 수 있습니다.",
                "Three outstanding projects are selected through the Demo Day final judging. Selected teams must submit their projects to the Colosseum hackathon to receive the prize."
            )
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
                        <p className="text-muted-foreground">{t("자주 묻는 질문", "Frequently Asked Questions")}</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-md pb-6 leading-relaxed">
                                    {faq.answerWithLink ? (
                                        <>
                                            <a
                                                href="https://lu.ma/startupvillagekr"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Luma {t("이벤트 페이지", "event page")}
                                            </a>
                                            {t("에서 날짜별 상세 일정/장소를 확인하실 수 있습니다.", " has detailed schedules and venues by date.")}
                                        </>
                                    ) : (
                                        faq.answer
                                    )}
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
