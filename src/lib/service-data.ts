import {
  TrendingUp,
  Globe,
  Search,
  Users,
  Palette,
  Bot,
  Target,
  BarChart3,
  Shield,
  Zap,
  Award,
  ArrowRight,
  Settings,
  FileText,
  PieChart,
  Code,
  MessageSquare,
  Database,
  Layers,
  Cpu,
  Brain,
  Monitor,
  Smartphone,
  SearchCheck,
  Link2,
  Share2,
  Download,
  RefreshCw,
  Mail,
  MapPin,
  ShoppingCart,
  Book
} from 'lucide-react';
import { Service } from '@/types/service';

export const serviceData: Service[] = [
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    icon: TrendingUp,
    emoji: '📈',
    image: '/services/performance-marketing.jpg',
    badge: 'Most Popular',
    badgeVariant: 'default' as const,
    color: 'from-blue-500 to-purple-600',
    shortPitch: 'Data-driven campaigns that convert and scale with measurable ROI.',
    heroDescription: 'Transform your marketing spend into measurable returns with our data-driven performance marketing strategies. We don&apos;t just run ads – we optimize every dollar for maximum profit.',
    keyStats: [
      { value: '300%', label: 'Average ROAS' },
      { value: '24h', label: 'Setup Time' },
      { value: '95%', label: 'Client Retention' },
      { value: '$2M+', label: 'Ad Spend Managed' }
    ],
    deliverablesDescription: 'We deliver comprehensive performance marketing solutions that turn your ad spend into profit.',
    deliverables: [
      {
        title: 'Campaign Strategy & Setup',
        description: 'Complete campaign architecture across Meta, Google, LinkedIn, and TikTok with optimized targeting and creative strategies.',
        icon: Target
      },
      {
        title: 'Creative Testing & Optimization',
        description: 'A/B testing framework for ad creatives, copy, and landing pages to maximize conversion rates.',
        icon: BarChart3
      },
      {
        title: 'Bid Management & Automation',
        description: 'Advanced bidding strategies and automated optimization to scale profitable campaigns efficiently.',
        icon: Settings
      },
      {
        title: 'Performance Analytics',
        description: 'Real-time dashboards and detailed reporting on ROAS, LTV, and other key performance metrics.',
        icon: PieChart
      },
      {
        title: 'Landing Page Optimization',
        description: 'Conversion-focused landing pages designed to maximize your ad spend efficiency.',
        icon: Monitor
      },
      {
        title: 'Retargeting Campaigns',
        description: 'Strategic retargeting sequences to recapture lost leads and maximize customer lifetime value.',
        icon: RefreshCw
      }
    ],
    process: [
      {
        title: 'Audit & Strategy',
        description: 'Comprehensive analysis of your current marketing performance and competitive landscape to identify opportunities.',
        duration: '1-2 weeks'
      },
      {
        title: 'Campaign Setup',
        description: 'Implementation of optimized campaigns across all platforms with proper tracking and attribution.',
        duration: '3-5 days'
      },
      {
        title: 'Testing & Optimization',
        description: 'Continuous testing of creatives, audiences, and bidding strategies to improve performance.',
        duration: 'Ongoing'
      },
      {
        title: 'Scale & Growth',
        description: 'Systematic scaling of profitable campaigns while maintaining efficiency and ROI targets.',
        duration: 'Ongoing'
      }
    ],
    whyChooseUsDescription: 'Our performance marketing approach combines data science with creative excellence to deliver unmatched results.',
    whyChooseUs: [
      {
        title: 'ROI Guarantee',
        description: 'We guarantee positive ROI or we don&apos;t take you on as a client. Your success is our success.',
        icon: Shield
      },
      {
        title: 'Advanced Analytics',
        description: 'Proprietary tracking and attribution models that provide insights your competitors don&apos;t have.',
        icon: BarChart3
      },
      {
        title: 'Dedicated Support',
        description: 'Direct access to your account manager and performance team for quick responses and optimization.',
        icon: Users
      }
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$2,500',
        period: 'per month',
        features: [
          'Up to $10K monthly ad spend',
          '2 platforms (Meta + Google)',
          'Basic reporting',
          'Email support',
          'Monthly strategy calls'
        ],
        cta: 'Get Started',
        featured: false
      },
      {
        name: 'Growth',
        price: '$5,000',
        period: 'per month',
        features: [
          'Up to $50K monthly ad spend',
          '4 platforms (Meta, Google, LinkedIn, TikTok)',
          'Advanced reporting & analytics',
          'Priority support',
          'Weekly strategy calls',
          'Creative testing included'
        ],
        cta: 'Most Popular',
        featured: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'per month',
        features: [
          'Unlimited ad spend',
          'All platforms + emerging channels',
          'Custom reporting & dashboards',
          'Dedicated account manager',
          'Daily optimization',
          'Custom creative production'
        ],
        cta: 'Contact Sales',
        featured: false
      }
    ],
    faq: [
      {
        question: 'What\'s your minimum ad spend requirement?',
        answer: 'We work with businesses spending a minimum of $5,000 per month on advertising. This ensures we have enough budget to properly test and optimize campaigns.'
      },
      {
        question: 'How quickly can I expect to see results?',
        answer: 'Most clients see positive ROI within 30-60 days. However, this depends on your industry, competition, and current marketing setup. We provide detailed timelines during our strategy call.'
      },
      {
        question: 'Do you work with e-commerce or B2B businesses?',
        answer: 'We work with both! Our team has extensive experience across e-commerce, SaaS, professional services, and B2B companies. Each requires different strategies, which we tailor accordingly.'
      },
      {
        question: 'What platforms do you manage?',
        answer: 'We manage campaigns on Meta (Facebook/Instagram), Google Ads, LinkedIn, TikTok, Snapchat, Pinterest, and emerging platforms. We recommend the best mix based on your audience and goals.'
      },
      {
        question: 'How do you measure success?',
        answer: 'We focus on ROAS (Return on Ad Spend) as the primary metric, but also track LTV, CAC, conversion rates, and other KPIs specific to your business model and goals.'
      }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: Globe,
    emoji: '🌐',
    image: '/services/web-development.jpg',
    badge: 'Featured',
    badgeVariant: 'secondary' as const,
    color: 'from-green-500 to-blue-600',
    shortPitch: 'Custom builds and CMS solutions that drive conversions and user engagement.',
    heroDescription: 'Build websites that don&apos;t just look great – they convert visitors into customers. Our development approach focuses on performance, user experience, and business results.',
    keyStats: [
      { value: '98%', label: 'Client Satisfaction' },
      { value: '2.1s', label: 'Avg Load Time' },
      { value: '95+', label: 'PageSpeed Score' },
      { value: '50+', label: 'Websites Built' }
    ],
    deliverablesDescription: 'We create high-performance websites that drive business growth and provide exceptional user experiences.',
    deliverables: [
      {
        title: 'Custom Web Development',
        description: 'Bespoke websites built with modern technologies like React, Next.js, and Node.js for optimal performance.',
        icon: Code
      },
      {
        title: 'E-commerce Solutions',
        description: 'Shopify, WooCommerce, and custom e-commerce platforms optimized for conversions and user experience.',
        icon: ShoppingCart
      },
      {
        title: 'CMS Development',
        description: 'WordPress, Strapi, and headless CMS solutions that give you full control over your content.',
        icon: Database
      },
      {
        title: 'Mobile Optimization',
        description: 'Responsive design and mobile-first development ensuring perfect performance on all devices.',
        icon: Smartphone
      },
      {
        title: 'Performance Optimization',
        description: 'Speed optimization, Core Web Vitals improvement, and technical SEO implementation.',
        icon: Zap
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing maintenance, security updates, and technical support to keep your site running smoothly.',
        icon: Settings
      }
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'Deep dive into your business goals, target audience, and technical requirements to create a comprehensive project plan.',
        duration: '1-2 weeks'
      },
      {
        title: 'Design & Prototyping',
        description: 'UI/UX design and interactive prototypes to ensure the final product meets your vision and user needs.',
        duration: '2-3 weeks'
      },
      {
        title: 'Development & Testing',
        description: 'Agile development process with regular check-ins, testing, and quality assurance throughout the build.',
        duration: '4-8 weeks'
      },
      {
        title: 'Launch & Optimization',
        description: 'Deployment, performance optimization, and post-launch monitoring to ensure everything works perfectly.',
        duration: '1-2 weeks'
      }
    ],
    whyChooseUsDescription: 'Our development team combines technical expertise with business acumen to build websites that drive results.',
    whyChooseUs: [
      {
        title: 'Conversion-Focused',
        description: 'Every element is designed and developed with conversion optimization in mind, not just aesthetics.',
        icon: Target
      },
      {
        title: 'Modern Technology',
        description: 'We use the latest frameworks and technologies to ensure your site is fast, secure, and future-proof.',
        icon: Cpu
      },
      {
        title: 'Performance First',
        description: 'All our sites achieve 95+ PageSpeed scores and load in under 3 seconds for optimal user experience.',
        icon: Zap
      },
      {
        title: 'SEO Optimized',
        description: 'Built-in technical SEO and performance optimization to help your site rank higher in search results.',
        icon: Search
      },
      {
        title: 'Ongoing Support',
        description: 'Comprehensive maintenance and support packages to keep your site updated and secure.',
        icon: Shield
      },
      {
        title: 'Business Results',
        description: 'We measure success by the business impact our websites create, not just technical metrics.',
        icon: BarChart3
      }
    ],
    pricing: [
      {
        name: 'Landing Page',
        price: '$2,500',
        period: 'one-time',
        features: [
          'Single page website',
          'Mobile responsive design',
          'Contact form integration',
          'Basic SEO optimization',
          '1 month support'
        ],
        cta: 'Get Quote',
        featured: false
      },
      {
        name: 'Business Website',
        price: '$7,500',
        period: 'one-time',
        features: [
          'Up to 10 pages',
          'Custom design',
          'CMS integration',
          'Advanced SEO',
          '3 months support',
          'Performance optimization'
        ],
        cta: 'Most Popular',
        featured: true
      },
      {
        name: 'E-commerce Store',
        price: '$15,000',
        period: 'one-time',
        features: [
          'Full e-commerce functionality',
          'Payment integration',
          'Inventory management',
          'Advanced analytics',
          '6 months support',
          'Custom features'
        ],
        cta: 'Contact Sales',
        featured: false
      }
    ],
    faq: [
      {
        question: 'How long does it take to build a website?',
        answer: 'Timeline depends on complexity: Landing pages (2-3 weeks), Business websites (4-6 weeks), E-commerce stores (6-10 weeks). We provide detailed timelines during our discovery call.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes! We offer maintenance packages starting at $200/month that include security updates, performance monitoring, content updates, and technical support.'
      },
      {
        question: 'Can you work with my existing design?',
        answer: 'Absolutely! We can work with your existing designs, brand guidelines, or create something completely new. We&apos;re flexible to work with your preferences.'
      },
      {
        question: 'What technologies do you use?',
        answer: 'We use modern technologies like React, Next.js, Node.js, WordPress, Shopify, and more. We choose the best tech stack based on your specific needs and goals.'
      },
      {
        question: 'Do you handle hosting and domain setup?',
        answer: 'Yes, we can handle hosting setup, domain configuration, SSL certificates, and all technical aspects of getting your site live and secure.'
      }
    ]
  },
  {
    slug: 'seo-optimization',
    title: 'SEO That Matters',
    icon: Search,
    emoji: '🔍',
    image: '/services/seo-optimization.jpg',
    badge: 'Essential',
    badgeVariant: 'outline' as const,
    color: 'from-orange-500 to-red-600',
    shortPitch: 'KPI-focused SEO that drives leads and sales, not just rankings.',
    heroDescription: 'Stop chasing vanity metrics. Our SEO strategy focuses on driving qualified traffic that converts into leads and sales for your business.',
    keyStats: [
      { value: '150%', label: 'Avg Traffic Increase' },
      { value: '85%', label: 'Keyword Ranking Success' },
      { value: '40%', label: 'Lead Generation Boost' },
      { value: '6 months', label: 'Time to Results' }
    ],
    deliverablesDescription: 'We deliver SEO strategies that focus on business results, not just search engine rankings.',
    deliverables: [
      {
        title: 'Technical SEO Audit',
        description: 'Comprehensive analysis of your site&apos;s technical health, performance, and search engine optimization.',
        icon: SearchCheck
      },
      {
        title: 'Keyword Research & Strategy',
        description: 'Data-driven keyword research focused on high-intent terms that drive qualified traffic and conversions.',
        icon: Target
      },
      {
        title: 'Content Strategy & Creation',
        description: 'SEO-optimized content that ranks well and converts visitors into leads and customers.',
        icon: FileText
      },
      {
        title: 'Link Building Campaigns',
        description: 'Strategic link building to improve domain authority and rankings for target keywords.',
        icon: Link2
      },
      {
        title: 'Local SEO Optimization',
        description: 'Complete local SEO setup including Google My Business, local citations, and location-based optimization.',
        icon: MapPin
      },
      {
        title: 'Performance Monitoring',
        description: 'Regular reporting and monitoring of rankings, traffic, and conversion metrics with actionable insights.',
        icon: BarChart3
      }
    ],
    process: [
      {
        title: 'SEO Audit & Analysis',
        description: 'Comprehensive technical and competitive analysis to identify opportunities and create a strategic roadmap.',
        duration: '2-3 weeks'
      },
      {
        title: 'Strategy Development',
        description: 'Keyword research, content planning, and technical optimization strategy tailored to your business goals.',
        duration: '1-2 weeks'
      },
      {
        title: 'Implementation',
        description: 'Technical fixes, content creation, and optimization work to improve your search visibility.',
        duration: '4-6 weeks'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'Ongoing monitoring, reporting, and optimization to continuously improve your SEO performance.',
        duration: 'Ongoing'
      }
    ],
    whyChooseUsDescription: 'Our SEO approach focuses on driving business results, not just search engine rankings.',
    whyChooseUs: [
      {
        title: 'Business-Focused SEO',
        description: 'We optimize for keywords and content that drive qualified traffic and conversions, not just rankings.',
        icon: Target
      },
      {
        title: 'White-Hat Strategies',
        description: 'All our SEO tactics are ethical and sustainable, protecting your site from penalties and ensuring long-term success.',
        icon: Shield
      },
      {
        title: 'Data-Driven Approach',
        description: 'Every decision is backed by data and analytics, ensuring we focus on what actually moves the needle.',
        icon: BarChart3
      },
      {
        title: 'Content Excellence',
        description: 'High-quality, SEO-optimized content that provides real value to your audience and search engines.',
        icon: FileText
      },
      {
        title: 'Technical Expertise',
        description: 'Deep technical knowledge of search engines, algorithms, and optimization best practices.',
        icon: Settings
      },
      {
        title: 'Transparent Reporting',
        description: 'Clear, actionable reports that show exactly how our SEO efforts are impacting your business.',
        icon: PieChart
      }
    ],
    pricing: [
      {
        name: 'Local SEO',
        price: '$1,500',
        period: 'per month',
        features: [
          'Google My Business optimization',
          'Local citation building',
          'Review management',
          'Monthly reporting',
          'Up to 10 target keywords'
        ],
        cta: 'Get Started',
        featured: false
      },
      {
        name: 'Business SEO',
        price: '$3,500',
        period: 'per month',
        features: [
          'Technical SEO audit & fixes',
          'Keyword research & strategy',
          'Content creation (4 articles/month)',
          'Link building campaigns',
          'Monthly reporting & calls',
          'Up to 25 target keywords'
        ],
        cta: 'Most Popular',
        featured: true
      },
      {
        name: 'Enterprise SEO',
        price: '$7,500',
        period: 'per month',
        features: [
          'Comprehensive SEO strategy',
          'Unlimited content creation',
          'Advanced link building',
          'Competitor analysis',
          'Weekly reporting & calls',
          'Unlimited target keywords'
        ],
        cta: 'Contact Sales',
        featured: false
      }
    ],
    faq: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO is a long-term strategy. Most clients see initial improvements in 3-6 months, with significant results in 6-12 months. However, this varies based on competition and current site health.'
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer: 'We can&apos;t guarantee specific rankings as search algorithms are constantly changing. However, we guarantee our best efforts and focus on driving qualified traffic and conversions.'
      },
      {
        question: 'What\'s included in your SEO reporting?',
        answer: 'Our monthly reports include keyword rankings, organic traffic growth, conversion metrics, technical health scores, and actionable recommendations for improvement.'
      },
      {
        question: 'Do you work with e-commerce sites?',
        answer: 'Yes! E-commerce SEO requires special expertise in product optimization, category pages, and technical considerations. We have extensive experience with Shopify, WooCommerce, and custom e-commerce platforms.'
      },
      {
        question: 'Can you help with Google penalties?',
        answer: 'Absolutely! We specialize in penalty recovery and can help identify the cause of penalties and develop a recovery strategy to get your site back in good standing.'
      }
    ]
  },
  {
    slug: 'crm-automation',
    title: 'CRM & Marketing Automation',
    icon: Users,
    emoji: '🤖',
    image: '/services/crm-automation.jpg',
    badge: 'Premium',
    badgeVariant: 'secondary' as const,
    color: 'from-purple-500 to-pink-600',
    shortPitch: 'Tip-to-tail lead management with intelligent automation flows.',
    heroDescription: 'Transform your lead management with intelligent automation that nurtures prospects, converts leads, and maximizes customer lifetime value.',
    keyStats: [
      { value: '300%', label: 'Lead Conversion Increase' },
      { value: '50%', label: 'Time Savings' },
      { value: '95%', label: 'Automation Accuracy' },
      { value: '24/7', label: 'Lead Nurturing' }
    ],
    deliverablesDescription: 'We build comprehensive CRM and automation systems that streamline your sales process and maximize conversions.',
    deliverables: [
      {
        title: 'CRM Setup & Configuration',
        description: 'Complete CRM implementation with custom fields, workflows, and integrations tailored to your business process.',
        icon: Database
      },
      {
        title: 'Lead Scoring & Qualification',
        description: 'Automated lead scoring systems that identify high-value prospects and route them to the right team members.',
        icon: Target
      },
      {
        title: 'Email Marketing Automation',
        description: 'Sophisticated email sequences that nurture leads, onboard customers, and drive repeat purchases.',
        icon: Mail
      },
      {
        title: 'SMS & Multi-Channel Campaigns',
        description: 'Integrated SMS, email, and social media campaigns that reach prospects on their preferred channels.',
        icon: MessageSquare
      },
      {
        title: 'Sales Pipeline Automation',
        description: 'Automated workflows that move leads through your sales process and trigger appropriate actions.',
        icon: ArrowRight
      },
      {
        title: 'Analytics & Reporting',
        description: 'Comprehensive dashboards that track lead sources, conversion rates, and ROI across all channels.',
        icon: BarChart3
      }
    ],
    process: [
      {
        title: 'Process Analysis',
        description: 'Deep dive into your current sales and marketing processes to identify automation opportunities.',
        duration: '1-2 weeks'
      },
      {
        title: 'System Design',
        description: 'Architecture and workflow design for your CRM and automation systems based on your specific needs.',
        duration: '1-2 weeks'
      },
      {
        title: 'Implementation',
        description: 'Building and configuring your CRM, automation workflows, and integrations.',
        duration: '3-4 weeks'
      },
      {
        title: 'Testing & Training',
        description: 'Thorough testing of all systems and comprehensive training for your team.',
        duration: '1-2 weeks'
      }
    ],
    whyChooseUsDescription: 'Our automation expertise helps you scale your sales process while maintaining personal touch with prospects.',
    whyChooseUs: [
      {
        title: 'Custom Automation',
        description: 'Tailored automation workflows that match your unique business process and customer journey.',
        icon: Settings
      },
      {
        title: 'Multi-Channel Integration',
        description: 'Seamless integration across email, SMS, social media, and other channels for maximum reach.',
        icon: Layers
      },
      {
        title: 'Lead Intelligence',
        description: 'Advanced lead scoring and qualification systems that help you focus on the most promising prospects.',
        icon: Brain
      },
      {
        title: 'ROI Tracking',
        description: 'Comprehensive analytics that show exactly how your automation efforts impact revenue and growth.',
        icon: BarChart3
      },
      {
        title: 'Ongoing Optimization',
        description: 'Continuous monitoring and optimization of your automation systems for maximum effectiveness.',
        icon: Zap
      },
      {
        title: 'Team Training',
        description: 'Comprehensive training and documentation to ensure your team can effectively use the new systems.',
        icon: Users
      }
    ],
    pricing: [
      {
        name: 'Starter Automation',
        price: '$2,000',
        period: 'per month',
        features: [
          'Basic CRM setup',
          'Email automation (up to 5 sequences)',
          'Lead scoring system',
          'Monthly reporting',
          'Email support'
        ],
        cta: 'Get Started',
        featured: false
      },
      {
        name: 'Growth Automation',
        price: '$4,500',
        period: 'per month',
        features: [
          'Advanced CRM configuration',
          'Multi-channel automation',
          'Custom workflows',
          'Advanced analytics',
          'Priority support',
          'Monthly optimization'
        ],
        cta: 'Most Popular',
        featured: true
      },
      {
        name: 'Enterprise Automation',
        price: '$8,000',
        period: 'per month',
        features: [
          'Custom CRM development',
          'Unlimited automation sequences',
          'Advanced integrations',
          'Dedicated account manager',
          'Weekly optimization',
          'Custom reporting'
        ],
        cta: 'Contact Sales',
        featured: false
      }
    ],
    faq: [
      {
        question: 'Which CRM platforms do you work with?',
        answer: 'We work with all major CRM platforms including HubSpot, Salesforce, Pipedrive, Zoho, and custom solutions. We choose the best platform based on your specific needs and budget.'
      },
      {
        question: 'How long does it take to set up automation?',
        answer: 'Basic automation can be set up in 2-3 weeks, while complex multi-channel systems typically take 4-6 weeks. We provide detailed timelines during our discovery call.'
      },
      {
        question: 'Can you integrate with our existing tools?',
        answer: 'Yes! We specialize in integrating CRM and automation systems with existing tools like email platforms, social media, analytics, and other business software.'
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Absolutely! We provide comprehensive training sessions, documentation, and ongoing support to ensure your team can effectively use the new systems.'
      },
      {
        question: 'How do you measure automation success?',
        answer: 'We track key metrics like lead conversion rates, sales cycle length, customer lifetime value, and ROI. We provide detailed reports showing the impact of automation on your business.'
      }
    ]
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design / Branding',
    icon: Palette,
    emoji: '🎨',
    image: '/services/graphic-design.jpg',
    badge: 'Creative',
    badgeVariant: 'outline' as const,
    color: 'from-yellow-500 to-orange-600',
    shortPitch: 'Complete visual identity systems that build trust and recognition.',
    heroDescription: 'Create a visual identity that resonates with your audience and builds lasting brand recognition. Our design approach combines creativity with business strategy.',
    keyStats: [
      { value: '200+', label: 'Brands Created' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '48h', label: 'Initial Concepts' },
      { value: '100%', label: 'Brand Guidelines' }
    ],
    deliverablesDescription: 'We create comprehensive visual identity systems that strengthen your brand and drive business results.',
    deliverables: [
      {
        title: 'Logo Design & Brand Identity',
        description: 'Complete logo design with variations, color palettes, typography, and brand guidelines for consistent application.',
        icon: Palette
      },
      {
        title: 'Web Graphics & UI Elements',
        description: 'Custom graphics, icons, buttons, and UI elements that enhance your website and digital presence.',
        icon: Monitor
      },
      {
        title: 'Marketing Materials',
        description: 'Business cards, letterheads, brochures, flyers, and other print materials that represent your brand professionally.',
        icon: FileText
      },
      {
        title: 'Social Media Graphics',
        description: 'Custom graphics, templates, and visual content for all your social media platforms and campaigns.',
        icon: Share2
      },
      {
        title: 'Brand Guidelines',
        description: 'Comprehensive brand guidelines document with usage rules, color codes, typography, and examples.',
        icon: Book
      },
      {
        title: 'Digital Assets Package',
        description: 'Complete package of all brand assets in various formats for use across all platforms and media.',
        icon: Download
      }
    ],
    process: [
      {
        title: 'Brand Discovery',
        description: 'Deep dive into your brand values, target audience, and competitive landscape to inform the design direction.',
        duration: '1 week'
      },
      {
        title: 'Concept Development',
        description: 'Creation of multiple logo concepts and brand directions for your review and feedback.',
        duration: '1-2 weeks'
      },
      {
        title: 'Refinement & Application',
        description: 'Refining the chosen concept and applying it across various touchpoints and materials.',
        duration: '2-3 weeks'
      },
      {
        title: 'Brand Guidelines & Delivery',
        description: 'Creating comprehensive brand guidelines and delivering all assets in the required formats.',
        duration: '1 week'
      }
    ],
    whyChooseUsDescription: 'Our design team combines creative excellence with business strategy to create brands that drive results.',
    whyChooseUs: [
      {
        title: 'Strategic Design',
        description: 'Every design decision is backed by research and strategy, ensuring your brand resonates with your target audience.',
        icon: Target
      },
      {
        title: 'Creative Excellence',
        description: 'Award-winning designers with years of experience creating memorable and effective brand identities.',
        icon: Award
      },
      {
        title: 'Brand Consistency',
        description: 'Comprehensive brand guidelines ensure consistent application across all touchpoints and platforms.',
        icon: Shield
      },
      {
        title: 'Business Focus',
        description: 'We design for business results, not just aesthetics. Every element is crafted to support your business goals.',
        icon: BarChart3
      },
      {
        title: 'Scalable Solutions',
        description: 'Brand systems that grow with your business and work across all platforms and media types.',
        icon: Zap
      },
      {
        title: 'Ongoing Support',
        description: 'Continued support and brand management to ensure your visual identity stays fresh and effective.',
        icon: Users
      }
    ],
    pricing: [
      {
        name: 'Logo Design',
        price: '$1,500',
        period: 'one-time',
        features: [
          '3 logo concepts',
          '2 rounds of revisions',
          'Final logo in multiple formats',
          'Basic brand guidelines',
          '2 weeks delivery'
        ],
        cta: 'Get Started',
        featured: false
      },
      {
        name: 'Complete Brand Identity',
        price: '$4,500',
        period: 'one-time',
        features: [
          'Logo design & variations',
          'Color palette & typography',
          'Business card design',
          'Letterhead & envelope',
          'Comprehensive brand guidelines',
          '4 weeks delivery'
        ],
        cta: 'Most Popular',
        featured: true
      },
      {
        name: 'Full Brand Package',
        price: '$8,500',
        period: 'one-time',
        features: [
          'Complete brand identity',
          'Website graphics package',
          'Social media templates',
          'Marketing materials',
          'Brand guidelines & training',
          '6 weeks delivery'
        ],
        cta: 'Contact Sales',
        featured: false
      }
    ],
    faq: [
      {
        question: 'How many logo concepts do you provide?',
        answer: 'We typically provide 3-5 initial logo concepts for your review. This gives you variety while keeping the process focused and efficient.'
      },
      {
        question: 'What file formats do you deliver?',
        answer: 'We deliver logos in all standard formats including AI, EPS, PNG, JPG, and SVG. We also provide specific formats for different use cases like print, web, and social media.'
      },
      {
        question: 'Do you provide brand guidelines?',
        answer: 'Yes! Comprehensive brand guidelines are included with all our packages. These ensure consistent application of your brand across all touchpoints.'
      },
      {
        question: 'Can you work with our existing brand?',
        answer: 'Absolutely! We can refresh existing brands, create brand extensions, or develop new brand elements that work with your current identity.'
      },
      {
        question: 'What\'s included in the revision process?',
        answer: 'Each package includes a specific number of revision rounds. We work closely with you to refine the concepts until you\'re completely satisfied with the final result.'
      }
    ]
  },
  {
    slug: 'ai-agents',
    title: 'AI Agents for Business',
    icon: Bot,
    emoji: '🤖',
    image: '/services/ai-agents.jpg',
    badge: 'Innovation',
    badgeVariant: 'default' as const,
    color: 'from-indigo-500 to-cyan-600',
    shortPitch: 'Intelligent automation that works 24/7 to streamline your operations.',
    heroDescription: 'Deploy AI agents that handle routine tasks, provide customer support, and automate workflows so your team can focus on high-value activities.',
    keyStats: [
      { value: '24/7', label: 'Always Available' },
      { value: '80%', label: 'Task Automation' },
      { value: '95%', label: 'Accuracy Rate' },
      { value: '60%', label: 'Cost Reduction' }
    ],
    deliverablesDescription: 'We build intelligent AI agents that automate routine tasks and enhance your business operations.',
    deliverables: [
      {
        title: 'Customer Support Bots',
        description: 'Intelligent chatbots that handle customer inquiries, provide support, and escalate complex issues to human agents.',
        icon: MessageSquare
      },
      {
        title: 'Data Processing Agents',
        description: 'AI agents that automatically process, categorize, and analyze data from various sources to provide actionable insights.',
        icon: Database
      },
      {
        title: 'Workflow Automation',
        description: 'Smart automation that handles repetitive tasks, manages approvals, and streamlines business processes.',
        icon: Settings
      },
      {
        title: 'Lead Qualification',
        description: 'AI agents that qualify leads, score prospects, and route them to the appropriate team members automatically.',
        icon: Target
      },
      {
        title: 'Content Generation',
        description: 'AI-powered content creation for emails, social media, and marketing materials that maintains your brand voice.',
        icon: FileText
      },
      {
        title: 'Integration & Monitoring',
        description: 'Seamless integration with your existing tools and continuous monitoring to ensure optimal performance.',
        icon: Layers
      }
    ],
    process: [
      {
        title: 'Process Analysis',
        description: 'Identify repetitive tasks and processes that can be automated with AI agents to maximize efficiency.',
        duration: '1-2 weeks'
      },
      {
        title: 'Agent Development',
        description: 'Build and train AI agents tailored to your specific business needs and processes.',
        duration: '3-4 weeks'
      },
      {
        title: 'Integration & Testing',
        description: 'Integrate agents with your existing systems and thoroughly test all functionality.',
        duration: '2-3 weeks'
      },
      {
        title: 'Deployment & Optimization',
        description: 'Deploy agents and continuously monitor and optimize their performance for maximum effectiveness.',
        duration: 'Ongoing'
      }
    ],
    whyChooseUsDescription: 'Our AI expertise helps you implement intelligent automation that actually works for your business.',
    whyChooseUs: [
      {
        title: 'Custom AI Solutions',
        description: 'Tailored AI agents built specifically for your business processes and requirements, not generic solutions.',
        icon: Settings
      },
      {
        title: 'Proven Technology',
        description: 'We use cutting-edge AI technology that\'s been tested and proven in real business environments.',
        icon: Shield
      },
      {
        title: 'Seamless Integration',
        description: 'AI agents that integrate seamlessly with your existing tools and workflows without disrupting operations.',
        icon: Layers
      },
      {
        title: 'Continuous Learning',
        description: 'AI agents that learn and improve over time, becoming more effective as they process more data.',
        icon: Brain
      },
      {
        title: 'ROI Focused',
        description: 'Every AI solution is designed to deliver measurable ROI and business value, not just technical innovation.',
        icon: BarChart3
      },
      {
        title: 'Ongoing Support',
        description: 'Comprehensive support and monitoring to ensure your AI agents continue to perform optimally.',
        icon: Users
      }
    ],
    pricing: [
      {
        name: 'Basic AI Agent',
        price: '$2,500',
        period: 'per month',
        features: [
          'Single-purpose AI agent',
          'Basic automation tasks',
          'Email support',
          'Monthly reporting',
          'Standard integrations'
        ],
        cta: 'Get Started',
        featured: false
      },
      {
        name: 'Advanced AI Suite',
        price: '$5,000',
        period: 'per month',
        features: [
          'Multiple AI agents',
          'Complex automation workflows',
          'Priority support',
          'Weekly reporting',
          'Custom integrations',
          'Performance optimization'
        ],
        cta: 'Most Popular',
        featured: true
      },
      {
        name: 'Enterprise AI Platform',
        price: '$10,000',
        period: 'per month',
        features: [
          'Unlimited AI agents',
          'Custom AI development',
          'Dedicated support team',
          'Real-time monitoring',
          'Advanced analytics',
          'Custom training'
        ],
        cta: 'Contact Sales',
        featured: false
      }
    ],
    faq: [
      {
        question: 'What types of tasks can AI agents handle?',
        answer: 'AI agents can handle a wide range of tasks including customer support, data processing, lead qualification, content generation, workflow automation, and more. We analyze your specific needs to recommend the best applications.'
      },
      {
        question: 'How accurate are your AI agents?',
        answer: 'Our AI agents typically achieve 90-95% accuracy rates, with continuous improvement over time. We monitor performance closely and provide regular updates to maintain optimal accuracy.'
      },
      {
        question: 'Do AI agents replace human employees?',
        answer: 'No! AI agents are designed to augment human capabilities, not replace them. They handle repetitive tasks so your team can focus on high-value, strategic work that requires human creativity and judgment.'
      },
      {
        question: 'How long does it take to implement AI agents?',
        answer: 'Implementation typically takes 4-8 weeks depending on complexity. Simple agents can be deployed in 2-3 weeks, while complex multi-agent systems may take 6-8 weeks.'
      },
      {
        question: 'Can AI agents integrate with our existing systems?',
        answer: 'Yes! We specialize in integrating AI agents with existing CRM, ERP, and other business systems. We ensure seamless data flow and workflow integration.'
      }
    ]
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return serviceData.find(service => service.slug === slug);
}

// Helper function to get all service slugs for static generation
export function getAllServiceSlugs(): string[] {
  return serviceData.map(service => service.slug);
}
