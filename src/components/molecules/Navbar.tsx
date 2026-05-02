"use client";

import logo from "@/public/Logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "@/public/arrow.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const menuVariants = {
    hidden: { clipPath: "inset(0% 0% 0% 100%)" },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      clipPath: "inset(0% 0% 0% 100%)",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  return (
    <>
      <nav id="navbar" className={`tracking-[0.05rem] saans-mono top-0 left-0 right-0 z-50 transition-colors duration-300 ${menuOpen ? 'fixed bg-[#0a0a0c]' : 'absolute bg-transparent'}`}>
        {/* Announcement bar - hidden on mobile */}
        <div className="w-full bg-[#262A2C]">
          <div className="mx-auto px-5 flex items-center justify-between h-7">
            <div className=""></div>
            <div className=""></div>
            <div className="text-[7px] text-white uppercase">contact us at admin@ignishypersonics.com</div>
          </div>
        </div>

        <div className="mx-auto px-4 md:px-5 flex items-center justify-between h-14 md:h-16">
          <Image src={logo} alt="Logo" width={140} height={140} />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 bg-[#a0a0a0] p-[5px] rounded-sm ">
            <a
              href="#technology"
              className="text-[9px] text-black uppercase hover:text-white transition-colors duration-300 pl-4"
            >
              OUR TECHNOLOGIES 
            </a>
            <a
              href="mailto:admin@ignishypersonics.com"
              className="text-[9px] text-zinc-200 uppercase border border-zinc-700/50 px-5 py-2 rounded-sm bg-zinc-900 hover:bg-zinc-800/80 hover:text-white transition-all duration-300"
            >
              Contact Us 
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center">
            <button 
              id="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative px-5 py-4 flex flex-col items-center justify-center rounded-xs outline-none bg-[#A0A0A0]"
              aria-label="Toggle menu"
            >
              <motion.div
                className="absolute w-4 h-[1px] bg-black"
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute w-4 h-[1px] bg-black"
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="tracking-[0.05rem] flex justify-center items-center saans-mono fixed top-[84px] bottom-[10vh] left-0 right-0 z-40 bg-[#A0A0A0] rounded-b-2xl flex flex-col md:hidden text-[#1a1a1c] overflow-y-auto shadow-2xl"
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Menu Content */}
            <div className=" flex flex-col items-center justify-center gap-4 px-6 py-8 min-h-max">
              
              {/* Section 1 */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <span className="text-[10px] text-[#444] tracking-[0.2em] mb-[14px]"></span>
                <a href="#technology" onClick={() => setMenuOpen(false)} className="text-[16px] uppercase font-medium tracking-[0.05em]">
                  OUR TECHNOLOGIES
                </a>
                <div className="flex flex-col items-center space-y-[14px] mt-6 text-[11px] tracking-[0.1em] text-[#222]">
                  <span>RDRE</span>
                  <span>DIGITAL TWIN</span>
                  <span>IOT SENSORS</span>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div variants={itemVariants} className="w-full max-w-[280px] border-t-[0.5px] border-[#666] my-8"></motion.div>

              {/* Contact Button */}
              <motion.a 
                variants={itemVariants}
                href="mailto:admin@ignishypersonics.com" 
                onClick={() => setMenuOpen(false)}
                className="w-full max-w-[280px] bg-[#141414] text-[#eee] flex items-center justify-center gap-3 py-[16px] text-[10px] tracking-[0.15em] uppercase rounded-[2px] mb-[44px] hover:bg-black transition-colors"
              >
                CONTACT US <Image src={Arrow} alt="Arrow" width={16} height={16} className="invert" />
              </motion.a>

              {/* Email Section */}
              <motion.div variants={itemVariants} className="flex items-center justify-center mb-8 w-full max-w-[280px]">
                <div className="border-l-[0.5px] border-y-[0.5px] border-[#555] w-[6px] h-[52px]"></div>
                <div className="flex-1 flex flex-col items-center justify-center py-2">
                  <span className="text-[9px] tracking-[0.2em] text-[#444] uppercase mb-[6px]">EMAIL US AT</span>
                  <p className="text-[11px] tracking-[0.08em] text-[#1a1a1c] font-medium">ADMIN@IGNISHYPERSONICS.COM</p>
                </div>
                <div className="border-r-[0.5px] border-y-[0.5px] border-[#555] w-[6px] h-[52px]"></div>
              </motion.div>

              {/* Footer Links */}
              <motion.div variants={itemVariants} className="flex items-center justify-center gap-8 text-[10px] tracking-[0.1em] uppercase text-[#444] underline underline-offset-[4px] mt-auto">
                <a href="#" className="hover:text-black">PRIVACY POLICY</a>
                <a href="#" className="hover:text-black">TERMS OF USE</a>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};