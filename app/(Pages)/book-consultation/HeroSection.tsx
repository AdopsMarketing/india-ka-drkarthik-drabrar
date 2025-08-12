import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="container mx-auto mt-12 px-12 max-md:px-5 max-md:mt-10 flex flex-col items-center text-center">
      <h1 className="text-[#1A4CA3] font-bold font-cormorant_garamond text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
        Book your appointment with our experts
      </h1>
      <p className="text-black font-poppins text-lg sm:text-xl md:text-2xl font-normal ">
        Fill out the form below and a member of our team will get in touch
      </p>
    </section>
  );
};

export default HeroSection;
