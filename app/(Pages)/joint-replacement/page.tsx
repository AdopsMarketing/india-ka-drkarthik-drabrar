import React from "react";
import HeroSection from "./HeroSection";
import TreatmentGrid from "./TreatmentGrid";
import HospitalLocations from "../../Components/HospitalLocations/HospitalLocations";

const Page = () => {
  return (
    <main className="container mx-auto flex flex-col items-center w-full">
      <HeroSection />
      <TreatmentGrid />
      <HospitalLocations />
    </main>
  );
};

export default Page;
