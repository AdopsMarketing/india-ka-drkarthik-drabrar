import React from "react";

interface QuoteTestimonialProps {
  quote: string;
  description: string;
  className?: string;
}

const QuoteTestimonial: React.FC<QuoteTestimonialProps> = ({
  quote,
  description,
  className = "",
}) => {
  const handleReadMore = () => {
    console.log("Read full story clicked");
  };

  return (
    <article
      className={`bg-white shadow-xl flex  items-center gap-8 text-black font-semibold p-6 mb-10  max-w-6xl mx-auto ${className}`}
    >
      <div
        className="w-1 h-64 md:h-80  bg-[rgba(26,76,163,1)] rounded-full"
        aria-hidden="true"
      />

      <div className="flex flex-col grow">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-snug">
          {quote}
        </blockquote>

        <p className="text-lg md:text-xl font-medium mt-6">{description}</p>

        <button
          onClick={handleReadMore}
          className="flex items-center gap-2 text-base md:text-lg font-medium mt-8 px-6 py-3 rounded-lg border-2 border-[rgba(26,76,163,1)] hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 w-fit"
        >
          <span>Read Full Story</span>
          <img
            src="https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/faa362199900d7d293d32454b64c87126c8d0a10?placeholderIfAbsent=true"
            alt="Arrow icon"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>
    </article>
  );
};

export default QuoteTestimonial;
