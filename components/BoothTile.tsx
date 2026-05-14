import Image from "next/image";
import Link from "next/link";

type BoothTileProps = {
  name: string;
  description: string;
  href: string;
  accent?: string;
  image?: string;
};

export default function BoothTile({
  name,
  description,
  href,
  accent = "#e8b4a0",
  image,
}: BoothTileProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-border bg-surface overflow-hidden hover:border-ink transition-colors"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={
          image
            ? undefined
            : {
                background: `linear-gradient(160deg, ${accent} 0%, #faf6f1 100%)`,
              }
        }
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 md:p-8">
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
