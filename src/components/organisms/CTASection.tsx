import Logo  from "@/public/Logo.png";
import Image from "next/image";
import SplitText from "@/components/ui/split-text";
import { ArrowUpRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="solutions" className="relative background-transparent border-y border-zinc-700">
      <div className="max-w-2/3 mx-auto">
        {/* CTA Card matching the dark, left-aligned design with right-aligned logo */}
        <div className="bg-zinc-900 border-x border-zinc-700 grid grid-cols-1 md:grid-cols-3 items-stretch">
          
          {/* Left Column Content */}
          <div className="md:col-span-2 flex flex-col items-start text-left border-r border-zinc-700 pl-20 py-14">
            <h2 className="text-[24px] md:text-[32px] font-light text-white tracking-[-0.01em] mb-4">
              Ready to ignite?
            </h2>

            <SplitText
              text="Whether you're advancing sovereign defence capabilities, accelerating access to space, or exploring next-generation hypersonic applications — we're ready to connect."
              className="text-[9px] tracking-[0.05rem] text-zinc-500 uppercase leading-[1.8] max-w-sm mb-10"
              delay={300}
              duration={2}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="justify"
            />

          <a
            href="#solutions"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-1 text-[9px] tracking-[0.1em] text-white uppercase p-3 rounded bg-black hover:bg-zinc-500 hover:text-black transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Us <ArrowUpRight size={15} strokeWidth={2.5} />
            </span>
            <span className="absolute -top-10 -left-10 flex items-center justify-start pointer-events-none">
              <span className="w-0 h-0 bg-white rounded-full transition-all duration-600 ease-out group-hover:w-56 group-hover:h-56"></span>
            </span>
          </a>
          </div>

          {/* Right Column Content */}
          <div className="w-full h-full md:col-span-1 flex flex-col items-start">
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-[9px] tracking-[0.1rem] text-zinc-400 uppercase">
                <span className="text-zinc-600">Email</span> 
                <br/>
                admin@ignishypersonics.com
              </p>
            </div>

            {/* Logo positioned at bottom right */}
            <div className="w-full h-full flex justify-center items-center pointer-events-none opacity-50 border-t border-zinc-600">
              <Image src={Logo} alt="Logo" width={140} height={140} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
