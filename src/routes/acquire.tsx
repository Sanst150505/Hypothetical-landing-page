import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/acquire")({
  head: () => ({
    meta: [
      { title: "Reserve KRAZE K1" },
      {
        name: "description",
        content:
          "Reserve the KRAZE K1 with a refundable Rs 999 payment and choose your delivery city.",
      },
      { property: "og:title", content: "Reserve KRAZE K1" },
      {
        property: "og:description",
        content: "Reservation flow for the KRAZE K1 with clear pricing and delivery details.",
      },
    ],
  }),
  component: AcquirePage,
});

const cities = [
  "Mumbai",
  "Delhi NCR",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kochi",
  "Indore",
  "Chandigarh",
  "Guwahati",
  "Other - ship to my pincode",
];

const variants = [
  { id: "12-256", label: "12GB / 256GB", price: "Rs 29,999" },
  { id: "16-256", label: "16GB / 256GB", price: "Rs 31,999" },
  { id: "16-512", label: "16GB / 512GB", price: "Rs 33,999" },
];

function AcquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [variant, setVariant] = useState("16-256");

  return (
    <div className="min-h-dvh bg-void text-foreground">
      <SiteNav />

      <main className="content-wrap pb-20">
        <header className="page-header">
          <div className="space-y-5">
            <div className="chip">Reservation</div>
            <h1 className="page-title max-w-[10ch]">Reserve now. Pay Rs 999.</h1>
          </div>
          <p className="lead">
            The form is cleaned up to feel more structured: readable fields, clear labels,
            and balanced spacing from top to bottom.
          </p>
        </header>

        <section className="section-block pt-0">
          <div className="grid gap-6 lg:grid-cols-[330px_1fr]">
            <aside className="surface-card px-6 py-7">
              <div className="space-y-5">
                <Info label="Reservation amount" value="Rs 999" />
                <Info label="Shipping begins" value="14 May 2026" />
                <Info label="In the box" value="K1, 120W charger, cable, clear case" />
                <Info label="Shipping" value="Free across India" />
                <Info label="EMI" value="No-cost EMI options available" />
              </div>
            </aside>

            <div className="surface-card px-6 py-7 md:px-8 md:py-8">
              {submitted ? (
                <div className="rounded-[1.25rem] border border-acid-yellow/50 bg-acid-yellow/6 p-6 md:p-8">
                  <div className="eyebrow text-acid-yellow mb-4">Reservation received</div>
                  <p className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.02]">
                    Your KRAZE K1 request is in.
                  </p>
                  <p className="mt-4 max-w-[34rem] text-sm leading-7 text-zinc-soft md:text-base">
                    A confirmation message will follow before your city delivery window
                    opens. This demo form does not charge real money.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <label className="info-label">Choose a variant</label>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {variants.map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setVariant(item.id)}
                          className={`rounded-[1.15rem] border p-4 text-left ${
                            variant === item.id
                              ? "border-acid-yellow bg-acid-yellow/7"
                              : "border-void-line bg-white/[0.02] hover:border-white/20"
                          }`}
                        >
                          <div className="font-display text-[1.1rem] leading-tight">{item.label}</div>
                          <div className="mt-2 text-sm text-zinc-soft">{item.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" id="name" type="text" placeholder="As on your ID" />
                    <Field
                      label="WhatsApp number"
                      id="phone"
                      type="tel"
                      placeholder="+91 98xxx xxxxx"
                    />
                  </div>

                  <Field label="Email" id="email" type="email" placeholder="you@domain.in" />

                  <div className="space-y-2">
                    <label htmlFor="city" className="info-label">
                      Delivery city
                    </label>
                    <select id="city" required defaultValue="" className="input-shell">
                      <option value="" disabled>
                        Pick your city
                      </option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-void-line bg-white/[0.02] px-4 py-4 text-sm leading-7 text-zinc-soft">
                    <input type="checkbox" required className="mt-1 size-4 accent-acid-yellow" />
                    <span>
                      I understand the Rs 999 reservation amount is refundable until the final
                      order is confirmed.
                    </span>
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" className="cta-primary">
                      Submit reservation
                    </button>
                    <p className="text-sm text-zinc-soft">
                      Demo flow only. No real payment is collected.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-void-line pb-4 last:border-b-0 last:pb-0">
      <div className="info-label">{label}</div>
      <div className="mt-2 font-display text-[1.28rem] leading-tight">{value}</div>
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
      <label htmlFor={id} className="info-label">
        {label}
      </label>
      <input id={id} type={type} required placeholder={placeholder} className="input-shell" />
    </div>
  );
}
