import { Navbar } from "@/src/components/molecules/Navbar";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { AboutSection } from "@/src/components/organisms/AboutSection";
import { TechnologySection } from "@/src/components/organisms/TechnologySection";
import { Footer } from "@/src/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechnologySection />
      </main>
      <Footer />
    </>
  );
}