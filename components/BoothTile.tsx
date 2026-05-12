import Link from "next/link";

type BoothTileProps = {
  eyebrow: string;
  name: string;
  description: string;
  href: string;
  accent?: string;
};

export default function BoothTile({
  eyebrow,
  name,
  description,
  href,
  accent = "#e8b4a0",
}: BoothTileProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-border bg-surface overflow-hidden hover:border-ink transition-colors"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${accent} 0%, #faf6f1 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-end p-6">
          <span className="font-heading uppercase text-bg/0 text-xs tracking-[0.25em]">
            {eyebrow}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 md:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-accent-dark mb-2">
          {eyebrow}
        </div>
        <h3 className="font-heading text-2xl md:text-3xl text-ink leading-tight">
          {name}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>
        <span className="mt-5 inline-flex items-center text-sm font-medium text-ink group-hover:text-accent transition-colors">
          Learn more
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
