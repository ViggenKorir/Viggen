import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Viggen Holdings',
  description: 'Investing in digital futures — Viggen Holdings provides governance, capital, and strategic oversight to digital-first businesses.',
};

const VIGGEN = {
  headline: 'Viggen Holdings',
  subheadline: 'Investing in digital futures',
  intro:
    'Viggen Holdings provides governance, capital, and strategic oversight to digital-first businesses focused on engineering excellence and sustainable growth.',
  foundedYear: 2025,
  leadership: 'Led by practitioners with product and engineering backgrounds.',
  values: [
    'Stewardship: We protect and grow the assets entrusted to us.',
    'Partnership: We work closely with founders to scale responsibly.',
    'Excellence: We prioritize product quality and operational rigor.',
  ],
};

const YESINDEED = {
  id: 'yesindeed-001',
  name: 'YesIndeed',
  tagline: 'Web Development & Software Engineering',
  description:
    'YesIndeed is a web development agency and software engineering team that helps startups and enterprises build production-grade web products and APIs.',
  website: '/subsidiaries/yesindeed',
  heroImage: '/images/yesindeed-hero.jpg',
};

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A]">{children}</h2>;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
      {/* Top navigation (simple inline nav - full Nav component lives in the UI package) */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" aria-label="Viggen Holdings home" className="flex items-center">
                {/* Prefer using /logo.svg in public */}
                <Image src="/logo.svg" alt="Viggen Holdings" width={160} height={40} priority />
              </Link>
              <nav className="hidden md:flex gap-6" aria-label="Primary">
                <Link href="/company" className="text-sm font-medium text-[#0F172A] hover:text-[#0B1220]">
                  Company
                </Link>
                <Link href="/subsidiaries" className="text-sm font-medium text-[#0F172A] hover:text-[#0B1220]">
                  Subsidiaries
                </Link>
                <Link href="/insights" className="text-sm font-medium text-[#0F172A] hover:text-[#0B1220]">
                  Insights
                </Link>
                <Link href="/contact" className="text-sm font-medium text-[#0F172A] hover:text-[#0B1220]">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/subsidiaries"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-[#10B981] text-white text-sm font-semibold hover:opacity-95"
                aria-label="Our Subsidiaries"
              >
                Our Subsidiaries
              </Link>

              {/* Mobile menu button placeholder */}
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex items-center justify-center p-2 rounded-md md:hidden text-[#0F172A]"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-medium text-[#10B981]">Holding Company</p>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
                {VIGGEN.headline}
              </h1>
              <p className="mt-3 text-lg text-[#475569] max-w-2xl">{VIGGEN.intro}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/subsidiaries"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#0F172A] text-white font-semibold hover:opacity-95"
                >
                  Our Subsidiaries
                </Link>
                <Link
                  href="/company"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-[#E6EEF2] text-[#0F172A] bg-white font-medium"
                >
                  Learn about Viggen
                </Link>
              </div>

              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <li className="text-sm">
                  <span className="block text-xs text-[#94A3B8]">Founded</span>
                  <span className="block font-medium text-[#0F172A]">{VIGGEN.foundedYear}</span>
                </li>
                <li className="text-sm">
                  <span className="block text-xs text-[#94A3B8]">Leadership</span>
                  <span className="block font-medium text-[#0F172A]">{VIGGEN.leadership}</span>
                </li>
                <li className="text-sm">
                  <span className="block text-xs text-[#94A3B8]">Focus</span>
                  <span className="block font-medium text-[#0F172A]">Governance · Growth · Stewardship</span>
                </li>
              </ul>
            </div>

            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-[#ECFDF5] to-white flex items-center justify-center">
              {/* Prefer using a hero image if available; use a placeholder illustration */}
              <Image
                src={YESINDEED.heroImage}
                alt="YesIndeed hero"
                width={960}
                height={540}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* About summary + Why Viggen */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle>About Viggen</SectionTitle>
              <p className="mt-4 text-[#475569] max-w-3xl">{VIGGEN.intro}</p>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-[#0F172A]">Our values</h3>
                <ul className="mt-3 space-y-2">
                  {VIGGEN.values.map((v) => (
                    <li key={v} className="text-[#374151]">
                      • {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="bg-white p-6 rounded-lg border">
              <h4 className="text-sm font-semibold text-[#0F172A]">Why Viggen</h4>
              <p className="mt-2 text-sm text-[#475569]">
                We provide governance, capital, and operational support to help digital-first companies scale responsibly.
              </p>

              <dl className="mt-4 grid grid-cols-1 gap-3">
                <div>
                  <dt className="text-xs text-[#94A3B8]">Governance</dt>
                  <dd className="text-sm font-medium text-[#0F172A]">Best-in-class oversight and board support.</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#94A3B8]">Growth</dt>
                  <dd className="text-sm font-medium text-[#0F172A]">Capital and go-to-market support to scale traction.</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#94A3B8]">Stewardship</dt>
                  <dd className="text-sm font-medium text-[#0F172A]">Long-term focus on sustainable value creation.</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured Subsidiaries */}
      <section className="mt-6 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionTitle>Featured Subsidiaries</SectionTitle>
          <p className="mt-3 text-[#475569] max-w-2xl">
            A curated selection of our operating companies and agencies.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="rounded-lg border p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-[#ECFDF5] flex items-center justify-center text-[#10B981] font-bold">
                  Y
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A]">{YESINDEED.name}</h3>
                  <p className="text-sm text-[#64748B] mt-1">{YESINDEED.tagline}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-[#475569]">{YESINDEED.description}</p>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={YESINDEED.website}
                  className="text-sm font-semibold text-[#0F172A] underline"
                  aria-label="View YesIndeed"
                >
                  View profile
                </Link>
                <Link
                  href="/contact"
                  className="ml-auto inline-flex items-center px-3 py-2 rounded-md bg-[#10B981] text-white text-sm font-semibold"
                >
                  Request a proposal
                </Link>
              </div>
            </article>

            {/* Placeholder cards for future subsidiaries / case studies */}
            <article className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold text-[#0F172A]">New Venture</h3>
              <p className="mt-2 text-sm text-[#64748B]">Operational focus and strategic support.</p>
              <div className="mt-4">
                <Link href="/subsidiaries" className="text-sm font-medium text-[#0F172A] underline">
                  Explore subsidiaries
                </Link>
              </div>
            </article>

            <article className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold text-[#0F172A]">Portfolio</h3>
              <p className="mt-2 text-sm text-[#64748B]">Case studies and selected outcomes.</p>
              <div className="mt-4">
                <Link href="/insights" className="text-sm font-medium text-[#0F172A] underline">
                  Read insights
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Latest insights teaser */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionTitle>Latest insights</SectionTitle>
          <p className="mt-3 text-[#475569] max-w-2xl">Thoughts, announcements, and press from across the portfolio.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 bg-white border rounded-lg">
              <h4 className="font-semibold text-[#0F172A]">Announcing our first investments</h4>
              <p className="text-sm text-[#64748B] mt-2">An overview of our initial portfolio and strategic priorities.</p>
              <div className="mt-4">
                <Link href="/insights/announcing-our-first-investments" className="text-sm font-medium text-[#0F172A] underline">
                  Read article
                </Link>
              </div>
            </article>

            <article className="p-6 bg-white border rounded-lg">
              <h4 className="font-semibold text-[#0F172A]">How we partner with founders</h4>
              <p className="text-sm text-[#64748B] mt-2">Principles that guide our board engagement and product support.</p>
              <div className="mt-4">
                <Link href="/insights/partnering-with-founders" className="text-sm font-medium text-[#0F172A] underline">
                  Read article
                </Link>
              </div>
            </article>

            <article className="p-6 bg-white border rounded-lg">
              <h4 className="font-semibold text-[#0F172A]">Case study: YesIndeed & Acme</h4>
              <p className="text-sm text-[#64748B] mt-2">A sample case study highlighting product engineering outcomes.</p>
              <div className="mt-4">
                <Link href="/subsidiaries/yesindeed" className="text-sm font-medium text-[#0F172A] underline">
                  View subsidiary
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-6 items-start justify-between">
          <div>
            <Link href="/" aria-label="Viggen Holdings home" className="inline-flex items-center">
              <Image src="/logo.svg" alt="Viggen Holdings" width={140} height={34} priority />
            </Link>
            <p className="mt-3 text-sm text-[#475569]">© {new Date().getFullYear()} Viggen Holdings. All rights reserved.</p>
          </div>

          <nav className="flex gap-6">
            <Link href="/privacy" className="text-sm text-[#0F172A]">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[#0F172A]">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-[#0F172A]">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
