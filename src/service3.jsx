import React from "react";
import image4 from "./images/pic.png";

const Service3 = () => {
  return (
    <section className="text-gray-600 body-font  py-20">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        {/* Left Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/12 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg"
            alt="Amer 247 Service"
            src={image4}
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
    {/* Heading without Border */}
    <h2 className="text-3xl md:text-4xl font-bold text-black">
      Amer 247 provides documents <br /> pick up and drop off service
    </h2>

    {/* Orange Left Line Wrapper (Moved Down) */}
    <div className="flex flex-col justify-start border-l-8 border-[#FF512F] pl-6 max-w-[666px] min-h-[50px] space-y-6 mt-6">
      {/* List of Services */}
      <ul className="list-disc space-y-4 px-14" style={{ fontWeight: "400", fontSize: "18px", lineHeight: "28px", color: "#000000" }}>
        <li>The only Government services center operating 24 hours <br /> in the UAE.</li>
        <li>The only Government services center operating on Friday <br /> and public holidays.</li>
        <li>There are sufficient parking spaces available in the area.</li>
        <li>One-stop shop (you can finish all your Government <br /> transactions at Amer 247).</li>
        <li>Our customer happiness consultants are well trained to cater <br /> to all your needs.</li>
      </ul>
    </div>
  </div>


      </div>
    </section>
  );
};

export default Service3;
