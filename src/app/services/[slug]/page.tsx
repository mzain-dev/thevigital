import Link from 'next/link';

import { serviceData } from '@/lib/service-data';
import ServiceDetailView from '@/components/service-detail-view';

// Generate static params for SSG
export function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Unwrap the params Promise
  const { slug } = await params;

  // Validate slug exists
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Looking for: {slug}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Available services: {serviceData.map(s => s.slug).join(', ')}
          </p>
          <div className="mt-8">
            <Link href="/services" className="text-primary hover:underline">
              ← Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Pass only the slug to the client component to avoid serialization issues
  // (Icons are functions and cannot be passed from Server to Client components)
  return <ServiceDetailView slug={slug} />;
}
