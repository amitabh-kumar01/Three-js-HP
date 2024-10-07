"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Box, Plane, Html } from '@react-three/drei';
import { TextureLoader } from 'three';

const AnimatedBox = (props) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Box ref={mesh} {...props} castShadow receiveShadow>
      <meshStandardMaterial attach="material" color="royalblue" />
    </Box>
  );
};

const Scene = () => {
  const texture = new TextureLoader().load('/textures/ny.jpg');
  const planeTexture = new TextureLoader().load('/textures/nz.jpg'); 

  return (
    <Canvas shadows>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        castShadow
        intensity={1.2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />
      <directionalLight
        position={[-5, 5, -5]}
        castShadow
        intensity={0.5}
      />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
      />
      <AnimatedBox args={[1, 1, 1]} position={[-2, 0.5, 0]}>
        <meshStandardMaterial attach="material" map={texture} />
      </AnimatedBox>
      <AnimatedBox args={[1, 1, 1]} position={[2, 0.5, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </AnimatedBox>
      <Plane
        args={[5, 5]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial attach="material" map={planeTexture} />
      </Plane>
      <Environment preset="city" />

      <OrbitControls />
      <Html center>
        <div className="text-white font-bold bg-black p-2 rounded">
          3D Scene with Advanced Effects
        </div>
      </Html>
    </Canvas>
  );
};

export default Scene;
