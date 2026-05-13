import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BoothTile from "@/components/BoothTile";
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

const booths = [
  {
    eyebrow: "Output",
    name: "Digital",
    description:
      "Send every shot straight to guests' phones — instant text or AirDrop delivery, no waiting on prints, no extra trip back to the booth.",
    href: "/booth#digital",
    accent: "#9e5a3f",
  },
  {
    eyebrow: "Output",
    name: "Print",
    description:
      "Crisp 4x6 or strip prints in 8 seconds, every time. Branded templates, unlimited reprints, a keepsake guests actually keep.",
    href: "/booth#print",
    accent: "#c97b5a",
  },
  {
    eyebrow: "Upgrade",
    name: "Glam",
    description:
      "A high-resolution camera and Hollywood-style ring light, layered on any output mode for editorial-quality, magazine-worthy shots.",
    href: "/booth#glam",
    accent: "#e8b4a0",
    image: "/glam-booth.png",
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
      <section className="pt-24 pb-16 md:pt-28 md:pb-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-center">
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
                <Image
                  src="/hero.png"
                  alt=""
                  width={848}
                  height={1264}
                  priority
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="w-full h-auto rounded-3xl border border-border object-cover"
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
              className="flex items-center font-heading italic text-2xl md:text-4xl leading-[1.3] text-ink/80 px-6 md:px-10"
            >
              {type}
              <span className="ml-6 md:ml-10 inline-block w-2 h-2 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* Booth lineup */}
      <section className="py-20 md:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <SectionHeading
                eyebrow="The lineup"
                title={
                  <>
                    One booth.
                    <br />
                    <span className="italic font-light">
                      Three ways to capture the moment.
                    </span>
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
