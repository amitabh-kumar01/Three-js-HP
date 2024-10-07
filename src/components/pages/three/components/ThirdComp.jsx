"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import ScrollComp from "./ScrollComp";
import { URLdata } from "../../two/components/assets/constant";

const ThirdComp= () => {
  const containerRef = useRef(null);
  const cubeRef = useRef(null);
  const cameraRef = useRef(null);
  const cardRef = useRef(null);
  const [fontSize, setFontSize] = useState(4);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(URLdata.first);
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -5);
    scene.add(cube);
    cubeRef.current = cube;

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.1,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 10;
    cameraRef.current = camera;

    const cardGeometry = new THREE.PlaneGeometry(5, 3);
    const cardMaterial = new THREE.MeshBasicMaterial({ color: 0x123456, side: THREE.DoubleSide });
    const card = new THREE.Mesh(cardGeometry, cardMaterial);
    card.position.set(0, -4, -5);
    scene.add(card);
    cardRef.current = card;

    const fontLoader = new FontLoader();
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('Hello, 3D Card!', {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-2, -4, -5.1); 
      scene.add(textMesh);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollProgress = (scrollPercent) => {
    if (cubeRef.current && cameraRef.current) {
      const cube = cubeRef.current;
      const camera = cameraRef.current;
      cube.position.y = (scrollPercent / 100) * 5 - 2.5;
      cube.rotation.x = (scrollPercent / 100) * Math.PI * 2;
      cube.rotation.y = (scrollPercent / 100) * Math.PI * 2;
      camera.position.z = 10 - (scrollPercent / 100) * 5;

      const newFontSize = Math.max(2, 4 - scrollPercent / 25);
      setFontSize(newFontSize);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 min-h-[200vh] flex flex-col justify-center items-center ">
        <main className="text-center pointer-events-none mb-96 text-cyan-400" style={{ fontSize: `${fontSize}rem` }}>
          <h1 className="animate-pulse">Animate on Scroll</h1>
          <section className="my-12">
            <h2 className="text-3xl">Begin scrolling to see things change</h2>
          </section>
          <section className="my-12">
            <h2 className="text-3xl">Changing Cube's Position & Rotation</h2>
          </section>
          <section className="my-12">
            <h2 className="text-3xl">Camera is Adjusting</h2>
          </section>
        </main>
        <ScrollComp onScroll={handleScrollProgress} />
      </div>
    </div>
  );
};

export default  ThirdComp;
