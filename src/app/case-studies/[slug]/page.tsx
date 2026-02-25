import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudiesData } from '@/lib/case-studies-data';
import { Badge } from '@/components/ui/badge';
import { CTASection } from '@/components/cta-section';
import { ArrowLeft, Clock, Factory, CheckCircle2, Quote, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Params {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Params): Metadata {
  const study = caseStudiesData.find((s) => s.slug === params.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found - ROI Agency',
    };
  }

  return {
    title: `${study.title} | ${study.company} Case Study - ROI Agency`,
    description: study.description,
  };
}

export default function CaseStudyDetail({ params }: Params) {
  const study = caseStudiesData.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* 
        HERO SECTION
        A clean, gradient-heavy hero header that establishes context.
      */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10 animate-pulse delay-1000"></div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
          <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <Badge variant={study.badgeVariant}>{study.badge}</Badge>
            <span className="flex items-center text-sm font-medium text-muted-foreground">
              <Factory className="w-4 h-4 mr-1.5 text-primary" />
              {study.industry}
            </span>
            <span className="flex items-center text-sm font-medium text-muted-foreground">
              <Clock className="w-4 h-4 mr-1.5 text-primary" />
              {study.duration}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 tracking-tight">
            {study.title}
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
            How we helped <strong className="text-foreground">{study.company}</strong> overcome their absolute biggest hurdles and achieve massive, scalable growth.
          </p>
        </div>
      </section>

      {/* 
        THE CHALLENGE & SOLUTION
        Side-by-side or stacked cleanly to contrast the problem with our answer.
      */}
      <section className="py-16 bg-white shrink-0">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-red-600 font-semibold uppercase tracking-wider text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                The Challenge
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {study.challenge}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {study.description}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold uppercase tracking-wider text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Our Solution
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {study.solution}
              </p>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Services Deployed</h4>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service, idx) => (
                    <Badge key={idx} variant="outline" className="bg-muted/50">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        KEY METRICS HERO GRID
        The big numbers highlighting success.
      */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-foreground mb-4">The Impact</h2>
             <p className="text-lg text-muted-foreground">Measurable results that completely shifted the paradigm.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-muted-foreground mb-4 line-clamp-1">{metric.label}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-foreground">{metric.after}</span>
                  {(metric.growth || metric.improvement) && (
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">
                      {metric.growth || metric.improvement}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Up from <strong className="text-foreground">{metric.before}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        TIMELINE & EXECUTION
        Step by step breakdown of the process.
      */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Execution Timeline</h2>
            
            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12">
              {study.timeline.map((step, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12">
                  <span className="absolute -left-[25px] top-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border-4 border-white">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </span>
                  <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/50">
                    <h3 className="text-xl font-bold text-primary mb-2">{step.month}</h3>
                    <p className="text-lg text-foreground">{step.activity}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 
        TESTIMONIAL
        Social proof to seal the deal.
      */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <Quote className="w-12 h-12 text-primary/40 mx-auto mb-6 rotate-180" />
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "{study.testimonial.quote}"
          </blockquote>
          <div>
            <p className="font-bold text-foreground text-lg">{study.testimonial.author}</p>
            <p className="text-primary font-medium">{study.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* 
        BOTTOM CTA
      */}
      <div className="pt-20">
        <CTASection
          title="Want Similar Results?"
          highlightText="Growth"
          subtitle={`Let's discuss how we can engineer a custom strategy for your specific business needs, just like we did for ${study.company}.`}
          primaryButton={{
            text: "Free Strategy Session",
            href: "/schedule-call",
            icon: Zap
          }}
          secondaryButton={{
            text: "View All Work",
            href: "/case-studies",
            icon: Rocket
          }}
        />
      </div>

    </div>
  );
}
