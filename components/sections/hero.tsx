"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const roles = ["Full Stack Engineer", "React Specialist", "TypeScript Enthusiast", "Problem Solver"];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const controls = animate(count, target, {
            duration: 2,
            ease: "easeOut",
        });
        const unsubscribe = rounded.on("change", (v) => setDisplay(v));
        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [target, count, rounded]);

    return <span>{display}{suffix}</span>;
}

function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Array<{
            x: number; y: number; vx: number; vy: number; size: number; opacity: number;
        }> = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Create particles
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export function HeroSection() {
    const typedText = useTypewriter(roles);

    const stats = [
        { value: 3, suffix: "+", label: "Years Experience" },
        { value: 3, suffix: "+", label: "Production Apps" },
        { value: 500, suffix: "+", label: "Users Served" },
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Particle Background */}
            <ParticleField />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-[120px] animate-glow" />
            <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-violet-600/10 rounded-full filter blur-[100px] animate-glow" style={{ animationDelay: "2s" }} />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center space-y-10 max-w-5xl">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        <span className="text-foreground">Hi, I&apos;m </span>
                        <span className="text-shimmer">Vinayak</span>
                    </h1>
                </motion.div>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground h-12">
                        <span className="text-gradient">{typedText}</span>
                        <span className="cursor-blink text-cyan-400 ml-0.5">|</span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mx-auto max-w-[650px] text-muted-foreground text-lg md:text-xl leading-relaxed"
                >
                    I build high-performance, scalable web applications with{" "}
                    <span className="text-cyan-400 font-medium">React</span>,{" "}
                    <span className="text-violet-400 font-medium">Next.js</span>, and{" "}
                    <span className="text-cyan-400 font-medium">Node.js</span>.
                    Turning complex problems into elegant, user-centric solutions.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 rounded-full px-8 text-base" asChild>
                        <Link href="#projects">
                            View My Work
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5 hover:border-white/20 text-foreground transition-all duration-300 rounded-full px-8 text-base backdrop-blur-sm" asChild>
                        <Link href="/vinayak_resume_May_2026.pdf" target="_blank" download>
                            <Download className="w-4 h-4 mr-2" />
                            Download Resume
                        </Link>
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    className="flex flex-wrap justify-center gap-8 sm:gap-16 pt-8"
                >
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="text-center space-y-1">
                            <div className="text-3xl sm:text-4xl font-bold text-gradient">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
            </motion.div>
        </section>
    );
}
