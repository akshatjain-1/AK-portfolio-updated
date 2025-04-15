"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform  } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import('../3d/Scene3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#000b1a]" />
});

gsap.registerPlugin(ScrollTrigger);

interface ModernLayoutProps {
  children: React.ReactNode;
}

const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 ">
      {[...Array(200)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export const ModernLayout: React.FC<ModernLayoutProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMounted, setIsMounted] = useState(false);

  // Mouse movement tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  
  
  // Smooth spring physics for mouse movement
  const [rotateX, setRotateX] = useState(useSpring(0));
  const [rotateY, setRotateY] = useState(useSpring(0));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set up window-dependent transforms after mounting
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const springConfig = { damping: 25, stiffness: 200 };
      setRotateX(useSpring(
        useTransform(mouseY, [0, window.innerHeight], [1, -1]),
        springConfig
      ));
      setRotateY(useSpring(
        useTransform(mouseX, [0, window.innerWidth], [-1, 1]),
        springConfig
      ));
    }
  }, [mouseX, mouseY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };


  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 10,
        duration: 2.5,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden ${
        theme === "dark" ? "bg-red-500" : "bg-gray-100"
      }`}
      style={{
        perspective: "2000px",
      }}
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-50">
      {isMounted && (
          <Suspense fallback={<div className="w-full h-full bg-[#000b1a]" />}>
            <Scene3D />
          </Suspense>
        )}
      </div>

      {/* Floating Content Container */}
      <motion.div
        className="relative z-10 min-h-screen px-6 py-6"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        >
        {/* Shadow Layer */}
        <div 
          className="absolute inset-4 rounded-3xl bg-black/20"
          style={{
            filter: "blur(60px)",
            transform: "translateZ(-50px)",
          }}
        />

      {/* Content */}
   
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen backdrop-blur-sm bg-black/10 rounded-3xl p-6 border border-white/10"
          style={{
            transform: "translateZ(50px)",
            boxShadow: `
              0 0 20px 0 rgba(0, 0, 0, 0.3),
              0 25px 50px -12px rgba(5, 101, 60, 0.5)
            `,
          }}
        >
          {children}
        </motion.div>
      </motion.div>

      {/* Background Effects */}
      <BackgroundParticles />

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 p-2 rounded-lg bg-black/50 text-[#00ffff] hover:bg-black/70 transition-colors z-50"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}; 