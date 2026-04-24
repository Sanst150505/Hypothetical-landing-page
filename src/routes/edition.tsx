import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/kraze-hero.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/edition")({
  head: () => ({
    meta: [
      { title: "KRAZE K1 Edition" },
      {
        name: "description",
        content:
          "Edition details for the KRAZE K1, including finishes, pricing, launch timing, and city availability.",
      },
      { property: "og:title", content: "KRAZE K1 Edition" },
      { property: "og:description", content: "Launch details and finishes for the KRAZE K1." },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: EditionPage,
});

const finishes = [
  { name: "Obsidian", price: "Rs 29,999", hex: "oklch(0.12 0.02 290)" },
  { name: "Hyper Pink", price: "Rs 31,999", hex: "oklch(0.66 0.27 5)" },
  { name: "Toxic Orange", price: "Rs 31,999", hex: "oklch(0.7 0.23 40)" },
  { name: "Acid Yellow", price: "Rs 33,999", hex: "oklch(0.94 0.22 112)" },
];

const cities = [
  "Mumbai",
  "Delhi NCR",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kochi",
  "Indore",
  "Chandigarh",
  "Guwahati",
];

function EditionPage() {
  return (
    <div className="min-h-dvh bg-void text-foreground">
      <SiteNav />

      <main className="content-wrap pb-20">
        <header className="page-header">
          <div className="space-y-5">
            <div className="chip">Edition / Launch 14 May 2026</div>
            <h1 className="page-title max-w-[11ch]">Focused release. Four finishes.</h1>
          </div>
          <p className="lead">
            The edition page is intentionally simple: clear finishes, visible pricing, and
            launch details that are easy to scan.
          </p>
        </header>

        <section className="section-block pt-0">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {finishes.map((finish) => (
              <article key={finish.name} className="surface-card p-5">
                <div
                  className="h-48 rounded-2xl border border-white/10"
                  style={{ backgroundColor: finish.hex }}
                />
                <div className="mt-5">
                  <h2 className="font-display text-[1.45rem] leading-tight">{finish.name}</h2>
                  <p className="mt-2 text-sm text-zinc-soft">From {finish.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="surface-card px-6 py-7 md:px-7">
              <div className="eyebrow mb-5">Launch details</div>
              <div className="space-y-5">
                <Metric label="Units in first release" value="10,000" />
                <Metric label="Reservation amount" value="Rs 999 refundable" />
                <Metric label="Shipping begins" value="14 May 2026" />
                <Metric label="Warranty" value="2 years on-site across India" />
              </div>
            </div>

            <div className="surface-card px-6 py-7 md:px-8 md:py-8">
              <p className="text-base leading-8 text-zinc-soft">
                Early reservations stay lightweight. The launch is structured around
                availability rather than manufactured urgency.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-soft">
                Each finish is available in limited quantities, with delivery handled city by
                city. The goal is to make the launch readable and trustworthy instead of loud
                for its own sake.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="mb-5">
            <div className="eyebrow text-acid-yellow">Launch cities</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="surface-card px-5 py-5">
                <div className="font-display text-[1.2rem] leading-tight">{city}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block pt-0">
          <Link to="/acquire" className="cta-primary">
            Reserve your K1
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-void-line pb-4 last:border-b-0 last:pb-0">
      <div className="info-label">{label}</div>
      <div className="mt-2 font-display text-[1.35rem] leading-tight">{value}</div>
    </div>
  );
}
