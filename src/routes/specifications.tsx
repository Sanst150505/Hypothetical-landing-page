import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/specifications")({
  head: () => ({
    meta: [
      { title: "Specs — KRAZE K1" },
      {
        name: "description",
        content:
          "Full technical specifications for the KRAZE K1: Dimensity 9300+, 144Hz AMOLED, 5200mAh, 120W charging, 200MP primary camera, stock Android.",
      },
      { property: "og:title", content: "Specs — KRAZE K1" },
      {
        property: "og:description",
        content: "Every measurement published. Flagship specs, no fine print.",
      },
    ],
  }),
  component: SpecificationsPage,
});

const groups: { title: string; rows: [string, string][] }[] = [
  {
    title: "Performance",
    rows: [
      ["Chipset", "MediaTek Dimensity 9300+ (4nm)"],
      ["CPU", "1×3.4GHz Cortex-X4 + 3×2.85GHz X4 + 4×2.0GHz A720"],
      ["GPU", "Immortalis-G720 MC12"],
      ["RAM", "12GB / 16GB LPDDR5X"],
      ["Storage", "256GB / 512GB UFS 4.0"],
      ["Cooling", "12,000mm² vapor chamber + graphite stack"],
    ],
  },
  {
    title: "Display",
    rows: [
      ["Panel", "6.73″ LTPO AMOLED"],
      ["Resolution", "3200 × 1440, 526 ppi"],
      ["Refresh", "1–144Hz adaptive"],
      ["Brightness", "4,500 nits peak, 1,800 nits HBM"],
      ["Protection", "Corning Gorilla Glass Victus 2"],
      ["Touch sampling", "2,160Hz in-game"],
    ],
  },
  {
    title: "Camera",
    rows: [
      ["Primary", "200MP f/1.6 OIS Sony IMX-890"],
      ["Ultrawide", "50MP f/2.0, 118°"],
      ["Telephoto", "64MP f/2.4, 3.2× optical, 10× lossless"],
      ["Front", "32MP f/2.2 autofocus"],
      ["Video", "8K @ 30fps, 4K HDR @ 60fps, Dolby Vision"],
    ],
  },
  {
    title: "Battery & Charging",
    rows: [
      ["Capacity", "5,200 mAh silicon-carbon"],
      ["Wired", "120W HyperCharge (0–100% in 19 mins)"],
      ["Wireless", "50W magnetic + 10W reverse"],
      ["In box", "120W GaN charger, braided Type-C cable"],
    ],
  },
  {
    title: "Build & Audio",
    rows: [
      ["Frame", "Aerospace-grade aluminum"],
      ["Back", "AG-matte Gorilla Glass"],
      ["Weight", "201 g"],
      ["Thickness", "8.2 mm"],
      ["Rating", "IP68 dust & water resistant"],
      ["Audio", "Stereo speakers tuned by dBs Kolkata, Hi-Res wired"],
    ],
  },
  {
    title: "Connectivity & OS",
    rows: [
      ["Network", "5G SA/NSA, dual VoLTE, all Indian bands"],
      ["Wi-Fi", "Wi-Fi 7 (BE), tri-band"],
      ["Bluetooth", "5.4, LE Audio, Auracast"],
      ["Other", "NFC, UWB, eSIM + physical SIM, IR blaster"],
      ["OS", "KrazeOS on Android 15 — stock feel, zero bloatware"],
      ["Updates", "4 years OS, 6 years security"],
    ],
  },
];

function SpecificationsPage() {
  return (
    <div className="bg-void text-foreground min-h-dvh flex flex-col">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-screen noise" />
      <SiteNav />

      <main className="flex-1 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <header className="pt-12 md:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow text-acid-yellow mb-8">Specs / K1</div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.88] uppercase tracking-tighter text-balance">
              Every number.
              <br />
              <span className="text-toxic-orange">Published.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-zinc-soft leading-relaxed max-w-[42ch]">
              We publish the full spec sheet because we have nothing to hide and nothing
              to upsell later. The device does exactly what is listed — and a whole lot
              faster than its price suggests.
            </p>
          </div>
        </header>

        <section className="border-t-2 border-void-line">
          {groups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-16 border-b-2 border-void-line"
            >
              <div className="md:col-span-3">
                <div className="eyebrow text-acid-yellow sticky top-8">{group.title}</div>
              </div>
              <dl className="md:col-span-9 divide-y divide-void-line">
                {group.rows.map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-4 first:pt-0"
                  >
                    <dt className="sm:col-span-4 text-sm text-zinc-soft uppercase tracking-widest">
                      {k}
                    </dt>
                    <dd className="sm:col-span-8 font-display text-xl md:text-2xl uppercase tracking-tighter text-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </section>

        <section className="py-16 md:py-24 text-center">
          <Link
            to="/acquire"
            className="group inline-flex items-center gap-6 bg-acid-yellow text-void uppercase font-display text-xl px-12 py-6 hover:-translate-y-1 hover:shadow-[12px_12px_0px_var(--color-hyper-pink)] transition-all duration-300 border-2 border-transparent hover:border-foreground"
          >
            <span>Pre-book · ₹999</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
