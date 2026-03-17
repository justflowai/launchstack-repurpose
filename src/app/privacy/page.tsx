import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/landing/Footer"

export const metadata = {
  title: "Privacy Policy | LaunchStack AI",
  description: "LaunchStack AI privacy policy — how we handle your data.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-brand-gray text-sm mb-8">Last updated: March 17, 2026</p>

        <div className="space-y-6 text-brand-gray leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>When you use LaunchStack AI, we collect information you provide directly, such as your email address when signing up, and content you submit for repurposing. We also collect usage data including browser type, device information, and interaction patterns to improve our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our content repurposing service, process transactions, send service-related communications, and maintain the security of our platform. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage & Security</h2>
            <p>Your data is stored securely using industry-standard encryption. Content submitted for repurposing is processed in real-time and is not permanently stored on our servers beyond what is necessary to deliver the service. We use Stripe for payment processing — we never store your full credit card details.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>We use third-party services including Vercel (hosting), Stripe (payments), and AI providers for content processing. Each operates under their own privacy policies. We only share the minimum data necessary for these services to function.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cookies</h2>
            <p>We use essential cookies to maintain your session and preferences. We do not use tracking or advertising cookies. You can disable cookies in your browser settings, though this may affect service functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at support@launchstack.ai. We will respond to your request within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will notify you of significant changes via email or a notice on our website. Continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact</h2>
            <p>For privacy-related inquiries, contact us at <a href="mailto:support@launchstack.ai" className="text-brand-teal hover:underline">support@launchstack.ai</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
