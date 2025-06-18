// src/app/page.tsx

"use client";

import { ModernLayout } from "@/components/layout/ModernLayout";
import { HeroSection } from "@/components/sections/Hero";
import { Header } from "@/components/sections/Header";
import { ProjectsSection } from "@/components/sections/Projects";
import { AboutSection } from "@/components/sections/About";
import { EnhancedHero } from "@/components/sections/EnhancedHero";

export default function Home() {
  return (
    
      
      <main>
        <Header />
         <EnhancedHero/>
        <ProjectsSection />
        <AboutSection />
      </main>
    
  );
}
