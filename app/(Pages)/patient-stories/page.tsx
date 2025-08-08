"use client";
import React from "react";
import HeroSection from "./HeroSection";
import VideoTestimonial from "./VideoTestimonial";
import BeforeAfterComparison from "./BeforeAfterComparison";
import QuoteTestimonial from "./QuoteTestimonial";

const Page = () => {
  return (
    <div className="flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden items-center">
      <main className="w-full">
        <HeroSection />

        <VideoTestimonial
          title='"Back to Farming in 8 Weeks" – Mr Ramesh, 62'
          description="After years of struggling with knee pain, Mr. Ramesh underwent joint replacement and returned to tending his land in just 2 months."
          duration="3:45"
        />

        <div className="flex items-center justify-center mt-12">
          <button className="text-lg sm:text-xl text-white font-montserrat font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-800">
            View More
          </button>
        </div>

        <BeforeAfterComparison
          patientName="Corrected Valgus Knee – Mrs Lakshmi"
          patientAge={55}
          beforeImage="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/aab624ce904faf38a189b5faf6722074ac2ad54f?placeholderIfAbsent=true"
          afterImage="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/2c1d118937c5fec83bafb6f7c0bf1cf4a4aa12ac?placeholderIfAbsent=true"
          beforeDescription="Bent outward (valgus deformity)"
          afterDescription="Proper alignment restored with total knee replacement"
          quote='"Now I walk to the temple every morning without pain."'
        />

        <QuoteTestimonial
          quote='"Hip replaced on Monday, temple visit by Friday!"'
          description={`"I thought I'd need a month to recover — but by Day 4, I was walking confidently. My family couldn't believe it."`}
        />
      </main>
    </div>
  );
};

export default Page;
