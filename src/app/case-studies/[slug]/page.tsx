import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudiesData } from '@/lib/case-studies-data';
import { Badge } from '@/components/ui/badge';
import { CTASection } from '@/components/cta-section';
import { ArrowLeft, Clock, Factory, CheckCircle2, Quote, Zap, Rocket, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudiesData.find((s) => s.slug === resolvedParams.slug);

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

export default async function CaseStudyDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const study = caseStudiesData.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://roi-agency.com/case-studies/${study.slug}`
    },
    headline: study.title,
    description: study.description,
    author: {
      "@type": "Organization",
      name: "ROI Agency"
    },
    publisher: {
      "@type": "Organization",
      name: "ROI Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://roi-agency.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* 
        HERO SECTION
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
                    <Badge key={idx} variant="outline" className="bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
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
        VISUAL SHOWCASE
      */}
      {study.visualShowcase && study.visualShowcase.length > 0 && (
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Visual Layout</h2>
                <p className="text-lg text-muted-foreground">High-fidelity interfaces crafted for maximum conversion.</p>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.visualShowcase.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border/50 group bg-muted/40 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                     <Image src={img} alt={`${study.company} Showcase ${idx}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 
        KEY FEATURES
      */}
      {study.features && study.features.length > 0 && (
        <section className="py-24 bg-background border-t border-border/40">
           <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-foreground mb-4">Key Features Implemented</h2>
                 <p className="text-lg text-muted-foreground">The technical and UX solutions that drove massive results.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {study.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-6 p-8 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <feature.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      )}

      {/* 
        TECH STACK GRID
      */}
      {study.techStack && study.techStack.length > 0 && (
        <section className="py-24 bg-muted/10 border-t border-border/40">
           <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-foreground mb-4">Technology Stack</h2>
                 <p className="text-lg text-muted-foreground">The digital architecture empowering the platform and accelerating workflows.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {study.techStack.map((category, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                    <h3 className="text-sm font-bold text-muted-foreground mb-6 uppercase tracking-wider">{category.category}</h3>
                    <div className="space-y-4">
                      {category.technologies.map((tech, tIdx) => (
                        <div key={tIdx} className="group relative flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border cursor-default h-full">
                          <div className="w-10 h-10 shrink-0 relative opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground mb-1">{tech.name}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{tech.reason}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      )}

      {/* 
        KEY METRICS HERO GRID
      */}
      <section className="py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-foreground mb-4">The Impact</h2>
             <p className="text-lg text-muted-foreground">Measurable results that completely shifted the paradigm.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="bg-muted/10 rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow text-center md:text-left flex flex-col justify-between">
                <p className="text-sm font-medium text-muted-foreground mb-6 line-clamp-1">{metric.label}</p>
                <div>
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-3">
                    <span className="text-4xl font-extrabold text-foreground tracking-tight">{metric.after}</span>
                    {(metric.growth || metric.improvement) && (
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                        {metric.growth || metric.improvement}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground mt-2">
                    <span>Up from <strong className="text-foreground">{metric.before}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        TIMELINE & EXECUTION
      */}
      <section className="py-24 bg-muted/10 border-t border-border/40">
         <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-foreground mb-4">Execution Timeline</h2>
               <p className="text-lg text-muted-foreground">A rigid, systematic approach to delivering ROI on schedule.</p>
            </div>
            
            <div className="relative border-l-[3px] border-primary/20 ml-4 md:ml-8 space-y-14">
              {study.timeline.map((step, idx) => (
                <div key={idx} className="relative pl-10 md:pl-16">
                  <span className="absolute -left-[26px] top-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border-4 border-background">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </span>
                  <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
                       {step.month}
                    </h3>
                    <p className="text-lg text-foreground">{step.activity}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 
        TESTIMONIAL & LIVE LINK
      */}
      <section className="py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className={`text-left ${study.liveLink ? 'lg:col-span-3' : 'lg:col-span-5 text-center max-w-3xl mx-auto'}`}>
              <Quote className={`w-14 h-14 text-primary/30 mb-8 rotate-180 ${study.liveLink ? '' : 'mx-auto'}`} />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed mb-8 tracking-tight">
                "{study.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold text-foreground text-xl mb-1">{study.testimonial.author}</p>
                <p className="text-primary font-medium">{study.testimonial.role}</p>
              </div>
            </div>
            
            {study.liveLink && (
              <div className="lg:col-span-2">
                <div className="bg-background rounded-[2rem] p-10 shadow-xl border border-primary/10 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
                  
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-foreground mb-4 tracking-tight">Experience Live</h3>
                  <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                    Explore the active deployment and frontend architecture crafted for {study.company}.
                  </p>
                  
                  <a href={study.liveLink} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex w-full items-center justify-center h-14 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                    View Live Project
                    <ExternalLink className="w-5 h-5 ml-2.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 
        RELATED CASE STUDIES 
      */}
      <section className="py-24 bg-background">
         <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="flex items-end justify-between mb-12 border-b border-border/40 pb-6">
               <h2 className="text-3xl font-bold text-foreground">Related Work</h2>
               <Link href="/case-studies" className="text-primary font-medium hover:underline flex items-center">
                  View all case studies
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {caseStudiesData.filter(s => s.id !== study.id).slice(0, 2).map((related, idx) => (
                  <Link href={`/case-studies/${related.slug}`} key={idx} className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all bg-muted/10">
                     <div className="sm:w-1/3 aspect-[4/3] sm:aspect-square bg-muted rounded-xl border border-border overflow-hidden relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-primary/10 to-background">
                            <Factory className="w-8 h-8 text-primary/40 mb-2" />
                            <span className="text-xs font-bold text-muted-foreground uppercase">{related.industry}</span>
                        </div>
                     </div>
                     <div className="sm:w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                           <Badge variant="outline" className="text-xs bg-background">{related.company}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                           {related.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{related.description}</p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 
        BOTTOM CTA
      */}
      <div className="pt-10 pb-20">
        <CTASection
          title="Ready for Similar Results?"
          highlightText="Growth"
          subtitle={`Let's discuss how we can engineer a custom technical strategy for your specific business needs, just like we did for ${study.company}.`}
          primaryButton={{
            text: "Free Strategy Session",
            href: "/schedule-call",
            icon: Zap
          }}
          secondaryButton={{
            text: "View Our Services",
            href: "/services",
            icon: Rocket
          }}
        />
      </div>

    </div>
  );
}
