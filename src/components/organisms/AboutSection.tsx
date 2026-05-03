"use client";

import Image from "next/image";
import EfficientIcon from "@/public/Efficient.png";
import { motion } from "framer-motion";
import ScalableIcon from "@/public/Scalable.png";
import AffordableIcon from "@/public/Affordable.png";
import { TextReveal } from "@/components/ui/text-reveal";
import { FeatureCard } from "../molecules/FeatureCard";
import { LightRays } from "@/components/ui/light-rays";
import AustraliaIcon from "@/public/australia.png";
import Arrow from "@/public/arrow.svg"

const AnimatedCard = ({ 
  feature, 
  index, 
}: { 
  feature: { title: string, description: string, icon: React.ReactNode }, 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3 + index * 0.2, 
        ease: "easeOut"
      }}
    >
      <FeatureCard
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
      />
    </motion.div>
  );
};

export const AboutSection = () => {

  const features = [
    {
      title: "EFFICIENT",
      description:
        "Advanced pressure-gain combustion delivers superior performance with less propellant.",
      icon: <Image src={EfficientIcon} alt="Efficient" width={400} height={400}/>,
    },
    {
      title: "SCALABLE",
      description:
        "Modular architecture that adapts seamlessly to different missions and vehicles.",
      icon: <Image src={ScalableIcon} alt="Scalable" width={400} height={400}/>,
    },
    {
      title: "AFFORDABLE",
      description:
        "Engineered for lower development, manufacturing, and operational costs without compromising quality.",
      icon: <Image src={AffordableIcon} alt="Affordable" width={400} height={400}/>,
    },
  ];

  return (
    <section className="w-full relative pt-20 md:pt-40 pb-12 md:pb-20 bg-[#0a0a0c] overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-20">
        <LightRays />
        {/* Section header */}
        <div className="max-w-4/5 md:max-w-2/3 mx-auto text-center mb-16">
          {/* HIGH PERFORMANCE subtitle */}
          <div className="flex items-center gap-2 justify-center">
            <div className="h-3 w-1 border-l-[.25px] border-y-[.25px] border-zinc-500"></div>
            <p className="text-[8px] saans-mono tracking-[0.05rem] text-zinc-500 uppercase flex items-center justify-center">
              High Performance
            </p>
            <div className="h-3 w-1 border-r-[.25px] border-y-[.25px] border-zinc-500"></div>
          </div>
          {/* Mission text wrapper for tag positioning */}
          <div className="relative">
            {/* BORN IN AUSTRALIA Floating Tag */}
            <div className="saans-mono absolute top-[5%] -left-[5%] xl:-left-[15%] hidden lg:flex flex-col items-start opacity-90">
              <div className="relative bg-[#1c1c1e] py-3 px-4 flex items-center gap-2 text-[9px] tracking-[0.05rem] text-zinc-200 uppercase backdrop-blur-md z-10 rounded-sm shadow-xl">
                 BORN IN <Image src={AustraliaIcon} alt="Australia" width={16} height={16} className="rounded-full object-cover"/>
                 
                 {/* Connecting line dropping from the bottom of the tag */}
                 <svg width="70" height="100" viewBox="0 0 70 100" fill="none" className="absolute top-full left-[45%] text-zinc-400 overflow-visible pointer-events-none">
                    <path d="M 0 0 L 20 80 L 50 80" stroke="currentColor" strokeWidth="1" />
                    {/* Square marker (outer border) */}
                    <path d="M 44 74 h 12 v 12 h -12 Z" stroke="currentColor" strokeWidth="1" fill="transparent" className="transition-colors duration-500" />
                    {/* Square marker (inner white square) */}
                    <path d="M 48 78 h 4 v 4 h -4 Z" fill="white" className="transition-colors duration-500" />
                 </svg>
              </div>
            </div>

            {/* <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.01em]">
              <span
                style={{
                  background: "linear-gradient(90deg, #7dd3fc 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sovereign Australian propulsion
              </span>
              <br />
              <span className="text-zinc-500">enabling next-generation</span>{" "}
              <span className="text-white">defence</span>
              <br />
              <span className="text-white">and commercial applications.</span>
            </h2> */}
            <TextReveal>Sovereign Australian propulsion enabling next-generation defence and commercial applications.</TextReveal>
          </div>
        </div>

        {/* Feature cards */}
        <div className="relative not-first:saans-mono tracking-[0.05rem] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 px-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
           {/* Atmospheric lighting / reflection effect centered behind the Hero text */}
      <div className="absolute -bottom-[0%] -left-1/2 w-full max-w-[900px] h-[200px] bg-[#3b82f6]/10 blur-[100px] rounded-[100%] pointer-events-none z-0" />
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
