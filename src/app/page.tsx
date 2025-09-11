"use client";

import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CTASection } from '@/components/cta-section';
import { ArrowRight, TrendingUp, Globe, Search, Users, Palette, Bot, Zap, BarChart3, Target, Eye, RotateCcw, Sparkles, Rocket, Award, Clock, Star, CheckCircle, Mail, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const typewriterServices = [
  'Performance Marketing',
  'Web Development', 
  'SEO Optimization',
  'AI Automation',
  'Brand Design'
];

export default function Home() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const services = [
    {
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that convert and scale',
      icon: TrendingUp,
      href: '/services',
      gradient: 'from-blue-500 to-purple-600',
      features: ['PPC Management', 'Conversion Optimization', 'A/B Testing', 'ROI Tracking']
    },
    {
      title: 'Web Development',
      description: 'Modern, fast websites that drive results',
      icon: Globe,
      href: '/services',
      gradient: 'from-green-500 to-blue-600',
      features: ['Custom Development', 'E-commerce Solutions', 'Performance Optimization', 'SEO Integration']
    },
    {
      title: 'SEO That Matters',
      description: 'Organic growth that actually moves the needle',
      icon: Search,
      href: '/services',
      gradient: 'from-orange-500 to-red-600',
      features: ['Technical SEO', 'Content Strategy', 'Local SEO', 'Link Building']
    },
    {
      title: 'CRM & Automation',
      description: 'Streamline operations and boost efficiency',
      icon: Users,
      href: '/services',
      gradient: 'from-purple-500 to-pink-600',
      features: ['Sales Automation', 'Lead Nurturing', 'Customer Segmentation', 'Workflow Optimization']
    },
    {
      title: 'Graphic Design/Branding',
      description: 'Visual identity that builds trust and recognition',
      icon: Palette,
      href: '/services',
      gradient: 'from-yellow-500 to-orange-600',
      features: ['Brand Identity', 'Logo Design', 'Marketing Materials', 'Social Media Assets']
    },
    {
      title: 'AI Agents for Business',
      description: 'Intelligent automation for modern companies',
      icon: Bot,
      href: '/services',
      gradient: 'from-indigo-500 to-cyan-600',
      features: ['Chatbot Development', 'Process Automation', 'Data Analysis', 'Predictive Insights']
    }
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentText.length < typewriterServices[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(typewriterServices[currentIndex].slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % typewriterServices.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping]);

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

  const caseStudies = [
    {
      id: 1,
      title: 'TechFlow Inc.',
      industry: 'SaaS',
      description: 'Increased conversion rate by 340% and generated $2.4M in revenue through data-driven marketing strategies.',
      logo: 'TF',
      services: ['Performance Marketing', 'Web Development', 'SEO'],
      results: ['340% Conversion Increase', '$2.4M Revenue Generated', '95% Client Retention'],
      href: '/case-studies/techflow',
      icon: '🏢',
      gradient: 'from-blue-900 via-blue-800 to-purple-900',
      rotation: '-rotate-2',
      hasWebsitePreview: true,
      subtitle: 'Real Estate Excellence'
    },
    {
      id: 2,
      title: 'GrowthLab',
      industry: 'E-commerce',
      description: 'Transformed their marketing from cost center to profit driver with AI-powered automation and optimization.',
      logo: 'GL',
      services: ['CRM & Automation', 'Performance Marketing', 'AI Agents'],
      results: ['140% Conversion Increase', '3x ROI on Marketing Spend', 'Automated Lead Nurturing'],
      href: '/case-studies/growthlab',
      icon: '🔨',
      gradient: 'from-amber-900 via-orange-800 to-red-900',
      rotation: 'rotate-2',
      hasWebsitePreview: true,
      subtitle: 'Woodwork Excellence'
    },
    {
      id: 3,
      title: 'ScaleUp Solutions',
      industry: 'FinTech',
      description: 'Achieved measurable ROI through transparent reporting and data-driven decision making.',
      logo: 'SS',
      services: ['Data Analytics', 'Performance Marketing', 'Transparent Reporting'],
      results: ['Real-time ROI Tracking', 'Data-Driven Decisions', 'Transparent Reporting'],
      href: '/case-studies/scaleup',
      icon: '🚀',
      gradient: 'from-green-900 via-emerald-800 to-teal-900',
      rotation: '-rotate-1',
      hasWebsitePreview: false,
      subtitle: 'Digital Transformation'
    },
    {
      id: 4,
      title: 'InnovateCorp',
      industry: 'Manufacturing',
      description: 'Built sustainable marketing systems that continue generating results long after campaign launch.',
      logo: 'IC',
      services: ['System Building', 'Long-term Strategy', 'Performance Marketing'],
      results: ['Sustainable Growth', 'Long-term Results', 'System Optimization'],
      href: '/case-studies/innovatecorp',
      icon: '🎨',
      gradient: 'from-purple-900 via-violet-800 to-indigo-900',
      rotation: 'rotate-1',
      hasWebsitePreview: true,
      subtitle: 'Brand Identity'
    },
    {
      id: 5,
      title: 'HealthTech Solutions',
      industry: 'Healthcare',
      description: 'Revolutionized patient engagement through digital marketing and streamlined appointment booking systems.',
      logo: 'HTS',
      services: ['Healthcare Marketing', 'Patient Acquisition', 'Digital Transformation'],
      results: ['+180% Patient Engagement', '95% Online Bookings', '40% Cost Reduction'],
      href: '/case-studies/healthtech',
      icon: '🏥',
      gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
      rotation: '-rotate-1',
      hasWebsitePreview: false,
      subtitle: 'Digital Healthcare'
    },
    {
      id: 6,
      title: 'EduLearn Academy',
      industry: 'Education',
      description: 'Transformed online learning platform with AI-powered personalization and student success tracking.',
      logo: 'ELA',
      services: ['EdTech Marketing', 'AI Integration', 'Student Analytics'],
      results: ['+250% Course Completion', '85% Student Satisfaction', '60% Revenue Growth'],
      href: '/case-studies/edulearn',
      icon: '🎓',
      gradient: 'from-amber-300 via-yellow-200 to-orange-300',
      rotation: 'rotate-2',
      hasWebsitePreview: true,
      subtitle: 'Educational Innovation'
    }
  ];

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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10 animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 via-transparent to-primary/5 animate-pulse delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 flex items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 pr-0 lg:pr-8">
            {/* Enhanced Main Headline */}
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
                <Badge variant="secondary" className="text-xs sm:text-sm">2025&apos;s Most Innovative Agency</Badge>
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#4411ab] animate-pulse" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-center sm:text-left">
                Marketing That{' '}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-pulse">
                  Delivers ROI
                </span>
              </h1>
              
              {/* Text Type Animation for Services */}
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-3 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[4.5rem]">
                <span className="text-base sm:text-lg md:text-xl text-muted-foreground whitespace-nowrap text-center sm:text-left">We specialize in:</span>
                <div className="relative flex items-center justify-center sm:justify-start min-w-[220px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] h-8 sm:h-8 md:h-10 lg:h-12 w-full sm:w-auto">
                  <div className="text-base sm:text-lg md:text-xl font-semibold text-primary typewriter-container w-full text-center sm:text-left">
                    <span className="typewriter-text">{currentText}</span>
                    <span className="typewriter-cursor animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center sm:text-left">
              Your marketing spend should always pay for itself.
              <span className="block text-sm text-primary mt-2 font-medium">
                ✨ AI-Powered • Data-Driven • Results-Guaranteed ✨
              </span>
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
              <Button size="sm" className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 text-base sm:text-lg lg:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-[#4411ab] group" asChild>
                <a href="/schedule-call">
                  <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  Schedule a Call
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300 text-white" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 text-base sm:text-lg lg:text-xl font-semibold border-2 hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group" asChild>
                <a href="/case-studies">
                  <Award className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4411ab] group-hover:text-white transition-colors duration-300" />
                  See Work
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4411ab] group-hover:translate-x-1 transition-transform duration-300" />
                </a>
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

          {/* Right Side - Portfolio Showcase */}
          <div className="hidden lg:block w-1/2 pl-8">
            <div className="relative h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-muted/20 to-background/50 backdrop-blur-sm border border-muted/20">
              {/* Portfolio Screenshots Container */}
              <div className="absolute inset-0 flex flex-col animate-scroll-up">
                {/* First Set of Screenshots */}
                <div className="flex-shrink-0 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/techflow-dashboard.jpg" alt="TechFlow Dashboard" className="w-full h-full object-cover rounded-lg" /> */}
                        TechFlow Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">TechFlow Dashboard</h4>
                      <p className="text-sm text-muted-foreground">SaaS Analytics Platform</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-xl p-4 border border-green-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/growthlab-ecommerce.jpg" alt="GrowthLab E-commerce" className="w-full h-full object-cover rounded-lg" /> */}
                        GrowthLab Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">GrowthLab E-commerce</h4>
                      <p className="text-sm text-muted-foreground">Online Store Design</p>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-4 border border-orange-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/scaleup-fintech.jpg" alt="ScaleUp FinTech" className="w-full h-full object-cover rounded-lg" /> */}
                        ScaleUp Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">ScaleUp FinTech</h4>
                      <p className="text-sm text-muted-foreground">Banking App Interface</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/innovatecorp-crm.jpg" alt="InnovateCorp CRM" className="w-full h-full object-cover rounded-lg" /> */}
                        InnovateCorp Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">InnovateCorp CRM</h4>
                      <p className="text-sm text-muted-foreground">Sales Management System</p>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl p-4 border border-yellow-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/futuretech-brand.jpg" alt="FutureTech Brand" className="w-full h-full object-cover rounded-lg" /> */}
                        FutureTech Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">FutureTech Brand</h4>
                      <p className="text-sm text-muted-foreground">Healthcare Brand Identity</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-600/20 rounded-xl p-4 border border-indigo-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/ai-agent-platform.jpg" alt="AI Agent Platform" className="w-full h-full object-cover rounded-lg" /> */}
                        AI Platform Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">AI Agent Platform</h4>
                      <p className="text-sm text-muted-foreground">Automation Dashboard</p>
                    </div>
                  </div>
                </div>

                {/* Duplicate Set for Seamless Loop */}
                <div className="flex-shrink-0 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/techflow-dashboard.jpg" alt="TechFlow Dashboard" className="w-full h-full object-cover rounded-lg" /> */}
                        TechFlow Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">TechFlow Dashboard</h4>
                      <p className="text-sm text-muted-foreground">SaaS Analytics Platform</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-xl p-4 border border-green-500/20">
                      <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center text-white font-semibold text-sm">
                        {/* Replace this div with: <img src="/portfolio/growthlab-ecommerce.jpg" alt="GrowthLab E-commerce" className="w-full h-full object-cover rounded-lg" /> */}
                        GrowthLab Screenshot
                      </div>
                      <h4 className="text-sm font-semibold text-foreground">GrowthLab E-commerce</h4>
                      <p className="text-sm text-muted-foreground">Online Store Design</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay Gradient for Smooth Edges */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent"></div>
            </div>

            {/* Portfolio Stats */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Live Portfolio</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span>Continuous Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center group cursor-pointer hover:border-primary/50 transition-colors duration-200">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse group-hover:bg-primary/50 transition-colors duration-200"></div>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel Section */}
      <section className="py-12 lg:py-24 bg-gradient-to-r from-muted/20 to-background">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve helped businesses across various industries achieve remarkable growth and ROI
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* First row of logos */}
            <div className="flex animate-scroll-left">
              <div className="flex space-x-8 sm:space-x-16 items-center min-w-max">
                {/* Client Logo 1 */}
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-blue-600">TechCorp</span>
                </div>
                
                {/* Client Logo 2 */}
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-lg border border-green-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-green-600">GrowthLab</span>
                </div>
                
                {/* Client Logo 3 */}
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-lg border border-orange-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-orange-600">ScaleUp</span>
                </div>
                
                {/* Client Logo 4 */}
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-lg border border-purple-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-purple-600">InnovateCorp</span>
                </div>
                
                {/* Client Logo 5 */}
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-lg border border-yellow-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-yellow-600">FutureTech</span>
                </div>
                
                {/* Client Logo 6 */}
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-indigo-500/10 to-cyan-600/10 rounded-lg border border-indigo-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-indigo-600">DataFlow</span>
                </div>
                
                {/* Duplicate logos for seamless loop */}
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-blue-600">TechCorp</span>
                </div>
                
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-lg border border-green-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-green-600">GrowthLab</span>
                </div>
                
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-lg border border-orange-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-orange-600">ScaleUp</span>
                </div>
                
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-lg border border-purple-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-purple-600">InnovateCorp</span>
                </div>
                
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-lg border border-yellow-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-yellow-600">FutureTech</span>
                </div>
                
                <div className="flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-indigo-500/10 to-cyan-600/10 rounded-lg border border-indigo-500/20 p-2 sm:p-4">
                  <span className="text-sm sm:text-base font-bold text-indigo-600">DataFlow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Minimal Design with Tabs */}
      <section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-gradient-to-br from-white to-blue-50/30">
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

          {/* Category Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-muted/30 rounded-lg p-1 border border-muted/20">
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-primary text-primary-foreground font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base">
                <Globe className="mr-2 w-4 h-4 text-white" />
                All Projects
              </button>
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-md text-muted-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                <Bot className="mr-2 w-4 h-4 text-[#4411ab] group-hover:text-white transition-colors duration-300" />
                SaaS
              </button>
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-md text-muted-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                <Palette className="mr-2 w-4 h-4 text-[#4411ab] group-hover:text-white transition-colors duration-300" />
                E-commerce
              </button>
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-md text-muted-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                <BarChart3 className="mr-2 w-4 h-4 text-[#4411ab] group-hover:text-white transition-colors duration-300" />
                FinTech
              </button>
            </div>
          </div>

          {/* Case Study Cards Grid - Minimal Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="group">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  {/* Card Header - Minimal */}
                  <div className={`h-24 sm:h-28 bg-gradient-to-br ${study.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 p-4 sm:p-6 flex items-center justify-between">
                      <div className="text-white">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-sm sm:text-base">{study.icon}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold">{study.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">
                          {study.industry}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content - Minimal */}
                  <div className="p-4 sm:p-6">
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full px-4 py-2 text-sm font-semibold border-[#4411ab] text-[#4411ab] hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group"
                      asChild
                    >
                      <a href={study.href}>
                        View Details
                        <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button - Minimal */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <Button size="sm" className="px-6 py-3 sm:px-8 sm:py-6 text-sm sm:text-lg font-semibold bg-primary hover:bg-[#4411ab] text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
              <a href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Teaser Section - Simple & Clean */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background">
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
          {services.map((service, index) => (
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
                    {service.features.map((feature, idx) => (
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
                    <a href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#4411ab] group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
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
            className="bg-primary hover:bg-[#4411ab] text-primary-foreground group px-6 py-3 sm:px-8 sm:py-6 text-sm sm:text-lg" 
            asChild
          >
            <a href="/services">
              <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
        </div>
      </Section>

      {/* Stats/Results Section - Simple & Clean */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background">
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
            className="border-primary/30 text-primary hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group px-6 py-3 sm:px-8 sm:py-6 text-sm sm:text-lg" 
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
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background">
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
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background">
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
                    className="bg-primary hover:bg-[#4411ab] text-primary-foreground px-4 sm:px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-300 group text-sm sm:text-base" 
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
            <div className="lg:sticky lg:top-32 relative h-fit">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl border border-primary/20 overflow-hidden">
                {/* Placeholder for actual image - Replace this div with: <img src="/images/why-choose-us.jpg" alt="ROI Agency Team" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#4411ab]" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 sm:w-32 sm:h-4 bg-primary/10 rounded-full mx-auto"></div>
                      <div className="w-20 h-2 sm:w-24 sm:h-3 bg-primary/5 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-base sm:text-lg font-bold text-primary">340%</div>
                  <div className="text-sm text-muted-foreground">Avg. ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section - Redesigned */}
      <Section className="pt-8 pb-12 lg:pt-12 lg:pb-24 bg-background">
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
                <a href="/contact">
                  <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  Ask Us Anything
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </a>
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
          <div className="mb-16">
            <div className="relative overflow-hidden">
              {/* Continuous scrolling testimonials */}
              <div className="flex animate-scroll-left">
                <div className="flex space-x-4 sm:space-x-8 items-stretch min-w-max">
                  {/* First set of testimonials */}
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-72 sm:w-80 flex-shrink-0">
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
                    </div>
                  ))}
                  
                  {/* Duplicate testimonials for seamless loop */}
                  {testimonials.map((testimonial, index) => (
                    <div key={`duplicate-${index}`} className="w-72 sm:w-80 flex-shrink-0">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced CTA Banner Section */}
      <CTASection
        title="Stop Waiting, Start Growing"
        highlightText="Growing"
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
