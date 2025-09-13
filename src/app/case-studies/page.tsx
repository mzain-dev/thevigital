import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Clock, CheckCircle, Star, BarChart3, Globe, Zap, Award, Rocket } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies - ROI Agency',
  description: 'Explore real success stories and case studies showcasing how we\'ve helped businesses achieve exceptional ROI and growth.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'From $50K to $180K Monthly Revenue',
      company: 'TechFlow Solutions',
      industry: 'SaaS',
      duration: '8 months',
      challenge: 'Struggling with low conversion rates and poor user acquisition',
      solution: 'Complete funnel optimization with data-driven A/B testing',
      results: {
        revenue: { value: '+260%', icon: DollarSign, color: 'text-green-600' },
        users: { value: '+340%', icon: Users, color: 'text-blue-600' },
        conversion: { value: '+185%', icon: Target, color: 'text-purple-600' }
      },
      metrics: [
        { label: 'Monthly Recurring Revenue', before: '$50,000', after: '$180,000', growth: '+260%' },
        { label: 'Customer Acquisition Cost', before: '$450', after: '$180', improvement: '-60%' },
        { label: 'Customer Lifetime Value', before: '$2,100', after: '$4,800', improvement: '+128%' },
        { label: 'Conversion Rate', before: '2.1%', after: '6.0%', improvement: '+185%' }
      ],
      description: 'A struggling SaaS startup was losing customers faster than they could acquire them. Through comprehensive funnel analysis and optimization, we identified key bottlenecks and implemented data-driven solutions that transformed their business.',
      services: ['Funnel Optimization', 'A/B Testing', 'Conversion Rate Optimization', 'Customer Retention'],
      badge: 'Featured',
      badgeVariant: 'default' as const,
      testimonial: {
        quote: "ROI Agency didn't just improve our numbers - they saved our business. The systematic approach and attention to detail was exactly what we needed.",
        author: "Sarah Chen",
        role: "CEO, TechFlow Solutions"
      },
      timeline: [
        { month: 'Month 1-2', activity: 'Comprehensive audit and data analysis' },
        { month: 'Month 3-4', activity: 'Funnel redesign and A/B testing setup' },
        { month: 'Month 5-6', activity: 'Implementation and optimization' },
        { month: 'Month 7-8', activity: 'Scale and advanced automation' }
      ]
    },
    {
      id: 2,
      title: 'Local Restaurant Chain Goes Digital',
      company: 'Urban Bistro Group',
      industry: 'Restaurant',
      duration: '6 months',
      challenge: 'No online presence, declining foot traffic, COVID-19 impact',
      solution: 'Complete digital transformation with online ordering and delivery',
      results: {
        orders: { value: '+420%', icon: BarChart3, color: 'text-orange-600' },
        revenue: { value: '+280%', icon: DollarSign, color: 'text-green-600' },
        reviews: { value: '+156', icon: Star, color: 'text-yellow-600' }
      },
      metrics: [
        { label: 'Online Orders', before: '45/week', after: '234/week', growth: '+420%' },
        { label: 'Average Order Value', before: '$18', after: '$32', improvement: '+78%' },
        { label: 'Google Reviews', before: '23', after: '179', improvement: '+678%' },
        { label: 'Social Media Followers', before: '890', after: '3,200', improvement: '+260%' }
      ],
      description: 'A traditional restaurant group was struggling to adapt to the digital age. We created a comprehensive digital strategy that included website development, online ordering system, and social media management.',
      services: ['Web Development', 'Online Ordering', 'Social Media Management', 'Local SEO'],
      badge: 'Popular',
      badgeVariant: 'secondary' as const,
      testimonial: {
        quote: "We went from almost closing to our best year ever. The digital transformation was seamless and the results speak for themselves.",
        author: "Marcus Rodriguez",
        role: "Owner, Urban Bistro Group"
      },
      timeline: [
        { month: 'Month 1', activity: 'Website and online ordering system development' },
        { month: 'Month 2-3', activity: 'Social media strategy and content creation' },
        { month: 'Month 4-5', activity: 'Local SEO and Google My Business optimization' },
        { month: 'Month 6', activity: 'Analytics setup and performance monitoring' }
      ]
    },
    {
      id: 3,
      title: 'B2B Manufacturing Lead Generation',
      company: 'Precision Components Inc.',
      industry: 'Manufacturing',
      duration: '10 months',
      challenge: 'Outdated marketing, no digital presence, declining sales',
      solution: 'Modern B2B marketing strategy with content marketing and lead nurturing',
      results: {
        leads: { value: '+380%', icon: Users, color: 'text-blue-600' },
        sales: { value: '+195%', icon: TrendingUp, color: 'text-green-600' },
        partnerships: { value: '+12', icon: Globe, color: 'text-purple-600' }
      },
      metrics: [
        { label: 'Qualified Leads', before: '8/month', after: '38/month', growth: '+375%' },
        { label: 'Sales Revenue', before: '$120K', after: '$354K', improvement: '+195%' },
        { label: 'Website Traffic', before: '1,200', after: '8,400', improvement: '+600%' },
        { label: 'New Partnerships', before: '2', after: '14', improvement: '+600%' }
      ],
      description: 'A traditional manufacturing company needed to modernize their approach to reach new customers and compete in the digital marketplace. We developed a comprehensive B2B marketing strategy.',
      services: ['B2B Marketing', 'Content Strategy', 'Lead Generation', 'Partnership Development'],
      badge: 'Premium',
      badgeVariant: 'outline' as const,
      testimonial: {
        quote: "The transformation was incredible. We went from struggling to find customers to having a waiting list. The ROI was evident within 3 months.",
        author: "Jennifer Walsh",
        role: "VP Sales, Precision Components Inc."
      },
      timeline: [
        { month: 'Month 1-2', activity: 'Market research and competitor analysis' },
        { month: 'Month 3-4', activity: 'Website redesign and content strategy' },
        { month: 'Month 5-7', activity: 'Lead generation campaigns and nurturing' },
        { month: 'Month 8-10', activity: 'Partnership development and scaling' }
      ]
    },
    {
      id: 4,
      title: 'E-commerce Store Explosive Growth',
      company: 'EcoFashion Co.',
      industry: 'E-commerce',
      duration: '7 months',
      challenge: 'Low traffic, poor conversion rates, high cart abandonment',
      solution: 'Complete e-commerce optimization with conversion rate optimization',
      results: {
        revenue: { value: '+340%', icon: DollarSign, color: 'text-green-600' },
        traffic: { value: '+280%', icon: BarChart3, color: 'text-blue-600' },
        conversion: { value: '+220%', icon: Target, color: 'text-purple-600' }
      },
      metrics: [
        { label: 'Monthly Revenue', before: '$28K', after: '$123K', growth: '+340%' },
        { label: 'Website Traffic', before: '12K', after: '46K', improvement: '+283%' },
        { label: 'Conversion Rate', before: '1.8%', after: '5.8%', improvement: '+222%' },
        { label: 'Cart Abandonment', before: '68%', after: '34%', improvement: '-50%' }
      ],
      description: 'An eco-friendly fashion brand was struggling with low online sales despite having great products. We identified key issues in their funnel and implemented comprehensive optimization strategies.',
      services: ['E-commerce Optimization', 'Conversion Rate Optimization', 'SEO', 'Email Marketing'],
      badge: 'Featured',
      badgeVariant: 'default' as const,
      testimonial: {
        quote: "Our sales went from struggling to thriving. The systematic approach to optimization made all the difference. We're now profitable and growing rapidly.",
        author: "Alex Thompson",
        role: "Founder, EcoFashion Co."
      },
      timeline: [
        { month: 'Month 1', activity: 'E-commerce audit and user journey analysis' },
        { month: 'Month 2-3', activity: 'Website optimization and A/B testing' },
        { month: 'Month 4-5', activity: 'SEO and content marketing implementation' },
        { month: 'Month 6-7', activity: 'Email marketing and retention campaigns' }
      ]
    },
    {
      id: 5,
      title: 'Healthcare Practice Digital Transformation',
      company: 'Wellness Medical Center',
      industry: 'Healthcare',
      duration: '9 months',
      challenge: 'No online presence, difficult patient acquisition, outdated systems',
      solution: 'Complete digital healthcare marketing strategy with patient acquisition focus',
      results: {
        patients: { value: '+250%', icon: Users, color: 'text-blue-600' },
        appointments: { value: '+320%', icon: Clock, color: 'text-green-600' },
        reviews: { value: '+89', icon: Star, color: 'text-yellow-600' }
      },
      metrics: [
        { label: 'New Patients', before: '15/month', after: '53/month', growth: '+253%' },
        { label: 'Online Appointments', before: '8%', after: '67%', improvement: '+738%' },
        { label: 'Google Reviews', before: '12', after: '101', improvement: '+742%' },
        { label: 'Website Traffic', before: '2,100', after: '12,800', improvement: '+510%' }
      ],
      description: 'A traditional medical practice needed to modernize their approach to patient acquisition and management. We created a comprehensive digital strategy that respected healthcare regulations while driving growth.',
      services: ['Healthcare Marketing', 'Website Development', 'Patient Acquisition', 'Online Booking'],
      badge: 'New',
      badgeVariant: 'secondary' as const,
      testimonial: {
        quote: "The digital transformation was exactly what we needed. Patient acquisition is now effortless and our practice is thriving.",
        author: "Dr. Maria Santos",
        role: "Medical Director, Wellness Medical Center"
      },
      timeline: [
        { month: 'Month 1-2', activity: 'Healthcare compliance and website development' },
        { month: 'Month 3-4', activity: 'Online booking system and patient portal' },
        { month: 'Month 5-7', activity: 'Local SEO and review management' },
        { month: 'Month 8-9', activity: 'Patient acquisition campaigns and optimization' }
      ]
    },
    {
      id: 6,
      title: 'Professional Services Firm Growth',
      company: 'Legal Associates LLP',
      industry: 'Legal Services',
      duration: '12 months',
      challenge: 'Limited online presence, difficulty attracting quality clients',
      solution: 'Professional services marketing with thought leadership and client acquisition',
      results: {
        clients: { value: '+180%', icon: Users, color: 'text-blue-600' },
        revenue: { value: '+240%', icon: DollarSign, color: 'text-green-600' },
        cases: { value: '+165%', icon: CheckCircle, color: 'text-purple-600' }
      },
      metrics: [
        { label: 'New Clients', before: '6/month', after: '17/month', growth: '+183%' },
        { label: 'Firm Revenue', before: '$180K', after: '$612K', improvement: '+240%' },
        { label: 'Case Volume', before: '24', after: '64', improvement: '+167%' },
        { label: 'Average Case Value', before: '$7,500', after: '$9,600', improvement: '+28%' }
      ],
      description: 'A law firm was struggling to attract quality clients and compete with larger firms. We developed a professional services marketing strategy that positioned them as thought leaders in their field.',
      services: ['Professional Services Marketing', 'Content Marketing', 'Client Acquisition', 'Thought Leadership'],
      badge: 'Premium',
      badgeVariant: 'outline' as const,
      testimonial: {
        quote: "The marketing strategy transformed our practice. We're now attracting higher-quality clients and our revenue has more than doubled.",
        author: "Robert Kim",
        role: "Managing Partner, Legal Associates LLP"
      },
      timeline: [
        { month: 'Month 1-3', activity: 'Brand positioning and content strategy development' },
        { month: 'Month 4-6', activity: 'Website redesign and thought leadership content' },
        { month: 'Month 7-9', activity: 'Client acquisition campaigns and networking' },
        { month: 'Month 10-12', activity: 'Referral system and advanced marketing automation' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Enhanced Main Headline */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-[#4411ab] animate-pulse" />
                  <Badge variant="secondary" className="text-xs">Success Stories</Badge>
                  <Award className="w-6 h-6 text-[#4411ab] animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Case Studies
            </h1>
                
                {/* Enhanced Subheadline */}
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Real results from real businesses. See how we&apos;ve helped companies across industries achieve measurable growth.
                  <span className="block text-sm text-primary mt-2 font-medium">
                    ✨ Proven Results • Data-Driven • ROI-Focused ✨
                  </span>
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:bg-[#4411ab] group" asChild>
                  <Link href="/schedule-call">
                    <Rocket className="mr-2 w-5 h-5" />
                    Schedule a Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2 hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group" asChild>
                  <Link href="/services">
                    <Award className="mr-2 w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    View Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#4411ab]" />
                  <span>260% Avg. Revenue Growth</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#4411ab]" />
                  <span>95% Success Rate</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#4411ab]" />
                  <span>Data-Driven Results</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Content */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-rotate-1"
                  style={{ animationDelay: '0ms' }}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
                    <div className="text-center space-y-3 p-6">
                      <div className="w-16 h-16 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                        <TrendingUp className="w-8 h-8 text-[#4411ab]" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">Revenue Growth</h3>
                      <Badge variant="secondary" className="text-xs">
                        +260% Avg
                      </Badge>
                    </div>
                  </div>
                </div>
                <div
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-rotate-1"
                  style={{ animationDelay: '100ms' }}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
                    <div className="text-center space-y-3 p-6">
                      <div className="w-16 h-16 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                        <Target className="w-8 h-8 text-[#4411ab]" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">Success Rate</h3>
                      <Badge variant="secondary" className="text-xs">
                        95% Success
                      </Badge>
                    </div>
                  </div>
                </div>
                <div
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-rotate-1"
                  style={{ animationDelay: '200ms' }}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
                    <div className="text-center space-y-3 p-6">
                      <div className="w-16 h-16 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                        <Users className="w-8 h-8 text-[#4411ab]" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">Client Growth</h3>
                      <Badge variant="secondary" className="text-xs">
                        +340% Users
                      </Badge>
                    </div>
                  </div>
                </div>
                <div
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-rotate-1"
                  style={{ animationDelay: '300ms' }}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
                    <div className="text-center space-y-3 p-6">
                      <div className="w-16 h-16 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                        <BarChart3 className="w-8 h-8 text-[#4411ab]" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">Data-Driven</h3>
                      <Badge variant="secondary" className="text-xs">
                        Proven Results
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="border border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant={study.badgeVariant} className="text-xs">
                      {study.badge}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {study.duration}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {study.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{study.company}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(study.results).map(([key, result]) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="w-6 h-6 mx-auto mb-2 rounded bg-white border border-[#4411ab] flex items-center justify-center">
                            <IconComponent className={`w-3 h-3 ${result.color}`} />
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1">
                    {study.services.slice(0, 3).map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {study.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{study.services.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full px-6 py-3 text-base font-semibold border-[#4411ab] text-[#4411ab] hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group"
                    asChild
                  >
                    <a href={`/case-studies/${study.id}`}>
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-base text-muted-foreground">
              Numbers that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-[#4411ab] rounded-xl flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-[#4411ab]" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">$2.4M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-[#4411ab] rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#4411ab]" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">340%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-[#4411ab] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#4411ab]" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-[#4411ab] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#4411ab]" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Success Story?"
        highlightText="Success"
        subtitle="Let's discuss how we can help you achieve similar results for your business."
        primaryButton={{
          text: "Schedule a Call",
          href: "/schedule-call",
          icon: Zap
        }}
        secondaryButton={{
          text: "View Our Work",
          href: "/case-studies",
          icon: Award
        }}
      />
    </div>
  );
}
