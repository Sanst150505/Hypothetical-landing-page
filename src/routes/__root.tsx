import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl md:text-9xl uppercase tracking-tighter text-hyper-pink">
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl uppercase tracking-tighter text-foreground">
          Page not found
        </h2>
        <p className="mt-3 text-sm text-zinc-soft">
          This URL got lost in the drop. Head back to the launch.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-acid-yellow text-void font-display uppercase tracking-tighter px-8 py-4 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--color-hyper-pink)] transition-all duration-300 border-2 border-transparent hover:border-foreground"
          >
            <span>Back to home</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0510" },
      { title: "KRAZE — India's loudest new smartphone" },
      {
        name: "description",
        content:
          "KRAZE K1. Flagship-grade smartphone built in India, for India. 144Hz, 120W, 200MP. Pre-book Drop 01 for ₹999.",
      },
      { name: "author", content: "KRAZE" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
