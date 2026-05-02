import { HeroSection } from "@/components/sections/hero";
import { SummarySection } from "@/components/sections/summary";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ResumeSection } from "@/components/sections/resume";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <HeroSection />
      <SummarySection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
