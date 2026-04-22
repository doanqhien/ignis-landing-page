import { LightRays } from "@/components/ui/light-rays";
import { TextReveal } from "@/components/ui/text-reveal";

export const QuoteSection = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#0a0a0c] flex items-center justify-center">
      <LightRays />
      {/* Decorative crosshairs on left and right */}
      <div className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 opacity-30">
        <div className="relative w-3 h-3 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white" />
          <div className="absolute h-full w-[1px] bg-white" />
        </div>
      </div>
      <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 opacity-30">
        <div className="relative w-3 h-3 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white" />
          <div className="absolute h-full w-[1px] bg-white" />
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-8 text-center relative">
        {/* <h2 className="text-[28px] md:text-[42px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.01em] text-zinc-400">
          <span
            style={{
              background: "linear-gradient(90deg, #7dd3fc 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Built for the edge of possible
          </span>
          , where
          <br />
          detonation becomes precision,
          <br />
          and ambition becomes velocity.
        </h2> */}
        <TextReveal>
          Built for the edge of possible, where detonation becomes precision, and ambition becomes velocity.
        </TextReveal>
      </div>
    </section>
  );
};
