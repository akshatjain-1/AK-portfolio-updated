"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Float } from "@react-three/drei";
import { motion } from "framer-motion";

interface InteractiveText3DProps {
  text: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  onMouseMove?: (event: React.MouseEvent) => void;
}

const TextMesh = ({ text, position, rotation = [0, 0, 0], color = "#00ffff" }: InteractiveText3DProps) => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0];
      meshRef.current.rotation.y = rotation[1];
      meshRef.current.rotation.z = rotation[2];
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={position}
      >
        {text}
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  );
};

export const InteractiveText3D: React.FC<InteractiveText3DProps> = ({ text, position, rotation, color, onMouseMove }) => {
  return (
    <div 
      className="w-full h-full"
      onMouseMove={onMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <TextMesh text={text} position={position} rotation={rotation} color={color} />
      </Canvas>
    </div>
  );
}; 