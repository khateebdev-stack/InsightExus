export const projects = [
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
        image: "/hero-3d-v2.png", // Placeholder using hero image for now
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
        image: "/hero-3d.png", // Placeholder
        tags: ["Node.js", "FFmpeg", "Redis", "CDN"],
        stats: {
            concurrent: "2M+",
            latency: "Low",
            quality: "4K HDR"
        }
    }
];
