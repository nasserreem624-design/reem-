
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, speed, size }: { position: [number, number, number], color: string, speed: number, size: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.001 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} args={[size, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.3}
        />
      </Sphere>
    </Float>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#4f46e5" intensity={0.5} />
        
        <FloatingShape position={[5, 2, -5]} color="#3b82f6" speed={1.5} size={1.2} />
        <FloatingShape position={[-6, -3, -2]} color="#8b5cf6" speed={1.2} size={1.5} />
        <FloatingShape position={[2, -6, -8]} color="#6366f1" speed={2} size={1} />
        <FloatingShape position={[-3, 4, -10]} color="#38bdf8" speed={1} size={1.8} />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
