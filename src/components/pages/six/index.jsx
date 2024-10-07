"use client";
import { Suspense } from 'react';
import SixScene from './components/SixScene';

export const Six = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 to-black">
      <Suspense fallback={<div>Loading...</div>}>
        <SixScene />
      </Suspense>
    </div>
  );
};
