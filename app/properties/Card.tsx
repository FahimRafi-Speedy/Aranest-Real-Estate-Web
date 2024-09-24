// components/Card.tsx

import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';
import "./Card.css";

const sampleImages = [
  '/property/house1.jpg',
  '/property/house2.jpg',
  '/property/house3.jpg',
];

const Card: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sampleImages.length);
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sampleImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sampleImages.length) % sampleImages.length);
  };

  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform p-4 mt-4 card max-w-xs md:max-w-lg">
      {/* Photo Slideshow */}
      <div className="relative overflow-hidden h-64 md:h-80 rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {sampleImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <Image
                src={image}
                alt={`Property ${index + 1}`}
                layout="responsive"
                width={800} // Maintain aspect ratio
                height={600} // Maintain aspect ratio
                className="object-cover rounded-lg h-full"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center"
          onClick={prevImage}
        >
          <MdChevronLeft className="text-black" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center"
          onClick={nextImage}
        >
          <MdChevronRight className="text-black" />
        </button>
      </div>

      {/* Dots for image indication */}
      <div className="flex justify-center mt-2">
        {sampleImages.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${index === currentImageIndex ? 'bg-black' : 'bg-gray-300'}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold">Luxury Apartment</h2>
        <p className="text-lg text-gray-700">Price: $200/Month</p>
        <p className="text-md text-gray-600">Area: Downtown, NY</p>
        <p className="text-md text-gray-600">Location: New York, USA</p>
        <div className="flex justify-between mt-2">
          <p>Beds: 3</p>
          <p>Baths: 2</p>
          <p>Size: 1500 sqft</p>
        </div>
        <button className="button items-center mt-4 h-10 w-full">
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
