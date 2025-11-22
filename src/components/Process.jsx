"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { content } from "@/lib/content";

export function Process() {
    return (
        <Section className="bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.process.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {content.process.description}
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {content.process.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-background border border-border p-8 rounded-2xl relative hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold z-20 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                        <step.icon className="w-5 h-5" />
                                    </div>

                                    <div className="mt-6 text-center">
                                        <span className="text-6xl font-bold text-muted/10 absolute top-4 right-4 select-none pointer-events-none">
                                            {step.number}
                                        </span>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
