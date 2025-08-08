import Link from "next/link";
import React from "react";

const Testimonial: React.FC = () => {
  return (
    <section className="bg-green-200 w-full flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-16 mt-14 max-md:mt-10">
      <div className="max-w-4xl mx-auto flex flex-col items-stretch">
        <div className="flex flex-wrap items-start gap-6 text-xl sm:text-2xl text-black font-poppins">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/97bb24ba51a6e517aa5c89785ff0a70751c351f8?placeholderIfAbsent=true"
            alt="Patient testimonial avatar"
            className="w-20 h-20 object-contain shrink-0"
          />
          <div className="flex flex-col mt-3 flex-1 min-w-0">
            <blockquote className="font-semibold">
              "Three months after my knee replacement I walked to my fields
              without pain."
            </blockquote>
            <cite className="font-medium mt-4 text-center not-italic">
              — Mr. Ramesh K., Farmer from Channapatna
            </cite>
          </div>
        </div>
        <Link href="/patient-stories" className="mx-auto">
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg sm:text-xl font-montserrat font-semibold px-6 py-3 rounded-lg mt-8 self-center transition-colors">
            View patient success stories
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Testimonial;
