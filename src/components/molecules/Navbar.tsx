import logo from "@/public/Logo.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="w-full bg-zinc-700/60">
        <div className="mx-auto px-5 flex items-center justify-between h-7">
        <div className=""></div>
        <div className="text-[7px] tracking-[0.1rem] text-white uppercase">COOMING SOON</div>
        <div className="text-[7px] tracking-[0.1rem]  text-white uppercase">contact us at admin@ignishypersonics.com</div>
      </div>
      </div>
      <div className="mx-auto px-5 flex items-center justify-between h-16">
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
