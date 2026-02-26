"use client";

import { useState, useEffect } from 'react';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CTASection } from '@/components/cta-section';
import { ArrowRight, TrendingUp, Globe, Users, Palette, Bot, Zap, BarChart3, Target, Eye, RotateCcw, Sparkles, Rocket, Award, Clock, Star, CheckCircle, Mail, Quote, Compass, Magnet, Plug, Brain, Handshake, Sprout } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { SERVICES_SUMMARY } from '@/lib/constants';
import { caseStudiesData } from '@/lib/case-studies-data';

const typewriterServices = SERVICES_SUMMARY.map(s => s.title);

const VIGITAL_ALIGNMENT_STEPS = [
  {
    title: "1. The Alignment Audit",
    icon: Compass,
    description: "We don't guess; we analyze. We start by auditing your existing data, market, and systems. From this, we build a Vigital Blueprint—a custom strategy that identifies the single biggest opportunity for profit."
  },
  {
    title: "2. Data-Driven Ads",
    icon: Magnet,
    description: "With our blueprint as the guide, we launch highly-targeted Vigital Ad campaigns on Google, Meta, and TikTok. Every ad is engineered to capture your highest-intent customers at the lowest possible cost."
  },
  {
    title: "3. Instant CRM Sync",
    icon: Plug,
    description: "The moment a lead comes in, our system instantly and automatically syncs it with your CRM. This is the Vigital Alignment in action—the \"Digital\" front-end is perfectly connected to your \"Virtual\" backend. No more lost leads."
  },
  {
    title: "4. AI Lead Scoring",
    icon: Brain,
    description: "This is our \"secret weapon.\" Our custom AI model instantly analyzes the new lead—scoring them based on their data and behavior. Are they a \"hot,\" sales-ready lead or a \"warm,\" curious prospect? The system knows instantly."
  },
  {
    title: "5. \"Hot Lead\" Handoff",
    icon: Handshake,
    description: "\"Hot\" leads, as identified by our AI, are immediately routed to your sales team with a high-priority alert. We provide all the data needed to close the deal while the lead's interest is at its peak."
  },
  {
    title: "6. AI-Powered Nurture",
    icon: Sprout,
    description: "\"Warm\" or \"cold\" leads aren't forgotten. They automatically enter our Vigital Operations nurture system. Our AI-powered automations send them valuable content, case studies, and offers, building trust 24/7 until they are \"hot\" and ready to buy."
  },
  {
    title: "7. The 360° Recovery Loop",
    icon: RotateCcw,
    description: "Didn't close? No problem. Our system automatically moves \"lost\" or \"cold\" leads from the sales process into a long-term retargeting and email nurture campaign. We stay top-of-mind, ensuring you get a second, third, or fourth chance to win their business."
  }
];

