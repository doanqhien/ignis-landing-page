import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col p-7 bg-zinc-900/20 border border-zinc-800/40 rounded-lg hover:bg-zinc-800/20 hover:border-zinc-700/40 transition-all duration-500">
      <h3 className="text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase mb-8 flex items-center gap-1.5">
        {title}{" "}
        <span className="text-zinc-600 text-[9px]">↘</span>
      </h3>

      <div className="flex-grow flex items-center justify-center mb-8">
        {icon}
      </div>

      <p className="text-[9px] text-zinc-500 leading-[1.8] uppercase tracking-[0.1em]">
        {description}
      </p>
    </div>
  );
};