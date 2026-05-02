
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="group flex flex-col transition-all duration-500">
      <h3 className="text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase mb-2 flex items-center gap-1.5">
        {title}{" "}
        <span className="w-1 h-1 bg-[#7dd3fc] shadow-[0_0_8px_rgba(59,130,246,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </h3>
      <div className=" border-b border-zinc-400 border-dashed mb-3 opacity-40"></div>
      <div className="flex-grow flex items-center justify-center mb-3">
        {icon}
      </div>

      <p className="text-[9px] text-zinc-500 leading-[1.8] uppercase tracking-[0.1em]">
        {description}
      </p>
    </div>
  );
};