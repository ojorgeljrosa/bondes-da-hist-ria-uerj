/** Decorative SVG elements for the history/paper theme */

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
    className={`h-6 w-28 bg-accent/40 backdrop-blur-sm ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
    aria-hidden="true"
  />
);

export const RedUnderline = ({ className = "" }: { className?: string }) => (
  <svg width="100%" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" className={className} aria-hidden="true">
    <path d="M0,6 Q25,2 50,5 Q75,8 100,4 Q125,1 150,5 Q175,8 200,3" fill="none" stroke="hsl(352, 72%, 38%)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
