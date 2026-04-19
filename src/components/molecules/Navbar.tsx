import React from "react";
import { Logo } from "../atoms/Logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between h-14">
        <Logo />

        {/* Right side cluster containing links and button */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#about"
            className="text-[9px] tracking-[0.15em] text-zinc-400 uppercase hover:text-white transition-colors duration-300"
          >
            About The Team
          </a>
          <a
            href="#technology"
            className="text-[9px] tracking-[0.15em] text-zinc-400 uppercase hover:text-white transition-colors duration-300"
          >
            Team Technology
          </a>

          <a
            href="#solutions"
            className="text-[9px] tracking-[0.15em] text-zinc-300 uppercase border border-zinc-700/50 px-5 py-2 rounded bg-zinc-900/30 hover:bg-zinc-800/80 hover:text-white transition-all duration-300"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </nav>
  );
};
