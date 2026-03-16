"use client"

import { useState } from "react"
import { Sparkles, Loader2 } from "lucide-react"
import { PLATFORM_LIST, type Platform } from "@/lib/platforms"

type Mode = "repurpose" | "generate"

interface PlatformOutput {
  variation_a: string
  variation_b: string
}

interface RepurposeFormProps {
  onResults: (data: Record<string, PlatformOutput>) => void
}

export function RepurposeForm({ onResults }: RepurposeFormProps) {
  const [mode, setMode] = useState<Mode>("repurpose")
  const [input, setInput] = useState("")
  const [niche, setNiche] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([
    "tiktok",
    "linkedin",
    "twitter",
    "instagram",
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const togglePlatform = (p: Platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  const handleSubmit = async () => {
    if (!input.trim()) return
    if (selectedPlatforms.length === 0) {
      setError("Select at least one platform")
      return
    }

    setLoading(true)
    setError("")

    try {
      const endpoint =
        mode === "repurpose" ? "/api/repurpose" : "/api/generate"
      const body =
        mode === "repurpose"
          ? { content: input, platforms: selectedPlatforms }
          : { topic: input, niche, platforms: selectedPlatforms }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
        return
      }

      onResults(data.data.platforms)
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-brand-slate rounded-2xl border border-white/10 p-6 sm:p-8">
      {/* Mode toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode("repurpose")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "repurpose"
              ? "bg-brand-teal text-brand-dark"
              : "bg-brand-dark text-brand-gray hover:text-white"
          }`}
        >
          Repurpose content
        </button>
        <button
          onClick={() => setMode("generate")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "generate"
              ? "bg-brand-teal text-brand-dark"
              : "bg-brand-dark text-brand-gray hover:text-white"
          }`}
        >
          Generate from topic
        </button>
      </div>

      {/* Input */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          mode === "repurpose"
            ? "Paste your blog post, newsletter, transcript, or any content here..."
            : "Describe a topic or idea (e.g., '5 AI tools that save 10 hours a week')"
        }
        className="w-full h-48 bg-brand-dark rounded-xl border border-white/10 p-4 text-white placeholder:text-brand-gray/50 resize-none focus:outline-none focus:border-brand-teal/50 transition-colors"
      />

      {mode === "generate" && (
        <input
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Your niche/audience (optional)"
          className="w-full mt-3 bg-brand-dark rounded-xl border border-white/10 p-4 text-white placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-teal/50 transition-colors"
        />
      )}

      {/* Platforms */}
      <div className="mt-4">
        <p className="text-sm text-brand-gray mb-2">Platforms:</p>
        <div className="flex flex-wrap gap-2">
          {PLATFORM_LIST.map((p) => (
            <button
              key={p.id}
              onClick={() => togglePlatform(p.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedPlatforms.includes(p.id)
                  ? "text-white border-2"
                  : "bg-brand-dark text-brand-gray border border-white/10 hover:border-white/20"
              }`}
              style={
                selectedPlatforms.includes(p.id)
                  ? {
                      borderColor: p.color,
                      backgroundColor: `${p.color}15`,
                    }
                  : {}
              }
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading || !input.trim()}
        className="mt-6 px-8 py-3 rounded-xl bg-brand-teal text-brand-dark font-bold hover:bg-brand-teal/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            {mode === "repurpose" ? "Repurpose" : "Generate"}
          </>
        )}
      </button>

      {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
    </div>
  )
}
