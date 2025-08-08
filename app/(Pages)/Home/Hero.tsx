import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col px-4 mt-12 max-md:mt-10">
      <div className="flex flex-col md:flex-row gap-5 w-full">
        {/* Left Image Section */}
        <div className="w-full md:w-6/12">
          <div className="relative h-[500px] md:h-[900px] overflow-hidden rounded-xl">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ee9af2b13069a0bf21a4650f87836869af8a4275?placeholderIfAbsent=true"
              alt="Medical background"
              className="absolute inset-0 w-full h-full object-contain md:object-cover"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-6/12 md:pl-5">
          <div className="flex flex-col justify-center h-full mt-8 md:mt-0">
            {/* Badge */}
            <div className="bg-blue-100 text-blue-700 text-sm flex items-center gap-2 px-4 py-2.5 rounded-lg w-fit">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0599bc20d518359c26267a4ccab6e255867cda22?placeholderIfAbsent=true"
                alt="Fellowship badge"
                className="w-8 h-8 object-cover"
              />
              <span className="font-medium">
                Fellowship-Trained Joint Replacement Specialist
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-black font-cormorant_garamond font-bold mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-tight">
              Rediscover <span className="text-cyan-400">pain-free</span>{" "}
              movement
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl font-montserrat text-black font-semibold mt-4">
              Dr Karthik M S
            </p>
            <p className="text-base sm:text-lg md:text-xl font-montserrat text-black font-semibold">
              Knee & Hip Replacement Surgeon, Orthopaedics
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2 text-base sm:text-lg md:text-xl font-montserrat text-black font-semibold">
              <span>Channapatna | Bengaluru</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d459808e0ad85a614f03898da5eff6a0dd6a81ad?placeholderIfAbsent=true"
                alt="Location icon"
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* Quote */}
            <p className="text-blue-700 font-cormorant_garamond text-lg sm:text-xl md:text-2xl font-bold mt-4">
              "Move freely, live fully."
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-8 text-white font-semibold">
              <button className="bg-blue-700 hover:bg-blue-800 font-montserrat px-6 py-3 rounded-lg transition-colors">
                Book Consultation
              </button>
              <button className="bg-green-500 hover:bg-green-600 font-montserrat px-6 py-3 rounded-lg transition-colors">
                WhatsApp Chat
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mt-12">
              <div className="bg-blue-100 flex flex-col items-center justify-center flex-1 px-4 py-3 rounded-xl">
                <p className="text-blue-700 font-poppins text-xl sm:text-2xl font-semibold">
                  1,500+
                </p>
                <p className="text-gray-700 text-base sm:text-xl font-medium">
                  Procedures
                </p>
              </div>

              <div className="bg-blue-100 flex flex-col items-center justify-center flex-1 px-4 py-3 rounded-xl">
                <p className="text-blue-700 font-poppins text-xl sm:text-2xl font-semibold">
                  98%
                </p>
                <p className="text-gray-700 text-base sm:text-xl font-medium">
                  Satisfaction
                </p>
              </div>

              <div className="bg-blue-100 flex flex-col items-center justify-center flex-1 px-4 py-3 rounded-xl">
                <p className="text-blue-700 font-poppins text-xl sm:text-2xl font-semibold">
                  15+
                </p>
                <p className="text-gray-700 text-base sm:text-xl font-medium">
                  Years Exp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paragraph Section */}
      <p className="text-gray-700 font-montserrat font-medium text-lg md:text-2xl leading-relaxed md:leading-9 mt-14 max-md:max-w-full max-md:mt-10">
        For more than a decade, <span className="font-bold">Dr Karthik</span>{" "}
        has helped farmers, teachers and athletes alike return to the lives they
        love. Fellowship-trained in joint replacements and arthroscopy, he has
        performed <span className="font-bold">1,500+ procedures</span> with a{" "}
        <span className="font-bold">98% satisfaction rate</span>. Modern
        implants today last 15+ years in over{" "}
        <span className="font-bold">90% of patients</span> — giving confidence
        that one operation can provide long-term relief.
      </p>
    </section>
  );
};

export default Hero;
