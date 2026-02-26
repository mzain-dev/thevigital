"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CTASection } from '@/components/cta-section';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Clock, CheckCircle, Star, BarChart3, Globe, Zap, Award, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudiesData } from '@/lib/case-studies-data';

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const categories = ['All Projects', ...Array.from(new Set(caseStudiesData.map(study => study.category)))];
  
  const filteredStudies = activeTab === 'All Projects' 
    ? caseStudiesData 
    : caseStudiesData.filter(study => study.category === activeTab);
    
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
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
                <Badge variant="secondary" className="text-xs sm:text-sm">Success Stories</Badge>
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
              </div>
              <h1 className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-center sm:text-left">
                Case Studies
              </h1>

              {/* Enhanced Subheadline - Minimal spacing */}
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center sm:text-left">
                Real results from real businesses. See how we&apos;ve helped companies across industries achieve measurable growth.
                <span className="block text-sm text-primary mt-1 font-medium">
                  ✨ Proven Results • Data-Driven • ROI-Focused ✨
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
                <Link href="/services">
                  <Award className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-[#4411ab] group-hover:text-white transition-colors duration-300" />
                  View Services
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#4411ab]" />
                <span>260% Avg. Growth</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#4411ab]" />
                <span>95% Success Rate</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#4411ab]" />
                <span>Data-Driven</span>
              </div>
            </div>
          </div>

          {/* Right Side - Single Case Studies Image */}
          <div className="hidden lg:block w-1/2 pl-8">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                <Image
                  src="/hero-image-v2.png"
                  alt="ROI Agency Case Studies"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Case Studies Image - Inside Hero Section */}
          <div className="block lg:hidden w-full mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[300px] sm:h-[400px]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-xl">
                  <Image
                    src="/hero-image-v2.png"
                    alt="ROI Agency Case Studies"
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

      {/* Case Studies Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Categories Tabs */}
          <div className="flex justify-center mb-12 md:mb-12 w-full px-2 md:px-0">
             <Tabs defaultValue="All Projects" className="w-full max-w-4xl flex flex-col items-center" onValueChange={setActiveTab}>
              <TabsList className="flex w-full flex-wrap justify-center gap-2 md:gap-3 p-0 bg-transparent mb-2 md:mb-8">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="flex-none rounded-full px-3 py-1.5 md:px-6 md:py-1.5 text-xs md:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted text-foreground border border-transparent shadow-md hover:bg-muted/80 data-[state=active]:shadow-md transition-all duration-300 whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  {/* Card Image */}
                  <div className="h-48 sm:h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                    {/* Replace this div with your actual case study image: */}
                    {/* <img src={`/case-studies/${study.id}-hero.jpg`} alt={study.title} className="w-full h-full object-cover" /> */}

                    {/* Placeholder for now */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-4xl sm:text-5xl">📊</span>
                    </div>

                    {/* Badge overlay */}
                    <div className="absolute top-3 left-3">
                      <Badge variant={study.badgeVariant} className="text-xs">
                        {study.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content - Minimal */}
                  <div className="p-4 sm:p-6">
                    <div className="mb-3">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{study.company}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>
                    </div>

                    {/* Service Name */}
                    <div className="mb-4">
                      <div className="text-lg sm:text-xl font-semibold text-primary mb-1">
                        {study.services[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Primary Service
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold border-[#4411ab] text-[#4411ab] hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group"
                      asChild
                    >
                      <Link href={`/case-studies/${study.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
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
