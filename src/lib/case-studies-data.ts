import { 
    DollarSign, Users, Target, TrendingUp, Globe, BarChart3, Star, Clock, 
    CheckCircle, LucideIcon, Zap, Shield, Smartphone, LayoutDashboard, 
    Search, Settings, Server, Heart, BookOpen, ZoomIn, Database
} from 'lucide-react';

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

export interface CaseStudyFeature {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface TechStackItem {
    name: string;
    icon: string; // URL to svg or devicon class
    reason: string;
}

export interface TechStackCategory {
    category: string;
    technologies: TechStackItem[];
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
    category: 'Web Development' | 'Designing' | 'Digital Marketing' | 'AI Agents';
    services: string[];
    badge: string;
    badgeVariant: 'default' | 'secondary' | 'outline' | 'destructive';
    testimonial: CaseStudyTestimonial;
    timeline: CaseStudyTimelineItem[];
    features?: CaseStudyFeature[];
    techStack?: TechStackCategory[];
    liveLink?: string;
    visualShowcase?: string[];
}

const webDevTechStack: TechStackCategory[] = [
    {
        category: "Frontend",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", reason: "For unparalleled SEO, server-side rendering, and instant page loads." },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", reason: "Component-driven UI architecture." },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", reason: "Rapid, consistent styling system." }
        ]
    },
    {
        category: "Backend & Database",
        technologies: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", reason: "Scalable runtime for API services." },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", reason: "Reliable relational data storage." }
        ]
    },
    {
        category: "Infrastructure",
        technologies: [
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", reason: "Edge network deployment." },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", reason: "Scalable cloud services and media storage." }
        ]
    }
];

