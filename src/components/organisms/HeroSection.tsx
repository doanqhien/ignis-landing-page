"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import BackGroundLines from "@/public/background.png"

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 600], ["33.33%", "100%"]);

  // Custom cursor state
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Parallax transforms for dots (moving outwards to leave the screen)
  const xDotL1 = useTransform(scrollY, [0, 1000], ["0vw", "-50vw"]);
  const yDotL1 = useTransform(scrollY, [0, 1000], ["0vh", "-20vh"]);

  const xDotL2 = useTransform(scrollY, [0, 1000], ["0vw", "-60vw"]);
  const yDotL2 = useTransform(scrollY, [0, 1000], ["0vh", "-10vh"]);

  const xDotL3 = useTransform(scrollY, [0, 1000], ["0vw", "-50vw"]);
  const yDotL3 = useTransform(scrollY, [0, 1000], ["0vh", "20vh"]);

  const xDotR1 = useTransform(scrollY, [0, 1000], ["0vw", "50vw"]);
  const yDotR1 = useTransform(scrollY, [0, 1000], ["0vh", "-20vh"]);

  const xDotR2 = useTransform(scrollY, [0, 1000], ["0vw", "60vw"]);
  const yDotR2 = useTransform(scrollY, [0, 1000], ["0vh", "-10vh"]);

  const xDotR3 = useTransform(scrollY, [0, 1000], ["0vw", "50vw"]);
  const yDotR3 = useTransform(scrollY, [0, 1000], ["0vh", "20vh"]);

  const scaleDots = useTransform(scrollY, [0, 1000], [1, 5]);

  const yImage = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <section
      id="hero"
      className="w-full relative flex flex-col items-center overflow-clip pt-20 md:pt-32"
      onMouseMove={(e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center text-[9px] tracking-[0.2em] text-white uppercase"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
      >
        <div className="bg-black/25 backdrop-blur-xl px-2 py-1 text-zinc-400 rounded-md text-[8px]">
          Scroll to explore
        </div>
      </motion.div>

      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src={BackGroundLines} 
          alt="Background" 
          fill 
          priority 
          className="object-cover"
        />
      </div>
      <motion.div 
        className="absolute left-[5%] md:left-[10%] top-[35%] w-[5px] h-[5px] bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        style={{ x: xDotL1, y: yDotL1, scale: scaleDots }}
      />
      <motion.div 
        className="absolute left-[15%] md:left-[12.5%] top-[55%] w-[5px] h-[5px] bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        style={{ x: xDotL2, y: yDotL2, scale: scaleDots }}
      />
      <motion.div 
        className="absolute left-[30%] md:left-[10%] top-[75%] w-[5px] h-[5px] bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ x: xDotL3, y: yDotL3, scale: scaleDots }}
      />

      <motion.div 
        className="absolute right-[5%] md:right-[10%] top-[35%] w-[5px] h-[5px] bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        style={{ x: xDotR1, y: yDotR1, scale: scaleDots }}
      />
      <motion.div 
        className="absolute right-[15%] md:right-[12.5%] top-[55%] w-[5px] h-[5px] bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        style={{ x: xDotR2, y: yDotR2, scale: scaleDots }}
      />
      <motion.div 
        className="absolute right-[30%] md:right-[10%] top-[75%] w-[5px] h-[5px] bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ x: xDotR3, y: yDotR3, scale: scaleDots }}
      />
      {/* Hero content */}
      <div className="relative w-full mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-0 text-center">
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
            className="relative text-[44px] md:text-[64px] lg:text-[80px] leading-[1.15] tracking-[-0.02em] py-2 px-1"
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
        <div className="w-full flex pt-8 md:pt-16 justify-center items-center gap-x-3 md:gap-x-6 px-2 md:px-0">
          <div className="h-10 w-2 pl-2 border-l-[.5px] border-y-[.5px] border-zinc-500"></div>
          <p 
            className="whitespace-nowrap text-[8px] md:text-[9px] tracking-[0.15em] md:tracking-[0.2em] text-zinc-500 uppercase leading-[1.75] text-center"
          >
            Bringing the world closer in seconds with pioneering
            <br />
            next-generation scramjet and rotating detonation engine technology.
          </p>
          {/* <div className="flex flex-col max-w-[35%] ">
            <SplitText
              text="Bringing the world closer in seconds with pioneering next-generation scramjet and rotating detonation engine technology"
              className="text-[8px] tracking-[0.1rem] text-zinc-500 uppercase leading-[1.75]"
              delay={0}
              duration={2}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </div> */}
          <div className="h-10 w-2 pr-2 border-r-[.5px] border-y-[.5px] border-zinc-500"></div>
        </div>
      </div>
            
      {/* Small concept image placeholder */}
      {/* <div className="relative z-10 w-full max-w-[500px] mx-auto px-8">
        <div className="w-full aspect-[3/1] overflow-hidden flex items-center justify-center">
          <span className="pl-48 text-[8px] tracking-[0.2em] text-zinc-600 uppercase">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div> */}

      {/* Atmospheric lighting / reflection effect centered behind the Hero text */}
      <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[400px] bg-[#3b82f6]/10 blur-[120px] rounded-[100%] pointer-events-none z-0" />
      <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#7dd3fc]/5 blur-[100px] rounded-[100%] pointer-events-none z-0" />
      
      {/* Large hero aircraft image */}
      <div className="relative z-1 w-full flex justify-center pt-24">
        <motion.div 
          className="relative aspect-[2/1] overflow-visible"
          style={{ width, y: yImage }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/hero.png"
              alt="Hypersonic aircraft soaring above Earth"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            {/* Bottom fade to match next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
          </div>
          {/* Decorative Corner Crosshairs/Brackets */}
          <div className="absolute top-0 left-0 w-1 h-3  bg-white -translate-x-1 -translate-y-3" />
          <div className="absolute top-0 right-0 w-1 h-3 bg-white translate-x-1 -translate-y-3" />
          <div className="absolute bottom-0 left-0 w-1 h-3  bg-white -translate-x-1 translate-y-3" />
          <div className="absolute bottom-0 right-0 w-1 h-3 bg-white translate-x-1 translate-y-3" />
        </motion.div>
                    
      </div>
    </section>
  );
};
