import React from "react";
import image1 from "./images/pic2.png";  // Adjust path as needed
import image2 from "./images/pic1.png";
import image3 from "./images/pic3.png";
import image4 from "./images/pic4.png";

const Partners = () => {
  // Partner images
  const partners = [
    { src: image1, alt: "Dubai Health Authority" },
    { src: image2, alt: "Dubai Economy" },
    { src: image3, alt: "Partner 3" },
    { src: image4, alt: "Partner 4" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Our Partners
        </h2>

        {/* Partner Logos Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-[236px] h-[231.95px] flex justify-center items-center p-4"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-w-full max-h-full object-contain aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
