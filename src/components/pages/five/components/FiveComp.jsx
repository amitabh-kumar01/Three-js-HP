"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import CarBikeModel from './CarBikeModel';  

const FiveComp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <Canvas camera={{ position: [1, 1, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow={true} />
        <CarBikeModel />
        <OrbitControls enableZoom={true} />
        <Environment preset="sunset" backgroundRotation={[0, 10, 0]} background={true} />
      </Canvas>
    </div>
  );
};

export default FiveComp ;
