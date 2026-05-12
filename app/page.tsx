import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BoothTile from "@/components/BoothTile";
import FeatureCard from "@/components/FeatureCard";
import Marquee from "@/components/Marquee";
import EventGallery from "@/components/EventGallery";
import SectionHeading from "@/components/SectionHeading";

const eventTypes = [
  "Weddings",
  "Birthdays",
  "Corporate",
  "Graduations",
  "Quinceañeras",
  "Showers",
  "Anniversaries",
  "Holidays",
];

const features = [
  {
    index: "01",
    title: "Modern open-air booth",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sleek, low-profile setup that fits any venue.",
  },
  {
    index: "02",
    title: "Attendant on site",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore. A real human keeps the line moving and the prints flowing.",
  },
  {
    index: "03",
    title: "Prints + digital, instantly",
    body: "Ut enim ad minim veniam, quis nostrud. Guests walk away with a print in 8 seconds and a digital copy on their phone.",
  },
];

const booths = [
  {
    eyebrow: "Signature",
    name: "Glam Booth",
    description:
      "Lorem ipsum dolor sit amet. Hollywood-style soft lighting with skin-smoothing finish.",
    href: "/services#glam",
    accent: "#e8b4a0",
  },
  {
    eyebrow: "Classic",
    name: "Print Booth",
    description:
      "Consectetur adipiscing elit. Crisp 4x6 or strip prints in 8 seconds, every time.",
    href: "/services#print",
    accent: "#c97b5a",
  },
  {
    eyebrow: "Compact",
    name: "Digital Booth",
    description:
      "Sed do eiusmod tempor. Lightweight, social-ready, GIFs and Boomerangs included.",
    href: "/services#digital",
    accent: "#9e5a3f",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-5">
                Santa Clarita Valley · Est. Lorem
              </div>
              <h1 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.025em] text-[clamp(2.75rem,8vw,5.75rem)]">
                Lorem ipsum,
                <br />
                <span className="italic font-light">dolor</span> sit amet.
              </h1>
              <p className="mt-7 max-w-xl text-base md:text-lg text-muted leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
                >
                  Check availability
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-ink/20 px-6 py-3 rounded-full font-medium text-sm text-ink hover:border-ink transition-colors"
                >
                  See our booths
                </Link>
              </div>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.1}>
              <div className="relative">
                <div
                  className="aspect-[4/5] rounded-3xl border border-border overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(160deg, #e8b4a0 0%, #c97b5a 55%, #9e5a3f 100%)",
                  }}
                />
                <div
                  className="absolute -bottom-8 -left-6 md:-left-12 w-32 md:w-40 aspect-square rounded-2xl border border-border overflow-hidden shadow-[0_8px_30px_-12px_rgba(26,22,18,0.25)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #faf6f1 0%, #e5ddd2 100%)",
                  }}
                />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 rotate-6 bg-bg/95 backdrop-blur-sm rounded-xl border border-border px-4 py-2 text-xs">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    Print in
                  </div>
                  <div className="font-heading text-lg text-ink leading-none mt-0.5">
                    8 sec
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Event-type marquee */}
      <section className="border-y border-border bg-surface-2/40 py-6 md:py-8">
        <Marquee duration={45}>
          {eventTypes.map((type) => (
            <span
              key={type}
              className="flex items-center font-heading italic text-2xl md:text-4xl text-ink/80 px-6 md:px-10"
            >
              {type}
              <span className="ml-6 md:ml-10 inline-block w-2 h-2 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* Why choose us */}
      <section className="py-20 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why us"
              title={
                <>
                  Built for the moments
                  <br />
                  <span className="italic font-light">people remember.</span>
                </>
              }
              lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.index} delay={i * 0.08}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Booth lineup */}
      <section className="py-20 md:py-32 bg-surface-2/50 border-y border-border">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <SectionHeading
                eyebrow="The lineup"
                title={
                  <>
                    Three booths,
                    <br />
                    <span className="italic font-light">one party.</span>
                  </>
                }
              />
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-ink hover:text-accent transition-colors self-start md:self-end"
              >
                Compare all booths →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 md:gap-6 md:grid-cols-3">
            {booths.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.08}>
                <BoothTile {...b} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent events */}
      <section className="py-20 md:py-32">
        <Container className="mb-10 md:mb-14">
          <Reveal>
            <SectionHeading
              eyebrow="Recent events"
              title={
                <>
                  Real parties,
                  <br />
                  <span className="italic font-light">real strips.</span>
                </>
              }
              lede="Lorem ipsum dolor sit amet. A peek at the rooms, the lighting, and the people making memories."
            />
          </Reveal>
        </Container>
        <EventGallery />
      </section>
    </>
  );
}
