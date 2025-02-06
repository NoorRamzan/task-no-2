import React from "react";
import logo from "./images/logo1.png"; // First Logo
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import visa1 from "./images/visa1.png";
import visa2 from "./images/visa2.png";
import visa3 from "./images/visa3.png";


const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] py-16 px-28">
      <div className="container mx-auto px-5 max-w-[1440px]">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Section (Amer 24/7 Info) */}
          <div>
            <img src={logo} alt="Amer 24/7" className="h-12 mb-4" />
            <p className=" text-sm leading-6 " style={{ fontFamily: "saira",
  fontSize: "16px",    
  fontWeight: "500",   
  lineHeight: "28px", 
  color:" #4D4D4D",
}}>

              We are open 24 hrs all days.
              <br />
              We take pride in simplifying visa and immigration application procedures and thus making your life easier.
              <br />
              The only Amer center to operate 24 hours every day.
            </p>
            {/* Social Icons */}
            
            <div className="flex space-x-4 mt-4 " style={{color:"#000000"}}>
            <span className="w-1 h-7 bg-black mr-1"></span>
              <FaFacebookF size={25} />
              <FaInstagram size={25} />
              <FaLinkedinIn size={25} />
              <FaYoutube size={25} />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-3xl  mb-3 " style={{
                fontSize:"30px", fontWeight:"500" ,
            }}>Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-700" style={{ fontFamily: "saira",
  fontSize: "16px",    
  fontWeight: "500",   
  lineHeight: "28px", 
  color:" #4D4D4D",
}}>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
              <li>Careers</li>
              <li>Covid Testing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
  <h3 className="text-3xl mb-3" style={{ fontSize: "30px", fontWeight: "500" }}>
    Contact Info
  </h3>
  <ul className="space-y-2 text-sm text-gray-700" style={{ fontFamily: "saira",
  fontSize: "16px",    
  fontWeight: "500",   
  lineHeight: "28px", 
  color:" #4D4D4D",
}}>
    <li className="flex items-center">
      <span className="w-1 h-7 bg-black mr-2 inline-block"></span>
      <strong>E:</strong> info@amer247.com
    </li>
    <li className="flex items-center">
      <span className="w-1 h-7 bg-black mr-2 inline-block"></span>
      <strong>P:</strong> +971 4 2300500
    </li>
    <li className="flex items-center">
      <span className="w-1 h-7 bg-black mr-2 inline-block"></span>
      <strong>F:</strong> +971 4 2300510
    </li>
  </ul>
</div>


          {/* Address */}
          <div>
            <h3 className="text-3x1  mb-3" style={{
                fontSize:"30px", fontWeight:"500" ,
            }}>Address</h3>
            <p className="text-sm text-gray-700 leading-6" style={{ fontFamily: "saira",
  fontSize: "16px",    
  fontWeight: "500",   
  lineHeight: "28px", 
  color:" #4D4D4D",
}}>
              24 Seven Government Transaction Center LLC T A Street – Al Khabaisi
              <br />
              (Behind Abu Baker Al Siddique Metro Station) - Deira - Dubai, UAE.
              <br />
              P.O.Box: 81143
            </p>
            <a href="https://www.google.com/maps/place/Amer+247/@25.2702264,55.3345903,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5cc191917a77:0x60b8479df996d48d!8m2!3d25.2702264!4d55.3345903!16s%2Fg%2F11f2y3k140?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D" className="text-black-500 flex items-center mt-2">
            <span className="w-1 h-7 bg-black mr-2 inline-block"></span>
              Follow Map →
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="  pt-6 text-center">
          <p className="text-sm text-gray-700" style={{ fontFamily: "saira",
  fontSize: "16px",    
  fontWeight: "500",   
  lineHeight: "28px", 
  color:" #4D4D4D",
}}>
            We accept payments online using Visa and MasterCard credit/debit card in AED
          </p>
          <div className="flex justify-center space-x-1 mt-2">
            <img src={visa1} alt="Visa" className="h-9" />
            <img src={visa2} alt="MasterCard" className="h-9" />
            <img src={visa3} alt="American Express" className="h-9" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
