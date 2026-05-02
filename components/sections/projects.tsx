"use client";

import { ProjectCard, Project } from "@/components/sections/project-card";

const projects: Project[] = [
    {
        title: "Modern E-Commerce Platform",
        description: "A full-featured online store with a custom cart, checkout process, and admin dashboard.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        github: "https://github.com",
        link: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Task Management Dashboard",
        description: "A productive tool for managing tasks and projects with drag-and-drop capabilities.",
        tags: ["React", "Redux", "Node.js", "MongoDB"],
        github: "https://github.com",
        link: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Weather Forecast App",
        description: "Real-time weather application using external APIs to provide accurate forecasts.",
        tags: ["Vue.js", "OpenWeatherMap API", "SCSS"],
        github: "https://github.com",
        link: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1592210454359-9043f53db692?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio showcasing my projects and skills (You are here!).",
        tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com",
        link: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                            My Work
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Selected Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here are some of the projects I&apos;ve worked on recently. They demonstrate my skills in full-stack development, UI/UX design, and problem-solving.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
