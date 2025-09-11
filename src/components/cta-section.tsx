import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { ArrowRight, Rocket, Award } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  secondaryButton: {
    text: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
}

export function CTASection({
  title,
  highlightText,
  subtitle,
  primaryButton,
  secondaryButton
}: CTASectionProps) {
  return (
    <Section className="py-16 lg:py-24 bg-gradient-to-br from-[#4411ab]/5 via-[#4411ab]/3 to-[#4411ab]/8 relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4411ab]/30 to-transparent"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-8 left-1/4 w-2 h-2 bg-[#4411ab]/20 rounded-full animate-pulse"></div>
      <div className="absolute top-16 right-1/3 w-1 h-1 bg-[#4411ab]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-[#4411ab]/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center space-y-4 sm:space-y-6 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {title.split(' ').map((word, index, array) => {
                if (highlightText && word.toLowerCase() === highlightText.toLowerCase()) {
                  return (
                    <span key={index} className="bg-gradient-to-r from-[#4411ab] via-[#4411ab]/80 to-[#4411ab]/60 bg-clip-text text-transparent">
                      {word}
                    </span>
                  );
                }
                return (
                  <span key={index}>
                    {word}
                    {index < array.length - 1 ? ' ' : ''}
                  </span>
                );
              })}
            </h2>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              size="sm" 
              className="px-6 py-3 sm:px-8 sm:py-6 text-sm sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-black hover:bg-[#4411ab] group"
              asChild
            >
              <Link href={primaryButton.href}>
                {primaryButton.icon && <primaryButton.icon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />}
                {primaryButton.text}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="px-6 py-3 sm:px-8 sm:py-6 text-sm sm:text-lg font-semibold border-2 border-black hover:bg-[#4411ab] hover:text-white hover:border-[#4411ab] transition-all duration-300 group"
              asChild
            >
              <Link href={secondaryButton.href}>
                {secondaryButton.icon && <secondaryButton.icon className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white transition-colors duration-300" />}
                {secondaryButton.text}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Transition Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4411ab]/20 to-transparent"></div>
    </Section>
  );
}
