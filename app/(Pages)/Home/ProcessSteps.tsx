import React from "react";

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
  benefit: string;
  iconAlt: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  icon,
  title,
  description,
  benefit,
  iconAlt,
}) => {
  return (
    <article className="bg-white font-poppins shadow-2xl rounded-xl w-full max-w-6xl mx-auto flex flex-col px-6 sm:px-8 py-8 mt-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={icon}
          alt={iconAlt}
          className="w-28 h-28 object-contain mx-auto md:mx-0"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-base sm:text-lg font-medium">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-blue-700 text-base sm:text-lg font-medium mt-4 ml-0 md:ml-36">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/959ccb57d8db3b13d3d2d4cfb132b967ac8d2afa?placeholderIfAbsent=true"
          alt="Checkmark"
          className="w-6 h-6"
        />
        <span>{benefit}</span>
      </div>
    </article>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/220b272658efe2f8327186aa455e40d6c92bf152?placeholderIfAbsent=true",
      title: "Same-day diagnosis",
      description: "Digital X-ray & comprehensive examination",
      benefit: "Complete assessment in one visit",
      iconAlt: "Diagnosis icon",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/134477fb18b954d87c6f160af726cacda61b0d5d?placeholderIfAbsent=true",
      title: "Evidence-based planning",
      description: "Personalized surgical strategy",
      benefit: "Tailored to your lifestyle needs",
      iconAlt: "Planning icon",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ed5e69c259c6a85d0711790455d811d110d9579c?placeholderIfAbsent=true",
      title: "Enhanced recovery",
      description: "Walk the next morning",
      benefit: "Advanced pain management protocols",
      iconAlt: "Recovery icon",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/69703f3f412da34687353d994822f7fb8912adc3?placeholderIfAbsent=true",
      title: "Personal rehab plan",
      description: "Video follow-ups included",
      benefit: "Continuous support until full recovery",
      iconAlt: "Rehabilitation icon",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center px-4 md:px-8 mt-20">
      <h2 className="text-black text-3xl sm:text-4xl font-poppins font-semibold text-center">
        Your path to{" "}
        <span className="text-blue-700">pain-free movement</span>
      </h2>
      <p className="text-gray-600 text-lg sm:text-xl font-montserrat font-medium text-center mt-4 max-w-3xl">
        A streamlined, patient-centered approach from diagnosis to full recovery
      </p>

      <div className="w-full mt-12">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
