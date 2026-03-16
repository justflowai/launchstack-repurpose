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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
