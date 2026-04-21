import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/kraze-hero.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/edition")({
  head: () => ({
    meta: [
      { title: "Drop 01 — KRAZE K1" },
      {
        name: "description",
        content:
          "Drop 01 of the KRAZE K1: 10,000 units, four colourways, fourteen Indian cities. Ships from 14 May 2026.",
      },
      { property: "og:title", content: "Drop 01 — KRAZE K1" },
      {
        property: "og:description",
        content: "10,000 units. 14 cities. India-first launch. Pre-book for ₹999.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: DropPage,
});

const colourways = [
  { name: "Obsidian", price: "₹29,999", hex: "oklch(0.12 0.02 290)", accent: "hyper-pink" },
  { name: "Hyper Pink", price: "₹31,999", hex: "oklch(0.66 0.27 5)", accent: "acid-yellow" },
  { name: "Toxic Orange", price: "₹31,999", hex: "oklch(0.7 0.23 40)", accent: "acid-yellow" },
  { name: "Acid Yellow", price: "₹33,999", hex: "oklch(0.94 0.22 112)", accent: "hyper-pink" },
];

const cities = [
  "Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Kolkata",
  "Ahmedabad", "Jaipur", "Lucknow", "Kochi", "Indore", "Chandigarh", "Guwahati",
];

function DropPage() {
  return (
    <div className="bg-void text-foreground min-h-dvh flex flex-col">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-screen noise" />
      <SiteNav />

      <main className="flex-1 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <header className="pt-12 md:pt-16 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow text-acid-yellow mb-8">Drop 01 — 14 May 2026</div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[8rem] leading-[0.85] uppercase tracking-tighter text-balance">
              Ten thousand.
              <br />
              <span className="text-hyper-pink">India first.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-zinc-soft leading-relaxed max-w-[42ch]">
              Drop 01 is capped at 10,000 units. Every unit is serialised on the SIM tray,
              registered to a city, and backed by two years of on-site warranty anywhere on
              the Indian mainland.
            </p>
          </div>
        </header>

        {/* Colourways */}
        <section className="border-t-2 border-void-line pt-16 pb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter">
              Four finishes.
            </h2>
            <p className="eyebrow text-zinc-soft">Pick your energy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colourways.map((c) => (
              <div
                key={c.name}
                className="group bg-void-surface border-2 border-void-line p-6 flex flex-col gap-6 hover:border-foreground transition-colors"
              >
                <div
                  className="aspect-square w-full relative overflow-hidden"
                  style={{ backgroundColor: c.hex }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-foreground/20 via-transparent to-void/40 mix-blend-overlay" />
                  <div
                    className={`absolute top-3 right-3 eyebrow bg-void/80 backdrop-blur-sm px-2 py-1 text-${c.accent}`}
                  >
                    K1
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl uppercase tracking-tighter text-foreground">
                    {c.name}
                  </div>
                  <div className="eyebrow text-zinc-soft mt-2">From {c.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Details grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-24 border-t-2 border-void-line pt-16">
          <div className="md:col-span-5 space-y-10">
            <Detail label="Units" value="10,000" />
            <Detail label="Starts" value="₹29,999" />
            <Detail label="Pre-book" value="₹999 refundable" />
            <Detail label="Ships from" value="14 May 2026" />
            <Detail label="Warranty" value="2 years on-site, pan-India" />
          </div>
          <div className="md:col-span-7 space-y-6 text-base text-zinc-soft leading-[1.9] max-w-[58ch]">
            <p>
              The first 1,000 units go to Flipkart Super Fans and early KRAZE Discord
              members. Units 1,001 through 10,000 are released in four rolling waves
              through May and June, announced only on our newsletter — no surprise drops,
              no bots, no scalper-friendly timers.
            </p>
            <p>
              Every box ships with the device, a 120W charger (yes, in the box), a braided
              Type-C cable, a clear case, and a serial-stamped sticker sheet. Everything
              you need, nothing you don&apos;t.
            </p>
            <p>
              Service is handled directly by KRAZE through 180+ authorised centres and
              doorstep pickup in the cities listed below. No franchisee runaround.
            </p>
          </div>
        </section>

        {/* Cities */}
        <section className="border-t-2 border-void-line pt-16 pb-24">
          <div className="eyebrow text-acid-yellow mb-8">Launch cities</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-4">
            {cities.map((city) => (
              <div
                key={city}
                className="font-display text-xl md:text-2xl uppercase tracking-tighter text-foreground hover:text-hyper-pink transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-soft">
            Tier 2 cities join the network from July 2026. All-India free shipping
            regardless of city on Drop 01.
          </p>
        </section>

        <section className="py-16 md:py-24 border-t-2 border-void-line text-center">
          <Link
            to="/acquire"
            className="group inline-flex items-center gap-6 bg-acid-yellow text-void uppercase font-display text-xl px-12 py-6 hover:-translate-y-1 hover:shadow-[12px_12px_0px_var(--color-hyper-pink)] transition-all duration-300 border-2 border-transparent hover:border-foreground"
          >
            <span>Pre-book your K1</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow text-zinc-soft mb-3">{label}</div>
      <p className="font-display text-3xl md:text-4xl uppercase tracking-tighter text-foreground">
        {value}
      </p>
    </div>
  );
}
