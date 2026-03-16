"use client"

import { useState } from "react"
import {
  Sparkles,
  Copy,
  Check,
  Loader2,
  ArrowRight,
  RefreshCw,
} from "lucide-react"
import { PLATFORM_LIST, type Platform } from "@/lib/platforms"

type Mode = "repurpose" | "generate"

interface PlatformOutput {
  variation_a: string
  variation_b: string
}

export function LiveDemo() {
  const [mode, setMode] = useState<Mode>("repurpose")
  const [input, setInput] = useState("")
  const [niche, setNiche] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([
    "tiktok",
    "linkedin",
    "twitter",
  ])
  const [results, setResults] = useState<Record<string, PlatformOutput> | null>(
    null
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)

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
    setResults(null)

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

      setResults(data.data.platforms)
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section id="demo" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Try it now — no signup needed
          </h2>
          <p className="mt-3 text-brand-gray">
            Paste content to repurpose, or describe a topic to generate from
            scratch.
          </p>
        </div>

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

          {/* Input area */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "repurpose"
                ? "Paste your blog post, newsletter, transcript, or any content here..."
                : "Describe a topic or idea (e.g., '5 AI tools that save 10 hours a week for content creators')"
            }
            className="w-full h-40 bg-brand-dark rounded-xl border border-white/10 p-4 text-white placeholder:text-brand-gray/50 resize-none focus:outline-none focus:border-brand-teal/50 transition-colors"
          />

          {/* Niche input (generate mode only) */}
          {mode === "generate" && (
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="Your niche/audience (optional — e.g., 'SaaS founders', 'fitness coaches')"
              className="w-full mt-3 bg-brand-dark rounded-xl border border-white/10 p-4 text-white placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-teal/50 transition-colors"
            />
          )}

          {/* Platform selector */}
          <div className="mt-4">
            <p className="text-sm text-brand-gray mb-2">
              Select platforms:
            </p>
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
            className="mt-6 w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-teal text-brand-dark font-bold hover:bg-brand-teal/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                {mode === "repurpose"
                  ? "Repurpose now"
                  : "Generate posts"}
              </>
            )}
          </button>

          {error && (
            <p className="mt-4 text-red-400 text-sm">{error}</p>
          )}
        </div>

        {/* Results */}
        {results && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                Your posts are ready
              </h3>
              <button
                onClick={() => {
                  setResults(null)
                  setInput("")
                }}
                className="text-sm text-brand-gray hover:text-white flex items-center gap-1"
              >
                <RefreshCw className="w-4 h-4" />
                Start over
              </button>
            </div>

            {Object.entries(results).map(([platformId, output]) => {
              const platform = PLATFORM_LIST.find((p) => p.id === platformId)
              if (!platform) return null

              return (
                <div
                  key={platformId}
                  className="bg-brand-slate rounded-2xl border border-white/10 overflow-hidden"
                >
                  {/* Platform header */}
                  <div
                    className="px-6 py-3 border-b border-white/10 flex items-center gap-2"
                    style={{ borderLeftColor: platform.color, borderLeftWidth: 3 }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: platform.color }}
                    >
                      {platform.name}
                    </span>
                  </div>

                  {/* Variations */}
                  <div className="p-6 grid md:grid-cols-2 gap-4">
                    {(["variation_a", "variation_b"] as const).map(
                      (variant, i) => {
                        const text =
                          output[variant as keyof PlatformOutput]
                        const copyId = `${platformId}-${variant}`
                        return (
                          <div
                            key={variant}
                            className="bg-brand-dark rounded-xl p-4 relative group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-brand-gray uppercase">
                                Version {String.fromCharCode(65 + i)}
                              </span>
                              <button
                                onClick={() =>
                                  copyToClipboard(text, copyId)
                                }
                                className="text-brand-gray hover:text-brand-teal transition-colors"
                                title="Copy to clipboard"
                              >
                                {copiedId === copyId ? (
                                  <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                            <p className="text-sm text-white/90 whitespace-pre-wrap leading-relaxed">
                              {text}
                            </p>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
