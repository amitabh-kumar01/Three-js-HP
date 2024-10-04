import React from 'react'
import ThreeCube from './components/ThreejsCube';
import SecondCube from './components/SecondCube';
export const First= () => {
  return (
    <div className="flex bg-black min-h-screen">
      <ThreeCube />
      <SecondCube />
    </div>
  );
}

