"use client";

import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { motion } from "framer-motion";

export function PortfolioSection() {
    // Take top 3 projects
    const featuredProjects = content.projects.slice(0, 3);

    return (
        <Section className="bg-background relative py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Selected <span className="text-primary">Works</span>
                        </motion.h2>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Digital experiences engineered for impact and scale.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex" asChild>
                        <Link href="/portfolio">
                            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
                    {/* Main Featured Project (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 lg:row-span-2 relative group rounded-3xl overflow-hidden border border-border/50 bg-card cursor-pointer"
                    >
                        <Link href={`/portfolio/${featuredProjects[0].slug}`} className="block h-full w-full">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                            {/* Image with fallback */}
                            <div className="relative w-full h-full bg-muted">
                                <Image
                                    src={featuredProjects[0].image}
                                    alt={featuredProjects[0].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-accent/20');
                                    }}
                                />
                                {/* Fallback Gradient if image fails (handled by onError, but also default bg) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-md border border-primary/10 mb-4 inline-block">
                                            {featuredProjects[0].category}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{featuredProjects[0].title}</h3>
                                        <p className="text-gray-300 line-clamp-2 max-w-lg transition-opacity duration-300 group-hover:text-white">{featuredProjects[0].description}</p>
                                    </div>
                                    <div className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Secondary Projects (Stacked) */}
                    <div className="flex flex-col gap-8 h-full">
                        {featuredProjects.slice(1).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-1 relative group rounded-3xl overflow-hidden border border-border/50 bg-card min-h-[280px] cursor-pointer"
                            >
                                <Link href={`/portfolio/${project.slug}`} className="block h-full w-full">
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                                    <div className="relative w-full h-full bg-muted">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-900/20', 'to-purple-900/20');
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 -z-10" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                                        <span className="text-xs font-medium text-primary mb-2 block">{project.category}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                    </div>
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-[-5px] group-hover:translate-y-[5px]">
                                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-primary group-hover:text-white">
                                            <ArrowRight className="w-4 h-4 text-white group-hover:text-white" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/portfolio">
                            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
