"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function PortfolioSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <Section className="bg-background relative overflow-hidden py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Engineered for <span className="text-primary">Impact</span>
                        </motion.h2>
                        <p className="text-muted-foreground max-w-xl">
                            Explore how our digital engines power industry leaders.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={prevProject} className="w-12 h-12 p-0 rounded-full">
                            &larr;
                        </Button>
                        <Button variant="outline" onClick={nextProject} className="w-12 h-12 p-0 rounded-full">
                            &rarr;
                        </Button>
                    </div>
                </div>

                <div className="relative h-[600px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
                                {/* Image Side */}
                                <div className="relative h-full rounded-3xl overflow-hidden group">
                                    <Image
                                        src={activeProject.image}
                                        alt={activeProject.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-md border border-primary/10 mb-4 inline-block">
                                            {activeProject.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex flex-col justify-center p-8 bg-card/30 border border-primary/10 rounded-3xl backdrop-blur-sm">
                                    <h3 className="text-4xl md:text-5xl font-bold mb-6">{activeProject.title}</h3>
                                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                        {activeProject.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {Object.entries(activeProject.stats).slice(0, 2).map(([key, value]) => (
                                            <div key={key} className="bg-background/50 p-4 rounded-xl border border-border/50">
                                                <p className="text-3xl font-bold text-primary mb-1">{value}</p>
                                                <p className="text-xs text-muted-foreground uppercase tracking-wider">{key}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {activeProject.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button size="lg" className="w-fit gap-2" asChild>
                                        <Link href={`/portfolio/${activeProject.slug}`}>
                                            View Case Study <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
}
