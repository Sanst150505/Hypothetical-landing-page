import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-void-line/80 bg-void/80 backdrop-blur-xl">
      <div className="content-wrap flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          className="font-display text-[1.45rem] tracking-tight text-foreground whitespace-nowrap"
        >
          KRAZE <span className="text-acid-yellow">K1</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-soft">
          <Link to="/edition" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Edition
          </Link>
          <Link
            to="/specifications"
            className="hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Specifications
          </Link>
          <Link to="/acquire" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Reserve
          </Link>
        </div>

        <Link to="/acquire" className="cta-secondary !min-h-11 !px-5 text-sm whitespace-nowrap">
          Reserve now
        </Link>
      </div>
    </nav>
  );
}
