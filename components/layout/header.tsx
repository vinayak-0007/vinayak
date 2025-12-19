import Link from "next/link";
import { Menu, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Header() {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-bold text-xl tracking-tight">
                        Portfolio
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition-colors hover:text-primary text-muted-foreground"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 ml-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://github.com" target="_blank">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button size="sm">Download CV</Button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <nav className="flex flex-col gap-4 mt-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-lg font-medium transition-colors hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-2 mt-4">
                                    <Button className="w-full">Download CV</Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
