interface PageHeaderProps {
  /** Optional eyebrow above the title. */
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function PageHeader({
  label,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gold-400/25 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4" />
      <div className="relative max-w-7xl mx-auto px-6">
        {label && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4">
            {label}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] max-w-3xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gold-600">{highlight}</span>
            </>
          )}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-stone-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
