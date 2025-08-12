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



interface ProcessStepProps {
  stepNumber: number;
  iconSrc: React.ReactNode;
  iconAlt?: string;
  description: string;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  iconSrc,
  description,
  className = "",
}) => {
  return (
    <article className={`flex flex-col items-center ${className}`}>
      <div className="flex flex-col items-center mt-6 md:mt-0">
        <StepNumber number={stepNumber} />
        <div className={`bg-[#EDF4F7] w-36 h-36 rounded-full flex items-center justify-center mt-3 px-6 max-md:px-4 ${className}`}>
          {iconSrc}
        </div>
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
    iconSrc: <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
      <path opacity="0.5" d="M7.5 45C7.5 27.3223 7.5 18.4835 12.9918 12.9918C18.4835 7.5 27.3223 7.5 45 7.5C62.6775 7.5 71.5166 7.5 77.0081 12.9918C82.5 18.4835 82.5 27.3223 82.5 45C82.5 62.6775 82.5 71.5166 77.0081 77.0081C71.5166 82.5 62.6775 82.5 45 82.5C27.3223 82.5 18.4835 82.5 12.9918 77.0081C7.5 71.5166 7.5 62.6775 7.5 45Z" fill="#1A4CA3" />
      <path d="M30 29.0625C28.4467 29.0625 27.1875 27.8033 27.1875 26.25C27.1875 24.6967 28.4467 23.4375 30 23.4375H60C61.5532 23.4375 62.8125 24.6967 62.8125 26.25C62.8125 27.8033 61.5532 29.0625 60 29.0625H30Z" fill="#1A4CA3" />
      <path d="M47.8125 63.75C47.8125 65.3032 46.5532 66.5625 45 66.5625C43.4467 66.5625 42.1875 65.3032 42.1875 63.75V44.2901L35.7387 50.7386C34.6404 51.837 32.8596 51.837 31.7613 50.7386C30.6629 49.6403 30.6629 47.8597 31.7613 46.7614L43.0114 35.5113C43.5386 34.9838 44.2541 34.6875 45 34.6875C45.7459 34.6875 46.4614 34.9838 46.9886 35.5113L58.2386 46.7614C59.337 47.8597 59.337 49.6403 58.2386 50.7386C57.1402 51.837 55.3597 51.837 54.2614 50.7386L47.8125 44.2901V63.75Z" fill="#1A4CA3" />
    </svg>,
    iconAlt: "Medical examination icon",
    description: "Submit your complaint + upload old reports",
  },
  {
    stepNumber: 2,
    iconSrc:
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
        <path d="M54.8438 37.1784L74.0925 26.1028C76.6406 24.6094 78.75 25.6641 78.75 28.7409V61.4362C78.75 64.4259 76.6406 65.655 74.0925 64.1616L54.8438 52.9987V61.2619C54.8438 64.3387 52.3828 66.7997 49.3059 66.7997H16.6106C13.6209 66.7997 11.25 64.3387 11.25 61.2619V28.6537C11.25 25.5769 13.6237 23.2031 16.6106 23.2031H49.3059C52.3828 23.2031 54.8438 25.5769 54.8438 28.6537V37.1784Z" fill="#1A4CA3" />
      </svg>,
    iconAlt: "X-ray machine icon",
    description: "Video consult with Dr. Karthik",
  },
  {
    stepNumber: 3,
    iconSrc:
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
        <path d="M73.125 2.8125H16.875C13.7812 2.8125 11.25 5.34375 11.25 8.4375V81.5625C11.25 84.6562 13.7812 87.1875 16.875 87.1875H73.125C76.2188 87.1875 78.75 84.6562 78.75 81.5625V8.4375C78.75 5.34375 76.2188 2.8125 73.125 2.8125ZM28.125 64.6875C26.5725 64.6875 25.3125 63.4275 25.3125 61.875C25.3125 60.3225 26.5725 59.0625 28.125 59.0625C29.6775 59.0625 30.9375 60.3225 30.9375 61.875C30.9375 63.4275 29.6775 64.6875 28.125 64.6875ZM28.125 53.4375C26.5725 53.4375 25.3125 52.1775 25.3125 50.625C25.3125 49.0725 26.5725 47.8125 28.125 47.8125C29.6775 47.8125 30.9375 49.0725 30.9375 50.625C30.9375 52.1775 29.6775 53.4375 28.125 53.4375ZM28.125 42.1875C26.5725 42.1875 25.3125 40.9275 25.3125 39.375C25.3125 37.8225 26.5725 36.5625 28.125 36.5625C29.6775 36.5625 30.9375 37.8225 30.9375 39.375C30.9375 40.9275 29.6775 42.1875 28.125 42.1875ZM28.125 30.9375C26.5725 30.9375 25.3125 29.6775 25.3125 28.125C25.3125 26.5725 26.5725 25.3125 28.125 25.3125C29.6775 25.3125 30.9375 26.5725 30.9375 28.125C30.9375 29.6775 29.6775 30.9375 28.125 30.9375ZM61.875 64.6875H39.375C37.8225 64.6875 36.5625 63.4275 36.5625 61.875C36.5625 60.3225 37.8225 59.0625 39.375 59.0625H61.875C63.4275 59.0625 64.6875 60.3225 64.6875 61.875C64.6875 63.4275 63.4275 64.6875 61.875 64.6875ZM61.875 53.4375H39.375C37.8225 53.4375 36.5625 52.1775 36.5625 50.625C36.5625 49.0725 37.8225 47.8125 39.375 47.8125H61.875C63.4275 47.8125 64.6875 49.0725 64.6875 50.625C64.6875 52.1775 63.4275 53.4375 61.875 53.4375ZM61.875 42.1875H39.375C37.8225 42.1875 36.5625 40.9275 36.5625 39.375C36.5625 37.8225 37.8225 36.5625 39.375 36.5625H61.875C63.4275 36.5625 64.6875 37.8225 64.6875 39.375C64.6875 40.9275 63.4275 42.1875 61.875 42.1875ZM61.875 30.9375H39.375C37.8225 30.9375 36.5625 29.6775 36.5625 28.125C36.5625 26.5725 37.8225 25.3125 39.375 25.3125H61.875C63.4275 25.3125 64.6875 26.5725 64.6875 28.125C64.6875 29.6775 63.4275 30.9375 61.875 30.9375Z" fill="#1A4CA3" />
      </svg>,
    description: "PDF report with treatment or surgery advice",
  },
  {
    stepNumber: 4,
    iconSrc:
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
        <path d="M26.026 7.50012C27.5855 7.50012 28.8497 8.71591 28.8497 10.2156V15.6934C31.3544 15.6467 34.1619 15.6467 37.3207 15.6467H52.3804C55.539 15.6467 58.3466 15.6467 60.8512 15.6934V10.2156C60.8512 8.71591 62.1154 7.50012 63.675 7.50012C65.2342 7.50012 66.4987 8.71591 66.4987 10.2156V15.9336C71.9175 16.3509 75.4751 17.3751 78.0885 19.8886C80.7022 22.4021 81.7672 25.8232 82.2011 31.0346L82.5 33.7501H10.9671H7.5V31.0346C7.93391 25.8232 8.99887 22.4021 11.6124 19.8886C14.226 17.3751 17.7835 16.3509 23.2024 15.9336V10.2156C23.2024 8.71591 24.4666 7.50012 26.026 7.50012Z" fill="#1A4CA3" />
        <path opacity="0.5" d="M82.4993 52.5004V45.0004C82.4993 41.8538 82.4873 36.2448 82.4389 33.75H7.53558C7.48717 36.2448 7.49943 41.8538 7.49943 45.0004V52.5004C7.49943 66.6424 7.49943 73.7134 11.8928 78.1069C16.2862 82.5004 23.3573 82.5004 37.4994 82.5004H52.4993C66.6417 82.5004 73.7127 82.5004 78.1062 78.1069C82.4993 73.7134 82.4993 66.6424 82.4993 52.5004Z" fill="#1A4CA3" />
      </svg>,
    description: "Follow-up options (in-person or digital)",
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
