"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ForuthComp() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0.0, 1.0, 0.0, 
      -1.0, -1.0, 0.0,
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 1.0, 
      0.0, 2.0, 3.0, 
      2.0, 1.0, 2.0, 

      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, -1.0, 0.0, 
      1.0, 1.0, 0.0, 
      2.0, -1.0, 0.0,
      3.0, 3.0, 3.0,
      4.0, 3.0, 3.0,
      3.0, 3.0, 3.0,
    ]);

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-red-500" ref={mountRef}>
    </div>
  );
}
