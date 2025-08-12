import React, { Suspense } from "react";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import AppointmentForm from "@/app/Components/AppointmentForm/AppointmentForm";
import ProcessFlow from "./ProcessFlow";
import InfoSection from "./InfoSection";
import HelpSupport from "@/app/Components/HelpSupport/HelpSupport";
import BookingInfo from "./BookingInfo";

const Page = () => {
  return (
    <div className="w-full relative">
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProcessFlow />
        <Suspense fallback={<div>Loading form...</div>}>
          <AppointmentForm />
        </Suspense>
        <BookingInfo />
        <InfoSection />
        <HelpSupport />
      </main>
    </div>
  );
};

export default Page;
