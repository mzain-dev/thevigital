import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand + Tagline */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">ROI•Agency</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              We help businesses maximize their return on investment through strategic digital solutions and data-driven insights.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200">
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
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Strategic Consulting
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Digital Marketing
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Analytics & Reporting
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                Web Development
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                SEO Optimization
              </Link>
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
                  <a href="mailto:hello@roi-agency.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    hello@roi-agency.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    123 Business Ave, Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 hover:text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-bold text-foreground mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Get the latest insights and updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 hover:text-primary-foreground transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} ROI Agency. All rights reserved.
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
