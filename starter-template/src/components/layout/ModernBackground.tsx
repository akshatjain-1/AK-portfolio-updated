"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import gsap from "gsap";

export const ModernBackground = () => {
  const sphereRef = useRef<any>();
  const [rotation, setRotation] = React.useState([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      
      gsap.to(sphereRef.current.rotation, {
        x: y * 0.5,
        y: x * 0.5,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <Sphere ref={sphereRef} args={[1, 100, 200]}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Canvas>
    </div>
  );
}; 