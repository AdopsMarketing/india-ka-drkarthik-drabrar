import React from "react";

interface HospitalCardProps {
  logo: string;
  name: string;
  type: string;
  logoAlt: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  logo,
  name,
  type,
  logoAlt,
}) => {
  return (
    <article className="flex flex-col items-center font-poppins text-[rgba(44,44,44,1)] max-md:mt-10">
      <img
        src={logo}
        alt={logoAlt}
        className="aspect-square object-contain w-20 md:w-30 max-w-full"
      />
      <h3 className="text-2xl font-semibold text-center mt-7 w-full">{name}</h3>
      <p className="text-base font-medium mt-3.5">{type}</p>
    </article>
  );
};

const HospitalLocations: React.FC = () => {
  const hospitals = [
    {
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/f07d9c30b08003310efd80fde222bc34dfcde4fa?placeholderIfAbsent=true",
      name: "SAI Hospital, Channapatna",
      type: "(full-time)",
      logoAlt: "SAI Hospital logo",
    },
    {
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/4d8275840dbffc61e1c75eb9fe409202d6563f6a?placeholderIfAbsent=true",
      name: "Vydehi Hospital, Bengaluru",
      type: "(visiting)",
      logoAlt: "Vydehi Hospital logo",
    },
    {
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/8f0bc5da7ed5620bb21fdc2fdf8d887831c1067b?placeholderIfAbsent=true",
      name: "Teleconsultant",
      type: "Apollo 24/7",
      logoAlt: "Apollo 24/7 logo",
    },
  ];

  return (
    <section className="container mx-auto bg-white mt-5 md:mt-20 px-20 pb-16 max-md:px-5 ">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
        {hospitals.map((hospital, index) => (
          <div
            key={index}
            className={`max-md:w-full max-md:ml-0 ${
              index === 0
                ? "w-[39%]"
                : index === 1
                ? "w-[39%] ml-5"
                : "w-[22%] ml-5"
            }`}
          >
            <HospitalCard {...hospital} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HospitalLocations;
