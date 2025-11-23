"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ProjectDetail({ project }) {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="gap-2">
                                    Live Demo <ExternalLink className="w-4 h-4" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    View Code
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <Section className="bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.entries(project.stats).map(([key, value], index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 text-center"
                            >
                                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{key}</h3>
                                <p className="text-3xl font-bold text-primary">{value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Content Section */}
            <Section>
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            This project represents a significant milestone in {project.category.toLowerCase()} technology.
                            We leveraged cutting-edge tools to deliver a solution that not only meets but exceeds performance expectations.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span>Engineered for high availability and fault tolerance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span>Optimized for sub-millisecond latency in critical paths.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span>Seamlessly integrated with existing enterprise infrastructure.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
