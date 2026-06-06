"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Award, Code2 } from "lucide-react";

export function SummarySection() {
    const highlights = [
        { icon: Calendar, label: "3+ Years", desc: "Professional Experience" },
        { icon: Code2, label: "3+ Apps", desc: "In Production" },
        { icon: Award, label: "2 Awards", desc: "Recognition at Quokka Labs" },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="section-divider w-full absolute top-0" />

            <div className="container px-4 md:px-6">
                <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-sm">
                            About Me
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground leading-tight">
                            Crafting digital experiences that{" "}
                            <span className="text-gradient">make an impact</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I&apos;m a <span className="text-foreground font-medium">Full Stack Engineer</span> at Quokka Labs, 
                            where I architect and build high-performance web applications using modern JavaScript ecosystems. 
                            With a strong foundation in React.js, Next.js, TypeScript, and Node.js, I specialize in turning 
                            complex business requirements into elegant, scalable solutions.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            From building full-stack rental platforms with payment integrations to 
                            AI-powered content generators, I bring a unique blend of frontend finesse 
                            and backend robustness to every project I undertake.
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span>Noida, Uttar Pradesh, India</span>
                        </div>
                    </motion.div>

                    {/* Right — Stats/Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                className="glass-card p-6 flex items-center gap-5 group cursor-default"
                            >
                                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/5 group-hover:border-cyan-500/20 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-foreground">{item.label}</div>
                                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Decorative gradient orb */}
                        <div className="relative h-32 flex items-center justify-center">
                            <div className="absolute w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-full filter blur-3xl animate-float" />
                            <div className="relative glass-card px-6 py-3 rounded-full text-sm text-muted-foreground">
                                🎓 B.Tech CSE — JSS Academy, Noida (2019-2023)
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
