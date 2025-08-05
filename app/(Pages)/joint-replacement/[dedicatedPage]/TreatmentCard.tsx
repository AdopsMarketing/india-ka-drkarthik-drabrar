"use client";
import React from "react";

interface TreatmentCardProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  image,
  title,
  description,
  onClick,
}) => {
  return (
    <article
      className="w-[428px] h-[354px] shadow-[0_79.051px_22.373px_0_rgba(0,0,0,0.00),0_50.712px_20.136px_0_rgba(0,0,0,0.01),0_28.339px_17.153px_0_rgba(0,0,0,0.05),0_12.678px_12.678px_0_rgba(0,0,0,0.09),0_2.983px_6.712px_0_rgba(0,0,0,0.10)] overflow-hidden cursor-pointer bg-white rounded-lg max-sm:w-full max-sm:max-w-[400px] hover:shadow-lg transition-shadow"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
    >
      <img src={image} alt={title} className="w-full h-[249px] object-cover" />
      <div className="p-[13px]">
        <h3 className="text-black text-lg font-bold mb-1 font-cormorant_garamond">{title}</h3>
        <p className="text-[#4A4A4A] text-[13px] font-medium font-poppins">{description}</p>
      </div>
    </article>
  );
};

export default TreatmentCard;
