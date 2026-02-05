import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import svPitch from "@/assets/sv_pitch.png";
import svSession from "@/assets/sv_session.png";
import svEntrance from "@/assets/sv_entrance.png";
import svEnding from "@/assets/sv_ending.png";
import svHighlight from "@/assets/sv_highlight.png";
import svGoods from "@/assets/sv_goods.png";

const Gallery2025 = () => {
    const { t } = useLanguage();

    const galleryImages = [
        {
            id: 1,
            src: svEntrance,
            title: "Welcome to Startup Village",
            description: t("행사장에 도착한 참가자들", "Participants arriving at the event"),
            isPlaceholder: false
        },
        {
            id: 2,
            src: svSession,
            title: "Collaboration Sessions",
            description: t("프로젝트를 함께 진행하는 팀들", "Teams working together on their projects"),
            isPlaceholder: false
        },
        {
            id: 3,
            src: svPitch,
            title: "Final Pitches",
            description: t("혁신적인 솔루션을 발표하는 팀들", "Teams presenting their innovative solutions"),
            isPlaceholder: false
        },
        {
            id: 4,
            src: svEnding,
            title: "Celebration",
            description: t("폐회식과 시상식", "Closing ceremony and awards"),
            isPlaceholder: false
        },
        {
            id: 5,
            src: svHighlight,
            title: "Event Highlights",
            description: t("행사의 다양한 순간들", "More moments from the event"),
            isPlaceholder: false
        },
        {
            id: 6,
            src: svGoods,
            title: "Startup Village Merch",
            description: t("참가자들을 위한 멋진 굿즈", "Cool Merchandise for Startup Villagers"),
            isPlaceholder: false
        },
    ];

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
                        2025 <span className="gradient-text">Gallery</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="aspect-square relative overflow-hidden rounded-xl group cursor-pointer"
                        >
                            {image.isPlaceholder ? (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                        <p className="text-muted-foreground text-sm text-center px-4">
                                            {image.title}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-foreground text-sm font-medium">
                                            {t("사진 준비 중", "Photo coming soon")}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 w-full">
                                            <h4 className="text-white font-bold text-sm mb-1">{image.title}</h4>
                                            <p className="text-white/80 text-xs">{image.description}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery2025;
