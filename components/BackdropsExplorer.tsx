"use client";

import { useMemo, useState } from "react";
import BackdropCard from "./BackdropCard";
import Container from "./Container";
import Reveal from "./Reveal";

type Backdrop = {
  name: string;
  category: string;
  swatch: string;
  pattern: "solid" | "marble" | "floral" | "gradient";
};

type Props = {
  filters: readonly string[];
  backdrops: readonly Backdrop[];
};

export default function BackdropsExplorer({ filters, backdrops }: Props) {
  const [selected, setSelected] = useState<string>(filters[0] ?? "All");

  const visible = useMemo(() => {
    if (selected === "All") return backdrops;
    if (selected === "Custom") return [];
    return backdrops.filter((b) => b.category === selected);
  }, [selected, backdrops]);

  return (
    <>
      <Container>
        <Reveal>
          <div
            role="tablist"
            aria-label="Filter backdrops"
            className="flex flex-wrap gap-2 pb-8 md:pb-12 border-b border-border"
          >
            {filters.map((f) => {
              const active = f === selected;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelected(f)}
                  className={`text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-colors border ${
                    active
                      ? "border-ink bg-ink text-bg"
                      : "border-border text-muted hover:text-ink hover:border-ink"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>
      </Container>

      <section className="py-12 md:py-20">
        <Container>
          {selected === "Custom" ? (
            <Reveal>
              <div className="mx-auto max-w-xl text-center py-10 md:py-16">
                <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                  Custom
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-ink leading-tight">
                  Tell us the vibe.
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted leading-relaxed">
                  Share your colors, theme, or inspiration photos and we&rsquo;ll
                  source custom backdrops within 48 hours.
                </p>
              </div>
            </Reveal>
          ) : visible.length === 0 ? (
            <Reveal>
              <p className="text-center text-muted py-10">
                No backdrops in this category yet.
              </p>
            </Reveal>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
              {visible.map((b, i) => (
                <Reveal key={b.name} delay={(i % 4) * 0.06}>
                  <BackdropCard {...b} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
