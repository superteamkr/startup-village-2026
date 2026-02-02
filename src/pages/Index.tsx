import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MainVideo from "@/components/MainVideo";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import DemoDay from "@/components/DemoDay";
import Venue from "@/components/Venue";
import Showcase2025 from "@/components/Showcase2025";
import Gallery2025 from "@/components/Gallery2025";
import Host from "@/components/Host";
import SpeakersJudges from "@/components/SpeakersJudges";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MainVideo />
        <section id="about">
          <About />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <DemoDay />
        <Venue />
        <Showcase2025 />
        <Gallery2025 />
        <SpeakersJudges />
        <Host />
        <Partners />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