export default function Home() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!typewriterServices || typewriterServices.length === 0) return;
    const service = typewriterServices[currentServiceIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentServiceIndex((prev) => (prev + 1) % typewriterServices.length);
        timeout = setTimeout(() => { }, 400); // Wait before typing new word
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30); // Faster delete
      }
    } else {
      if (currentText === service) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Hold word longer
      } else {
        timeout = setTimeout(() => {
          setCurrentText(service.slice(0, currentText.length + 1));
        }, 60); // Faster typing
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentServiceIndex]);

  // Portfolio slider data


  const features = [
    {
      title: 'Platform-agnostic',
      description: 'We work with your existing tools and platforms',
      icon: Zap,
      badge: 'Flexible',
      color: 'text-blue-600'
    },
    {
      title: 'Data-driven automation',
      description: 'AI-powered insights that optimize performance',
      icon: BarChart3,
      badge: 'Smart',
      color: 'text-green-600'
    },
    {
      title: 'ROI-focused',
      description: 'Every strategy is measured by return on investment',
      icon: Target,
      badge: 'Results',
      color: 'text-purple-600'
    },
    {
      title: 'Transparent reporting',
      description: 'Real-time dashboards you can actually understand',
      icon: Eye,
      badge: 'Clear',
      color: 'text-orange-600'
    },
    {
      title: 'Fast iteration',
      description: 'Quick testing and optimization cycles',
      icon: RotateCcw,
      badge: 'Agile',
      color: 'text-red-600'
    }
  ];

  const caseStudies = caseStudiesData.map((study, index) => ({
    id: study.id,
    title: study.company,
    industry: study.category,
    description: study.description,
    logo: study.company.substring(0, 2).toUpperCase(),
    services: study.services,
    results: Object.entries(study.results).map(([key, val]) => `${val.value} ${key.charAt(0).toUpperCase() + key.slice(1)}`),
    href: `/case-studies/${study.slug}`,
    icon: ['🏢', '🔨', '🚀', '🎨', '🏥', '🎓'][index % 6],
    gradient: 'from-blue-900 via-blue-800 to-purple-900',
    rotation: index % 2 === 0 ? '-rotate-2' : 'rotate-2',
    hasWebsitePreview: true,
    subtitle: study.title,
    image: study.visualShowcase?.[0] || `/case-studies/${['tech-startup.jpg', 'ecommerce.jpg', 'fintech.jpg', 'manufacturing.jpg', 'healthcare.jpg', 'education.jpg'][index % 6]}`
  }));


  const testimonials = [
    {
      quote: "ROI Agency transformed our marketing from a cost center to a profit driver. We&apos;re seeing 3x ROI on our marketing spend.",
      name: "Sarah Chen",
      role: "CMO, TechFlow Inc.",
      avatar: "SC",
      rating: 5,
      industry: "SaaS"
    },
    {
      quote: "Their data-driven approach helped us identify opportunities we never knew existed. Our conversion rate increased by 140%.",
      name: "Marcus Rodriguez",
      role: "Founder, GrowthLab",
      avatar: "MR",
      rating: 5,
      industry: "E-commerce"
    },
    {
      quote: "Finally, a marketing agency that speaks our language. They understand that every dollar spent must generate measurable returns.",
      name: "Jennifer Park",
      role: "VP Marketing, ScaleUp Solutions",
      avatar: "JP",
      rating: 5,
      industry: "FinTech"
    },
    {
      quote: "The transparency in their reporting is refreshing. We can see exactly where our money is going and what it's achieving.",
      name: "David Thompson",
      role: "CEO, InnovateCorp",
      avatar: "DT",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      quote: "ROI Agency doesn't just create campaigns, they build systems that continue to generate results long after launch.",
      name: "Amanda Foster",
      role: "Marketing Director, FutureTech",
      avatar: "AF",
      rating: 5,
      industry: "Healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-8 lg:py-12">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10 animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-primary/5 animate-pulse delay-2000"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1500"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center min-h-screen pt-8 pb-8 lg:py-0">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 pr-0 lg:pr-8">
            {/* Enhanced Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
                <Badge variant="secondary" className="text-xs sm:text-sm">2025&apos;s Most Innovative Agency</Badge>
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
              </div>
              <h1 className="text-[35px] sm:text-5xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-center sm:text-left">
                Stop Wasting Money On{' '}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
                  Misaligned Marketing.
                </span>
              </h1>

              {/* Text Type Animation for Services */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-1 sm:gap-2 mt-6 h-16 sm:h-10">
                <span className="text-base sm:text-lg md:text-xl text-muted-foreground whitespace-nowrap shrink-0 flex items-center h-full">
                  We specialize in:
                </span>
                <div className="flex items-center justify-center sm:justify-start h-full sm:min-w-[400px]">
                  <span className="text-base sm:text-lg md:text-xl font-bold font-semibold text-[#4411ab] whitespace-nowrap">
                    {currentText}
                    <span className="animate-pulse ml-[2px]">|</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Subheadline - Minimal spacing */}
            <p className="text-lg md:text-xl lg:text-1xl text-foreground leading-relaxed text-center sm:text-left">
              Profit isn't just about good ads; it's about a connected system. We introduce The Vigital Alignment—our proprietary system to perfectly sync your Digital Marketing (growth) with your Virtual Operations (efficiency).
              <span className="block text-sm text-primary mt-4 font-medium">
                ✨ The Result • Predictable, Guaranteed ROI. ✨
              </span>
            </p>

            {/* Enhanced CTA Buttons - Single line */}
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
                  See Work
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-[#4411ab] group-hover:translate-x-1 transition-transform duration-300" />
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

          {/* Right Side - Portfolio Slider (Desktop Only) */}
          <div className="hidden lg:block w-1/2 pl-8">
            <div className="relative h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                <Image
                  src="/hero-image-v3.png"
                  alt="Digital Agency Hero"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Portfolio Slider - Inside Hero Section */}
          <div className="block lg:hidden w-full mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] sm:h-[400px]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-xl">
                  <Image
                    src="/hero-image-v3.png"
                    alt="Digital Agency Hero"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* The Vigital Alignment Section */}
      <section className="py-12 lg:py-24 bg-gradient-to-r from-muted/20 to-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              The Vigital Alignment:{' '}
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
              Your 360° Profit System
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Most agencies just run ads. We build a complete, closed-loop system. We believe that wasted leads are just as bad as wasted ad spend.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our Vigital Alignment process connects every step of the customer journey, from the first click to the final sale, ensuring no lead is ever left behind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VIGITAL_ALIGNMENT_STEPS.map((step, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#4411ab] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#4411ab]/10 transition-colors duration-300">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4411ab]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Minimal Design with Tabs */}
      <section className="py-24 bg-gradient-to-br from-white to-purple-100/100">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Our Case Studies
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we&apos;ve transformed businesses across industries with data-driven strategies
            </p>
          </div>



          {/* Case Study Cards Grid - Minimal Design */}
          {/* Case Study Cards Carousel */}
          <div className="relative px-4 sm:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4 pb-4">
                {caseStudies.map((study) => (
                  <CarouselItem key={study.id} className="pl-4 md:basis-1/2 lg:basis-1/3 h-auto">
                    <div className="group h-full">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full hover:shadow-xl transition-all duration-300 flex flex-col">
                        {/* Card Header - Minimal */}
                        <div className="h-48 sm:h-56 relative overflow-hidden bg-muted flex-shrink-0">
                          {/* Background Image */}
                          <Image
                            src={study.image as string}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Gradient Overlay for Text Readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                            <div className="flex justify-end">
                              <div className="text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                {study.industry}
                              </div>
                            </div>
                            <div className="text-white">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                  <span className="text-sm">{study.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold">{study.title}</h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card Content - Minimal */}
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                            {study.description}
                          </p>

                          {/* Key Results - Minimal */}
                          <div className="space-y-2 mb-4">
                            {study.results.slice(0, 2).map((result, index) => (
                              <div key={index} className="flex items-center text-xs text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-[#4411ab] rounded-full mr-2 flex-shrink-0"></div>
                                <span className="truncate">{result}</span>
                              </div>
                            ))}
                          </div>

                          {/* Services - Minimal Tags */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {study.services.slice(0, 2).map((service, index) => (
                                <span key={index} className="text-xs bg-[#4411ab]/10 text-[#4411ab] px-2 py-1 rounded-full">
                                  {service}
                                </span>
                              ))}
                              {study.services.length > 2 && (
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  +{study.services.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* CTA Button - Minimal */}
                          <div className="mt-auto">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full px-4 py-2 text-sm font-semibold border-[#4411ab] text-[#4411ab] hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group"
                              asChild
                            >
                              <Link href={study.href}>
                                View Details
                                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-12px] sm:left-[-20px] bg-background border-primary/20 hover:bg-primary hover:text-white transition-colors" />
              <CarouselNext className="right-[-12px] sm:right-[-20px] bg-background border-primary/20 hover:bg-primary hover:text-white transition-colors" />
            </Carousel>
          </div>

          {/* View All Button - Minimal */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <Button size="sm" className="px-12 py-5 sm:px-8 sm:py-6 text-sm sm:text-lg font-semibold bg-primary hover:bg-[#4411ab] text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
              <Link href="/case-studies" className="flex items-center">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Teaser Section - Simple & Clean */}
      <Section className="pt-12 pb-12 lg:pt-24 lg:pb-24 bg-background">
        <div>
          {/* Services Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Our Core Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive solutions designed to deliver measurable ROI and sustainable business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {SERVICES_SUMMARY.map((service, index) => (
              <div key={index} className="group flex">
                <div className="w-full bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col">

                  {/* Service Icon */}
                  <div className="mb-4 sm:mb-5 flex-shrink-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#4411ab] rounded-lg flex items-center justify-center group-hover:bg-[#4411ab]/10 transition-colors duration-300`}>
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4411ab]" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="mb-4 sm:mb-6 flex-grow">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                      <a href={service.href} className="hover:text-primary cursor-pointer">
                        {service.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="mb-4 sm:mb-6 flex-grow">
                    <div className="space-y-1 sm:space-y-2">
                      {service.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full px-6 py-3 sm:px-8 sm:py-6 border-primary/20 text-primary hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group text-sm sm:text-lg"
                      asChild
                    >
                      <Link href={service.href} className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4411ab] group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="sm"
              className="bg-primary hover:bg-[#4411ab] text-primary-foreground group px-12 py-5 sm:px-8 sm:py-6 text-sm sm:text-lg"
              asChild
            >
              <Link href="/services" className="flex items-center">
                <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Stats/Results Section - Simple & Clean */}
      <Section className="py-24 bg-gradient-to-br from-white to-purple-100/100">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Proven Results That Speak
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Numbers don&apos;t lie. Here&apos;s what we&apos;ve achieved for our clients through data-driven strategies and relentless optimization.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12">
            {/* Revenue Generated */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base font-bold">$</span>
                </div>
              </div>
              <div className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                $2.4M+
              </div>
              <div className="text-sm sm:text-base font-medium text-muted-foreground mb-1 sm:mb-2">Revenue Generated</div>
              <div className="text-sm sm:text-xs text-primary font-medium">+156% YoY Growth</div>
            </div>

            {/* ROI Increase */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                340%
              </div>
              <div className="text-sm sm:text-base font-medium text-muted-foreground mb-1 sm:mb-2">Average ROI Increase</div>
              <div className="text-sm sm:text-xs text-primary font-medium">Industry Leading</div>
            </div>

            {/* Client Retention */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                95%
              </div>
              <div className="text-sm sm:text-base font-medium text-muted-foreground mb-1 sm:mb-2">Client Retention Rate</div>
              <div className="text-sm sm:text-xs text-primary font-medium">Long-term Partners</div>
            </div>

            {/* Industries Served */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Globe className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                12+
              </div>
              <div className="text-sm sm:text-base font-medium text-muted-foreground mb-1 sm:mb-2">Industries Served</div>
              <div className="text-sm sm:text-xs text-primary font-medium">Cross-sector Expertise</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group px-12 py-5 sm:px-8 sm:py-6 text-sm sm:text-lg"
              asChild
            >
              <a href="/case-studies">
                <BarChart3 className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4411ab] group-hover:text-white transition-colors duration-300" />
                View Detailed Results
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4411ab] group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Process/How We Work Section - Theme Aligned */}
      <Section className="pt-12 pb-12 lg:pt-24 lg:pb-24 bg-background overflow-hidden relative">
        <SectionHeader
          title="How We Work"
          subtitle="Our proven 4-step process ensures consistent, measurable results for every client through systematic execution and continuous optimization."
          align="center"
        />

        <div className="max-w-6xl mx-auto mt-8 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Professional Dotted Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 z-0">
              <div className="w-full h-full border-t-2 border-dotted border-primary/40"></div>
            </div>

            {/* Professional Dotted Connecting Line - Mobile */}
            <div className="sm:hidden absolute left-1/2 top-0 bottom-0 w-0.5 z-0">
              <div className="w-full h-full border-l-2 border-dotted border-primary/40"></div>
            </div>

            {[
              {
                step: 1,
                title: 'Analyze',
                desc: 'Deep dive into your business, market, and current performance to identify opportunities and growth potential.',
                icon: Eye
              },
              {
                step: 2,
                title: 'Strategize',
                desc: 'Develop data-driven strategies tailored to your specific goals, market position, and competitive landscape.',
                icon: Target
              },
              {
                step: 3,
                title: 'Execute',
                desc: 'Implement campaigns with precision, using proven tactics, cutting-edge tools, and real-time optimization.',
                icon: Rocket
              },
              {
                step: 4,
                title: 'Optimize',
                desc: 'Continuous monitoring, testing, and optimization to maximize ROI and drive sustainable, long-term growth.',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <div key={index} className="text-center group relative z-20 flex">
                {/* Step Card */}
                <div className="w-full bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Step Number Badge */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm sm:text-base font-bold mx-auto mb-3 sm:mb-4 flex-shrink-0">
                    {item.step}
                  </div>

                  {/* Icon Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-[#4411ab] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#4411ab]/10 transition-colors duration-300 flex-shrink-0">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#4411ab]" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Timeline Info */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border border-primary/20 rounded-full">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4411ab]" />
              <span className="text-sm sm:text-base font-medium text-primary">Typical Timeline: 3-6 months for full optimization</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section - Left-Right Layout */}
      <Section className="pt-12 pb-12 lg:pt-24 lg:pb-24 bg-gradient-to-br from-white to-purple-100/100 overflow-hidden lg:overflow-visible">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Why Choose ROI Agency?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re not just another marketing agency. We&apos;re your growth partner.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

            {/* Left Side - Natural Scrolling Content */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  {/* Feature Card */}
                  <div className="bg-card/30 border border-border/30 rounded-xl p-4 sm:p-5 hover:border-primary/40 hover:bg-card/50 hover:shadow-md transition-all duration-300">

                    {/* Header Row */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      {/* Icon Container */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#4411ab] rounded-lg flex items-center justify-center group-hover:bg-[#4411ab]/10 transition-colors duration-300">
                          <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4411ab]" />
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="flex-shrink-0 pt-1">
                        <Badge variant="outline" className="text-xs sm:text-sm px-2 sm:px-3 py-1 border-primary/20 text-primary bg-primary/5">
                          {feature.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom CTA */}
              <div className="pt-4 sm:pt-6">
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4 sm:p-5 text-center">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 sm:mb-3">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                    Join hundreds of businesses that have already achieved remarkable growth with our proven strategies.
                  </p>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-[#4411ab] text-primary-foreground px-12 py-5 sm:px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-300 group text-sm sm:text-base"
                    asChild
                  >
                    <a href="/schedule-call">
                      <Users className="mr-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      Start Your Growth Journey
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Fixed Centered Image */}
            <div className="lg:sticky lg:top-32 relative h-fit self-start">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-white rounded-2xl border border-primary/20 overflow-hidden relative shadow-2xl">
                <Image
                  src="/why-choose-us-redesign.png"
                  alt="Why Choose ROI Agency - Team Collaboration"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>


            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section - Redesigned */}
      <Section className="pt-12 pb-12 lg:pt-24 lg:pb-12 bg-background">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about working with ROI Agency.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {[
              {
                question: "How quickly will I see results?",
                answer: "Most clients see initial improvements within 30-60 days, with significant ROI gains typically appearing in 3-6 months.",
                icon: TrendingUp
              },
              {
                question: "What makes you different from other agencies?",
                answer: "We&apos;re 100% ROI-focused, use data-driven strategies, and provide transparent reporting. Every decision is measured by return on investment.",
                icon: Target
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We scale our approach to fit your needs.",
                icon: Users
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have experience across 12+ industries including e-commerce, SaaS, manufacturing, healthcare, and professional services.",
                icon: Globe
              },
              {
                question: "How do you measure success?",
                answer: "We track KPIs like conversion rates, customer acquisition cost, lifetime value, and most importantly, overall ROI on marketing spend.",
                icon: BarChart3
              },
              {
                question: "What's included in your services?",
                answer: "Comprehensive strategy, execution, ongoing optimization, and detailed reporting. We&apos;re your full-service growth partner.",
                icon: CheckCircle
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">

                  {/* Question Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#4411ab] rounded-lg flex items-center justify-center group-hover:bg-[#4411ab]/10 transition-colors duration-300">
                        <faq.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4411ab]" />
                      </div>
                    </div>

                    {/* Question */}
                    <div className="flex-grow">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="pl-13 sm:pl-16">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                Our team is here to help. Get in touch and we&apos;ll answer all your questions about growing your business.
              </p>
              <Button
                size="sm"
                className="bg-primary hover:bg-[#4411ab] text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group text-sm sm:text-base"
                asChild
              >
                <Link href="/contact">
                  <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  Ask Us Anything
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section - Redesigned */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>

          {/* Testimonials Continuous Scroll */}
          <div className="mb-16 px-6 lg:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col group">

                      {/* Quote Icon */}
                      <div className="mb-3 sm:mb-4 flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-[#4411ab] rounded-lg flex items-center justify-center mx-auto group-hover:bg-[#4411ab]/10 transition-colors duration-300">
                          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#4411ab]" />
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="flex-grow mb-4 sm:mb-6">
                        <blockquote className="text-muted-foreground italic leading-relaxed text-sm sm:text-base">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                      </div>

                      {/* Client Info */}
                      <div className="mt-auto">
                        {/* Industry Badge */}
                        <div className="mb-3 sm:mb-4">
                          <Badge variant="outline" className="text-sm border-primary/20 text-primary bg-primary/5">
                            {testimonial.industry}
                          </Badge>
                        </div>

                        {/* Avatar and Details */}
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-105 transition-transform duration-300">
                            <AvatarImage src={`/avatars/${testimonial.avatar.toLowerCase()}.jpg`} />
                            <AvatarFallback className="bg-primary/10 text-primary text-sm sm:text-base font-semibold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-grow">
                            <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                            <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                          </div>
                        </div>

                        {/* Star Rating - Moved to the end */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-[#4411ab] text-[#4411ab]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </Section>

      {/* Enhanced CTA Banner Section */}
      <CTASection
        title="Stop Waiting, Start Growing"
        highlightText=""
        subtitle="Get a custom quote for your growth journey. Let's discuss how we can help you achieve measurable, sustainable growth that actually pays for itself."
        primaryButton={{
          text: "Schedule a Call",
          href: "/schedule-call",
          icon: Rocket
        }}
        secondaryButton={{
          text: "View Portfolio",
          href: "/case-studies",
          icon: Award
        }}
      />

    </div>
  );
}
