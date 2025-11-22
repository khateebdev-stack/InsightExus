"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <Section className="pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Our <span className="text-primary">Work</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A showcase of high-performance digital engines we've built for industry leaders.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <span className="text-primary text-sm font-medium mb-2 block">{project.category}</span>
                                            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-muted-foreground mb-6 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground border border-border">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                                            <Link href={`/portfolio/${project.slug}`}>
                                                View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
