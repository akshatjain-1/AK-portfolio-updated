"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Float, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingText3D = () => {
  const textRef = useRef<any>();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {`Hello,\nI'm a\nDeveloper`}
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
        />
      </Text3D>
    </Float>
  );
};

const SkillOrb = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export const EnhancedHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{ y }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <FloatingText3D />
          <SkillOrb position={[-2, 1, 0]} color="#00ffff" />
          <SkillOrb position={[2, -1, 0]} color="#00b8ff" />
          <SkillOrb position={[0, 2, 0]} color="#00ffd5" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-6 py-3 bg-[#00ffff] text-black rounded-lg hover:bg-[#00b8ff] transition-colors">
              View Projects
            </button>
            <button className="px-6 py-3 border border-[#00ffff] text-[#00ffff] rounded-lg hover:bg-[#00ffff]/10 transition-colors">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-[#00ffff] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[#00ffff] rounded-full mt-2"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}; 