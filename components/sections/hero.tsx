"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-indigo-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center space-y-8 p-12 rounded-3xl mx-4 max-w-5xl">
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/50 px-3 py-1 text-sm font-medium text-purple-800 backdrop-blur-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Welcome to my portfolio</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 animate-gradient-x pb-2">
                        Hi, I'm <span className="text-primary/90">Vinayak</span>
                    </h1>
                    <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
                        Frontend Developer
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I build accessible, pixel-perfect, performant, and engaging digital experiences for the web.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 min-w-[200px] justify-center">
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                        <Link href="#projects">
                            View Projects
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-purple-200 hover:bg-purple-50 hover:text-purple-700 transition-colors" asChild>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
