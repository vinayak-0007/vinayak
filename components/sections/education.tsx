"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

export function EducationSection() {
    return (
        <section id="education" className="py-24 relative">
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
                        Background
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                        Education & <span className="text-gradient">Awards</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 space-y-4 relative overflow-hidden group"
                    >
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-full filter blur-2xl group-hover:from-cyan-500/20 group-hover:to-violet-500/20 transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                                </div>
                                <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                                    2019 – 2023
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-1">
                                B.Tech – Computer Science and Engineering
                            </h3>
                            <p className="text-muted-foreground font-medium mb-4">
                                JSS Academy of Technical Education, Noida
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Specialized in software engineering, data structures, and web technologies. 
                                Built a strong foundation in computer science fundamentals that powers my engineering career today.
                            </p>
                        </div>
                    </motion.div>

                    {/* Awards Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="glass-card p-8 space-y-6 relative overflow-hidden group"
                    >
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full filter blur-2xl group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <Trophy className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Awards & Recognition</h3>
                            </div>

                            <div className="space-y-5">
                                <div className="border-l-2 border-amber-500/40 pl-4 space-y-1">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <h4 className="font-semibold text-foreground text-sm">Reward and Recognition Award</h4>
                                        <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">May 2024</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Quokka Labs</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Conferred for exceptional frontend delivery and surpassing critical project milestones.
                                    </p>
                                </div>

                                <div className="border-l-2 border-amber-500/40 pl-4 space-y-1">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <h4 className="font-semibold text-foreground text-sm">Reward and Recognition Award</h4>
                                        <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">Aug 2024</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Quokka Labs</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Commended for successfully delivering a solo project with high-level ownership.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
