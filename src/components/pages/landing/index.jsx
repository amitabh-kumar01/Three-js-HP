
'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ScrollControls, Scroll } from '@react-three/drei'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import BackgroundScene from './components/BackgroundScene'

const DynamicCanvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), {
  ssr: false,
})

export function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      <DynamicCanvas className="fixed inset-0 z-0">
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.25}>
            <BackgroundScene />
            <Scroll html>
              <div className="w-full">
                <Header />
                <HeroSection />
                <CardSection />
                <ContentSection />
                {/* <Footer /> */}
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </DynamicCanvas>
    </main>
  )
}
