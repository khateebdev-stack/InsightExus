"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Cpu, Server, Shield, Database, Cloud, HardDrive, Monitor } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const services = [
    {
        id: "mobile",
        title: "Mobile App Development",
        icon: <Smartphone className="w-8 h-8" />,
        description: "High-performance, user-friendly mobile apps for startups and enterprises.",
        features: [
            "Native Android & iOS apps (Kotlin, Swift)",
            "Cross-platform apps (Flutter, React Native)",
            "Local-first & offline-ready apps",
            "VoIP / Calling Apps (WebRTC)",
            "Streaming Apps (Live Video, Audio & VOD)"
        ]
    },
    {
        id: "web",
        title: "Web App Development",
        icon: <Globe className="w-8 h-8" />,
        description: "Modern, secure, and responsive web applications with a focus on speed and scalability.",
        features: [
            "Full-stack apps (React, Next.js, Node.js)",
            "Responsive UI with performance optimization",
            "RESTful / GraphQL APIs",
            "Real-time web apps (Socket.io, WebRTC)",
            "Video Streaming Platforms & Dashboards"
        ]
    },
    {
        id: "ai",
        title: "AI-Based SaaS Solutions",
        icon: <Cpu className="w-8 h-8" />,
        description: "Intelligent cloud-based products powered by AI and automation.",
        features: [
            "AI tools (Chatbots, Predictive Analytics)",
            "ML/DL model integration (TensorFlow, PyTorch)",
            "SaaS product design & architecture",
            "Data-driven analytics dashboards"
        ]
    },
    {
        id: "architecture",
        title: "System Design & Architecture",
        icon: <Server className="w-8 h-8" />,
        description: "We architect systems that scale securely, perform efficiently, and remain easy to maintain.",
        features: [
            "End-to-End System Design (Monolith to Microservices)",
            "Scalable Architecture (Event-Driven, Serverless)",
            "Database Design & Data Flow Modeling",
            "System Scalability & Fault Tolerance Planning"
        ]
    },
    {
        id: "security",
        title: "Security & Compliance",
        icon: <Shield className="w-8 h-8" />,
        description: "Protecting your digital products with enterprise-grade security.",
        features: [
            "Application & API Security Audits",
            "Secure Authentication (JWT, OAuth2)",
            "Data Encryption & SSL/TLS Setup",
            "Compliance (GDPR, HIPAA)"
        ]
    },
    {
        id: "backend",
        title: "Backend Development",
        icon: <Database className="w-8 h-8" />,
        description: "Powerful backend systems that handle scale and complexity effortlessly.",
        features: [
            "REST & GraphQL API development",
            "Scalable Microservices Architecture",
            "Database design & optimization",
            "Real-time APIs and streaming backends"
        ]
    },
    {
        id: "devops",
        title: "DevOps & Cloud",
        icon: <Cloud className="w-8 h-8" />,
        description: "Continuous integration, deployment, and effective monitoring.",
        features: [
            "CI/CD pipeline setup (GitHub Actions, Jenkins)",
            "Dockerization & Kubernetes orchestration",
            "Infrastructure as Code (Terraform, Ansible)",
            "Microservice Deployment & Service Mesh"
        ]
    },
    {
        id: "server",
        title: "Server Management",
        icon: <HardDrive className="w-8 h-8" />,
        description: "Reliable server configuration, deployment, and monitoring.",
        features: [
            "Linux / Windows server setup",
            "Cloud hosting (AWS, GCP, Azure)",
            "Load balancing & auto-scaling",
            "Performance monitoring & alerts"
        ]
    },
    {
        id: "desktop",
        title: "Desktop App Development",
        icon: <Monitor className="w-8 h-8" />,
        description: "Enterprise-grade desktop apps with modern UIs.",
        features: [
            "Windows, macOS, Linux app development",
            "Cross-platform (Electron)",
            "Secure deployment & maintenance"
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Comprehensive engineering services designed to build, scale, and secure your digital future.
                </p>
            </section>

            <Section className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col">
                                <div className="mb-6 p-4 rounded-xl bg-primary/10 text-primary w-fit">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                <Button size="lg" asChild>
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </section>

            <Footer />
        </main>
    );
}
