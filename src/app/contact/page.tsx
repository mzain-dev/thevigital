import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - ROI Agency',
  description: 'Get in touch with ROI Agency. We\'re here to discuss your business goals and how we can help you achieve exceptional ROI.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@roi-agency.com',
      action: 'Send Email',
      href: 'mailto:hello@roi-agency.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'Call Now',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: '123 Business Ave, Suite 100, New York, NY 10001',
      action: 'Get Directions',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      action: 'Schedule Meeting',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Section>
        <SectionHeader
          preTitle="Contact Us"
          title="Let's Start a Conversation"
          subtitle="Ready to transform your business? We're here to discuss your goals and explore how we can help you achieve exceptional ROI."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="strategic-consulting">Strategic Consulting</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="analytics-reporting">Analytics & Reporting</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo-optimization">SEO Optimization</option>
                    <option value="brand-strategy">Brand Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business goals and how we can help..."
                    rows={5}
                  />
                </div>
                
                <Button size="lg" className="w-full py-3">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Get in touch</h3>
              <p className="text-muted-foreground">
                We're excited to learn about your business and discuss how our strategic approach can help you achieve your goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <p className="text-muted-foreground text-sm">{method.description}</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-primary hover:text-primary/80"
                          asChild
                        >
                          <a href={method.href}>{method.action}</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-2">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about working with us."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">What is your typical project timeline?</h4>
              <p className="text-muted-foreground text-sm">Project timelines vary based on scope and complexity, typically ranging from 4-12 weeks for most digital marketing campaigns.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Do you work with small businesses?</h4>
              <p className="text-muted-foreground text-sm">Absolutely! We work with businesses of all sizes, from startups to enterprise companies.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">How do you measure ROI?</h4>
              <p className="text-muted-foreground text-sm">We use comprehensive analytics and reporting tools to track key performance indicators and provide detailed ROI analysis.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">What industries do you specialize in?</h4>
              <p className="text-muted-foreground text-sm">We have experience across various industries including e-commerce, SaaS, manufacturing, healthcare, and professional services.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
