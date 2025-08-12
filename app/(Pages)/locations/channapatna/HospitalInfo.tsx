import  Link  from "next/link";
import React from "react";

const HospitalInfo = () => {
  return (
    <section
      className="w-full flex justify-center items-center"
      style={{
        background: "#FFF",
        boxShadow:
          "-281px 0 79px 0 rgba(0, 0, 0, 0.00), -180px 0 72px 0 rgba(0, 0, 0, 0.01), -101px 0 61px 0 rgba(0, 0, 0, 0.05), -45px 0 45px 0 rgba(0, 0, 0, 0.09), -11px 0 25px 0 rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="container mx-auto w-full md:w-1/3 bg-white px-6 py-8 sm:px-10 md:px-16 md:py-10 ">
        <div className="flex-1">
          <h2 className="text-black font-poppins font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
            SAI Hospital, Channapatna
          </h2>

          {/* Location */}
          <div className="flex items-center gap-4 mb-2 py-2">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9962 0.933838C9.31189 0.933838 4.68555 5.56202 4.68555 11.2463C4.68554 21.2483 14.4158 28.8519 14.4158 28.8519C14.7576 29.1242 15.2422 29.1242 15.584 28.8519C15.584 28.8519 25.3161 21.2483 25.316 11.2463C25.316 5.56202 20.6805 0.933838 14.9962 0.933838ZM14.9962 6.56067C17.5739 6.56067 19.6892 8.66862 19.6892 11.2463C19.6892 13.8241 17.574 15.9375 14.9962 15.9375C12.4185 15.9375 10.3105 13.8241 10.3105 11.2463C10.3106 8.66862 12.4185 6.56067 14.9962 6.56067Z"
                fill="#1A4CA3"
              />
            </svg>
            <h3 className="text-[#4A4A4A] text-xl font-montserrat font-bold">
              Location
            </h3>
          </div>
          <address className="text-[#4A4A4A] text-base md:text-lg font-medium font-montserrat not-italic mb-8 ml-10">
            2 km from KSRTC Bus Stand, Bangalore–Mysore Hwy Main OPD Tower, 3rd
            Floor
          </address>

          {/* Hours */}
          <div className="flex items-center gap-4 mb-2 py-2">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10V15L18.75 18.75"
                stroke="#1A4CA3"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z"
                stroke="#1A4CA3"
                strokeWidth="2.5"
              />
            </svg>
            <h3 className="text-[#4A4A4A] text-xl font-montserrat font-bold">
              Hours
            </h3>
          </div>
          <p className="text-[#4A4A4A] text-base md:text-lg font-medium font-montserrat mb-8 ml-10">
            Monday–Saturday: 9:30 AM–9:00 PM
          </p>

          {/* Contact */}
          <div className="flex items-center gap-4 mb-2 py-2">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_128_712)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.4606 25.9922C28.5346 28.8062 24.9066 30.2096 22.3146 29.9756C18.7746 29.6556 14.9226 27.778 11.9986 25.71C7.7006 22.67 3.67459 17.9676 1.32859 12.9776C-0.329409 9.45159 -0.701404 5.1164 1.7646 1.9024C2.6766 0.714399 3.66259 0.0799147 5.14459 0.00591466C7.20059 -0.0940853 7.4886 1.08212 8.1946 2.91412C8.7206 4.28412 9.42259 5.68162 9.81459 7.10162C10.5486 9.75162 7.98259 9.86238 7.65859 12.0284C7.45659 13.3944 9.1126 15.2263 9.8606 16.2003C11.3266 18.1082 13.0886 19.7539 15.0766 21.0059C16.2146 21.7239 18.0526 23.0178 19.3566 22.3038C21.3646 21.2038 21.1746 17.8179 23.9826 18.9639C25.4366 19.5559 26.8446 20.4103 28.2326 21.1583C30.3786 22.3123 30.2786 23.5082 29.4606 25.9922C30.0726 24.1362 28.8486 27.8482 29.4606 25.9922Z"
                  fill="#1A4CA3"
                />
              </g>
              <defs>
                <clipPath id="clip0_128_712">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-[#4A4A4A] text-xl font-montserrat font-bold">
              Contact
            </h3>
          </div>
          <Link href={`tel:+918618352089`}>
            <p className="text-[#4A4A4A] text-base md:text-lg font-medium font-montserrat mb-8 ml-10">
              +91 8618352089
            </p>
          </Link>

          {/* Ideal For Box */}
          <div className="bg-[#EDF4F7]  mt-10 px-6 py-6 rounded-lg">
            <h4 className="text-black text-xl font-medium mb-3">Ideal For</h4>
            <p className="text-[#4A4A4A] text-base md:text-lg font-medium">
              Local & rural patients who want full diagnostic work-up the same
              day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalInfo;
