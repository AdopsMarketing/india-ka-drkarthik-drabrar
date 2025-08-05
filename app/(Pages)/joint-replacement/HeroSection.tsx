import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 mt-6">
      {/* Label with icon */}
      <div className="flex items-center gap-2 text-lg text-blue-800 font-montserrat font-semibold justify-center mt-6">
        <p>Joint-Replacement Care</p>
        <img
          src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/62a9a0ddf729ca905060c3219029f82dd18d5dd7?placeholderIfAbsent=true"
          alt="Care icon"
          width={50}
          height={50}
        />
      </div>

      {/* Title with center image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-8 text-black font-cormorant_garamond font-bold text-5xl md:text-4xl lg:text-6xl text-center w-full">
        <h1>Comprehensive</h1>

        {/* Responsive image */}
        <Image
          src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/cda7a0892e24dfe02d023539857468d61cad5ac8?placeholderIfAbsent=true"
          alt="Medical professional"
          width={500}
          height={500}
          className="object-cover rounded-full w-full md:w-1/3 h-auto"
        />

        <h1>
          Replacement <br />
          Solutions
        </h1>
      </div>

      {/* Subtitle paragraph */}
      <p className="text-gray-700 text-xl lg:text-2xl font-montserrat font-medium text-center mt-6">
        Chronic knee or hip pain steals independence. Explore treatment paths
        below and decide if surgery is right for you. Each section covers
        symptoms, candidacy, procedure steps, recovery timeline and FAQs.
      </p>
    </section>
  );
};

export default HeroSection;
