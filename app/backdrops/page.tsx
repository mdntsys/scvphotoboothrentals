import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import BackdropsExplorer from "@/components/BackdropsExplorer";

const filters = ["All", "Solid", "Marble", "Floral", "Gradient", "Custom"] as const;

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
            Set the scene for every shot. Add any backdrop to your booking for
            an additional{" "}
            <span className="text-ink font-medium">$75</span>. Each panel is{" "}
            <span className="text-ink font-medium">8&prime; × 8&prime;</span>.
          </>
        }
      />

      <BackdropsExplorer filters={filters} backdrops={backdrops} />

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
                  Tell us the vibe — colors, theme, inspiration photos — and
                  we&rsquo;ll put custom options in front of you within 48
                  hours.
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
