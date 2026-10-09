interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      <span
        className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 ${
          dark ? "text-gold-500" : "text-gold-600"
        }`}
      >
        {label}
      </span>
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${
          dark ? "text-white" : "text-stone-950"
        }`}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient-gold">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            dark ? "text-stone-400" : "text-stone-500"
          } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
