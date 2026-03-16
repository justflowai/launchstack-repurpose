"use client"

import { useState } from "react"
import { Copy, Check, RefreshCw } from "lucide-react"
import { PLATFORM_LIST } from "@/lib/platforms"

interface PlatformOutput {
  variation_a: string
  variation_b: string
}

interface OutputCardsProps {
  results: Record<string, PlatformOutput>
}

export function OutputCards({ results }: OutputCardsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">
        Your content is ready
      </h3>

      {Object.entries(results).map(([platformId, output]) => {
        const platform = PLATFORM_LIST.find((p) => p.id === platformId)
        if (!platform) return null

        return (
          <div
            key={platformId}
            className="bg-brand-slate rounded-2xl border border-white/10 overflow-hidden"
          >
            <div
              className="px-6 py-3 border-b border-white/10"
              style={{ borderLeftColor: platform.color, borderLeftWidth: 3 }}
            >
              <span
                className="font-semibold"
                style={{ color: platform.color }}
              >
                {platform.name}
              </span>
              <span className="ml-2 text-xs text-brand-gray">
                Max {platform.charLimit} chars
              </span>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-4">
              {(["variation_a", "variation_b"] as const).map(
                (variant, i) => {
                  const text = output[variant as keyof PlatformOutput]
                  const copyId = `${platformId}-${variant}`
                  const charCount = text?.length || 0

                  return (
                    <div
                      key={variant}
                      className="bg-brand-dark rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-brand-gray uppercase">
                          Version {String.fromCharCode(65 + i)}
                        </span>
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xs ${
                              charCount > platform.charLimit
                                ? "text-red-400"
                                : "text-brand-gray/50"
                            }`}
                          >
                            {charCount}/{platform.charLimit}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(text, copyId)
                            }
                            className="text-brand-gray hover:text-brand-teal transition-colors"
                          >
                            {copiedId === copyId ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
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
  )
}
