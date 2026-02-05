import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Schedule = () => {
  const { t } = useLanguage();

  const schedule = [
    {
      day: "Day 1",
      title: t("킥오프", "Kickoff"),
      description: t("오프닝 세레모니", "Opening ceremony"),
    },
    {
      day: "Day 2-3",
      title: t("빌드 스프린트", "Build Sprint"),
      description: t("팀 빌딩, 워크숍, 멘토 세션", "Team formation, workshops and mentor sessions"),
    },
    {
      day: "Day 4",
      title: t("중간 점검", "Mid-Point Check"),
      description: t("진행 상황 리뷰, 피드백 세션", "Progress reviews, feedback sessions"),
    },
    {
      day: "Day 5-6",
      title: t("마무리 및 준비", "Polish & Prepare"),
      description: t("최종 개발, 피칭 준비, 데모 리허설", "Final development, pitch preparation, and demo rehearsals"),
    },
    {
      day: "Day 7",
      title: t("데모 데이", "Demo Day"),
      description: t("피칭, 심사, 최종 피드백", "Demo day pitching, judging, and final feedback"),
    },
  ];
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("아이디어에서 런칭까지, 7일간의 여정을 함께하세요", "From idea to launch in just seven transformative days.")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          {schedule.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
              >
                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <span className="text-sm font-semibold text-primary mb-2 block">
                    {item.day}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
