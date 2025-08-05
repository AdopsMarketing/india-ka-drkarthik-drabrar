import React from "react";

const Credentials: React.FC = () => {
  return (
    <section className="w-full px-6 py-20 bg-white text-gray-800 font-poppins">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-12">
        Excellence in{" "}
        <span className="text-blue-700">orthopedic surgery</span>
      </h2>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education & Training */}
        <article className="bg-white shadow-2xl rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">Education & Training</h3>

          {/* MBBS */}
          <div className="flex gap-4 items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/17bc470f23b72721db0744ec50c474b3d6b6e1d0?placeholderIfAbsent=true"
              alt="MBBS"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h4 className="text-xl font-semibold">MBBS</h4>
              <p className="text-lg text-gray-600">Bangalore Medical College</p>
            </div>
          </div>

          {/* MS */}
          <div className="pl-16">
            <h4 className="text-xl font-semibold">MS (Orthopedics)</h4>
            <p className="text-lg text-gray-600">KIMS</p>
          </div>

          {/* Fellowship */}
          <div className="flex gap-4 items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/56d470f84f1e845e79f84a30f6c71ecfbae3022b?placeholderIfAbsent=true"
              alt="Fellowship"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h4 className="text-xl font-semibold">AO-certified Fellowship</h4>
              <p className="text-lg text-gray-600">Adult Reconstruction</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-blue-50 rounded-xl p-4 space-y-4 mt-4">
            <div className="flex gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bfc0eefbde421de8bc24f5e1ad92ca53d5091d44?placeholderIfAbsent=true"
                alt="Achievement"
                className="w-10 h-10 object-contain"
              />
              <p className="text-base font-medium text-gray-700">
                Presented papers at AAOS and IOACON
              </p>
            </div>
            <div className="flex gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bfc0eefbde421de8bc24f5e1ad92ca53d5091d44?placeholderIfAbsent=true"
                alt="Trainer"
                className="w-10 h-10 object-contain"
              />
              <p className="text-base font-medium text-gray-700">
                Trains local surgeons in minimally invasive knee techniques
              </p>
            </div>
          </div>
        </article>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {/* Surgical Stats */}
          <article className="bg-white shadow-2xl rounded-xl p-6">
            <div className="flex gap-4 items-center text-2xl font-semibold">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fe9e42c5fd2eac3b94700bd060d3cc8d618828e8?placeholderIfAbsent=true"
                alt="Surgical volume"
                className="w-14 h-14 object-contain"
              />
              Surgical Volume
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
                <div className="text-blue-700 text-xl font-bold">1,100+</div>
                <div className="text-sm mt-1">Total Knee Arthroplasties</div>
              </div>
              <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
                <div className="text-blue-700 text-xl font-bold">200+</div>
                <div className="text-sm mt-1">Partial Knee Replacements</div>
              </div>
              <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
                <div className="text-blue-700 text-xl font-bold">150+</div>
                <div className="text-sm mt-1">Total Hip Arthroplasties</div>
              </div>
              <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
                <div className="text-blue-700 text-xl font-bold">75+</div>
                <div className="text-sm mt-1">Revision Surgeries</div>
              </div>
            </div>
          </article>

          {/* Philosophy */}
          <article className="bg-blue-700 text-white rounded-xl pl-5 pb-5 relative shadow-2xl">
            <div className="bg-white text-blue-700 rounded-lg p-6 ">
              <h3 className="text-2xl font-semibold">Philosophy</h3>
              <blockquote className="mt-3 text-xl font-bold">
                "I treat X-rays, but I operate on people."
              </blockquote>
              <p className="text-base mt-2 text-gray-700">
                Every treatment decision balances medical evidence with your
                lifestyle, family commitments, and financial reality.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Languages */}
      <article className="mt-10 mx-auto w-full max-w-xl bg-white shadow-2xl rounded-xl p-6">
        <div className="flex items-center gap-4 text-2xl font-semibold text-gray-800">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/430e9a3f531a12806cdc95d237e9f7e09ec55a82?placeholderIfAbsent=true"
            alt="Languages icon"
            className="w-14 h-14 object-contain"
          />
          Languages
        </div>

        <div className="flex gap-4 flex-wrap mt-4">
          <div className="bg-blue-50 text-blue-700 font-semibold px-6 py-2 rounded-lg">
            ಕನ್ನಡ
          </div>
          <div className="bg-blue-50 text-blue-700 font-semibold px-6 py-2 rounded-lg">
            English
          </div>
        </div>
      </article>
    </section>
  );
};

export default Credentials;
