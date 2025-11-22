"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { WhyUs } from "@/components/WhyUs";
import { Team } from "@/components/Team";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { content } from "@/lib/content";

export default function Home() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        style={{ opacity, y }}
                        className="flex flex-col gap-6 text-center lg:text-left pl-0 lg:pl-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4">
                                {content.hero.badge}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                                {content.hero.titlePrefix} <br />
                                <TypewriterEffect
                                    words={content.hero.typewriterWords}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-blue-600 animate-gradient-x"
                                    cursorClassName="text-primary ml-1"
                                />
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                {content.hero.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button size="lg" className="gap-2 shadow-lg shadow-primary/25 whitespace-nowrap" asChild>
                                <Link href="/contact">
                                    {content.hero.primaryCta} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="whitespace-nowrap" asChild>
                                <Link href="/services">{content.hero.secondaryCta}</Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image / 3D Element */}
                    <motion.div
                        style={{ scale }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center perspective-1000"
                    >
                        <div className="relative w-full h-full animate-float">
                            <Image
                                src="/hero-3d-v2.png"
                                alt="Digital Engine Core"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                        {/* Decorative Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/20 rounded-full blur-[80px] -z-10 mix-blend-screen" />
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <TechStack />

            {/* Why Us Section */}
            <WhyUs />

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* Core Services Preview */}
            <Section className="bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.services.title}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {content.services.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.services.items.map((service, i) => (
                            <Card key={i} className="p-6 hover:border-primary/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground">{service.desc}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="ghost" className="gap-2" asChild>
                            <Link href="/services">{content.services.viewAll} <ArrowRight className="w-4 h-4" /></Link>
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Process Section */}
            <Process />

            {/* Team Preview (Small) */}
            <Section className="bg-muted/30 mt-20 py-20 mb-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.team.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        {content.team.description}
                    </p>
                    <Button variant="outline" className="whitespace-nowrap" asChild>
                        <Link href="/team">{content.team.cta} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.cta.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                        {content.cta.description}
                    </p>
                    <Button size="lg" className="shadow-xl shadow-primary/20 whitespace-nowrap" asChild>
                        <Link href="/contact">{content.cta.button}</Link>
                    </Button>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
