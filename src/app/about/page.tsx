"use client";

import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Rocket, Search, Clipboard, Zap, BarChart3, Sparkles, Award, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo } from 'react';

export default function AboutPage() {

  const processSteps = useMemo(() => [
    {
      id: 'discover',
      title: 'Discover',
      icon: Search,
      description: 'Deep dive into your business, market, and competitive landscape'
    },
    {
      id: 'plan',
      title: 'Plan',
      icon: Clipboard,
      description: 'Strategic roadmap with clear KPIs and measurable outcomes'
    },
    {
      id: 'execute',
      title: 'Execute',
      icon: Zap,
      description: 'Flawless implementation with real-time monitoring and adjustments'
    },
    {
      id: 'optimize',
      title: 'Optimize',
      icon: TrendingUp,
      description: 'Continuous improvement based on data insights and performance'
    },
    {
      id: 'report',
      title: 'Report',
      icon: BarChart3,
      description: 'Transparent reporting with actionable insights and ROI metrics'
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

    // Observe all process steps
    processSteps.forEach((step) => {
      const element = document.getElementById(step.id);
      if (element) observer.observe(element);
    });

    // Observe other sections
    const sections = ['mission', 'story', 'philosophy'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [processSteps]);

  return (
    <div className="min-h-screen bg-background">
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

        <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center min-h-screen pt-8 pb-8 lg:py-0">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 pr-0 lg:pr-8">
            {/* Enhanced Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
                <Badge variant="secondary" className="text-xs sm:text-sm">About Us</Badge>
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
              </div>
              <h1 className="text-[34px] sm:text-5xl md:text-5xl lg:text-5xl font-bold text-foreground leading-tight text-center sm:text-left">
                We're Not Just an Agency.{' '}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
                  We're Your Alignment Partners.
                </span>
              </h1>

              {/* Enhanced Subheadline - Minimal spacing */}
              <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed text-center sm:text-left">
                Vigital was founded on a single, powerful observation: Most businesses don't have a marketing problem; they have an alignment problem.
                <span className="block text-sm text-primary mt-4 font-medium">
                  ✨ ROI-Focused • Data-Driven • Results-Guaranteed ✨
                </span>
              </p>
            </div>

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
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-[#4411ab] group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-sm sm:text-base text-foreground">
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
                <span>Fast Results</span>
              </div>
            </div>
          </div>

          {/* Right Side - Single About Image (Desktop Only) */}
          <div className="hidden lg:block w-1/2 pl-8">
            <div className="relative h-[600px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                <Image
                  src="/about-banner.png"
                  alt="ROI Agency Team"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile & Tablet About Image - Inside Hero Section */}
          <div className="block lg:hidden w-full mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] sm:h-[400px]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-xl">
                  <Image
                    src="/about-banner.png"
                    alt="ROI Agency Team"
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

      {/* Mission Section - Enhanced */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10">
          <div id="mission" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Side - Enhanced Content */}
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Our Mission</span>
                  <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
                </div>

                {/* Enhanced Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Our Mission:{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    To Eliminate Misalignment
                  </span>
                </h2>

                {/* Enhanced Description with Narrative Flow */}
                {/* Enhanced Narrative Flow - Matching UI/UX */}
                <div className="space-y-2 sm:space-y-2">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    We watched for years as businesses wasted millions. We saw brilliant <span className="text-foreground font-medium">Digital Ad Campaigns</span> send thousands of qualified leads into a <span className="text-foreground font-medium">Virtual Black Hole</span>.
                  </p>

                  <div className="space-y-2 sm:space-y-2">
                    {/* The Problem Block - Muted Style */}
                    <div className="bg-gradient-to-r from-muted/20 to-muted/10 border border-muted/20 rounded-xl p-3 sm:p-4">
                      <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#4411ab]" />
                        Why?
                      </h4>
                      <p className="text-sm sm:text-base text-foreground leading-relaxed">
                        Because the ad agency wasn't talking to the sales team. The web developer didn't understand the CRM. The "Digital" front-end and "Virtual" back-end were completely disconnected, and the result was a "leaky bucket" of wasted money and lost opportunities.
                      </p>
                    </div>

                    {/* The Solution Block - Primary Style */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-3 sm:p-4">
                      <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#4411ab]" />
                        We knew there had to be a better way.
                      </h4>
                      <p className="text-sm sm:text-base text-foreground leading-relaxed">
                        Vigital was created to be the solution. We are a single, integrated team built from the ground up to manage your entire online system—from the first ad click to the final, closed sale. <span className="text-primary font-medium">No leaks. No waste. Just alignment.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-foreground pt-2 sm:pt-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Total Alignment</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Zero Waste</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Real Results</span>
                  </div>
                </div>
              </div>

              {/* Right Side - New Mission Alignment Image */}
              <div className="relative">
                <div className="relative h-[300px] sm:h-[450px] lg:h-[550px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                    <Image
                      src="/mission-final.png"
                      alt="Digital Meeting Virtual - No Leaks"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Story Section - Enhanced */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: '45px 45px'
          }}></div>
        </div>

        <div className="relative z-10">
          <div id="story" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Side - Single Story Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative h-[250px] sm:h-[400px] lg:h-[600px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                    <Image
                      src="/about-team-alignment.png"
                      alt="Team Alignment"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Content */}
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
                  <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  A Team Purpose-Built{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    for Alignment
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  You can&apos;t achieve true alignment with a team of siloed specialists. Our team is different. We are a unified, expert group of:
                </p>

                <div className="space-y-1 sm:space-y-4">
                  <div className="bg-gradient-to-r from-muted/20 to-muted/10 border border-muted/20 rounded-xl p-3 sm:p-4">
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Digital Strategists:</h4>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                      Masters of capturing high-intent customers (Vigital Ads, SEO, Web).
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-muted/20 to-muted/10 border border-muted/20 rounded-xl p-3 sm:p-4">
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Virtual Architects</h4>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">
                      Masters of efficiency and data (Vigital Operations, AI, CRM).
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                  &quot;Together, we act as a single, powerful extension of your business. We don&apos;t just &quot;hand off&quot; leads—we manage the entire journey, ensuring every part of your system is working together toward one goal: your profit.&quot;
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-foreground pt-2 sm:pt-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Team Founded</span>
                  </div>
                  <div className="w-1 h-1 bg-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Problem Focused</span>
                  </div>
                  <div className="w-1 h-1 bg-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Growth Driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section - Enhanced */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10">
          <div id="philosophy" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Side - Enhanced Content */}
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Our Philosophy</span>
                  <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Our Promise{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    to You
                  </span>
                </h2>

                <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-lg sm:text-xl font-bold text-foreground text-center mb-2 sm:mb-4">
                    &quot;We will never be a cost center. We are a profit engine.&quot;
                  </p>
                  <p className="text-sm sm:text-base text-foreground text-center leading-relaxed">
                    As your partners, our commitment is to your bottom line. That&apos;s why we stand by our <span className="text-foreground font-bold">2x ROI Guarantee</span>. We only succeed when you do. This isn&apos;t just our business model—it&apos;s who we are.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/20">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">Performance-based compensation</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/20">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-2 h-2 sm:w-3 sm:h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">Transparent ROI tracking</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/20">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">Continuous optimization focus</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-foreground pt-2 sm:pt-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>ROI Focused</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Performance Based</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Transparent</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Single Philosophy Image */}
              <div className="relative">
                <div className="relative h-[250px] sm:h-[400px] lg:h-[600px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                    <Image
                      src="/about-profit-promise.png"
                      alt="Profit Promise"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="pt-16 pb-20 lg:pt-12 lg:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-7xl">
          <div className="text-center mb-4 sm:mb-8">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Our Process</span>
              <div className="w-1 h-6 sm:h-8 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              How We Deliver{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Consistent Results
              </span>
            </h2>
            <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Our proven 5-step process ensures every project follows the same rigorous methodology for predictable, scalable success.
            </p>
          </div>

          <div className="relative">
            {/* Connecting lines container - positioned absolutely to overlay the grid */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
              <div className="flex items-center justify-between h-full px-6">
                {/* Line between card 1 and 2 */}
                <div className="flex-1 flex items-center">
                  <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
                  <div className="flex-1 h-0.5 border-t-2 border-dotted border-primary/40 mx-4"></div>
                  <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
                </div>

                {/* Line between card 2 and 3 */}
                <div className="flex-1 flex items-center">
                  <div className="flex-1 h-0.5 border-t-2 border-dotted border-primary/40 mx-4"></div>
                  <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
                </div>

                {/* Line between card 3 and 4 */}
                <div className="flex-1 flex items-center">
                  <div className="flex-1 h-0.5 border-t-2 border-dotted border-primary/40 mx-4"></div>
                  <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
                </div>

                {/* Line between card 4 and 5 */}
                <div className="flex-1 flex items-center">
                  <div className="flex-1 h-0.5 border-t-2 border-dotted border-primary/40 mx-4"></div>
                  <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
                </div>

                {/* Final circle for card 5 */}
                <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-20">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  id={step.id}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm text-center h-full">
                    <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                      <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                        {/* Icon */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#4411ab] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                          <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#4411ab]" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="font-bold text-foreground text-sm sm:text-base mb-1 sm:mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA Section */}
      <CTASection
        title="Ready to Work With a Team That Gets Results?"
        highlightText="Results"
        subtitle="Let's discuss how our data-driven approach can transform your business and deliver the ROI you deserve."
        primaryButton={{
          text: "Schedule a Call",
          href: "/schedule-call",
          icon: Rocket
        }}
        secondaryButton={{
          text: "See Our Results",
          href: "/case-studies",
          icon: Award
        }}
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
