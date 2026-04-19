import React from "react";
import { Logo } from "../atoms/Logo";

export const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0c] border-t border-zinc-800/30">
      <div className="max-w-[1100px] mx-auto px-8 md:px-16 py-10">
        {/* Top row - Logo + Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <Logo />

          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-[9px] text-zinc-600 hover:text-zinc-300 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              About
            </a>
            <a
              href="#technology"
              className="text-[9px] text-zinc-600 hover:text-zinc-300 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Technology
            </a>
            <a
              href="#solutions"
              className="text-[9px] text-zinc-600 hover:text-zinc-300 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[9px] text-zinc-600 hover:text-zinc-300 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Careers
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-zinc-800/40 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Born in Australia Tag */}
          <div className="flex items-center gap-2 border border-zinc-800/60 bg-zinc-900/40 px-3 py-1.5 rounded-sm">
            <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full border border-[#7dd3fc] shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            <span className="text-[8px] tracking-[0.2em] text-zinc-400 uppercase">Born in Australia</span>
          </div>
          
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[8px] text-zinc-700 hover:text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[8px] text-zinc-700 hover:text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
