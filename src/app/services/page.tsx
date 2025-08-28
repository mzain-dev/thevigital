import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Our Services - ROI Agency',
  description: 'Discover our comprehensive range of digital services designed to maximize your business ROI and drive sustainable growth.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Strategic Consulting',
      description: 'Data-driven business strategy development and optimization consulting.',
      features: ['Market Analysis', 'Competitive Research', 'Growth Strategy', 'Performance Metrics'],
      badge: 'Premium',
      badgeVariant: 'secondary' as const,
      icon: '🎯'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions for maximum reach and engagement.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'],
      badge: 'Popular',
      badgeVariant: 'outline' as const,
      icon: '📱'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Real-time insights and performance tracking for informed decision-making.',
      features: ['Data Analytics', 'Performance Tracking', 'Custom Reports', 'ROI Measurement'],
      badge: 'New',
      badgeVariant: 'default' as const,
      icon: '📊'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built for performance.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'SEO Integration'],
      badge: 'Featured',
      badgeVariant: 'secondary' as const,
      icon: '💻'
    },
    {
      title: 'SEO Optimization',
      description: 'Search engine optimization to improve visibility and drive organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO'],
      badge: 'Essential',
      badgeVariant: 'outline' as const,
      icon: '🔍'
    },
    {
      title: 'Brand Strategy',
      description: 'Comprehensive brand development and positioning strategies.',
      features: ['Brand Identity', 'Visual Design', 'Messaging Strategy', 'Brand Guidelines'],
      badge: 'Premium',
      badgeVariant: 'secondary' as const,
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Section>
        <SectionHeader
          preTitle="Our Services"
          title="Comprehensive Digital Solutions"
          subtitle="We offer a full spectrum of digital services designed to transform your business and maximize your return on investment."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeader
          title="Why Choose Our Services?"
          subtitle="We combine expertise, innovation, and proven methodologies to deliver exceptional results."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <span className="text-primary-foreground font-bold text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Proven Results</h3>
            <p className="text-muted-foreground">Track record of delivering measurable ROI improvements for our clients.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <span className="text-primary-foreground font-bold text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Fast Implementation</h3>
            <p className="text-muted-foreground">Quick turnaround times without compromising on quality or results.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <span className="text-primary-foreground font-bold text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Data-Driven</h3>
            <p className="text-muted-foreground">Every decision and strategy is backed by comprehensive data analysis.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
