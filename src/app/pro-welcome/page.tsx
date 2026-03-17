"use client"

import { useState, useEffect } from "react"
import { Check, Zap, ArrowRight, Crown } from "lucide-react"
import { activatePro, getProStatus, type PlanType } from "@/lib/pro"

export default function ProWelcome() {
  const [activated, setActivated] = useState(false)
  const [plan, setPlan] = useState<"pro" | "agency">("pro")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const planParam = params.get("plan")
    if (planParam === "agency") setPlan("agency")
    if (getProStatus()) setActivated(true)
  }, [])

  const handleActivate = () => {
    activatePro(plan as PlanType)
    setActivated(true)
  }

  const proFeatures = [
    "100 repurposes per day",
    "All 6 platforms",
    "Generate from topic",
    "A/B variations",
    "Priority processing",
  ]

  const agencyFeatures = [
    "500 repurposes per day",
    "5 brand profiles",
    "API access",
    "Custom tone settings",
    "Priority support",
  ]

  const features = plan === "agency" ? agencyFeatures : proFeatures

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {!activated ? (
          <div className="bg-brand-slate border border-brand-teal/30 rounded-2xl p-8 text-center">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-brand-teal" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Welcome, founding member!
            </h1>
            <p className="text-brand-gray mb-8">
              Thank you for your purchase. Click below to activate your{" "}
              <span className="text-brand-teal font-semibold">
                {plan === "agency" ? "Agency" : "Pro"}
              </span>{" "}
              features.
            </p>

            <div className="bg-brand-dark/50 rounded-xl p-4 mb-8 text-left">
              <p className="text-xs text-brand-gray uppercase tracking-wider mb-3">
                You&apos;re unlocking
              </p>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white">
                    <Check className="w-4 h-4 text-brand-teal shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleActivate}
              className="w-full bg-brand-teal text-brand-dark font-bold py-3 px-6 rounded-xl hover:bg-brand-teal/90 transition-colors text-lg"
            >
              Activate {plan === "agency" ? "Agency" : "Pro"} features
            </button>

            <div className="mt-4 flex gap-4 justify-center">
              <button
                onClick={() => setPlan("pro")}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  plan === "pro"
                    ? "bg-brand-teal/20 text-brand-teal"
                    : "text-brand-gray hover:text-white"
                }`}
              >
                I bought Pro
              </button>
              <button
                onClick={() => setPlan("agency")}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  plan === "agency"
                    ? "bg-brand-teal/20 text-brand-teal"
                    : "text-brand-gray hover:text-white"
                }`}
              >
                I bought Agency
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-brand-slate border border-brand-teal/30 rounded-2xl p-8 text-center">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-brand-teal" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              You&apos;re all set!
            </h1>
            <p className="text-brand-gray mb-8">
              Your {plan === "agency" ? "Agency" : "Pro"} features are now
              active. Your founding member rate is locked forever.
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-brand-teal text-brand-dark font-bold py-3 px-6 rounded-xl hover:bg-brand-teal/90 transition-colors text-lg"
            >
              Go to dashboard <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
