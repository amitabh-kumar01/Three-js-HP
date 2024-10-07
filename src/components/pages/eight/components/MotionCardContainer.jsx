
import React from "react";
import { motion } from "framer-motion";
import Card from "./MotionCard"; 

export default function App() {
  const cards = [
    { title: "Card 1", content: "This is the content of Card 1." },
    { title: "Card 2", content: "This is the content of Card 2." },
    { title: "Card 3", content: "This is the content of Card 3." },
  ];

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
      }}
    >
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </motion.div>
  );
}
