import Link from "next/link";
import Container from "./Container";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-2/70 border-y border-border">
      <Container>
        <Reveal>
          <div className="grid gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] font-medium text-accent-dark mb-4">
                Have a question?
              </div>
              <h2 className="font-heading font-medium text-ink leading-[0.95] -tracking-[0.02em] text-[clamp(2rem,5.5vw,3.75rem)]">
                Lorem ipsum dolor sit amet,
                <br className="hidden md:block" />
                <span className="italic">consectetur</span> adipiscing.
              </h2>
              <p className="mt-5 max-w-xl text-base md:text-lg text-muted leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Send
                us your event date, location, and what you have in mind.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-ink text-bg px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
              >
                Start an inquiry
              </Link>
              <a
                href="tel:6610000000"
                className="inline-flex items-center justify-center border border-ink/20 px-6 py-3 rounded-full font-medium text-sm text-ink hover:border-ink transition-colors"
              >
                Or call (661) 000-0000
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
