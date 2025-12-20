import { LucideIcon } from 'lucide-react';

export interface ServiceDeliverable {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceProcess {
  title: string;
  description: string;
  duration?: string;
}

export interface ServiceWhyChooseUs {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServicePricing {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceKeyStat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  emoji: string;
  badge: string;
  badgeVariant: 'default' | 'secondary' | 'outline';
  color: string;
  shortPitch: string;
  heroDescription: string;
  keyStats: ServiceKeyStat[];
  deliverablesDescription: string;
  deliverables: ServiceDeliverable[];
  process: ServiceProcess[];
  whyChooseUsDescription: string;
  whyChooseUs: ServiceWhyChooseUs[];
  pricing: ServicePricing[];
  faq: ServiceFAQ[];
  image: string;
}
