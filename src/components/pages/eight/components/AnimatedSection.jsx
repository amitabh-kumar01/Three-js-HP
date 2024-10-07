
import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-20 px-10 lg:px-20 bg-gray-50">
      
      <motion.div
        initial={{ x: -100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        viewport={{ once: false }}
        className="flex-1 text-left mb-10 lg:mb-0"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Services
        </h2>
        <p className="text-lg text-gray-600">
          We offer a wide range of web development solutions that meet your business needs. From creating stunning websites to implementing complex backend systems, we’ve got you covered. Our team ensures high-quality results with cutting-edge technologies.
        </p>
      </motion.div>

      
      <motion.div
        initial={{ x: 100, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }} 
        viewport={{ once: false }}
        className="flex-1"
      >
        <img
          src="/textures/ny.jpg"
          alt="Web Development"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
