"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Booth", href: "/booth" },
  { label: "Backdrops", href: "/backdrops" },
  { label: "Add-On", href: "/add-on" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 group"
          aria-label="SCV Photo Booth Rentals home"
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={36}
            height={36}
            priority
            className="w-9 h-9 object-contain"
          />
          <span className="hidden sm:block font-heading text-base text-ink tracking-tight">
            SCV Photo Booth Rentals
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="bg-ink text-bg text-sm font-medium px-4 py-2 rounded-full transition-all hover:bg-accent active:translate-y-px"
          >
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] bg-current transition-all ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-bg border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 text-xl font-heading border-b border-border/60 ${
                      active ? "text-accent" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-6 bg-ink text-bg text-sm font-medium px-5 py-3 rounded-full text-center"
              >
                Book Now
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 text-sm font-medium text-muted text-center"
              >
                {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
