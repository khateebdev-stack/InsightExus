import { Layers, Zap, Cpu, Search, PenTool, Code, Rocket } from "lucide-react";

export const content = {
    hero: {
        badge: "Architecting the Future",
        titlePrefix: "We Build",
        typewriterWords: ["Digital Engines", "Scalable Systems", "Real-Time Tech", "AI Solutions"],
        description: "Full-spectrum scalability, real-time systems, and AI-powered solutions. We empower high-growth startups and enterprises with technology that performs.",
        primaryCta: "Start Your Engine",
        secondaryCta: "Explore Services",
    },
    services: {
        title: "Core Capabilities",
        description: "From high-frequency trading platforms to AI-driven SaaS, we deliver excellence across the stack.",
        items: [
            {
                title: "Scalable Systems",
                desc: "Architectures designed to handle millions of concurrent users with sub-millisecond latency.",
                icon: Layers,
            },
            {
                title: "Real-Time Tech",
                desc: "Expertise in WebRTC, live streaming, and socket-based communication for instant interaction.",
                icon: Zap,
            },
            {
                title: "AI Integration",
                desc: "Seamlessly embedding machine learning models into production workflows for smarter apps.",
                icon: Cpu,
            },
        ],
        viewAll: "View All Services",
    },
    process: {
        title: "Our Workflow",
        description: "Our proven methodology for building world-class digital systems.",
        steps: [
            {
                number: "01",
                title: "Discovery & Architecture",
                description: "We dissect your requirements and architect a scalable blueprint. No guesswork, just engineering precision.",
                icon: Search,
            },
            {
                number: "02",
                title: "Design & Prototyping",
                description: "Visualizing the engine. We create high-fidelity prototypes to ensure the UX is intuitive and powerful.",
                icon: PenTool,
            },
            {
                number: "03",
                title: "Agile Development",
                description: "Building the core. We use iterative sprints to deliver functional modules, ensuring rapid progress and flexibility.",
                icon: Code,
            },
            {
                number: "04",
                title: "Launch & Scale",
                description: "Ignition. We deploy your system, monitor performance, and scale infrastructure as your user base grows.",
                icon: Rocket,
            },
        ],
    },
    team: {
        title: "Meet the Experts",
        description: "Our team consists of industry veterans with over 20 years of experience in building complex systems.",
        cta: "Meet the Team",
        members: [
            {
                name: "Alex Chen",
                role: "Chief Architect",
                bio: "Ex-Google Principal Engineer. 15+ years scaling distributed systems.",
                image: "/team-1.jpg",
            },
            {
                name: "Sarah Miller",
                role: "Head of AI",
                bio: "PhD in Computer Vision. Led AI initiatives at major fintech firms.",
                image: "/team-2.jpg",
            },
            {
                name: "James Wilson",
                role: "VP of Engineering",
                bio: "Specialist in high-frequency trading platforms and real-time data.",
                image: "/team-3.jpg",
            },
        ]
    },
    cta: {
        title: "Ready to Scale?",
        description: "Let's discuss how Insightexus can accelerate your digital transformation.",
        button: "Schedule a Consultation",
    },
    contact: {
        title: "Get in Touch",
        description: "Ready to start your project? We're here to help you build scalable, high-performance solutions.",
        info: {
            email: {
                title: "Email Us",
                value: "admin@insightexus.com",
                desc: "We'll respond within 24 hours."
            },
            phone: {
                title: "Call Us",
                value: "+92 (310) 141-6411",
                desc: "Mon-Fri from 9am to 6pm."
            },
            address: {
                title: "Visit Us",
                value: "Islambad, Pakistan",
                desc: "Open for appointments."
            }
        },
        form: {
            title: "Send us a Message",
            fields: {
                name: "Full Name",
                email: "Email Address",
                service: "Service Interested In",
                budget: "Estimated Budget",
                subject: "Subject",
                message: "Message"
            },
            options: {
                services: ["Scalable Systems", "Real-Time Tech", "AI Integration", "Consulting", "Other"],
                budgets: ["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"]
            },
            button: "Send Message"
        }
    },
    footer: {
        description: "Building the digital engines of tomorrow. Scalable, resilient, and ready for growth.",
        socials: [
            { icon: "Twitter", href: "#" },
            // { icon: "Github", href: "#" },
            { icon: "Linkedin", href: "#" }
        ],
        services: {
            title: "Services",
            items: ["Scalable Systems", "Real-Time Tech", "AI Integration", "Consulting"]
        },
        company: {
            title: "Company",
            items: [
                { label: "About", href: "/about" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "/contact" }
            ]
        },
        copyright: "Insightexus. All rights reserved.",
        credit: "Designed & Built by Insightexus"
    },
    testimonials: {
        title: "Client Success",
        items: [
            {
                quote: "Insightexus transformed our legacy infrastructure into a high-performance engine. Our latency dropped by 80%.",
                author: "CTO, FinTech Unicorn"
            },
            {
                quote: "The AI integration they built allowed us to automate 90% of our customer support. Truly game-changing.",
                author: "Founder, SaaS Startup"
            },
            {
                quote: "Professional, technical, and incredibly fast. They understand what it takes to scale.",
                author: "VP Product, E-commerce Giant"
            }
        ]
    },
    projects: [
        {
            id: "fintech-core",
            slug: "fintech-core",
            title: "Nexus Trading Core",
            category: "FinTech",
            description: "A high-frequency trading engine capable of processing 100k+ transactions per second with sub-millisecond latency.",
            image: "/project-fintech.png",
            tags: ["Rust", "WebAssembly", "React", "WebSocket"],
            stats: {
                latency: "< 1ms",
                throughput: "100k TPS",
                uptime: "99.999%"
            }
        },
        {
            id: "ai-vision",
            slug: "ai-vision",
            title: "Cortex AI Analytics",
            category: "AI & ML",
            description: "Enterprise-grade predictive analytics platform processing petabytes of data for real-time business intelligence.",
            image: "/project-ai-analytics.png",
            tags: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
            stats: {
                accuracy: "98.5%",
                processing: "5PB/Day",
                users: "50k+"
            }
        },
        {
            id: "global-logistics",
            slug: "global-logistics",
            title: "Velocity Logistics",
            category: "Supply Chain",
            description: "Real-time fleet tracking and route optimization system for a global shipping giant.",
            image: "/hero-3d-v2.png",
            tags: ["Go", "Kubernetes", "Mapbox", "gRPC"],
            stats: {
                tracking: "10k+ Vehicles",
                optimization: "30% Savings",
                scale: "Global"
            }
        },
        {
            id: "stream-engine",
            slug: "stream-engine",
            title: "Flux Stream",
            category: "Media Streaming",
            description: "Adaptive bitrate streaming architecture serving 4k video to millions of concurrent viewers.",
            image: "/hero-3d.png",
            tags: ["Node.js", "FFmpeg", "Redis", "CDN"],
            stats: {
                concurrent: "2M+",
                latency: "Low",
                quality: "4K HDR"
            }
        }
    ]
};
