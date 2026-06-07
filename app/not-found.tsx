import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="glass-card max-w-md w-full p-8 text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-7xl font-black text-gradient">404</h1>
                    <h2 className="text-2xl font-bold text-foreground">Page Not Found</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
