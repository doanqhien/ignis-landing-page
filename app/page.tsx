import dynamic from "next/dynamic";
import { Navbar } from "@/src/components/molecules/Navbar";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { LoadingScreen } from "@/src/components/molecules/LoadingScreen";

// Lazy load below-the-fold sections to reduce initial JS bundle
const AboutSection = dynamic(
  () => import("@/src/components/organisms/AboutSection").then((mod) => mod.AboutSection),
  { ssr: true }
);

const TechnologySection = dynamic(
  () => import("@/src/components/organisms/TechnologySection").then((mod) => mod.TechnologySection),
  { ssr: true }
);

const Footer = dynamic(
  () => import("@/src/components/organisms/Footer").then((mod) => mod.Footer),
  { ssr: true }
);

export default function Home() {
  return (
    <LoadingScreen>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechnologySection />
      </main>
      <Footer />
    </LoadingScreen>
  );
}