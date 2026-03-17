"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap, Crown } from "lucide-react"
import { getProStatus, getPlanLabel, getPlanType } from "@/lib/pro"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const [planLabel, setPlanLabel] = useState("")h

  useEffect(() => {
    const pro = getProStatus()
    setIsPro(pro)
    if (pro) setPlanLabel(getPlanLabel(getPlanType()))
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-deep to-brand-teal flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">
              LaunchStack AI
            </span>
            {isPro && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-teal/20 text-brand-teal border border-brand-teal/30">
                <Crown className="w-2.5 h-2.5" />
                {planLabel}
              </span>
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#demo"
              className="text-sm text-brand-gray hover:text-white transition-colors"
            >
              Try it
            </a>
            <a
              href="/#features"
              className="text-sm text-brand-gray hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="/#pricing"
              className="text-sm text-brand-gray hover:text-white transition-colors"
            >
              Pricing
            </a>
            {isPro ? (
              <a
                href="/dashboard"
                className="px-4 py-2 rounded-lg bg-brand-teal text-brand-dark font-semibold text-sm hover:bg-brand-teal/90 transition-colors"
              >
                Dashboard
              </a>
            ) : (
              <a
                href="/#demo"
                className="px-4 py-2 rounded-lg bg-brand-teal text-brand-dark font-semibold text-sm hover:bg-brand-teal/90 transition-colors"
              >
                Try free
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a
              href="/#demo"
              className="block text-sm text-brand-gray hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Try it
            </a>
            <a
              href="/#features"
              className="block text-sm text-brand-gray hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="/#pricing"
              className="block text-sm text-brand-gray hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            {isPro ? (
              <a
                href="/dashboard"
                className="block px-4 py-2 rounded-lg bg-brand-teal text-brand-dark font-semibold text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                Dashboard
              </a>
            ) : (
              <a
                href="/#demo"
                className="block px-4 py-2 rounded-lg bg-brand-teal text-brand-dark font-semibold text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                Try free
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
