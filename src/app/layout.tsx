import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LaunchStack Repurpose — AI Content Repurposing Engine",
  description:
    "Turn one piece of content into posts for every platform in seconds. The AI-powered Repurpose.io alternative that actually works.",
  keywords: [
    "content repurposing",
    "AI content generator",
    "repurpose.io alternative",
    "social media content",
    "content marketing AI",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
  },
  openGraph: {
    title: "LaunchStack Repurpose — AI Content Repurposing Engine",
    description:
      "Turn one piece of content into posts for every platform in seconds.",
    type: "website",
  },
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
