"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, Text3D, Float, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingSphere = ({ isHovered }: { isHovered: boolean }) => {
  const sphereRef = useRef<any>();
  const [rotationSpeed, setRotationSpeed] = useState(0.01);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += rotationSpeed;
      sphereRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere 
        ref={sphereRef}
        args={[1, 32, 32]} 
        position={[0, 0, 0]}
        onPointerOver={() => setRotationSpeed(0.05)}
        onPointerOut={() => setRotationSpeed(0.01)}
      >
        <meshStandardMaterial
          color={isHovered ? "#818cf8" : "#4f46e5"}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  );
};

const FloatingText = ({ text, position }: { text: string; position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={position}
      >
        {text}
        <meshStandardMaterial color="#ffffff" />
      </Text3D>
    </Float>
  );
};

const InteractiveText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="text-4xl md:text-6xl font-bold text-white mb-4 hover:text-indigo-400 transition-colors cursor-pointer"
    >
      {text}
    </motion.div>
  );
};

const SkillOrb = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const orbRef = useRef<any>();
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={orbRef} args={[0.3, 32, 32]} position={position}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Sphere>
    </Float>
  );
};

export default function EnhancedLandingPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    
    gsap.to(".floating-elements", {
      x: x * 20,
      y: y * 20,
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-indigo-900"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <FloatingSphere isHovered={isHovered} />
          
          {/* Floating Text Elements */}
          <FloatingText text="Code" position={[-2, 1, 0]} />
          <FloatingText text="Create" position={[2, -1, 0]} />
          <FloatingText text="Innovate" position={[0, 2, 0]} />
          
          {/* Skill Orbs */}
          {showSkills && (
            <>
              <SkillOrb position={[-1.5, -1, 0]} color="#60a5fa" />
              <SkillOrb position={[1.5, -1, 0]} color="#f472b6" />
              <SkillOrb position={[0, -2, 0]} color="#34d399" />
            </>
          )}
          
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <InteractiveText text="Welcome to My Digital Universe" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Explore my world of code, creativity, and innovation
          </motion.p>
          <div className="space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/portfolio")}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Enter Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSkills(!showSkills)}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showSkills ? "Hide Skills" : "Show Skills"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full floating-elements"
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

      {/* Mouse Trail Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="w-4 h-4 bg-white rounded-full absolute"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
} 