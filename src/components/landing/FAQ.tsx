"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How is this different from Repurpose.io?",
    a: "Repurpose.io pipes content between platforms — it's essentially automation without intelligence. LaunchStack uses AI to actually transform your content for each platform's native format, tone, and audience. We also generate content from scratch — something Repurpose.io can't do at all.",
  },
  {
    q: "Does it actually sound human?",
    a: "Yes. Each platform has custom tone and format rules built into the AI. A LinkedIn post reads like a professional insight, a TikTok caption reads like a creator sharing a tip. No robotic \"As an AI\" language.",
  },
  {
    q: "What kind of content can I repurpose?",
    a: "Anything text-based: blog posts, newsletter editions, YouTube transcripts, podcast transcripts, long tweets, product descriptions, press releases. Video transcription is coming soon.",
  },
  {
    q: "Can I try it before paying?",
    a: "Absolutely. The free tier gives you 5 repurposes per day with 3 platforms — no credit card, no signup required to try the demo on this page.",
  },
  {
    q: "What platforms do you support?",
    a: "TikTok/Reels, LinkedIn, X (Twitter), Instagram, Facebook, and Email newsletters. More platforms coming based on user requests.",
  },
  {
    q: "Can I use this for clients?",
    a: "Yes. The Agency plan ($49/mo) lets you manage 5 brand profiles with custom tone settings — perfect for freelancers and agencies managing multiple clients.",
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
