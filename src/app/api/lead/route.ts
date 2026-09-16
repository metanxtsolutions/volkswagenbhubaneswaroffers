import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  name?: string;
  phone?: string;
  model?: string;
  city?: string;
  timeline?: string;
  message?: string;
  source?: string;
  page?: string;
  company?: string; // honeypot
};

/**
 * Very small in memory throttle. It resets on every cold start, which is fine:
 * it only exists to slow down obvious form spam, not to be an audit trail.
 */
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function isThrottled(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 15).replace(/\D/g, "").slice(-10);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid 10 digit mobile number." }, { status: 400 });
  }

  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const ip = forwarded.split(",")[0]?.trim() || "unknown";
  if (isThrottled(`${ip}:${phone}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please call us instead." }, { status: 429 });
  }

  const lead = {
    name,
    phone,
    model: clean(body.model, 80) || "Not specified",
    city: clean(body.city, 60) || "Not specified",
    timeline: clean(body.timeline, 60) || "Not specified",
    message: clean(body.message, 500),
    source: clean(body.source, 60) || "website",
    page: clean(body.page, 120),
    receivedAt: new Date().toISOString(),
    userAgent: clean(request.headers.get("user-agent"), 200),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.LEAD_WEBHOOK_TOKEN ? { "x-webhook-token": process.env.LEAD_WEBHOOK_TOKEN } : {}),
        },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) {
        console.error("Lead webhook responded with", response.status);
      }
    } catch (error) {
      // Never fail the user because a downstream CRM is down. The lead is
      // still logged below so it can be recovered from the Vercel logs.
      console.error("Lead webhook failed", error);
    }
  }

  // Always log so leads survive even when no webhook is configured yet.
  console.log("NEW_LEAD", JSON.stringify(lead));

  return NextResponse.json({ ok: true });
}
