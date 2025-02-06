import React from "react";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";

import card4 from "./images/card4.png";


function Services() {
  return (
    <section className="py-16 px-5">
    <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8">
      {/* Left Side Content */}
      <div className="lg:w-auto mb-10 px-24" style={{ paddingRight: "0rem" }}>
        <h2 className="text-4xl font-bold flex items-center mb-4">
          Who We Are
        </h2>
  
        {/* Flex container to align vertical line & text */}
        <div className="flex items-start px-1">
          {/* Vertical Line */}
          <span className="w-9 h-36 bg-black mr-8 inline-block"></span>
  
          {/* Text */}
          <p
            className="text-gray-600"
            style={{
              fontFamily: "Saira",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "30px",
              textAlign: "left",
              textDecorationSkipInk: "none"
            }}
          >
            Amer247 Center was established in 2017 in collaboration with the 
            General Directorate of Residency and Foreigners Affairs, and the 
            experience was a direct application of the strategy of the Federal 
            Government advocated by His Highness Sheikh Mohammed bin Rashid 
            Al Maktoum, Prime Minister and Ruler of Dubai.
          </p>
        </div>
      </div>
   
  

        {/* Right Side - Immigration Card & Other Cards */}
        <div className="lg:w-1/2 flex flex-col px-4" style={{
    paddingRight: "10rem",
}}> 
{/* Reduced gap */}
          {/* Immigration Services Card */}
          <div className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white p-6 rounded-[8px]  lg:w-[320px] h-[200px] shadow-lg ml-10 flex flex-col items-center justify-center text-center">
  <img src={card1} className="w-20 h-18 mb-4" alt="Card 1" />
  <h3 className="text-lg font-semibold">Immigration Services</h3>
</div>

        </div>
      </div>

      {/* Downside Three Cards */}
      <div className="flex justify-center ">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 w-auto gap-11">
    {/* Card 1 */}
    <div className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white p-12 rounded-[8px]  lg:w-[320px] h-[200px] shadow-lg ml-10 flex flex-col items-center justify-center text-center">
      <img src={card2} className="w-20 h-18 mb-4" />
      <h3 className="text-lg font-semibold">Immigration Services</h3>
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white p-4 rounded-[8px]  lg:w-[320px] h-[200px] shadow-lg ml-10 flex flex-col items-center justify-center text-center">
      <img src={card3} className="w-20 h-18 mb-4" />
      <h3 className="text-lg font-semibold">Medical Test Appointments</h3>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white p-4 rounded-[8px]  lg:w-[320px] h-[200px] shadow-lg ml-10 flex flex-col items-center justify-center text-center">
      <img src={card4} className="w-20 h-18 mb-4" />
      <h3 className="text-lg font-semibold">Emirates Identity Authority</h3>
    </div>
  </div>
</div>




    </section>
  );
}

export default Services;
