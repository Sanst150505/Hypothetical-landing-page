import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/specifications")({
  head: () => ({
    meta: [
      { title: "KRAZE K1 Specifications" },
      {
        name: "description",
        content:
          "Full technical specifications for the KRAZE K1, including performance, display, camera, battery, and connectivity.",
      },
      { property: "og:title", content: "KRAZE K1 Specifications" },
      {
        property: "og:description",
        content: "A complete, readable specification sheet for the KRAZE K1.",
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
      ["CPU", "1x 3.4GHz Cortex-X4 + 3x 2.85GHz X4 + 4x 2.0GHz A720"],
      ["GPU", "Immortalis-G720 MC12"],
      ["RAM", "12GB / 16GB LPDDR5X"],
      ["Storage", "256GB / 512GB UFS 4.0"],
      ["Cooling", "12,000mm2 vapor chamber + graphite stack"],
    ],
  },
  {
    title: "Display",
    rows: [
      ["Panel", "6.73-inch LTPO AMOLED"],
      ["Resolution", "3200 x 1440, 526ppi"],
      ["Refresh", "1-144Hz adaptive"],
      ["Brightness", "4500 nits peak, 1800 nits HBM"],
      ["Protection", "Corning Gorilla Glass Victus 2"],
      ["Touch sampling", "2160Hz in-game"],
    ],
  },
  {
    title: "Camera",
    rows: [
      ["Primary", "200MP f/1.6 OIS Sony IMX-890"],
      ["Ultrawide", "50MP f/2.0, 118 degrees"],
      ["Telephoto", "64MP f/2.4, 3.2x optical, 10x lossless"],
      ["Front", "32MP f/2.2 autofocus"],
      ["Video", "8K at 30fps, 4K HDR at 60fps, Dolby Vision"],
    ],
  },
  {
    title: "Battery and charging",
    rows: [
      ["Capacity", "5200mAh silicon-carbon"],
      ["Wired", "120W HyperCharge, 0-100% in 19 minutes"],
      ["Wireless", "50W magnetic + 10W reverse"],
      ["In box", "120W GaN charger, braided Type-C cable"],
    ],
  },
  {
    title: "Build and audio",
    rows: [
      ["Frame", "Aerospace-grade aluminum"],
      ["Back", "AG-matte Gorilla Glass"],
      ["Weight", "201g"],
      ["Thickness", "8.2mm"],
      ["Rating", "IP68 dust and water resistance"],
      ["Audio", "Stereo speakers, Hi-Res wired audio"],
    ],
  },
  {
    title: "Connectivity and OS",
    rows: [
      ["Network", "5G SA/NSA, dual VoLTE, all major Indian bands"],
      ["Wi-Fi", "Wi-Fi 7 tri-band"],
      ["Bluetooth", "5.4, LE Audio, Auracast"],
      ["Other", "NFC, UWB, eSIM + physical SIM, IR blaster"],
      ["OS", "KrazeOS on Android 15 with a clean stock feel"],
      ["Updates", "4 years OS, 6 years security"],
    ],
  },
];

function SpecificationsPage() {
  return (
    <div className="min-h-dvh bg-void text-foreground">
      <SiteNav />

      <main className="content-wrap pb-20">
        <header className="page-header">
          <div className="space-y-5">
            <div className="chip">Specifications</div>
            <h1 className="page-title max-w-[10ch]">Everything important, clearly listed.</h1>
          </div>
          <p className="lead">
            This page is structured to be readable first: strong labels, calmer sizing, and
            enough spacing for the data to breathe.
          </p>
        </header>

        <section className="section-block pt-0">
          <div className="space-y-5">
            {groups.map((group) => (
              <section key={group.title} className="surface-card px-5 py-6 md:px-8 md:py-7">
                <div className="mb-5 border-b border-void-line pb-4">
                  <div className="eyebrow text-acid-yellow">{group.title}</div>
                </div>
                <dl className="divide-y divide-void-line">
                  {group.rows.map(([key, value]) => (
                    <div key={key} className="grid gap-2 py-4 md:grid-cols-[220px_1fr] md:gap-6">
                      <dt className="info-label">{key}</dt>
                      <dd className="text-base text-foreground leading-7 md:text-[1.05rem]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </section>

        <section className="section-block pt-0">
          <Link to="/acquire" className="cta-primary">
            Reserve for Rs 999
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
