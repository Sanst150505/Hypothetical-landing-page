import { createFileRoute, Link } from "@tanstack/react-router";
import cameraImage from "@/assets/kraze-camera.jpg";
import heroImage from "@/assets/kraze-hero.jpg";
import streetImage from "@/assets/kraze-street.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRAZE K1 - Built for everyday intensity" },
      {
        name: "description",
        content:
          "KRAZE K1 is a flagship smartphone with a 144Hz AMOLED display, 120W charging, and a clean launch story focused on the product.",
      },
      { property: "og:title", content: "KRAZE K1 - Built for everyday intensity" },
      {
        property: "og:description",
        content: "A cleaner KRAZE K1 showcase with launch details, specs, and reservation flow.",
      },
      { property: "og:image", content: heroImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    label: "Display",
    value: "6.73-inch 144Hz AMOLED",
    body: "A bright and fluid panel designed to feel premium without overcomplicating the interface around it.",
  },
  {
    label: "Battery",
    value: "5200mAh with 120W charging",
    body: "Fast top-ups, dependable all-day battery life, and the charger included where it belongs: in the box.",
  },
  {
    label: "Camera",
    value: "200MP main sensor",
    body: "Balanced tuning for low light, motion, and everyday scenes instead of artificial overprocessing.",
  },
];

const facts = [
  ["Starting price", "Rs 29,999"],
  ["Reservation", "Rs 999 refundable"],
  ["Availability", "Shipping from 14 May 2026"],
];

function HomePage() {
  return (
    <div className="min-h-dvh bg-void text-foreground">
      <SiteNav />

      <main>
        <section className="content-wrap section-block">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div className="space-y-7">
              <div className="chip">Launching 14 May 2026</div>
              <div className="space-y-5">
                <h1 className="page-title max-w-[10ch]">Built for everyday intensity.</h1>
                <p className="lead">
                  KRAZE K1 is presented as a focused product story with better typography,
                  cleaner spacing, and stronger visual structure so the product feels clear
                  instead of noisy.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/acquire" className="cta-primary">
                  Reserve for Rs 999
                </Link>
                <Link to="/specifications" className="cta-secondary">
                  View specifications
                </Link>
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {facts.map(([label, value]) => (
                  <div key={label} className="surface-card px-5 py-5">
                    <div className="stat-label">{label}</div>
                    <div className="stat-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -top-8 right-4 h-40 w-40 rounded-full bg-hyper-pink/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-4 h-40 w-40 rounded-full bg-toxic-orange/15 blur-3xl" />
              <div className="image-frame aspect-[4/4.8] max-w-[520px] mx-auto">
                <img
                  src={heroImage}
                  alt="KRAZE K1 smartphone hero visual"
                  width={1080}
                  height={1920}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="content-wrap section-block pt-0">
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.label} className="surface-card px-6 py-6 md:px-7 md:py-7">
                <div className="eyebrow text-acid-yellow">{item.label}</div>
                <h2 className="mt-4 font-display text-[1.7rem] leading-tight">{item.value}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-wrap section-block">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <div className="eyebrow text-hyper-pink">Camera</div>
              <h2 className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.96]">
                Sharp when the light is not.
              </h2>
              <p className="lead">
                The K1 camera system is tuned for real conditions. Indoor events, street
                lights, transport windows, and night shots stay usable without being pushed
                into unnatural color.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="image-frame aspect-[4/5]">
                <img
                  src={cameraImage}
                  alt="Close-up of the KRAZE K1 camera module"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="image-frame aspect-[4/5] sm:mt-10">
                <img
                  src={streetImage}
                  alt="Street scene used to communicate the KRAZE K1 atmosphere"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="content-wrap section-block">
          <div className="surface-card flex flex-col gap-7 px-7 py-8 md:flex-row md:items-end md:justify-between md:px-10 md:py-10">
            <div className="max-w-[38rem] space-y-4">
              <div className="eyebrow">Reservation</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] leading-[0.95]">
                Clean launch. Clear pricing.
              </h2>
              <p className="text-sm leading-7 text-zinc-soft md:text-base">
                Reserve with a refundable Rs 999 payment, pick your city, and confirm the
                final order when your shipping window opens.
              </p>
            </div>

            <Link to="/acquire" className="cta-primary">
              Continue to reservation
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
