import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Case Studies - ROI Agency',
  description: 'Explore real success stories and case studies showcasing how we\'ve helped businesses achieve exceptional ROI and growth.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-commerce Growth Strategy',
      company: 'TechStart Inc.',
      industry: 'E-commerce',
      duration: '6 months',
      results: {
        revenue: '+240%',
        traffic: '+180%',
        conversion: '+95%'
      },
      description: 'Comprehensive digital transformation for a growing e-commerce platform, including SEO optimization, PPC campaigns, and conversion rate optimization.',
      services: ['SEO Optimization', 'PPC Management', 'CRO', 'Analytics'],
      badge: 'Featured',
      badgeVariant: 'default' as const
    },
    {
      title: 'B2B Lead Generation',
      company: 'Enterprise Solutions',
      industry: 'B2B Software',
      duration: '12 months',
      results: {
        leads: '+320%',
        quality: '+85%',
        sales: '+156%'
      },
      description: 'Strategic B2B marketing campaign focused on lead generation and nurturing through content marketing and targeted advertising.',
      services: ['Content Marketing', 'Lead Generation', 'Email Marketing', 'Analytics'],
      badge: 'Premium',
      badgeVariant: 'secondary' as const
    },
    {
      title: 'Local Business SEO',
      company: 'Green Gardens',
      industry: 'Local Business',
      duration: '4 months',
      results: {
        visibility: '+280%',
        calls: '+190%',
        reviews: '+45'
      },
      description: 'Local SEO optimization for a landscaping business, improving local search visibility and driving qualified leads.',
      services: ['Local SEO', 'Google My Business', 'Review Management', 'Local Citations'],
      badge: 'Popular',
      badgeVariant: 'outline' as const
    },
    {
      title: 'SaaS Product Launch',
      company: 'CloudFlow',
      industry: 'SaaS',
      duration: '8 months',
      results: {
        users: '+450%',
        retention: '+78%',
        revenue: '+320%'
      },
      description: 'Complete product launch strategy including market research, positioning, and go-to-market execution.',
      services: ['Market Research', 'Brand Strategy', 'Digital Marketing', 'User Acquisition'],
      badge: 'New',
      badgeVariant: 'default' as const
    },
    {
      title: 'Restaurant Digital Presence',
      company: 'Urban Bistro',
      industry: 'Restaurant',
      duration: '5 months',
      results: {
        orders: '+165%',
        reviews: '+89',
        social: '+340%'
      },
      description: 'Digital transformation for a local restaurant, including website redesign, social media management, and online ordering optimization.',
      services: ['Web Development', 'Social Media', 'Online Ordering', 'Local SEO'],
      badge: 'Featured',
      badgeVariant: 'secondary' as const
    },
    {
      title: 'Manufacturing Lead Generation',
      company: 'Precision Manufacturing',
      industry: 'Manufacturing',
      duration: '10 months',
      results: {
        leads: '+210%',
        quality: '+92%',
        partnerships: '+15'
      },
      description: 'B2B lead generation strategy for a manufacturing company, focusing on industry-specific content and targeted outreach.',
      services: ['B2B Marketing', 'Content Strategy', 'Lead Generation', 'Partnership Development'],
      badge: 'Premium',
      badgeVariant: 'secondary' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Section>
        <SectionHeader
          preTitle="Case Studies"
          title="Success Stories That Speak"
          subtitle="Real results from real businesses. Discover how our strategic approach has transformed companies across various industries."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-200 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{study.company}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                      <span>•</span>
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  <Badge variant={study.badgeVariant}>{study.badge}</Badge>
                </div>
                <CardDescription className="text-base">{study.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  View Full Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeader
          title="Ready to Start Your Success Story?"
          subtitle="Let&apos;s discuss how we can help you achieve similar results for your business."
          align="center"
        />
        
        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every business is unique, and so is our approach. We'll analyze your specific needs and create a customized strategy to maximize your ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Download Our Process
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
