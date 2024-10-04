
"use client";
import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const HorizontalParallax = () => {
  const groupRef = useRef();
  const { viewport } = useThree();
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = (event) => {
    const { deltaX } = event;
    setOffsetX((prevOffset) => prevOffset + deltaX * 0.002); 
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x = offsetX * viewport.width;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[5, 1, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00ff77" />
      </mesh>
      <mesh position={[-5, 1, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#7700ff" />
      </mesh>
    </group>
  );
};

export default HorizontalParallax;
