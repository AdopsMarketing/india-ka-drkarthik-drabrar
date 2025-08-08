import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-7xl flex flex-col items-center gap-6 mx-auto text-center px-6 md:pt-24 md:px-10 lg:px-24">
      <h1 className="text-[#1A4CA3] font-bold font-cormorant_garamond text-4xl md:text-5xl lg:text-6xl leading-tight">
        Book a Tele-Consultation with Dr. Karthik M S
      </h1>
      <p className="text-black font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal ">
        Expert orthopedic advice from the comfort of your home
      </p>
      <p className="text-[#1A4CA3] font-cormorant_garamond text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
        Night Slots | Flexible Timing | Kannada & English
      </p>

      <button className="text-center cursor-pointer bg-[#1A4CA3]  py-3 px-5  rounded-lg hover:bg-[#1A4CA3]/90 transition-colors text-white text-xl font-semibold">
        Book Consultation via Apollo App
      </button>
    </section>
  );
};

export default HeroSection;
