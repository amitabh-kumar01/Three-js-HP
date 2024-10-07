
import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, content }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }} // Start from the left and invisible
      whileInView={{ x: 0, opacity: 1 }} // Slide to the right and become visible
      exit={{ x: 100, opacity: 0 }} // Slide out to the right and become invisible
      transition={{ duration: 0.5 }} // Animation duration
      viewport={{ once: false }} // Animation will trigger every time it comes into view
      style={{
        background: "#fff",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
};

export default Card;
