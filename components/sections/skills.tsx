"use client";

import { Badge } from "@/components/ui/badge";

const skillCategories = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Framer Motion"]
    },
    {
        name: "Backend",
        skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Supabase"]
    },
    {
        name: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD", "VS Code"]
    }
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                            Skills
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tech Stack</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            The technologies and tools I work with to bring ideas to life.
                        </p>
                    </div>
                </div>
                <div className="space-y-8 max-w-4xl mx-auto glass p-8 rounded-2xl">
                    {skillCategories.map((category) => (
                        <div key={category.name} className="space-y-4">
                            <h3 className="text-xl font-semibold text-center md:text-left text-primary">{category.name}</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-base px-4 py-2 bg-white/50 hover:bg-white border-purple-200/50 hover:shadow-md transition-all duration-300">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
