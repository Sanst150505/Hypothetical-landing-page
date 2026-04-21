import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/acquire")({
  head: () => ({
    meta: [
      { title: "Pre-book — KRAZE K1" },
      {
        name: "description",
        content:
          "Pre-book the KRAZE K1 for a fully refundable ₹999. Free pan-India shipping, no-cost EMI, delivery from 14 May 2026.",
      },
      { property: "og:title", content: "Pre-book — KRAZE K1" },
      {
        property: "og:description",
        content: "Lock your K1 for ₹999. Refundable. Deliverable across India.",
      },
    ],
  }),
  component: AcquirePage,
});

const cities = [
  "Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Kolkata",
  "Ahmedabad", "Jaipur", "Lucknow", "Kochi", "Indore", "Chandigarh", "Guwahati",
  "Other — ship to my pincode",
];

const variants = [
  { id: "12-256", label: "12GB / 256GB", price: "₹29,999" },
  { id: "16-256", label: "16GB / 256GB", price: "₹31,999" },
  { id: "16-512", label: "16GB / 512GB", price: "₹33,999" },
];

function AcquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [variant, setVariant] = useState("16-256");

  return (
    <div className="bg-void text-foreground min-h-dvh flex flex-col">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] mix-blend-screen noise" />
      <SiteNav />

      <main className="flex-1 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <header className="pt-12 md:pt-16 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow text-acid-yellow mb-8">Pre-book · Drop 01</div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9] uppercase tracking-tighter text-balance">
              Lock it in.
              <br />
              <span className="text-hyper-pink">₹999.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-zinc-soft leading-relaxed max-w-[42ch]">
              Fully refundable. Fully adjustable against the final price. We&apos;ll message
              you on WhatsApp 48 hours before your city&apos;s delivery window opens.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-24 border-t-2 border-void-line pt-12">
          <aside className="md:col-span-5 space-y-10">
            <Detail label="Pre-book amount" value="₹999" />
            <Detail label="Ships from" value="14 May 2026" />
            <Detail label="In the box" value="K1, 120W GaN charger, braided Type-C, clear case" />
            <Detail label="Shipping" value="Free across India" />
            <Detail label="EMI" value="No-cost EMI from 3 to 24 months" />
          </aside>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="border-2 border-acid-yellow bg-void-surface p-10 md:p-14">
                <div className="eyebrow text-acid-yellow mb-6">You&apos;re in.</div>
                <p className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-[1] text-balance text-foreground">
                  Check WhatsApp. Your pre-book code just dropped.
                </p>
                <p className="mt-6 text-sm text-zinc-soft max-w-[40ch]">
                  We&apos;ll ping you 48 hours before your city&apos;s delivery wave opens
                  so you can confirm the address and finalise payment.
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
                {/* Variant picker */}
                <div className="space-y-3">
                  <label className="block eyebrow text-zinc-soft">Pick your variant</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {variants.map((v) => (
                      <button
                        type="button"
                        key={v.id}
                        onClick={() => setVariant(v.id)}
                        className={`text-left p-4 border-2 transition-colors ${
                          variant === v.id
                            ? "border-acid-yellow bg-acid-yellow/5 text-foreground"
                            : "border-void-line bg-void-surface text-foreground/80 hover:border-foreground/40"
                        }`}
                      >
                        <div className="font-display text-lg uppercase tracking-tighter">
                          {v.label}
                        </div>
                        <div className="eyebrow text-zinc-soft mt-2">{v.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Full name" id="name" type="text" placeholder="As on your Aadhaar / PAN" />
                <Field
                  label="WhatsApp number"
                  id="phone"
                  type="tel"
                  placeholder="+91 98xxx xxxxx"
                />
                <Field label="Email" id="email" type="email" placeholder="you@domain.in" />

                <div className="space-y-2">
                  <label htmlFor="city" className="block eyebrow text-zinc-soft">
                    Delivery city
                  </label>
                  <select
                    id="city"
                    required
                    defaultValue=""
                    className="w-full bg-void-surface border-2 border-void-line focus:border-acid-yellow transition-colors py-3 px-4 outline-none font-display text-lg uppercase tracking-tighter text-foreground"
                  >
                    <option value="" disabled>
                      Pick your city
                    </option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="flex items-start gap-3 text-sm text-zinc-soft cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 size-4 accent-acid-yellow"
                  />
                  <span>
                    I agree to KRAZE&apos;s refund policy. ₹999 is fully refundable until the
                    moment I confirm the final order.
                  </span>
                </label>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-6 bg-acid-yellow text-void uppercase font-display text-xl px-12 py-6 hover:-translate-y-1 hover:shadow-[12px_12px_0px_var(--color-hyper-pink)] transition-all duration-300 border-2 border-transparent hover:border-foreground"
                >
                  <span>Pay ₹999 & lock it</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <p className="text-xs text-zinc-soft">
                  You&apos;ll be redirected to a secure UPI / card / netbanking gateway. Test
                  mode — no charges.
                </p>
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
      <div className="eyebrow text-zinc-soft mb-3">{label}</div>
      <p className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-foreground">
        {value}
      </p>
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
      <label htmlFor={id} className="block eyebrow text-zinc-soft">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-void-surface border-2 border-void-line focus:border-acid-yellow transition-colors py-3 px-4 outline-none font-display text-lg uppercase tracking-tighter text-foreground placeholder:text-zinc-soft/50 placeholder:font-sans placeholder:text-base placeholder:normal-case"
      />
    </div>
  );
}
