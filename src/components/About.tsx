import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import buildersImage from "@/assets/builders-workspace.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
              What is <span className="gradient-text">Startup Village?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {t(
                "Startup Village Seoul 2026은 솔라나 생태계 위의 실제 프로덕트의 설계, 개발, 출시를 목표로 하는 열정적인 팀들을 위해 마련된 집중 지원 프로그램입니다.",
                "Startup Village Seoul 2026 is an immersive one-week program designed for ambitious builders ready to create the next generation of Web3 applications on Solana."
              )}
            </p>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t(
                "서울의 활기찬 테크 씬에서 전 세계의 창업자, 개발자, 혁신가들과 함께하세요. 솔라나 코어 컨트리뷰터들의 실전 가이드, 어디서도 구할 수 없는 핵심 리소스, 그리고 상금의 기회가 기다립니다.",
                "Join founders, developers, and innovators from around the world in Seoul's vibrant tech scene. Get hands-on guidance from Solana core contributors, access to exclusive resources, and the chance to win substantial prizes."
              )}
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: t("기간", "Duration"), value: t("7일", "7 Days") },
                { label: t("장소", "Location"), value: t("서울", "Seoul") },
                { label: t("형식", "Format"), value: t("오프라인", "In-Person") },
                { label: t("비용", "Cost"), value: t("무료", "Free") },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <span className="block text-3xl font-bold gradient-text mb-2">
                    {fact.value}
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
