"use client"

import { Zap, RefreshCw, BarChart3, Clock, Globe, Palette } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "10-second repurposing",
    description:
      "Paste any content — blog post, transcript, newsletter — and get platform-native posts for 6 platforms instantly.",
  },
  {
    icon: RefreshCw,
    title: "Generate from scratch",
    description:
      "No content yet? Describe a topic and your niche. AI creates a full set of original posts you can post immediately.",
  },
  {
    icon: BarChart3,
    title: "A/B variations included",
    description:
      "Every platform gets 2 distinct variations — different angles, not just different words. Test what resonates.",
  },
  {
    icon: Globe,
    title: "6 platforms, one click",
    description:
      "TikTok, LinkedIn, X, Instagram, Facebook, and email — each post written in the native tone and format of that platform.",
  },
  {
    icon: Clock,
    title: "Save 5+ hours per week",
    description:
      "Stop manually rewriting the same content for each platform. One input, instant output for everywhere you post.",
  },
  {
    icon: Palette,
    title: "Actually sounds human",
    description:
      "No robotic AI-speak. Posts feel like they were written by someone who lives on each platform — because the prompts are tuned by platform experts.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-3 text-brand-gray max-w-xl mx-auto">
            Built for creators and marketers who want results, not another
            bloated tool to learn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-brand-slate rounded-2xl border border-white/5 p-6 hover:border-brand-teal/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-colors">
                <feature.icon className="w-5 h-5 text-brand-teal" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
