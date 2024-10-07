
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  uniform float time;
  uniform float scroll;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Create wave effect based on time
    pos.z += sin(pos.x * 10.0 + time) * 0.1;
    pos.z += cos(pos.y * 10.0 + time) * 0.1;

    // Move along Y-axis based on scroll
    pos.y += scroll * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float time;

  void main() {
    vec3 color1 = vec3(0.1, 0.4, 0.8);
    vec3 color2 = vec3(0.7, 0.2, 0.5);
    
    float pattern = sin(vUv.x * 10.0 + time) * sin(vUv.y * 10.0 + time);
    vec3 finalColor = mix(color1, color2, pattern);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default function BackgroundScene() {
  const meshRef = useRef(null)
  const materialRef = useRef(null)
  const scroll = useScroll()

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    scroll: { value: 0 },
  }), [])

  useFrame((state) => {
    const { clock } = state
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime()
      materialRef.current.uniforms.scroll.value = scroll.offset
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
