import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    heading: "Information we collect",
    body: [
      "When you submit an inquiry through our contact form, we collect the information you provide — including your name, email address, phone number, event date, venue, and any details you share about your event.",
      "We also collect basic, anonymous analytics about how visitors use this site (pages viewed, approximate location, device type) so we can improve the experience.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the information you provide to respond to your inquiry, prepare a custom quote, and coordinate the details of your event if you decide to book with us.",
      "We do not sell, rent, or trade your personal information to third parties. We may share limited information with service providers (for example, our email and payment processors) strictly to operate our business.",
    ],
  },
  {
    heading: "Photos taken at your event",
    body: [
      "Photos captured by our booth at your event belong to you and your guests. We retain digital copies for a limited time so we can re-share files if needed, and we may use a small selection in our portfolio or on social media. If you prefer that we not use any photos from your event publicly, just let us know in writing before the event.",
    ],
  },
  {
    heading: "Cookies and tracking",
    body: [
      "This site uses a small number of cookies and similar technologies to remember preferences and measure traffic. You can disable cookies in your browser settings — most of the site will continue to function normally.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can request a copy of the personal information we hold about you, ask us to correct or delete it, or opt out of any future marketing communications at any time. To make a request, email us at the address below.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this Privacy Policy? Email us at ${siteConfig.email} or call ${siteConfig.phone}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Legal"
        title="Privacy Policy"
        lede="How we collect, use, and protect the information you share with us."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted">
              Last updated: May 14, 2026
            </p>
          </Reveal>

          <div className="mt-10 md:mt-12 max-w-2xl space-y-12">
            {sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="font-heading text-2xl md:text-3xl text-ink leading-tight -tracking-[0.01em]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base text-muted leading-relaxed">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-16 max-w-2xl text-sm italic text-muted">
              This page is provided for general informational purposes only and
              does not constitute legal advice. Final policy text should be
              reviewed by a qualified attorney before publication.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
