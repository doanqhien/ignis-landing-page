"use client";

import logo from "@/public/Logo.png";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaggeredMenu } from "@/components/ui/staggered-menu"; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { label: 'Our Technologies', ariaLabel: 'Go to Our Technologies', link: '/' },
    // SỬA Ở ĐÂY: Thay đổi link thành mailto:...
    { label: 'Contact us', ariaLabel: 'Get in touch', link: 'mailto:admin@ignishypersonics.com' } 
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-10">
        {/* Announcement bar - hidden on mobile */}
        <div className="w-full bg-zinc-700/60 hidden md:block">
          <div className="mx-auto px-5 flex items-center justify-between h-7">
            <div className=""></div>
            <div className=""></div>
            <div className="text-[7px] tracking-[0.1rem]  text-white uppercase">contact us at admin@ignishypersonics.com</div>
          </div>
        </div>

        <div className="mx-auto px-4 md:px-5 flex items-center justify-between h-14 md:h-16">
          <Image src={logo} alt="Logo" width={120} height={120} className="w-[90px] md:w-[120px]" />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 bg-[#a0a0a0] p-[5px] rounded-sm ">
            <a
              href="#technology"
              className="text-[9px] tracking-[0.15em] text-black uppercase hover:text-white transition-colors duration-300 pl-4"
            >
              OUR TECHNOLOGIES 
            </a>
            <a
              href="mailto:admin@ignishypersonics.com"
              className="text-[9px] tracking-[0.15em] text-zinc-200 uppercase border border-zinc-700/50 px-5 py-2 rounded-sm bg-zinc-900 hover:bg-zinc-800/80 hover:text-white transition-all duration-300"
            >
              Contact Us 
            </a>
          </div>

          {/* Mobile icons: profile + hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <div style={{ height: '100vh',background: '#243742' }}>
            <StaggeredMenu
              position="right"
              isFixed
              items={menuItems}
              socialItems={socialItems}
              displaySocials
              displayItemNumbering={true}
              menuButtonColor="#ffffff"
              openMenuButtonColor="#fff"
              changeMenuColorOnOpen={true}
              colors={['#B497CF', '#5227FF']}
              accentColor="#5227FF"
            />
          </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0c]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] text-zinc-300 uppercase hover:text-white transition-colors duration-300">
              Our Technologies
            </a>
            <a href="#technology" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] text-zinc-300 uppercase hover:text-white transition-colors duration-300">
              About The Team
            </a>
            {/* SỬA Ở ĐÂY: Thay đổi href="#solutions" thành mailto:... */}
            <a href="mailto:admin@ignishypersonics.com" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] text-zinc-200 uppercase border border-zinc-700/50 px-8 py-3 bg-zinc-900 hover:bg-zinc-800/80 hover:text-white transition-all duration-300">
              Contact Us
            </a>
            <p className="absolute bottom-8 text-[8px] tracking-[0.1rem] text-zinc-600 uppercase">
              admin@ignishypersonics.com
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};