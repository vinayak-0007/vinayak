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
        <Card className="flex flex-col h-full overflow-hidden transition-all hover:ring-2 hover:ring-primary/20">
            <div className="aspect-video w-full bg-muted/50 relative overflow-hidden group">
                {/* Placeholder for project image - would use Next.js Image in real app */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-muted-foreground">
                    {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                        <span className="text-xl font-semibold opacity-20">{project.title}</span>
                    )}
                </div>
            </div>
            <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-2 p-4 pt-0">
                {project.github && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                        </Link>
                    </Button>
                )}
                {project.link && (
                    <Button size="sm" className="w-full" asChild>
                        <Link href={project.link} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
