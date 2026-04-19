import React from "react";
import Image from "next/image";

export const TechnologySection = () => {
  const stats = [
    {
      number: "01",
      title: "ROTATING DETONATION ENGINE",
      description:
        "Our RDE technology harnesses the energy of continuous detonation waves, delivering up to 25% greater thermodynamic efficiency than conventional engines.",
    },
    {
      number: "02",
      title: "SCRAMJET INTEGRATION",
      description:
        "Advanced scramjet propulsion for sustained hypersonic flight at Mach 5+ speeds with breakthrough air-breathing engine design.",
    },
    {
      number: "03",
      title: "SMART FUEL SYSTEMS",
      description:
        "Intelligent fuel injection and management systems optimized for maximum performance across the entire flight envelope.",
    },
  ];

  return (
    <section id="technology" className="relative bg-[#ffffff] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Content panel */}
          <div className="flex flex-col justify-center">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-3 bg-zinc-300" />
              <p className="text-[9px] tracking-[0.2em] text-zinc-500 uppercase">
                Technologies
              </p>
            </div>

            <h2 className="text-[28px] md:text-[36px] font-light leading-[1.2] tracking-[-0.01em] text-[#1a1a1c] mb-16">
              Our solutions deliver
              <br />
              outstanding reliability
            </h2>

            <div className="relative">
              {/* Vertical line connecting the steps */}
              <div className="absolute left-[13px] top-[10px] bottom-[40px] w-[1px] bg-zinc-200" />

              <div className="space-y-12">
                {stats.map((stat, index) => (
                  <div key={stat.number} className="relative z-10 flex items-start gap-8">
                    {/* Number block with white background to break the vertical line */}
                    <div className="bg-white py-1">
                      <span className="flex items-center justify-center w-7 h-7 text-[10px] font-mono text-zinc-800 border border-zinc-300 bg-white">
                        {stat.number}
                      </span>
                    </div>
                    
                    <div className="pt-1">
                      <h3 className="text-[10px] font-medium tracking-[0.15em] text-zinc-900 uppercase mb-3">
                        {stat.title}
                      </h3>
                      <p className="text-[10px] text-zinc-500 leading-[1.8] max-w-sm">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Engine Image Container */}
          <div className="relative w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square bg-[#f8f8f8] flex items-center justify-center">
              
              {/* Decorative Corner Crosshairs/Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-zinc-300 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-zinc-300 translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-zinc-300 -translate-x-1/2 translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-zinc-300 translate-x-1/2 translate-y-1/2" />

              <div className="absolute top-1/2 left-0 w-2 h-[1px] bg-zinc-300 -translate-x-full" />
              <div className="absolute top-1/2 right-0 w-2 h-[1px] bg-zinc-300 translate-x-full" />
              <div className="absolute top-0 left-1/2 w-[1px] h-2 bg-zinc-300 -translate-y-full" />
              <div className="absolute bottom-0 left-1/2 w-[1px] h-2 bg-zinc-300 translate-y-full" />
              
              <div className="relative w-[85%] h-[85%] overflow-hidden">
                <Image
                  src="/engine-propulsion.png"
                  alt="Rotating Detonation Engine"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
