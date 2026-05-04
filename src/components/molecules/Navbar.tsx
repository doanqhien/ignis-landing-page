"use client";

import logo from "@/public/Logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Arrow from "@/public/arrow.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 200);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // Prevent scrolling and scrollbar layout shift when menu is open
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Delay removing overflow hidden to prevent layout shift during exit animation
      const timer = setTimeout(() => {
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0px";
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // Handle click outside to close menu
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const menuEl = document.getElementById("mobile-menu");
      const hamburgerEl = document.getElementById("hamburger-btn");
      // If clicking inside the menu or the hamburger button, do nothing
      if (
        (menuEl && menuEl.contains(e.target as Node)) ||
        (hamburgerEl && hamburgerEl.contains(e.target as Node))
      ) {
        return;
      }
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen]);



  return (
    <>
      <nav id="navbar" className={`tracking-[0.05rem] saans-mono top-0 left-0 right-0 z-50 transition-colors duration-300 ${menuOpen ? 'fixed bg-[#0a0a0c]' : 'absolute bg-transparent'}`}>
        {/* Announcement bar - hidden on mobile */}
        <div className="w-full bg-[#262A2C]">
          <div className="mx-auto px-5 flex items-center justify-between h-7">
            <div className=""></div>
            <div className=""></div>
            <div className="text-[9px] text-white uppercase">contact us at admin@ignishypersonics.com</div>
          </div>
        </div>

        <div className="mx-auto px-4 md:px-5 flex items-center justify-between h-14 md:h-16">
          <Image src={logo} alt="Logo" width={140} height={140} />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 bg-[#a0a0a0] p-[5px] rounded-sm ">
            <a
              href="#technology"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("technology");
                if (el) {
                  console.log("el", el.getBoundingClientRect().top, window.scrollY);
                  const top = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="text-[9px] text-black uppercase hover:text-white transition-colors duration-300 pl-4"
            >
              OUR TECHNOLOGIES 
            </a>
          <a
            href="mailto:admin@ignishypersonics.com"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-1 text-[9px] saans-mono tracking-[0.05rem] text-white uppercase px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-500 hover:text-black transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-1">
              Contact Us
            </span>
            <span className="absolute -top-10 -left-10 flex items-center justify-start pointer-events-none">
              <span className="w-0 h-0 bg-white rounded-full transition-all duration-600 ease-out group-hover:w-56 group-hover:h-56"></span>
            </span>
          </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center">
            <button 
              id="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative px-5 py-4 flex flex-col items-center justify-center rounded-xs outline-none bg-[#A0A0A0]"
            >
              <div
                className={`absolute w-4 h-[1px] bg-black transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-[3.5px]'}`}
              />
              <div
                className={`absolute w-4 h-[1px] bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-[3.5px]'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {isMounted && (
        <div
          id="mobile-menu"
          className={`tracking-[0.05rem] flex justify-center items-center saans-mono fixed top-[84px] bottom-[10vh] left-0 right-0 z-40 bg-[#A0A0A0] rounded-b-2xl flex-col md:hidden text-[#1a1a1c] overflow-y-auto shadow-2xl transition-all ${
            menuOpen
              ? "duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:inset(0%_0%_0%_0%)] opacity-100"
              : "duration-200 ease-in-out [clip-path:inset(0%_0%_0%_100%)] opacity-0"
          }`}
        >
          {/* Menu Content */}
          <div className=" flex flex-col items-center justify-center gap-4 px-6 py-8 min-h-max">
            
            {/* Section 1 */}
            <div className={`flex flex-col items-center text-center ${menuOpen ? 'animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out delay-75 fill-mode-both' : 'opacity-0 transition-opacity duration-100'}`}>
              <span className="text-[10px] text-[#444] tracking-[0.2em] mb-[14px]"></span>
              <a href="#technology" onClick={() => setMenuOpen(false)} className="text-[16px] uppercase font-medium tracking-[0.05em]">
                OUR TECHNOLOGIES
              </a>
              <div className="flex flex-col items-center space-y-[14px] mt-6 text-[11px] tracking-[0.1em] text-[#222]">
                <span>RDRE</span>
                <span>DIGITAL TWIN</span>
                <span>IOT SENSORS</span>
              </div>
            </div>

            {/* Divider */}
            <div className={`w-full max-w-[280px] border-t-[0.5px] border-[#666] py-2 ${menuOpen ? 'animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out delay-150 fill-mode-both' : 'opacity-0 transition-opacity duration-100'}`}></div>

            {/* Contact Button */}
            <a 
              href="mailto:admin@ignishypersonics.com" 
              onClick={() => setMenuOpen(false)}
              className={`w-full max-w-[280px] bg-[#141414] text-[#eee] flex items-center justify-center gap-3 py-[16px] text-[10px] tracking-[0.15em] uppercase rounded-[2px] mb-[44px] hover:bg-black transition-colors ${menuOpen ? 'animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out delay-200 fill-mode-both' : 'opacity-0 transition-opacity duration-100'}`}
            >
              CONTACT US <Image src={Arrow} alt="Arrow" width={16} height={16} className="invert" />
            </a>

            {/* Email Section */}
            <div className={`flex items-center justify-center mb-8 w-full max-w-[280px] ${menuOpen ? 'animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out delay-300 fill-mode-both' : 'opacity-0 transition-opacity duration-100'}`}>
              <div className="border-l-[0.5px] border-y-[0.5px] border-[#555] w-[6px] h-[52px]"></div>
              <div className="flex-1 flex flex-col items-center justify-center py-2">
                <span className="text-[9px] tracking-[0.2em] text-[#444] uppercase mb-[6px]">EMAIL US AT</span>
                <p className="text-[11px] tracking-[0.08em] text-[#1a1a1c] font-medium">ADMIN@IGNISHYPERSONICS.COM</p>
              </div>
              <div className="border-r-[0.5px] border-y-[0.5px] border-[#555] w-[6px] h-[52px]"></div>
            </div>

            {/* Footer Links */}
            <div className={`flex items-center justify-center gap-8 text-[10px] tracking-[0.1em] uppercase text-[#444] underline underline-offset-[4px] mt-auto ${menuOpen ? 'animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out delay-500 fill-mode-both' : 'opacity-0 transition-opacity duration-100'}`}>
              <a href="#" className="hover:text-black">PRIVACY POLICY</a>
              <a href="#" className="hover:text-black">TERMS OF USE</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};