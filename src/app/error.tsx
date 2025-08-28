'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="w-full max-w-2xl text-center">
        <Section className="py-0">
          <div className="space-y-8">
            {/* Error Icon */}
            <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-12 h-12 text-destructive" />
            </div>
            
            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Something went wrong!</h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto">
                We encountered an unexpected error. Our team has been notified and is working to fix the issue.
              </p>
              {error.digest && (
                <p className="text-sm text-muted-foreground">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={reset}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
            
            {/* Technical Details */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-muted/30 rounded-lg p-6 max-w-2xl mx-auto text-left">
                <h3 className="font-semibold text-foreground mb-2">Technical Details (Development Only)</h3>
                <details className="text-sm text-muted-foreground">
                  <summary className="cursor-pointer hover:text-foreground">View Error Details</summary>
                  <pre className="mt-2 p-3 bg-background rounded border overflow-x-auto">
                    <code>{error.message}</code>
                  </pre>
                  {error.stack && (
                    <pre className="mt-2 p-3 bg-background rounded border overflow-x-auto text-xs">
                      <code>{error.stack}</code>
                    </pre>
                  )}
                </details>
              </div>
            )}
            
            {/* Help Section */}
            <div className="bg-muted/30 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If this error persists, please contact our support team with the error ID above.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:support@roi-agency.com">Email Support</a>
                </Button>
              </div>
            </div>
            
            {/* Common Solutions */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Try these common solutions:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="text-left">
                  <p>• Refresh the page</p>
                  <p>• Clear your browser cache</p>
                  <p>• Check your internet connection</p>
                </div>
                <div className="text-left">
                  <p>• Try a different browser</p>
                  <p>• Disable browser extensions</p>
                  <p>• Wait a few minutes and retry</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
