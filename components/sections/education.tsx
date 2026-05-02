"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function EducationSection() {
    return (
        <section id="education" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50/50 px-3 py-1 text-sm font-medium text-purple-800 backdrop-blur-sm">
                            Education
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Journey</h2>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-8 px-4">
                    {/* Example Education Item */}
                    <div className="glass-card p-6 border-l-4 border-l-purple-500 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-6xl">🎓</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-primary">Bachelor of Science in Computer Science</h3>
                                    <p className="text-base text-muted-foreground font-medium">University of Technology</p>
                                </div>
                                <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">2018 - 2022</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Specialized in Software Engineering and Database Systems. Graduated with First Class Honors.
                                Active member of the Computer Science Society and organized several hackathons.
                            </p>
                        </div>
                    </div>

                    {/* Another Example */}
                    <div className="glass-card p-6 border-l-4 border-l-pink-500 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-6xl">💻</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-pink-600">Full Stack Web Development</h3>
                                    <p className="text-base text-muted-foreground font-medium">Online Coding Bootcamp</p>
                                </div>
                                <span className="text-xs font-semibold text-pink-700 bg-pink-100 px-3 py-1 rounded-full border border-pink-200">2022</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Intensive 12-week program focusing on MERN stack, collaborative development, and architectural patterns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
