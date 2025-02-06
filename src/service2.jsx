import React from "react";

const ServicesSection = () => {
  return (
    <section className="w-full h-[740px] bg-[#F9F9F9] flex flex-col items-center justify-center px-4">
      {/* Upper Container */}
      <div className="w-[900px] flex flex-col gap-2 items-start">
        <h2 className="text-4xl font-bold text-black flex items-center py-2">
          <span className="w-2 h-7 bg-black mr-2"></span> What We Do
        </h2>
        <p className="text-gray-600">Here are the services we provide</p>
      </div>

      {/* Services Grid - 5 boxes in the first row, 2 in the second */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {[
          "AMER Services",
          "Emirate Identity Authority",
          "Medical Fitness Application",
          "Health Insurance Services",
          "Entry Permits",
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md px-4 py-6 rounded-lg text-center text-gray-800 font-medium w-[200px] h-[130px] flex items-center justify-center" style={{color:"#000000",fontSize:"20px"}}
          >
            {service}
          </div>
        ))}
      </div>

      {/* Second Row with 2 Boxes */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {["Dubai Economy Services", "Company Establishment & Clearance"].map(
          (service, index) => (
            <div
              key={index}
              className="bg-white shadow-md px-4 py-6 rounded-lg text-center text-gray-800 font-medium w-[200px] h-[130px] flex items-center justify-center" style={{color:"#000000",fontSize:"20px"}}
            >
              {service}
            </div>
          )
        )}
      </div>

      {/* Bottom Button */}
      <div className="mt-24 ml-96" >
        <button className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white px-9 py-6 rounded-lg shadow-lg flex items-center" >
          See more Services <span className="ml-2 border-l-2 border-white h-5"></span>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
