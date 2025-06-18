"use client";

import React, { forwardRef } from "react";
import { Text3D, Float } from "@react-three/drei";

// Define the props for the component
interface InteractiveText3DProps {
  text: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
}

// CORRECTED: The entire component is changed to be a proper 3D object
// that can be used inside another component's Canvas.
// It is wrapped in forwardRef to receive the ref from its parent.
export const InteractiveText3D = forwardRef<any, InteractiveText3DProps>(
  ({ text, position, rotation = [0, 0, 0], color = "#00ffff" }, ref) => {

    return (
      // The ref from the parent is attached here.
      // This allows the parent's useFrame to animate this component.
      <Float ref={ref} speed={2} rotationIntensity={1} floatIntensity={1}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          position={position}
          rotation={rotation} // Pass rotation directly as a prop
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
  }
);

// Add a display name for easier debugging
InteractiveText3D.displayName = 'InteractiveText3D';