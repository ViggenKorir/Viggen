import React from 'react';

export const metadata = {
  title: 'Company — Viggen Holdings',
  description: 'About Viggen Holdings — mission, governance, structure, team, and investor contact.',
};

type Leader = {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
};

const leaders: Leader[] = [
  {
    name: 'Amina Korir',
    role: 'Founder & CEO',
    bio: 'Amina leads strategy and portfolio operations with a background in product engineering and startup scaling.',
    linkedin: '#',
  },
  {
    name: 'Martin S. Reed',
    role: 'Chair, Board of Directors',
    bio: 'Martin brings 20+ years of experience in corporate governance and finance.',
    linkedin: '#',
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Viggen Holdings</h1>
          <p className="mt-3 text-lg text-[#334155] max-w-3xl">
            Viggen Holdings provides governance, capital, and strategic oversight to digital-first businesses focused on engineering excellence and sustainable growth.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          <article className="md:col-span-2 space-y-6">
            <section aria-labelledby="mission-heading" className="bg-white border rounded-lg p-6 shadow-sm">
              <h2 id="mission-heading" className="text-xl font-semibold">Mission</h2>
              <p className="mt-2 text-[#475569]">
                We invest in and steward digital companies that prioritize product quality, strong engineering practices, and long-term sustainable growth. We partner with founders and leadership teams to provide operational support, capital, and governance to help companies reach their next phase.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="inline-block mr-3 mt-1 w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
                  <span className="text-[#475569]">Stewardship: We protect and grow the assets entrusted to us.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-3 mt-1 w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
                  <span className="text-[#475569]">Partnership: We work closely with founders to scale responsibly.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-3 mt-1 w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
                  <span className="text-[#475569]">Excellence: We prioritize product quality and operational rigor.</span>
                </li>
              </ul>
            </section>

            <section aria-labelledby="governance-heading" className="bg-white border rounded-lg p-6 shadow-sm">
              <h2 id="governance-heading" className="text-xl font-semibold">Governance & Structure</h2>
              <p className="mt-2 text-[#475569]">
                Viggen Holdings operates as a lightweight holding company that provides oversight, capital allocation, and shared services to subsidiaries. Our governance model emphasizes board-level support, transparent reporting, and active partnership with executive teams.
              </p>

              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="p-3 border rounded">
                  <dt className="text-sm font-medium text-[#0F172A]">Board Oversight</dt>
                  <dd className="mt-1 text-sm text-[#475569]">Regular board meetings and strategic reviews to align on long-term value creation.</dd>
                </div>
                <div className="p-3 border rounded">
                  <dt className="text-sm font-medium text-[#0F172A]">Shared Services</dt>
                  <dd className="mt-1 text-sm text-[#475569]">Finance, legal, and hiring support to help subsidiaries scale efficiently.</dd>
                </div>
                <div className="p-3 border rounded">
                  <dt className="text-sm font-medium text-[#0F172A]">Capital Allocation</dt>
                  <dd className="mt-1 text-sm text-[#475569]">Flexible capital deployment for growth initiatives and strategic investments.</dd>
                </div>
                <div className="p-3 border rounded">
                  <dt className="text-sm font-medium text-[#0F172A]">Operational Partnership</dt>
                  <dd className="mt-1 text-sm text-[#475569]">Hands-on collaboration with subsidiary leadership on product and engineering practices.</dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="insights-heading" className="bg-white border rounded-lg p-6 shadow-sm">
              <h2 id="insights-heading" className="text-xl font-semibold">Investor & Partner Relations</h2>
              <p className="mt-2 text-[#475569]">
                For investor inquiries, partnership discussions, or strategic introductions, please reach out to our investor relations team. We are open to co-investment opportunities and long-term partnerships that align with our stewardship principles.
              </p>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-[#0F172A] text-white px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981]"
                  aria-label="Contact investor relations"
                >
                  Contact Investor Relations
                </a>

                <a
                  href="mailto:invest@viggen.example"
                  className="ml-4 inline-block text-sm text-[#0F172A] underline"
                >
                  Email: invest@viggen.example
                </a>
              </div>
            </section>
          </article>

          <aside className="space-y-6">
            <section aria-labelledby="founded-heading" className="bg-white border rounded-lg p-6 shadow-sm">
              <h3 id="founded-heading" className="text-sm font-semibold text-[#0F172A]">Founded</h3>
              <p className="mt-2 text-lg font-bold">2025</p>
            </section>

            <section aria-labelledby="leadership-heading" className="bg-white border rounded-lg p-6 shadow-sm">
              <h3 id="leadership-heading" className="text-sm font-semibold text-[#0F172A]">Leadership</h3>

              <ul className="mt-3 space-y-4">
                {leaders.map((l) => (
                  <li key={l.name} className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#0F172A]">{l.name}</p>
                      <p className="text-sm text-[#64748B]">{l.role}</p>
                      {l.bio && <p className="mt-2 text-sm text-[#475569]">{l.bio}</p>}
                      <div className="mt-2">
                        {l.linkedin && (
                          <a
                            href={l.linkedin}
                            className="text-sm text-[#0F172A] underline"
                            aria-label={`LinkedIn profile for ${l.name}`}
                          >
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="structure-heading" className="bg-white border rounded-lg p-6 shadow-sm">
              <h3 id="structure-heading" className="text-sm font-semibold text-[#0F172A]">Portfolio Snapshot</h3>
              <p className="mt-2 text-sm text-[#475569]">Featured subsidiary: <strong>YesIndeed</strong> — Web Development & Software Engineering.</p>
              <a href="/subsidiaries/yesindeed" className="mt-3 inline-block text-sm text-[#0F172A] underline">View subsidiary profile</a>
            </section>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">How we work with companies</h2>
          <p className="mt-3 text-[#475569] max-w-3xl">
            We prefer to act as active, supportive partners: providing governance, access to shared engineering practices, and focused capital to accelerate product-market fit and sustainable growth.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="bg-white border rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold text-[#0F172A]">Governance</h4>
              <p className="mt-2 text-sm text-[#475569]">Board support and transparent reporting to align on long-term outcomes.</p>
            </div>
            <div className="bg-white border rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold text-[#0F172A]">Growth</h4>
              <p className="mt-2 text-sm text-[#475569]">Operational and go-to-market support tailored to each business.</p>
            </div>
            <div className="bg-white border rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold text-[#0F172A]">Stewardship</h4>
              <p className="mt-2 text-sm text-[#475569]">Capital deployment with an emphasis on long-term value creation.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-16 bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-[#475569]">For investor or partnership inquiries, use the contact form or email us directly.</p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#10B981] text-white px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#065f46]"
            >
              Contact Us
            </a>
            <a
              href="mailto:invest@viggen.example"
              className="mt-3 sm:mt-0 inline-block text-sm text-[#0F172A] underline"
            >
              Email: invest@viggen.example
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
