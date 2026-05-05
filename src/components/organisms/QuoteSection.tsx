"use client";

import { LightRays } from "@/components/ui/light-rays";
import { TextReveal } from "@/components/ui/text-reveal";
import { useInView } from "@/src/lib/useInView";

export const QuoteSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-16 md:py-32 bg-transparent flex items-center justify-center">
      <LightRays />
      {/* Dots on left and right */}
      <div 
        className={`absolute left-[4%] md:left-[10%] top-[25%] md:top-[30%] w-[5px] h-[5px] bg-white ${
          isInView ? "animate-in fade-in slide-in-from-left-[50px] duration-1000 delay-100 ease-out fill-mode-both" : "opacity-0"
        }`}
      />
      <div 
        className={`absolute left-[6%] md:left-[12.5%] top-[50%] md:top-[50%] w-[5px] h-[5px] bg-white ${
          isInView ? "animate-in fade-in slide-in-from-left-[50px] duration-1000 delay-300 ease-out fill-mode-both" : "opacity-0"
        }`}
      />
      <div 
        className={`absolute left-[4%] md:left-[10%] top-[75%] md:top-[70%] w-[5px] h-[5px] bg-white ${
          isInView ? "animate-in fade-in slide-in-from-left-[50px] duration-1000 delay-500 ease-out fill-mode-both" : "opacity-0"
        }`}
      />

      <div 
        className={`absolute right-[4%] md:right-[10%] top-[25%] md:top-[30%] w-[5px] h-[5px] bg-white ${
          isInView ? "animate-in fade-in slide-in-from-right-[50px] duration-1000 delay-100 ease-out fill-mode-both" : "opacity-0"
        }`}
      />
      <div 
        className={`absolute right-[6%] md:right-[12.5%] top-[50%] md:top-[50%] w-[5px] h-[5px] bg-white ${
          isInView ? "animate-in fade-in slide-in-from-right-[50px] duration-1000 delay-300 ease-out fill-mode-both" : "opacity-0"
        }`}
      />
      <div 
        className={`absolute right-[4%] md:right-[10%] top-[75%] md:top-[70%] w-[5px] h-[5px] bg-white ${
          isInView ? "animate-in fade-in slide-in-from-right-[50px] duration-1000 delay-500 ease-out fill-mode-both" : "opacity-0"
        }`}
      />

      <div className="max-w-[85%] md:max-w-2/3 mx-auto relative">
        {/* <h2 className="text-[28px] md:text-[42px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.01em] text-zinc-400">
          <span
            style={{
              background: "linear-gradient(90deg, #7dd3fc 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Built for the edge of possible
          </span>
          , where
          <br />
          detonation becomes precision,
          <br />
          and ambition becomes velocity.
        </h2> */}
        <TextReveal>
          Built for the edge of possible, where detonation becomes precision, and ambition becomes velocity
        </TextReveal>
      </div>
    </section>
  );
};
