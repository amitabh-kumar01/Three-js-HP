"use client"

// ParallaxLayer.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ParallaxLayer = ({ position, speed, shape, texture }) => {
  const ref = useRef();

  // Update layer position based on scroll
  useFrame(() => {
    const scrollY = window.scrollY;
    ref.current.position.z = position + scrollY * speed;
  });

  return (
    <mesh ref={ref} position={[0, 0, position]}>
      {shape === 'plane' && <planeGeometry args={[10, 10]} />}
      {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {shape === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default ParallaxLayer;
