import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  preTitle, 
  title, 
  subtitle, 
  className,
  align = 'center' 
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn("mb-12 lg:mb-16", alignmentClasses[align], className)}>
      {preTitle && (
        <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
          {preTitle}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
