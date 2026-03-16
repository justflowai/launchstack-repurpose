"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How is this different from Repurpose.io?",
    a: "Repurpose.io pipes content between platforms — it's automation without intelligence. LaunchStack uses AI to actually transform your content for each platform's native format, tone, and audience. We also generate content from scratch — something Repurpose.io can't do. And unlike Repurpose.io, there are no workflows that break or connections that randomly disconnect.",
  },
  {
    q: "Will this get my social media accounts banned?",
    a: "No. Unlike tools that auto-post via third-party APIs (which platforms flag as 'automatic behavior'), LaunchStack generates platform-native copy that you post yourself. You keep full control of your accounts. Zero risk of suspension.",
  },
  {
    q: "Does it actually sound human?",
    a: "Yes. Each platform has custom tone and format rules built into the AI. A LinkedIn post reads like a professional insight, a TikTok caption reads like a creator sharing a tip. No robotic rewrites — real platform-native transformation.",
  },
  {
    q: "Can I actually cancel, or will you make it difficult?",
    a: "One click. No calls, no guilt trips, no 3 rounds of support chat. Cancel from your dashboard instantly. We don't retain your payment info after cancellation. We build a tool people want to keep — not one they're trapped in.",
  },
  {
    q: "Can I try it before paying?",
    a: "Absolutely. The free tier gives you 3 repurposes per day with 2 platforms — no credit card, no signup required. Try the live demo right on this page.",
  },
  {
    q: "What kind of content can I repurpose?",
    a: "Anything text-based: blog posts, newsletter editions, YouTube transcripts, podcast transcripts, long tweets, product descriptions, press releases. Video transcription is coming Q2 2026.",
  },
  {
    q: "What platforms do you support?",
    a: "TikTok/Reels, LinkedIn, X (Twitter), Instagram, Facebook, and Email newsletters. More platforms coming based on user requests.",
  },
  {
    q: "Can I use this for clients?",
    a: "Yes. The Agency plan ($79/mo, or $39/mo for founding members) lets you manage 5 brand profiles with custom tone settings — perfect for freelancers and agencies managing multiple clients.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Questions? Covered.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-brand-slate rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-white text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gray shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
