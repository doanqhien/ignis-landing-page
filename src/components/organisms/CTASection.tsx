import Logo  from "@/public/Logo.png";
import Arrow from "@/public/arrow.svg";
import Image from "next/image";
import SplitText from "@/components/ui/split-text";

export const CTASection = () => {
  return (
    <section id="solutions" className="relative background-transparent border-y-0 md:border-y border-zinc-700 overflow-hidden">
      <div className="max-w-full md:max-w-2/3 mx-auto">
        {/* CTA Card matching the dark, left-aligned design with right-aligned logo */}
        <div className="bg-zinc-900 border-x-0 md:border-x border-zinc-700 grid grid-cols-1 md:grid-cols-3 items-stretch">
                {/* Atmospheric lighting / reflection effect centered behind the Hero text */}
      <div className="hidden md:block absolute -bottom-[5%] left-[60%] w-full max-w-[900px] h-[150px] bg-[#3b82f6]/10 blur-[150px] rounded-[100%] pointer-events-none z-0" />
 
          {/* Left Column Content */}
          <div className="md:col-span-2 flex flex-col items-start text-left border-r-0 md:border-r border-zinc-700 px-10 md:px-6 md:pl-20 py-10 md:py-14">
            <h2 className="text-[20px] md:text-[32px] font-light text-white tracking-[0.05rem] mb-4">
              Ready to ignite?
            </h2>

            <SplitText
              text="Whether you're advancing sovereign defence capabilities, accelerating access to space, or exploring next-generation hypersonic applications — we're ready to connect."
              className="text-[9px] tracking-[0.05rem] text-zinc-500 uppercase leading-[1.8] max-w-sm mb-10 saans-mono"
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
            href="mailto:admin@ignishypersonics.com"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-1 text-[9px] saans-mono tracking-[0.05rem] text-white uppercase py-4 px-6 rounded bg-black hover:bg-zinc-500 hover:text-black transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-1">
              Contact Us <Image src={Arrow} alt="Arrow" width={16} height={16} className="invert group-hover:invert-0 transition-all duration-500" />
            </span>
            <span className="absolute -top-10 -left-10 flex items-center justify-start pointer-events-none">
              <span className="w-0 h-0 bg-white rounded-full transition-all duration-600 ease-out group-hover:w-56 group-hover:h-56"></span>
            </span>
          </a>
          </div>

          {/* Right Column Content */}
          <div className="w-full h-24 md:h-full border-y border-zinc-600 md:border-y-0 md:col-span-1 flex flex-row-reverse md:flex-col items-start">
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-[9px] saans-mono tracking-[0.05rem] text-zinc-400 uppercase">
                <span className="text-zinc-600">Email</span> 
                <br/>
                admin@ignishypersonics.com
              </p>
            </div>

            {/* Logo positioned at bottom right */}
            <div className="w-full h-full flex justify-center items-center pointer-events-none border-r border-t-0 md:border-r-0 md:border-t border-zinc-600 pr-2">
              <Image src={Logo} alt="Logo" width={140} height={140} className="opacity-50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
