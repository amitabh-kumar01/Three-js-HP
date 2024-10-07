"use client";
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';

const TorusKnot = () => {
  const torusRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.01;
    torusRef.current.rotation.z += 0.01;
    torusRef.current.position.x = mouse.x * 2;
    torusRef.current.position.y = mouse.y * 2;
  });

  return (
    <mesh ref={torusRef} castShadow position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <MeshReflectorMaterial
        color={'#ff0077'}
        roughness={0.4}
        metalness={0.9}
        reflectorBlur={[400, 100]}
        mixStrength={1}
      />
    </mesh>
  );
};

export default TorusKnot;
