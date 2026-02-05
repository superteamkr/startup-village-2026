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
                        Demo Day <span className="gradient-text">Venue</span>
                    </h2>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass rounded-3xl overflow-hidden">
                        {/* Map placeholder */}
                        <div className="aspect-video bg-muted/50 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3!2d127.0276!3d37.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a8a8f7e0d%3A0x1c4ed0f8e0f8e0f8!2sGoogle%20for%20Startups%20Campus!5e0!3m2!1sen!2skr!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>

                        {/* Info */}
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Google for Startups Campus</h3>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        <span>{t("서울 강남구 영동대로 417", "417 Yeongdong-daero, Gangnam-gu, Seoul")}</span>
                                    </div>
                                </div>
                                <a
                                    href="https://startup.google.com/campus/seoul/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="black" className="group">
                                        {t("장소 정보 보기", "View Venue Info")}
                                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                {t(
                                    "Demo Day (2/28)는 Google for Startups Campus에서 오프라인으로 진행됩니다.",
                                    "Demo Day (2/28) will be held in-person at Google for Startups Campus."
                                )}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Venue;
