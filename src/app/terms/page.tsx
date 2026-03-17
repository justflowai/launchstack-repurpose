import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/landing/Footer"

export const metadata = {
  title: "Terms of Service | LaunchStack AI",
  description: "LaunchStack AI terms of service — rules for using our platform.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-brand-gray text-sm mb-8">Last updated: March 17, 2026</p>

        <div className="space-y-6 text-brand-gray leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using LaunchStack AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>LaunchStack AI is a content repurposing platform that transforms a single piece of content into optimized posts for multiple social media platforms using AI. The Service is provided on a subscription basis with free and paid tiers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate information when creating an account and promptly update it if it changes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
            <p>You agree not to use the Service to generate content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable. You may not use the Service to spam, mislead, or deceive others. We reserve the right to suspend accounts that violate these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>You retain ownership of content you submit to the Service. By using the Service, you grant us a limited license to process your content solely for the purpose of delivering the repurposing service. AI-generated output is provided for your use — you own the results.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Payments & Refunds</h2>
            <p>Paid subscriptions are billed through Stripe. Prices are in USD and displayed at checkout. Founding member pricing is locked in for the duration of your continuous subscription. Refunds are handled on a case-by-case basis — contact support@launchstack.ai within 7 days of purchase.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Service Availability</h2>
            <p>We aim to provide reliable uptime but do not guarantee uninterrupted access. The Service may be temporarily unavailable for maintenance, updates, or circumstances beyond our control. We are not liable for any losses resulting from downtime.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>LaunchStack AI is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
            <p>We may suspend or terminate your access at any time for violation of these terms. You may cancel your subscription at any time through your account settings or by contacting support.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Governing Law</h2>
            <p>These terms are governed by the laws of Singapore. Any disputes shall be resolved in the courts of Singapore.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
            <p>Questions about these terms? Contact us at <a href="mailto:support@launchstack.ai" className="text-brand-teal hover:underline">support@launchstack.ai</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
