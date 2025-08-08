import React from "react";

const InfoSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 py-10">
      <div className="flex flex-col md:flex-row gap-10 md:gap-40">
        {/* What to Bring */}
        <div className="flex-1 font-poppins">
          <h2 className="text-[#1C274C] text-2xl font-bold mb-10">
            What to Bring
          </h2>
          <div className="flex flex-col gap-6">
            {/* Item 1 */}
            <div className="flex items-center gap-6">
              {/* ID Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.92 8.4V19.6C3.92 20.8371 4.92288 21.84 6.16 21.84H21.84C23.0771 21.84 24.08 20.8371 24.08 19.6V8.4C24.08 7.16288 23.0771 6.16 21.84 6.16H6.16C4.92288 6.16 3.92 7.16288 3.92 8.4Z"
                  stroke="#1A4CA3"
                  strokeWidth="1.68"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.36 11.76H20.72M17.36 15.12H20.72"
                  stroke="#1A4CA3"
                  strokeWidth="1.68"
                  strokeLinecap="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.88 11.76C12.88 12.9972 11.8771 14 10.64 14C9.40288 14 8.4 12.9972 8.4 11.76C8.4 10.5229 9.40288 9.52 10.64 9.52C11.234 9.52 11.8037 9.756 12.2238 10.1761C12.6439 10.5962 12.88 11.1659 12.88 11.76Z"
                  stroke="#1A4CA3"
                  strokeWidth="1.68"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.16 18.48C9.277 14.9665 12.9382 16.071 15.12 18.48"
                  stroke="#1A4CA3"
                  strokeWidth="1.68"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[#1C274C] text-lg">Government ID</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/841b69c577c899810fe3b3ee19876e451a2b567b?width=56"
                alt="X-ray"
                className="w-7 h-7"
              />
              <span className="text-[#1C274C] text-lg">
                Past X-rays / MRI / blood reports
              </span>
            </div>

            {/* Item 3 - Meds */}
            <div className="flex items-center gap-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.598 1.28C19.598 0.573344 19.0246 0 18.3179 0H9.68243C8.97575 0 8.4024 0.573344 8.4024 1.28V4.02719H19.598V1.28Z"
                  fill="#1A4CA3"
                />
                <path
                  d="M20.3 8.88346C19.1643 8.3152 18.785 6.98903 18.785 5.85257V5.53128H9.21637V5.85257C9.21637 6.98903 8.83702 8.3152 7.70137 8.88346C6.34441 9.56109 5.77533 10.5711 5.77533 12.9833V23.2629C5.77533 25.588 7.41169 27.9993 10.6852 27.9993H17.3161C20.5896 27.9993 22.2259 25.5879 22.2259 23.2629V12.9833C22.2259 10.5711 21.6568 9.56109 20.3 8.88346ZM19.5326 22.2418H8.46875V13.2089H19.5326V22.2418Z"
                  fill="#1A4CA3"
                />
                <path
                  d="M13.0542 21.1596H14.9469V18.9122H17.1934V17.0213H14.9469V14.7739H13.0542V17.0213H10.8086V18.9122H13.0542V21.1596Z"
                  fill="#1A4CA3"
                />
              </svg>
              <span className="text-[#1C274C] text-lg">
                List of current medicines & allergies
              </span>
            </div>

            {/* Item 4 - Insurance */}
            <div className="flex items-center gap-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.495 4.57314C19.6017 4.38647 16.8017 3.73314 14.0017 2.7998C11.295 3.73314 8.495 4.38647 5.5083 4.57314C5.04164 4.66647 4.6683 5.0398 4.6683 5.50647V15.8665C4.6683 18.6665 6.25497 21.2798 8.77497 22.5865L13.535 25.0131C13.6283 25.1065 13.815 25.1065 13.9083 25.1065C14.095 25.1065 14.1883 25.1065 14.2816 25.0131L19.0416 22.5865C21.5616 21.2798 23.1483 18.7598 23.1483 15.8665V5.50647C23.335 5.0398 22.9616 4.66647 22.495 4.57314ZM18.3883 20.9065L14.0017 23.1465V13.9998H6.535L6.535 6.43981C9.055 6.15981 11.575 5.5998 14.0017 4.85314V13.9998H21.4683V15.9598C21.4683 18.0131 20.2549 19.9731 18.3883 20.9065Z"
                  fill="#1A4CA3"
                />
              </svg>
              <span className="text-[#1C274C] text-lg">
                Insurance card or scheme details
              </span>
            </div>
          </div>
        </div>

        {/* Fees & Insurance */}
        <div className="flex-1 font-poppins">
          <h2 className="text-[#1C274C] text-2xl font-bold mb-10">
            Fees & Insurance
          </h2>
          <div className="flex flex-col">
            <div className="flex justify-between py-3">
              <span className="text-[#1C274C] text-lg">
                In-Person Consultation
              </span>
              <span className="text-[#1C274C] text-lg">₹ 500</span>
            </div>

            <div className="w-full h-px bg-[#4A4A4A] my-2" />
            <p className="text-[#1C274C] text-sm mt-3">
              Consultation fee deducted from surgery package if you proceed.
              Most government and private insurers cover medically indicated
              knee/hip replacements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
