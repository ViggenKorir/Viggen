'use client';

import React, { FormEvent, useState } from 'react';

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  interestedIn?: string;
  message: string;
  website?: string; // honeypot
};

export default function ContactPage(): JSX.Element {
  const [form, setForm] = useState<ContactPayload>({
    name: '',
    email: '',
    company: '',
    interestedIn: '',
    message: '',
    website: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error' | 'validation'; message?: string }>({
    type: 'idle'
  });

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(payload: ContactPayload) {
    if (!payload.name.trim()) return 'Please enter your name.';
    if (!payload.email.trim()) return 'Please enter your email.';
    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(payload.email)) return 'Please enter a valid email address.';
    if (!payload.message.trim()) return 'Please enter a message.';
    return null;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ type: 'idle' });

    // Honeypot — if the hidden field has a value, silently treat as success to deter bots
    if (form.website && form.website.trim().length > 0) {
      setStatus({ type: 'success', message: 'Thanks — we will be in touch shortly.' });
      setForm({ name: '', email: '', company: '', interestedIn: '', message: '', website: '' });
      return;
    }

    const validationError = validate(form);
    if (validationError) {
      setStatus({ type: 'validation', message: validationError });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company?.trim(),
          interestedIn: form.interestedIn,
          message: form.message.trim(),
          website: form.website // honeypot
        })
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thanks — your message has been sent.' });
        setForm({ name: '', email: '', company: '', interestedIn: '', message: '', website: '' });
      } else {
        const json = await res.json().catch(() => null);
        const errMsg = json?.error || 'Something went wrong. Please try again later.';
        setStatus({ type: 'error', message: errMsg });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-[#0F172A]">Contact</h1>
        <p className="mt-2 text-sm text-[#475569]">
          For partnership, investor relations, or general inquiries, fill out the form below or email us at{' '}
          <a className="text-[#0F172A] underline" href="mailto:investors@viggen.example">
            investors@viggen.example
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6" aria-describedby="form-status">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#0F172A]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-[#0F172A] shadow-sm focus:border-[#10B981] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0F172A]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-[#0F172A] shadow-sm focus:border-[#10B981] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[#0F172A]">
                Company (optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-[#0F172A] shadow-sm focus:border-[#10B981] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="interestedIn" className="block text-sm font-medium text-[#0F172A]">
                I'm interested in
              </label>
              <select
                id="interestedIn"
                name="interestedIn"
                value={form.interestedIn}
                onChange={(e) => update('interestedIn', e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-[#0F172A] shadow-sm focus:border-[#10B981] focus:outline-none"
              >
                <option value="">Select an option</option>
                <option value="partnership">Partnership / Strategic</option>
                <option value="investor">Investor relations</option>
                <option value="services">Services / Proposal</option>
                <option value="career">Career opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#0F172A]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              required
              className="mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-[#0F172A] shadow-sm focus:border-[#10B981] focus:outline-none"
            />
          </div>

          {/* Honeypot field - visually hidden */}
          <div style={{ display: 'none' }}>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              value={form.website}
              onChange={(e) => update('website', e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-[#475569]" id="form-status" aria-live="polite" role="status">
              {status.type === 'validation' && <p className="text-yellow-700">{status.message}</p>}
              {status.type === 'error' && <p className="text-red-700">{status.message}</p>}
              {status.type === 'success' && <p className="text-green-700">{status.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none ${
                submitting ? 'bg-green-400 cursor-wait' : 'bg-[#10B981] hover:bg-[#0ea36f]'
              }`}
            >
              {submitting ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </form>

        <div className="mt-10 border-t pt-6 text-sm text-[#475569]">
          <h3 className="text-sm font-medium text-[#0F172A]">Office</h3>
          <p className="mt-2">
            Viggen Holdings
            <br />
            123 Digital Avenue
            <br />
            Remote / Distributed
          </p>

          <h3 className="mt-4 text-sm font-medium text-[#0F172A]">Investor inquiries</h3>
          <p className="mt-2">
            Email:{' '}
            <a className="text-[#0F172A] underline" href="mailto:investors@viggen.example">
              investors@viggen.example
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
