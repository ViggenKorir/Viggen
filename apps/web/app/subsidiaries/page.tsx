import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Subsidiaries — Viggen Holdings',
  description: 'Explore the companies and teams under Viggen Holdings.'
};

type Subsidiary = {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  website?: string;
  heroImage?: string;
  contactEmail?: string;
};

/**
 * Example seed data for the subsidiaries index.
 * In a real app this could come from a CMS, database, or local JSON file.
 */
const SUBSIDIARIES: Subsidiary[] = [
  {
    id: 'yesindeed-001',
    name: 'YesIndeed',
    tagline: 'Web Development & Software Engineering',
    description:
      'YesIndeed is a web development agency and software engineering team that helps startups and enterprises build production-grade web products and APIs.',
    website: '/subsidiaries/yesindeed',
    heroImage: '/images/yesindeed-hero.jpg',
    contactEmail: 'hello@yesindeed.example'
  }
];

export default function SubsidiariesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
          Our Subsidiaries
        </h1>
        <p className="mt-3 text-base text-[#475569] max-w-2xl">
          Viggen Holdings partners with focused, digital-first companies that
          deliver engineering excellence and sustainable growth. Below are our
          featured subsidiaries — click through to learn more.
        </p>
      </header>

      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-[#64748B]">
          Showing {SUBSIDIARIES.length} subsidiary
          {SUBSIDIARIES.length !== 1 ? 'ies' : ''}
        </p>
        <div className="flex items-center space-x-2">
          <label htmlFor="filter" className="sr-only">
            Filter subsidiaries
          </label>
          <input
            id="filter"
            type="search"
            placeholder="Filter by name or service"
            className="rounded-md border border-[#E6EEF6] px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            aria-label="Filter subsidiaries"
            disabled
            title="Filter UI placeholder (not implemented)"
          />
        </div>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SUBSIDIARIES.map((s) => (
          <li
            key={s.id}
            className="bg-white border border-[#E6EEF6] rounded-lg shadow-sm overflow-hidden"
          >
            <article className="h-full flex flex-col">
              {s.heroImage ? (
                // Use a plain img so the file works without next/image setup
                // (Next's <Image> can be added later)
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={s.heroImage}
                  alt={`${s.name} hero image`}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#CBD5E1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6M3 7l9-6 9 6"
                    />
                  </svg>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#0F172A]">
                    {s.name}
                  </h2>
                  {s.tagline && (
                    <p className="mt-1 text-sm text-[#475569]">{s.tagline}</p>
                  )}
                  {s.description && (
                    <p className="mt-3 text-sm text-[#64748B]">
                      {s.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={s.website ?? '/subsidiaries'}
                    className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-[#0F172A] text-white hover:opacity-95"
                    aria-label={`View ${s.name}`}
                  >
                    View profile
                  </Link>

                  <div className="text-right text-xs text-[#94A3B8]">
                    {s.contactEmail && (
                      <a
                        href={`mailto:${s.contactEmail}`}
                        className="hover:underline"
                      >
                        Contact
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <footer className="mt-12">
        <p className="text-sm text-[#64748B]">
          Want to suggest a company for Viggen to partner with?{' '}
          <Link href="/contact" className="text-[#10B981] font-medium">
            Contact us
          </Link>
          .
        </p>
      </footer>
    </section>
  );
}
