import { cn } from "@/lib/utils";

type InstituteLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
};

const InstituteLogo = ({ className, size = "md" }: InstituteLogoProps) => (
  <svg
    viewBox="0 0 64 64"
    className={cn(sizes[size], "shrink-0", className)}
    aria-hidden
  >
    <defs>
      <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f5d76e" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#logoGold)" opacity="0.15" />
    <path
      fill="url(#logoGold)"
      d="M32 8c-1 0-2 .4-2.6 1.2L24 16h-4c-1.1 0-2 .9-2 2v4h-4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h36c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2h-4v-4c0-1.1-.9-2-2-2h-4l-5.4-6.8C34 8.4 33 8 32 8zm0 4.5L35 18H29l3-5.5zM14 26h36v18H14V26zm8 4v2h4v-2h-4zm8 0v2h4v-2h-4zm8 0v2h4v-2h-4z"
    />
    <path
      fill="url(#logoGold)"
      d="M18 48c0 2 3 4 14 4s14-2 14-4v-2H18v2z"
      opacity="0.9"
    />
    <ellipse cx="32" cy="50" rx="14" ry="3" fill="url(#logoGold)" opacity="0.5" />
  </svg>
);

export default InstituteLogo;
