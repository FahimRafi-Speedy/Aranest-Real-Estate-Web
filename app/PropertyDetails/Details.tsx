"use client"; // Ensure client-side rendering

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaExpandArrowsAlt, FaPhoneAlt } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Ensure to import the icons

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
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  // Define variables for property details
  const propertyDetails = {
    heading: "Riverside Residences",
    price: "$2000/Month",
    postType: "Sales",
    propertyCategory: "Office",
    propertyStatus: "Available",
    availableFrom: "2024-06-29",
    area: "2000 sqft",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    address: {
      area: "Dhaka",
      houseNo: "Dhaka",
      street: "Dhaka",
      city: "Dhaka",
      state: "Dhaka",
      country: "Bangladesh",
      zip: "1236",
    },
    details: {
      propertyId: 1,
      propertySize: "58 m²",
      bedrooms: 4, // Moved here
      bathrooms: 3, // Moved here
      floorsNo: 3,
      builtYear: 2002,
      garages: 1,
      garageSize: "500 m²",
      customId: "Dggb",
    },
    videoContent: "Video content goes here.",
    agent: {
      name: "Maria Barlow",
      email: "agent@info.com",
      phone: "0282882828",
    },
  };

  return (
    <div className="flex flex-col p-4 max-w-7xl mx-auto md:px-2 lg:px-0 space-y-8">
      {/* Image Slideshow at the Top */}
      <div className="relative p-4">
        {/* Slideshow */}
        <div className="relative overflow-hidden rounded-lg center">
          {/* Set a fixed height */}
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Property Image ${index + 1}`}
                width={1000} // Adjust width for aspect ratio
                height={1000} // Adjust height for aspect ratio
                className="object-cover w-full h-full rounded-lg inline-block" // Ensure image covers the div
              />
            ))}
          </div>
          {/* Left and Right Buttons */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center"
            onClick={prevImage}
          >
            <MdChevronLeft className="text-black" />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center"
            onClick={nextImage}
          >
            <MdChevronRight className="text-black" />
          </button>
        </div>

        {/* Dots Positioned Outside of Slideshow */}
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImage ? "bg-black" : "bg-gray-400"
              } mx-1`}
            ></div>
          ))}
        </div>
      </div>

      {/* Flex Container for Details and Agent Cards */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 space-y-8 sm:space-y-0">
        {/* Left Side Card (Details) */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Property Heading */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{propertyDetails.heading}</h2>
            <p className="text-xl text-gray-700">{propertyDetails.price}</p>
          </div>

          {/* Overview Card */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow space-y-2">
            <h3 className="text-lg font-bold">Overview</h3>
            <p>
              <strong>Post Type:</strong> {propertyDetails.postType}
            </p>
            <p>
              <strong>Property Category:</strong> {propertyDetails.propertyCategory}
            </p>
            <p>
              <strong>Property Status:</strong> {propertyDetails.propertyStatus}
            </p>
          </div>

          {/* Available Date and Room Information */}
          <div className="mt-4 items-center space-x-4 pl-6 space-y-4">
            <div>
              <p className="text-lg font-bold pt-16">
                <strong>Available From:</strong>
              </p>
              <p>{propertyDetails.availableFrom}</p>
            </div>

            <div className="flex space-x-8 mt-4">
              {/* Bedrooms */}
              <div className="flex flex-col items-center">
                <FaBed className="text-black size-6 mb-1" />
                <p className="font-bold">{propertyDetails.details.bedrooms}</p>
                <p>Bedrooms</p>
              </div>

              {/* Bathrooms */}
              <div className="flex flex-col items-center">
                <FaBath className="text-black size-6 mb-1" />
                <p className="font-bold">{propertyDetails.details.bathrooms}</p>
                <p>Bathrooms</p>
              </div>

              {/* Area */}
              <div className="flex flex-col items-center">
                <FaExpandArrowsAlt className="text-black size-6 mb-1" />
                <p className="font-bold">{propertyDetails.area}</p>
                <p>Area</p>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow space-y-2">
            <h3 className="text-lg font-bold">Description</h3>
            <p>{propertyDetails.description}</p>
          </div>

          {/* Address Card */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow space-y-2">
            <h3 className="text-lg font-bold">Address</h3>
            <p>
              <strong>Area:</strong> {propertyDetails.address.area}
            </p>
            <p>
              <strong>House No:</strong> {propertyDetails.address.houseNo}
            </p>
            <p>
              <strong>Street:</strong> {propertyDetails.address.street}
            </p>
            <p>
              <strong>City:</strong> {propertyDetails.address.city}
            </p>
            <p>
              <strong>State:</strong> {propertyDetails.address.state}
            </p>
            <p>
              <strong>Country:</strong> {propertyDetails.address.country}
            </p>
            <p>
              <strong>ZIP:</strong> {propertyDetails.address.zip}
            </p>
          </div>

          {/* Details Card */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow space-y-2">
            <h3 className="text-lg font-bold">Details</h3>
            <p>
              <strong>Property Id:</strong> {propertyDetails.details.propertyId}
            </p>
            <p>
              <strong>Property Size:</strong> {propertyDetails.details.propertySize}
            </p>
            <p>
              <strong>Bedrooms:</strong> {propertyDetails.details.bedrooms}
            </p>
            <p>
              <strong>Bathrooms:</strong> {propertyDetails.details.bathrooms}
            </p>
            <p>
              <strong>Floors No:</strong> {propertyDetails.details.floorsNo}
            </p>
            <p>
              <strong>Built Year:</strong> {propertyDetails.details.builtYear}
            </p>
            <p>
              <strong>Garages:</strong> {propertyDetails.details.garages}
            </p>
            <p>
              <strong>Garage Size:</strong> {propertyDetails.details.garageSize}
            </p>
            <p>
              <strong>Custom Id:</strong> {propertyDetails.details.customId}
            </p>
          </div>
        </div>

        {/* Right Side Card (Agent Information) */}
        <div className="w-full sm:w-2/5 bg-white shadow-md rounded-lg p-6 space-y-4 h-64 sm:ml-4">
          <h3 className="text-lg font-bold">Agent Information</h3>
          <p>
            <strong>Name:</strong> {propertyDetails.agent.name}
          </p>
          <p>
            <strong>Email:</strong> {propertyDetails.agent.email}
          </p>
          <p>
            <strong>Phone:</strong> {propertyDetails.agent.phone}
          </p>

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
