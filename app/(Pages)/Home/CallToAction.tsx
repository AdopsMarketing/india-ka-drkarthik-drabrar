import Link from "next/link";
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-blue-50 w-full font-poppins flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-14 mt-16 max-md:mt-10">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl text-black font-semibold">
          Ready to start your journey?
        </h2>
        <p className="text-lg sm:text-2xl text-black font-medium mt-6">
          Book your consultation today and take the first step towards pain-free
          movement. Same-day diagnosis available at our Channapatna facility.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
          <Link
            href="/book-consultation"
            className="bg-blue-700 text-white text-lg sm:text-xl px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Book Consultation
          </Link>
          <Link href='tel:8618352089'>
            <button
              type="button"
              className="border-2 border-black text-black text-lg sm:text-xl px-6 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors"
            >
              Call Now: +91 8618352089
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
