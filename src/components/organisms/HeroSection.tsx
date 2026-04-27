"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 400], ["33.33%", "100%"]);
  const borderRadius = useTransform(scrollY, [0, 400], ["24px", "0px"]);
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center overflow-clip bg-[#0a0a0c]"
      style={{ paddingTop: "56px" }}
    >

      {/* Background with subtle stars */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[8%] left-[12%] w-[1px] h-[1px] bg-white/20 rounded-full" />
        <div className="absolute top-[15%] left-[80%] w-[1px] h-[1px] bg-white/15 rounded-full" />
        <div className="absolute top-[22%] left-[35%] w-[1px] h-[1px] bg-white/10 rounded-full" />
        <div className="absolute top-[5%] left-[55%] w-[1px] h-[1px] bg-white/20 rounded-full" />
        <div className="absolute top-[18%] left-[68%] w-[1px] h-[1px] bg-white/12 rounded-full" />
        <div className="absolute top-[12%] left-[25%] w-[1px] h-[1px] bg-white/10 rounded-full" />
      </div>

      {/* Atmospheric lighting / reflection effect centered behind the Hero text */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] bg-[#3b82f6]/10 blur-[120px] rounded-[100%] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#7dd3fc]/5 blur-[100px] rounded-[100%] pointer-events-none z-0" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-8 pt-16 pb-0 text-center">
        {/* Main heading wrapper for positioning the tag */}
        <div className="relative inline-block text-center w-full max-w-[800px]">

          {/* <h1 className="text-[44px] md:text-[64px] lg:text-[80px] font-light leading-[1.05] tracking-[-0.02em] text-white">
            <span
              style={{
                background: "linear-gradient(90deg, #7dd3fc 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                
              }}
            >
              Pioneering
            </span>{" "}
            the future
            <br />
            of hypersonic flight
          </h1> */}
          <h1 
            className="relative z-10 text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.02em]"
            style={{
              background: "radial-gradient(circle at 60% 180%, #FFFFFF 50%, #58b1e3 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Pioneering the future <br /> of hypersonic flight
          </h1>
          {/* COMING SOON Floating Tag */}
          {/* <div className="absolute -top-2 md:-top-4 -right-24 md:-right-40 hidden sm:flex items-center gap-2">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-zinc-600 overflow-visible opacity-60">
              <path d="M0 30 L 10 30 L 10 10 L 40 10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M0 30 L 4 27 L 4 33 Z" fill="currentColor" />
            </svg>
            <div className="-mt-5 border border-zinc-700/60 bg-zinc-900/40 px-3 py-1 text-[8px] tracking-[0.2em] text-white uppercase backdrop-blur-sm">
              Coming Soon
            </div>
          </div> */}
        </div>

        {/* Description */}
        <div className="mt-10 md:mt-12 space-y-4 max-w-lg mx-auto">
          <p className="text-[9px] tracking-[0.2em] text-zinc-500 uppercase leading-[2]">
            Bringing the world closer in seconds with pioneering
            <br />
            next-generation scramjet and rotating detonation engine technology.
          </p>
          <div className="w-10 h-[1px] bg-zinc-800 mx-auto" />
        </div>
      </div>

      {/* Small concept image placeholder */}
      <div className="relative z-10 w-full max-w-[500px] mx-auto px-8">
        <div className="w-full aspect-[3/1] overflow-hidden flex items-center justify-center">
          <span className="pl-48 text-[8px] tracking-[0.2em] text-zinc-600 uppercase">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      {/* Large hero aircraft image */}
      <div className="relative z-10 w-full flex justify-center">
        <motion.div 
          className="relative aspect-[2/1] overflow-hidden"
          style={{ width, borderRadius }}
        >
          <Image
            src="/hero-aircraft.png"
            alt="Hypersonic aircraft soaring above Earth"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          {/* Bottom fade to match next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
