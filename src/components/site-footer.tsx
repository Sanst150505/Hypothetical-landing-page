import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-void-line">
      <div className="content-wrap py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="font-display text-2xl text-foreground">
              KRAZE <span className="text-acid-yellow">K1</span>
            </div>
            <p className="max-w-[32rem] text-sm text-zinc-soft leading-7">
              A cleaner product showcase with structured launch details, readable
              specifications, and a reservation form that feels aligned and deliberate.
            </p>
          </div>

          <div className="space-y-4">
            <div className="eyebrow">Explore</div>
            <div className="flex flex-col gap-3 text-sm text-zinc-soft">
              <Link to="/edition" className="hover:text-foreground">
                Edition
              </Link>
              <Link to="/specifications" className="hover:text-foreground">
                Specifications
              </Link>
              <Link to="/acquire" className="hover:text-foreground">
                Reserve
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="eyebrow">Launch window</div>
            <p className="text-sm text-zinc-soft leading-7">
              Reservations are open now.
              <br />
              Shipping begins on 14 May 2026.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-void-line pt-5 text-xs text-zinc-soft md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} KRAZE</span>
          <span>K1 launch showcase</span>
        </div>
      </div>
    </footer>
  );
}
