import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="container mx-auto mt-12 px-12 max-md:px-5 max-md:mt-10 flex flex-col items-center text-center">
      <div className="w-40 h-40 relative">
        <Image
          src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a803f08c18c57a99fb245d4991802b88a6f8d2b7?placeholderIfAbsent=true"
          alt="Dr. Karthik"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="text-blue-800 text-4xl font-bold mt-6 max-md:text-3xl max-w-4xl">
        Consult Dr. Karthik in person or online. Choose a facility below and
        book your visit with ease.
      </h1>
    </section>
  );
};

export default HeroSection;
