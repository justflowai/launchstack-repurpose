export type Platform =
  | "tiktok"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "email"

export interface PlatformConfig {
  id: Platform
  name: string
  icon: string
  charLimit: number
  tone: string
  formatRules: string
  color: string
}

export const PLATFORMS: Record<Platform, PlatformConfig> = {
  tiktok: {
    id: "tiktok",
    name: "TikTok / Reels",
    icon: "Video",
    charLimit: 2200,
    tone: "Casual, punchy, hook-first. Speak like a friend sharing a secret.",
    formatRules:
      "Start with a scroll-stopping hook (question or bold claim). Short paragraphs. 3-5 relevant hashtags. End with CTA (follow/save/share). Use line breaks for readability.",
    color: "#00f2ea",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    icon: "Briefcase",
    charLimit: 3000,
    tone: "Professional, insight-led. Share expertise without being corporate.",
    formatRules:
      "Open with a bold first line (the hook that shows in preview). Use short paragraphs (1-2 sentences each). No hashtags in body. End with an engagement question. No emojis except sparingly.",
    color: "#0A66C2",
  },
  twitter: {
    id: "twitter",
    name: "X / Twitter",
    icon: "Twitter",
    charLimit: 280,
    tone: "Punchy, quotable, slightly provocative. Every word earns its place.",
    formatRules:
      "Max 280 characters for single tweet. For threads: each tweet standalone valuable, number them, hook in tweet 1. 1-2 hashtags max. No filler.",
    color: "#1DA1F2",
  },
  instagram: {
    id: "instagram",
    name: "Instagram",
    icon: "Camera",
    charLimit: 2200,
    tone: "Visual-first caption. Conversational but polished.",
    formatRules:
      "Hook in first line (shows in preview). Use line breaks. 5-10 hashtags at the END (after main content). CTA: save this post / share with someone who needs this. Carousel script format if applicable.",
    color: "#E4405F",
  },
  facebook: {
    id: "facebook",
    name: "Facebook",
    icon: "ThumbsUp",
    charLimit: 2000,
    tone: "Conversational, storytelling. Like talking to a friend at dinner.",
    formatRules:
      "Storytelling format preferred. Ask a question to drive comments. No hashtags. Keep paragraphs short. Personal angle when possible.",
    color: "#1877F2",
  },
  email: {
    id: "email",
    name: "Email Newsletter",
    icon: "Mail",
    charLimit: 5000,
    tone: "Direct, valuable, personal. Like a smart friend sending you a tip.",
    formatRules:
      "Subject line (max 50 chars, curiosity or benefit-driven). Preview text (max 90 chars). 3 short paragraphs max. Clear single CTA. P.S. line with bonus tip or urgency.",
    color: "#EA4335",
  },
}

export const PLATFORM_LIST = Object.values(PLATFORMS)
