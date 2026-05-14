import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

type AddOn = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  accent: string;
  image: string;
};

const addons: AddOn[] = [
  {
    id: "attendant",
    name: "Attendant",
    tagline: "Your dedicated host, all night.",
    description:
      "A professional attendant keeps the line moving, troubleshoots on the fly, and makes sure every guest walks away with a print in hand. You stay with your people — we handle the booth.",
    bullets: [
      "Greets and guides guests",
      "Manages prints and reprints",
      "Quick troubleshooting on-site",
    ],
    accent: "#e8b4a0",
    image: "/addon-attendant.png",
  },
  {
    id: "custom-prints",
    name: "Custom Prints",
    tagline: "Designed for your event.",
    description:
      "Custom strip or 4x6 print layouts built around your colors, monogram, hashtag, or sponsor branding. A keepsake guests actually want to put on the fridge.",
    bullets: [
      "Strip and 4x6 layouts",
      "Custom typography and color",
      "Unlimited prints all night",
    ],
    accent: "#c97b5a",
    image: "/addon-custom-prints.png",
  },
  {
    id: "custom-vinyl",
    name: "Custom Booth Vinyl",
    tagline: "Wrap the booth in your brand.",
    description:
      "Cover the booth body in a fully custom vinyl wrap so it becomes a centerpiece, not just a station. Great for weddings, corporate activations, and brand events.",
    bullets: [
      "Full-coverage vinyl wrap",
      "Logo, monogram, or pattern",
      "Photo-ready under any lighting",
    ],
    accent: "#9e5a3f",
    image: "/addon-custom-vinyl.png",
  },
  {
    id: "props",
    name: "Hand-Selected Props",
    tagline: "Curated, not chaotic.",
    description:
      "Prop sets curated to match your theme — elegant minimal, vintage, holiday, or anything-goes party. Quality pieces that photograph well, not a plastic bin of leftovers.",
    bullets: [
      "Themed prop sets",
      "Quality over quantity",
      "Swap-ready throughout the night",
    ],
    accent: "#1a1612",
    image: "/addon-props.png",
  },
  {
    id: "extended-coverage",
    name: "Extended Coverage Radius",
    tagline: "Anywhere over 100 miles from SoCal.",
    description:
      "We travel for the right event. Extended coverage includes transport, lodging, and extra setup time for venues over 100 miles outside Southern California — destination weddings welcome.",
    bullets: [
      "Travel and lodging included",
      "Extra setup buffer time",
      "Destination weddings welcome",
    ],
    accent: "#6b5d52",
    image: "/addon-extended-coverage.png",
  },
];

export const metadata = {
  title: "Add-On",
};

export default function AddOnPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Add-on services"
        title={
          <>
            Build the booth
            <br />
            <span className="italic font-light">around your event.</span>
          </>
        }
        lede="Stack any of the add-ons below onto your package. Build the booth around your event — your branding, your props, your moment."
      />

      <section className="pb-12 md:pb-20">
        <Container>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            {addons.map((a, i) => (
              <Reveal key={a.id} delay={(i % 2) * 0.08}>
                <article
                  id={a.id}
                  className="scroll-mt-24 group h-full flex flex-col rounded-3xl border border-border bg-surface overflow-hidden"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7 md:p-8 flex flex-col flex-1">
                    <h2 className="font-heading text-2xl md:text-3xl text-ink leading-tight -tracking-[0.01em]">
                      {a.name}
                    </h2>
                    <p className="mt-2 font-heading italic text-base md:text-lg text-muted">
                      {a.tagline}
                    </p>
                    <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                      {a.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {a.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-ink"
                        >
                          <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
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
                  Bundle it
                </div>
                <h2 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(1.75rem,4.5vw,3rem)]">
                  Stack a few, or stack them all.
                  <br />
                  <span className="italic font-light">
                    We&rsquo;ll quote it together.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-muted">
                  Tell us which add-ons you want and we&rsquo;ll build a custom
                  package priced to your event — no &quot;basic vs. premium&quot;
                  tiers to puzzle over.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
                >
                  Get a custom quote
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
