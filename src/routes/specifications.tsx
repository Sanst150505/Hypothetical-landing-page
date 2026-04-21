import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/specifications")({
  head: () => ({
    meta: [
      { title: "Specifications — Monolith" },
      {
        name: "description",
        content:
          "Full technical specifications of the Monolith e-ink writing instrument: dimensions, materials, display, and battery.",
      },
      { property: "og:title", content: "Specifications — Monolith" },
      {
        property: "og:description",
        content: "Dimensions, materials, display, battery — every measurement, none hidden.",
      },
    ],
  }),
  component: SpecificationsPage,
});

const groups: { title: string; rows: [string, string][] }[] = [
  {
    title: "Chassis",
    rows: [
      ["Material", "6061-T6 aerospace aluminum"],
      ["Finish", "Bead-blasted, hard anodized"],
      ["Construction", "5-axis CNC, single billet"],
      ["Mass", "342 grams"],
      ["Profile", "4.7 mm at the thinnest edge"],
      ["Footprint", "248 × 178 mm"],
    ],
  },
  {
    title: "Display",
    rows: [
      ["Panel", "10.3″ reflective e-ink, no backlight"],
      ["Resolution", "1872 × 1404, 227 ppi"],
      ["Refresh", "Adaptive 12 Hz writing mode"],
      ["Surface", "Etched anti-glare, paper-tactile"],
    ],
  },
  {
    title: "Power",
    rows: [
      ["Battery", "Internal 4,200 mAh, replaceable"],
      ["Endurance", "Up to 40 days of typical use"],
      ["Charging", "USB-C, 18 W"],
    ],
  },
  {
    title: "Interface",
    rows: [
      ["Stylus", "Pressure-sensitive, magnetically docked"],
      ["Storage", "32 GB internal, no cloud"],
      ["Transfer", "USB-C wired only — no wireless radios"],
    ],
  },
];

function SpecificationsPage() {
  return (
    <div className="bg-background text-foreground min-h-dvh flex flex-col">
      <SiteNav />
      <main className="flex-1 px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
        <header className="pt-16 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow text-aluminum-dark mb-8">Specifications</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] text-balance">
              Every measurement,
              <br />
              none hidden.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-aluminum-dark leading-relaxed max-w-[42ch]">
              We publish the entire specification sheet because we have nothing to obscure
              and nothing to upsell. The device does what is listed, and only what is listed.
            </p>
          </div>
        </header>

        <section className="border-t border-aluminum/30">
          {groups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-16 border-b border-aluminum/30"
            >
              <div className="md:col-span-3">
                <div className="eyebrow text-aluminum-dark sticky top-8">
                  {group.title}
                </div>
              </div>
              <dl className="md:col-span-9 divide-y divide-aluminum/30">
                {group.rows.map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-4 first:pt-0"
                  >
                    <dt className="sm:col-span-4 text-sm text-aluminum-dark">{k}</dt>
                    <dd className="sm:col-span-8 font-serif text-xl text-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
