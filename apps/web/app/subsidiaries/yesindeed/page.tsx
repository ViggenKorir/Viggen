'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * YesIndeed subsidiary page
 *
 * Path: /subsidiaries/yesindeed
 *
 * This page is implemented as a client component so it can host an interactive contact form.
 * It is intentionally self-contained and uses minimal external components so it can run
 * even if a shared UI package isn't wired up yet.
 *
 * Styling assumes Tailwind CSS is available in the app.
 */

type FormState = {
  name: string;
  email: string;
  company: string;
  interestedIn: string;
  message: string;
  website: string; // honeypot: should remain empty
};

export default function YesIndeedPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold text-green-600">Subsidiary</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              YesIndeed
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              Web Development & Software Engineering — Web & software that ships value.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#services">
                <a className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-green-700">
                  Our Services
                </a>
              </Link>
              <Link href="#contact">
                <a className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                  Request a proposal
                </a>
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500 max-w-xl">
              YesIndeed is a web development agency and product engineering team that helps
              startups and enterprises build production-grade web products and APIs.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-56 lg:h-64 rounded-lg overflow-hidden bg-slate-50 border">
            {/* Placeholder image; replace with real hero image at /images/yesindeed-hero.jpg */}
            <Image
              src="/images/yesindeed-hero.jpg"
              alt="YesIndeed team collaborating"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </header>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            We focus on modern web stacks, high-quality engineering, and pragmatic product design.
          </p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Custom web applications',
                desc: 'React, Next.js, server rendering, and performant frontends.',
              },
              {
                title: 'SaaS product development',
                desc: 'From MVP to scaled product — architecture, CI/CD and ops.',
              },
              {
                title: 'API design & backend engineering',
                desc: 'Robust REST/GraphQL APIs, microservices, and serverless patterns.',
              },
              {
                title: 'UX & product design',
                desc: 'Product thinking, wireframes, and polished interfaces.',
              },
            ].map((s) => (
              <li
                key={s.title}
                className="p-4 rounded-lg border bg-white shadow-sm flex flex-col"
                role="article"
                aria-labelledby={`service-${s.title.replace(/\s+/g, '-')}`}
              >
                <h3 id={`service-${s.title.replace(/\s+/g, '-')}`} className="font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="portfolio" className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Case studies & portfolio</h2>
            <Link href="/subsidiaries/yesindeed/portfolio">
              <a className="text-sm text-green-600 hover:underline">View full portfolio</a>
            </Link>
          </div>

          <p className="mt-2 text-slate-600 max-w-2xl">
            A selection of projects we shipped — production-ready, user-focused, and instrumented for growth.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              title="Fintech Dashboard"
              description="Real-time analytics dashboard for a payments startup with Next.js and WebSockets."
              image="/images/portfolio-fintech.jpg"
              href="#"
            />
            <PortfolioCard
              title="Marketplaces Platform"
              description="Custom marketplace platform with multi-tenant architecture and scalable APIs."
              image="/images/portfolio-marketplace.jpg"
              href="#"
            />
            <PortfolioCard
              title="SaaS Productivity App"
              description="End-to-end product build, design system, and launch support."
              image="/images/portfolio-saas.jpg"
              href="#"
            />
          </div>
        </section>

        <section id="team" className="mt-16">
          <h2 className="text-2xl font-bold">Team & approach</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Small, senior engineering teams paired with product design. We prefer iterative delivery,
            clear milestones, and evidence-driven prioritization.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Asha Mwangi', role: 'Head of Engineering' },
              { name: 'Liam Oduor', role: 'Product Designer' },
              { name: 'Clara Njoroge', role: 'Eng Manager' },
            ].map((p) => (
              <div key={p.name} className="p-4 rounded-lg border bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium">
                    {initials(p.name)}
                  </div>
                  <div>
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-sm text-slate-600">{p.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-bold">Request a proposal</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Tell us about your project and timeline. We'll get back to you with next steps and a scoped
            proposal.
          </p>

          <div className="mt-6 max-w-2xl">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------------------
   Helper / subcomponents
   --------------------------- */

function initials(fullName: string) {
  const parts = fullName.split(' ');
  return parts.map((p) => p[0]).slice(0, 2).join('');
}

function PortfolioCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <article className="group rounded-lg overflow-hidden border bg-white shadow-sm">
      <div className="relative w-full h-40 bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        <div className="mt-4">
          <Link href={href}>
            <a className="text-sm font-medium text-green-600 hover:underline">Read case study →</a>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------
   ContactForm (client)
   --------------------------- */

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    interestedIn: '',
    message: '',
    website: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatusMsg(null);

    // Basic client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatusMsg('Please complete name, email, and message.');
      return;
    }

    // Honeypot: if filled, likely spam
    if (form.website) {
      setStatusMsg('Thanks for your submission.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          interestedIn: form.interestedIn,
          message: form.message,
          website: form.website, // honeypot
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatusMsg(json?.error ?? 'Failed to send. Please try again later.');
      } else {
        setStatusMsg('Thanks — we received your message and will respond shortly.');
        setForm({
          name: '',
          email: '',
          company: '',
          interestedIn: '',
          message: '',
          website: '',
        });
      }
    } catch (err) {
      setStatusMsg('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 border rounded-lg">
      {/* Honeypot field (hidden from users) */}
      <div style={{ display: 'none' }}>
        <label>
          Do not fill (bot trap)
          <input
            name="website"
            value={form.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
            aria-required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
            aria-required
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Company (optional)
          <input
            type="text"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Interested in
          <select
            value={form.interestedIn}
            onChange={(e) => update('interestedIn', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-200 bg-white shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="">Select an option</option>
            <option>Custom web application</option>
            <option>SaaS product development</option>
            <option>API / Backend engineering</option>
            <option>UX & design</option>
            <option>Other / Consultation</option>
          </select>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Message
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
            aria-required
          />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-white text-sm font-semibold hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? 'Sending…' : 'Request proposal'}
        </button>
        <p className="text-sm text-slate-500">{statusMsg}</p>
      </div>
    </form>
  );
}
