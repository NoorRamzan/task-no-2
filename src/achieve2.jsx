import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import userImage from "./image/person.webp.png"; // Import user profile image
import googleLogo from "./image/google.png"; // Import Google logo

const reviews = [
  {
    id: 1,
    rating: 4.8,
    review:
      "..followed by some bogus content. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    name: "Olivia Green",
    date: "28 Dec, 2025",
    image: userImage,
  },
  {
    id: 2,
    rating: 4.8,
    review:
      "..followed by some bogus content. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    name: "Olivia Green",
    date: "28 Dec, 2025",
    image: userImage,
  },
  {
    id: 3,
    rating: 4.8,
    review:
      "..followed by some bogus content. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    name: "Olivia Green",
    date: "28 Dec, 2025",
    image: userImage,
  },
];

const Achievements = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 mt-32">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Achievements
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Reviews Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#DADADA] shadow-md border border-gray-200 rounded-lg p-6"
          >
            {/* Rating Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <img src={googleLogo} alt="Google" className="w-6 h-6" />
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mt-4">{review.review}</p>

            {/* User Profile */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 transition">
          <FaArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 transition">
          <FaArrowRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Achievements;
