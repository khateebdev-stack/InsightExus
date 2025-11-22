"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                    Ready to start your project? We're here to help you build scalable, high-performance solutions.
                </p>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                        <Card className="p-6 flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">Email Us</h3>
                                <p className="text-muted-foreground">contact@insightexus.com</p>
                                <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours.</p>
                            </div>
                        </Card>

                        <Card className="p-6 flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">Call Us</h3>
                                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                <p className="text-sm text-muted-foreground mt-2">Mon-Fri from 9am to 6pm.</p>
                            </div>
                        </Card>

                        <Card className="p-6 flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">Visit Us</h3>
                                <p className="text-muted-foreground">
                                    123 Tech Park Avenue<br />
                                    Silicon Valley, CA 94025
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </Card>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
