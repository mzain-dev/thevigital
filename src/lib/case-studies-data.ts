import { DollarSign, Users, Target, TrendingUp, Globe, BarChart3, Star, Clock, CheckCircle, LucideIcon } from 'lucide-react';

export interface CaseStudyMetric {
    label: string;
    before: string;
    after: string;
    growth?: string;
    improvement?: string;
}

export interface CaseStudyResultItem {
    value: string;
    icon: LucideIcon;
    color: string;
}

export interface CaseStudyTimelineItem {
    month: string;
    activity: string;
}

export interface CaseStudyTestimonial {
    quote: string;
    author: string;
    role: string;
}

export interface CaseStudy {
    id: number;
    slug: string;
    title: string;
    company: string;
    industry: string;
    duration: string;
    challenge: string;
    solution: string;
    results: Record<string, CaseStudyResultItem>;
    metrics: CaseStudyMetric[];
    description: string;
    services: string[];
    badge: string;
    badgeVariant: 'default' | 'secondary' | 'outline' | 'destructive';
    testimonial: CaseStudyTestimonial;
    timeline: CaseStudyTimelineItem[];
}

export const caseStudiesData: CaseStudy[] = [
    {
        id: 1,
        slug: 'techflow-solutions-saas-growth',
        title: 'From $50K to $180K Monthly Revenue',
        company: 'TechFlow Solutions',
        industry: 'SaaS',
        duration: '8 months',
        challenge: 'Struggling with low conversion rates and poor user acquisition costing the business heavily month-over-month.',
        solution: 'Complete funnel optimization with robust data-driven A/B testing, rebuilding the core user acquisition strategy.',
        results: {
            revenue: { value: '+260%', icon: DollarSign, color: 'text-green-600' },
            users: { value: '+340%', icon: Users, color: 'text-blue-600' },
            conversion: { value: '+185%', icon: Target, color: 'text-purple-600' }
        },
        metrics: [
            { label: 'Monthly Recurring Revenue', before: '$50,000', after: '$180,000', growth: '+260%' },
            { label: 'Customer Acquisition Cost', before: '$450', after: '$180', improvement: '-60%' },
            { label: 'Customer Lifetime Value', before: '$2,100', after: '$4,800', improvement: '+128%' },
            { label: 'Conversion Rate', before: '2.1%', after: '6.0%', improvement: '+185%' }
        ],
        description: 'A struggling SaaS startup was losing customers faster than they could acquire them. Their onboarding was broken, and their pricing page confused prospects. Through comprehensive funnel analysis and optimization, we identified key bottlenecks, simplified their core messaging, and implemented data-driven solutions that completely transformed their business trajectory. Within 8 months, they achieved profitability.',
        services: ['Funnel Optimization', 'A/B Testing', 'Conversion Rate Optimization', 'Customer Retention'],
        badge: 'Featured',
        badgeVariant: 'default',
        testimonial: {
            quote: "Vigital didn't just improve our numbers - they saved our business. The systematic approach and attention to detail was exactly what we needed to scale.",
            author: "Sarah Chen",
            role: "CEO, TechFlow Solutions"
        },
        timeline: [
            { month: 'Month 1-2', activity: 'Comprehensive UI/UX audit and data analysis setup' },
            { month: 'Month 3-4', activity: 'Funnel redesign and rigorous A/B testing rollout' },
            { month: 'Month 5-6', activity: 'Full Implementation and continuous optimization' },
            { month: 'Month 7-8', activity: 'Scale and rollout of advanced marketing automation' }
        ]
    },
    {
        id: 2,
        slug: 'urban-bistro-group-digital-transformation',
        title: 'Local Restaurant Chain Goes Digital',
        company: 'Urban Bistro Group',
        industry: 'Restaurant',
        duration: '6 months',
        challenge: 'No online presence, declining foot traffic due to an aging brand, and massive COVID-19 related impacts.',
        solution: 'Complete digital transformation featuring custom online ordering, delivery integration, and localized SEO.',
        results: {
            orders: { value: '+420%', icon: BarChart3, color: 'text-orange-600' },
            revenue: { value: '+280%', icon: DollarSign, color: 'text-green-600' },
            reviews: { value: '+156', icon: Star, color: 'text-yellow-600' }
        },
        metrics: [
            { label: 'Online Orders', before: '45/week', after: '234/week', growth: '+420%' },
            { label: 'Average Order Value', before: '$18', after: '$32', improvement: '+78%' },
            { label: 'Google Reviews', before: '23', after: '179', improvement: '+678%' },
            { label: 'Social Media Followers', before: '890', after: '3,200', improvement: '+260%' }
        ],
        description: 'A traditional, multi-location restaurant group was struggling to adapt to the digital age, heavily reliant on physical foot traffic that had dried up. We created a comprehensive digital strategy that included modern website development with robust e-commerce capabilities, an intuitive online ordering system, and aggressive localized social media management to win back the local market.',
        services: ['Web Development', 'Online Ordering', 'Social Media Management', 'Local SEO'],
        badge: 'Popular',
        badgeVariant: 'secondary',
        testimonial: {
            quote: "We went from almost closing our doors to our best fiscal year ever. The digital transformation was seamless and the results absolutely speak for themselves.",
            author: "Marcus Rodriguez",
            role: "Owner, Urban Bistro Group"
        },
        timeline: [
            { month: 'Month 1', activity: 'Modern bespoke website and online ordering system development' },
            { month: 'Month 2-3', activity: 'Hyper-local social media strategy and content creation' },
            { month: 'Month 4-5', activity: 'Local SEO overhaul and Google My Business optimization' },
            { month: 'Month 6', activity: 'Advanced analytics setup and performance monitoring dashboards' }
        ]
    },
    {
        id: 3,
        slug: 'precision-components-b2b-leads',
        title: 'B2B Manufacturing Lead Generation',
        company: 'Precision Components Inc.',
        industry: 'Manufacturing',
        duration: '10 months',
        challenge: 'Outdated marketing collaterals, virtually zero digital footprint, and steadily declining sales in a competitive market.',
        solution: 'Modern, aggressive B2B marketing strategy pivoting heavily into high-value content marketing and complex lead nurturing.',
        results: {
            leads: { value: '+380%', icon: Users, color: 'text-blue-600' },
            sales: { value: '+195%', icon: TrendingUp, color: 'text-green-600' },
            partnerships: { value: '+12', icon: Globe, color: 'text-purple-600' }
        },
        metrics: [
            { label: 'Qualified Leads', before: '8/month', after: '38/month', growth: '+375%' },
            { label: 'Sales Revenue', before: '$120K', after: '$354K', improvement: '+195%' },
            { label: 'Website Traffic', before: '1,200', after: '8,400', improvement: '+600%' },
            { label: 'New Partnerships', before: '2', after: '14', improvement: '+600%' }
        ],
        description: 'A deeply traditional manufacturing company needed to severely modernize their approach to reach totally new customer segments and compete on a global digital stage. We developed a comprehensive B2B marketing strategy that positioned their technical superiority at the forefront of their digital identity, completely overhauling how they capture, nurture, and close enterprise-level leads.',
        services: ['B2B Marketing', 'Content Strategy', 'Lead Generation', 'Partnership Development'],
        badge: 'Premium',
        badgeVariant: 'outline',
        testimonial: {
            quote: "The transformation was incredible. We went from struggling to secure meetings to having a waiting list for our custom fabrication. The ROI was evident within 3 months.",
            author: "Jennifer Walsh",
            role: "VP Sales, Precision Components Inc."
        },
        timeline: [
            { month: 'Month 1-2', activity: 'Deep-dive market research and ruthless competitor analysis' },
            { month: 'Month 3-4', activity: 'Enterprise website redesign and dense content strategy mapping' },
            { month: 'Month 5-7', activity: 'Multi-channel lead generation campaigns and email nurturing flows' },
            { month: 'Month 8-10', activity: 'Strategic partnership development and system scaling' }
        ]
    },
    {
        id: 4,
        slug: 'ecofashion-co-explosive-growth',
        title: 'E-commerce Store Explosive Growth',
        company: 'EcoFashion Co.',
        industry: 'E-commerce',
        duration: '7 months',
        challenge: 'Low traffic, disastrous conversion rates, and a massive cart abandonment issue plaguing profitability.',
        solution: 'Complete e-commerce infrastructure optimization heavily utilizing targeted Conversion Rate Optimization (CRO).',
        results: {
            revenue: { value: '+340%', icon: DollarSign, color: 'text-green-600' },
            traffic: { value: '+280%', icon: BarChart3, color: 'text-blue-600' },
            conversion: { value: '+220%', icon: Target, color: 'text-purple-600' }
        },
        metrics: [
            { label: 'Monthly Revenue', before: '$28K', after: '$123K', growth: '+340%' },
            { label: 'Website Traffic', before: '12K', after: '46K', improvement: '+283%' },
            { label: 'Conversion Rate', before: '1.8%', after: '5.8%', improvement: '+222%' },
            { label: 'Cart Abandonment', before: '68%', after: '34%', improvement: '-50%' }
        ],
        description: 'An emerging eco-friendly fashion brand was struggling to convert their limited online traffic into actual sales despite having incredible products. We meticulously audited their buyer journey, identified severe friction points in the checkout process, and rolled out comprehensive optimization strategies alongside highly targeted email retargeting flows.',
        services: ['E-commerce Optimization', 'Conversion Rate Optimization', 'SEO', 'Email Marketing'],
        badge: 'Featured',
        badgeVariant: 'default',
        testimonial: {
            quote: "Our sales trajectory completely flipped. The systematic approach to optimization smoothed out literally every bump in our buying process. We're now hugely profitable.",
            author: "Alex Thompson",
            role: "Founder, EcoFashion Co."
        },
        timeline: [
            { month: 'Month 1', activity: 'E-commerce deep audit and user journey friction analysis' },
            { month: 'Month 2-3', activity: 'Heavy website optimization and continuous A/B testing' },
            { month: 'Month 4-5', activity: 'Technical SEO and organic content marketing implementation' },
            { month: 'Month 6-7', activity: 'Complex email marketing automations and retention campaigns' }
        ]
    },
    {
        id: 5,
        slug: 'wellness-medical-center-patient-acquisition',
        title: 'Healthcare Practice Digital Transformation',
        company: 'Wellness Medical Center',
        industry: 'Healthcare',
        duration: '9 months',
        challenge: 'Zero online presence, difficult new patient acquisition, and hopelessly outdated booking systems.',
        solution: 'Modern, HIPAA-compliant digital healthcare marketing strategy entirely focused on aggressive patient acquisition.',
        results: {
            patients: { value: '+250%', icon: Users, color: 'text-blue-600' },
            appointments: { value: '+320%', icon: Clock, color: 'text-green-600' },
            reviews: { value: '+89', icon: Star, color: 'text-yellow-600' }
        },
        metrics: [
            { label: 'New Patients', before: '15/month', after: '53/month', growth: '+253%' },
            { label: 'Online Appointments', before: '8%', after: '67%', improvement: '+738%' },
            { label: 'Google Reviews', before: '12', after: '101', improvement: '+742%' },
            { label: 'Website Traffic', before: '2,100', after: '12,800', improvement: '+510%' }
        ],
        description: 'A highly respected but traditional medical practice needed to vastly modernize their approach to patient acquisition and management to stay relevant. We architected a comprehensive digital strategy that strictly respected healthcare compliance regulations while implementing a frictionless online booking experience and aggressive reputation management.',
        services: ['Healthcare Marketing', 'Website Development', 'Patient Acquisition', 'Online Booking'],
        badge: 'New',
        badgeVariant: 'secondary',
        testimonial: {
            quote: "The digital transformation overhauled how our clinic operates. Patient acquisition is now fully automated and virtually effortless. Our practice is thriving beyond our wildest expectations.",
            author: "Dr. Maria Santos",
            role: "Medical Director, Wellness Medical Center"
        },
        timeline: [
            { month: 'Month 1-2', activity: 'Healthcare compliance structuring and platform development' },
            { month: 'Month 3-4', activity: 'Secure online booking system and patient portal integration' },
            { month: 'Month 5-7', activity: 'Aggressive localized SEO and automated review management' },
            { month: 'Month 8-9', activity: 'Targeted patient acquisition campaigns and ad optimization' }
        ]
    },
    {
        id: 6,
        slug: 'legal-associates-thought-leadership',
        title: 'Professional Services Firm Growth',
        company: 'Legal Associates LLP',
        industry: 'Legal Services',
        duration: '12 months',
        challenge: 'Weak online authority and severe difficulty attracting high-value, quality corporate clients.',
        solution: 'Authoritative professional services marketing rooted deeply in thought leadership and direct client acquisition.',
        results: {
            clients: { value: '+180%', icon: Users, color: 'text-blue-600' },
            revenue: { value: '+240%', icon: DollarSign, color: 'text-green-600' },
            cases: { value: '+165%', icon: CheckCircle, color: 'text-purple-600' }
        },
        metrics: [
            { label: 'New Clients', before: '6/month', after: '17/month', growth: '+183%' },
            { label: 'Firm Revenue', before: '$180K', after: '$612K', improvement: '+240%' },
            { label: 'Case Volume', before: '24', after: '64', improvement: '+167%' },
            { label: 'Average Case Value', before: '$7,500', after: '$9,600', improvement: '+28%' }
        ],
        description: 'An elite law firm was struggling to attract the caliber of corporate clients they deserved, often losing out to larger bureaucratic competitors. We developed a sophisticated professional services marketing strategy that elevated their partners, positioned them as absolute thought leaders in their specific legal niches, and dramatically increased their inbound high-value case volume.',
        services: ['Professional Services Marketing', 'Content Marketing', 'Client Acquisition', 'Thought Leadership'],
        badge: 'Premium',
        badgeVariant: 'outline',
        testimonial: {
            quote: "The strategic alignment completely changed our firm's trajectory. We're now consistently attracting significantly higher-quality corporate clients and our gross revenue has more than doubled.",
            author: "Robert Kim",
            role: "Managing Partner, Legal Associates LLP"
        },
        timeline: [
            { month: 'Month 1-3', activity: 'Elite brand positioning and deep content strategy formulation' },
            { month: 'Month 4-6', activity: 'Premium website redesign and initial thought leadership deployment' },
            { month: 'Month 7-9', activity: 'High-ticket client acquisition campaigns and digital networking' },
            { month: 'Month 10-12', activity: 'Institutional referral system buildout and advanced automation' }
        ]
    }
];
