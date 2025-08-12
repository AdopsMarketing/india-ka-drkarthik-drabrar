import React from "react";

const InfoSection = () => {
  const services = [
    {
      service: "In-Person Consultation",
      fee: "₹500",
      notes: "Deducted from surgery package if done within 90 days",
    },
    {
      service: "Second Opinion",
      fee: "₹700",
      notes: "Includes prior report review",
    },
  ];

  return (
    <section className="container mx-auto pt-5 pb-16 px-14 max-lg:px-6 max-sm:px-4 max-sm:pt-4 max-sm:pb-12 font-poppins">
      <h2 className="text-black text-3xl sm:text-4xl font-bold text-center mb-16 max-sm:text-2xl max-sm:mb-12">
        Fees &amp; Insurance
      </h2>

      {/* Table Header */}
      <div className="mb-8">
        <div className="flex mb-9 max-md:flex-col max-md:gap-2">
          <div className="text-[#1C274C] text-lg sm:text-2xl font-bold flex-1">
            Service
          </div>
          <div className="text-[#1C274C] text-lg sm:text-2xl font-bold flex-1">
            Fee
          </div>
          <div className="text-[#1C274C] text-lg sm:text-2xl font-bold flex-1">
            Notes
          </div>
        </div>

        {/* Table Rows */}
        {services.map((service, index) => (
          <div
            key={index}
            className="flex mb-7 max-md:flex-col max-md:gap-2"
          >
            <div className="text-[#1C274C] text-lg sm:text-2xl font-medium flex-1">
      
              {service.service}
            </div>
            <div className="text-[#1C274C] text-lg sm:text-2xl font-medium flex-1">
              {service.fee}
            </div>
            <div className="text-[#1C274C] text-lg sm:text-2xl font-medium flex-1">
              {service.notes}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#4A4A4A] mb-3" />

      {/* Footer Note */}
      <p className="text-[#1C274C] text-xs sm:text-sm text-center px-4 sm:px-12 md:px-20 lg:px-44">
        Consultation fee deducted from surgery package if you proceed. Most
        government and private insurers cover medically indicated knee/hip
        replacements.
      </p>
    </section>
  );
};

export default InfoSection;
