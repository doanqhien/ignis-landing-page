interface SectionLabelProps {
  label: string;
  number?: string;
}

export const SectionLabel = ({ label, number }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-3">
      {number && (
        <span className="text-[10px] text-zinc-600 font-mono tracking-wider">
          {number}
        </span>
      )}
      <div className="w-6 h-[1px] bg-zinc-700" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
        {label}
      </span>
    </div>
  );
};
