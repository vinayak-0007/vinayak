import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Vinayak Kashyap | Full Stack Engineer",
    description: "Full Stack Engineer specializing in React.js, Next.js, TypeScript, and Node.js. Building scalable, high-performance web applications at Quokka Labs.",
    keywords: ["Full Stack Engineer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio", "Vinayak Kashyap"],
    authors: [{ name: "Vinayak Kashyap" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`dark ${inter.variable}`}>
            <body className={cn(
                "min-h-screen bg-background antialiased flex flex-col noise-bg",
                inter.className,
            )}>
                <Header />
                <main className="flex-1 relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
