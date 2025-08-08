"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import HospitalInfo from "./HospitalInfo";
import AppointmentForm from "../../../Components/AppointmentForm/AppointmentForm";
import ProcessFlow from "./ProcessFlow";
import TestimonialSection from "./TestimonialSection";
import InfoSection from "./InfoSection";
import HelpSupport from "./HelpSupport";

const Page = () => {

  return (
    <>
      <div className="w-full relative ">
        <main>
          <HeroSection />
          <BenefitsSection />
          <HospitalInfo />
          <AppointmentForm />
          <ProcessFlow />
          <InfoSection />

          <TestimonialSection />
          <HelpSupport />
        </main>
      </div>
    </>
  );
};

export default Page;
