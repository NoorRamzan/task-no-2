import { useState } from "react";
import firstLogo from "./images/logo1.png"; // First Logo
import secondLogo from "./images/logo2.png"; // Second Logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#F9F9F9]  z-50">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-16 py-4">
        
        {/* Left Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Vertical Text (24/7 AMER) */}
          <div className="hidden md:flex flex-col items-center text-gray-700">
            <span
              className="uppercase font-medium text-xs"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: "0.5em",
                textAlign: "right",
                fontFamily: "Saira",
              }}
            >
              AMER 24/7
            </span>
          </div>

          {/* First Logo */}
          <img src={firstLogo} alt="Logo 1" className="h-10 sm:h-12 md:h-14" />
        </div>

        {/* Center Links (Desktop Only) */}
        <nav className="hidden md:flex flex-col items-center flex-grow">
          <div className="flex space-x-4 sm:space-x-6 font-medium text-sm sm:text-base md:text-lg">
            {["Home", "Services", "About", "Contact", "Price", "News"].map((item) => (
              <a key={item} className="hover:text-gray-900 cursor-pointer">{item}</a>
            ))}
          </div>
          {/* Black Horizontal Line Under Links */}
          <div className="w-[80%] h-[2px] bg-black mt-3 md:mt-5"></div>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          {/* Buttons */}
          <button className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-md text-xs sm:text-sm md:text-base">
            UAE TOURIST VISA
          </button>
          <button className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-md text-xs sm:text-sm md:text-base">
            APPLY ONLINE
          </button>

          {/* Second Logo */}
          <img src={secondLogo} alt="Second Logo" className="h-10 sm:h-12 md:h-16" />
        </div>

        {/* Mobile Menu Button */}
        <button className=" flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-7 h-[2px] bg-black"></div>
          <div className="w-7 h-[2px] bg-black"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center space-y-3 text-sm sm:text-lg">
            {["Home", "Services", "About", "Contact", "Price", "News"].map((item) => (
              <li key={item} className="hover:text-orange-500 cursor-pointer">{item}</li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <button className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white px-5 py-2 rounded-md text-sm sm:text-base">
              UAE TOURIST VISA
            </button>
            <button className="bg-gradient-to-r from-[#FF512F] to-[#FF9669] text-white px-5 py-2 rounded-md text-sm sm:text-base">
              APPLY ONLINE
            </button>
    
          </div>
        </div>
        
      )}
    </header>
  );
};

export default Navbar;
