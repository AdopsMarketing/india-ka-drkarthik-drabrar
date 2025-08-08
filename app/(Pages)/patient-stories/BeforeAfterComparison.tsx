import React from "react";

interface BeforeAfterComparisonProps {
  patientName: string;
  patientAge: number;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  quote: string;
  className?: string;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  patientName,
  patientAge,
  beforeImage,
  afterImage,
  beforeDescription,
  afterDescription,
  quote,
  className = "",
}) => {
  return (
    <section className={`w-full max-w-6xl px-4 md:px-8 py-12 mx-auto flex flex-col items-center ${className}`}>
      <h2 className="text-black text-3xl md:text-4xl font-semibold text-center font-poppins">
        {patientName}, {patientAge}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <img
            src={beforeImage}
            alt={`Before treatment - ${beforeDescription}`}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <img
            src={afterImage}
            alt={`After treatment - ${afterDescription}`}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full font-poppins">
        <div className="text-center">
          <h3 className="text-red-500 text-2xl font-medium">Before</h3>
          <p className="text-gray-700 text-lg mt-2">{beforeDescription}</p>
        </div>
        <div className="text-center">
          <h3 className="text-green-500 text-2xl font-medium">After</h3>
          <p className="text-gray-700 text-lg mt-2">{afterDescription}</p>
        </div>
      </div>

      <blockquote className="text-blue-800 text-3xl md:text-4xl font-cormorant_garamond font-bold text-center mt-10">
        {quote}
      </blockquote>

      <div className="mt-10">
        <button className="bg-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 font-montserrat">
          View More
        </button>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;
