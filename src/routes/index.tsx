import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/monolith-hero.jpg";
import detailImage from "@/assets/monolith-detail.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monolith — A dedicated e-ink writing instrument" },
      {
        name: "description",
        content:
          "Monolith is a single-purpose writing device milled from aerospace-grade aluminum. No notifications. No browser. Just focus.",
      },
      { property: "og:title", content: "Monolith — A dedicated writing instrument" },
      {
        property: "og:description",
        content: "Silence the machine. A quieter way to think.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-dvh flex flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <header className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow text-aluminum-dark mb-8">Edition I — Spring 2026</div>
            <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[clamp(5rem,10vw,9rem)] leading-[0.88] text-balance">
              Silence the
              <br />
              machine.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end space-y-8 pb-2">
            <p className="text-sm text-aluminum-dark leading-relaxed max-w-[42ch] text-pretty">
              A dedicated e-ink writing instrument, milled from a single block of
              aerospace-grade aluminum. No notifications. No browser. Just raw,
              unadulterated focus.
            </p>
            <Link
              to="/acquire"
              className="group w-fit border-b border-foreground/20 pb-2 flex items-center gap-6 hover:border-foreground transition-colors duration-500"
            >
              <span className="eyebrow">Acquire the device</span>
              <span className="text-xs transition-transform duration-500 group-hover:translate-x-2 opacity-50">
                →
              </span>
            </Link>
          </div>
        </header>

        {/* Hero image */}
        <section className="px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full pb-24 md:pb-40">
          <figure className="w-full aspect-[21/10] bg-aluminum/40 relative group overflow-hidden">
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 z-10 pointer-events-none" />
            <img
              src={heroImage}
              alt="The Monolith device resting on cold-pressed cotton paper"
              width={1920}
              height={1080}
              className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-[1500ms] group-hover:scale-[1.02]"
            />
            <figcaption className="absolute bottom-6 right-6 eyebrow text-foreground/60 z-20">
              Fig. 1 — The Slab
            </figcaption>
          </figure>
        </section>

        {/* Material detail */}
        <section className="px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full py-24 md:py-32 border-t border-aluminum/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="md:col-span-6 lg:col-span-5 space-y-12 order-2 md:order-1">
              <div className="eyebrow text-aluminum-dark">Materials</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] text-balance">
                Cold-pressed texture.
                <br />
                Cold-rolled steel.
              </h2>
              <div className="space-y-6 text-sm text-aluminum-dark leading-[1.8] max-w-[45ch] text-pretty">
                <p>
                  We spent eighteen months calibrating the physical resistance of the
                  stylus against the display matrix. It doesn&apos;t glide like glass. It
                  catches, subtly, exactly like 300gsm archival cotton paper.
                </p>
                <p>
                  The chassis is machined on a 5-axis CNC, bead-blasted for a matte
                  tactile finish, and anodized to flawlessly match the tone of the e-ink
                  substrate. When resting on your desk, it ceases to be technology.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-aluminum/30">
                <Spec label="Mass" value="342" unit="g" />
                <Spec label="Profile" value="4.7" unit="mm" />
                <Spec label="Charge" value="40" unit="days" />
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-7 bg-aluminum/30 relative order-1 md:order-2 h-[60vh] min-h-[500px] overflow-hidden">
              <img
                src={detailImage}
                alt="Brushed aluminum surface and stylus detail"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full py-24 md:py-32 border-t border-aluminum/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4 eyebrow text-aluminum-dark">Three principles</div>
            <h2 className="lg:col-span-8 font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance">
              Subtraction is the design.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-aluminum/30">
            <Principle
              number="01"
              title="No network"
              body="Files transfer over a single physical cable. The device cannot connect to the internet. There is no notification system to disable."
            />
            <Principle
              number="02"
              title="No applications"
              body="One typeface. One blank page. One cursor. Sessions end when you close the cover, never when an alert pulls you elsewhere."
            />
            <Principle
              number="03"
              title="No screen, really"
              body="A 10.3-inch reflective e-ink panel that requires no backlight. It looks like ink on stone in any lighting you would normally read in."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full py-32 md:py-48 border-t border-aluminum/30 text-center">
          <div className="eyebrow text-aluminum-dark mb-10">Limited release</div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.9] text-balance max-w-[18ch] mx-auto">
            Fifteen hundred pieces.
            <br />
            Numbered by hand.
          </h2>
          <p className="mt-10 text-sm text-aluminum-dark max-w-[42ch] mx-auto leading-relaxed">
            Reservations open in waves. Each device ships in a folded paper sleeve with a
            single typewritten card from the atelier.
          </p>
          <Link
            to="/acquire"
            className="mt-16 inline-flex items-center gap-6 border border-foreground px-10 py-5 hover:bg-foreground hover:text-background transition-colors duration-500"
          >
            <span className="eyebrow">Reserve a unit</span>
            <span className="text-xs">→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Spec({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div>
      <div className="eyebrow text-aluminum-dark mb-3">{label}</div>
      <div className="font-serif text-2xl tabular-nums text-foreground">
        {value}
        <span className="text-aluminum-dark text-base ml-1">{unit}</span>
      </div>
    </div>
  );
}

function Principle({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-background p-8 md:p-10 lg:p-12 flex flex-col gap-8 min-h-[280px]">
      <div className="eyebrow text-aluminum-dark">{number}</div>
      <h3 className="font-serif text-3xl md:text-4xl leading-[1] text-foreground">
        {title}
      </h3>
      <p className="text-sm text-aluminum-dark leading-[1.8] text-pretty mt-auto">
        {body}
      </p>
    </div>
  );
}
