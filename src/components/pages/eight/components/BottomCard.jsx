'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Particles from 'react-particles'
import { loadFull } from "tsparticles"

const cards = [
  { id: 1, title: 'Innovation', icon: '💡' },
  { id: 2, title: 'Creativity', icon: '🎨' },
  { id: 3, title: 'Technology', icon: '💻' },
  { id: 4, title: 'Growth', icon: '🌱' },
  { id: 5, title: 'Collaboration', icon: '🤝' },
  { id: 6, title: 'Vision', icon: '👁️' },
]

export default function BottomCard() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    
      <div ref={sectionRef} className=" rounded-md m-20 relative min-h-screen w-full p-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center py-20">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold text-white md:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Universe of Possibilities
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="group relative overflow-hidden rounded-lg bg-white bg-opacity-10 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="relative z-10">
                  <span className="mb-4 block text-5xl">{card.icon}</span>
                  <h3 className="mb-2 text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="text-gray-300">
                    Discover the power of {card.title.toLowerCase()} in our cutting-edge solutions.
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-50"
                  initial={false}
                  animate={hoveredCard === card.id ? { opacity: 0.5 } : { opacity: 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            className="mt-12 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-3 font-semibold text-white transition-all hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </div>
  )
}
