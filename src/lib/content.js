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
                value: "+92 (310) 111-4611",
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
            },
            client: {
                name: "AlphaQuant Capital",
                industry: "Financial Services",
                website: "alphaquant.example.com"
            },
            timeline: {
                duration: "18 Months",
                year: "2024"
            },
            team: [
                { role: "System Architects", count: 2 },
                { role: "Rust Engineers", count: 4 },
                { role: "Frontend Devs", count: 2 }
            ],
            challenge: "The client needed to replace a legacy Java-based trading system that was suffering from garbage collection pauses, causing significant financial loss during high-volatility market events. They required a zero-allocation system with deterministic latency profiles.",
            solution: "We engineered a ground-up rewrite using Rust, leveraging its ownership model to guarantee memory safety without a garbage collector. The core engine uses a ring-buffer architecture for lock-free concurrency, while the frontend communicates via binary WebSocket protocols for real-time visualization.",
            results: [
                { metric: "99th Percentile Latency", value: "0.8ms", label: "Reduced from 150ms" },
                { metric: "Infrastructure Cost", value: "-40%", label: "Due to efficiency" },
                { metric: "Trade Volume", value: "3x", label: "Capacity increase" }
            ],
            businessImpact: {
                roi: "300% ROI in first quarter",
                efficiency: "Reduced operational overhead by 40%",
                growth: "Enabled entry into 2 new Asian markets"
            },
            maintenance: {
                plan: "24/7 automated monitoring with zero-downtime rolling updates.",
                guarantee: "99.999% SLA availability"
            },
            scalability: {
                current: "Handles 100k TPS",
                future: "Architected to scale to 1M TPS without refactoring"
            },
            gallery: ["/gallery-fintech-1.png", "/gallery-fintech-2.png"],
            technologyDetails: {
                stack: [
                    { name: "Rust", rationale: "Zero-cost abstractions and memory safety without GC pauses" },
                    { name: "WebAssembly", rationale: "Near-native performance in the browser for real-time UI" },
                    { name: "React", rationale: "Component reusability for complex trading dashboard" },
                    { name: "WebSocket", rationale: "Full-duplex communication for sub-millisecond data streaming" }
                ],
                architecture: "Microservices with event-driven architecture using message queues for decoupling"
            },
            development: {
                methodology: "Agile with 2-week sprints",
                totalSprints: 36,
                teamStructure: "Cross-functional pods with embedded QA",
                cicd: "GitLab CI/CD with automated testing and blue-green deployments"
            },
            security: {
                measures: [
                    "End-to-end encryption for all trade data",
                    "Multi-factor authentication with hardware keys",
                    "Regular penetration testing (quarterly)",
                    "SOC 2 Type II compliance"
                ],
                certifications: ["SOC 2", "ISO 27001"]
            },
            performance: {
                metrics: [
                    { name: "Average Latency", value: "0.6ms", benchmark: "Industry standard: 50ms" },
                    { name: "Memory Usage", value: "120MB", benchmark: "Previous system: 2GB" },
                    { name: "CPU Efficiency", value: "15% peak load", benchmark: "Previous: 85%" }
                ]
            },
            futureRoadmap: [
                "AI-based trade prediction module (Q2 2025)",
                "Multi-region deployment for global latency reduction (Q3 2025)",
                "Integration with DeFi protocols (Q4 2025)"
            ],
            testimonials: [
                {
                    quote: "The latency improvements are simply unheard of. Insightexus didn't just build software; they gave us a competitive edge.",
                    author: "Marcus Thorne",
                    role: "CTO, AlphaQuant"
                }
            ]
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
            },
            client: {
                name: "DataSphere Corp",
                industry: "Big Data Analytics",
                website: "datasphere.example.com"
            },
            timeline: {
                duration: "12 Months",
                year: "2023"
            },
            challenge: "DataSphere was struggling to process unstructured video data at scale. Their existing pipeline took days to generate insights, making real-time decision making impossible for their retail clients.",
            solution: "We implemented a distributed inference pipeline using Kubernetes and GPU acceleration. By optimizing the model architecture and implementing edge caching, we moved processing closer to the source.",
            results: [
                { metric: "Processing Time", value: "Real-time", label: "Down from 48h" },
                { metric: "Model Accuracy", value: "+12%", label: "Improved precision" }
            ],
            businessImpact: {
                roi: "Saved $2M annually in processing costs",
                efficiency: "Automated 95% of manual data tagging",
                growth: "Platform adoption grew by 200%"
            },
            maintenance: {
                plan: "Quarterly model retraining and performance tuning.",
                guarantee: "Model drift monitoring and auto-correction"
            },
            scalability: {
                current: "5PB daily ingestion",
                future: "Horizontal scaling to support exabyte-scale datasets"
            },
            gallery: ["/gallery-ai-1.png"]
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
            },
            // Minimal data example to test conditional rendering
            timeline: {
                year: "2024"
            },
            businessImpact: {
                roi: "Fuel costs reduced by 15%",
                efficiency: "Delivery times improved by 20%",
                growth: "Expanded fleet by 500 vehicles"
            },
            maintenance: {
                plan: "Real-time telemetry monitoring.",
                guarantee: "99.9% System Uptime"
            },
            scalability: {
                current: "10k active vehicles",
                future: "Tested for 100k concurrent connections"
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
            },
            client: {
                name: "StreamCo",
                industry: "Entertainment"
            },
            challenge: "Scaling live events to millions of users without buffering.",
            solution: "Custom CDN architecture with edge computing nodes.",
            businessImpact: {
                roi: "Ad revenue increased by 50%",
                efficiency: "Bandwidth costs reduced by 30%",
                growth: "User retention up by 25%"
            },
            maintenance: {
                plan: "24/7 NOC support during live events.",
                guarantee: "Zero buffering guarantee"
            },
            scalability: {
                current: "2M concurrent viewers",
                future: "Elastic scaling for 10M+ viewers"
            }
        }
    ]
};
