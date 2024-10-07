"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import CardContainer from "./components/MotionCardContainer";
import AnimatedSection from "./components/AnimatedSection";
import ParallaxScene from "./components/EightSene";
import HeroSection from "./components/HeroSection";
import BottomCard from "./components/BottomCard";
export function Eight() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <ScrollControls pages={8} damping={0.55}>
            <ParallaxScene />
            <Scroll html>
              <div className="w-full" style={{ height: "300vh" }}>
                <div className="h-screen flex items-center justify-center">
                  <HeroSection />
                </div>
                <div className="h-screen flex items-center justify-center">
                  <h2 className="text-4xl font-semibold text-white">
                    Scroll to Explore
                  </h2>
                  <CardContainer />
                </div>
                <div className=" flex items-center justify-center">
                  <h2 className="text-4xl font-semibold text-white">
                    Amazing 3D Experience
                  </h2>
                </div>
                <div className="h-screen flex items-center justify-center mb-96 p-10 m-10 rounded-full">
                  <AnimatedSection />
                </div>
                <div className="h-screen flex items-center justify-center">
                  <BottomCard />
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
