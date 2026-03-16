"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge — founding urgency (no fake social proof) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/30 text-sm text-brand-amber mb-8">
          <Sparkles className="w-4 h-4 text-brand-amber" />
          <span className="font-semibold">
            Founding member spots open — 50% off forever
          </span>
        </div>

        {/* H1 — under 8 words per research (44 chars max) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-white">One post.</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">
            Every platform.
          </span>
        </h1>

        {/* Subheadline — answers "what's in it for me" in 5 seconds */}
        <p className="mt-6 text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
          Paste any content or describe a topic. AI creates native posts for
          TikTok, LinkedIn, X, Instagram, Facebook, and email — in 10 seconds.
        </p>

        {/* CTA — "Try free" not "Sign up" per research (104% higher conversion) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-teal text-brand-dark font-bold text-lg hover:bg-brand-teal/90 transition-all hover:shadow-lg hover:shadow-brand-teal/20 flex items-center justify-center gap-2"
          >
            Try free — no signup
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-center"
          >
            See pricing
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-sm text-brand-gray/60">
          No credit card required. 3 free repurposes per day.
        </p>

        {/* Platform logos row */}
        <div className="mt-12 flex items-center justify-center gap-8 opacity-40">
          <span className="text-xs uppercase tracking-widest text-brand-gray">
            Works with
          </span>
          <div className="flex items-center gap-6 text-brand-gray text-sm font-medium">
            <span>TikTok</span>
            <span>LinkedIn</span>
            <span>X</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Email</span>
          </div>
        </div>
      </div>
    </section>
  )
}
