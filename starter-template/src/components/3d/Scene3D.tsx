"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={3} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Scene3D;