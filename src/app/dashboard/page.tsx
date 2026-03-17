"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/shared/Navbar"
import { RepurposeForm } from "@/components/dashboard/RepurposeForm"
import { OutputCards } from "@/components/dashboard/OutputCards"
import { UsageBar } from "@/components/dashboard/UsageBar"
import { getProStatus, getPlanType, getDailyLimit, getPlanLabel } from "@/lib/pro"
import { Crown } from "lucide-react"

interface PlatformOutput {
  variation_a: string
  variation_b: string
}

export default function DashboardPage() {
  const [results, setResults] = useState<Record<
    string,
    PlatformOutput
  > | null>(null)
  const [usageCount, setUsageCount] = useState(0)
  const [isPro, setIsPro] = useState(false)
  const [planLabel, setPlanLabel] = useState("Free")
  const [usageLimit, setUsageLimit] = useState(3)

  useEffect(() => {
    const pro = getProStatus()
    const plan = getPlanType()
    setIsPro(pro)
    setPlanLabel(getPlanLabel(plan))
    setUsageLimit(getDailyLimit(plan))
  }, [])

  const handleResults = (data: Record<string, PlatformOutput>) => {
    setResults(data)
    setUsageCount((prev) => prev + 1)
  }

  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                {isPro && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-teal/20 text-brand-teal border border-brand-teal/30">
                    <Crown className="w-3 h-3" />
                    {planLabel}
                  </span>
                )}
              </div>
              <p className="text-sm text-brand-gray mt-1">
                Repurpose or generate content for every platform
              </p>
            </div>
            <UsageBar used={usageCount} limit={usageLimit} planLabel={planLabel} />
          </div>

          {/* Upgrade prompt for free users */}
          {!isPro && usageCount >= 2 && (
            <div className="mb-6 bg-gradient-to-r from-brand-amber/10 to-brand-teal/10 border border-brand-amber/30 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-white font-medium">
                  Running low on free repurposes?
                </p>
                <p className="text-xs text-brand-gray mt-0.5">
                  Pro members get 100/day + generate from topic
                </p>
              </div>
              <a
                href="/#pricing"
                className="px-4 py-2 bg-brand-teal text-brand-dark text-sm font-semibold rounded-lg hover:bg-brand-teal/90 transition-colors shrink-0"
              >
                Upgrade
              </a>
            </div>
          )}

          {/* Main form */}
          <RepurposeForm onResults={handleResults} />

          {/* Output */}
          {results && (
            <div className="mt-8">
              <OutputCards results={results} />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
