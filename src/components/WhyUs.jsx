"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { CheckCircle2, Zap, Shield, Users, Code2, Server } from "lucide-react";

const features = [
    {
        title: "Engineering Excellence",
        description: "We don't just use frameworks; we understand the internals. Our solutions are optimized for performance at the bytecode level.",
        icon: Code2,
    },
    {
        title: "High-Frequency Systems",
        description: "Specialized in building low-latency trading platforms and real-time data pipelines where every microsecond counts.",
        icon: Zap,
    },
    {
        title: "Enterprise Scalability",
        description: "Architectures designed to scale horizontally. We build systems that grow with your business, handling millions of users effortlessly.",
        icon: Server,
    },
    {
        title: "Security First",
        description: "Bank-grade security protocols integrated from day one. We ensure your data and your users are protected against modern threats.",
        icon: Shield,
    },
];

export function WhyUs() {
    return (
        <Section className="relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Why Visionaries Choose <span className="text-primary">Insightexus</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            In a world of generic agencies, we stand apart as true engineering partners.
                            We tackle the technical challenges that others shy away from.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                // "20+ Years of Industry Experience",
                                "Proprietary 'Digital Engine' Architecture",
                                "Focus on High-Growth & Enterprise Clients",
                                "Direct Access to Senior Engineers"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/80">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full p-6 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
