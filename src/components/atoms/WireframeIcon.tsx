
type IconType = "efficient" | "scalable" | "affordable";

export const WireframeIcon = ({ type }: { type: IconType }) => {
  const icons = {
    efficient: (
      <svg
        className="w-full h-full text-zinc-400 opacity-70"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        {/* Concentric circles with flow lines - represents propulsion efficiency */}
        <circle cx="60" cy="60" r="12" strokeWidth="0.8" />
        <circle cx="60" cy="60" r="22" strokeDasharray="3 2" />
        <circle cx="60" cy="60" r="32" strokeDasharray="4 3" />
        <circle cx="60" cy="60" r="42" strokeDasharray="5 4" />
        <circle cx="60" cy="60" r="52" strokeDasharray="6 5" />
        {/* Flow arrows */}
        <path d="M60 8 L60 18" strokeWidth="1" />
        <path d="M60 102 L60 112" strokeWidth="1" />
        <path d="M8 60 L18 60" strokeWidth="1" />
        <path d="M102 60 L112 60" strokeWidth="1" />
        {/* Diagonal lines */}
        <path d="M23 23 L30 30" strokeWidth="0.7" />
        <path d="M90 90 L97 97" strokeWidth="0.7" />
        <path d="M97 23 L90 30" strokeWidth="0.7" />
        <path d="M23 97 L30 90" strokeWidth="0.7" />
        {/* Inner detail */}
        <circle cx="60" cy="60" r="5" fill="currentColor" fillOpacity="0.15" strokeWidth="0" />
      </svg>
    ),
    scalable: (
      <svg
        className="w-full h-full text-zinc-400 opacity-70"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        {/* Isometric hexagonal grid - represents modular scalability */}
        <path d="M60 15 L90 32 L90 68 L60 85 L30 68 L30 32 Z" strokeWidth="0.8" />
        <path d="M60 25 L82 38 L82 62 L60 75 L38 62 L38 38 Z" strokeDasharray="3 2" />
        <path d="M60 35 L74 44 L74 56 L60 65 L46 56 L46 44 Z" strokeDasharray="2 2" />
        {/* Connection lines */}
        <line x1="60" y1="15" x2="60" y2="5" strokeWidth="0.7" />
        <line x1="90" y1="32" x2="100" y2="26" strokeWidth="0.7" />
        <line x1="90" y1="68" x2="100" y2="74" strokeWidth="0.7" />
        <line x1="60" y1="85" x2="60" y2="95" strokeWidth="0.7" />
        <line x1="30" y1="68" x2="20" y2="74" strokeWidth="0.7" />
        <line x1="30" y1="32" x2="20" y2="26" strokeWidth="0.7" />
        {/* Corner nodes */}
        <circle cx="60" cy="5" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="100" cy="26" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="100" cy="74" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="60" cy="95" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="20" cy="74" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="20" cy="26" r="2" fill="currentColor" fillOpacity="0.3" />
        {/* Center point */}
        <circle cx="60" cy="50" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="0" />
      </svg>
    ),
    affordable: (
      <svg
        className="w-full h-full text-zinc-400 opacity-70"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        {/* Converging nozzle shape - represents cost-effective engineering */}
        <ellipse cx="60" cy="22" rx="45" ry="12" strokeWidth="0.8" />
        <ellipse cx="60" cy="35" rx="35" ry="9" strokeDasharray="3 2" />
        <ellipse cx="60" cy="48" rx="25" ry="7" strokeDasharray="2 2" />
        <ellipse cx="60" cy="58" rx="18" ry="5" strokeDasharray="2 1" />
        {/* Nozzle walls */}
        <path d="M15 22 L42 58" strokeWidth="0.7" />
        <path d="M105 22 L78 58" strokeWidth="0.7" />
        {/* Thrust flame */}
        <path d="M42 58 Q50 90 60 105 Q70 90 78 58" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Center flow line */}
        <line x1="60" y1="58" x2="60" y2="105" strokeWidth="0.5" strokeDasharray="3 3" />
        {/* Thrust point */}
        <circle cx="60" cy="105" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="0" />
      </svg>
    ),
  };

  return (
    <div className="w-36 h-36 flex items-center justify-center">{icons[type]}</div>
  );
};