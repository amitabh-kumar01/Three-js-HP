'use client';

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AnimatedSphere({ scrollOffset }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.5;
    ref.current.position.y = -scrollOffset * 3 + Math.sin(t * 0.5) * 1.5;
    ref.current.scale.setScalar(1 + scrollOffset * 0.8);
  });

  return (
    <mesh ref={ref} position={[-2, 1, -4]} scale={1.2} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#72F2F5" roughness={0.2} metalness={0.8} />
    </mesh>
  );
}
