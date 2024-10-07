"use client";
import React, { useEffect } from "react";
const ScrollComp = ({ onScroll }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      onScroll(scrollPercent); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll]);
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md text-lg">
      <span>Scroll </span>
    </div>
  );
};
export default ScrollComp;
