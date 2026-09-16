declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;

/** Fires the lead events for GA4, Google Ads and Meta once a form is submitted. */
export function trackLead(payload: { model?: string; city?: string; source: string }) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "generate_lead", {
    event_category: "lead",
    event_label: payload.source,
    vehicle_model: payload.model,
    city: payload.city,
    currency: "INR",
    value: 1,
  });

  if (ADS_ID && ADS_LABEL) {
    window.gtag?.("event", "conversion", {
      send_to: `${ADS_ID}/${ADS_LABEL}`,
      value: 1,
      currency: "INR",
    });
  }

  window.fbq?.("track", "Lead", { content_name: payload.model, source: payload.source });
}

/** Fires when someone taps a call or WhatsApp button. */
export function trackContact(channel: "call" | "whatsapp", source: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", channel === "call" ? "click_to_call" : "click_to_whatsapp", {
    event_category: "contact",
    event_label: source,
  });
  window.fbq?.("track", "Contact", { channel, source });
}
