"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Frontend",
        icon: "⚡",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
        color: "from-cyan-500 to-cyan-400",
        borderColor: "hover:border-cyan-500/30",
    },
    {
        name: "State & Data",
        icon: "🔄",
        skills: ["Redux", "RTK Query", "REST APIs", "Axios", "JSON"],
        color: "from-violet-500 to-violet-400",
        borderColor: "hover:border-violet-500/30",
    },
    {
        name: "UI & Styling",
        icon: "🎨",
        skills: ["Tailwind CSS", "Material UI", "Responsive Design", "Figma"],
        color: "from-pink-500 to-pink-400",
        borderColor: "hover:border-pink-500/30",
    },
    {
        name: "Backend & Auth",
        icon: "🔒",
        skills: ["Node.js", "Supabase", "Redis", "RBAC", "Authentication", "Authorization"],
        color: "from-emerald-500 to-emerald-400",
        borderColor: "hover:border-emerald-500/30",
    },
    {
        name: "Tools & Platforms",
        icon: "🛠",
        skills: ["Git", "GitHub", "GCP", "Docker", "Webpack", "VS Code", "CI/CD"],
        color: "from-amber-500 to-amber-400",
        borderColor: "hover:border-amber-500/30",
    },
    {
        name: "Testing & Practices",
        icon: "✅",
        skills: ["Jest", "React Testing Library", "Integration Testing", "Code Review", "Agile", "Scrum"],
        color: "from-blue-500 to-blue-400",
        borderColor: "hover:border-blue-500/30",
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="section-divider w-full absolute top-0" />

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-sm">
                        Tech Stack
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground text-lg">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`glass-card p-6 space-y-4 ${category.borderColor}`}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                    {category.name}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, j) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + j * 0.05 }}
                                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-muted-foreground border border-white/[0.06] hover:bg-white/10 hover:text-foreground hover:border-white/15 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
