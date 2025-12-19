import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "My professional portfolio website",
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col",
      )}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
