"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Mail, MapPin, Phone } from "lucide-react";
import { content } from "@/lib/content";
import { ImprovedContactForm } from "@/components/ImprovedContactForm";

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
                <div className="container mx-auto px-4">
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

                        {/* Advanced Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">{content.contact.form.title}</h2>
                            <ImprovedContactForm />
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
