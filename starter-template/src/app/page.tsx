// src/app/page.tsx

"use client";

import { ModernLayout } from "@/components/layout/ModernLayout";
import { HeroSection } from "@/sections/Hero";
import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <ModernLayout>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </ModernLayout>
  );
}
