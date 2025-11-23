"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ProjectDetail({ project }) {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
                                {project.category}
                            </span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">{project.title}</h1>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Button size="lg" className="gap-2 w-full sm:w-auto">
                                    Live Demo <ExternalLink className="w-4 h-4" />
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    View Code
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {project.stats && (
                <Section className="bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Object.entries(project.stats).map(([key, value], index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 text-center"
                                >
                                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{key}</h3>
                                    <p className="text-3xl font-bold text-primary">{value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* At a Glance (Client, Timeline, Team) */}
            {(project.client || project.timeline || project.team) && (
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 border-y border-border py-8 sm:py-12">
                            {project.client && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-primary">Client</h3>
                                    <p className="text-xl font-bold mb-1">{project.client.name}</p>
                                    <p className="text-muted-foreground">{project.client.industry}</p>
                                    {project.client.website && (
                                        <a href={`https://${project.client.website}`} className="text-sm text-primary hover:underline mt-2 inline-block">
                                            {project.client.website}
                                        </a>
                                    )}
                                </div>
                            )}
                            {project.timeline && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-primary">Timeline</h3>
                                    <p className="text-xl font-bold mb-1">{project.timeline.year}</p>
                                    {project.timeline.duration && <p className="text-muted-foreground">{project.timeline.duration}</p>}
                                </div>
                            )}
                            {project.team && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-4 text-primary">Team</h3>
                                    <ul className="space-y-2">
                                        {project.team.map((member, i) => (
                                            <li key={i} className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{member.role}</span>
                                                <span className="font-medium">{member.count}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </Section>
            )}

            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
                <Section className="bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                            {project.challenge && (
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">The Challenge</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {project.challenge}
                                    </p>
                                </div>
                            )}
                            {project.solution && (
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">The Solution</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Section>
            )}

            {/* Results / Impact */}
            {project.results && (
                <Section>
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Key Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {project.results.map((result, i) => (
                                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                    <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{result.value}</p>
                                    <p className="font-semibold mb-1">{result.metric}</p>
                                    <p className="text-sm text-muted-foreground">{result.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* Business Impact */}
            {project.businessImpact && (
                <Section className="bg-primary/5 border-y border-primary/10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Business Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-background p-6 sm:p-8 rounded-xl border border-border shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-primary">ROI & Growth</h3>
                                <p className="text-muted-foreground">{project.businessImpact.roi}</p>
                            </div>
                            <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-primary">Efficiency</h3>
                                <p className="text-muted-foreground">{project.businessImpact.efficiency}</p>
                            </div>
                            <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
                                <h3 className="text-lg font-semibold mb-4 text-primary">Market Expansion</h3>
                                <p className="text-muted-foreground">{project.businessImpact.growth}</p>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Maintenance & Scalability */}
            {(project.maintenance || project.scalability) && (
                <Section>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {project.maintenance && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <CheckCircle2 className="text-primary" /> Maintenance Strategy
                                    </h3>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-white/5">
                                        <p className="font-semibold mb-2">Support Plan</p>
                                        <p className="text-muted-foreground mb-4">{project.maintenance.plan}</p>
                                        <p className="font-semibold mb-2">SLA Guarantee</p>
                                        <p className="text-primary font-bold">{project.maintenance.guarantee}</p>
                                    </div>
                                </div>
                            )}
                            {project.scalability && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <ExternalLink className="text-primary" /> Scalability
                                    </h3>
                                    <div className="bg-secondary/20 p-6 rounded-xl border border-white/5">
                                        <p className="font-semibold mb-2">Current Capacity</p>
                                        <p className="text-muted-foreground mb-4">{project.scalability.current}</p>
                                        <p className="font-semibold mb-2">Future Proofing</p>
                                        <p className="text-primary font-bold">{project.scalability.future}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Section>
            )}

            {/* Gallery */}
            {project.gallery && (
                <Section className="bg-black/20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.gallery.map((img, i) => (
                                <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                                    <Image
                                        src={img}
                                        alt={`Gallery image ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* Technology Deep Dive */}
            {project.technologyDetails && (
                <Section className="bg-accent/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {project.technologyDetails.stack.map((tech, i) => (
                                <div key={i} className="p-6 bg-background rounded-xl border border-border">
                                    <h4 className="text-lg font-bold mb-2 text-primary">{tech.name}</h4>
                                    <p className="text-muted-foreground">{tech.rationale}</p>
                                </div>
                            ))}
                        </div>
                        {project.technologyDetails.architecture && (
                            <div className="p-6 bg-primary/10 rounded-xl border border-primary/20 text-center">
                                <h4 className="font-semibold mb-2">Architecture</h4>
                                <p className="text-muted-foreground">{project.technologyDetails.architecture}</p>
                            </div>
                        )}
                    </div>
                </Section>
            )}

            {/* Development Process */}
            {project.development && (
                <Section>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center p-6 bg-secondary/20 rounded-xl">
                                <p className="text-sm text-muted-foreground mb-2">Methodology</p>
                                <p className="text-xl font-bold">{project.development.methodology}</p>
                            </div>
                            {project.development.totalSprints && (
                                <div className="text-center p-6 bg-secondary/20 rounded-xl">
                                    <p className="text-sm text-muted-foreground mb-2">Total Sprints</p>
                                    <p className="text-xl font-bold">{project.development.totalSprints}</p>
                                </div>
                            )}
                            <div className="text-center p-6 bg-secondary/20 rounded-xl">
                                <p className="text-sm text-muted-foreground mb-2">Team</p>
                                <p className="text-xl font-bold">{project.development.teamStructure}</p>
                            </div>
                            <div className="text-center p-6 bg-secondary/20 rounded-xl">
                                <p className="text-sm text-muted-foreground mb-2">CI/CD</p>
                                <p className="text-xl font-bold">{project.development.cicd}</p>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Security & Performance */}
            {(project.security || project.performance) && (
                <Section className="bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {project.security && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <CheckCircle2 className="text-primary" /> Security Measures
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.security.measures.map((measure, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">{measure}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {project.security.certifications && (
                                        <div className="mt-6 flex gap-3 flex-wrap">
                                            {project.security.certifications.map((cert, i) => (
                                                <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                                                    {cert}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                            {project.performance && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Performance Benchmarks</h3>
                                    <div className="space-y-4">
                                        {project.performance.metrics.map((metric, i) => (
                                            <div key={i} className="p-4 bg-background rounded-xl border border-border">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold">{metric.name}</span>
                                                    <span className="text-2xl font-bold text-primary">{metric.value}</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{metric.benchmark}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Section>
            )}

            {/* Future Roadmap */}
            {project.futureRoadmap && (
                <Section>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Future Roadmap</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {project.futureRoadmap.map((item, i) => (
                                <div key={i} className="p-6 bg-background border-l-4 border-primary rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                                            {i + 1}
                                        </div>
                                        <p className="text-muted-foreground">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* Testimonials */}
            {project.testimonials && (
                <Section>
                    <div className="container mx-auto px-4">
                        {project.testimonials.map((testimonial, i) => (
                            <div key={i} className="text-center">
                                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                                    "{testimonial.quote}"
                                </blockquote>
                                <cite className="not-italic">
                                    <div className="font-bold text-lg">{testimonial.author}</div>
                                    <div className="text-primary">{testimonial.role}</div>
                                </cite>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            <Footer />
        </main>
    );
}
