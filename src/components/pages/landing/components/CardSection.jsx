"use client"
import React from "react";

const Card = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href="#" className="text-blue-600 underline mt-4 block">Learn More</a>
    </div>
  </div>
);

const CardSection = () => {
  const cards = [
    {
      title: "Service One",
      description: "Description of service one.",
      image: "/textures/px.jpg",
    },
    {
      title: "Service Two",
      description: "Description of service two.",
      image: "/textures/nz.jpg",
    },
    {
      title: "Service Three",
      description: "Description of service three.",
      image: "/textures/pz.jpg",
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
