import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  spaced?: boolean;
  size?: "sm" | "lg";
  align?: "left" | "center";
};

export default function Hero({
  eyebrow,
  title,
  lede,
  actions,
  media,
  spaced = false,
  size = "lg",
  align = "left",
}: HeroProps) {
  const padding = size === "lg" ? "pt-32 pb-16 md:pt-44 md:pb-24" : "pt-28 pb-12 md:pt-36 md:pb-16";
  const hasMedia = Boolean(media);
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <section className={padding}>
      <Container>
        <div
          className={
            hasMedia
              ? "grid gap-12 md:gap-16 md:grid-cols-12 items-end"
              : ""
          }
        >
          <Reveal className={hasMedia ? "md:col-span-7" : ""}>
            <div className={`flex flex-col gap-6 ${alignClass}`}>
              {eyebrow ? (
                <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark">
                  {eyebrow}
                </div>
              ) : null}
              <h1
                className={
                  spaced
                    ? "font-heading font-medium text-ink uppercase leading-[1.05] tracking-[0.16em] text-[clamp(2.25rem,9vw,5rem)]"
                    : "font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(2.5rem,7vw,5.25rem)]"
                }
              >
                {title}
              </h1>
              {lede ? (
                <p className="max-w-xl text-base md:text-lg text-muted leading-relaxed">
                  {lede}
                </p>
              ) : null}
              {actions ? (
                <div className="mt-2 flex flex-wrap gap-3">{actions}</div>
              ) : null}
            </div>
          </Reveal>

          {hasMedia ? (
            <Reveal className="md:col-span-5" delay={0.1}>
              {media}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
