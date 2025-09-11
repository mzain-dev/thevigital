'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X, LogIn, Phone, TrendingUp, Globe, Search, Users, Palette, Bot } from 'lucide-react';
import { ColorPicker } from './color-picker';
import Link from 'next/link';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const services = [
    {
      name: 'Performance Marketing',
      href: '/services#performance-marketing',
      icon: TrendingUp,
      description: 'Data-driven campaigns that convert'
    },
    {
      name: 'Web Development',
      href: '/services#web-development',
      icon: Globe,
      description: 'Modern, fast websites that drive results'
    },
    {
      name: 'SEO Optimization',
      href: '/services#seo',
      icon: Search,
      description: 'Organic growth that moves the needle'
    },
    {
      name: 'CRM & Automation',
      href: '/services#crm-automation',
      icon: Users,
      description: 'Streamline operations and boost efficiency'
    },
    {
      name: 'Graphic Design/Branding',
      href: '/services#design-branding',
      icon: Palette,
      description: 'Visual identity that builds trust'
    },
    {
      name: 'AI Agents for Business',
      href: '/services#ai-agents',
      icon: Bot,
      description: 'Intelligent automation for modern companies'
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg ring-2 ring-primary/20">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-sm"></div>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-foreground">
                ROI
                <span className="text-primary ml-1">Agency</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Services Dropdown Only */}
          <nav className="hidden lg:flex items-center">
            <div 
              className="group relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm py-2 px-3 rounded-lg hover:bg-accent/50">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Services Dropdown */}
              <div className={`absolute top-full left-0 w-80 bg-card border border-border rounded-xl shadow-xl transition-all duration-200 mt-2 z-50 ${isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200 group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link
                      href="/services"
                      className="block w-full text-center px-4 py-2 bg-primary hover:bg-[#4411ab] text-primary-foreground font-semibold rounded-lg transition-all duration-300 text-sm"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ColorPicker />
            <button className="px-6 py-3 bg-primary hover:bg-[#4411ab] text-primary-foreground font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group">
              <LogIn className="mr-2 w-4 h-4" />
              Login
            </button>
            <button className="px-6 py-3 bg-secondary hover:bg-[#4411ab] hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group">
              <Phone className="mr-2 w-4 h-4 group-hover:text-white transition-colors duration-300" />
              Book A Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <ColorPicker />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="py-4">
              {/* Services Section */}
              <div className="px-4 mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Our Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200 group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <service.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors duration-200">
                          {service.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="block w-full text-center px-4 py-2 bg-primary hover:bg-[#4411ab] text-primary-foreground font-semibold rounded-lg transition-all duration-300 text-sm mt-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
              
              {/* CTA Buttons */}
              <div className="px-4 pt-4 space-y-3 border-t border-border">
                <button className="w-full px-6 py-3 bg-primary hover:bg-[#4411ab] text-primary-foreground font-semibold rounded-lg transition-all duration-300 group">
                  <LogIn className="mr-2 w-4 h-4" />
                  Login
                </button>
                <button className="w-full px-6 py-3 bg-secondary hover:bg-[#4411ab] hover:text-white font-semibold rounded-lg transition-all duration-300 group">
                  <Phone className="mr-2 w-4 h-4 group-hover:text-white transition-colors duration-300" />
                  Book A Call
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
