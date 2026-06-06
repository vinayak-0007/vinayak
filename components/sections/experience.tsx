"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    tech: string[];
    bullets: string[];
    color: string;
}

const experiences: ExperienceItem[] = [
    {
        role: "Full Stack Engineer",
        company: "Quokka Labs LLP",
        period: "Sep 2025 – Present",
        tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Redis", "REST APIs"],
        bullets: [
            "Full Stack Engineer for GP World, architecting logic for order and real-time operations across cross-functional teams.",
            "Refined auth workflows using JWT and Redis, reducing latency and hardening system security via code review practices.",
            "Spearheading WriteEasy frontend using Next.js SSR with performance optimization to boost SEO.",
        ],
        color: "from-cyan-500 to-cyan-400",
    },
    {
        role: "Associate Software Engineer",
        company: "Quokka Labs LLP",
        period: "Sep 2023 – Aug 2025",
        tech: ["React.js", "Next.js", "JavaScript", "Redux Toolkit"],
        bullets: [
            "Engineered 3+ production apps, ensuring high availability, performance optimization, and cross-platform compatibility.",
            "Developed admin dashboards with RBAC, integrated REST APIs for real-time reporting, and led code review sessions.",
            "Built reusable component libraries and established CI/CD workflows, accelerating the development lifecycle by 20%.",
        ],
        color: "from-violet-500 to-violet-400",
    },
    {
        role: "Software Engineering Intern",
        company: "Quokka Labs LLP",
        period: "Feb 2023 – Aug 2023",
        tech: ["React.js", "JavaScript", "Tailwind CSS"],
        bullets: [
            "Constructed responsive React interfaces and improved UI flow using modern JavaScript.",
            "Resolved 15+ critical UI bottlenecks, ensuring stable releases for client demonstrations.",
            "Integrated third-party APIs, gaining experience in async data and state management.",
        ],
        color: "from-pink-500 to-pink-400",
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="section-divider w-full absolute top-0" />

            <div className="container px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-sm">
                        Career Journey
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground text-lg">
                        My professional journey building scalable web applications and leading frontend initiatives.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-pink-500/50"
                        />
                    </div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}>
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-20`} />
                                </div>
                            </div>

                            {/* Content card */}
                            <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                            }`}>
                                <div className="glass-card p-6 space-y-4 group">
                                    {/* Period badge */}
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 border border-white/10`}>
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Role & Company */}
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                                    </div>

                                    {/* Bullet points */}
                                    <ul className="space-y-2">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {exp.tech.map((t) => (
                                            <Badge
                                                key={t}
                                                variant="secondary"
                                                className="bg-white/5 text-cyan-300/80 border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 text-xs"
                                            >
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
