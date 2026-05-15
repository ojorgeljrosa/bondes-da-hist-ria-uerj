import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const PinIcon = ({ className = "", color = "hsl(352, 72%, 38%)" }: { className?: string; color?: string }) => (
  <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className={className} aria-hidden="true">
    <circle cx="10" cy="6" r="6" fill={color} />
    <line x1="10" y1="12" x2="10" y2="28" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const PaperClip = ({ className = "" }: { className?: string }) => (
  <svg width="24" height="48" viewBox="0 0 24 48" fill="none" className={className} aria-hidden="true" stroke="hsl(20, 8%, 45%)" strokeWidth="1.5">
    <path d="M6,4 L6,38 Q6,44 12,44 Q18,44 18,38 L18,12 Q18,8 14,8 Q10,8 10,12 L10,34" fill="none" />
  </svg>
);

export const CoffeStain = ({ className = "" }: { className?: string }) => (
  <svg width="80" height="80" viewBox="0 0 80 80" className={className} aria-hidden="true" opacity="0.06">
    <circle cx="40" cy="40" r="35" fill="none" stroke="hsl(25, 40%, 35%)" strokeWidth="4" />
    <circle cx="40" cy="40" r="32" fill="none" stroke="hsl(25, 40%, 35%)" strokeWidth="1" />
  </svg>
);

export const TapeStrip = ({ className = "", rotation = -2 }: { className?: string; rotation?: number }) => (
  <div
    className={cn("h-6 w-28 bg-accent/40 backdrop-blur-sm", className)}
    style={{ transform: `rotate(${rotation}deg)` }}
    aria-hidden="true"
  />
);

export const RedUnderline = ({ className = "" }: { className?: string }) => (
  <svg width="100%" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" className={className} aria-hidden="true">
    <path d="M0,6 Q25,2 50,5 Q75,8 100,4 Q125,1 150,5 Q175,8 200,3" fill="none" stroke="hsl(352, 72%, 38%)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const WashiTape = ({
  className = "",
  color = "pink",
  width = "w-28",
  rotation = -2,
}: {
  className?: string;
  color?: "pink" | "green" | "blue" | "yellow" | "red" | "orange";
  width?: string;
  rotation?: number;
}) => {
  const colors = {
    pink: "bg-[hsl(340,60%,80%)]/60",
    green: "bg-[hsl(140,40%,75%)]/60",
    blue: "bg-[hsl(210,50%,78%)]/60",
    yellow: "bg-[hsl(50,70%,80%)]/60",
    red: "bg-[hsl(0,70%,70%)]/60",
    orange: "bg-[hsl(30,70%,75%)]/60",
  };
  return (
    <div
      className={cn("h-6 backdrop-blur-sm rounded-sm", colors[color], width, className)}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    />
  );
};

export const StampBadge = ({
  text,
  color = "primary",
  className = "",
}: {
  text: string;
  color?: "primary" | "azul" | "secondary" | "green";
  className?: string;
}) => {
  const colorMap = {
    primary: "border-primary text-primary",
    azul: "border-[hsl(239,59%,33%)] text-[hsl(239,59%,33%)]",
    secondary: "border-secondary text-secondary",
    green: "border-[hsl(140,50%,35%)] text-[hsl(140,50%,35%)]",
  };
  return (
    <div
      className={cn(
        "stamp",
        "text-xs md:text-sm font-display font-bold px-3 py-2",
        colorMap[color],
        className
      )}
      aria-hidden="true"
    >
      {text}
    </div>
  );
};

export const PostIt = ({
  children,
  color = "yellow",
  className = "",
  rotation = -2,
}: {
  children: ReactNode;
  color?: "yellow" | "pink" | "green" | "blue";
  className?: string;
  rotation?: number;
}) => {
  const colorMap = {
    yellow: "post-it-yellow",
    pink: "post-it-pink",
    green: "post-it-green",
    blue: "post-it-blue",
  };
  return (
    <div
      className={cn("post-it", colorMap[color], className)}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </div>
  );
};

