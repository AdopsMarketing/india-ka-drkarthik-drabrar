import React, { Suspense } from "react";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import HospitalInfo from "./HospitalInfo";
import AppointmentForm from "@/app/Components/AppointmentForm/AppointmentForm";
import ProcessFlow from "./ProcessFlow";
import TestimonialSection from "./TestimonialSection";
import InfoSection from "./InfoSection";
import HelpSupport from "./HelpSupport";

const Page = () => {
  return (
    <div className="w-full relative">
      <main>
        <HeroSection />
        <BenefitsSection />
        <HospitalInfo />
        <Suspense fallback={<div>Loading form...</div>}>
          <AppointmentForm />
        </Suspense>
        <ProcessFlow />
        <TestimonialSection />
        <InfoSection />
        <HelpSupport />
      </main>
    </div>
  );
};

export default Page;
