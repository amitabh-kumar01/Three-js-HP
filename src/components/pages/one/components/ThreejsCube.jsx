"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer(); 
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1,1.5,1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.21;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}  className='max-w-[10rem] max-h-[10rem]  '/>;
};

export default ThreeCube;


