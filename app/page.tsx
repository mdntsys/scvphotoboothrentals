import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BoothTile from "@/components/BoothTile";
import FeatureCard from "@/components/FeatureCard";
import Marquee from "@/components/Marquee";
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

const heroTags = [
  "Unlimited Photos",
  "Instant Prints",
  "Digital Sharing",
  "Fun Props & Backdrops",
];

const features = [
  {
    index: "01",
    title: "Modern open-air booth",
    body: "A sleek, low-profile setup that fits any venue — indoors or out — without crowding your space or your photos.",
  },
  {
    index: "02",
    title: "Attendant on site",
    body: "A real human keeps the line moving, the props refreshed, and the prints flowing all night long.",
  },
  {
    index: "03",
    title: "Prints + digital, instantly",
    body: "Guests walk away with a print in 8 seconds and a digital copy on their phone before the next group steps up.",
  },
];

const booths = [
  {
    eyebrow: "Signature",
    name: "Glam Booth",
    description:
      "Hollywood-style soft lighting with a skin-smoothing finish that makes every guest feel red-carpet ready.",
    href: "/booth#glam",
    accent: "#e8b4a0",
  },
  {
    eyebrow: "Classic",
    name: "Print Booth",
    description:
      "Crisp 4x6 or strip prints in 8 seconds, every time — the classic experience guests still ask for by name.",
    href: "/booth#print",
    accent: "#c97b5a",
  },
  {
    eyebrow: "Compact",
    name: "Digital Booth",
    description:
      "Lightweight, social-ready, with GIFs and Boomerangs included — perfect for venues where space is tight.",
    href: "/booth#digital",
    accent: "#9e5a3f",
  },
];

const experiences = [
  {
    title: "Attendant",
    body: "Your dedicated host keeps the line moving and the energy up, so you can stay with your guests.",
    accent: "#e8b4a0",
  },
  {
    title: "Custom Prints",
    body: "Branded strip or 4x6 layouts designed around your colors, monogram, or hashtag.",
    accent: "#c97b5a",
  },
  {
    title: "Custom Booth Vinyl",
    body: "Wrap the booth in your colors, logo, or wedding monogram for a fully on-brand centerpiece.",
    accent: "#9e5a3f",
  },
  {
    title: "Hand-Selected Props",
    body: "Curated prop sets to match your theme — from elegant minimal to all-out themed parties.",
    accent: "#1a1612",
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
                Southern California · Photo Booth Rentals
              </div>
              <h1 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.025em] text-[clamp(2.75rem,8vw,5.75rem)]">
                Your event,
                <br />
                <span className="italic font-light">Our Priority</span>
              </h1>
              <p className="mt-7 max-w-xl text-base md:text-lg text-muted leading-relaxed">
                Capture your event with memories that last a lifetime &mdash;
                our photo booth adds a perfect touch to any celebration.
              </p>

              {/* Tag pills */}
              <ul className="mt-7 flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs md:text-sm text-ink"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-ink text-bg px-7 py-3.5 rounded-full font-medium text-sm hover:bg-accent transition-colors"
                >
                  Book Now
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
              lede="Modern open-air booths, real attendants, and prints in your hand before the next group steps up."
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
                href="/booth"
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

      {/* Customizable Experiences */}
      <section className="py-20 md:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <SectionHeading
                eyebrow="Customizable experiences"
                title={
                  <>
                    Make it
                    <br />
                    <span className="italic font-light">unmistakably yours.</span>
                  </>
                }
                lede="Mix and match add-ons to tailor the booth to your event — your colors, your props, your moment."
              />
              <Link
                href="/add-on"
                className="inline-flex items-center text-sm font-medium text-ink hover:text-accent transition-colors self-start md:self-end"
              >
                See all add-ons →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 md:gap-6 grid-cols-2 lg:grid-cols-4">
            {experiences.map((x, i) => (
              <Reveal key={x.title} delay={(i % 4) * 0.06}>
                <Link
                  href="/add-on"
                  className="group block rounded-2xl border border-border bg-surface overflow-hidden hover:border-ink transition-colors h-full"
                >
                  <div
                    className="aspect-[4/3] relative"
                    style={{
                      background: `linear-gradient(160deg, ${x.accent} 0%, #faf6f1 100%)`,
                    }}
                  >
                    <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-bg/85 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
                      Add-On
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-heading text-xl md:text-2xl text-ink leading-tight -tracking-[0.01em]">
                      {x.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {x.body}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      Learn more
                      <span className="ml-1 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
