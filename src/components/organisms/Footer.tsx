
export const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0c] border-t border-zinc-800/30">
      <div className="max-w-[1100px] mx-auto px-[10%]">
        {/* Top row - Logo + Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-8">
            <span
              className="text-[9px] text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              ©2026 Ignis Hypersonics. All Rights Reserved.  
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[8px] text-zinc-400 hover:text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[8px] text-zinc-400 hover:text-zinc-400 transition-colors duration-300 tracking-[0.15em] uppercase"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
