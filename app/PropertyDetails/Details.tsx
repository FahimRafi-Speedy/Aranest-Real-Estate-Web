"use client"; // Ensure client-side rendering

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaCar, FaPhoneAlt } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Details = () => {
  const images = [
    "/property/house1.jpg",
    "/property/house2.jpg",
    "/property/house3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col p-4 max-w-6xl mx-auto">
      {/* Image Slideshow at the Top */}
      <div className="relative w-full h-80 overflow-hidden rounded-lg mb-4"> {/* Increased height here */}
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Property Image ${index + 1}`}
              width={400}
              height={300} // Increased height for images
              className="object-cover w-full h-full rounded-lg inline-block"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
          &lt;
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
          &gt;
        </button>
      </div>

      {/* Flex Container for Details and Agent Cards */}
      <div className="flex flex-col sm:flex-row justify-between space-x-4 mb-4">
        {/* Left Side Card (Details) */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 mb-4 sm:mb-0"> {/* Added bottom margin for smaller screens */}
          {/* Property Heading */}
          <h2 className="text-2xl font-bold">Riverside Residences</h2>
          <p className="text-xl text-gray-700">$2000/month</p>

          {/* Overview Card */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Overview</h3>
            <p>Post Type: Sales</p>
            <p>Property Category: Office</p>
            <p>Property Status: Available</p>
          </div>

          {/* Available Date and Room Information */}
          <div className="mt-4 flex items-center space-x-4">
            <div>
              <p className="text-lg font-bold">Available From:</p>
              <p>2024-06-29</p>
            </div>
            <div className="flex items-center">
              <FaBed className="text-blue-500" />
              <p>04</p>
            </div>
            <div className="flex items-center">
              <FaBath className="text-blue-500" />
              <p>03</p>
            </div>
            <div className="flex items-center">
              <FaCar className="text-blue-500" />
              <p>2000 sqft</p>
            </div>
          </div>

          {/* Description Card */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Address Card */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Address</h3>
            <p>Area: Dhaka, Bangladesh</p>
            <p>House No: Dhaka</p>
            <p>Street: Dhaka</p>
            <p>City: Dhaka</p>
            <p>State: Dhaka</p>
            <p>Country: Bangladesh</p>
            <p>ZIP: 1236</p>
          </div>

          {/* Details Card */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Details</h3>
            <p>Property Id: 1</p>
            <p>Property Size: 58 m²</p>
            <p>Bedrooms: 58</p>
            <p>Bathrooms: 58</p>
            <p>Floors No: 3</p>
            <p>Built Year: 2002</p>
            <p>Garages: 1</p>
            <p>Garage Size: 500 m²</p>
            <p>Custom ID: Dggb</p>
          </div>

          {/* Video Card */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Video</h3>
            <p>Video content goes here.</p>
          </div>
        </div>

        {/* Right Side Card (Agent Information) */}
        <div className="w-full sm:w-2/5 bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold">Agent Information</h3>
          <p>Name: Maria Barlow</p>
          <p>Email: agent@info.com</p>
          <p>Phone: 0282882828</p>

          {/* Contact Buttons */}
          <div className="flex space-x-2 mt-4">
            <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
              <FaPhoneAlt />
            </button>
            <button className="flex items-center justify-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md">
              Chat
            </button>
            <button className="flex items-center justify-center bg-green-500 text-white w-10 h-10 rounded-md">
              <SiWhatsapp className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
