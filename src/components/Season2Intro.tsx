import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Season2Intro = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-12">
              Welcome to <span className="gradient-text">Season 2</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t(
                "2025년 스타트업 빌리지 첫 시즌은 한국 솔라나 생태계의 새로운 역사를 썼습니다.",
                "The first season of Startup Village in 2025 wrote a new chapter in Korea's Solana ecosystem history."
              )}
            </p>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t(
                "솔라나 불모지였던 한국이 솔라나 공식 Colosseum 해커톤에서 결선 진출 15팀과 트랙 우승 2팀을 배출한 성지로 거듭나기까지, 그 중심에는 스타트업 빌리지가 있었습니다.",
                "Korea, once barren ground for Solana, transformed into a powerhouse producing 15 finalist teams and 2 track winners at the official Solana Colosseum hackathon and Startup Village was at the heart of it all."
              )}
            </p>



            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                "2026년, 다시 돌아온 스타트업 빌리지 시즌 2. 최고의 전문가 멘토들이 여러분의 블록체인 유니콘 스타트업으로의 여정을 함께합니다.",
                "In 2026, Startup Village Season 2 returns. Top expert mentors will accompany you on your journey to becoming a blockchain unicorn startup."
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Season2Intro;
