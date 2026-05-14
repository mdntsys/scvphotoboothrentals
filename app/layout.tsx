import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SCV Photo Booth Rentals | Serving Southern California",
    template: "%s | SCV Photo Booth Rentals",
  },
  description:
    "SCV Photo Booth Rentals — modern open-air photo booth rentals for weddings, birthdays, corporate events, and more across Southern California.",
  keywords: [
    "SCV Photo Booth Rentals",
    "photo booth rental Southern California",
    "wedding photo booth",
    "open-air photo booth",
    "event photo booth rental",
  ],
  openGraph: {
    siteName: "SCV Photo Booth Rentals",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-bg text-ink"
        suppressHydrationWarning
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
