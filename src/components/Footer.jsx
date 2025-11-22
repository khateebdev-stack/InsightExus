import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { content } from "@/lib/content";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/20 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-bold text-lg">I</span>
                            </div>
                            Insightexus
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-8">
                            {content.footer.description}
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="mailto:contact@insightexus.com" icon={<Mail className="w-5 h-5" />} />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-6">{content.footer.services.title}</h3>
                        <ul className="space-y-4">
                            {content.footer.services.items.map((item, i) => (
                                <FooterLink key={i} href="/services">{item}</FooterLink>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-6">{content.footer.company.title}</h3>
                        <ul className="space-y-4">
                            {content.footer.company.items.map((item, i) => (
                                <FooterLink key={i} href={item.href}>{item.label}</FooterLink>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {content.footer.copyright}</p>
                    <p>{content.footer.credit}</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }) {
    return (
        <li>
            <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
                {children}
            </Link>
        </li>
    );
}
