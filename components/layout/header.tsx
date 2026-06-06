"use client";

import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
            }`}>
            <div className="container flex h-16 items-center justify-between">
                {/* Logo / Monogram */}
                <Link href="/" className="relative group">
                    <span className="text-2xl font-black tracking-tighter text-gradient">
                        V
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                        </Link>
                    ))}
                    <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full" asChild>
                            <a href="https://github.com/vinayak-0007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full" asChild>
                            <a href="https://linkedin.com/in/vinayak-kashyap" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 rounded-full px-5" asChild>
                            <a href="/vinayak_resume_May_2026.pdf" target="_blank" download>
                                <Download className="w-3.5 h-3.5 mr-2" />
                                Resume
                            </a>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10 w-72">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="mt-8 mb-6">
                                <span className="text-3xl font-black tracking-tighter text-gradient">VK</span>
                            </div>
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-lg font-medium px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="border-t border-white/10 mt-4 pt-4 space-y-3">
                                    <div className="flex gap-3 px-4">
                                        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5" asChild>
                                            <a href="https://github.com/vinayak-0007" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg></a>
                                        </Button>
                                        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5" asChild>
                                            <a href="https://linkedin.com/in/vinayak-kashyap" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
                                        </Button>
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white border-0 rounded-full" asChild>
                                        <a href="/vinayak_resume_May_2026.pdf" target="_blank" download>
                                            <Download className="w-3.5 h-3.5 mr-2" />
                                            Download Resume
                                        </a>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
