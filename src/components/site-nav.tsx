import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="relative z-40 flex items-center justify-between p-6 md:px-12 max-w-[1600px] mx-auto w-full">
      <Link
        to="/"
        className="font-display text-3xl tracking-tighter uppercase text-acid-yellow"
      >
        KRAZE<span className="text-hyper-pink">.</span>
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.25em]">
        <Link
          to="/edition"
          className="text-foreground/80 hover:text-hyper-pink transition-colors"
          activeProps={{ className: "text-acid-yellow" }}
        >
          The Drop
        </Link>
        <Link
          to="/specifications"
          className="text-foreground/80 hover:text-hyper-pink transition-colors"
          activeProps={{ className: "text-acid-yellow" }}
        >
          Specs
        </Link>
        <Link
          to="/acquire"
          className="text-foreground/80 hover:text-hyper-pink transition-colors"
          activeProps={{ className: "text-acid-yellow" }}
        >
          Pre-book
        </Link>
      </div>
      <Link
        to="/acquire"
        className="font-display text-xs md:text-sm uppercase bg-foreground text-void px-4 py-2 md:px-5 md:py-2 hover:bg-hyper-pink hover:text-foreground transition-colors"
      >
        Pre-book ₹999
      </Link>
    </nav>
  );
}
