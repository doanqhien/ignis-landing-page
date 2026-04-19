import { Navbar } from "@/src/components/molecules/Navbar";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { AboutSection } from "@/src/components/organisms/AboutSection";
import { TechnologySection } from "@/src/components/organisms/TechnologySection";
import { QuoteSection } from "@/src/components/organisms/QuoteSection";
import { CTASection } from "@/src/components/organisms/CTASection";
import { Footer } from "@/src/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}