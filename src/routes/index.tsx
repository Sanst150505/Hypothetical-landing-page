import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/kraze-hero.jpg";
import cameraImage from "@/assets/kraze-camera.jpg";
import streetImage from "@/assets/kraze-street.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRAZE K1 — Born Loud. Built for India." },
      {
        name: "description",
        content:
          "KRAZE K1 is a flagship-grade smartphone engineered for India. 144Hz AMOLED, Dimensity 9300+, 120W hyper-charge, 5200mAh. Starting ₹29,999. Pre-book for ₹999.",
      },
      { property: "og:title", content: "KRAZE K1 — Born Loud. Built for India." },
      {
        property: "og:description",
        content: "Flagship specs, street-ready attitude. 144Hz. 120W. Pre-book Drop 01 for ₹999.",
      },
      { property: "og:image", content: heroImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-void text-foreground min-h-dvh flex flex-col overflow-hidden">
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-screen noise" />

      <SiteNav />

      <main className="flex-1">
        {/* HERO */}
        <header className="relative px-6 md:px-12 pt-8 pb-24 md:pb-32 max-w-[1600px] mx-auto w-full">
          {/* ambient glows */}
          <div className="absolute top-20 -left-40 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-hyper-pink rounded-full blur-[140px] opacity-25 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-toxic-orange rounded-full blur-[120px] opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* left copy */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="eyebrow text-acid-yellow border border-acid-yellow/30 px-4 py-1.5 w-fit">
                Drop 01 — Launching 14 May 2026
              </div>

              <h1 className="font-display text-[clamp(3.5rem,14vw,11rem)] leading-[0.82] tracking-tighter uppercase text-balance">
                <span className="block text-foreground">Born</span>
                <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-foreground)]">
                  Loud.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-soft max-w-[45ch] text-pretty">
                The first smartphone built by Indians, for Indians, with absolutely zero
                chill. 144Hz AMOLED. 120W hyper-charge. Zero bloatware. Engineered for the
                streets you actually live in.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/acquire"
                  className="group bg-acid-yellow text-void uppercase font-display text-lg md:text-xl px-10 py-5 hover:-translate-y-1 hover:shadow-[10px_10px_0px_var(--color-hyper-pink)] transition-all duration-300 border-2 border-transparent hover:border-foreground flex items-center justify-center gap-3"
                >
                  <span>Pre-book · ₹999</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  to="/specifications"
                  className="uppercase font-display text-lg md:text-xl px-10 py-5 border-2 border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5 transition-colors flex items-center justify-center gap-3"
                >
                  See specs
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-xs text-zinc-soft uppercase tracking-widest">
                <span>Starts ₹29,999</span>
                <span className="opacity-30">/</span>
                <span>No-cost EMI</span>
                <span className="opacity-30">/</span>
                <span>Delivered across India</span>
              </div>
            </div>

            {/* right hero visual */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-6 bg-linear-to-br from-hyper-pink/40 via-transparent to-toxic-orange/40 blur-3xl opacity-60 pointer-events-none" />
              <div className="relative aspect-[9/16] w-full max-w-[440px] mx-auto border-2 border-void-line bg-void-surface overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <img
                  src={heroImage}
                  alt="KRAZE K1 smartphone in matte black with neon pink and orange rim lighting, Mumbai street at night"
                  width={1080}
                  height={1920}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 eyebrow text-acid-yellow bg-void/80 backdrop-blur-sm px-3 py-1">
                  K1 · Obsidian
                </div>
                <div className="absolute bottom-4 right-4 eyebrow text-foreground bg-hyper-pink px-3 py-1">
                  4,821 / 10,000
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* MARQUEE */}
        <div className="w-full overflow-hidden bg-hyper-pink text-void py-4 whitespace-nowrap relative z-20 rotate-[-1deg] scale-[1.03] border-y-2 border-void">
          <div className="flex gap-12 animate-marquee font-display text-2xl md:text-3xl uppercase tracking-wider w-max">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>No compromise</span>
                <span>+</span>
                <span>No bloatware</span>
                <span>+</span>
                <span>Unapologetic power</span>
                <span>+</span>
                <span>Made in India</span>
                <span>+</span>
                <span>Drop 01 loading</span>
                <span>+</span>
              </div>
            ))}
          </div>
        </div>

        {/* GRIT / features grid */}
        <section className="relative z-20 py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14 border-b-2 border-void-line pb-6">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase">
              The <span className="text-toxic-orange">Grit.</span>
            </h2>
            <p className="eyebrow text-zinc-soft max-w-[28ch] md:text-right">
              Raw specs. No marketing fluff. No regional limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <GritCard
              number="01"
              title="Juice up. Fast."
              body="5200mAh silicon-carbon cell. 0 to 100% in 19 minutes flat with the 120W brick that ships in the box. No upsell."
              highlight="19"
              unit="MINS"
              accent="acid-yellow"
            />
            <GritCard
              number="02"
              title="Night-Owl Lens."
              body="Sony IMX-890 tuned for Indian lighting — wedding halls, street lamps, festival fireworks. Capture the blur without losing the moment."
              highlight="200MP"
              unit="PRIMARY"
              accent="hyper-pink"
              offset
            />
            <GritCard
              number="03"
              title="Zero Throttle."
              body="MediaTek Dimensity 9300+, 16GB RAM, vapor-chamber cooling large enough to survive four-hour BGMI sessions with a hot charger plugged in."
              highlight="2.1M"
              unit="ANTUTU"
              accent="toxic-orange"
            />
          </div>
        </section>

        {/* CAMERA FEATURE */}
        <section className="relative z-20 py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto w-full border-t-2 border-void-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-hyper-pink/20 blur-3xl pointer-events-none" />
              <div className="relative aspect-[4/3] w-full border-2 border-void-line overflow-hidden">
                <img
                  src={cameraImage}
                  alt="Extreme macro of the KRAZE K1 triple camera module with neon reflections"
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
              <div className="eyebrow text-hyper-pink">Camera / Night-owl</div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.9]">
                Shot on <span className="text-acid-yellow">K1.</span>
              </h2>
              <p className="text-lg text-zinc-soft max-w-[50ch]">
                A triple-lens system engineered for how Indians actually shoot — loud
                weddings, packed concerts, messy street food, and the occasional 3 AM
                samosa run. Every frame stabilised, every skin tone honest.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-void-line pt-6">
                <div>
                  <div className="font-display text-3xl md:text-4xl text-foreground">
                    f/1.6
                  </div>
                  <div className="eyebrow text-zinc-soft mt-2">Aperture</div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl text-foreground">
                    8K
                  </div>
                  <div className="eyebrow text-zinc-soft mt-2">Video</div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl text-foreground">
                    10×
                  </div>
                  <div className="eyebrow text-zinc-soft mt-2">Lossless zoom</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO / STREET */}
        <section className="relative z-20 mt-8 md:mt-12">
          <figure className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
            <img
              src={streetImage}
              alt="Neon-lit Indian street at night with blurred motorbikes and Hindi shop signs"
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-linear-to-t from-void via-void/40 to-void/60" />
            <figcaption className="relative z-10 h-full flex items-center justify-center px-6">
              <div className="max-w-[24ch] text-center">
                <div className="eyebrow text-acid-yellow mb-6">Manifesto</div>
                <p className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.95] text-balance">
                  Made for the streets you actually{" "}
                  <span className="text-hyper-pink">live</span> in.
                </p>
              </div>
            </figcaption>
          </figure>
        </section>

        {/* FINAL CTA */}
        <section className="relative z-20 px-6 md:px-12 max-w-[1600px] mx-auto w-full py-24 md:py-40 text-center">
          <div className="eyebrow text-zinc-soft mb-8">Drop 01 — Limited launch</div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-balance max-w-[18ch] mx-auto">
            Ten thousand units.
            <br />
            <span className="text-hyper-pink">India only.</span>
          </h2>
          <p className="mt-10 text-base md:text-lg text-zinc-soft max-w-[50ch] mx-auto">
            Pre-book for ₹999 (fully refundable, fully adjustable against final price).
            First delivery slots open across 14 cities. No lottery, no bots, no BS.
          </p>
          <Link
            to="/acquire"
            className="group mt-12 inline-flex items-center gap-6 bg-acid-yellow text-void uppercase font-display text-xl md:text-2xl px-12 py-6 hover:-translate-y-1 hover:shadow-[12px_12px_0px_var(--color-hyper-pink)] transition-all duration-300 border-2 border-transparent hover:border-foreground"
          >
            <span>Lock your unit</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function GritCard({
  number,
  title,
  body,
  highlight,
  unit,
  accent,
  offset,
}: {
  number: string;
  title: string;
  body: string;
  highlight: string;
  unit: string;
  accent: "acid-yellow" | "hyper-pink" | "toxic-orange";
  offset?: boolean;
}) {
  const accentClass = {
    "acid-yellow": "group-hover:border-acid-yellow group-hover:text-acid-yellow",
    "hyper-pink": "group-hover:border-hyper-pink group-hover:text-hyper-pink",
    "toxic-orange": "group-hover:border-toxic-orange group-hover:text-toxic-orange",
  }[accent];

  const highlightClass = {
    "acid-yellow": "text-acid-yellow",
    "hyper-pink": "text-hyper-pink",
    "toxic-orange": "text-toxic-orange",
  }[accent];

  return (
    <div
      className={`group bg-void-surface border-2 border-void-line p-8 md:p-10 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:bg-void ${accentClass} ${offset ? "md:translate-y-10" : ""}`}
    >
      <div>
        <div className="font-display text-7xl text-foreground/10 mb-6 transition-colors">
          {number}
        </div>
        <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tighter mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-zinc-soft leading-relaxed max-w-[32ch]">{body}</p>
      </div>
      <div className={`font-display text-5xl md:text-6xl tracking-tighter mt-10 ${highlightClass}`}>
        {highlight}{" "}
        <span className="text-lg text-zinc-soft tracking-widest">{unit}</span>
      </div>
    </div>
  );
}
