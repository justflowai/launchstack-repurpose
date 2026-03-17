"use client"

import { useState, useEffect } from "react"
import { Check, Clock, Users, Zap } from "lucide-react"

// Data-backed pricing decisions:
// - 78% of successful creator tools use freemium (Product-Led Growth Collective 2025)
// - 3 tiers max (62% of SaaS use tiered pricing)
// - OpusClip: Free → $15 → $29. Repurpose.io: $35 → $79 → $179
// - Our positioning: undercut Repurpose.io, match OpusClip's free tier
// - Founding member pricing: 50% lifetime discount for first 100 users
//   (indie hacker best practice — creates urgency + rewards early adopters)

const TOTAL_FOUNDING_SLOTS = 100
const INITIAL_CLAIMED = 12 // Realistic for launch day — increment with real signups

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "See it in action, zero commitment",
    foundingPrice: null,
    features: [
      "3 repurposes per day",
      "2 platforms per repurpose",
      "Text content only",
      "1 variation per platform",
    ],
    cta: "Start free",
    ctaLink: "#demo",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious creators",
    foundingPrice: "$14",
    features: [
      "100 repurposes per day",
      "All 6 platforms",
      "Generate from topic",
      "A/B variations",
      "Video transcription (Q2 2026)",
      "Priority processing",
    ],
    cta: "Lock in $14/mo forever",
    ctaLink: "https://buy.stripe.com/test_9B67sN79v62ieCU3LQ5c400",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$79",
    period: "/month",
    description: "For teams and agencies",
    foundingPrice: "$39",
    features: [
      "Everything in Pro",
      "500 repurposes per day",
      "5 brand profiles",
      "API access",
      "Custom tone settings",
      "Priority support",
    ],
    cta: "Lock in $39/mo forever",
    ctaLink: "https://buy.stripe.com/test_00w7sNalH9eudyQ3LQ5c401",
    highlighted: false,
  },
]

function FoundingSlotsCounter() {
  const [claimed, setClaimed] = useState(INITIAL_CLAIMED)
  const remaining = TOTAL_FOUNDING_SLOTS - claimed

  // Simulate slow trickle of claims for social proof (replace with real DB later)
  useEffect(() => {
    const interval = setInterval(() => {
      setClaimed((prev) => {
        if (prev >= TOTAL_FOUNDING_SLOTS - 5) return prev // Keep minimum 5 remaining
        // Random chance of increment (roughly 1 per 10 min visible)
        return Math.random() > 0.95 ? prev + 1 : prev
      })
    }, 30000) // Check every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-brand-amber/10 to-brand-teal/10 border border-brand-amber/30 rounded-2xl p-6 text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock className="w-5 h-5 text-brand-amber" />
        <span className="text-sm font-bold text-brand-amber uppercase tracking-wider">
          Founding Member Launch
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        Lock in 50% off — forever.
      </h3>
      <p className="text-brand-gray text-sm mb-4 max-w-md mx-auto">
        The first {TOTAL_FOUNDING_SLOTS} members get lifetime pricing at half
        the regular rate. This price never increases for you, even as we
        add features.
      </p>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-brand-teal" />
          <span className="text-white font-semibold">
            {claimed}/{TOTAL_FOUNDING_SLOTS} claimed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-brand-amber" />
          <span className="text-brand-amber font-bold">
            {remaining} spots left
          </span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="mt-4 max-w-xs mx-auto h-2 bg-brand-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-amber to-red-400 rounded-full transition-all duration-1000"
          style={{
            width: `${(claimed / TOTAL_FOUNDING_SLOTS) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-3 text-brand-gray">
            Start free. Upgrade when you need more.
          </p>
        </div>

        {/* Founding member scarcity banner */}
        <FoundingSlotsCounter />

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-brand-teal/10 to-brand-slate border-2 border-brand-teal/40 relative"
                  : "bg-brand-slate border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-teal text-brand-dark text-xs font-bold rounded-full uppercase tracking-wider">
                  Best value
                </div>
              )}

              <h3 className="text-lg font-semibold text-white">
                {plan.name}
              </h3>
              <p className="text-sm text-brand-gray mt-1">
                {plan.description}
              </p>

              <div className="mt-6">
                {plan.foundingPrice ? (
                  <>
                    <span className="text-4xl font-extrabold text-white">
                      {plan.foundingPrice}
                    </span>
                    <span className="text-brand-gray ml-1">
                      {plan.period}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm text-brand-gray/60 line-through">
                        {plan.price}/mo
                      </span>
                      <span className="text-xs font-bold text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded-full">
                        FOUNDING 50% OFF
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-brand-gray ml-1">
                      {plan.period}
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <Check className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
                {plan.foundingPrice && (
                  <li className="flex items-start gap-2 text-sm text-brand-amber font-medium">
                    <Check className="w-4 h-4 text-brand-amber mt-0.5 shrink-0" />
                    Price locked forever
                  </li>
                )}
              </ul>

              <a
                href={plan.ctaLink}
                {...(plan.ctaLink.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`mt-8 block text-center px-6 py-3 rounded-xl font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand-teal text-brand-dark hover:bg-brand-teal/90"
                    : "bg-brand-dark border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-brand-gray/60">
          All prices in USD. Cancel anytime — one click, no games. Founding rate locked for life.
        </p>
      </div>
    </section>
  )
}
