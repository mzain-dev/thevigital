"use client";

import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Rocket, Search, Clipboard, Zap, BarChart3, Sparkles, Award, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
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
                  <Sparkles className="w-6 h-6 text-[#4411ab] animate-pulse" />
                  <Badge variant="secondary" className="text-xs">About Us</Badge>
                  <Sparkles className="w-6 h-6 text-[#4411ab] animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Your Growth{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
                    Our Job
                  </span>
                </h1>
                
                {/* Enhanced Subheadline */}
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  We&apos;re a team of data-driven marketers, developers, and strategists who believe that every marketing dollar should work harder than the last.
                  <span className="block text-sm text-primary mt-2 font-medium">
                    ✨ ROI-Focused • Data-Driven • Results-Guaranteed ✨
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
                  <Link href="/case-studies">
                    <Award className="mr-2 w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    View Our Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#4411ab]" />
                  <span>24/7 Support</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#4411ab]" />
                  <span>ROI Guaranteed</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#4411ab]" />
                  <span>Fast Results</span>
                </div>
              </div>
            </div>

            {/* Right Side - Content Images */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-rotate-1"
                  style={{ animationDelay: '0ms' }}
                >
                  <div className="aspect-square bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
                    <div className="text-center space-y-3 p-6">
                      <div className="w-16 h-16 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                        <Target className="w-8 h-8 text-[#4411ab]" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">Data-Driven</h3>
                      <Badge variant="secondary" className="text-xs">
                        Core Value
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
                        <TrendingUp className="w-8 h-8 text-[#4411ab]" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">ROI Focused</h3>
                      <Badge variant="secondary" className="text-xs">
                        Mission
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
                      <h3 className="font-semibold text-sm text-foreground">Team First</h3>
                      <Badge variant="secondary" className="text-xs">
                        Culture
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
                        <Lightbulb className="w-8 h-8 text-[#4411ab]" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">Innovation</h3>
                      <Badge variant="secondary" className="text-xs">
                        Approach
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Enhanced */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          <div id="mission" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Enhanced Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Mission</span>
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                </div>
                
                {/* Enhanced Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Data-Driven Results,{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    ROI-First Approach
                  </span>
                </h2>
                
                {/* Enhanced Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the power of data to drive decisions, not hunches. Every strategy we create, every campaign we run, and every optimization we make is backed by solid analytics and measurable outcomes.
                </p>
                
                {/* Minimal Enhanced Checklist */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="w-5 h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-base text-foreground">Performance-based pricing models</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="w-5 h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-base text-foreground">Real-time data monitoring and optimization</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="w-5 h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-base text-foreground">Transparent reporting and insights</span>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#4411ab]" />
                    <span>Data-Driven</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#4411ab]" />
                    <span>ROI Focused</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4411ab]" />
                    <span>Results Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Content */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* Main Visual - Mission/Data Image */}
                  <div className="col-span-2">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-lg">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center space-y-4 p-8">
                          <div className="w-20 h-20 border-2 border-[#4411ab] rounded-2xl flex items-center justify-center mx-auto">
                            <Target className="w-10 h-10 text-[#4411ab]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Mission Visual</h3>
                            <p className="text-sm text-muted-foreground">Data-driven strategies in action</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Supporting Visuals */}
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-md">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-3 p-4">
                        <div className="w-12 h-12 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                          <TrendingUp className="w-6 h-6 text-[#4411ab]" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">2x</div>
                          <div className="text-xs text-muted-foreground">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-md">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-3 p-4">
                        <div className="w-12 h-12 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                          <CheckCircle className="w-6 h-6 text-[#4411ab]" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">99%</div>
                          <div className="text-xs text-muted-foreground">Success</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Story Section - Enhanced */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: '45px 45px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          <div id="story" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Visual Content */}
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  {/* Timeline Visual */}
                  <div className="col-span-2">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-lg">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center space-y-4 p-8">
                          <div className="w-20 h-20 border-2 border-[#4411ab] rounded-2xl flex items-center justify-center mx-auto">
                            <Users className="w-10 h-10 text-[#4411ab]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Our Journey</h3>
                            <p className="text-sm text-muted-foreground">From 2019 to today</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Years */}
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-md">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-2 p-4">
                        <div className="w-12 h-12 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                          <span className="text-lg font-bold text-[#4411ab]">19</span>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">2019</div>
                          <div className="text-xs text-muted-foreground">Founded</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-md">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-2 p-4">
                        <div className="w-12 h-12 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                          <span className="text-lg font-bold text-[#4411ab]">25</span>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">2025</div>
                          <div className="text-xs text-muted-foreground">Today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Why We Started,{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    What Sets Us Apart
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2019, ROI Agency was born from frustration with traditional marketing agencies that promised the world but delivered vague results and empty promises.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-muted/20 to-muted/10 border border-muted/20 rounded-xl p-4 pl-0">
                    <h4 className="font-semibold text-foreground mb-2">The Problem We Solved</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Too many businesses were spending money on marketing without seeing real returns. We decided to change that by focusing on measurable outcomes.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">What Makes Us Different</h4>
                    <p className="text-muted-foreground">
                      We don&apos;t just create campaigns; we build systems that continuously optimize and improve performance based on real data.
                    </p>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#4411ab]" />
                    <span>Team Founded</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#4411ab]" />
                    <span>Problem Focused</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#4411ab]" />
                    <span>Growth Driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section - Enhanced */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          <div id="philosophy" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Enhanced Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Philosophy</span>
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Marketing Should{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Pay for Itself
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-6">
                  <p className="text-xl font-bold text-foreground text-center mb-4">
                    &quot;Marketing expenditures should pay for themselves&quot;
                  </p>
                  <p className="text-base text-muted-foreground text-center">
                    This isn&apos;t just a slogan—it&apos;s our core principle. We believe every marketing dollar should generate at least $2 in return.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="w-5 h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-3 h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-base text-foreground">Performance-based compensation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="w-5 h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-3 h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-base text-foreground">Transparent ROI tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="w-5 h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-base text-foreground">Continuous optimization focus</span>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#4411ab]" />
                    <span>ROI Focused</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#4411ab]" />
                    <span>Performance Based</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4411ab]" />
                    <span>Transparent</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Content */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* ROI Visual */}
                  <div className="col-span-2">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-lg">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center space-y-4 p-8">
                          <div className="w-20 h-20 border-2 border-[#4411ab] rounded-2xl flex items-center justify-center mx-auto">
                            <TrendingUp className="w-10 h-10 text-[#4411ab]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">ROI Philosophy</h3>
                            <p className="text-sm text-muted-foreground">$1 investment → $2+ return</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Investment & Return Visuals */}
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-md">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-2 p-4">
                        <div className="w-12 h-12 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                          <span className="text-lg font-bold text-[#4411ab]">$1</span>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">Investment</div>
                          <div className="text-xs text-muted-foreground">Marketing Spend</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-muted/20 overflow-hidden shadow-md">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-2 p-4">
                        <div className="w-12 h-12 border-2 border-[#4411ab] rounded-xl flex items-center justify-center mx-auto">
                          <span className="text-lg font-bold text-[#4411ab]">$2+</span>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">Return</div>
                          <div className="text-xs text-muted-foreground">Guaranteed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Process</span>
              <div className="w-1 h-8 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Deliver{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Consistent Results
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-20">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  id={step.id}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm text-center h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="space-y-4 flex-1 flex flex-col">
                        {/* Icon */}
                        <div className="w-16 h-16 border-2 border-[#4411ab] rounded-2xl flex items-center justify-center mx-auto">
                          <step.icon className="w-8 h-8 text-[#4411ab]" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="font-bold text-foreground text-base mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
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
