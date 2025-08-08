import React from "react";

interface StepNumberProps {
  number: number;
  className?: string;
}

const StepNumber: React.FC<StepNumberProps> = ({ number, className = "" }) => {
  return (
    <div
      className={`bg-[#1A4CA3] flex w-20 h-20 rounded-full items-center justify-center text-white text-3xl font-montserrat font-semibold ${className}`}
      role="img"
      aria-label={`Step ${number}`}
    >
      {number}
    </div>
  );
};

interface StepIconProps {
  src: string;
  alt: string;
  className?: string;
}

const StepIcon: React.FC<StepIconProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`bg-[#EDF4F7] w-36 h-36 rounded-full flex items-center justify-center px-6 max-md:px-4 ${className}`}>
      <img src={src} alt={alt} className="w-full aspect-square object-contain" />
    </div>
  );
};

interface ProcessStepProps {
  stepNumber: number;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  iconSrc,
  iconAlt,
  title,
  description,
  className = "",
}) => {
  return (
    <article className={`flex flex-col items-center ${className}`}>
      <div className="flex flex-col items-center mt-6 md:mt-0">
        <StepNumber number={stepNumber} />
        <StepIcon src={iconSrc} alt={iconAlt} className="mt-6" />
        <h3 className="text-[#2C2C2C] text-xl md:text-2xl font-poppins font-semibold text-center mt-6">
          {title}
        </h3>
        <p className="text-[#4A4A4A] text-base md:text-lg font-poppins font-medium text-center mt-2">
          {description}
        </p>
      </div>
    </article>
  );
};

const processSteps = [
  {
    stepNumber: 1,
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a1ccb4f80842eac52890bedfd0d9e016342e183b?placeholderIfAbsent=true",
    iconAlt: "Medical examination icon",
    title: "Detailed Examination",
    description: "Comprehensive history & knee/hip examination (15 minutes)",
  },
  {
    stepNumber: 2,
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/4b7b3544aafc02730bc291555a4dd8682e54409d?placeholderIfAbsent=true",
    iconAlt: "X-ray machine icon",
    title: "Digital X-Ray",
    description: "On-site digital X-ray & report review if needed",
  },
  {
    stepNumber: 3,
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/ed9201000ff9f79f979f8a2e43025126e171b590?placeholderIfAbsent=true",
    iconAlt: "Treatment plan icon",
    title: "Treatment Plan",
    description: "Personalized plan explained in Kannada + English",
  },
  {
    stepNumber: 4,
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/1218375d2d067f223a5b5d0600c253b622c67d3c?placeholderIfAbsent=true",
    iconAlt: "Quote and roadmap icon",
    title: "Quote & Roadmap",
    description: "Exact costs and recovery timeline before you decide",
  },
];

const ProcessFlow: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center px-6 py-10 md:px-10 lg:px-20">
      <header className="text-center mb-14 max-md:mb-10">
        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
          What Happens During Your First Visit?
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-center justify-center w-full">
        {processSteps.map((step, index) => (
          <React.Fragment key={step.stepNumber}>
            <ProcessStep {...step} />
            {index < processSteps.length - 1 && (
              <div className="hidden md:block w-20 lg:w-28">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1324 8"
                  fill="none"
                  className="w-full h-2"
                >
                  <path
                    d="M4 4L1320 3.99988"
                    stroke="#1A4CA3"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <footer className="text-center mt-16 md:mt-20">
        <div className="text-black text-lg md:text-2xl font-poppins font-medium mb-3">
          Average time in clinic: 40 minutes
        </div>
        <div className="text-black text-base md:text-xl font-montserrat font-medium">
          Bring a family member if possible; two pairs of ears remember more.
        </div>
      </footer>
    </section>
  );
};

export default ProcessFlow;
