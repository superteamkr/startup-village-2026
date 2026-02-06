import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import buildersImage from "@/assets/builders-workspace.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-muted/30">
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
                "스타트업 빌리지는 솔라나 생태계에서 프로덕트 설계, 개발, 출시를 목표로 하는 열정적인 빌더를 위한 집중 지원 프로그램입니다. 이후 이어지는 한국 로컬 해커톤과 솔라나 공식 Colosseum 해커톤에서 좋은 성과를 내고 성공적인 프로젝트로 성장할 수 있는 탄탄한 발판을 다집니다.",
                "Startup Village is an intensive support program for passionate builders aiming to design, develop, and launch products in the Solana ecosystem. It provides a solid foundation for achieving great results in subsequent Korean local hackathons and official Solana Colosseum hackathons."
              )}
            </p>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t(
                "해커톤 준비 전략부터 피칭 훈련, 현업 전문가 멘토링까지. 성공적인 프로젝트 런칭에 필요한 모든 과정을 경험해보세요. 우수 팀에게 주어지는 상금의 주인공이 될 기회, 지금 도전하세요!",
                "From hackathon preparation strategies to pitch training and expert mentoring. Experience everything you need for a successful project launch. Seize the opportunity to win prizes awarded to outstanding teams - take the challenge now!"
              )}
            </p>

          </motion.div>

          {/* YouTube Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto mt-8"
          >
            <div className="glass rounded-3xl overflow-hidden aspect-video relative shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3Ty9m6bHoRU"
                title="Main Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
