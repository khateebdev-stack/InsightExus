import { cn } from "@/lib/utils";

export function Section({ className, id, children, ...props }) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
}
