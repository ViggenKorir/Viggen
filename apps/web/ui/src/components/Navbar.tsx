"use client";
import React, { useEffect, useRef, useState } from "react";

type LinkItem = {
  label: string;
  href: string;
};

type Cta = {
  label: string;
  href: string;
};

export interface NavbarProps {
  logoUrl: string;
  links: LinkItem[];
  cta?: Cta;
  /**
   * Optional label for the logo image alt text. Defaults to "Logo".
   */
  logoAlt?: string;
}

/**
 * Responsive, accessible Navbar component.
 *
 * Props:
 * - `logoUrl`: URL to the SVG/PNG wordmark (can be public path like /logo.svg)
 * - `links`: array of { label, href }
 * - `cta`: optional call-to-action { label, href }
 *
 * Behavior:
 * - Desktop: horizontal nav
 * - Mobile: full-screen slide-in menu (drawer) with focus management
 * - Keyboard accessible: menu toggled via button, closes on Escape
 *
 * Notes:
 * - This component intentionally uses plain anchors (`<a>`) so it can be framework-agnostic.
 *   If you use Next.js `Link`, you can wrap this component or replace anchors when integrating.
 */
export const Navbar: React.FC<NavbarProps> = ({
  logoUrl,
  links,
  cta,
  logoAlt = "Logo",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        // Return focus to menu button
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      // Move focus to the first link in the mobile menu for accessibility
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 0);
      // Prevent body scroll when menu is open
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [menuOpen]);

  // Simple click outside to close for mobile menu
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!menuOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center" aria-label="Home">
              <img src={logoUrl} alt={logoAlt} className="h-8 w-auto" />
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex md:items-center md:space-x-6"
              aria-label="Primary"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-[#0F172A] hover:text-[#0B1220]"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            {/* CTA for desktop */}
            {cta && (
              <a
                href={cta.href}
                className="hidden md:inline-flex ml-4 items-center rounded bg-[#10B981] px-4 py-2 text-white text-sm font-semibold shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981]"
              >
                {cta.label}
              </a>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                ref={menuButtonRef}
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((s) => !s)}
                className="p-2 rounded-md inline-flex items-center justify-center text-[#0F172A] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981]"
              >
                <span className="sr-only">
                  {menuOpen ? "Close main menu" : "Open main menu"}
                </span>
                {/* Icon: hamburger / close */}
                {menuOpen ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 4L16 16M16 4L4 16"
                      stroke="#0F172A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 6h14M3 10h14M3 14h14"
                      stroke="#0F172A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
        >
          <div className="absolute right-0 top-0 w-11/12 max-w-sm h-full bg-white shadow-lg p-6 overflow-auto">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center" aria-label="Home">
                <img src={logoUrl} alt={logoAlt} className="h-8 w-auto" />
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                aria-label="Close menu"
                className="p-2 rounded-md inline-flex items-center justify-center text-[#0F172A] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 4L16 16M16 4L4 16"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-6 space-y-4" aria-label="Mobile primary">
              {links.map((l, idx) => (
                <a
                  key={l.href}
                  href={l.href}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  className="block rounded px-2 py-3 text-base font-medium text-[#0F172A] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 border-t pt-4">
              {cta && (
                <a
                  href={cta.href}
                  className="block w-full text-center rounded bg-[#10B981] px-4 py-2 text-white text-sm font-semibold shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981]"
                >
                  {cta.label}
                </a>
              )}

              <div className="mt-4 text-sm text-[#6B7280]">
                <p>© {new Date().getFullYear()} Viggen Holdings</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
