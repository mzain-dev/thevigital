"use client";

import { Section } from '@/components/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { ScheduleCallPopup } from '@/components/schedule-call-popup';
import { ArrowRight, CheckCircle, Sparkles, Rocket, Award, Clock, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';

import { SERVICES_SUMMARY } from '@/lib/constants';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (serviceId: string) => {
    setIsModalOpen(true);
    setSelectedService(serviceId);
  };

  const services = useMemo(() => SERVICES_SUMMARY, []);

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
      const element = document.getElementById(service.slug);
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
            <div className="relative h-[250px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl p-2">
                <Image
                  src="/services-hero.png"
                  alt="Services Hero"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Services Image - Inside Hero Section */}
          <div className="block lg:hidden w-full mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] sm:h-[400px]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-xl p-2">
                  <Image
                    src="/services-hero.png"
                    alt="Services Hero"
                    fill
                    className="object-contain"
                    priority
                  />
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

          {/* Services in Grid - Modern Clean Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`opacity-0 transform translate-y-8 transition-all duration-700 ease-out h-full`}
              >
                <Card className={`group relative overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm p-6 sm:p-8 h-full flex flex-col`}>

                  {/* Animated Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 shadow-inner`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant={service.badgeVariant} className="text-xs px-3 py-1">
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.shortPitch}
                    </p>

                    {/* Unique Value - Styled */}
                    <div className="py-3 px-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm font-medium text-primary italic">
                        &ldquo;{service.uniqueValue}&rdquo;
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="pt-2">
                      <ul className="space-y-2">
                        {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.keyFeatures.length > 3 && (
                          <li className="flex items-center gap-2 text-sm text-muted-foreground pl-6">
                            <span>+{service.keyFeatures.length - 3} more features</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Actions - Always at Bottom */}
                  <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => openModal(service.slug)}
                      className="flex-1 bg-primary hover:bg-[#4411ab] text-white shadow-md group/btn"
                    >
                      Schedule Call
                      <Rocket className="w-4 h-4 ml-2 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary/20 hover:border-primary text-foreground hover:text-primary"
                      asChild
                    >
                      <Link href={`/services/${service.slug}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
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
