"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { CatmullRomCurve3, TubeGeometry } from "three";

export default function Rope({ scrollOffset }) {
  const ropeRef = useRef();

  const points = useMemo(() => {
    const curvePoints = [];
    for (let i = -5; i <= 5; i += 0.5) {
      const x = Math.sin(i) * 2; 
      const y = i;
      const z = Math.cos(i) * 2; 
      curvePoints.push([x, y, z]);
    }
    return new CatmullRomCurve3(curvePoints).getPoints(50);
  }, []);
  const geometry = useMemo(() => new TubeGeometry(points, 20, 0.1, 8, false), [points]);
  useFrame(() => {
    if (ropeRef.current) {
      ropeRef.current.position.y = -scrollOffset * 5; 
    }
  });

  return (
    <mesh ref={ropeRef} position={[0, 0, 0]}>
      <meshStandardMaterial color="#FFC107" />
      <primitive object={geometry} />
    </mesh>
  );
}
