type BackdropCardProps = {
  name: string;
  category?: string;
  swatch: string;
  pattern?: "solid" | "marble" | "floral" | "gradient";
};

export default function BackdropCard({
  name,
  category,
  swatch,
  pattern = "solid",
}: BackdropCardProps) {
  const patternStyle =
    pattern === "marble"
      ? {
          background: `radial-gradient(at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 40%), radial-gradient(at 70% 80%, rgba(0,0,0,0.18) 0%, transparent 45%), ${swatch}`,
        }
      : pattern === "floral"
      ? {
          background: `radial-gradient(circle at 20% 30%, ${swatch} 0%, transparent 18%), radial-gradient(circle at 70% 60%, ${swatch} 0%, transparent 16%), radial-gradient(circle at 45% 85%, ${swatch} 0%, transparent 14%), #f3ece2`,
        }
      : pattern === "gradient"
      ? {
          background: `linear-gradient(135deg, ${swatch} 0%, #faf6f1 100%)`,
        }
      : { background: swatch };

  return (
    <figure className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={patternStyle}
        />
        {category ? (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-full bg-bg/85 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
            {category}
          </span>
        ) : null}
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="font-heading text-lg text-ink relative">
          {name}
          <span className="absolute left-0 right-full -bottom-0.5 h-px bg-accent transition-all duration-300 group-hover:right-0" />
        </span>
        <span className="text-xs uppercase tracking-[0.18em] text-muted">
          +$75
        </span>
      </figcaption>
    </figure>
  );
}
