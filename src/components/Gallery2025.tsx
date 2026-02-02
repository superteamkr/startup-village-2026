import { motion } from "framer-motion";

const galleryImages = [
    { id: 1, placeholder: "Kickoff Day 모습" },
    { id: 2, placeholder: "팀 빌딩 세션" },
    { id: 3, placeholder: "워크샵 진행" },
    { id: 4, placeholder: "멘토링 시간" },
    { id: 5, placeholder: "Demo Day 피칭" },
    { id: 6, placeholder: "시상식 및 네트워킹" },
];

const Gallery2025 = () => {
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
                    <p className="text-lg text-muted-foreground">
                        지난 행사의 생생한 순간들
                    </p>
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
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <p className="text-muted-foreground text-sm text-center px-4">
                                    {image.placeholder}
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-foreground text-sm font-medium">
                                    사진 준비 중
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground mt-8 text-sm"
                >
                    * 실제 행사 사진으로 업데이트 예정
                </motion.p>
            </div>
        </section>
    );
};

export default Gallery2025;
