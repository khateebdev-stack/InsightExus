import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-card p-6 backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
