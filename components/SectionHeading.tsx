import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  spaced?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  spaced = false,
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <div className="mb-4 text-xs uppercase tracking-[0.25em] font-medium text-accent-dark">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={
          spaced
            ? "font-heading font-medium text-ink leading-[0.95] uppercase tracking-[0.18em] text-[clamp(2rem,7vw,4.5rem)]"
            : "font-heading font-medium text-ink leading-[0.95] text-[clamp(2rem,5vw,3.5rem)] -tracking-[0.02em]"
        }
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
