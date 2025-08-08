import {
  LocationIcon,
  NotificationIcon,
  ThunderIcon,
} from "@/app/Components/svgIcons/svgIcons";
import React from "react";

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <article
      className="w-full md:w-1/3 relative bg-white p-6 rounded-2xl"
      style={{
        borderRadius: "16px",
        background: "#FFF",
        boxShadow:
          "-44px 38px 16px 0 rgba(0, 0, 0, 0.00), -28px 24px 15px 0 rgba(0, 0, 0, 0.01), -16px 14px 13px 0 rgba(0, 0, 0, 0.05), -7px 6px 9px 0 rgba(0, 0, 0, 0.09), -2px 2px 5px 0 rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="w-14 h-14 relative mb-6">
        <div className="bg-[#5AB8D0] rounded-full flex justify-center items-center w-14 h-14">
          {icon}
        </div>
      </div>
      <h3 className="text-[#1A4CA3] text-2xl md:text-3xl font-cormorant_garamond font-bold mb-4">
        {title}
      </h3>
      <p className="text-[#4A4A4A] text-base md:text-lg font-montserrat font-medium leading-relaxed">
        {description}
      </p>
    </article>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ThunderIcon />,
      title: "Faster Relief",
      description:
        "Same-day diagnosis with on-site digital X-ray at Vydehi Hospital means no extra trips or waiting.",
    },
    {
      icon: <LocationIcon />,
      title: "Bengaluru working professionals",
      description:
        "Perfect for busy professionals who need convenient appointment times",
    },
    {
      icon: <NotificationIcon />,
      title: "Evening visits without skipping work",
      description:
        "Schedule your consultation after work hours",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 sm:px-10 lg:px-16">
      <h2 className="text-black text-center font-poppins font-bold text-2xl sm:text-3xl md:text-4xl mb-12">
        Why Book at Vydehi Hospital ?{" "}
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
