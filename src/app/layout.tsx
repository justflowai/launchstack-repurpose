import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LaunchStack Repurpose — AI Content Repurposing Engine",
  description:
    "Turn one piece of content into platform-native posts for TikTok, LinkedIn, X, Instagram, Facebook, and email in 10 seconds. The AI-powered Repurpose.io alternative with a free tier.",
  keywords: [
    "content repurposing",
    "AI content generator",
    "repurpose.io alternative",
    "social media content",
    "content marketing AI",
    "AI social media posts",
    "repurpose content AI",
  ],
  openGraph: {
    title: "LaunchStack Repurpose — One Post. Every Platform.",
    description:
      "AI transforms your content into platform-native posts for 6 platforms in 10 seconds. Free tier available. No broken workflows. No account bans.",
    type: "website",
    url: "https://launchstack-repurpose.vercel.app",
    siteName: "LaunchStack Repurpose",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchStack Repurpose — One Post. Every Platform.",
    description:
      "AI transforms your content into platform-native posts for 6 platforms in 10 seconds. Try free — no signup required.",
  },
  metadataBase: new URL("https://launchstack-repurpose.vercel.app"),
  alternates: {
    canonical: "https://launchstack-repurpose.vercel.app",
  },
}

// JSON-LD structured data for LLM search engines and Google rich results
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LaunchStack AI",
  url: "https://launchstack-repurpose.vercel.app",
  logo: "https://launchstack-repurpose.vercel.app/icon.svg",
  email: "support@launchstack.ai",
  sameAs: [],
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LaunchStack Repurpose",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered content repurposing engine. Turn one piece of content into platform-native posts for TikTok, LinkedIn, X, Instagram, Facebook, and email in 10 seconds.",
  url: "https://launchstack-repurpose.vercel.app",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      description:
        "3 repurposes per day, 2 platforms, 1 variation per platform. No credit card required.",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "29",
      priceCurrency: "USD",
      description:
        "100 repurposes per day, all 6 platforms, A/B variations, generate from topic. Founding member price: $14/month locked forever.",
    },
    {
      "@type": "Offer",
      name: "Agency",
      price: "79",
      priceCurrency: "USD",
      description:
        "500 repurposes per day, 5 brand profiles, API access, custom tone settings. Founding member price: $39/month locked forever.",
    },
  ],
  featureList: [
    "AI-generated platform-native posts",
    "Generate content from a topic without source material",
    "A/B variations per platform",
    "6 platforms: TikTok, LinkedIn, X, Instagram, Facebook, Email",
    "10-second content repurposing",
    "No account ban risk",
    "No broken workflows or reconnection issues",
    "One-click cancellation",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is LaunchStack Repurpose different from Repurpose.io?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Repurpose.io pipes content between platforms — it's automation without intelligence. LaunchStack uses AI to actually transform your content for each platform's native format, tone, and audience. We also generate content from scratch — something Repurpose.io can't do. And unlike Repurpose.io, there are no workflows that break or connections that randomly disconnect.",
      },
    },
    {
      "@type": "Question",
      name: "Will LaunchStack Repurpose get my social media accounts banned?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Unlike tools that auto-post via third-party APIs (which platforms flag as 'automatic behavior'), LaunchStack generates platform-native copy that you post yourself. You keep full control of your accounts. Zero risk of suspension.",
      },
    },
    {
      "@type": "Question",
      name: "Does LaunchStack Repurpose content actually sound human?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each platform has custom tone and format rules built into the AI. A LinkedIn post reads like a professional insight, a TikTok caption reads like a creator sharing a tip. No robotic rewrites — real platform-native transformation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I actually cancel LaunchStack Repurpose, or will you make it difficult?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One click. No calls, no guilt trips, no 3 rounds of support chat. Cancel from your dashboard instantly. We don't retain your payment info after cancellation. We build a tool people want to keep — not one they're trapped in.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try LaunchStack Repurpose before paying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The free tier gives you 3 repurposes per day with 2 platforms — no credit card, no signup required. Try the live demo right on the website.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of content can I repurpose with LaunchStack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anything text-based: blog posts, newsletter editions, YouTube transcripts, podcast transcripts, long tweets, product descriptions, press releases. Video transcription is coming Q2 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What social media platforms does LaunchStack Repurpose support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TikTok/Reels, LinkedIn, X (Twitter), Instagram, Facebook, and Email newsletters. More platforms coming based on user requests.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use LaunchStack Repurpose for client work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Agency plan ($79/mo, or $39/mo for founding members) lets you manage 5 brand profiles with custom tone settings — perfect for freelancers and agencies managing multiple clients.",
      },
    },
  ],
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LaunchStack Repurpose",
  url: "https://launchstack-repurpose.vercel.app",
  description:
    "AI-powered content repurposing engine. Turn one piece of content into platform-native posts for 6 social media platforms in 10 seconds.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://launchstack-repurpose.vercel.app/#demo",
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
