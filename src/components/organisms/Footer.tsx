import { CTASection } from "./CTASection";
import BackGroundLines from "@/public/background.png"
import Image from "next/image";
import { QuoteSection } from "./QuoteSection";

export const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src={BackGroundLines} 
          alt="Background" 
          fill 
          className="object-cover opacity-80"
        />
      </div>

      <div className="bg-transparent relative z-10">
        <QuoteSection />
        <CTASection />
      {/* Atmospheric lighting / reflection effect centered behind the Hero text */}
      <div className="absolute -bottom-[0%] left-1/2 w-full max-w-[900px] h-[200px] bg-[#3b82f6]/10 blur-[140px] rounded-[100%] pointer-events-none z-0" />
 
        <div className="w-full md:max-w-2/3 mx-auto saans-mono tracking-[0.05rem] px-4 md:px-[2%] py-4 md:py-[1%] border-0 md:border-x border-zinc-700">
          {/* Top row - Logo + Links */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mb-8 md:mb-16">
            <div className="flex items-center gap-8">
              <span
                className="text-[8px] text-zinc-400 transition-colors duration-300 uppercase"
              >
                ©2026 Ignis Hypersonics. All Rights Reserved
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[8px] text-zinc-400 hover:text-zinc-400 transition-colors duration-300 uppercase underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[8px] text-zinc-400 hover:text-zinc-400 transition-colors duration-300 uppercase underline"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
