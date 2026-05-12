import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Ut enim ad minim veniam quis nostrud?",
    a: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    q: "Duis aute irure dolor in reprehenderit?",
    a: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
  },
];

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Get in touch"
        title={
          <>
            Let&rsquo;s plan
            <br />
            <span className="italic font-light">your event.</span>
          </>
        }
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tell us about the date, the venue, and the vibe."
      />

      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <ContactForm />
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.1}>
              <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.25em] text-muted">
                  Reach us directly
                </div>
                <div className="mt-6 space-y-5">
                  <InfoRow
                    label="Phone"
                    value="(661) 000-0000"
                    href="tel:6610000000"
                  />
                  <InfoRow
                    label="Email"
                    value="hello@example.com"
                    href="mailto:hello@example.com"
                  />
                  <InfoRow label="Service area" value="Santa Clarita Valley + surrounding" />
                  <InfoRow label="Hours" value="Mon–Sun, by appointment" />
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted mb-3">
                    Follow
                  </div>
                  <div className="flex gap-2">
                    {["Instagram", "TikTok", "Facebook"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors text-xs"
                        aria-label={s}
                      >
                        {s.slice(0, 2)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* FAQ teaser */}
          <Reveal className="mt-20 md:mt-28">
            <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
              Common questions
            </div>
            <h2 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(1.75rem,4.5vw,3rem)] max-w-2xl">
              Before you ask &mdash;
              <br />
              <span className="italic font-light">we probably have an answer.</span>
            </h2>

            <div className="mt-10 divide-y divide-border border-y border-border">
              {faqs.map((f, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-heading text-lg md:text-xl text-ink pr-6">
                      {f.q}
                    </span>
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-border text-ink transition-transform group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-muted leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-muted">
        {label}
      </div>
      {href ? (
        <a
          href={href}
          className="font-heading text-xl md:text-2xl text-ink hover:text-accent transition-colors"
        >
          {value}
        </a>
      ) : (
        <div className="font-heading text-xl md:text-2xl text-ink">{value}</div>
      )}
    </div>
  );
}
