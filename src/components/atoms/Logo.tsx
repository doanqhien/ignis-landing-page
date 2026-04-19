import React from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        className="text-white"
      >
        {/* Flame / ignition symbol */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M20 6 Q28 16 24 24 Q22 28 20 30 Q18 28 16 24 Q12 16 20 6Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <circle cx="20" cy="22" r="3" fill="#0a0a0c" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white leading-none">
          IGNIS
        </span>
        <span className="text-[7px] tracking-[0.2em] uppercase text-zinc-600 leading-none mt-0.5">
          Propulsion Inc
        </span>
      </div>
    </div>
  );
};
