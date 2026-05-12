import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import BackdropCard from "@/components/BackdropCard";

const filters = ["All", "Solid", "Marble", "Floral", "Gradient", "Custom"];

const backdrops = [
  { name: "Solid White", category: "Solid", swatch: "#f5f1ea", pattern: "solid" as const },
  { name: "Ivory Sand", category: "Solid", swatch: "#e8dfd1", pattern: "solid" as const },
  { name: "Terracotta", category: "Solid", swatch: "#c97b5a", pattern: "solid" as const },
  { name: "Black Marble", category: "Marble", swatch: "#1a1612", pattern: "marble" as const },
  { name: "White Marble", category: "Marble", swatch: "#f3ece2", pattern: "marble" as const },
  { name: "Ojai", category: "Floral", swatch: "#e8b4a0", pattern: "floral" as const },
  { name: "Sahara", category: "Gradient", swatch: "#e8b4a0", pattern: "gradient" as const },
  { name: "Midnight", category: "Gradient", swatch: "#1a1612", pattern: "gradient" as const },
];

export const metadata = {
  title: "Backdrops",
};

export default function BackdropsPage() {
  return (
    <>
      <Hero
        size="sm"
        spaced
        eyebrow="Add-on"
        title="Backdrops"
        lede={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add any
            backdrop to your booking for an additional{" "}
            <span className="text-ink font-medium">$75</span>. Each panel is{" "}
            <span className="text-ink font-medium">8&prime; × 8&prime;</span>.
          </>
        }
      />

      {/* Filter chips */}
      <Container>
        <Reveal>
          <div className="flex flex-wrap gap-2 pb-8 md:pb-12 border-b border-border">
            {filters.map((f, i) => (
              <button
                key={f}
                type="button"
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-colors border ${
                  i === 0
                    ? "border-ink bg-ink text-bg"
                    : "border-border text-muted hover:text-ink hover:border-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Grid */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {backdrops.map((b, i) => (
              <Reveal key={b.name} delay={(i % 4) * 0.06}>
                <BackdropCard {...b} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing band */}
      <section className="py-20 md:py-28 bg-surface-2/60 border-t border-border">
        <Container>
          <Reveal>
            <div className="grid gap-8 md:grid-cols-12 items-end">
              <div className="md:col-span-8">
                <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                  Custom
                </div>
                <h2 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(1.75rem,4.5vw,3rem)]">
                  Don&rsquo;t see what you need?
                  <br />
                  <span className="italic font-light">
                    We can source custom backdrops.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-muted">
                  Lorem ipsum dolor sit amet. Tell us the vibe and we&rsquo;ll
                  put options in front of you within 48 hours.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
                >
                  Request a custom
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
