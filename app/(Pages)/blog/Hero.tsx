import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col items-center relative pt-12 pb-28 px-5 sm:pt-8 sm:pb-16 sm:px-4">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4cc0ead25626e8ac7fff3e323f4c3fb4b4305db9?width=322"
        alt="Orthopedic care icon"
        className="w-40 h-40 mb-4 sm:w-30 sm:h-30"
      />

      <h1 className="text-black text-6xl font-bold text-center mb-2 md:text-5xl sm:text-2xl font-cormorant_garamond">
        Welcome to Dr. Karthik's
      </h1>

      <h2 className="text-blue-800 text-6xl font-bold text-center mb-4 md:text-5xl sm:text-2xl font-cormorant_garamond">
        Medical Practice
      </h2>

      <p className="text-black text-center text-4xl font-bold max-w-4xl mb-4 md:text-2xl sm:text-xl font-poppins">
        Expert orthopedic care with evidence-based treatment and compassionate
        patient support
      </p>

      <p className="text-black text-center text-2xl font-normal max-w-2xl md:text-lg sm:text-base font-poppins">
        Serving patients with joint care expertise • Available in English & Kannada
      </p>
    </section>
  );
};

export default Hero;
