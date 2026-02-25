"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Loader2, CheckCircle } from 'lucide-react';
import { appendLeadDataToFormData } from '@/lib/lead-tracking';
import { SERVICES_SUMMARY } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeError('');
    
    const formData = new FormData(e.currentTarget);
    appendLeadDataToFormData(formData, 'Footer Newsletter');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to subscribe');
      
      setSubscribeSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubscribeSuccess(false), 5000);
    } catch (err) {
      setSubscribeError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Column 1: Brand + Tagline */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/vigital-logo.png" 
                alt="Vigital Logo" 
                width={200} 
                height={70} 
                className="w-auto h-13 sm:h-16 object-contain"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs break-words">
              We help businesses maximize their return on investment through strategic digital solutions and data-driven insights.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/Vigitalofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#4411ab] hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/vigitalofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#4411ab] hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://www.instagram.com/vigitalofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#4411ab] hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Home
              </Link>
              <Link href="/about" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                About
              </Link>
              <Link href="/services" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Services
              </Link>
              <Link href="/case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Case Studies
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Our Services</h4>
            <nav className="space-y-3">
              {SERVICES_SUMMARY.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:hello@thevigital.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    hello@thevigital.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-[#4411ab] transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Let&apos;s Talk
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border bg-gradient-to-r from-primary/5 via-primary/3 to-primary/8">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Stay Updated with Our Latest Insights</h4>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Get exclusive growth strategies, industry insights, and case studies delivered directly to your inbox. Join 10,000+ business leaders who trust our expertise.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form className="relative" onSubmit={handleSubscribe} suppressHydrationWarning>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 bg-white rounded-xl p-1 shadow-lg border border-primary/20 relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 sm:py-4 text-sm sm:text-base rounded-lg border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 min-w-0"
                    required
                    disabled={isSubscribing || subscribeSuccess}
                    suppressHydrationWarning
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing || subscribeSuccess}
                    suppressHydrationWarning
                    className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-[#4411ab] transition-all duration-300 flex-shrink-0 whitespace-nowrap shadow-md hover:shadow-lg group flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : subscribeSuccess ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                    {isSubscribing ? 'Subscribing...' : subscribeSuccess ? 'Subscribed!' : 'Subscribe'}
                    {!isSubscribing && !subscribeSuccess && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />}
                  </button>
                </div>
                {subscribeError && (
                  <p className="absolute -bottom-6 left-2 text-xs text-red-500 font-medium">{subscribeError}</p>
                )}
                {subscribeSuccess && (
                  <p className="absolute -bottom-6 left-2 text-xs text-green-500 font-medium">Thanks for joining our newsletter!</p>
                )}
              </form>
              
              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>10,000+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Vigital. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
