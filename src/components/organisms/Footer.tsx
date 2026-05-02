import { CTASection } from "./CTASection";
import BackGroundLines from "@/public/background.png"
import Image from "next/image";
import { QuoteSection } from "./QuoteSection";

export const Footer = () => {
  return (
    <footer className="w-full relative">
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
        <div className="w-full max-w-[95%] md:max-w-2/3 mx-auto px-4 md:px-[1.5%] py-4 md:py-[.5%] border border-zinc-700">
          {/* Top row - Logo + Links */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mb-8 md:mb-16">
            <div className="flex items-center gap-8">
              <span
                className="text-[8px] text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase"
              >
                ©2026 Ignis Hypersonics. All Rights Reserved.  
              </span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-[8px] text-zinc-400 hover:text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[8px] text-zinc-400 hover:text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase underline"
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
