import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { ProjectDetail } from "@/components/ProjectDetail";

export async function generateStaticParams() {
    return content.projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = content.projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Insightexus`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = content.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
