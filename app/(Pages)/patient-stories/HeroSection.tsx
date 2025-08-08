'use client';

import React from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`flex flex-col items-center px-4 sm:px-6 lg:px-8 ${className}`}>
      <h1 className="text-blue-800 text-5xl sm:text-6xl lg:text-7xl font-bold text-center mt-14 sm:mt-20 font-cormorant_garamond">
        Patient Stories
      </h1>
      <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium text-center max-w-5xl mt-4 font-poppins">
        Real experiences from real joints. Hear from people like you who returned to work,
        family, and faith — pain-free.
      </p>
    </section>
  );
};

export default HeroSection;
