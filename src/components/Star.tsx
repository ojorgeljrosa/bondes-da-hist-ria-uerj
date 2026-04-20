interface StarProps {
  className?: string;
  color?: "red" | "blue" | "gold";
  size?: number;
}

const colors = {
  red: "hsl(348, 83%, 47%)",
  blue: "hsl(215, 100%, 32%)",
  gold: "hsl(45, 100%, 50%)",
};

export const Star = ({ className = "", color = "red", size = 32 }: StarProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={colors[color]}
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <polygon points="12,0 15,8 24,9.5 17.5,15.5 19,24 12,19.5 5,24 6.5,15.5 0,9.5 9,8" />
  </svg>
);
