"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
    {
        name: "Alex Rivera",
        role: "Chief Technology Officer",
        bio: "20+ years in system architecture and distributed systems. Previously led engineering at TechGiant.",
        image: "/team-1.jpg",
    },
    {
        name: "Sarah Chen",
        role: "Lead Product Designer",
        bio: "Award-winning UX/UI designer specializing in enterprise interfaces and accessibility.",
        image: "/team-2.jpg",
    },
    {
        name: "James Wilson",
        role: "Head of Engineering",
        bio: "Expert in scalable backend infrastructure, Kubernetes, and cloud-native solutions.",
        image: "/team-3.jpg",
    },
    {
        name: "Emily Zhang",
        role: "AI Solutions Architect",
        bio: "PhD in Machine Learning. Leading our AI-powered SaaS initiatives and predictive modeling.",
        image: "/team-4.jpg",
    },
    {
        name: "David Kim",
        role: "Senior DevOps Engineer",
        bio: "Master of CI/CD pipelines and infrastructure automation. Ensures 99.99% uptime.",
        image: "/team-5.jpg",
    },
    {
        name: "Olivia Martinez",
        role: "Frontend Lead",
        bio: "React and WebGL expert. crafting immersive and high-performance user interfaces.",
        image: "/team-6.jpg",
    },
];

export default function TeamPage() {
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
                            The <span className="text-primary">Engineers</span> Behind the Engine
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We are a collective of industry veterans, architects, and innovators.
                            With over 20 years of combined experience, we solve the problems others can't.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full overflow-hidden group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                                    <div className="aspect-[4/3] relative bg-muted overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-foreground/10 group-hover:text-primary/20 transition-colors">
                                            {member.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                        <p className="text-primary font-medium mb-4">{member.role}</p>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                                        <div className="flex gap-4">
                                            <button className="p-2 rounded-full bg-background/50 hover:bg-primary/20 hover:text-primary transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 rounded-full bg-background/50 hover:bg-primary/20 hover:text-primary transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 rounded-full bg-background/50 hover:bg-primary/20 hover:text-primary transition-colors">
                                                <Github className="w-5 h-5" />
                                            </button>
                                        </div>
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
