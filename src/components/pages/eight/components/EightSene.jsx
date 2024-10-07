"use client";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Plane, Sphere, Torus, useScroll } from "@react-three/drei";
import { CatmullRomCurve3, TubeGeometry, Vector3 } from "three";
import { useSpring, animated } from "@react-spring/three";

function Rope({ scrollOffset }) {
  const ropeRef = useRef();

  const minPoints = 100; 
  const maxPoints = 300; 
  const numberOfPoints = Math.max(2, Math.floor(minPoints + (maxPoints - minPoints) * scrollOffset));
  const points = Array.from({ length: numberOfPoints }, (_, i) => {
    const x = Math.sin(i * 0.1) * 2; 
    const y = (i / numberOfPoints) * 10; 
    const z = Math.cos(i * 0.1) * 3; 
    return new Vector3(x, y, z);
  });

  const curve = new CatmullRomCurve3(points);

  useFrame(() => {
    const geometry = new TubeGeometry(curve, 40, 0.3, 8, false); 
    ropeRef.current.position.x = 10 - scrollOffset * 20; 
    ropeRef.current.geometry.dispose(); 
    ropeRef.current.geometry = geometry; 
  });

  const color = scrollOffset < 0.5 ? "#FFC107" : "#FF5722"; 

  return (
    <mesh ref={ropeRef}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function ParallaxScene() {
  const scroll = useScroll();
  const sphereRef = useRef();
  const boxRef = useRef();
  const torusRef = useRef();
  const planeRef = useRef();

  const { sphereScale, boxRotation, torusPosition, planePosition } = useSpring({
    sphereScale: scroll.offset * 4 + 1,
    boxRotation: scroll.offset * Math.PI * 8,
    torusPosition: scroll.offset * 5 - 2.5,
    planePosition: scroll.offset * 2 - 5,
  });

  useFrame((state) => {
    const offset = scroll.offset;
    state.camera.position.set(
      Math.sin(offset * Math.PI * 2) * 5,
      offset * 5,
      10 - offset * 5
    );
    state.camera.lookAt(1, 0, 0);
  });

  return (
    <>
      <Rope scrollOffset={scroll.offset} />
      
      <animated.mesh ref={planeRef} position-y={planePosition} scale={[10, 20, 1]}>
        <Plane args={[10, 10]}>
          <meshStandardMaterial color="#282c34" opacity={0.8} transparent />
        </Plane>
      </animated.mesh>

      <animated.mesh ref={sphereRef} scale={sphereScale} position={[0, 1, 0]}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color="#ff0077" roughness={0.5} metalness={0.8} />
        </Sphere>
      </animated.mesh>
      
      <animated.mesh ref={boxRef} rotation-y={boxRotation} position={[2, 0, 0]}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color="#4ecdc4" roughness={0.3} metalness={0.7} />
        </Box>
      </animated.mesh>

      <animated.mesh ref={torusRef} position-x={torusPosition} position={[0, -1, 0]}>
        <Torus args={[1, 0.4, 16, 100]}>
          <meshStandardMaterial color="#f7b731" roughness={0.2} metalness={0.8} />
        </Torus>
      </animated.mesh>

      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, 15, -10]} intensity={0.5} color="#ff0077" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#4ecdc4" />

      <mesh position={[0, 0, -5]}>
        <boxGeometry args={[20, 20, 20]} />
        <meshStandardMaterial color="#333" transparent opacity={0.1} />
      </mesh>
    </>
  );
}
