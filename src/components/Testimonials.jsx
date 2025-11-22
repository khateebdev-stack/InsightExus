"use client";

import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { content } from "@/lib/content";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <Section className="bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.testimonials.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.testimonials.items.map((item, index) => (
                        <Card key={index} className="p-8 relative border-primary/10 hover:border-primary/30">
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />
                            <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">{item.author}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
