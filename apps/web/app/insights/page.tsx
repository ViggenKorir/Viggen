import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Insights - Viggen Holdings',
  description: 'News, articles, and perspectives from Viggen Holdings'
};

type Insight = {
  id: string;
  title: string;
  slug: string;
  publishedAt: string; // ISO date
  excerpt: string;
  tags?: string[];
};

const SAMPLE_INSIGHTS: Insight[] = [
  {
    id: 'insight-001',
    title: 'Investing in Responsible Product Engineering',
    slug: 'investing-in-responsible-product-engineering',
    publishedAt: '2025-04-15',
    excerpt:
      'How we evaluate engineering-led companies and the signals we look for when investing in sustainable product teams.',
    tags: ['governance', 'engineering', 'strategy']
  },
  {
    id: 'insight-002',
    title: 'Why Developer Experience Matters for Scale',
    slug: 'why-developer-experience-matters-for-scale',
    publishedAt: '2025-03-02',
    excerpt:
      'A short primer on developer experience (DX) best practices and how they impact time-to-market and operational costs.',
    tags: ['engineering', 'product']
  },
  {
    id: 'insight-003',
    title: 'Introducing YesIndeed: Our Software & Web Studio',
    slug: 'introducing-yesindeed',
    publishedAt: '2025-01-28',
    excerpt:
      'YesIndeed is our in-house web and software engineering studio focused on building production-grade products and APIs.',
    tags: ['subsidiary', 'agency']
  }
];

function formatDate(iso?: string) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return iso;
  }
}

export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] text-[#0F172A]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Insights</h1>
          <p className="mt-2 text-sm text-[#475569] max-w-2xl">
            News, articles, and perspectives from Viggen Holdings. Browse our latest notes on governance,
            product engineering, and company updates.
          </p>
        </header>

        <section aria-labelledby="insights-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 id="insights-heading" className="text-lg font-semibold">
              Recent
            </h2>
            <div className="hidden sm:flex items-center space-x-2">
              <Link href="/">
                <a className="text-sm text-[#10B981] hover:underline">Back to home</a>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_INSIGHTS.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-lg border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                aria-labelledby={`post-${post.id}-title`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 id={`post-${post.id}-title`} className="text-base font-semibold text-[#0F172A]">
                      <Link href={`/insights/${post.slug}`}>
                        <a className="hover:underline">{post.title}</a>
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-[#64748B]">{formatDate(post.publishedAt)}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#475569]">{post.excerpt}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2 py-1 rounded text-xs bg-[#F1F5F9] text-[#475569]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link href={`/insights/${post.slug}`}>
                      <a
                        className="text-sm font-medium text-[#0F172A] opacity-90 group-hover:opacity-100"
                        aria-label={`Read ${post.title}`}
                      >
                        Read
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {SAMPLE_INSIGHTS.length === 0 && (
            <div className="mt-8 rounded-md bg-white p-6 text-center border border-gray-100">
              <p className="text-sm text-[#475569]">
                No insights published yet. Check back soon or contact us if you'd like to contribute.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-12">
          <div className="text-sm text-[#64748B]">
            Prefer a longer read? Visit YesIndeed for technical deep dives and case studies on our
            engineering approach.
          </div>
        </footer>
      </div>
    </div>
  );
}