const marketingTechStack: TechStackCategory[] = [
    {
        category: "Analytics & Tracking",
        technologies: [
            { name: "Google Analytics 4", icon: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg", reason: "Advanced user journey tracking and event measurement." },
            { name: "Google Tag Manager", icon: "https://cdn.worldvectorlogo.com/logos/google-tag-manager.svg", reason: "Agile deployment of marketing tags and tracking pixels." }
        ]
    },
    {
        category: "CRM & Automation",
        technologies: [
            { name: "HubSpot", icon: "https://cdn.worldvectorlogo.com/logos/hubspot.svg", reason: "Centralized lead scoring, routing, and email automation." },
            { name: "Zapier", icon: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg", reason: "Connecting disparate marketing tools into cohesive workflows." }
        ]
    },
    {
        category: "Ad Platforms",
        technologies: [
            { name: "Google Ads", icon: "https://cdn.worldvectorlogo.com/logos/google-ads-1.svg", reason: "High-intent search and display network acquisitions." },
            { name: "Meta Ads", icon: "https://cdn.worldvectorlogo.com/logos/meta-1.svg", reason: "Hyper-targeted demographic and behavioral social campaigns." }
        ]
    }
];

const designTechStack: TechStackCategory[] = [
    {
        category: "UI/UX & Prototyping",
        technologies: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", reason: "Collaborative interface design and interactive prototyping." },
            { name: "Framer", icon: "https://cdn.worldvectorlogo.com/logos/framer-lettermark.svg", reason: "High-fidelity micro-interactions and spatial animations." }
        ]
    },
    {
        category: "Creative Assets",
        technologies: [
            { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg", reason: "Vector-based brand identity and iconography design." },
            { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-line.svg", reason: "Advanced raster image manipulation and compositing." }
        ]
    },
    {
        category: "Design Systems",
        technologies: [
            { name: "Storybook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg", reason: "Isolated component development and documentation." }
        ]
    }
];

const aiTechStack: TechStackCategory[] = [
    {
        category: "AI Models & Infrastructure",
        technologies: [
            { name: "OpenAI", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", reason: "Advanced LLM routing for natural language processing." },
            { name: "Pinecone", icon: "https://cdn.worldvectorlogo.com/logos/pinecone-1.svg", reason: "Vector database for semantic search and Retrieval-Augmented Generation." }
        ]
    },
    {
        category: "Agent Frameworks",
        technologies: [
            { name: "LangChain", icon: "https://cdn.worldvectorlogo.com/logos/langchain.svg", reason: "Chaining prompts, memory, and external tools together." },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", reason: "Core scripting logic for agent orchestration." }
        ]
    },
    {
        category: "Deployment",
        technologies: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", reason: "Containerization mapping for scalable cloud deployments." },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", reason: "Reliable cloud compute for 24/7 autonomous agents." }
        ]
    }
];

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
        category: 'Digital Marketing',
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
        ],
        features: [
            { title: "Dynamic A/B Testing Engine", description: "Implemented customized variant testing enabling real-time conversion adjustments.", icon: Shield },
            { title: "Automated Onboarding flows", description: "Redesigned step-by-step user onboarding, significantly reducing drop-offs.", icon: Target },
            { title: "Real-time Analytics Dashboard", description: "Built a custom dashboard tracking user acquisitions, MRR, and churn.", icon: LayoutDashboard },
            { title: "Scalable API Architecture", description: "Refactored legacy endpoints to handle 10x simultaneous user connections.", icon: Server }
        ],
        techStack: marketingTechStack,
        liveLink: "https://example.com/techflow",
        visualShowcase: ["/images/showcase-techflow-1.jpg", "/images/showcase-techflow-2.jpg", "/images/showcase-techflow-3.jpg"]
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
        category: 'Web Development',
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
        ],
        features: [
            { title: "Custom POS Integration", description: "Synced online orders directly to the kitchen's existing Point of Sale system.", icon: Search },
            { title: "Mobile-First Ordering", description: "Optimized the entire menu browsing and checkout experience for smartphones.", icon: Smartphone },
            { title: "Geo-targeted Marketing", description: "Automated local ad spending based on location proximity to branches.", icon: Target },
            { title: "Review Management System", description: "Integrated automated feedback requests post-delivery.", icon: Star }
        ],
        techStack: webDevTechStack,
        liveLink: "https://example.com/urbanbistro"
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
        category: 'Digital Marketing',
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
        ],
        features: [
            { title: "B2B Portal", description: "Secure portal for existing partners to track component manufacturing status.", icon: Shield },
            { title: "CRM Integration", description: "Full bidirectional sync with Salesforce for sales teams.", icon: Settings },
            { title: "Interactive 3D Viewer", description: "WebGL based component viewer highlighting precision details.", icon: ZoomIn },
            { title: "Automated RFQ System", description: "Streamlined the Request For Quote process lowering response times by 80%.", icon: Zap }
        ],
        techStack: marketingTechStack,
        liveLink: "https://example.com/precision"
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
        category: 'Web Development',
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
        ],
        features: [
            { title: "Headless E-commerce Architecture", description: "Decoupled frontend for lightning-fast page transitions.", icon: Zap },
            { title: "Dynamic Cart Recommendations", description: "AI-driven product up-sells directly inside the sliding cart.", icon: Target },
            { title: "One-Click Checkout", description: "Integrated Apple Pay and Shop Pay to reduce checkout friction.", icon: Smartphone },
            { title: "Advanced User Segmentation", description: "Grouped users dynamically for hyper-targeted email campaigns.", icon: Users }
        ],
        techStack: webDevTechStack,
        liveLink: "https://example.com/ecofashion"
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
        category: 'Digital Marketing',
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
        ],
        features: [
            { title: "HIPAA-Compliant Hosting", description: "Ensured all patient data handling met strict federal guidelines.", icon: Shield },
            { title: "Telehealth Integration", description: "Built direct video consultation scheduling into the patient portal.", icon: Heart },
            { title: "Automated Appointment Reminders", description: "Reduced no-shows by 40% using SMS and email triggers.", icon: Clock },
            { title: "Patient Resource Library", description: "Searchable CMS for medical articles and post-care instructions.", icon: BookOpen }
        ],
        techStack: marketingTechStack,
        liveLink: "https://example.com/wellness"
    },
    {
        id: 6,
        slug: 'paystream-fintech-rebrand-ui',
        title: 'FinTech App Rebrand & UI/UX',
        company: 'PayStream Financial',
        industry: 'FinTech',
        duration: '5 months',
        challenge: 'A clunky, outdated app interface causing high user drop-off during onboarding, coupled with an uninspiring, generic visual identity that lacked trust.',
        solution: 'A comprehensive brand overhaul and meticulous UI/UX mobile app redesign focusing on accessibility, modern aesthetic trust, and frictionless financial transactions.',
        results: {
            engagement: { value: '+210%', icon: Users, color: 'text-blue-600' },
            retention: { value: '+140%', icon: Heart, color: 'text-rose-600' },
            onboarding: { value: '+300%', icon: Zap, color: 'text-yellow-600' }
        },
        metrics: [
            { label: 'User Retention', before: '12%', after: '43%', growth: '+258%' },
            { label: 'Onboarding Completion', before: '24%', after: '88%', improvement: '+266%' },
            { label: 'Daily Active Users', before: '4,500', after: '18,200', improvement: '+304%' },
            { label: 'Design System adoption', before: '0%', after: '100%', improvement: '+100%' }
        ],
        description: 'A promising FinTech startup possessed a powerful backend system but was aggressively bleeding users due to a confusing interface. We spearheaded a complete visual rebrand to establish institutional trust and completely overhauled their mobile app UI/UX. The new intuitive design system eliminated transaction friction and resulted in explosive user retention.',
        category: 'Designing',
        services: ['UI/UX Design', 'Brand Identity', 'Design Systems', 'App Prototyping'],
        badge: 'Premium',
        badgeVariant: 'outline',
        testimonial: {
            quote: "The new brand identity and app experience completely changed how users perceive us. The interface is now so intuitive that our customer support tickets regarding app usage dropped to zero.",
            author: "Elena Rostova",
            role: "Chief Product Officer, PayStream"
        },
        timeline: [
            { month: 'Month 1', activity: 'Comprehensive user research, wireframing, and brand identity conceptualization' },
            { month: 'Month 2', activity: 'High-fidelity UI prototyping and interactive user testing' },
            { month: 'Month 3-4', activity: 'Creation of a scalable Design System and developer handoff' },
            { month: 'Month 5', activity: 'Brand launch, marketing collateral design, and app store asset creation' }
        ],
        features: [
            { title: "Scalable Design System", description: "A robust library of reusable UI components in Figma to ensure future consistency.", icon: Settings },
            { title: "Frictionless Onboarding", description: "Redesigned the KYC process into micro-steps, drastically reducing user fatigue.", icon: Target },
            { title: "Animated Interactions", description: "Custom micro-animations for transaction success states to trigger delight.", icon: Zap },
            { title: "Dark Mode Architecture", description: "A beautifully balanced dark mode palette specifically engineered for OLED mobile screens.", icon: Smartphone }
        ],
        techStack: designTechStack,
        liveLink: "https://example.com/paystream"
    },
    {
        id: 7,
        slug: 'ai-sales-agent-deployment',
        title: '24/7 AI Sales Conversions',
        company: 'AutoMotive Group',
        industry: 'Automotive',
        duration: '4 months',
        challenge: 'Missing after-hours leads and spending too much on tier-1 support staff for basic vehicle inquiries.',
        solution: 'Custom AI agent trained on the dealership\'s entire inventory, pricing, and financing options to handle inquiries automatically.',
        results: {
            conversions: { value: '+45%', icon: Target, color: 'text-purple-600' },
            supportCosts: { value: '-60%', icon: DollarSign, color: 'text-green-600' },
            leads: { value: '+120%', icon: Users, color: 'text-blue-600' }
        },
        metrics: [
            { label: 'After-Hours Leads', before: '15/week', after: '85/week', growth: '+466%' },
            { label: 'Response Time', before: '4 hours', after: '4 seconds', improvement: '+99%' },
            { label: 'Support Costs', before: '$12K/mo', after: '$4.8K/mo', improvement: '-60%' },
            { label: 'Test Drives Booked', before: '45/mo', after: '92/mo', improvement: '+104%' }
        ],
        description: 'A regional automotive group was losing significant business during off-hours as competitors captured impatient prospects. We developed a robust AI agent tightly integrated with their inventory management system that could qualify leads, discuss pricing, and even schedule test drives completely autonomously.',
        category: 'AI Agents',
        services: ['AI Agent Development', 'Process Automation', 'Lead Qualification', 'System Integration'],
        badge: 'New',
        badgeVariant: 'default',
        testimonial: {
            quote: "The AI agent literally pays for itself in just the first week of every month. It's like having our best salesperson working 24/7 without taking vacations.",
            author: "Michael Chang",
            role: "Operations Director, AutoMotive Group"
        },
        timeline: [
            { month: 'Month 1', activity: 'Knowledge base creation and inventory API integration' },
            { month: 'Month 2', activity: 'AI persona training and edge-case prompt engineering' },
            { month: 'Month 3', activity: 'CRM integration and limited beta rollout on main website' },
            { month: 'Month 4', activity: 'Full deployment across social channels and website with handoff' }
        ],
        features: [
            { title: "Inventory Syncing", description: "Real-time lookups to verify if a specific vehicle trim is currently on the lot.", icon: Database },
            { title: "Human Handoff", description: "Seamlessly routes highly-qualified buyers directly to available managers.", icon: Users },
            { title: "Multi-language Support", description: "Automatically converses fluently in Spanish and English.", icon: Globe },
            { title: "SMS Integration", description: "Follows up with prospects right via SMS if they disconnect from the site.", icon: Smartphone }
        ],
        techStack: aiTechStack,
        liveLink: "https://example.com/automotive"
    },
    {
        id: 8,
        slug: 'local-service-wordpress-platform',
        title: 'Local Plumber Domination',
        company: 'Apex Plumbing',
        industry: 'Home Services',
        duration: '3 months',
        challenge: 'Reliant on expensive aggregators (HomeAdvisor, Yelp) for leads because their own website looked ancient and ranked poorly.',
        solution: 'Modern, high-converting WordPress website optimized heavily for local search and mobile users in a panic.',
        results: {
            organicTraffic: { value: '+310%', icon: TrendingUp, color: 'text-green-600' },
            calls: { value: '+185%', icon: Smartphone, color: 'text-blue-600' },
            CPA: { value: '-65%', icon: DollarSign, color: 'text-purple-600' }
        },
        metrics: [
            { label: 'Organic Traffic', before: '320/mo', after: '1,450/mo', growth: '+353%' },
            { label: 'Emergency Calls', before: '12/mo', after: '48/mo', improvement: '+300%' },
            { label: 'Cost Per Lead', before: '$85', after: '$28', improvement: '-67%' },
            { label: 'Google Rank', before: 'Page 5', after: 'Position #2', improvement: '+95%' }
        ],
        description: 'A successful local plumbing business was tired of paying exorbitant fees to lead-generation platforms. They needed to own their traffic. We built a lightning-fast custom WordPress site architected specifically for high-stress "emergency" conversions. Coupled with aggressive Local SEO, they now generate their own exclusive, highly-qualified leads.',
        category: 'Web Development',
        services: ['WordPress Development', 'Local SEO', 'Conversion Rate Optimization', 'Content Creation'],
        badge: 'Featured',
        badgeVariant: 'secondary',
        testimonial: {
            quote: "We finally fired our lead vendors. The new WordPress site ranks higher than the aggregators in our city and the leads we get call us directly. Total game changer.",
            author: "Dave Roberts",
            role: "Owner, Apex Plumbing"
        },
        timeline: [
            { month: 'Month 1', activity: 'Competitor analysis, keyword mapping, and WordPress wireframing' },
            { month: 'Month 2', activity: 'Custom theme development and mobile-first responsive coding' },
            { month: 'Month 3', activity: 'Content migration, on-page SEO optimization, and formal launch' }
        ],
        features: [
            { title: "Local SEO Optimized", description: "Hyper-focused on geographic search terms and Google Business Profile.", icon: Search },
            { title: "Lightning Fast Mobile UX", description: "Minimal payload and accelerated rendering for mobile connections.", icon: Smartphone },
            { title: "Click-to-Call Functionality", description: "Persistent floating action buttons for instant emergency dispatch.", icon: Zap },
            { title: "Trust Signals Integration", description: "Dynamic fetching of latest 5-star reviews specifically for plumbing.", icon: Star }
        ],
        techStack: webDevTechStack,
        liveLink: "https://example.com/apexplumbing"
    }
];
