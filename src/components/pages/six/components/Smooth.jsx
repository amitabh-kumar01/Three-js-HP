
"use client";
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const SmoothElement = () => {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  useFrame(() => {
    if (meshRef.current.position.x < 2) {
      setVisible(true);
    }

    meshRef.current.scale.setScalar(visible ? 1 : 0.1);
    meshRef.current.material.opacity = visible ? 1 : 0;
  });

  return (
    <mesh ref={meshRef} position={[5, 1, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff7700" transparent opacity={0.5} />
    </mesh>
  );
};

export default SmoothElement;
