"use client";

import { Section } from '@/components/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { ScheduleCallPopup } from '@/components/schedule-call-popup';
import { ArrowRight, CheckCircle, Clock, Award, Rocket, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { serviceData } from '@/lib/service-data';

interface ServiceDetailViewProps {
    slug: string;
}

export default function ServiceDetailView({ slug }: ServiceDetailViewProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const service = serviceData.find((s) => s.slug === slug);

    if (!service) {
        return null; // Should be handled by parent, but safe guard
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            {/* Breadcrumb Navigation */}
            <Section className="pt-8 pb-4 bg-muted/20">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link>
                    <ArrowRight className="w-3 h-3" />
                    <Link href="/services" className="hover:text-primary transition-colors duration-200">Services</Link>
                    <ArrowRight className="w-3 h-3" />
                    <span className="text-foreground font-medium">{service.title}</span>
                </div>
            </Section>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>

                <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center min-h-[70vh] py-8">
                    {/* Left Side - Content */}
                    <div className="w-full lg:w-1/2 space-y-6 pr-0 lg:pr-8">
                        {/* Back Button */}
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                            Back to Services
                        </Link>

                        {/* Service Badge */}
                        <div className="flex items-center gap-2">
                            <service.icon className="w-6 h-6 text-primary" />
                            <Badge variant={service.badgeVariant} className="text-sm">
                                {service.badge}
                            </Badge>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                            {service.title}
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                            {service.heroDescription}
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                            {service.keyStats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={openModal}
                                size="lg"
                                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-[#4411ab] group"
                            >
                                <Rocket className="mr-2 w-5 h-5" />
                                Get Started Today
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-6 text-lg font-semibold border-2 hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group"
                                asChild
                            >
                                <Link href="/case-studies">
                                    <Award className="mr-2 w-5 h-5 group-hover:text-white transition-colors duration-300" />
                                    View Case Studies
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Service Image/Visual */}
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-8 mt-8 lg:mt-0">
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-background/50 backdrop-blur-sm border border-muted/20 shadow-2xl">
                                {service.image ? (
                                    <Image
                                        src={service.image}
                                        alt={`${service.title} illustration`}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                        <div className="text-center">
                                            <service.icon className="w-24 h-24 text-primary mx-auto mb-4" />
                                            <div className="text-6xl mb-4">{service.emoji}</div>
                                            <p className="text-lg text-muted-foreground">Service Visualization</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Deliver Section */}
            <Section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        What We Deliver
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {service.deliverablesDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.deliverables.map((deliverable, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <deliverable.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">{deliverable.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{deliverable.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Our Process Section */}
            <Section className="py-16 lg:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Our Process
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A proven methodology that ensures your success every step of the way
                    </p>
                </div>

                <div className="space-y-8">
                    {service.process.map((step, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                {step.duration && (
                                    <div className="flex items-center justify-center lg:justify-start gap-2 mt-3">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">{step.duration}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Why Choose Us Section */}
            <Section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {service.whyChooseUsDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.whyChooseUs.map((reason, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-background/50 backdrop-blur-sm">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <reason.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-3">{reason.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Pricing Section */}
            <Section className="py-16 lg:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Investment & ROI
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Transparent pricing with guaranteed returns on your investment
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {service.pricing.map((tier, index) => (
                        <Card key={index} className={`p-8 hover:shadow-xl transition-all duration-300 border-2 ${tier.featured ? 'border-primary shadow-lg scale-105' : 'border-muted'
                            }`}>
                            <div className="text-center">
                                <Badge variant={tier.featured ? 'default' : 'secondary'} className="mb-4">
                                    {tier.name}
                                </Badge>
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-foreground mb-2">{tier.price}</div>
                                    <div className="text-muted-foreground">{tier.period}</div>
                                </div>
                                <ul className="space-y-3 mb-8 text-left">
                                    {tier.features.map((feature: string, featureIndex: number) => (
                                        <li key={featureIndex} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`w-full ${tier.featured ? 'bg-primary hover:bg-[#4411ab]' : 'bg-secondary hover:bg-[#4411ab] hover:text-white'}`}
                                    onClick={openModal}
                                >
                                    {tier.cta}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="py-16 lg:py-24 bg-muted/20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to know about our {service.title.toLowerCase()} services
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {service.faq.map((item, index) => (
                        <Card key={index} className="p-6">
                            <h3 className="font-semibold text-foreground mb-3">{item.question}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Bottom CTA Section */}
            <CTASection
                title={`Ready to Get Started with ${service.title}?`}
                highlightText="Get Started"
                subtitle={`Transform your business with our proven ${service.title.toLowerCase()} solutions.Let's discuss your project and create a custom strategy that delivers measurable results.`}
                primaryButton={{
                    text: "Schedule a Call",
                    href: "/schedule-call",
                    icon: Rocket
                }}
                secondaryButton={{
                    text: "View Our Work",
                    href: "/case-studies",
                    icon: Award
                }}
            />

            {/* Schedule Call Popup */}
            <ScheduleCallPopup
                isOpen={isModalOpen}
                onOpenChange={setIsModalOpen}
                preSelectedService={service.slug}
            />
        </div>
    );
}
