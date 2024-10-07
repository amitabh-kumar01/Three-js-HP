
"use client"
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AnimatedBox({ scrollOffset }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.3 + scrollOffset;
    ref.current.rotation.y = t * 0.5;
    ref.current.position.y = Math.sin(t * 0.8) + scrollOffset * 4;
  });

  return (
    <mesh ref={ref} position={[3, 0, -6]} scale={1} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#F25D72" roughness={0.3} metalness={0.9} />
    </mesh>
  );
}
