import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Schedule = () => {
  const { t } = useLanguage();

  const schedule = [
    {
      day: "Day 1",
      date: t("2월 22일 (일)", "Feb 22 (Sun)"),
      title: t("오리엔테이션", "Orientation"),
      description: t(
        "오프닝 세레모니 & 스타트업 빌리지 시즌 2 소개",
        "Opening ceremony & Startup Village Season 2 introduction"
      ),
      badge: "Online",
    },
    {
      day: "Day 2",
      date: t("2월 23일 (월)", "Feb 23 (Mon)"),
      title: t("코워킹 & 네트워킹", "Coworking & Networking"),
      description: t(
        "팀빌딩 및 코워킹 & 솔라나 생태계 빌더들과 네트워킹",
        "Team building, coworking & networking with Solana ecosystem builders"
      ),
      badge: "In-person",
    },
    {
      day: "Day 3",
      date: t("2월 24일 (화)", "Feb 24 (Tue)"),
      title: t("멘토 세션", "Mentor Session"),
      description: t(
        "솔라나 해커톤 수상 프로젝트 케이스 스터디 (아이디어, 피칭, 톤앤 매너 등)",
        "Case study of Solana hackathon winning projects (ideas, pitching, tone & manner, etc.)"
      ),
      badge: "In-person",
    },
    {
      day: "Day 4",
      date: t("2월 25일 (수)", "Feb 25 (Wed)"),
      title: t("아이디어 점검", "Idea Review"),
      description: t(
        "아이디어 리뷰 & 멘토 피드백",
        "Idea review & mentor feedback"
      ),
      badge: "In-person",
    },
    {
      day: "Day 5",
      date: t("2월 26일 (목)", "Feb 26 (Thu)"),
      title: t("피칭 점검", "Pitch Review"),
      description: t(
        "심사위원 앞에서 연습 피칭 & 피드백",
        "Practice pitch in front of judges & feedback"
      ),
      badge: "In-person",
    },
    {
      day: "Day 6",
      date: t("2월 27일 (금)", "Feb 27 (Fri)"),
      title: t("최종 리뷰", "Final Review"),
      description: t(
        "개발 마무리 & 데모 데이 피칭 최종 리허설",
        "Final development & Demo Day pitch final rehearsal"
      ),
      badge: "Online",
    },
    {
      day: "Day 7",
      date: t("2월 28일 (토)", "Feb 28 (Sat)"),
      title: t("데모 데이", "Demo Day"),
      description: t(
        "최종 발표 및 심사 & 시상식",
        "Final presentations, judging & awards ceremony"
      ),
      badge: "In-person",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Season 2 <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              "아이디어에서 런칭까지, 7일간의 여정에 합류하세요",
              "From idea to launch, join the 7-day journey"
            )}
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
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors relative">
                  {/* Badge */}
                  <span
                    className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                      item.badge === "Online"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {item.badge}
                  </span>

                  <span className="text-sm font-semibold text-primary mb-1 block">
                    {item.day}
                  </span>
                  <span className="text-xs text-muted-foreground mb-3 block">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