export const PushPin = ({
  className = "",
  color = "red",
}: {
  className?: string;
  color?: "red" | "blue" | "green" | "yellow" | "white";
}) => {
  const colors = {
    red: "#c0392b",
    blue: "#2980b9",
    green: "#27ae60",
    yellow: "#f39c12",
    white: "#ecf0f1",
  };
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="7" fill={colors[color]} />
      <ellipse cx="12" cy="8" rx="4.5" ry="4" fill={colors[color]} opacity="0.6" />
      <circle cx="10" cy="6" r="1.5" fill="white" opacity="0.4" />
      <line x1="12" y1="15" x2="12" y2="32" stroke="#555" strokeWidth="1.5" />
      <circle cx="12" cy="15" r="1.5" fill="#777" />
    </svg>
  );
};

export const DoodleArrow = ({ className = "", direction = "right" }: { className?: string; direction?: "right" | "left" | "down" }) => {
  const paths = {
    right: "M2,12 Q20,8 40,12 Q60,16 80,10 L75,5 M80,10 L75,16",
    left: "M80,12 Q60,8 40,12 Q20,16 2,10 L7,5 M2,10 L7,16",
    down: "M12,2 Q8,20 12,40 Q16,60 10,80 L5,75 M10,80 L16,75",
  };
  const dims = direction === "down"
    ? { width: 24, height: 90, viewBox: "0 0 24 90" }
    : { width: 90, height: 24, viewBox: "0 0 90 24" };
  return (
    <svg {...dims} className={className} aria-hidden="true" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round">
      <path d={paths[direction]} />
    </svg>
  );
};

export const DoodleStar = ({ className = "" }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5">
    <path d="M16,2 L19,12 L30,12 L21,18 L24,29 L16,22 L8,29 L11,18 L2,12 L13,12 Z" strokeLinejoin="round" />
  </svg>
);

export const DoodleCircle = ({ className = "" }: { className?: string }) => (
  <svg width="60" height="40" viewBox="0 0 60 40" className={className} aria-hidden="true" fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
    <path d="M4,20 Q6,6 30,4 Q54,6 56,20 Q54,34 30,36 Q6,34 4,20 Z" strokeLinecap="round" />
  </svg>
);

export const DoodleHeart = ({ className = "" }: { className?: string }) => (
  <svg width="28" height="26" viewBox="0 0 28 26" className={className} aria-hidden="true" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5">
    <path d="M14,24 C14,24 2,16 2,8 C2,4 5,1 9,2 C11,2.5 13,4 14,6 C15,4 17,2.5 19,2 C23,1 26,4 26,8 C26,16 14,24 14,24 Z" strokeLinejoin="round" />
  </svg>
);

export const DoodleUnderline = ({ className = "" }: { className?: string }) => (
  <svg width="100%" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" className={className} aria-hidden="true">
    <path d="M0,7 Q15,3 30,6 Q45,9 60,5 Q75,2 90,6 Q105,9 120,5 Q135,2 150,7 Q165,3 180,6 Q195,9 200,4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const PolaroidFrame = ({
  src,
  alt = "",
  caption,
  rotation = -2,
  className = "",
}: {
  src: string;
  alt?: string;
  caption?: string;
  rotation?: number;
  className?: string;
}) => (
  <div className={cn("polaroid inline-block", className)} style={{ transform: `rotate(${rotation}deg)` }}>
    <img src={src} alt={alt} className="w-full block" />
    {caption && (
      <p className="font-handwritten text-center text-sm text-ink mt-1">{caption}</p>
    )}
  </div>
);

export const HandwrittenNote = ({
  text,
  className = "",
  rotation = -3,
}: {
  text: string;
  className?: string;
  rotation?: number;
}) => (
  <div
    className={cn("font-handwritten text-lg text-primary/80 italic", className)}
    style={{ transform: `rotate(${rotation}deg)` }}
    aria-hidden="true"
  >
    {text}
  </div>
);

export const NewspaperClip = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("newspaper-clip p-4 shadow-sm", className)}>
    {children}
  </div>
);

