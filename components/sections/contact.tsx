"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/actions/contact";

const initialState: ContactFormState = {
    success: false,
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 rounded-xl py-6 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                </>
            )}
        </Button>
    );
}

export function ContactSection() {
    const [state, formAction] = useFormState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    // Reset form on successful submission
    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state.success]);

    return (
        <section id="contact" className="py-24 relative">
            <div className="section-divider w-full absolute top-0" />

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/5 to-transparent filter blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-sm">
                                Get In Touch
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                                Let&apos;s build something{" "}
                                <span className="text-gradient">amazing</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors duration-300">
                                    <Mail className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                                    <a href="mailto:vinayakkashyap149@gmail.com" className="text-foreground hover:text-cyan-400 transition-colors duration-300 font-medium">
                                        vinayakkashyap149@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors duration-300">
                                    <Phone className="w-5 h-5 text-violet-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                                    <a href="tel:+918445481548" className="text-foreground hover:text-violet-400 transition-colors duration-300 font-medium">
                                        +91 8445481548
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors duration-300">
                                    <MapPin className="w-5 h-5 text-pink-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Location</div>
                                    <span className="text-foreground font-medium">Noida, Uttar Pradesh, India</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="flex gap-4 pt-4"
                        >
                            <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:border-cyan-500/30 text-muted-foreground hover:text-cyan-400 transition-all duration-300" asChild>
                                <a href="https://github.com/vinayak-0007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:border-violet-500/30 text-muted-foreground hover:text-violet-400 transition-all duration-300" asChild>
                                <a href="https://linkedin.com/in/vinayak-kashyap" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-xl font-bold text-foreground mb-2">Send a Message</h3>
                        <p className="text-sm text-muted-foreground mb-6">Fill out the form and I&apos;ll get back to you as soon as possible.</p>

                        {/* Status Banner */}
                        <AnimatePresence mode="wait">
                            {state.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: "auto" }}
                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex items-start gap-3 p-4 rounded-xl mb-6 border ${
                                        state.success
                                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                                            : "bg-red-500/10 border-red-500/20 text-red-400"
                                    }`}
                                >
                                    {state.success ? (
                                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm font-medium">{state.message}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form ref={formRef} action={formAction} className="space-y-4">
                            <fieldset className="space-y-4 disabled:opacity-60">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <Input
                                            name="firstName"
                                            placeholder="First Name"
                                            required
                                            className="bg-white/5 border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-foreground placeholder:text-muted-foreground/50 rounded-xl"
                                        />
                                        {state.errors?.firstName && (
                                            <p className="text-red-400 text-xs mt-1.5">{state.errors.firstName[0]}</p>
                                        )}
                                    </div>
                                    <div>
                                        <Input
                                            name="lastName"
                                            placeholder="Last Name"
                                            required
                                            className="bg-white/5 border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-foreground placeholder:text-muted-foreground/50 rounded-xl"
                                        />
                                        {state.errors?.lastName && (
                                            <p className="text-red-400 text-xs mt-1.5">{state.errors.lastName[0]}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="bg-white/5 border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-foreground placeholder:text-muted-foreground/50 rounded-xl"
                                    />
                                    {state.errors?.email && (
                                        <p className="text-red-400 text-xs mt-1.5">{state.errors.email[0]}</p>
                                    )}
                                </div>
                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        required
                                        className="min-h-[140px] bg-white/5 border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/20 text-foreground placeholder:text-muted-foreground/50 rounded-xl resize-none"
                                    />
                                    {state.errors?.message && (
                                        <p className="text-red-400 text-xs mt-1.5">{state.errors.message[0]}</p>
                                    )}
                                </div>
                                <SubmitButton />
                            </fieldset>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
