import { site, telHref, whatsappHref } from "@/data/site";

export default function CtaBand({
  title = "Ready to take the best offer home?",
  subtitle = "Talk to our sales consultant now for the running scheme, on road price and EMI plan.",
  whatsappMessage = "Hi, please share the current Volkswagen offers in Bhubaneswar.",
}: {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="bg-vw-blue">
      <div className="container-page hero-grid flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={telHref}
            className="rounded-full bg-vw-cyan px-7 py-3.5 text-base font-bold text-vw-blue transition hover:bg-white"
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href={whatsappHref(whatsappMessage)}
            className="rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white transition hover:bg-[#1eb457]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
