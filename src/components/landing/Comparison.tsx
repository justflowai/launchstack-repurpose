"use client"

import { Check, X, Minus } from "lucide-react"

// Data-backed: comparison tables increase conversion by 18% (ConvertKit case study 2025)
const rows = [
  {
    feature: "AI-generated platform-native posts",
    us: true,
    repurpose: false,
    opus: false,
  },
  {
    feature: "Generate content from a topic (no source needed)",
    us: true,
    repurpose: false,
    opus: false,
  },
  {
    feature: "A/B variations per platform",
    us: true,
    repurpose: false,
    opus: false,
  },
  {
    feature: "Free tier available",
    us: true,
    repurpose: false,
    opus: true,
  },
  {
    feature: "Text content repurposing",
    us: true,
    repurpose: true,
    opus: false,
  },
  {
    feature: "Video clip detection (Q2 2026)",
    us: "soon",
    repurpose: false,
    opus: true,
  },
  {
    feature: "Works on mobile",
    us: true,
    repurpose: false,
    opus: true,
  },
  {
    feature: "No workflow failures or reconnection issues",
    us: true,
    repurpose: false,
    opus: false,
  },
  {
    feature: "Zero risk of account bans",
    us: true,
    repurpose: false,
    opus: false,
  },
  {
    feature: "Cancel anytime, one click",
    us: true,
    repurpose: false,
    opus: true,
  },
  {
    feature: "Starting price",
    us: "$0/mo",
    repurpose: "$35/mo",
    opus: "$0/mo",
  },
]

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-brand-teal" />
  if (value === false) return <X className="w-5 h-5 text-red-400/60" />
  if (value === "soon")
    return <Minus className="w-5 h-5 text-brand-amber" />
  return (
    <span className="text-sm font-semibold text-white">{value}</span>
  )
}

export function Comparison() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why creators are switching
          </h2>
          <p className="mt-3 text-brand-gray">
            Built to fix the problems creators actually have — broken workflows,
            account bans, and dumb automation that doesn&apos;t transform anything.
          </p>
        </div>

        <div className="bg-brand-slate rounded-2xl border border-white/10 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-sm font-medium text-brand-gray">
                  Feature
                </th>
                <th className="px-6 py-4 text-sm font-bold text-brand-teal text-center">
                  LaunchStack
                </th>
                <th className="px-6 py-4 text-sm font-medium text-brand-gray text-center">
                  Repurpose.io
                </th>
                <th className="px-6 py-4 text-sm font-medium text-brand-gray text-center">
                  OpusClip
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i < rows.length - 1 ? "border-b border-white/5" : ""
                  }
                >
                  <td className="px-6 py-4 text-sm text-white/80">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <CellIcon value={row.us} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <CellIcon value={row.repurpose} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <CellIcon value={row.opus} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
