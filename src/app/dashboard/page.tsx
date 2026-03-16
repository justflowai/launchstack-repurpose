"use client"

import { useState } from "react"
import { Navbar } from "@/components/shared/Navbar"
import { RepurposeForm } from "@/components/dashboard/RepurposeForm"
import { OutputCards } from "@/components/dashboard/OutputCards"
import { UsageBar } from "@/components/dashboard/UsageBar"

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
  const usageLimit = 5 // Free tier

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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-sm text-brand-gray mt-1">
                Repurpose or generate content for every platform
              </p>
            </div>
            <UsageBar used={usageCount} limit={usageLimit} />
          </div>

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
