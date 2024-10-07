
"use client";
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = () => {
  const particlesRef = useRef();
  const [positions] = useState(() => {
    const particles = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 10;  
      particles[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particles[i * 3 + 2] = (Math.random() - 0.5) * 10;  
    }
    return particles;
  });

  useFrame(() => {
    const colors = particlesRef.current.geometry.attributes.color.array;
    for (let i = 0; i < colors.length; i += 3) {
      colors[i] = Math.random(); // Red
      colors[i + 1] = Math.random(); // Green
      colors[i + 2] = Math.random(); // Blue
    }
    particlesRef.current.geometry.attributes.color.needsUpdate = true;
    particlesRef.current.rotation.x += 0.001;
    particlesRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={positions.length / 3}
          array={new Float32Array(5000 * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors color={null} />
    </points>
  );
};

export default Particles;
