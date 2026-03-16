"use client"

import { LaunchBanner } from "@/components/landing/LaunchBanner"
import { Hero } from "@/components/landing/Hero"
import { LiveDemo } from "@/components/landing/LiveDemo"
import { Features } from "@/components/landing/Features"
import { Comparison } from "@/components/landing/Comparison"
import { Pricing } from "@/components/landing/Pricing"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"
import { Navbar } from "@/components/shared/Navbar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      {/* Sticky launch banner with scarcity — dismiss-able */}
      <LaunchBanner />
      {/* pt-8 accounts for launch banner height above the fixed navbar */}
      <div className="pt-8">
        <Navbar />
        <Hero />
        <LiveDemo />
        <Features />
        <Comparison />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
