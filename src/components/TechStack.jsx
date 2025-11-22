"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Go", "Rust", "Docker", "Kubernetes", "AWS", "Google Cloud", "PostgreSQL", "Redis", "GraphQL"
];

export function TechStack() {
    return (
        <Section className="py-12 border-y border-border/50 bg-background/50 overflow-hidden">
            <div className="flex">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...technologies, ...technologies].map((tech, index) => (
                        <span key={index} className="text-2xl md:text-4xl font-bold text-muted-foreground/20 uppercase tracking-widest select-none">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
