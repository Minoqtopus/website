import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";

interface LogoProps {
  /** `light` renders for dark backgrounds, `dark` for light backgrounds. */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  /** Where the mark links to. The admin uses its own dashboard root. */
  href?: string;
  /** Appended after the wordmark, e.g. an "Admin" tag. */
  suffix?: ReactNode;
}

const sizes = {
  sm: { w: 150, h: 33 },
  md: { w: 176, h: 38 },
  lg: { w: 200, h: 43 },
} as const;

export default function Logo({
  variant = "dark",
  size = "md",
  href = "/",
  suffix,
}: LogoProps) {
  const { w, h } = sizes[size];

  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5"
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
      {suffix}
    </Link>
  );
}
