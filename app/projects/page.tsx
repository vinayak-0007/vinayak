import { ProjectCard, Project } from "@/components/sections/project-card";

export const metadata = {
    title: "Projects | Portfolio",
    description: "A showcase of my recent work and projects",
};

const projects: Project[] = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
        github: "https://github.com",
        link: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "AI Content Generator",
        description: "SaaS application that uses OpenAI's GPT-4 to generate blog posts and social media content automatically.",
        tags: ["React", "OpenAI API", "Stripe", "Supabase"],
        github: "https://github.com",
        link: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Task Management App",
        description: "Collaborative task management tool with kanban boards, drag-and-drop interface, and team features.",
        tags: ["Vue.js", "Firebase", "Pinia", "drag-and-drop"],
        github: "https://github.com",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Finance Tracker",
        description: "Personal finance application to track income, expenses, and investments with visualized charts.",
        tags: ["Next.js", "Recharts", "PostgreSQL", "Drizzle"],
        github: "https://github.com",
        link: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    },
];

export default function ProjectsPage() {
    return (
        <div className="container py-12 md:py-24">
            <div className="flex flex-col gap-4 mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
                <p className="text-muted-foreground text-lg max-w-[800px]">
                    Here are some of the projects I&apos;ve worked on recently. They demonstrate my skills in full-stack development, UI/UX design, and problem-solving.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
}
