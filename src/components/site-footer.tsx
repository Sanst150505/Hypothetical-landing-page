import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t-2 border-void-line px-6 md:px-12 py-16 max-w-[1600px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-6">
          <div className="font-display text-4xl tracking-tighter uppercase text-acid-yellow">
            KRAZE<span className="text-hyper-pink">.</span>
          </div>
          <p className="font-display text-2xl md:text-3xl text-foreground leading-[1] uppercase max-w-[20ch]">
            Born loud.
            <br />
            Built in India.
          </p>
        </div>
        <div className="md:col-span-3 space-y-4">
          <div className="eyebrow text-zinc-soft">Device</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>
              <Link to="/edition" className="hover:text-hyper-pink transition-colors">
                The Drop
              </Link>
            </li>
            <li>
              <Link to="/specifications" className="hover:text-hyper-pink transition-colors">
                Specs
              </Link>
            </li>
            <li>
              <Link to="/acquire" className="hover:text-hyper-pink transition-colors">
                Pre-book
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="eyebrow text-zinc-soft">Service</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Warranty</li>
            <li>Support</li>
            <li>Stores</li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="eyebrow text-zinc-soft">Origin</div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Designed in Bengaluru.
            <br />
            Built in Noida.
          </p>
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-void-line flex flex-col md:flex-row justify-between gap-4 eyebrow text-zinc-soft">
        <span>© {new Date().getFullYear()} KRAZE Mobility Pvt. Ltd.</span>
        <span>Drop 01 — Made for India</span>
      </div>
    </footer>
  );
}
