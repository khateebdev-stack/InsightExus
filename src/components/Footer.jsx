import Link from "next/link";
import * as Icons from "lucide-react";
import Image from "next/image";
import { content } from "@/lib/content";

export function Footer() {
    return (
        <footer className=" border-border bg-muted/50 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-16 h-16 rounded-lg from-primary to-accent flex items-center justify-center overflow-hidden">
                                <Image src="/logo.svg" alt="Insightexus Logo" fill className="object-contain" />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter">
                                <span className="text-foreground">Insight</span>
                                <span className="text-primary">Exus</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-8">
                            {content.footer.description}
                        </p>
                        <div className="flex gap-4">
                            {content.footer.socials.map((social, i) => {
                                const Icon = Icons[social.icon] || Icons.HelpCircle;
                                return <SocialLink key={i} href={social.href} icon={<Icon className="w-5 h-5" />} />;
                            })}
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

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
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
