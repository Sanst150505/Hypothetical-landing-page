import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="flex items-center justify-between p-6 md:p-10 lg:px-16 max-w-[1600px] mx-auto w-full">
      <Link to="/" className="eyebrow text-foreground">
        Monolith
      </Link>
      <div className="hidden md:flex gap-10 eyebrow text-aluminum-dark">
        <Link
          to="/edition"
          className="hover:text-foreground transition-colors duration-500"
          activeProps={{ className: "text-foreground" }}
        >
          Edition I
        </Link>
        <Link
          to="/specifications"
          className="hover:text-foreground transition-colors duration-500"
          activeProps={{ className: "text-foreground" }}
        >
          Specifications
        </Link>
        <Link
          to="/acquire"
          className="hover:text-foreground transition-colors duration-500"
          activeProps={{ className: "text-foreground" }}
        >
          Acquire
        </Link>
      </div>
      <Link
        to="/acquire"
        className="hidden md:inline-flex eyebrow border-b border-foreground/20 pb-1 hover:border-foreground transition-colors duration-500"
      >
        Reserve
      </Link>
    </nav>
  );
}
