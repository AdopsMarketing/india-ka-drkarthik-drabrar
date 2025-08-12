import { EmergencyIcon, GeneralIcon } from "@/app/Components/svgIcons/svgIcons";
import Link from "next/link";
import React from "react";


// SUPPORT CARD COMPONENT
const SupportCard: React.FC<{
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
  contact: string;
}> = ({ icon, bgColor, title, description, contact }) => {
  return (
    <article className="w-full max-w-md h-80 shadow-lg text-center bg-white px-6 py-8 rounded-2xl flex flex-col justify-between">
      <div
        className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
      <h3
        className="text-2xl sm:text-3xl font-cormorant_garamond font-bold"
        style={{ color: bgColor }}
      >
        {title}
      </h3>
      <p className="text-gray-700 text-base sm:text-lg font-montserrat font-medium">
        {description}
      </p>
      <Link href={title === "Emergency" ? `tel:${contact}` : `https://wa.me/${contact}`} className="text-gray-800 text-lg font-bold font-montserrat">
        {contact}
      </Link>
    </article>
  );
};

// HELP SUPPORT SECTION
const HelpSupport = () => {
  const supportOptions = [
    {
      icon: <EmergencyIcon />,
      bgColor: "#D95F62",
      title: "Emergency",
      description: "Severe injury? Call Vydehi Hospital, Whitefield",
      contact: "+91 8618352089 (24×7)",
    },
    {
      icon: <GeneralIcon />,
      bgColor: "#3DBE84",
      title: "General Queries",
      description: "WhatsApp for quick reply (9 AM–9 PM)",
      contact: "+91 8618352089",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-[#1C274C] mt-14 mb-20">
        Help & Support
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mb-14">
        {supportOptions.map((option, idx) => (
          <SupportCard key={idx} {...option} />
        ))}
      </div>

      <div className="px-6 py-12 sm:px-10 md:px-16 lg:px-24">
        <p className="text-black text-center text-lg sm:text-xl md:text-2xl font-normal font-poppins leading-relaxed">
          <span className="font-bold mb-2">Disclaimer:</span>
          This page provides appointment information only and does not
          constitute emergency medical advice. In case of trauma, uncontrolled
          bleeding, or sudden loss of limb function, seek immediate care at the
          nearest emergency department.
        </p>
      </div>
    </section>
  );
};

export default HelpSupport;
