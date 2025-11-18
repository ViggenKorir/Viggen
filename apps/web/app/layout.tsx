import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import "./globals.css";

const Navbar = dynamic(
  () => import("../ui/src/components/Navbar"),
  { ssr: false }
);
const Footer = dynamic(
  () => import("../ui/src/components/Footer"),
  { ssr: false }
);

export const metadata = {
  title: "Viggen Holdings",
  description:
    "Investing in digital futures \u2014 Viggen Holdings provides governance, capital, and strategic oversight to digital-first businesses.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const navLinks = [
    { label: "Company", href: "/company" },
    { label: "Subsidiaries", href: "/subsidiaries" },
    { label: "Services", href: "/subsidiaries/yesindeed" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  const cta = { label: "Our Subsidiaries", href: "/subsidiaries" };

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
      </Head>
      <body className="min-h-screen bg-bg text-brand antialiased">
        {/* Skip link for keyboard users */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white px-3 py-2 rounded shadow"
        >
          Skip to content
        </a>

        <header>
          <Navbar logoUrl="/logo.svg" links={navLinks} cta={cta} />
        </header>

        <main id="content" className="flex-1">
          {children}
        </main>

        <Footer
          links={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
          copyrightText={`© ${new Date().getFullYear()} Viggen Holdings`}
          socialIcons={[]}
        />

        {/* Basic global scripts or live region for announcements could go here */}
      </body>
    </html>
  );
}
