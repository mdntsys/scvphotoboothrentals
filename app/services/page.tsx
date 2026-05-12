import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

type Booth = {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  features: string[];
  accent: string;
};

const booths: Booth[] = [
  {
    id: "glam",
    eyebrow: "Signature",
    name: "Glam Booth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Hollywood-style skin smoothing",
      "Black-and-white or full color prints",
      "On-site attendant included",
    ],
    accent: "#e8b4a0",
  },
  {
    id: "print",
    eyebrow: "Classic",
    name: "Print Booth",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: [
      "4x6 prints in 8 seconds",
      "Custom strip templates",
      "Unlimited prints all night",
    ],
    accent: "#c97b5a",
  },
  {
    id: "digital",
    eyebrow: "Compact",
    name: "Digital Booth",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    features: [
      "GIFs, Boomerangs, video",
      "Instant text + AirDrop",
      "Tiny footprint, big results",
    ],
    accent: "#9e5a3f",
  },
];

export const metadata = {
  title: "Our Booths",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Our booths"
        title={
          <>
            Pick the vibe.
            <br />
            <span className="italic font-light">We&rsquo;ll handle the rest.</span>
          </>
        }
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
      />

      <div className="pb-20 md:pb-32">
        {booths.map((b, i) => (
          <section
            key={b.id}
            id={b.id}
            className={`scroll-mt-24 py-16 md:py-24 ${
              i % 2 === 1 ? "bg-surface-2/50 border-y border-border" : ""
            }`}
          >
            <Container>
              <div
                className={`grid gap-10 md:gap-16 md:grid-cols-12 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="md:col-span-6">
                  <div
                    className="aspect-[4/5] rounded-3xl border border-border overflow-hidden relative"
                    style={{
                      background: `linear-gradient(160deg, ${b.accent} 0%, #faf6f1 100%)`,
                    }}
                  >
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-ink/60">
                        {String(i + 1).padStart(2, "0")} / 03
                      </span>
                      <span className="font-heading italic text-ink/60">
                        {b.eyebrow}
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal className="md:col-span-6" delay={0.1}>
                  <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                    {b.eyebrow} · {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(2rem,5vw,3.5rem)]">
                    {b.name}
                  </h2>
                  <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-lg">
                    {b.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {b.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm md:text-base text-ink"
                      >
                        <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
                    >
                      Add to inquiry
                    </Link>
                    <Link
                      href="/backdrops"
                      className="inline-flex items-center justify-center border border-ink/20 px-6 py-3 rounded-full font-medium text-sm text-ink hover:border-ink transition-colors"
                    >
                      Pair with a backdrop
                    </Link>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        ))}

        {/* Pricing teaser */}
        <section className="py-20 md:py-28">
          <Container>
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-10 md:p-16 text-center">
                <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                  Pricing
                </div>
                <h3 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(1.75rem,4.5vw,3rem)]">
                  Packages start at{" "}
                  <span className="italic">$lorem</span>.
                </h3>
                <p className="mt-4 max-w-xl mx-auto text-muted">
                  Lorem ipsum dolor sit amet. Every package includes attendant,
                  setup, and breakdown.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
                >
                  Get a custom quote
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>
    </>
  );
}
