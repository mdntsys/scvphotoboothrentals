import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

type Mode = {
  id: string;
  name: string;
  description: string;
  features: string[];
  accent: string;
  image: string;
};

const modes: Mode[] = [
  {
    id: "digital",
    name: "Digital",
    description:
      "Send every shot straight to guests' phones. No waiting on prints, no extra trip back to the booth — just instant, shareable photos delivered the moment they're taken.",
    features: [
      "Instant text or AirDrop delivery",
      "Fastest turnaround, smallest footprint",
      "Best for venues where space is tight or guests want to share immediately",
    ],
    accent: "#9e5a3f",
    image: "/booth-digital.png",
  },
  {
    id: "print",
    name: "Print",
    description:
      "The classic photo booth experience, refined. Crisp 4x6 or strip prints in 8 seconds, branded templates designed for your event, unlimited reprints all night.",
    features: [
      "4x6 prints or strip layouts",
      "Custom-branded templates",
      "Unlimited reprints throughout the event",
    ],
    accent: "#c97b5a",
    image: "/booth-print.png",
  },
  {
    id: "digital-print",
    name: "Digital + Print",
    description:
      "Both worlds. Guests walk away with a print in hand and a digital copy on their phone — perfect for events where you want a physical keepsake plus the social-share moment.",
    features: [
      "Physical print + instant digital delivery",
      "Most popular configuration",
      "Everything in Digital and Print, bundled",
    ],
    accent: "#e8b4a0",
    image: "/booth-digital-print.png",
  },
];

const standardFeatures = [
  "Boomerangs & GIFs",
  "Video clips",
  "Animated overlays",
  "Color & black-and-white filters",
  "Vertical and horizontal capture",
  "Custom print and digital templates",
  "Multi-design layouts",
  "iPad-driven guest interface",
  "On-site attendant",
  "Setup and breakdown included",
];

export const metadata = {
  title: "Booth Options",
};

export default function BoothPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Booth options"
        title={
          <>
            One booth.
            <br />
            <span className="italic font-light">Every mode.</span>
          </>
        }
        lede="Pick your output — digital, print, or both — and add the Glam upgrade for high-resolution, ring-lit shots. Every mode includes the full feature set, standard."
      />

      <div className="pb-20 md:pb-32">
        {modes.map((m, i) => (
          <section
            key={m.id}
            id={m.id}
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
                  <div className="aspect-[4/5] rounded-3xl border border-border overflow-hidden relative">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-bg/90 drop-shadow-sm">
                        {String(i + 1).padStart(2, "0")} / 03
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal className="md:col-span-6" delay={0.1}>
                  <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                    {String(i + 1).padStart(2, "0")} / 03
                  </div>
                  <h2 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(2rem,5vw,3.5rem)]">
                    {m.name}
                  </h2>
                  <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-lg">
                    {m.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {m.features.map((f) => (
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

        {/* Every booth includes */}
        <section className="py-20 md:py-28 bg-surface-2/40 border-y border-border">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                  Standard on every mode
                </div>
                <h2 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(1.75rem,4.5vw,3rem)]">
                  Every booth includes
                  <br />
                  <span className="italic font-light">the full toolkit.</span>
                </h2>
                <p className="mt-5 text-muted">
                  Whatever output you pick, the booth ships with the same
                  feature set out of the box. No gating, no surprise upcharges
                  on the basics.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
                {standardFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm md:text-base text-ink"
                  >
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* Glam Upgrade */}
        <section
          id="glam"
          className="scroll-mt-24 py-20 md:py-28 bg-ink text-bg"
        >
          <Container>
            <div className="grid gap-10 md:gap-16 md:grid-cols-12 items-center">
              <Reveal className="md:col-span-6" delay={0.1}>
                <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent mb-4">
                  Premium upgrade
                </div>
                <h2 className="font-heading font-medium leading-[0.95] -tracking-[0.02em] text-[clamp(2rem,5vw,3.5rem)]">
                  The Glam Upgrade.
                </h2>
                <p className="mt-5 text-base md:text-lg text-bg/80 leading-relaxed max-w-lg">
                  A high-resolution camera and a Hollywood-style ring light
                  setup, designed for events where every shot needs to look
                  editorial. Pairs with any output mode — Digital, Print, or
                  both — and produces magazine-quality images with flattering,
                  even lighting.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "High-resolution DSLR camera",
                    "Hollywood-style ring light",
                    "Optional skin-smoothing finish",
                    "Works with any output mode",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm md:text-base text-bg/90"
                    >
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-bg text-ink px-6 py-3 rounded-full font-medium text-sm hover:bg-accent hover:text-ink transition-colors"
                  >
                    Ask about Glam
                  </Link>
                </div>
              </Reveal>

              <Reveal className="md:col-span-6">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                  <Image
                    src="/glam-booth.png"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-bg/90">
                      Upgrade · Glam
                    </span>
                    <span className="font-heading italic text-bg/90">
                      High-res
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Pricing teaser */}
        <section className="py-20 md:py-28">
          <Container>
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-10 md:p-16 text-center">
                <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                  Pricing
                </div>
                <h3 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(1.75rem,4.5vw,3rem)]">
                  Every package, <span className="italic">custom quoted</span>.
                </h3>
                <p className="mt-4 max-w-xl mx-auto text-muted">
                  Every package includes attendant, setup, and breakdown. Tell
                  us about your event and we&rsquo;ll put together a quote in 24
                  hours.
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
