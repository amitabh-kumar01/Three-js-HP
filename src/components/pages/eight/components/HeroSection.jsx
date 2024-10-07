
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const words = ['Innovative', 'Creative', 'Dynamic', 'Powerful']

const RotatingSphere = () => {
  const sphereRef = useState();
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.21; 
      sphereRef.current.rotation.x += 0.01; 
      sphereRef.current.rotation.z += 0.001; 
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
      <meshBasicMaterial color="#ffffff" wireframe />
    </Sphere>
  );
};

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  const handleMouseMove = (event) => {
    setMouseX((event.clientX / window.innerWidth) * 2 - 1); 
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-700 via-pink-500 to-red-500"
      onMouseMove={handleMouseMove} 
    >
      <div className="absolute inset-0 bg-black bg-transparent opacity-50"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <motion.h1
            className="mb-4 text-5xl font-bold text-purple-700 md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to the Future
          </motion.h1>
          <motion.div
            className="mb-8 text-3xl font-light text-white md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We are{' '}
            <span className="font-bold text-yellow-300">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.div>
          <motion.button
            className="rounded-full bg-white px-8 py-3 font-semibold text-purple-700 transition-colors hover:bg-yellow-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <RotatingSphere mouseX={mouseX} />
          <OrbitControls enableZoom={false} autoRotate={false} /> {/* Disable autoRotate */}
        </Canvas>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}
