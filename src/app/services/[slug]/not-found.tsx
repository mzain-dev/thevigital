import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-8 md:p-12">
          {/* 404 Icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Search className="w-12 h-12 text-primary" />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The service you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back on track with our available services.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="px-8 py-6">
              <Link href="/services">
                <Search className="mr-2 w-5 h-5" />
                View All Services
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg" className="px-8 py-6">
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Popular Services */}
          <div className="text-left">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Popular Services
            </h2>
            <div className="space-y-2">
              <Link
                href="/services/performance-marketing"
                className="block p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 text-left"
              >
                <div className="font-medium text-foreground">Performance Marketing</div>
                <div className="text-sm text-muted-foreground">Data-driven campaigns that convert</div>
              </Link>
              <Link
                href="/services/web-development"
                className="block p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 text-left"
              >
                <div className="font-medium text-foreground">Web Development</div>
                <div className="text-sm text-muted-foreground">Custom websites that drive results</div>
              </Link>
              <Link
                href="/services/seo-optimization"
                className="block p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 text-left"
              >
                <div className="font-medium text-foreground">SEO That Matters</div>
                <div className="text-sm text-muted-foreground">Organic growth that moves the needle</div>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
