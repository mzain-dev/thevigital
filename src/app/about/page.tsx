"use client";

import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Rocket, Search, Clipboard, Zap, BarChart3, Sparkles, Award, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AboutPage() {

  const processSteps = [
    {
      id: 'discover',
      title: 'Discover',
      icon: Search,
      description: 'Deep dive into your business, market, and competitive landscape',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'plan',
      title: 'Plan',
      icon: Clipboard,
      description: 'Strategic roadmap with clear KPIs and measurable outcomes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'execute',
      title: 'Execute',
      icon: Zap,
      description: 'Flawless implementation with real-time monitoring and adjustments',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'optimize',
      title: 'Optimize',
      icon: TrendingUp,
      description: 'Continuous improvement based on data insights and performance',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'report',
      title: 'Report',
      icon: BarChart3,
      description: 'Transparent reporting with actionable insights and ROI metrics',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

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
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                  <Badge variant="secondary" className="text-xs">About Us</Badge>
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  We&apos;re Not Just{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Another Agency
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We&apos;re a team of data-driven marketers, developers, and strategists who believe that every marketing dollar should work harder than the last.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" asChild>
                  <Link href="/contact">
                    <Rocket className="mr-2 w-5 h-5" />
                    Let&apos;s Talk
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:scale-105 transition-all duration-200 group" asChild>
                  <Link href="/case-studies">
                    <Award className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                    View Our Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <Target className="w-10 h-10" />
                    </div>
                    <div className="w-full h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="space-y-6 pt-6">
                    <div className="w-full h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <Users className="w-8 h-8" />
                    </div>
                    <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <Lightbulb className="w-10 h-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div id="mission" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Mission</span>
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Data-Driven Results,{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    ROI-First Approach
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the power of data to drive decisions, not hunches. Every strategy we create, every campaign we run, and every optimization we make is backed by solid analytics and measurable outcomes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-base text-foreground">Performance-based pricing models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-base text-foreground">Real-time data monitoring and optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-base text-foreground">Transparent reporting and insights</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                        <Target className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Mission Statement</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          &quot;To deliver measurable, sustainable growth for our clients through data-driven strategies that consistently outperform industry benchmarks.&quot;
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">2x</div>
                          <div className="text-sm text-muted-foreground">ROI Baseline</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">24/7</div>
                          <div className="text-sm text-muted-foreground">Monitoring</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">99%</div>
                          <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div id="story" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Visual */}
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-full h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <span className="text-sm font-semibold">2019</span>
                    </div>
                    <div className="w-full h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <span className="text-sm font-semibold">2021</span>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="w-full h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <span className="text-sm font-semibold">2023</span>
                    </div>
                    <div className="w-full h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <span className="text-sm font-semibold">2025</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl"></div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-4">
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
                  <div className="bg-gradient-to-r from-muted/20 to-muted/10 border border-muted/20 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">The Problem We Solved</h4>
                    <p className="text-muted-foreground">
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
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div id="philosophy" className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 mb-4">
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
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-base text-foreground">Performance-based compensation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-base text-foreground">Transparent ROI tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-base text-foreground">Continuous optimization focus</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-full h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold">$1</div>
                        <div className="text-xs">Investment</div>
                      </div>
                    </div>
                    <div className="w-full h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold">→</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="w-full h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold">→</div>
                      </div>
                    </div>
                    <div className="w-full h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold">$2+</div>
                        <div className="text-xs">Return</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-16">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                id={step.id}
                className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Step Number */}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-xl mx-auto`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      
                      {/* Content */}
                      <div>
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
      </Section>

      {/* Bottom CTA Section */}
      <Section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="text-center space-y-8 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Work With a Team That Gets Results?
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Let&apos;s discuss how our data-driven approach can transform your business and deliver the ROI you deserve.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/case-studies">
                See Our Results
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

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