export const StickerBadge = ({
  text,
  bgColor = "bg-primary",
  textColor = "text-white",
  className = "",
  rotation = -5,
  size = "md",
}: {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  rotation?: number;
  size?: "sm" | "md" | "lg";
}) => {
  const sizes = {
    sm: "w-14 h-14 text-[8px]",
    md: "w-20 h-20 text-[10px]",
    lg: "w-28 h-28 text-xs",
  };
  return (
    <div
      className={cn(
        "sticker rounded-full flex items-center justify-center font-bold text-center leading-tight px-1",
        bgColor,
        textColor,
        sizes[size],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {text}
    </div>
  );
};

export const TornDivider = ({
  className = "",
  color = "cream",
}: {
  className?: string;
  color?: "cream" | "paper" | "bege" | "white";
}) => {
  const colorMap = {
    cream: "hsl(40, 40%, 96%)",
    paper: "hsl(42, 35%, 92%)",
    bege: "hsl(39, 32%, 93%)",
    white: "hsl(40, 30%, 97%)",
  };
  return (
    <div className={cn("relative h-8 -mb-8 z-10", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1200 30"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1200,0 L1200,15 Q1180,25 1160,18 Q1140,10 1120,20 Q1100,28 1080,15 Q1060,5 1040,18 Q1020,28 1000,15 Q980,5 960,20 Q940,30 920,18 Q900,8 880,22 Q860,30 840,15 Q820,5 800,20 Q780,30 760,15 Q740,5 720,22 Q700,30 680,18 Q660,8 640,20 Q620,28 600,15 Q580,5 560,20 Q540,28 520,15 Q500,5 480,22 Q460,30 440,18 Q420,8 400,20 Q380,28 360,15 Q340,5 320,22 Q300,30 280,18 Q260,8 240,20 Q220,28 200,15 Q180,5 160,20 Q140,28 120,15 Q100,5 80,22 Q60,30 40,18 Q20,8 0,20 Z"
          fill={colorMap[color]}
        />
      </svg>
    </div>
  );
};

export const TornEdgeSection = ({
  className = "",
  color = "cream",
  position = "bottom",
}: {
  className?: string;
  color?: "cream" | "paper" | "bege" | "white" | "marsala" | "secondary";
  position?: "top" | "bottom";
}) => {
  const colorMap = {
    cream: "hsl(40, 40%, 96%)",
    paper: "hsl(42, 35%, 92%)",
    bege: "hsl(39, 32%, 93%)",
    white: "hsl(40, 30%, 97%)",
    marsala: "hsl(352, 30%, 22%)",
    secondary: "hsl(20, 8%, 30%)",
  };
  const pathBottom = "M0,30 L1200,30 L1200,15 Q1180,5 1160,12 Q1140,20 1120,10 Q1100,2 1080,15 Q1060,25 1040,12 Q1020,2 1000,15 Q980,25 960,10 Q940,0 920,12 Q900,22 880,8 Q860,0 840,15 Q820,25 800,10 Q780,0 760,15 Q740,25 720,8 Q700,0 680,12 Q660,22 640,10 Q620,2 600,15 Q580,25 560,10 Q540,2 520,15 Q500,25 480,8 Q460,0 440,12 Q420,22 400,10 Q380,2 360,15 Q340,25 320,8 Q300,0 280,12 Q260,22 240,10 Q220,2 200,15 Q180,25 160,10 Q140,2 120,15 Q100,25 80,8 Q60,0 40,12 Q20,22 0,10 Z";
  const pathTop = "M0,0 L1200,0 L1200,15 Q1180,25 1160,18 Q1140,10 1120,20 Q1100,28 1080,15 Q1060,5 1040,18 Q1020,28 1000,15 Q980,5 960,20 Q940,30 920,18 Q900,8 880,22 Q860,30 840,15 Q820,5 800,20 Q780,30 760,15 Q740,5 720,22 Q700,30 680,18 Q660,8 640,20 Q620,28 600,15 Q580,5 560,20 Q540,28 520,15 Q500,5 480,22 Q460,30 440,18 Q420,8 400,20 Q380,28 360,15 Q340,5 320,22 Q300,30 280,18 Q260,8 240,20 Q220,28 200,15 Q180,5 160,20 Q140,28 120,15 Q100,5 80,22 Q60,30 40,18 Q20,8 0,20 Z";

  const cls = position === "top"
    ? cn("absolute top-0 left-0 right-0 h-8 -translate-y-full z-10", className)
    : cn("absolute bottom-0 left-0 right-0 h-8 translate-y-full z-10", className);

  return (
    <div className={cls} aria-hidden="true">
      <svg viewBox="0 0 1200 30" className="w-full h-full" preserveAspectRatio="none">
        <path d={position === "top" ? pathTop : pathBottom} fill={colorMap[color]} />
      </svg>
    </div>
  );
};

export const TapeCross = ({ className = "" }: { className?: string }) => (
  <div className={cn("tape-cross relative", className)} aria-hidden="true" />
);

export const FoldedCorner = ({ className = "" }: { className?: string }) => (
  <div className={cn("folded-corner", className)} />
);

export const HandDrawnBox = ({
  children,
  className = "",
  rotation = 0,
}: {
  children: ReactNode;
  className?: string;
  rotation?: number;
}) => (
  <div className={cn("relative inline-block", className)} style={{ transform: `rotate(${rotation}deg)` }}>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3,3 Q3,3 8,2 L92,1 Q97,1 97,5 L98,92 Q98,97 94,97 L6,98 Q2,98 2,94 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
    <div className="relative z-10 p-4">{children}</div>
  </div>
);

export const ScribbleX = ({ className = "" }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round">
    <path d="M4,4 Q10,10 8,14 Q6,18 12,20 Q18,22 20,16 Q22,10 16,8 Q10,6 8,4" />
    <path d="M20,4 Q14,10 16,14 Q18,18 12,20 Q6,22 4,16 Q2,10 8,8 Q14,6 16,4" />
  </svg>
);

export const TornPaperOverlay = ({
  texture = 1,
  className = "",
  opacity = 0.3,
  rotation = 0,
  position = "top-right",
}: {
  texture?: number;
  className?: string;
  opacity?: number;
  rotation?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
}) => {
  const positions = {
    "top-right": "-top-4 -right-4",
    "top-left": "-top-4 -left-4",
    "bottom-right": "-bottom-4 -right-4",
    "bottom-left": "-bottom-4 -left-4",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };
  return (
    <div
      className={cn("absolute pointer-events-none w-48 h-48 md:w-64 md:h-64 bg-cover bg-center", positions[position], className)}
      style={{
        backgroundImage: `url("${import.meta.env.BASE_URL}textures/torn/${texture}.png")`,
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
      aria-hidden="true"
    />
  );
};

export const CrumpledOverlay = ({
  texture = 1,
  className = "",
  opacity = 0.06,
}: {
  texture?: number;
  className?: string;
  opacity?: number;
}) => (
  <div
    className={cn("absolute inset-0 pointer-events-none bg-cover bg-center mix-blend-multiply", className)}
    style={{
      backgroundImage: `url("${import.meta.env.BASE_URL}textures/crumpled/${String(texture).padStart(2, '0')}.jpg")`,
      opacity,
    }}
    aria-hidden="true"
  />
);

export const CrayonOverlay = ({
  texture = 1,
  className = "",
  opacity = 0.08,
}: {
  texture?: number;
  className?: string;
  opacity?: number;
}) => (
  <div
    className={cn("absolute inset-0 pointer-events-none bg-cover bg-center mix-blend-multiply", className)}
    style={{
      backgroundImage: `url("${import.meta.env.BASE_URL}textures/crayon/${String(texture).padStart(3, '0')}.png")`,
      opacity,
    }}
    aria-hidden="true"
  />
);

export const NotebookHole = ({ className = "" }: { className?: string }) => (
  <div className={cn("w-5 h-5 rounded-full border-2 border-border bg-background", className)} aria-hidden="true" />
);
