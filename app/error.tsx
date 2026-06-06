"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="glass-card max-w-md w-full p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Something went wrong</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        An unexpected error occurred. Please try again.
                    </p>
                </div>
                <button
                    onClick={reset}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
