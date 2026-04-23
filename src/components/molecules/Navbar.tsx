import logo from "@/public/Logo.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/[0.06] py-4">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between h-14">
        <Image src={logo} alt="Logo" width={120} height={120} />

        {/* Right side cluster containing links and button */}
        <div className="hidden md:flex items-center gap-10 bg-[#a0a0a0] p-[5px] rounded-sm ">
          <a
            href="#about"
            className="text-[9px] tracking-[0.15em] text-black uppercase hover:text-white transition-colors duration-300 pl-4"
          >
            OUR TECHNOLOGIES 
          </a>
          <a
            href="#technology"
            className="text-[9px] tracking-[0.15em] text-black uppercase hover:text-white transition-colors duration-300"
          >
            ABOUT THE TEAM
          </a>

          <a
            href="#solutions"
            className="text-[9px] tracking-[0.15em] text-zinc-200 uppercase border border-zinc-700/50 px-5 py-2 rounded-sm bg-zinc-900 hover:bg-zinc-800/80 hover:text-white transition-all duration-300"
          >
            Contact Us 
          </a>
        </div>
      </div>
    </nav>
  );
};
