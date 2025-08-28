import Link from 'next/link';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="w-full max-w-2xl text-center">
        <Section className="py-0">
          <div className="space-y-8">
            {/* 404 Icon */}
            <div className="relative">
              <div className="text-9xl font-bold text-muted-foreground/20">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            
            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
            
            {/* Helpful Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Try these popular pages instead:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link 
                  href="/about" 
                  className="text-sm text-primary hover:text-primary/80 hover:underline"
                >
                  About Us
                </Link>
                <Link 
                  href="/services" 
                  className="text-sm text-primary hover:text-primary/80 hover:underline"
                >
                  Our Services
                </Link>
                <Link 
                  href="/case-studies" 
                  className="text-sm text-primary hover:text-primary/80 hover:underline"
                >
                  Case Studies
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm text-primary hover:text-primary/80 hover:underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Search Suggestion */}
            <div className="bg-muted/30 rounded-lg p-6 max-w-md mx-auto">
                              <h3 className="font-semibold text-foreground mb-2">Can&apos;t find what you&apos;re looking for?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Try searching our site or contact our support team for assistance.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Get Help</Link>
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
