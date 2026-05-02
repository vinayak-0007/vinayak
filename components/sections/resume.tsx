import { Button } from "@/components/ui/button";
import { FileText, Download, Eye } from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function ResumeSection() {
    return (
        <section id="resume" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="glass p-12 rounded-3xl mx-auto max-w-4xl text-center space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50/50 px-3 py-1 text-sm font-medium text-purple-800 backdrop-blur-sm">
                            Resume
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-purple-700 to-pink-700">Professional Background</h2>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Want to know more about my experience? Check out my resume for a detailed overview of my career and education.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-md">
                                    <Eye className="w-4 h-4" />
                                    View Resume
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-[80vh] w-full glass border-white/20">
                                <DialogHeader>
                                    <DialogTitle>Resume</DialogTitle>
                                    <DialogDescription>
                                        View my professional experience below.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex-1 w-full h-full min-h-[500px] bg-white/50 rounded-md border border-white/20 p-4 backdrop-blur-sm">
                                    <iframe
                                        src="/resume.pdf"
                                        className="w-full h-full rounded-md"
                                        title="Resume PDF"
                                    />
                                </div>
                                <div className="flex justify-end pt-2">
                                    <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                                        <a href="/resume.pdf" download="Vinayak_Resume.pdf">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download PDF
                                        </a>
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>

                        <Button variant="outline" size="lg" className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50" asChild>
                            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                                <Download className="w-4 h-4" />
                                Download PDF
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
