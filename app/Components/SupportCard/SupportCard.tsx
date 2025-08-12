import React from "react";
import { Link } from "lucide-react";

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
      <Link href={`tel:${contact}`} className="text-blue-500 hover:underline">
        {contact}
      </Link>
    </article>
  );
};

export default SupportCard;
