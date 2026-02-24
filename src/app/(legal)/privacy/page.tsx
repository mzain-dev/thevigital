import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/section';

export const metadata: Metadata = {
  title: 'Privacy Policy - ROI Agency',
  description: 'Learn how ROI Agency collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Section>
        <SectionHeader
          preTitle="Legal"
          title="Privacy Policy"
          subtitle="Your privacy is important to us. This policy describes how we collect, use, and protect your information."
          align="left"
        />
        
        <div className="prose prose-gray max-w-none">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Information We Collect</h3>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, contact us, or use our services.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Company information and business details</li>
                <li>Service preferences and requirements</li>
                <li>Communication history and support requests</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">How We Use Your Information</h3>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Information Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Data Security</h3>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Your Rights</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Cookies and Tracking</h3>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Third-Party Services</h3>
              <p className="text-muted-foreground">
                Our services may contain links to third-party websites or services. We are not responsible for their privacy practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Children&apos;s Privacy</h3>
              <p className="text-muted-foreground">
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Changes to This Policy</h3>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy, please contact us at{' '}
                <a href="mailto:hello@thevigital.com" className="text-primary hover:underline">
                  hello@thevigital.com
                </a>
              </p>
            </div>

            <div className="text-sm text-muted-foreground border-t border-border pt-6">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
