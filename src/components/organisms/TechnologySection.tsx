"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import RDRE from "@/public/engine-propulsion.png";
import DIGITAL_TWIN from "@/public/IMG.png";
import IOT_SENSOR from "@/public/Frame1.png";

const StatItem = ({ stat, index, activeCard, setActiveCard }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveCard(index);
    }
  }, [isInView, index, setActiveCard]);

  return (
    <motion.div 
      ref={ref}
      className="relative z-10 flex items-start gap-8 min-h-[120px]"
      animate={{ 
        opacity: index <= activeCard ? 1 : 0.2
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Static gray line from this dot downwards */}
      {index < 2 && (
        <div 
          className="absolute left-[10px] top-[20px] w-[1px] bg-zinc-200 z-0"
          style={{ height: "calc(100% + 120px)" }}
        />
      )}

      {/* Active Line from this dot downwards */}
      <motion.div 
        className="absolute left-[10px] top-[20px] w-[2px] bg-black origin-top z-0"
        initial={{ height: 0 }}
        animate={{ 
          height: (index < 2 && activeCard > index) 
            ? "calc(100% + 120px)" 
            : "0px" 
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Number block with white background to break the vertical line */}
      <div className="bg-white relative z-10 mt-[10px]">
        <span className={`flex items-center justify-center w-5 h-5 transition-colors duration-500 ${index <= activeCard ? 'bg-black' : 'bg-white'}`}>
          <span className={`w-1 h-1 transition-colors duration-500 ${index <= activeCard ? 'bg-white' : 'bg-black'}`}></span>
        </span>
      </div>
      
      <div className="pt-1">
        <h3 className="text-xs font-medium tracking-[0.1rem] text-zinc-800 uppercase mb-3">
          {stat.title}
        </h3>
        <div className=" border-b border-zinc-400 border-dashed mb-3 opacity-40"></div>
        <p className="text-xs text-zinc-500 leading-[1.5] max-w-sm">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
};

export const TechnologySection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const stats = [
    {
      number: "01",
      title: "RDRE (ROTATING DETONATION ROCKET ENGINE)",
      description:
        "Revolutionary patent-pending rotating detonation technology that provides higher efficiency and thrust density than conventional rocket engines.",
      image: RDRE,
    },
    {
      number: "02",
      title: "DIGITAL TWIN",
      description:
        "Real-time simulation and predictive control for faster development and optimized engine performance.",
      image: DIGITAL_TWIN,
    },
    {
      number: "03",
      title: "IOT SENSORS",
      description:
        "Advanced sensor network enabling continuous monitoring and intelligent engine management.",
      image: IOT_SENSOR,
    },
  ];

  return (
    <section id="technology" className="relative bg-[#ffffff] pt-4 md:pt-8">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          
          {/* Left - Content panel */}
          <div className="flex flex-col justify-center pt-24">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-1 border-l-[.25px] border-y-[.25px] border-zinc-400"></div>
              <p className="text-[8px] tracking-[0.05em] text-zinc-500 uppercase">
                Technologies
              </p>
              <div className="h-3 w-1 border-r-[.25px] border-y-[.25px] border-zinc-400"></div>
            </div>

            <h2 className="text-[28px] md:text-4xl leading-[1.2] tracking-[-0.01em] text-[#1a1a1c] mb-16">
              Our solutions deliver
              <br />
              outstanding reliability
            </h2>

            <div className="relative">
              <div className="space-y-28 pb-[20vh]">
                {stats.map((stat, index) => (
                  <StatItem
                    key={stat.number}
                    stat={stat}
                    index={index}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Engine Image Container */}
          <div className="lg:sticky lg:top-0 lg:h-screen self-start w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square bg-[#f8f8f8] flex items-center justify-center">
              
              {/* Decorative Corner Crosshairs/Brackets */}
              <div className="absolute top-0 left-0 w-1 h-3  bg-black -translate-x-1 -translate-y-3" />
              <div className="absolute top-0 right-0 w-1 h-3 bg-black translate-x-1 -translate-y-3" />
              <div className="absolute bottom-0 left-0 w-1 h-3  bg-black -translate-x-1 translate-y-3" />
              <div className="absolute bottom-0 right-0 w-1 h-3 bg-black translate-x-1 translate-y-3" />
              
              <div className="relative w-full h-full overflow-hidden">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.number}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Image
                      src={stat.image}
                      alt={stat.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
