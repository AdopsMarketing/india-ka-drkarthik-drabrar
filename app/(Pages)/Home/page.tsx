import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Testimonial from "./Testimonial";
import ProcessSteps from "./ProcessSteps";
import CallToAction from "./CallToAction";
import Credentials from "./Credentials";
import Hospitals from "../../Components/HospitalLocations/HospitalLocations";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
      <ProcessSteps />
      <CallToAction />
      <Credentials />
      <Hospitals />
    </>
  );
};

export default Page;
