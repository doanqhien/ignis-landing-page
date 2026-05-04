"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import BackGroundLines from "@/public/background.png"
import { useLoadingComplete } from "@/src/lib/LoadingContext";

// Clamp value between min and max
const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

// Map a value from one range to another, clamped
const lerp = (val: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  const t = clamp((val - inMin) / (inMax - inMin), 0, 1);
  return outMin + t * (outMax - outMin);
};

export const HeroSection = () => {
  const loadingComplete = useLoadingComplete();
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Custom cursor state
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  // Keep ref in sync with state (avoid re-running effect)
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Mouse position tracking via ref (no re-renders)
  const mousePos = useRef({ x: -100, y: -100 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Single effect for all imperative animations
  useEffect(() => {
    let rafId: number;
    let cursorX = -100;
    let cursorY = -100;
    let currentOpacity = 0;
    let currentScale = 0.8;

    const tick = () => {
      const section = sectionRef.current;
      if (!section) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      // --- Scroll-driven transforms ---
      const sy = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // Unified image width & y (different scroll ranges per viewport)
      const imgWidth = isMobile
        ? lerp(sy, 0, 400, 33.33, 100)
        : lerp(sy, 0, 600, 33.33, 100);
      const imgY = isMobile
        ? lerp(sy, 0, 400, 0, 160)
        : lerp(sy, 0, 1000, 0, 100);
      section.style.setProperty("--img-w", imgWidth + "%");
      section.style.setProperty("--img-y", imgY + "px");

      // Dots parallax
      const dotScale = lerp(sy, 0, 1000, 1, 5);
      // Left dots
      section.style.setProperty("--dl1", `translate(${lerp(sy, 0, 1000, 0, -50)}vw, ${lerp(sy, 0, 1000, 0, -20)}vh) scale(${dotScale})`);
      section.style.setProperty("--dl2", `translate(${lerp(sy, 0, 1000, 0, -60)}vw, ${lerp(sy, 0, 1000, 0, -10)}vh) scale(${dotScale})`);
      section.style.setProperty("--dl3", `translate(${lerp(sy, 0, 1000, 0, -50)}vw, ${lerp(sy, 0, 1000, 0, 20)}vh) scale(${dotScale})`);
      // Right dots
      section.style.setProperty("--dr1", `translate(${lerp(sy, 0, 1000, 0, 50)}vw, ${lerp(sy, 0, 1000, 0, -20)}vh) scale(${dotScale})`);
      section.style.setProperty("--dr2", `translate(${lerp(sy, 0, 1000, 0, 60)}vw, ${lerp(sy, 0, 1000, 0, -10)}vh) scale(${dotScale})`);
      section.style.setProperty("--dr3", `translate(${lerp(sy, 0, 1000, 0, 50)}vw, ${lerp(sy, 0, 1000, 0, 20)}vh) scale(${dotScale})`);

      // --- Cursor spring animation ---
      const cursor = cursorRef.current;
      if (cursor) {
        // Lerp cursor position (simulates spring with damping ≈ 0.15)
        cursorX += (mousePos.current.x - cursorX) * 0.15;
        cursorY += (mousePos.current.y - cursorY) * 0.15;

        const targetOpacity = isHoveredRef.current ? 1 : 0;
        const targetScale = isHoveredRef.current ? 1 : 0.8;
        currentOpacity += (targetOpacity - currentOpacity) * 0.15;
        currentScale += (targetScale - currentScale) * 0.15;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${currentScale})`;
        cursor.style.opacity = String(currentOpacity);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="w-full relative flex flex-col items-center overflow-clip pb-40 pt-28 md:pt-32 md:pb-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="hidden md:flex fixed top-0 left-0 pointer-events-none z-50 items-center justify-center text-white uppercase will-change-transform"
        style={{ opacity: 0 }}
      >
        <div className="bg-black/25 backdrop-blur-xl px-3 py-2 text-zinc-400 rounded-md text-[8px] saans-mono">
          Scroll to explore
        </div>
      </div>

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

      {/* Left dots */}
      <div 
        className={`absolute left-[4%] md:left-[10%] md:top-[35%] top-[45%] w-[5px] h-[5px] bg-white will-change-transform transition-opacity duration-1000 ease-out ${loadingComplete ? 'opacity-100 delay-100' : 'opacity-0'}`}
        style={{ transform: "var(--dl1, none)" }}
      />
      <div 
        className={`absolute left-[6%] md:left-[12.5%] top-[55%] w-[5px] h-[5px] bg-white will-change-transform transition-opacity duration-1000 ease-out ${loadingComplete ? 'opacity-100 delay-300' : 'opacity-0'}`}
        style={{ transform: "var(--dl2, none)" }}
      />
      <div 
        className={`absolute left-[6%] md:left-[10%] top-[65%] md:top-[75%] w-[5px] h-[5px] bg-white will-change-transform transition-opacity duration-1000 ease-out ${loadingComplete ? 'opacity-100 delay-500' : 'opacity-0'}`}
        style={{ transform: "var(--dl3, none)" }}
      />

      {/* Right dots */}
      <div 
        className={`absolute right-[4%] md:right-[10%] md:top-[35%] top-[45%] w-[5px] h-[5px] bg-white will-change-transform transition-opacity duration-1000 ease-out ${loadingComplete ? 'opacity-100 delay-100' : 'opacity-0'}`}
        style={{ transform: "var(--dr1, none)" }}
      />
      <div 
        className={`absolute right-[6%] md:right-[12.5%] top-[55%] w-[5px] h-[5px] bg-white will-change-transform transition-opacity duration-1000 ease-out ${loadingComplete ? 'opacity-100 delay-300' : 'opacity-0'}`}
        style={{ transform: "var(--dr2, none)" }}
      />
      <div 
        className={`absolute right-[6%] md:right-[10%] top-[65%] md:top-[75%] w-[5px] h-[5px] bg-white will-change-transform transition-opacity duration-1000 ease-out ${loadingComplete ? 'opacity-100 delay-500' : 'opacity-0'}`}
        style={{ transform: "var(--dr3, none)" }}
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
            className="relative text-[38px] sm:text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[0.05rem] py-2 px-1"
            style={{
              background: "radial-gradient(circle at 60% 180%, #FFFFFF 50%, #58b1e3 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <span className="md:hidden">
              Pioneering the <br /> future of <br /> hypersonic flight
            </span>
            <span className="hidden md:inline">
              Pioneering the future <br /> of hypersonic flight
            </span>
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
        <div className="w-full flex pt-8 md:pt-16 justify-center items-center gap-x-3 md:gap-x-6 px-4 md:px-0">
          <div className="h-16 md:h-10 w-2 md:pl-2 pl-0 border-l-[.5px] border-y-[.5px] border-zinc-500"></div>
          <p 
            className="saans-mono whitespace-normal md:whitespace-nowrap text-[10px] md:text-[9px] tracking-[0.05rem] text-zinc-500 uppercase leading-[1.75] text-center max-w-[260px] md:max-w-none"
          >
            Bringing the world closer in seconds with pioneering
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
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
          <div className="h-16 md:h-10 w-2 md:pr-2 pr-0 border-r-[.5px] border-y-[.5px] border-zinc-500"></div>
        </div>
      </div>

      {/* Atmospheric lighting / reflection effect centered behind the Hero text */}
      <div className="hidden md:block absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[400px] bg-[#3b82f6]/10 blur-[120px] rounded-[100%] pointer-events-none z-0" />
      <div className="hidden md:block absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#7dd3fc]/5 blur-[100px] rounded-[100%] pointer-events-none z-0" />
      
      {/* Large hero aircraft image */}
      <div className="relative z-1 w-full flex justify-center pt-28 md:pt-24">
        <div 
          className="relative aspect-[3/2] md:aspect-[2/1] overflow-visible min-w-[280px] md:min-w-0 z-10 mx-auto md:mx-0 will-change-[width,transform]"
          style={{ width: "var(--img-w, 33.33%)", transform: "translateY(var(--img-y, 0px))" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/hero.webp"
              alt="Hypersonic aircraft soaring above Earth"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              fetchPriority="high"
              preload
            />
            {/* Bottom fade to match next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
          </div>
          {/* Decorative Corner Crosshairs/Brackets */}
          <div className="absolute top-0 left-0 w-1 h-3 bg-white -translate-x-1 -translate-y-3" />
          <div className="absolute top-0 right-0 w-1 h-3 bg-white translate-x-1 -translate-y-3" />
          <div className="absolute bottom-0 left-0 w-1 h-3 bg-white -translate-x-1 translate-y-3" />
          <div className="absolute bottom-0 right-0 w-1 h-3 bg-white translate-x-1 translate-y-3" />
        </div>

      </div>
    </section>
  );
};
