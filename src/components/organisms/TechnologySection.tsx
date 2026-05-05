"use client";
 
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import RDRE from "@/public/engine-propulsion.webp";
import DIGITAL_TWIN from "@/public/IMG.webp";
import IOT_SENSOR from "@/public/Frame.webp";
import { useInView } from "@/src/lib/useInView";

const StatItem = ({ stat, index, activeCard, setActiveCard }: any) => {
  const [ref, isInView] = useInView({ threshold: 0.5, once: false, rootMargin: "0px 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveCard(index);
    }
  }, [isInView, index, setActiveCard]);

  return (
    <div 
      ref={ref}
      className="relative z-10 flex items-start gap-8 min-h-[140px] transition-opacity duration-500"
      style={{ 
        opacity: index <= activeCard ? 1 : 0.2
      }}
    >
      {/* Static gray line from this dot downwards */}
      {index < 2 && (
        <div 
          className="absolute left-[10px] top-[20px] w-[1px] bg-zinc-200 z-0"
          style={{ height: "calc(100% + 160px)" }}
        />
      )}

      {/* Active Line from this dot downwards */}
      <div 
        className="absolute left-[10px] top-[20px] w-[2px] bg-black origin-top transition-[height] duration-500"
        style={{ 
          height: (index < 2 && activeCard > index) 
            ? "calc(100% + 160px)" 
            : "0px" 
        }}
      />

      {/* Number block with white background to break the vertical line */}
      <div className="bg-white relative mt-[10px]">
        <span className={`flex items-center justify-center w-5 h-5 transition-colors duration-500 border-[.5px] border-zinc-500 ${index <= activeCard ? 'bg-black' : 'bg-white'}`}>
          <span className={`w-1 h-1 transition-colors duration-500 ${index <= activeCard ? 'bg-white' : 'bg-black'}`}></span>
        </span>
      </div>
      
      <div className="pt-1">
        <h3 className="text-xs tracking-[-0.05rem] saans-mono text-zinc-800 uppercase mb-3">
          {stat.title}
        </h3>
        <div className=" border-b border-zinc-400 border-dashed mb-3 opacity-40"></div>
        <p className="text-sm text-zinc-500 leading-[1.5] max-w-sm">
          {stat.description}
        </p>
      </div>
    </div>
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

  // Mobile Parallax Scroll Logic
  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const [activeMobile, setActiveMobile] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = mobileSectionRef.current;
    if (!section || window.innerWidth >= 768) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewHeight = window.innerHeight;
      
      // Calculate progress from 0 to 1 as section moves through viewport
      // Start is when section top is at viewport top
      // End is when section bottom is at viewport bottom
      const progress = Math.min(Math.max(-rect.top / (sectionHeight - viewHeight), 0), 1);
      
      setScrollProgress(progress);
      
      if (progress < 0.33) setActiveMobile(0);
      else if (progress < 0.66) setActiveMobile(1);
      else setActiveMobile(2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#ffffff]">
      <div id="technology" className="scroll-mt-24" />
      
      {/* Desktop View (md and above) */}
      <div className="hidden md:block max-w-[1200px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start relative">
          
          {/* Left - Content panel */}
          <div className="flex flex-col justify-center lg:pt-24 lg:pb-24 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-1 border-l-[.25px] border-y-[.25px] border-zinc-400"></div>
              <p className="text-[8px] saans-mono tracking-[0.05rem] text-zinc-600 uppercase">Technologies</p>
              <div className="h-3 w-1 border-r-[.25px] border-y-[.25px] border-zinc-400"></div>
            </div>

            <h2 className="text-[40px] leading-[1.2] tracking-[0.01em] text-[#1a1a1c] mb-16">
              Our solutions deliver<br/>outstanding reliability
            </h2>

            <div className="relative mt-2 lg:mt-0">
              <div className="space-y-40 pb-[20vh]">
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
          <div className="lg:sticky lg:top-0 lg:h-screen self-start w-full flex items-center justify-center lg:justify-end order-1 lg:order-2 border-t border-b md:border-l md:border-r border-zinc-100">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <div className="absolute top-0 left-0 w-1 h-3 bg-black -translate-x-1 -translate-y-3" />
              <div className="absolute top-0 right-0 w-1 h-3 bg-black translate-x-1 -translate-y-3" />
              <div className="absolute bottom-0 left-0 w-1 h-3 bg-black -translate-x-1 translate-y-3" />
              <div className="absolute bottom-0 right-0 w-1 h-3 bg-black translate-x-1 translate-y-3" />

              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-[8px] tracking-widest text-zinc-400 uppercase">Illustrated Image</span>
              </div>
              
              <div className="relative w-full h-full overflow-hidden">
                {stats.map((stat, index) => (
                  <div
                    key={stat.number}
                    className="absolute inset-0 transition-opacity duration-600 ease-in-out"
                    style={{ opacity: activeCard === index ? 1 : 0 }}
                  >
                    <Image src={stat.image} alt={stat.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 500px" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile View (Horizontal Scroll Parallax) */}
      <div ref={mobileSectionRef} className="block md:hidden w-full h-[300vh] relative">
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-white py-8">
          
          <div className="px-4 mb-6 flex-shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-1 border-l-[.25px] border-y-[.25px] border-zinc-400"></div>
              <p className="text-[8px] tracking-[0.05em] text-zinc-500 uppercase">Technologies</p>
              <div className="h-3 w-1 border-r-[.25px] border-y-[.25px] border-zinc-400"></div>
            </div>
            <h2 className="text-[24px] leading-[1.2] tracking-[-0.01em] text-[#1a1a1c]">
              Our solutions deliver<br/>outstanding reliability
            </h2>
          </div>

          <div className="px-4 flex-shrink-0">
            <div className="relative w-full aspect-[4/3] bg-[#f8f8f8] flex items-center justify-center border-l border-r border-zinc-100">
              <div className="absolute top-0 left-0 w-1 h-3 bg-black -translate-x-1 -translate-y-3" />
              <div className="absolute top-0 right-0 w-1 h-3 bg-black translate-x-1 -translate-y-3" />
              <div className="absolute bottom-0 left-0 w-1 h-3 bg-black -translate-x-1 translate-y-3" />
              <div className="absolute bottom-0 right-0 w-1 h-3 bg-black translate-x-1 translate-y-3" />

              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-[8px] tracking-widest text-white drop-shadow-md uppercase">Illustrated Image</span>
              </div>
              
              <div className="relative w-full h-full overflow-hidden">
                {stats.map((stat, index) => (
                  <div
                    key={stat.number}
                    className="absolute inset-0 transition-opacity duration-600 ease-in-out"
                    style={{ opacity: activeMobile === index ? 1 : 0 }}
                  >
                    <Image src={stat.image} alt={stat.title} fill className="object-cover" sizes="100vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full mt-6 overflow-hidden flex-shrink-0">
            <div 
              className="flex w-[300%] transition-transform duration-100 ease-out"
              style={{ transform: `translateX(${-scrollProgress * 66.666}%)` }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="w-1/3 px-4 flex flex-col justify-start">
                  <div className="text-[10px] text-zinc-400 mb-2 sm:mb-4 tracking-widest">
                    [ {index + 1}/{stats.length} ]
                  </div>
                  <h3 className="text-[12px] sm:text-[13px] font-medium tracking-[0.1rem] text-zinc-800 uppercase mb-2 sm:mb-3 pr-4">
                    {stat.title}
                  </h3>
                  <div className="border-b border-zinc-400 border-dashed mb-2 sm:mb-4 opacity-40"></div>
                  <p className="text-[11px] sm:text-xs text-zinc-500 leading-[1.6]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 mt-8 flex-shrink-0">
            <div className="relative flex items-center h-4 w-full">
              <div className="absolute left-0 right-0 h-[1px] bg-zinc-300"></div>
              <div 
                className="absolute left-0 h-[1px] bg-black transition-all duration-300 z-0"
                style={{ width: `${(activeMobile / (stats.length - 1)) * 100}%` }}
              ></div>
              {stats.map((_, index) => {
                const percentage = (index / (stats.length - 1)) * 100;
                const offset = index === 0 ? "0%" : index === stats.length - 1 ? "-100%" : "-50%";
                
                return (
                  <div 
                    key={index}
                    className={`absolute top-1/2 flex items-center justify-center w-[14px] h-[14px] transition-colors duration-500 border-[.5px] border-zinc-500 z-10 ${index <= activeMobile ? 'bg-black' : 'bg-white'}`}
                    style={{ 
                      left: `${percentage}%`,
                      transform: `translate(${offset}, -50%)`
                    }}
                  >
                    <div className={`w-[3px] h-[3px] transition-colors duration-500 ${index <= activeMobile ? 'bg-white' : 'bg-black'}`}></div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};


