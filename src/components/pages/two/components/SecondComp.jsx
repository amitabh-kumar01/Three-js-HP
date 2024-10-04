
"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import * as THREE from "three";
import { URLdata, Sdata, backImg } from "./assets/constant";
import { backImage } from "./assets/Backimg";

const Box = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      castShadow
      receiveShadow
     >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const TexturedBox = (props) => {
  const meshRef = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(URLdata.first, (loadedTexture) => {
      setTexture(loadedTexture);
    });
  }, []);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh {...props} ref={meshRef} scale={1.5} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      {texture && <meshStandardMaterial map={texture} />}
    </mesh>
  );
};

const Earth = (props) => {
  const earthRef = useRef();
  const [earthTexture, setEarthTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(Sdata.name, (loadedTexture) => {
      setEarthTexture(loadedTexture);
    });
  }, []);

  useFrame((state, delta) => {
    earthRef.current.rotation.y += delta * 1.1;
  });

  return (
    <mesh ref={earthRef} {...props} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      {earthTexture && <meshStandardMaterial map={earthTexture} />}
    </mesh>
  );
};

const Torus = (props) => {
  const torusRef = useRef();
  
  useFrame((state, delta) => {
    torusRef.current.rotation.z += delta * 0.5;
    torusRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh {...props} ref={torusRef} castShadow receiveShadow>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color={"skyblue"} />
    </mesh>
  );
};

// Camera motion on scroll
const CameraMotion = () => {
  const { camera } = useThree();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.y = scrollY * 0.01; 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  return null;
};

// 3D Text component
const ScrollText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(true); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <Text3D
      font="/fonts/helvetiker_regular.typeface.json" 
      size={0.8}  
      height={0.2}
      curveSegments={12}
      position={[0, 3, -5]}
    >
      Scroll Unveils!
      <meshStandardMaterial color={"green"} />
    </Text3D>
  ) : null;
};

const Background = () => {
  const { scene } = useThree();
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(backImage.name, (texture) => {
      scene.background = texture;
    });
  }, [scene]);

  return null;
};

const ThreeScene = () => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={2}
        castShadow
      />
      <pointLight
        position={[-10, -10, -10]}
        decay={0}
        intensity={1.5}
        castShadow
      />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      <Box position={[-2.2, 0, 0]} />
      <TexturedBox position={[2.2, 0, 0]} />
      <Earth position={[0, 0, 0]} />
      <Torus position={[0, 2, -3]} />

      <Background />
      <CameraMotion />

      <ScrollText />

      <OrbitControls enableZoom={true} enableRotate={true} enablePan={true} />
    </Canvas>
  );
};

export default ThreeScene;
