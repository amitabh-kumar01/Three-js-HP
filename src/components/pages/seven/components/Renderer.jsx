import React from 'react';
const Renderer = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {children}
    </div>
  );
};

export default Renderer;
