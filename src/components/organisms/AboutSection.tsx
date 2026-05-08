"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/ui/text-reveal";
import { FeatureCard } from "../molecules/FeatureCard";
import { LightRays } from "@/components/ui/light-rays";
import AustraliaIcon from "@/public/australia.png";
import Arrow from "@/public/arrow.svg"

const AnimatedCard = ({ 
  feature, 
  index, 
}: { 
  feature: { title: string, description: string, icon?: React.ReactNode, videoSrc?: string }, 
  index: number 
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: "-50px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const delayClass = index === 0 ? 'delay-300' : index === 1 ? 'delay-500' : 'delay-700';

  return (
    <div
      ref={ref}
      className={inView ? `animate-in fade-in slide-in-from-right-[200px] duration-800 ease-out ${delayClass} fill-mode-both` : "opacity-0"}
    >
      <FeatureCard
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
        videoSrc={feature.videoSrc}
      />
    </div>
  );
};

export const AboutSection = () => {

  const features = [
    {
      title: "EFFICIENT",
      description:
        "Advanced pressure-gain combustion delivers superior performance with less propellant.",
      videoSrc: "/Efficient.webm",
    },
    {
      title: "SCALABLE",
      description:
        "Modular architecture that adapts seamlessly to different missions and vehicles.",
      videoSrc: "/Scalable.webm",
    },
    {
      title: "AFFORDABLE",
      description:
        "Engineered for lower development, manufacturing, and operational costs without compromising quality.",
      videoSrc: "/Affordable.webm",
    },
  ];

  return (
    <section className="w-full relative pt-20 md:pt-40 pb-12 md:pb-20 bg-[#0a0a0c] overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-20">
        <LightRays />
        {/* Section header */}
        <div className="max-w-4/5 md:max-w-3/4 mx-auto flex flex-col items-center justify-center text-center mb-16">
          {/* HIGH PERFORMANCE subtitle */}
          <div className="flex items-center gap-2 justify-center p-1 h-fit w-fit">
            <div className="h-4 w-1 border-l-[.25px] border-y-[.25px] border-zinc-500"></div>
            <p className="text-[9px] saans-mono tracking-[0.05rem] text-zinc-500 uppercase flex items-center justify-center">
              High Performance
            </p>
            <div className="h-4 w-1 border-r-[.25px] border-y-[.25px] border-zinc-500"></div>
          </div>
          {/* Mission text wrapper for tag positioning */}
          <div className="relative flex justify-center items-center max-w-4xl">
            {/* BORN IN AUSTRALIA Floating Tag */}
            <div className="saans-mono hidden md:flex md:flex-col items-start md:-top-4 lg:top-2 md:-left-4 lg:-left-10 xl:-left-16 opacity-90 md:scale-95 lg:scale-100 origin-top-left z-20">
              <div className="relative flex flex-col items-center justify-center z-1 pb-12">
                <div className="bg-[#262A2C] py-3 px-3 flex flex-row items-center justify-center w-24 rounded-sm text-[9px] tracking-[0.05rem] text-zinc-200 uppercase">
                  BORN IN <Image src={AustraliaIcon} alt="Australia" width={16} height={16} className="rounded-full object-cover ml-2"/>
                </div>
                 <div className="pl-12">
                  {/* Connecting line dropping from the bottom of the tag - Mobile (Shortened to prevent overlap) */}
                 <svg width="40" height="45" viewBox="0 0 40 45" fill="none" className=" top-full left-[45%] text-zinc-400 overflow-visible pointer-events-none md:hidden">
                    <path d="M 0 0 L 10 30 L 25 30" stroke="currentColor" strokeWidth="1" />
                    {/* Square marker (outer border) */}
                    <path d="M 19 24 h 12 v 12 h -12 Z" stroke="currentColor" strokeWidth="1" fill="transparent" className="transition-colors duration-500" />
                    {/* Square marker (inner white square) */}
                    <path d="M 23 28 h 4 v 4 h -4 Z" fill="white" className="transition-colors duration-500" />
                 </svg>

                 {/* Connecting line dropping from the bottom of the tag - Desktop */}
                 <svg width="70" height="100" viewBox="0 0 70 100" fill="none" className=" top-full left-[45%] text-zinc-400 overflow-visible pointer-events-none hidden md:block">
                    <path d="M 0 0 L 20 80 L 50 80" stroke="currentColor" strokeWidth="1" />
                    {/* Square marker (outer border) */}
                    <path d="M 44 74 h 12 v 12 h -12 Z" stroke="currentColor" strokeWidth="1" fill="transparent" className="transition-colors duration-500" />
                    {/* Square marker (inner white square) */}
                    <path d="M 48 78 h 4 v 4 h -4 Z" fill="white" className="transition-colors duration-500" />
                 </svg>
                 </div>
              </div>
            </div>
            <TextReveal>Sovereign Australian propulsion enabling next-generation defence and commercial applications.</TextReveal>
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="relative not-first:saans-mono tracking-[0.05rem] flex justify-center items-baseline flex-col md:flex-row gap-8 md:gap-5 px-6">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
           {/* Atmospheric lighting / reflection effect centered behind the Hero text */}
            <div className="hidden md:block absolute bottom-0 -left-1/2 w-full max-w-225 h-50 bg-[#3b82f6]/10 blur-[100px] rounded-[100%] pointer-events-none z-0" />
        </div>
          
        {/* Contact Us button below cards */}
        <div className="mt-12 md:mt-20 flex items-center justify-center">
          <a
            href="mailto:admin@ignishypersonics.com"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-1 text-[9px] saans-mono tracking-[0.05rem] text-white uppercase py-4 px-6 rounded bg-zinc-800 border border-transparent hover:bg-zinc-500 hover:text-black transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-1">
              Contact Us <Image src={Arrow} alt="Arrow" width={16} height={16} className="invert group-hover:invert-0 transition-all duration-500" />
            </span>
            <span className="absolute -top-10 -left-10 flex items-center justify-start pointer-events-none">
              <span className="w-0 h-0 bg-white rounded-full transition-all duration-600 ease-out group-hover:w-56 group-hover:h-56"></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );  
};
