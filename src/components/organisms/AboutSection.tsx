"use client";

import Image from "next/image";
import EfficientIcon from "@/public/Efficient.png";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import ScalableIcon from "@/public/Scalable.png";
import AffordableIcon from "@/public/Affordable.png";
import { TextReveal } from "@/components/ui/text-reveal";
import { FeatureCard } from "../molecules/FeatureCard";
import { LightRays } from "@/components/ui/light-rays";

const AnimatedCard = ({ 
  feature, 
  index, 
  scrollYProgress 
}: { 
  feature: { title: string, description: string, icon: React.ReactNode }, 
  index: number, 
  scrollYProgress: MotionValue<number> 
}) => {
  const start = index * 0.2;
  const end = Math.min(start + 0.5, 1);

  const x = useTransform(scrollYProgress, [start, end], [700, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

  return (
    <motion.div style={{ x, opacity }}>
      <FeatureCard
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
      />
    </motion.div>
  );
};

export const AboutSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 0.9", "center center"]
  });

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
    <section id="about" className="relative py-24 bg-[#0a0a0c] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-16">
        <LightRays />
        {/* Section header */}
        <div className="text-center mb-16">
          {/* HIGH PERFORMANCE subtitle */}
          <p className="text-[9px] tracking-[0.25em] text-zinc-500 uppercase mb-6 flex items-center justify-center gap-2">
            High Performance
          </p>

          {/* Mission text wrapper for tag positioning */}
          <div className="relative inline-block mt-2">
            
            {/* BORN IN AUSTRALIA Floating Tag */}
            <div className="absolute top-0 -left-2 xl:-left-4 hidden lg:flex items-center gap-0 opacity-90">
              <div className="-mt-4 border border-zinc-700/60 bg-zinc-900/60 px-3 py-1.5 flex items-center gap-2 text-[8px] tracking-[0.2em] text-zinc-300 uppercase backdrop-blur-sm z-10 rounded-sm">
                 Born in
              </div>
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-zinc-500 overflow-visible -ml-1">
                <path d="M0 10 L 20 10 L 20 25 L 40 25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M40 25 L 35 22 L 35 28 Z" fill="currentColor" />
              </svg>
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
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              feature={feature}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Contact Us button below cards */}
        <div className="mt-16 flex items-center justify-center">
          <a
            href="#solutions"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] text-white uppercase px-5 py-4 rounded bg-zinc-800 border border-transparent hover:bg-zinc-500 hover:text-black transition-all duration-500"
          >
            <span className="relative z-10">Contact Us →</span>
            <span className="absolute -top-10 -left-10 flex items-center justify-start pointer-events-none">
              <span className="w-0 h-0 bg-white rounded-full transition-all duration-500 ease-out group-hover:w-56 group-hover:h-56"></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
