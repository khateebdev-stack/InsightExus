"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { content } from "@/lib/content";

export function PortfolioParallax() {
    const featuredProjects = content.projects.slice(0, 3);

    return (
        <section className="bg-background py-24 relative">
            <div className="container mx-auto px-4 mb-20">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Selected <span className="text-primary">Works</span>
                    </motion.h2>
                    <p className="text-lg text-muted-foreground">
                        Digital experiences engineered for impact and scale.
                    </p>
                </div>
            </div>

            <div className="space-y-32">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            <div className="mt-32 text-center">
                <Button size="lg" variant="outline" asChild>
                    <Link href="/portfolio">
                        View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const isEven = index % 2 === 0;

    return (
        <section ref={ref} className="container mx-auto px-4">
            <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}>
                {/* Image Side */}
                <div className="w-full lg:w-3/5 relative aspect-[16/9] rounded-3xl overflow-hidden group">
                    <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-accent/20');
                            }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    </motion.div>
                </div>

                {/* Text Side */}
                <motion.div
                    style={{ opacity }}
                    className="w-full lg:w-2/5 space-y-6"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        {project.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold">{project.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-sm text-muted-foreground/80 bg-muted px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Button size="lg" className="group" asChild>
                        <Link href={`/portfolio/${project.slug}`}>
                            View Case Study
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
