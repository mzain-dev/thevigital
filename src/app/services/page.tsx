"use client";

import { Section } from '@/components/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { ScheduleCallPopup } from '@/components/schedule-call-popup';
import { ArrowRight, TrendingUp, Globe, Search, Users, Palette, Bot, CheckCircle, Sparkles, Rocket, Award, Clock, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (serviceId: string) => {
    setIsModalOpen(true);
    setSelectedService(serviceId);
  };

  const services = useMemo(() => [
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      icon: TrendingUp,
      shortPitch: 'Data-driven campaigns that convert and scale with measurable ROI.',
      keyFeatures: ['Meta, Google Ads, LinkedIn campaigns', 'Creative testing & optimization', 'LTV-based bidding strategies', 'ROAS-focused results'],
      uniqueValue: "If we can't turn $1 into $2 in profit, we won't take you on.",
      badge: 'Most Popular',
      badgeVariant: 'default' as const,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Globe,
      shortPitch: 'Custom builds and CMS solutions that drive conversions and user engagement.',
      keyFeatures: ['Custom builds & WordPress/Shopify', 'Responsive & fast performance', 'Accessibility compliant', 'Conversion-first approach'],
      uniqueValue: 'Websites that convert visitors into customers',
      badge: 'Featured',
      badgeVariant: 'secondary' as const,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'seo-optimization',
      title: 'SEO That Matters',
      icon: Search,
      shortPitch: 'KPI-focused SEO that drives leads and sales, not just rankings.',
      keyFeatures: ['On-page & technical optimization', 'Content strategy & link building', 'Lead generation focus', 'Measurable business impact'],
      uniqueValue: 'Leads and sales, not just rankings',
      badge: 'Essential',
      badgeVariant: 'outline' as const,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'crm-automation',
      title: 'CRM & Marketing Automation',
      icon: Users,
      shortPitch: 'Tip-to-tail lead management with intelligent automation flows.',
      keyFeatures: ['Complete lead journey management', 'If/Then/Else automation flows', 'Email & SMS automation', 'Clean data & analytics'],
      uniqueValue: 'Automated systems that never miss a lead',
      badge: 'Premium',
      badgeVariant: 'secondary' as const,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design / Branding',
      icon: Palette,
      shortPitch: 'Complete visual identity systems that build trust and recognition.',
      keyFeatures: ['Logo & brand identity design', 'Web graphics & UI elements', 'Brand guidelines & consistency', 'Trust-building visuals'],
      uniqueValue: 'Visual identity that builds customer trust',
      badge: 'Creative',
      badgeVariant: 'outline' as const,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'ai-agents',
      title: 'AI Agents for Business',
      icon: Bot,
      shortPitch: 'Intelligent automation that works 24/7 to streamline your operations.',
      keyFeatures: ['Chatbots & support agents', 'Task automation & workflows', 'Data entry & processing', 'Slack/WhatsApp/CRM integration'],
      uniqueValue: '24/7 automation that never sleeps',
      badge: 'Innovation',
      badgeVariant: 'default' as const,
      color: 'from-indigo-500 to-cyan-600'
    }
  ], []);

  // Intersection Observer for motion reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [services]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-8 lg:pt-0">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10 animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-primary/5 animate-pulse delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center min-h-screen pt-8 pb-4 lg:py-0">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 pr-0 lg:pr-8">
              {/* Enhanced Main Headline */}
              <div className="space-y-3">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
                  <Badge variant="secondary" className="text-xs sm:text-sm">Professional Services</Badge>
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
                </div>
                <h1 className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-center sm:text-left">
                  Services That{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
                    Drive Results
                  </span>
                </h1>
                
                {/* Enhanced Subheadline */}
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center sm:text-left">
                  Comprehensive digital solutions designed to transform your business and maximize your return on investment.
                  <span className="block text-sm text-primary mt-1 font-medium">
                    ✨ ROI-Focused • Data-Driven • Results-Guaranteed ✨
                  </span>
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
                <Button size="sm" className="px-12 py-5 sm:px-8 sm:py-6 text-sm sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-[#4411ab] group" asChild>
                  <Link href="/schedule-call">
                    <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    Schedule a Call
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="px-12 py-5 sm:px-8 sm:py-6 text-sm sm:text-lg font-semibold border-2 hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group" asChild>
                  <Link href="/case-studies">
                    <Award className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-[#4411ab] group-hover:text-white transition-colors duration-300" />
                    View Work
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#4411ab]" />
                  <span>24/7 Support</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#4411ab]" />
                  <span>ROI Guaranteed</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#4411ab]" />
                  <span>AI-Powered</span>
                </div>
              </div>
          </div>

          {/* Right Side - Single Services Image */}
          <div className="hidden lg:block w-1/2 pl-8">
              <div className="relative h-[250px] sm:h-[400px] lg:h-[600px]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* Replace this div with your actual services image: */}
                    {/* <img src="/services/services-hero-image.jpg" alt="ROI Agency Services" className="w-full h-full object-contain" /> */}
                    
                    {/* Placeholder for now - Image only */}
                    <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* Mobile & Tablet Services Image - Inside Hero Section */}
          <div className="block lg:hidden w-full mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] sm:h-[400px]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-xl">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* Replace with your images: */}
                    {/* <img src="/services/services-hero-image.jpg" alt="ROI Agency Services" className="w-full h-full object-contain" /> */}
                    
                    {/* Mobile Placeholder */}
                    <div className="w-full h-full bg-gray-300 rounded-xl flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Minimal Card Design */}
      <Section className="pt-16 pb-12 lg:pt-12 lg:pb-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div>
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
              <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Each service is crafted with precision to deliver measurable ROI and sustainable business growth
            </p>
          </div>
          
          {/* Services in Horizontal Rows - Minimal Design */}
          <div className="space-y-10 sm:space-y-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`opacity-0 transform translate-y-8 transition-all duration-700 ease-out ${index === 0 ? 'mt-0 sm:mt-6' : ''}`}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-background via-background to-muted/20 backdrop-blur-sm p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Service Header & Icon */}
                    <div className="lg:w-1/4 p-4 sm:p-5 lg:p-6 lg:pr-6 bg-gradient-to-r from-muted/20 to-muted/10 border-r border-muted/20">
                      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Icon */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-white border-2 border-[#4411ab] flex items-center justify-center shadow-xl mb-3 sm:mb-3 lg:mb-4">
                          <service.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#4411ab]" />
                        </div>
                        
                        {/* Service Info */}
                        <div className="space-y-2 sm:space-y-2 lg:space-y-3">
                          <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-2">
                            <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-foreground">
                              {service.title}
                            </h3>
                            <Badge variant={service.badgeVariant} className="text-xs px-2 py-1">
                              {service.badge}
                            </Badge>
                          </div>
                          <p className="text-sm sm:text-sm text-muted-foreground leading-relaxed">
                            {service.shortPitch}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Key Features & CTA */}
                    <div className="lg:w-3/4 p-4 sm:p-5 lg:p-6 lg:pl-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
                        {/* Key Features */}
                        <div className="flex-1 space-y-3 sm:space-y-3 lg:space-y-4">
                          {/* Unique Value Proposition */}
                          <div className="bg-gradient-to-r from-[#4411ab]/10 to-[#4411ab]/5 border border-[#4411ab]/20 rounded-lg p-3 lg:p-3">
                            <p className="text-sm sm:text-sm lg:text-sm font-medium text-foreground italic">
                              &ldquo;{service.uniqueValue}&rdquo;
                            </p>
                          </div>
                          
                          {/* Key Features List */}
                          <div className="space-y-2 sm:space-y-2">
                            <h4 className="font-semibold text-foreground text-sm sm:text-sm lg:text-sm">Key Features:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-2">
                              {service.keyFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 sm:gap-2 text-sm lg:text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 lg:w-4 lg:h-4 text-[#4411ab] flex-shrink-0" />
                                  <span className="break-words">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="lg:ml-6 mt-3 sm:mt-3 lg:mt-0">
                          <Button 
                            onClick={() => openModal(service.id)}
                            size="sm" 
                            className="w-full lg:w-auto px-4 py-4 sm:px-5 sm:py-2.5 lg:px-8 lg:py-5 bg-black hover:bg-[#4411ab] text-white group text-sm sm:text-sm lg:text-base"
                          >
                            Schedule a Call
                            <ArrowRight className="w-4 h-4 lg:w-4 lg:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Bottom Spacing After Last Service Card */}
          <div className="pb-8 sm:pb-20"></div>
        </div>
      </Section>

      {/* Bottom CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        highlightText="Transform"
        subtitle="Get a custom quote for your growth journey. Let's discuss how we can help you achieve measurable, sustainable growth."
        primaryButton={{
          text: "Schedule a Call",
          href: "/schedule-call",
          icon: Rocket
        }}
        secondaryButton={{
          text: "View Our Work",
          href: "/case-studies",
          icon: Award
        }}
      />

      {/* Schedule Call Popup */}
      <ScheduleCallPopup 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen}
        preSelectedService={selectedService}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
