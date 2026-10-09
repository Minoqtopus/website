import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** `light` renders for dark backgrounds, `dark` for light backgrounds. */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { w: 150, h: 33 },
  md: { w: 176, h: 38 },
  lg: { w: 200, h: 43 },
} as const;

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const { w, h } = sizes[size];

  return (
    <Link
      href="/"
      className="group flex items-center"
      aria-label="Minoqtopus — home"
    >
      <Image
        src="/images/brand/logo.png"
        alt="Minoqtopus"
        width={w}
        height={h}
        priority
        className={`h-auto w-auto object-contain transition-opacity duration-200 group-hover:opacity-80 ${
          // The artwork is emerald on transparent. On dark surfaces, lift it to
          // near-white so the wordmark keeps its contrast against the ground.
          variant === "light" ? "brightness-0 invert" : ""
        }`}
        style={{ maxHeight: h }}
      />
    </Link>
  );
}
