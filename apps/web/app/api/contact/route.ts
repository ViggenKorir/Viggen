import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  interestedIn?: string;
  // honeypot field - bots commonly fill fields named like 'website'
  website?: string;
};

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 6;

// Simple in-memory map for rate limiting.
// Note: This is ephemeral and tied to the serverless function instance.
// For production use, replace with a shared store (Redis).
const ipRateMap = new Map<
  string,
  { count: number; windowStart: number }
>();

function getClientIp(req: Request) {
  // Try common header first (when behind proxies like Vercel).
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    // Could be a comma-separated list; take the first one.
    return forwarded.split(',')[0].trim();
  }
  // Fall back to a generic header (may be undefined).
  return req.headers.get('x-real-ip') ?? 'unknown';
}

function isValidEmail(email: string) {
  // Simple, permissive email regex for basic validation.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendContactEmail({
  name,
  email,
  company,
  interestedIn,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  interestedIn?: string;
  message: string;
}) {
  // Expect an SMTP URL in env: e.g. smtp://user:pass@smtp.example.com
  const smtpUrl = process.env.SMTP_URL ?? '';
  if (!smtpUrl) {
    throw new Error('SMTP_URL is not configured in environment variables');
  }

  const transporter = nodemailer.createTransport(smtpUrl);

  const from = process.env.NOREPLY_EMAIL ?? 'no-reply@viggen.example';
  const to = process.env.CONTACT_RECIPIENT ?? 'owner@viggen.example';

  const subject = `Website Contact — ${name}${company ? ` (${company})` : ''}`;
  const textParts = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : undefined,
    interestedIn ? `Interested in: ${interestedIn}` : undefined,
    '',
    'Message:',
    message,
  ].filter(Boolean);

  await transporter.sendMail({
    from,
    to,
    subject,
    text: textParts.join('\n'),
  });
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();

  // Rate limiting
  const entry = ipRateMap.get(ip);
  if (!entry) {
    ipRateMap.set(ip, { count: 1, windowStart: now });
  } else {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      // Reset window
      ipRateMap.set(ip, { count: 1, windowStart: now });
    } else {
      entry.count += 1;
      ipRateMap.set(ip, entry);
      if (entry.count > MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          { error: 'Too many requests — please try again later' },
          { status: 429 }
        );
      }
    }
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  // Honeypot spam protection: if the hidden 'website' field is filled, treat as spam.
  if (body.website) {
    // Respond with success to avoid revealing the honeypot.
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();
  const company = body.company?.trim();
  const interestedIn = body.interestedIn?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields: name, email, and message are required' },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, company, interestedIn, message });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    // Log error server-side. Avoid returning internal details to the client.
    // In a real project, use a logging system (Sentry / Logflare).
    console.error('Contact form delivery error:', err?._message ?? err?.message ?? err);

    // If SMTP isn't configured, return 500 with guidance.
    if (
      err?.message &&
      typeof err.message === 'string' &&
      err.message.toLowerCase().includes('smtp_url')
    ) {
      return NextResponse.json(
        { error: 'Email delivery is not configured. Please set SMTP_URL.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to deliver message. Please try again later.' },
      { status: 500 }
    );
  }
}
