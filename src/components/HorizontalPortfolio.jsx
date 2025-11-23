"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { content } from "@/lib/content";

export function HorizontalPortfolio() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-12 left-8 z-10 md:left-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Selected <span className="text-primary">Works</span>
                    </motion.h2>
                    <p className="text-muted-foreground mt-4 max-w-md">
                        Explore our latest digital engines, engineered for performance and scale.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-8 md:px-20 pt-20">
                    {content.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    <div className="flex items-center justify-center min-w-[300px] md:min-w-[400px]">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold mb-6">Want to see more?</h3>
                            <Button size="lg" asChild>
                                <Link href="/portfolio">
                                    View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="group relative h-[50vh] w-[80vw] md:h-[60vh] md:w-[50vw] flex-shrink-0 overflow-hidden rounded-3xl bg-secondary/20 border border-white/10">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20 mb-3 backdrop-blur-sm">
                        {project.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 line-clamp-2 mb-6 max-w-lg">
                        {project.description}
                    </p>
                    <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" asChild>
                        <Link href={`/portfolio/${project.slug}`}>
                            View Case Study
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
