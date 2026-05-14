import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Terms of Service",
};

const sections = [
  {
    heading: "Bookings and deposits",
    body: [
      "A booking is confirmed once we receive a signed agreement and the required deposit. Until both are received, your date is not held and may be offered to other clients.",
      "Deposits are non-refundable but may be applied toward a rescheduled event within twelve (12) months of the original date, subject to availability.",
    ],
  },
  {
    heading: "Payment",
    body: [
      "The remaining balance is due no later than fourteen (14) days before your event date. Add-on services requested after booking are billed separately and due in full before the event.",
      "Accepted payment methods will be listed on your invoice. Late payments may incur a fee or, at our discretion, result in cancellation of the booking.",
    ],
  },
  {
    heading: "Cancellations and rescheduling",
    body: [
      "Cancellations made more than thirty (30) days before the event forfeit only the deposit. Cancellations within thirty (30) days of the event are charged the full booking amount.",
      "We will work with you in good faith on rescheduling due to unforeseen circumstances. Rescheduled dates are subject to our availability and may incur a small administrative fee.",
    ],
  },
  {
    heading: "Setup, space, and power",
    body: [
      "Our booth requires a clear, level area of approximately 10 by 10 feet, with a standard 120V power outlet within twenty-five (25) feet. The client is responsible for ensuring the venue can accommodate these requirements.",
      "We typically arrive 60–90 minutes before your scheduled start time for setup. Idle time during the event (when the booth is intentionally closed) does not count toward your rental hours.",
    ],
  },
  {
    heading: "Use of photos",
    body: [
      "All photos captured by our booth are provided to you and your guests for personal, non-commercial use. We retain the right to use a small selection of photos in our portfolio and on our social channels unless you request otherwise in writing before the event.",
    ],
  },
  {
    heading: "Damage and liability",
    body: [
      "The client agrees to be responsible for any damage to our equipment caused by guests, venue conditions, or third parties during the event. Our total liability under these terms is limited to the amount paid for the booking.",
    ],
  },
  {
    heading: "Force majeure",
    body: [
      "Neither party will be liable for failure to perform due to events beyond reasonable control, including natural disasters, government action, power failures, or public health emergencies. In such cases we will work with you to reschedule or, where appropriate, refund.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about these Terms? Email us at ${siteConfig.email} or call ${siteConfig.phone}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Hero
        size="sm"
        eyebrow="Legal"
        title="Terms of Service"
        lede="The basics of how a booking works, what to expect from us, and what we expect in return."
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
              does not constitute legal advice. Final terms should be reviewed
              by a qualified attorney before publication.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
