'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-[615px]">
      <Image
        src="https://api.builder.io/api/v1/image/assets/TEMP/b0b76aa6a79d38b3a181620952b7457a328d7bd6?width=2880"
        alt="Medical facility background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center h-[302px] bg-white/80 p-6 sm:p-10 text-center">
        <h1 className="text-[#1A4CA3] text-4xl sm:text-5xl font-bold font-cormorant_garamond mb-4">
          Joint-Replacement Care
        </h1>
        <p className="text-[#4A4A4A] text-lg sm:text-2xl font-normal font-montserrat max-w-3xl mb-6 px-4">
          Chronic knee or hip pain steals independence. Explore treatment paths below and decide if surgery is right for you. Each section covers symptoms, candidacy, procedure steps, recovery timeline and FAQs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg px-4">
          <Link href="/book-consultation" className="w-full">
            <button className="w-full bg-[#1A4CA3] hover:bg-[#1A4CA3]/90 text-white text-lg sm:text-xl font-semibold font-montserrat py-3 rounded-lg transition-colors">
              Book Consultation
            </button>
          </Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full bg-[#3DBE84] hover:bg-[#3DBE84]/90 text-white text-lg sm:text-xl font-semibold font-montserrat py-3 rounded-lg transition-colors">
              WhatsApp Chat
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
