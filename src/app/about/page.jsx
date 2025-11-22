"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10" />
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-8">
                            We Don't Just Write Code. <br />
                            <span className="text-primary">We Build Digital Engines.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Insightexus is a team of 20+ year veterans, united by a single mission: to solve the hardest engineering problems for high-growth startups and enterprises.
                        </p>
                    </div>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            In a world of quick fixes and MVP-first mentalities, we stand for <strong>robustness and scalability</strong>. We believe that true competitive advantage comes from systems that can handle the weight of success.
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Our "Digital Engines" are not just applications; they are production-ready, fault-tolerant systems designed to scale from day one. Whether it's a microservices architecture or a real-time AI platform, we build the foundation for your future growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <Card className="bg-gradient-to-br from-white/5 to-transparent border-primary/20">
                            <h3 className="text-xl font-bold mb-2 text-white">20+ Years Experience</h3>
                            <p className="text-muted-foreground">Deep industry knowledge across diverse sectors and technologies.</p>
                        </Card>
                        <Card className="bg-gradient-to-br from-white/5 to-transparent border-primary/20">
                            <h3 className="text-xl font-bold mb-2 text-white">End-to-End Delivery</h3>
                            <p className="text-muted-foreground">From initial system design to final deployment and maintenance.</p>
                        </Card>
                        <Card className="bg-gradient-to-br from-white/5 to-transparent border-primary/20">
                            <h3 className="text-xl font-bold mb-2 text-white">Niche Expertise</h3>
                            <p className="text-muted-foreground">Specialized in WebRTC, Live Streaming, and AI integration.</p>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section className="bg-white/5 rounded-3xl my-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Who We Serve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">High-Growth Startups</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">Series A to C companies scaling up.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">Need for robust microservices & DevOps.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">Mid-Market Enterprises</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">Digital transformation & modernization.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">Building complex new product lines.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Build Your Engine?</h2>
                <Button size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </section>

            <Footer />
        </main>
    );
}
