import { createFileRoute, Link } from "@tanstack/react-router";
import detailImage from "@/assets/monolith-detail.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/edition")({
  head: () => ({
    meta: [
      { title: "Edition I — Monolith" },
      {
        name: "description",
        content:
          "Edition I of Monolith: 1,500 numbered pieces, each machined and anodized in Kyoto and shipped from Copenhagen.",
      },
      { property: "og:title", content: "Edition I — Monolith" },
      {
        property: "og:description",
        content: "1,500 numbered pieces. Machined in Kyoto. Shipped from Copenhagen.",
      },
      { property: "og:image", content: detailImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: detailImage },
    ],
  }),
  component: EditionPage,
});

function EditionPage() {
  return (
    <div className="bg-background text-foreground min-h-dvh flex flex-col">
      <SiteNav />
      <main className="flex-1 px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
        <header className="pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow text-aluminum-dark mb-8">Edition I</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] text-balance">
              Fifteen hundred,
              <br />
              numbered by hand.
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <p className="text-sm text-aluminum-dark leading-relaxed max-w-[42ch]">
              The first edition is closed at 1,500 units. Each chassis is engraved with
              its serial in 4-point Akzidenz at the lower left corner of the back panel.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-24 md:pb-32 border-t border-aluminum/30 pt-16">
          <div className="md:col-span-5 space-y-10">
            <div>
              <div className="eyebrow text-aluminum-dark mb-3">Atelier</div>
              <p className="font-serif text-3xl">Kyoto, Japan</p>
            </div>
            <div>
              <div className="eyebrow text-aluminum-dark mb-3">Cycle</div>
              <p className="font-serif text-3xl">~14 days per unit</p>
            </div>
            <div>
              <div className="eyebrow text-aluminum-dark mb-3">Run</div>
              <p className="font-serif text-3xl">N° 0001 — 1500</p>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 text-sm text-aluminum-dark leading-[1.9] max-w-[55ch]">
            <p>
              The first hundred units are reserved for the atelier&apos;s long-time
              correspondents. Units 101 through 1,500 are released in three quiet waves
              over the course of 2026, each accompanied by a single letter from the
              founder.
            </p>
            <p>
              Every device arrives in a folded archival paper sleeve, sealed with a wax
              stamp bearing the run number. Inside, you will find the device, a single
              braided cable, and a typewritten card. Nothing else.
            </p>
            <p>
              We do not anticipate a second edition. The tooling will be retired and the
              molds donated to a design archive in Helsinki.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 border-t border-aluminum/30 text-center">
          <Link
            to="/acquire"
            className="inline-flex items-center gap-6 border border-foreground px-10 py-5 hover:bg-foreground hover:text-background transition-colors duration-500"
          >
            <span className="eyebrow">Reserve from this edition</span>
            <span className="text-xs">→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
