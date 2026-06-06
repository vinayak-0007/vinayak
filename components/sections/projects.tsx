"use client";

import { ProjectCard, Project } from "@/components/sections/project-card";
import { motion } from "framer-motion";

const projects: Project[] = [
    {
        title: "ZtayGo",
        subtitle: "Rental Property Platform",
        description: "A full-stack rental platform with tenant/property management, complaints handling, payments, and CMS. Integrated Stripe/Razorpay payments, Twilio OTP auth, Google Maps, and Supabase auth/database.",
        tags: ["Next.js", "React", "Node.js", "Stripe", "Razorpay", "Supabase", "Google Maps"],
        highlights: ["Multi-role Operations", "Payment Integration", "RBAC Admin Dashboard"],
    },
    {
        title: "GP World",
        subtitle: "Restaurant Management Platform",
        description: "Managed end-to-end development of a live restaurant system governing orders, users, and admin operations. Strengthened auth protocols and upgraded REST APIs, resolving production bottlenecks.",
        tags: ["React.js", "Node.js", "REST APIs", "Redis", "JWT"],
        highlights: ["Real-time Operations", "Auth Hardening", "Production Scale"],
    },
    {
        title: "WriteEasy",
        subtitle: "AI Content Generator",
        description: "Launched an AI-powered content platform using Next.js, React.js, RTK Query, and Supabase. Accelerated page load by 30% via optimized rendering; established secure auth for 100+ active users.",
        tags: ["Next.js", "React.js", "RTK Query", "Supabase", "SSR"],
        highlights: ["30% Faster Load", "100+ Active Users", "SEO Optimized"],
    },
    {
        title: "RTD",
        subtitle: "Race Management System",
        description: "Provisioned RBAC, user impersonation for 500+ users, and tuned APIs curtailing response time by 35%.",
        tags: ["RBAC", "REST APIs", "Node.js", "Performance"],
        highlights: ["500+ Users", "35% Faster APIs", "User Impersonation"],
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative">
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
                        My Work
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground text-lg">
                        Production-grade applications I&apos;ve built, from rental platforms to AI-powered content generators.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ProjectCard project={project} index={i} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
