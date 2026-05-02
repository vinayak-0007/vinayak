"use client";

export function SummarySection() {
    return (
        <section id="about" className="py-20 bg-white/30 backdrop-blur-sm">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50/50 px-3 py-1 text-sm font-medium text-purple-800 backdrop-blur-sm">
                            About Me
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Passionate about creating purposeful web applications.
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I am a Frontend Developer with a focus on building high-quality, user-centric interfaces. With a strong background in modern web technologies, I love turning complex problems into simple, beautiful solutions.
                        </p>
                        <p className="text-muted-foreground md:text-lg">
                            My journey is driven by a desire to learn and create. Whether it&apos;s a small widget or a large-scale application, I approach every project with enthusiasm and attention to detail.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-100 shadow-xl">
                            {/* Placeholder for Profile Photo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center text-muted-foreground">
                                <span className="text-6xl filter grayscale hover:grayscale-0 transition-all duration-500">📷</span>
                            </div>
                            {/* <img src="/profile.jpg" alt="Profile" className="object-cover w-full h-full" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
