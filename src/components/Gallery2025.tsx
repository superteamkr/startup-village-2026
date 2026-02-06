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
        { id: 1, src: svEntrance, title: "Welcome to Startup Village" },
        { id: 2, src: svSession, title: "Collaboration Sessions" },
        { id: 3, src: svPitch, title: "Final Pitches" },
        { id: 4, src: svEnding, title: "Celebration" },
        { id: 5, src: svHighlight, title: "Event Highlights" },
        { id: 6, src: svGoods, title: "Startup Village Merch" },
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
                        Season 1 <span className="gradient-text">Highlights</span>
                    </h2>
                </motion.div>

                {/* YouTube Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass rounded-3xl overflow-hidden aspect-video relative shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/xyKyQRPzO24"
                            title="Season 1 Highlight Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 my-16 max-w-2xl mx-auto"
                >
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Gallery</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
                </motion.div>

                {/* Photo Gallery */}
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
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery2025;
