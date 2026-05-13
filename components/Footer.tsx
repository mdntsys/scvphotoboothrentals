import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/siteConfig";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Booth", href: "/booth" },
  { label: "Backdrops", href: "/backdrops" },
  { label: "Add-On", href: "/add-on" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2/60">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-5">
              <Image
                src="/logo-icon.png"
                alt=""
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <span className="font-heading text-lg text-ink">
                SCV Photo Booth Rentals
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm text-muted leading-relaxed">
              Modern, attendant-staffed photo booth experiences for weddings,
              birthdays, and events across Southern California.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                {siteConfig.serviceArea}
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-muted">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-muted">
              Get in touch
            </div>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm text-ink hover:text-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="text-sm text-ink hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-ink hover:border-accent hover:text-accent transition-colors text-xs"
                  aria-label={s.label}
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/70 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} SCV Photo Booth Rentals. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <a href="#" className="hover:text-ink transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
