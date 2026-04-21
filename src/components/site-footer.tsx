export function SiteFooter() {
  return (
    <footer className="border-t border-aluminum/40 px-6 md:px-10 lg:px-16 py-16 max-w-[1600px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-6">
          <div className="eyebrow text-foreground">Monolith</div>
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-[1.1] max-w-[20ch]">
            A quieter way to think.
          </p>
        </div>
        <div className="md:col-span-3 space-y-4">
          <div className="eyebrow text-aluminum-dark">Object</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Edition I</li>
            <li>Specifications</li>
            <li>Materials</li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="eyebrow text-aluminum-dark">Studio</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Atelier</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="eyebrow text-aluminum-dark">Origin</div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Designed in Copenhagen.
            <br />
            Machined in Kyoto.
          </p>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-aluminum/30 flex flex-col md:flex-row justify-between gap-4 eyebrow text-aluminum-dark">
        <span>© {new Date().getFullYear()} Monolith Atelier</span>
        <span>Edition I — N° 0001 / 1500</span>
      </div>
    </footer>
  );
}
