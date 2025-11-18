"use client";
import React from "react";

type FooterLink = {
  label: string;
  href: string;
};

type SocialIcon = {
  label: string;
  href: string;
  // Optional inline SVG or React node for the icon
  icon?: React.ReactNode;
};

export interface FooterProps {
  links?: FooterLink[];
  copyrightText?: string;
  socialIcons?: SocialIcon[];
}

/**
 * Footer
 *
 * - Semantic markup for accessibility
 * - Responsive layout
 * - Simple defaults so it can be used without props
 */
export function Footer({
  links = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  copyrightText = `© ${new Date().getFullYear()} Viggen Holdings`,
  socialIcons = [],
}: FooterProps) {
  return (
    <footer className="bg-white border-t" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand / Logo */}
          <div className="flex items-start gap-3">
            <a
              href="/"
              aria-label="Viggen Holdings homepage"
              className="inline-flex items-center"
            >
              <img
                src="/logo.svg"
                alt="Viggen Holdings"
                className="h-10 w-auto"
                style={{ maxWidth: 160 }}
              />
            </a>
            <p className="max-w-sm text-sm text-[#94A3B8]">
              Investing in digital futures — governance, capital, and strategic
              oversight for digital-first businesses.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex-1">
            <ul className="flex flex-wrap gap-4 md:gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#0F172A] hover:text-[#0F172A] hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              {socialIcons.length > 0 ? (
                socialIcons.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E6EEF2]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{s.label}</span>
                    {s.icon ?? (
                      // default placeholder icon (simple external link icon)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    )}
                  </a>
                ))
              ) : (
                // If no social icons provided, offer a small, accessible contact hint
                <div className="text-sm text-[#94A3B8]">
                  Follow us on social for updates
                </div>
              )}
            </div>

            {/* Small print / copyright */}
            <div className="text-sm text-[#94A3B8]">{copyrightText}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
