'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X, Phone, TrendingUp, Globe, Search, Users, Palette, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="flex h-18 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                <span className="text-primary">Vigital</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {/* Home Link */}
            <Link
              href="/"
              className={`transition-colors duration-200 font-semibold text-sm lg:text-base py-2 px-3 lg:px-4 lg:py-3 ${
                pathname === '/' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 transition-colors duration-200 font-semibold text-sm lg:text-base py-2 px-3 lg:px-4 lg:py-3 ${
                  pathname === '/services' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Services Dropdown */}
              <div className={`absolute top-full left-0 w-80 bg-card border border-border rounded-xl shadow-xl transition-all duration-200 mt-2 z-50 ${isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                      >
                        <div className="w-10 h-10 bg-accent/50 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                          <service.icon className="w-5 h-5 text-muted-foreground hover:text-[#4411ab] transition-colors duration-200" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-sm hover:text-[#4411ab] transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Navigation Items */}
            <Link
              href="/about"
              className={`transition-colors duration-200 font-semibold text-sm lg:text-base py-2 px-3 lg:px-4 lg:py-3 ${
                pathname === '/about' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
              }`}
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className={`transition-colors duration-200 font-semibold text-sm lg:text-base py-2 px-3 lg:px-4 lg:py-3 ${
                pathname === '/case-studies' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-200 font-semibold text-sm lg:text-base py-2 px-3 lg:px-4 lg:py-3 ${
                pathname === '/contact' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <Button size="lg" className="px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 text-base lg:text-lg font-semibold bg-primary text-primary-foreground hover:bg-[#4411ab] shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
              <Link href="/schedule-call">
                <Phone className="mr-2 w-4 h-4" />
                Schedule a Call
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 sm:p-4 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 hover:scale-110"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="py-3 sm:py-4">
              {/* Main Navigation Items */}
              <div className="px-3 sm:px-4 mb-4">
                <div className="space-y-2">
                  <Link
                    href="/"
                    className={`block px-3 py-2 text-sm sm:text-base transition-colors duration-200 font-semibold ${
                      pathname === '/' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`block px-3 py-2 text-sm sm:text-base transition-colors duration-200 font-semibold ${
                      pathname === '/about' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/case-studies"
                    className={`block px-3 py-2 text-sm sm:text-base transition-colors duration-200 font-semibold ${
                      pathname === '/case-studies' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/contact"
                    className={`block px-3 py-2 text-sm sm:text-base transition-colors duration-200 font-semibold ${
                      pathname === '/contact' ? 'text-[#4411ab]' : 'text-foreground hover:text-[#4411ab]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Services Section */}
              <div className="px-3 sm:px-4 mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Our Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-accent/50 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                        <service.icon className="w-4 h-4 text-muted-foreground hover:text-[#4411ab] transition-colors duration-200" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm hover:text-[#4411ab] transition-colors duration-200">
                          {service.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="px-3 sm:px-4 pt-3 sm:pt-4 space-y-2 sm:space-y-3 border-t border-border">
                <Button size="sm" className="w-full py-2 sm:py-3 text-sm sm:text-base font-semibold bg-primary text-primary-foreground hover:bg-[#4411ab] shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                  <Link href="/schedule-call">
                    <Phone className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                    Schedule a Call
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
