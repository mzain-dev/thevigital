'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { ColorPicker } from './color-picker';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 hover:scale-105 transition-all duration-200">
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
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-foreground hover:text-primary hover:scale-105 transition-all duration-200 font-semibold text-sm py-2 px-3 rounded-lg hover:bg-accent/30"
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </a>
                {/* Dropdown placeholder - you can add actual dropdown content here */}
                <div className="absolute top-full left-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 z-50">
                  <div className="p-3 text-muted-foreground text-xs text-center">
                    Dropdown content for {item.name}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ColorPicker />
            <ThemeToggle />
            <Button size="lg" className="px-6 py-3 text-base font-semibold border-2 bg-secondary text-secondary-foreground border-primary hover:bg-secondary/80 hover:border-primary/80 hover:text-secondary-foreground hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button size="lg" className="px-6 py-3 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-200" asChild>
              <a href="/contact">Let's Talk</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <ColorPicker />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 hover:scale-110"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="py-4 space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 font-semibold hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <Button size="lg" className="w-full py-3 text-base font-semibold border-2 bg-secondary text-secondary-foreground border-primary hover:bg-secondary/80 hover:border-primary/80 hover:text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-200" asChild>
                  <a href="/login">Login</a>
                </Button>
                <Button size="lg" className="w-full py-3 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200" asChild>
                  <a href="/contact">Let's Talk</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
