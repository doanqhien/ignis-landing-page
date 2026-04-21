import React from "react";
import { WireframeIcon } from "../atoms/WireframeIcon";
import { FeatureCard } from "../molecules/FeatureCard";
import { TextReveal } from "@/components/ui/text-reveal";

export const AboutSection = () => {
  const features = [
    {
      title: "EFFICIENT",
      description:
        "Bringing the world closer in seconds with pioneering hypersonic flight technology.",
      icon: <WireframeIcon type="efficient" />,
    },
    {
      title: "SCALABLE",
      description:
        "Sovereign propulsion enabling next-generation defence and commercial applications.",
      icon: <WireframeIcon type="scalable" />,
    },
    {
      title: "AFFORDABLE",
      description:
        "Our solutions deliver exceptional reliability, scaling seamlessly for the edge of possible.",
      icon: <WireframeIcon type="affordable" />,
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0c]">
      <div className="max-w-[1100px] mx-auto px-8 md:px-16">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Small geometric icon */}
          <div className="flex items-center justify-center mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="text-zinc-600"
            >
              <rect
                x="3"
                y="3"
                width="22"
                height="22"
                rx="2"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
              <rect
                x="8"
                y="8"
                width="12"
                height="12"
                rx="1"
                stroke="currentColor"
                strokeWidth="0.6"
              />
              <circle cx="14" cy="14" r="2.5" stroke="currentColor" strokeWidth="0.6" />
            </svg>
          </div>

          {/* HIGH PERFORMANCE subtitle */}
          <p className="text-[9px] tracking-[0.25em] text-[#7dd3fc] uppercase mb-6 flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-[#7dd3fc] rounded-full shadow-[0_0_8px_#7dd3fc]"></span>
            High Performance
          </p>

          {/* Mission text wrapper for tag positioning */}
          <div className="relative inline-block text-center mt-2">
            
            {/* BORN IN AUSTRALIA Floating Tag */}
            <div className="absolute top-2 -left-40 xl:-left-48 hidden lg:flex items-center gap-0 opacity-90">
              <div className="-mt-4 border border-zinc-700/60 bg-zinc-900/60 px-3 py-1.5 flex items-center gap-2 text-[8px] tracking-[0.2em] text-zinc-300 uppercase backdrop-blur-sm z-10 rounded-sm">
                <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full border border-[#7dd3fc] shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                Born in Australia
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

          {/* Capabilities divider */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-zinc-800" />
            <span className="text-[8px] text-zinc-700 tracking-[0.2em] uppercase">
              Capabilities
            </span>
            <div className="w-12 h-[1px] bg-zinc-800" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Contact Us button below cards */}
        <div className="mt-16 flex items-center justify-center">
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] text-white uppercase border border-zinc-700/80 px-8 py-3.5 rounded bg-zinc-900/30 hover:bg-zinc-800/80 hover:border-zinc-500 transition-all duration-300"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
};
