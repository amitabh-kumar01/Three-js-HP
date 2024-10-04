
"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import TorusKnot from './Knot';
import Particles from './Particales';

const Scene = () => {
  return (
    <Canvas shadows className="h-screen" camera={{ fov: 75, position: [0, 2, 5] }}>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} castShadow />
      
      <TorusKnot />
      <Particles />

      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        autoRotate 
        autoRotateSpeed={1} 
        dampingFactor={0.25} 
        rotateSpeed={0.5} 
        zoomSpeed={0.5} 
        maxPolarAngle={Math.PI / 2} 
      />
      
      <Environment preset="city" />
      
      <fog attach="fog" args={["#FF0000", 9, 20]} />

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom
          intensity={1.5} // Adjust the bloom intensity
          width={300} // Render target width
          height={300} // Render target height
          kernelSize={3} // Kernel size for bloom
          luminanceThreshold={0.5} // Threshold for luminance
          luminanceSmoothing={0.1} // Smoothing for luminance
        />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
