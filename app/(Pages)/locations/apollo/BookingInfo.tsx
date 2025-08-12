import Link from "next/link";
import React from "react";

const BookingInfo: React.FC = () => {
  return (
    <section className="container mx-auto flex gap-6 mb-16 px-14 max-lg:flex-col max-lg:gap-8 max-lg:px-6 max-sm:px-4">
      {/* Steps to Book */}
      <article className="w-full bg-white px-6 py-6 rounded-2xl max-sm:py-5" style={{ boxShadow: "-44px 38px 16px 0 rgba(0, 0, 0, 0.00), -28px 24px 15px 0 rgba(0, 0, 0, 0.01), -16px 14px 13px 0 rgba(0, 0, 0, 0.05), -7px 6px 9px 0 rgba(0, 0, 0, 0.09), -2px 2px 5px 0 rgba(0, 0, 0, 0.10)" }}>
        <h3 className="text-[#1A4CA3] text-2xl sm:text-3xl font-bold mb-6 font-cormorant_garamond">
          Steps to Book:
        </h3>
        <div className="text-[#4A4A4A] text-lg sm:text-xl font-bold leading-relaxed font-montserrat">
          Download Apollo 24/7 app <br />
          Search &quot;Dr Karthik M S – Ortho&quot; <br />
          Choose slot → Pay → Confirm
        </div>
      </article>

      {/* Booking & Payment */}
      <article className="w-full bg-white px-6 py-6 rounded-2xl max-sm:py-5 font-montserrat" style={{ boxShadow: "-44px 38px 16px 0 rgba(0, 0, 0, 0.00), -28px 24px 15px 0 rgba(0, 0, 0, 0.01), -16px 14px 13px 0 rgba(0, 0, 0, 0.05), -7px 6px 9px 0 rgba(0, 0, 0, 0.09), -2px 2px 5px 0 rgba(0, 0, 0, 0.10)" }}>
        <h3 className="text-[#1A4CA3] text-2xl sm:text-3xl font-bold mb-6 font-cormorant_garamond">
          Booking &amp; Payment
        </h3>

        <div className="text-[#4A4A4A] text-lg sm:text-xl font-bold leading-relaxed mb-2">
          ₹400
        </div>

        <p className="text-black text-base sm:text-lg font-medium mb-6">
          Pay via Apollo Wallet or UPI
        </p>

        <div className="space-y-4">
          <button className="w-full bg-[#5AB8D0] text-white  text-lg sm:text-xl font-semibold py-3 rounded-lg hover:bg-[#5AB8D0]/90 transition-colors pointer-events-none">
            Open in Apollo App
          </button>

          <Link href={`https://wa.me/8618352089`}>
            <button className="w-full bg-[#3DBE84] text-white text-lg sm:text-xl font-semibold py-3 rounded-lg hover:bg-[#3DBE84]/90 transition-colors">
              Don&apos;t have it? WhatsApp Chat Us
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default BookingInfo;
