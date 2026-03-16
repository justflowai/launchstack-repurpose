"use client"

import { useState } from "react"
import { X, Flame } from "lucide-react"

export function LaunchBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-brand-amber to-orange-500 text-brand-dark">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-3 relative">
        <Flame className="w-4 h-4 shrink-0" />
        <p className="text-sm font-semibold text-center">
          Launch week: First 100 founding members get{" "}
          <span className="underline underline-offset-2">
            50% off forever
          </span>
          .{" "}
          <a href="#pricing" className="font-bold hover:opacity-80">
            Claim your spot &rarr;
          </a>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-60"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
