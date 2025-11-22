"use client";

import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";

const team = [
    {
        name: "Alex Chen",
        role: "Chief Architect",
        bio: "Ex-Google Principal Engineer. 15+ years scaling distributed systems.",
        image: "/team-1.jpg",
    },
    {
        name: "Sarah Miller",
        role: "Head of AI",
        bio: "PhD in Computer Vision. Led AI initiatives at major fintech firms.",
        image: "/team-2.jpg",
    },
    {
        name: "James Wilson",
        role: "VP of Engineering",
        bio: "Specialist in high-frequency trading platforms and real-time data.",
        image: "/team-3.jpg",
    },
];

export function Team() {
    return (
        <Section className="bg-background relative mb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.team.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {content.team.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <Card key={index} className="overflow-hidden group border-primary/10 hover:border-primary/30">
                            <div className="relative h-80 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-muted animate-pulse" /> {/* Placeholder */}
                                {/* <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                                    <p className="text-primary font-medium mb-2">{member.role}</p>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                                        <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                                        <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-2">
                                <p className="text-muted-foreground">{member.bio}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="whitespace-nowrap" asChild>
                        <Link href="/team">
                            {content.team.cta} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
