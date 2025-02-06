import React from "react";
import bottom from "./images/Group 1.png"; // Bottom Left Image
import right from "./images/Group 3.png"; // Right Image
import left from "./images/Frame 45 (1).png"; // Top Left Image

function Hero() {
  return (
    <section className="bg-[#F9F9F9] text-gray-600 body-font py-8 md:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5">

        {/* Left Side (Two Images) */}
        <div className="lg:w-1/2 flex flex-col gap-5 lg:gap-10 items-center lg:items-start lg:mt-16 relative">
          {/* Top Left Image */}
          <img 
            className="w-full sm:w-[480px] md:w-[540px] lg:w-[480px] h-auto object-cover rounded-lg bg-[#F9F9F9] ml-16"
            src={left} 
            alt="Top Left"
          />

          {/* Bottom Left Image */}
          <img 
            className="w-[250px] sm:w-[290px] h-[200px] sm:h-[240px] object-cover rounded-lg mt-16 sm:mt-24 lg:absolute sm:left-[-20px] sm:left-[-50px] lg:top-[250px] sm:top-[320px] lg:mt-0"
            src={bottom} 
            alt="Bottom Left"
          />
        </div>

        {/* Right Side (Single Image) */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-24">
          <img 
            className="w-full sm:w-[400px] lg:w-[657px] h-auto object-cover rounded-lg bg-[#F9F9F9]"
            src={right} 
            alt="Right"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
