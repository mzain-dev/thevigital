import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/section';

export const metadata: Metadata = {
  title: 'Terms of Service - ROI Agency',
  description: 'Read ROI Agency\'s terms of service. Understand the terms and conditions for using our services and platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Section>
        <SectionHeader
          preTitle="Legal"
          title="Terms of Service"
          subtitle="Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms."
          align="left"
        />
        
        <div className="prose prose-gray max-w-none">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By accessing and using ROI Agency&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Description of Service</h3>
              <p className="text-muted-foreground mb-4">
                ROI Agency provides digital marketing, strategic consulting, analytics, and related services to help businesses maximize their return on investment.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Strategic consulting and business analysis</li>
                <li>Digital marketing and advertising services</li>
                <li>Website development and optimization</li>
                <li>SEO and content marketing</li>
                <li>Analytics and performance reporting</li>
                <li>Brand strategy and development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">User Responsibilities</h3>
              <p className="text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any harmful or malicious activities</li>
                <li>Respect intellectual property rights</li>
                <li>Cooperate with our team during service delivery</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Payment Terms</h3>
              <p className="text-muted-foreground mb-4">
                Payment terms vary by service and are outlined in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Services are billed according to agreed-upon schedules</li>
                <li>Payment is due upon receipt of invoice</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are handled on a case-by-case basis</li>
                <li>Price changes will be communicated in advance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Intellectual Property</h3>
              <p className="text-muted-foreground">
                All content, features, and functionality of our services are owned by ROI Agency and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Confidentiality</h3>
              <p className="text-muted-foreground">
                We maintain strict confidentiality regarding your business information and trade secrets. We will not disclose confidential information to third parties without your consent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Service Availability</h3>
              <p className="text-muted-foreground">
                While we strive to maintain high service availability, we do not guarantee uninterrupted access to our services. We may perform maintenance or updates that temporarily affect service availability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                ROI Agency&apos;s liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Indemnification</h3>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless ROI Agency from any claims, damages, or expenses arising from your use of our services or violation of these terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Termination</h3>
              <p className="text-muted-foreground mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You will pay for services rendered up to termination date</li>
                <li>We will provide final deliverables and reports</li>
                <li>Confidentiality obligations continue after termination</li>
                <li>Your access to our platform will be revoked</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Governing Law</h3>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the State of New York, United States. Any disputes will be resolved through binding arbitration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Changes to Terms</h3>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                If you have questions about these terms, please contact us at{' '}
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
