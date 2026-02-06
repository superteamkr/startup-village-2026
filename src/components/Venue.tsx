import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Venue = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        Venue <span className="gradient-text">Partner</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t(
                            "2월 28일 데모 데이는 구글 스타트업 캠퍼스와 함께합니다",
                            "Demo Day on February 28th is hosted with Google for Startups Campus"
                        )}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass rounded-3xl overflow-hidden p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Google for Startups Campus</h3>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="w-4 h-4" />
                                    <span>{t("서울 강남구 영동대로 417", "417 Yeongdong-daero, Gangnam-gu, Seoul")}</span>
                                </div>
                            </div>
                            <a
                                href="https://naver.me/xCB7C3ew"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="black" className="group">
                                    {t("네이버 지도", "Naver Map")}
                                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Venue;
