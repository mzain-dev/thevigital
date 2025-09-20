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
              <h1 className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-center sm:text-left">
                Your Growth{' '}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
                  Our Job
                </span>
              </h1>
              
              {/* Enhanced Subheadline - Minimal spacing */}
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center sm:text-left">
                We&apos;re a team of data-driven marketers, developers, and strategists who believe that every marketing dollar should work harder than the last.
                <span className="block text-sm text-primary mt-1 font-medium">
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
                <span>Fast Results</span>
              </div>
            </div>
          </div>

          {/* Right Side - Single About Image (Desktop Only) */}
          <div className="hidden lg:block w-1/2 pl-8">
            <div className="relative h-[600px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Replace this div with your actual about image: */}
                  {/* <img src="/about/team-image.jpg" alt="ROI Agency Team" className="w-full h-full object-contain" /> */}
                  
                  {/* Placeholder for now - Image only */}
                  <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl">👥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet About Image - Inside Hero Section */}
          <div className="block lg:hidden w-full mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] sm:h-[400px]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-xl">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* Replace with your about image: */}
                    {/* <img src="/about/team-image.jpg" alt="ROI Agency Team" className="w-full h-full object-contain" /> */}
                    
                    {/* Mobile Placeholder - Image only */}
                    <div className="w-full h-full bg-gray-300 rounded-xl flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl">👥</span>
                    </div>
                  </div>
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
                  Data-Driven Results,{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    ROI-First Approach
                  </span>
                </h2>
                
                {/* Enhanced Description */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We believe in the power of data to drive decisions, not hunches. Every strategy we create, every campaign we run, and every optimization we make is backed by solid analytics and measurable outcomes.
                </p>
                
                {/* Minimal Enhanced Checklist */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/20">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">Performance-based pricing models</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/20">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">Real-time data monitoring and optimization</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/20">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#4411ab] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-[#4411ab]" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">Transparent reporting and insights</span>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Data-Driven</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>ROI Focused</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Results Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Single Mission Image */}
              <div className="relative">
                <div className="relative h-[250px] sm:h-[400px] lg:h-[600px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Replace this div with your actual mission image: */}
                      {/* <img src="/about/mission-image.jpg" alt="ROI Agency Mission" className="w-full h-full object-contain" /> */}
                      
                      {/* Placeholder for now - Image only */}
                      <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                        <span className="text-6xl">🎯</span>
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
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Replace this div with your actual story image: */}
                      {/* <img src="/about/story-image.jpg" alt="ROI Agency Story" className="w-full h-full object-contain" /> */}
                      
                      {/* Placeholder for now - Image only */}
                      <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                        <span className="text-6xl">📈</span>
                      </div>
                    </div>
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
                  Why We Started,{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    What Sets Us Apart
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Founded in 2019, ROI Agency was born from frustration with traditional marketing agencies that promised the world but delivered vague results and empty promises.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-gradient-to-r from-muted/20 to-muted/10 border border-muted/20 rounded-xl p-3 sm:p-4">
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">The Problem We Solved</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Too many businesses were spending money on marketing without seeing real returns. We decided to change that by focusing on measurable outcomes.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-3 sm:p-4">
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">What Makes Us Different</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      We don&apos;t just create campaigns; we build systems that continuously optimize and improve performance based on real data.
                    </p>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Team Founded</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#4411ab]" />
                    <span>Problem Focused</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
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
                  Marketing Should{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Pay for Itself
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-lg sm:text-xl font-bold text-foreground text-center mb-2 sm:mb-4">
                    &quot;Marketing expenditures should pay for themselves&quot;
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                    This isn&apos;t just a slogan—it&apos;s our core principle. We believe every marketing dollar should generate at least $2 in return.
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
                <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
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
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Replace this div with your actual philosophy image: */}
                      {/* <img src="/about/philosophy-image.jpg" alt="ROI Agency Philosophy" className="w-full h-full object-contain" /> */}
                      
                      {/* Placeholder for now - Image only */}
                      <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                        <span className="text-6xl">💰</span>
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
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
