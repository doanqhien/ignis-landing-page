import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  variant = "outline",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-200 border border-white/20",
    outline:
      "bg-transparent border border-zinc-700/60 text-zinc-300 hover:bg-white/5 hover:border-zinc-500 hover:text-white backdrop-blur-md",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px] rounded",
    md: "px-6 py-3 text-xs rounded-md",
    lg: "px-8 py-4 text-sm rounded-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};