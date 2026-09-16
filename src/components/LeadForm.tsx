"use client";

import { useState, type FormEvent } from "react";
import { cities } from "@/data/cities";
import { models } from "@/data/models";
import { site, whatsappHref } from "@/data/site";
import { trackLead } from "@/lib/analytics";

type Props = {
  source: string;
  heading?: string;
  subheading?: string;
  defaultModel?: string;
  defaultCity?: string;
  compact?: boolean;
  ctaLabel?: string;
};

const timelines = ["Immediately", "Within 15 days", "This month", "Next 1 to 3 months", "Just exploring"];

export default function LeadForm({
  source,
  heading = "Get the best price on WhatsApp",
  subheading = "Share your details and our team will send the running offer, on road price and EMI plan within minutes.",
  defaultModel = "",
  defaultCity = "Bhubaneswar",
  compact = false,
  ctaLabel = "Get best offer",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [lead, setLead] = useState<{ name: string; model: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const phone = (data.phone || "").replace(/\D/g, "").slice(-10);
    if (phone.length !== 10 || !/^[6-9]/.test(phone)) {
      setStatus("error");
      setError("Please enter a valid 10 digit Indian mobile number.");
      return;
    }
    if (!data.name || data.name.trim().length < 2) {
      setStatus("error");
      setError("Please enter your name.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phone, source, page: window.location.pathname }),
      });
      if (!response.ok) throw new Error("Request failed");

      trackLead({ model: data.model, city: data.city, source });
      setLead({ name: data.name, model: data.model });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call us instead, we will help you right away.");
    }
  }

  if (status === "done") {
    const message = `Hi, I am ${lead?.name || "interested"} and I just enquired about the ${
      lead?.model || "Volkswagen range"
    } on your website. Please share the best offer.`;
    return (
      <div className="border border-hairline bg-white p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-vw-cyan/40 bg-vw-cyan/10 text-2xl text-vw-cyan-deep">
          <span aria-hidden>✓</span>
        </div>
        <h3 className="mt-6 text-title font-light text-vw-blue">Thank you, we have your details</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Our sales consultant will call you shortly with the running offer and the full on road price. For a faster
          reply, message us on WhatsApp now.
        </p>
        <a
          href={whatsappHref(message)}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1eb457]"
        >
          Continue on WhatsApp
        </a>
        <p className="mt-4 text-sm text-ink-soft">
          or call{" "}
          <a href={`tel:${site.phone}`} className="font-medium text-vw-blue underline underline-offset-4">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-hairline bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-vw-blue";

  return (
    <form
      onSubmit={onSubmit}
      className={`border border-hairline bg-white ${compact ? "p-6" : "p-7 sm:p-9"}`}
      noValidate
    >
      <div className="mb-5">
        <h3 className="text-title font-light text-vw-blue">{heading}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{subheading}</p>
      </div>

      <div className="grid gap-3">
        <div>
          <label htmlFor={`name-${source}`} className="sr-only">
            Your name
          </label>
          <input
            id={`name-${source}`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`phone-${source}`} className="sr-only">
            Mobile number
          </label>
          <div className="flex items-stretch border border-hairline transition-colors focus-within:border-vw-blue">
            <span className="flex items-center border-r border-hairline bg-mist px-3.5 text-[15px] text-ink-soft">+91</span>
            <input
              id={`phone-${source}`}
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              required
              placeholder="10 digit mobile number"
              className="w-full px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-ink-faint"
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={`model-${source}`} className="sr-only">
              Model of interest
            </label>
            <select id={`model-${source}`} name="model" defaultValue={defaultModel} className={fieldClass} required>
              <option value="">Select model</option>
              {models.map((model) => (
                <option key={model.slug} value={model.fullName}>
                  {model.fullName}
                </option>
              ))}
              <option value="Not decided">Not decided yet</option>
            </select>
          </div>
          <div>
            <label htmlFor={`city-${source}`} className="sr-only">
              Your city
            </label>
            <select id={`city-${source}`} name="city" defaultValue={defaultCity} className={fieldClass}>
              {cities.map((city) => (
                <option key={city.slug} value={city.name}>
                  {city.name}
                </option>
              ))}
              <option value="Other">Other city in Odisha</option>
            </select>
          </div>
        </div>

        {!compact ? (
          <div>
            <label htmlFor={`timeline-${source}`} className="sr-only">
              Planning to buy
            </label>
            <select id={`timeline-${source}`} name="timeline" defaultValue="" className={fieldClass}>
              <option value="">Planning to buy</option>
              {timelines.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        {/* Honeypot, hidden from real users */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 w-full rounded-full bg-vw-blue px-6 py-4 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-vw-blue-soft disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : ctaLabel}
        </button>

        {status === "error" ? (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        ) : null}

        <p className="text-center text-xs leading-relaxed text-ink-faint">
          By submitting this form you agree to be contacted by our sales team on call, SMS and WhatsApp. Your details
          are never sold or shared.
        </p>
      </div>
    </form>
  );
}
