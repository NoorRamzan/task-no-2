import React from 'react';
import untiy from "./images/Untitled design 1.png"

function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={untiy}
            />
          </div>

          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-left">
  {/* Heading */}
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
    About Us
  </h1>

  {/* Subtext */}
  <p className="mb-4 text-gray-600">
    We understand the challenges that can come with paperwork, long queues, and confusing processes.
  </p>

  {/* Vertical Line + Additional Text */}
  <div className="flex items-start">
    <span className="w-5 h-20 bg-black mr-4"></span>
    <p className="leading-relaxed text-gray-700">
      Provides services ranging from issuing entry permits, issuing and renewals of a residency visa, visa cancellation, and other related services provided by other government institutions and departments.
    </p>
  </div>

  {/* Button */}
  <div className="mt-6">
    <button className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
      Know more about Amer 24/7 <span className="ml-2 border-l-2 border-white h-5"></span>
    </button>
  </div>
</div>

          
        </div>
      </section>
    </div>
  );
}

export default About;
