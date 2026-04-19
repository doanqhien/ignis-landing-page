import React from "react";
import { Logo } from "../atoms/Logo";

export const CTASection = () => {
  return (
    <section id="solutions" className="relative pb-24 pt-10 bg-[#0a0a0c]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        {/* CTA Card matching the dark, left-aligned design with right-aligned logo */}
        <div className="bg-[#111114] border border-white/5 rounded pl-8 pr-10 md:pl-16 md:pr-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-[24px] md:text-[32px] font-light text-white tracking-[-0.01em] mb-4">
              Ready to ignite?
            </h2>

            <p className="text-[9px] tracking-[0.15em] text-zinc-500 uppercase leading-[1.8] max-w-sm mb-10">
              We&apos;re igniting something big. Partner with us to explore how our
              hypersonic propulsion technology can transform your defence or
              commercial applications.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] text-zinc-300 uppercase border border-zinc-700/60 px-6 py-3 rounded bg-zinc-900/50 hover:bg-white/5 hover:text-white hover:border-zinc-500 transition-all duration-300"
            >
              Contact Us ↗
            </a>
          </div>

          {/* Right Column Content */}
          <div className="flex flex-col justify-between items-start md:items-end md:text-right mt-4 md:mt-0">
            <p className="text-[8px] tracking-[0.2em] text-zinc-600 uppercase mb-8 md:mb-0">
              Get in Touch
            </p>

            {/* Logo positioned at bottom right */}
            <div className="mt-auto pointer-events-none opacity-80">
              <Logo />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
