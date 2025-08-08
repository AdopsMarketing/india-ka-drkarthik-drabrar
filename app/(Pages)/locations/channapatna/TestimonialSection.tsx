import React from "react";

const TestimonialSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-24 py-10 md:py-14">
      <div className="w-full max-w-6xl mx-auto text-center bg-[#EDF4F7] px-6 md:px-12 py-6 md:py-8 rounded-2xl relative">
        {/* Circle Background + Quote Icon */}
        <div className="w-24 h-24 relative mb-6 mx-auto">
          {/* Circle */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            <circle cx="50" cy="50" r="50" fill="#C1ECFF" />
          </svg>

          {/* Quote Icon */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[20px] left-[20px]"
          >
            <path
              d="M14.0006 7.80347C6.26824 7.80347 0 14.0735 0 21.8085C0 29.5409 6.26824 35.8109 14.0006 35.8109C14.0006 35.8109 13.9329 41.0131 9.70664 48.5005C9.23719 50.0007 10.074 51.5983 11.5752 52.0651C12.6403 52.4001 13.7611 52.0744 14.4848 51.3164C24.2026 40.6875 28.0065 28.1779 28.0065 21.8085C28.0065 14.0735 21.7384 7.80347 14.0006 7.80347Z"
              fill="#1A4CA3"
            />
            <path
              d="M45.9948 7.80347C38.2624 7.80347 31.9941 14.0736 31.9941 21.8085C31.9941 29.5409 38.2624 35.8109 45.9948 35.8109C45.9948 35.8109 45.927 41.0131 41.7008 48.5005C41.2313 50.0007 42.0683 51.5983 43.5693 52.0651C44.6345 52.4001 45.7552 52.0744 46.4789 51.3164C56.1968 40.6875 60.0008 28.1779 60.0008 21.8085C60.0008 14.0735 53.7325 7.80347 45.9948 7.80347Z"
              fill="#1A4CA3"
            />
          </svg>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-[#1A4CA3] text-2xl md:text-3xl font-cormorant_garamond font-bold italic mb-4">
          "My mother walked without support four weeks after surgery—booking
          early made all the difference."
        </blockquote>
        <cite className="text-[#1C274C] text-lg md:text-2xl font-semibold not-italic font-poppins">
          Smt Shobha D., Ramanagara
        </cite>
      </div>
    </section>
  );
};

export default TestimonialSection;
