import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "Most clients book 2–6 months out, but we take inquiries year-round. Peak weekends (spring and fall) fill fastest — the sooner we hear from you, the better the chance of locking in your date.",
  },
  {
    q: "What's included in a standard package?",
    a: "Every booking includes the booth, an on-site attendant, setup and breakdown, unlimited sessions, and digital copies for guests. Prints, custom templates, props, and backdrops are add-ons you can mix and match.",
  },
  {
    q: "Do you travel outside Southern California?",
    a: "Yes — we cover all of Southern California by default, and travel further with our Extended Coverage add-on for venues 100+ miles out. Destination weddings welcome; just tell us where and we'll quote it.",
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
        lede="Tell us about the date, the venue, and the vibe. We'll get back to you within 24 hours with a custom quote."
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
                    value={siteConfig.phone}
                    href={siteConfig.phoneHref}
                  />
                  <InfoRow
                    label="Email"
                    value={siteConfig.email}
                    href={siteConfig.emailHref}
                  />
                  <InfoRow label="Service area" value={siteConfig.serviceArea} />
                  <InfoRow label="Hours" value={siteConfig.hours} />
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted mb-3">
                    Follow
                  </div>
                  <p className="text-sm text-muted">
                    Follow us on Instagram &amp; Facebook{" "}
                    <span className="text-ink">{siteConfig.socialHandle}</span>
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href="https://instagram.com/scvphotoboothrentals"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram @scvphotoboothrentals"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="0.9"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/scvphotoboothrentals"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook @scvphotoboothrentals"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z" />
                      </svg>
                    </a>
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
