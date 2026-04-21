import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/acquire")({
  head: () => ({
    meta: [
      { title: "Acquire — Monolith" },
      {
        name: "description",
        content:
          "Reserve a unit from Edition I of Monolith. A quiet correspondence with the atelier in Kyoto.",
      },
      { property: "og:title", content: "Acquire — Monolith" },
      {
        property: "og:description",
        content: "Reserve a unit from Edition I. We will write to you.",
      },
    ],
  }),
  component: AcquirePage,
});

function AcquirePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-dvh flex flex-col">
      <SiteNav />
      <main className="flex-1 px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
        <header className="pt-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow text-aluminum-dark mb-8">Acquire</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9] text-balance">
              We will write
              <br />
              to you.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-aluminum-dark leading-relaxed max-w-[42ch]">
              Leave a name and address. When the next wave opens, we&apos;ll send a single
              letter with a serial number reserved against your line. There is no waitlist
              tier and no upsell.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-24 border-t border-aluminum/30 pt-16">
          <div className="md:col-span-5 space-y-10">
            <Detail label="Edition" value="I — N° 0001 / 1500" />
            <Detail label="Price" value="$1,840 USD" />
            <Detail label="Includes" value="Device, braided cable, sleeve, card" />
            <Detail label="Shipping" value="From Copenhagen, worldwide" />
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-foreground/20 p-10 md:p-14">
                <div className="eyebrow text-aluminum-dark mb-6">Received</div>
                <p className="font-serif text-3xl md:text-4xl leading-[1.1] text-balance">
                  Thank you. A letter will reach you when the next wave opens.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-8"
              >
                <Field label="Full name" id="name" type="text" placeholder="Your name" />
                <Field
                  label="Postal address"
                  id="address"
                  type="text"
                  placeholder="Street, city, country"
                />
                <Field
                  label="Correspondence email"
                  id="email"
                  type="email"
                  placeholder="you@studio.com"
                />
                <div className="space-y-2">
                  <label htmlFor="note" className="block eyebrow text-aluminum-dark">
                    A note to the atelier — optional
                  </label>
                  <textarea
                    id="note"
                    rows={3}
                    placeholder="What you intend to write."
                    className="w-full bg-transparent border-b border-aluminum focus:border-foreground transition-colors py-3 outline-none font-serif text-xl placeholder:text-aluminum-dark/60 placeholder:font-sans placeholder:text-base resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-6 border border-foreground px-10 py-5 hover:bg-foreground hover:text-background transition-colors duration-500"
                >
                  <span className="eyebrow">Reserve a unit</span>
                  <span className="text-xs">→</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow text-aluminum-dark mb-3">{label}</div>
      <p className="font-serif text-2xl">{value}</p>
    </div>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block eyebrow text-aluminum-dark">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-aluminum focus:border-foreground transition-colors py-3 outline-none font-serif text-xl placeholder:text-aluminum-dark/60 placeholder:font-sans placeholder:text-base"
      />
    </div>
  );
}
