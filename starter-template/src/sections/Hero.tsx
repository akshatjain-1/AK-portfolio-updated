"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InteractiveText3D } from "@/components/InteractiveText3D";
import { ModernBackground } from "@/components/ModernBackground";


export const HeroSection = () => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    
    setRotation([y * 0.5, x * 0.5, 0]);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Modern Background */}
      <ModernBackground />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
        
          <div className="bg-gray-950/90 border border-gray-850 px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium text-white">Available for new projects</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto text-center mt-8"
        >
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-white">
            Hi, I'm <span className="text-[#00ffff] font-bold">Akshat Jain</span>
          </h1>
          
          {/* 3D Interactive Text */}
          <div className="h-32 mt-4">
            <InteractiveText3D
              text="Software Engineer"
              position={[0, 0, 0]}
              rotation={rotation}
              color="#00ffff"
            />
          </div>

          <p className="mt-4 text-white/80 md:text-lg">
            I'm a software engineer based in Bangalore, India specializing in building 
            (and occasionally designing) exceptional websites, applications, and everything in between.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/30 px-6 h-12 rounded-xl hover:bg-white/10 transition-colors">
            <span className="font-semibold text-white">Explore my work</span>
          </button>
          <button className="inline-flex items-center gap-2 bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors">
            <span>👋</span>
            <span className="font-semibold">Get in touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};
