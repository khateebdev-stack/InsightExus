"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { content } from "@/lib/content";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{content.contact.title}</h1>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                    {content.contact.description}
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
                                <h3 className="font-semibold mb-1">{content.contact.info.email.title}</h3>
                                <p className="text-muted-foreground">{content.contact.info.email.value}</p>
                                <p className="text-sm text-muted-foreground mt-2">{content.contact.info.email.desc}</p>
                            </div>
                        </Card>

                        <Card className="p-6 flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">{content.contact.info.phone.title}</h3>
                                <p className="text-muted-foreground">{content.contact.info.phone.value}</p>
                                <p className="text-sm text-muted-foreground mt-2">{content.contact.info.phone.desc}</p>
                            </div>
                        </Card>

                        <Card className="p-6 flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold mb-1">{content.contact.info.address.title}</h3>
                                <p className="text-muted-foreground">
                                    {content.contact.info.address.value}
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        <h2 className="text-2xl font-bold mb-6">{content.contact.form.title}</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">{content.contact.form.fields.name}</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">{content.contact.form.fields.email}</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium">{content.contact.form.fields.service}</label>
                                    <select
                                        id="service"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground appearance-none"
                                    >
                                        <option>Web Development</option>
                                        <option>Mobile App</option>
                                        <option>AI Solution</option>
                                        <option>Consulting</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="budget" className="text-sm font-medium">{content.contact.form.fields.budget}</label>
                                    <select
                                        id="budget"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground appearance-none"
                                    >
                                        <option>$5k - $10k</option>
                                        <option>$10k - $25k</option>
                                        <option>$25k - $50k</option>
                                        <option>$50k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">{content.contact.form.fields.subject}</label>
                                <input
                                    id="subject"
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">{content.contact.form.fields.message}</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button type="submit" className="w-full">{content.contact.form.button}</Button>
                        </form>
                    </Card>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
