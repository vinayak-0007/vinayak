"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    highlights: string[];
    link?: string;
    github?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const gradients = [
    "from-cyan-500/20 to-blue-600/20",
    "from-violet-500/20 to-purple-600/20",
    "from-pink-500/20 to-rose-600/20",
    "from-amber-500/20 to-orange-600/20",
];

const accentColors = [
    "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    "text-violet-400 border-violet-500/20 bg-violet-500/5",
    "text-pink-400 border-pink-500/20 bg-pink-500/5",
    "text-amber-400 border-amber-500/20 bg-amber-500/5",
];

export function ProjectCard({ project, index }: ProjectCardProps) {
    const gradient = gradients[index % gradients.length];
    const accent = accentColors[index % accentColors.length];

    return (
        <div className="glass-card group relative overflow-hidden h-full">
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            {/* Top gradient bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${gradient.replace("/20", "")} opacity-60`} />

            <div className="relative z-10 p-6 space-y-4">
                {/* Title row */}
                <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                        {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                        <span key={h} className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${accent}`}>
                            <Sparkles className="w-3 h-3" />
                            {h}
                        </span>
                    ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {project.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-foreground transition-all duration-300 text-xs"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
