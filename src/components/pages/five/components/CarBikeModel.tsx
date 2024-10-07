
"use client";
import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const CarBikeModel = () => {
  const car = useGLTF('/models/car.glb');
  const bike = useGLTF('/models/bike.glb');

  const [carPosition, setCarPosition] = useState([-1, 0, 0]);

  const handleKeyDown = (event) => {
    const [x, y, z] = carPosition;
    switch (event.key) {
      case 'w':
        setCarPosition([x, y, z - 0.1]); 
        break;
      case 's':
        setCarPosition([x, y, z + 0.1]);
        break;
      case 'a':
        setCarPosition([x - 0.1, y, z]); 
        break;
      case 'd':
        setCarPosition([x + 0.1, y, z]); 
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [carPosition]);

  return (
    <>
      <primitive 
        object={car.scene} 
        position={carPosition}  
        scale={[0.8, 0.8, 0.8]} 
      />
      
      <primitive 
        object={bike.scene} 
        position={[1, 0, 0]}  
        scale={[0.8, 0.8, 0.8]} 
      />
    </>
  );
};

export default CarBikeModel;
