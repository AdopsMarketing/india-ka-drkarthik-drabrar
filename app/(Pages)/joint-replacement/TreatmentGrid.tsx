import React from "react";

const TreatmentGrid = () => {
  const treatments = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/ed0363fcd12c9f538a3adcab9a864791f0fa63bc?placeholderIfAbsent=true",
      title: "Total Knee Replacement (TKA)",
      description: "Complete joint replacement for severe arthritis",
      imageAlt: "Total knee replacement illustration",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/a0a9c23c65cbfea1d3d9c0f5fd5682a131f881fb?placeholderIfAbsent=true",
      title: "Partial Knee Replacement",
      description: "Preserves healthy bone and ligaments",
      imageAlt: "Partial knee replacement illustration",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/911bea7be49794ea1cadb8dc5103525016f350e9?placeholderIfAbsent=true",
      title: "Revision Knee Replacement",
      description: "Specialized surgery for failed implants",
      imageAlt: "Revision knee replacement illustration",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/883055c718a15d82636b8095376985c987ef03bd?placeholderIfAbsent=true",
      title: "Hip Replacement (THA)",
      description: "Restore mobility and eliminate pain",
      imageAlt: "Hip replacement illustration",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/defa096633aa4aef9cdf086d12d7de68/3d3501ba79410e352cd5b199c88ac71263a89319?placeholderIfAbsent=true",
      title: "Arthroscopy & Sports Injuries",
      description: "Minimally invasive sports medicine",
      imageAlt: "Arthroscopy illustration",
    },
  ];

  return (
    <section className="container mx-auto px-4 mt-24 md:mt-10">
      <div className="w-full">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="w-full shadow-2xl flex flex-col md:flex-row items-start md:items-center mt-10"
          >
            <img
              src={treatment.image}
              alt={treatment.imageAlt}
              width={300}
              height={300}
              className="object-cover w-full  md:w-2/5 lg:w-1/3 h-auto"
            />
            <div className="p-5 lg:p-10 flex flex-col">
              <h3 className="text-3xl font-cormorant_garamond font-bold">
                {treatment.title}
              </h3>
              <p className="text-base lg:text-xl font-poppins font-medium  mt-2">
                {treatment.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreatmentGrid;
