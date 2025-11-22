"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }) {
    const project = content.projects.find((p) => p.slug === params.slug);

    if (!project) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-md">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-7xl font-bold mb-6">{project.title}</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Section className="pt-0 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Sidebar / Stats */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-lg font-bold mb-4">Project Stats</h3>
                                <div className="space-y-4">
                                    {Object.entries(project.stats).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0">
                                            <span className="text-muted-foreground capitalize">{key}</span>
                                            <span className="font-bold text-primary">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-6">
                                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-muted text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Button className="w-full gap-2" size="lg">
                                Visit Live Site <ExternalLink className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Building a system of this magnitude required overcoming significant technical hurdles.
                                    We needed to ensure sub-millisecond latency while handling massive concurrency.
                                    The architecture had to be fault-tolerant and self-healing to guarantee 99.999% uptime.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    We engineered a custom distributed system using a microservices architecture.
                                    By leveraging edge computing and optimizing the data layer, we achieved performance
                                    metrics that exceeded client expectations.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Implemented custom WebSocket protocol for real-time data sync.",
                                        "Optimized database queries reducing load by 40%.",
                                        "Deployed auto-scaling Kubernetes clusters across 3 regions."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                            <span className="text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-border">
                                <Button variant="ghost" asChild>
                                    <Link href="/portfolio">
                                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
