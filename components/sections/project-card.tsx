import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="glass-card border-0 flex flex-col h-full overflow-hidden group/card relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="aspect-video w-full bg-muted/50 relative overflow-hidden group">
                {/* Placeholder for project image - would use Next.js Image in real app */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-muted-foreground">
                    {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                        <span className="text-xl font-semibold opacity-20">{project.title}</span>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                        {project.github && (
                            <Button variant="secondary" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300" asChild>
                                <Link href={project.github} target="_blank">
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                </Link>
                            </Button>
                        )}
                        {project.link && (
                            <Button size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75" asChild>
                                <Link href={project.link} target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <CardHeader>
                <CardTitle className="line-clamp-1 group-hover/card:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-100/50">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            {/* Footer removed as actions are now on overlay */}
        </Card>
    );
}
