import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconAlt,
}) => {
  return (
    <article className="bg-white shadow-2xl flex flex-col items-center text-center w-full px-5 py-20 rounded-2xl">
      <img
        src={icon}
        alt={iconAlt}
        className="w-32 h-32 object-contain mb-8"
      />
      <h3 className="text-gray-800 text-xl sm:text-2xl font-poppins font-semibold mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-base sm:text-lg font-poppins font-medium whitespace-pre-line">
        {description}
      </p>
    </article>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b58db2d452c603c034e63b8118ff0064f274220e?placeholderIfAbsent=true",
      title: "Personal surgeon contact",
      description:
        "From first visit to final rehab\nDedicated care throughout your journey",
      iconAlt: "Personal contact icon",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7a9041593b158a55d0e88611b800dedbb7d5f93c?placeholderIfAbsent=true",
      title: "Only full-time specialist",
      description:
        "Within 40 km of Channapatna\nLocal expertise, world-class care",
      iconAlt: "Specialist icon",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b93c1d28f12a7394694e7eef8b6bf093711f3a1d?placeholderIfAbsent=true",
      title: "Bilingual care team",
      description:
        "Kannada | English\nYou never feel lost in translation",
      iconAlt: "Bilingual care icon",
    },
  ];

  return (
    <section className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold text-center font-poppins mt-24 max-md:mt-10">
        Why choose{" "}
        <span className="text-blue-700">Dr Karthik</span>, not just the hospital
      </h2>

      <p className="text-gray-600 text-lg sm:text-xl font-montserrat font-medium text-center max-w-2xl mt-4">
        Personal care that goes beyond surgery — from your first consultation to complete recovery.
      </p>

      <div className="w-full mt-14 max-md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
