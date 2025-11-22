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
    },
    cta: {
        title: "Ready to Scale?",
        description: "Let's discuss how Insightexus can accelerate your digital transformation.",
        button: "Schedule a Consultation",
    },
};
