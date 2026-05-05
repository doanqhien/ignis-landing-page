"use client";

import { useRef, useEffect } from "react";
import SplitText from "@/components/ui/split-text";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  videoSrc?: string;
}

export const FeatureCard = ({ title, description, icon, videoSrc }: FeatureCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768 && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="group flex flex-col transition-all duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase mb-2 flex items-center gap-1.5">
        {title}{" "}
        <span className="w-1 h-1 bg-[#7dd3fc] shadow-[0_0_8px_rgba(59,130,246,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </h3>
      <div className=" border-b border-zinc-400 border-dashed mb-3 opacity-40"></div>
      <div className="flex-grow flex items-center justify-center mb-3">
        {videoSrc ? (
          <video 
            ref={videoRef}
            src={videoSrc} 
            loop 
            muted 
            playsInline 
            width={400} 
            height={400} 
            className="object-contain" 
          />
        ) : (
          icon
        )}
      </div>

      <p className="text-[9px] text-zinc-500 leading-[1.8] uppercase tracking-[0.1em]">
            <SplitText
              text={description}
              className="text-[9px] tracking-[0.05rem] text-zinc-500 uppercase leading-[1.8] max-w-sm mb-10 saans-mono"
              delay={10}
              duration={2}
              ease="power3.out"
              splitType="words, chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="justify"
            />
      </p>
    </div>
  );
};