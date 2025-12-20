import { TrendingUp, Globe, Search, Users, Palette, Bot } from 'lucide-react';

export const NAVIGATION_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
];

export const SERVICES_SUMMARY = [
    {
        id: 'performance-marketing',
        slug: 'performance-marketing',
        title: 'Performance Marketing',
        icon: TrendingUp,
        description: 'Data-driven campaigns that convert and scale.',
        shortPitch: 'Data-driven campaigns that convert and scale with measurable ROI.',
        uniqueValue: "If we can't turn $1 into $2 in profit, we won't take you on.",
        badge: 'Most Popular',
        badgeVariant: 'default' as const,
        href: '/services/performance-marketing',
        color: 'text-blue-600',
        gradient: 'from-blue-500 to-purple-600',
        keyFeatures: ['Meta, Google Ads, LinkedIn campaigns', 'Creative testing & optimization', 'LTV-based bidding strategies', 'ROAS-focused results']
    },
    {
        id: 'web-development',
        slug: 'web-development',
        title: 'Web Development',
        icon: Globe,
        description: 'Modern, fast websites that drive results.',
        shortPitch: 'Custom builds and CMS solutions that drive conversions and user engagement.',
        uniqueValue: 'Websites that convert visitors into customers',
        badge: 'Featured',
        badgeVariant: 'secondary' as const,
        href: '/services/web-development',
        color: 'text-green-600',
        gradient: 'from-green-500 to-blue-600',
        keyFeatures: ['Custom builds & WordPress/Shopify', 'Responsive & fast performance', 'Accessibility compliant', 'Conversion-first approach']
    },
    {
        id: 'seo-optimization',
        slug: 'seo-optimization',
        title: 'SEO Optimization',
        icon: Search,
        description: 'Organic growth that moves the needle.',
        shortPitch: 'KPI-focused SEO that drives leads and sales, not just rankings.',
        uniqueValue: 'Leads and sales, not just rankings',
        badge: 'Essential',
        badgeVariant: 'outline' as const,
        href: '/services/seo-optimization',
        color: 'text-orange-600',
        gradient: 'from-orange-500 to-red-600',
        keyFeatures: ['On-page & technical optimization', 'Content strategy & link building', 'Lead generation focus', 'Measurable business impact']
    },
    {
        id: 'crm-automation',
        slug: 'crm-automation',
        title: 'CRM & Automation',
        icon: Users,
        description: 'Streamline operations and boost efficiency.',
        shortPitch: 'Tip-to-tail lead management with intelligent automation flows.',
        uniqueValue: 'Automated systems that never miss a lead',
        badge: 'Premium',
        badgeVariant: 'secondary' as const,
        href: '/services/crm-automation',
        color: 'text-purple-600',
        gradient: 'from-purple-500 to-pink-600',
        keyFeatures: ['Complete lead journey management', 'If/Then/Else automation flows', 'Email & SMS automation', 'Clean data & analytics']
    },
    {
        id: 'graphic-design',
        slug: 'graphic-design',
        title: 'Graphic Design/Branding',
        icon: Palette,
        description: 'Visual identity that builds trust.',
        shortPitch: 'Complete visual identity systems that build trust and recognition.',
        uniqueValue: 'Visual identity that builds customer trust',
        badge: 'Creative',
        badgeVariant: 'outline' as const,
        href: '/services/graphic-design',
        color: 'text-yellow-600',
        gradient: 'from-yellow-500 to-orange-600',
        keyFeatures: ['Logo & brand identity design', 'Web graphics & UI elements', 'Brand guidelines & consistency', 'Trust-building visuals']
    },
    {
        id: 'ai-agents',
        slug: 'ai-agents',
        title: 'AI Agents for Business',
        icon: Bot,
        description: 'Intelligent automation for modern companies.',
        shortPitch: 'Intelligent automation that works 24/7 to streamline your operations.',
        uniqueValue: '24/7 automation that never sleeps',
        badge: 'Innovation',
        badgeVariant: 'default' as const,
        href: '/services/ai-agents',
        color: 'text-indigo-600',
        gradient: 'from-indigo-500 to-cyan-600',
        keyFeatures: ['Chatbots & support agents', 'Task automation & workflows', 'Data entry & processing', 'Slack/WhatsApp/CRM integration']
    }
];

export const TIME_SLOTS = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
];
