import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaHeart, FaRegHeart, FaPhoneAlt, FaComments } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import "./body.css";

const Card = () => {
  const images = [
    '/property/house1.jpg',
    '/property/house2.jpg',
    '/property/house3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden my-6 relative">
      
      {/* Banner */}
      <div className="absolute top-0 left-0 mt-2 pt-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-tr-md rounded-br-md transform z-50">
      <span className="text-m">★</span> MUST SEE - VERIFIED 
      </div>

      <div className="relative p-4">
        {/* Slideshow */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
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
                height={250}
                className="object-cover w-full h-full rounded-lg inline-block"
              />
            ))}
          </div>

          {/* Left and Right Buttons */}
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

        {/* Dots Positioned Outside of Slideshow */}
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentImage ? 'bg-black' : 'bg-gray-400'} mx-1`}
            ></div>
          ))}
        </div>
      </div>

      <div className="p-4 relative">
        {/* Checkbox and Heart Button */}
        <div className="absolute top-0 right-5 mt-2 mr-2 flex flex-col items-center space-y-2">
          {/* Checkbox Icon */}
          <div className="mt-3 mb-3 w-5 h-5 border-2 border-gray-400 rounded-sm flex items-center justify-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleCheckbox}
              className="opacity-0 absolute w-full h-full cursor-pointer"
            />
            {isChecked && (
              <div className="w-3 h-3 bg-blue-600"></div>
            )}
          </div>
          {/* Heart Icon */}
          <button onClick={toggleHeart}>
            {isLiked ? (
              <FaHeart className="text-red-600 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-400 text-2xl" />
            )}
          </button>
        </div>

        {/* Property Details */}
        <h2 className="text-xl font-bold">Riverside Residences</h2>
        <p className="text-gray-600">99 Pasir Ris Grove · D18</p>
        <p className="text-gray-600">Condo · 2000 · 99 yrs</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-600">3 Beds</span>
          <span className="mx-2">·</span>
          <span className="text-gray-600">2 Baths</span>
          <span className="mx-2">·</span>
          <span className="text-gray-600">2,561 sqft</span>
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold text-gray-800">$1,200,000</span>
          <span className="text-gray-600 text-sm pl-2"> $754 psf</span>
        </div>
        <div className="flex mt-4 space-x-2">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">REMOTE VIEWING</span>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">NEGOTIABLE</span>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">EXCLUSIVE</span>
        </div>

        {/* Contact Buttons and Agent Info */}
        <div className="flex items-center justify-between mt-4">
          {/* Agent Info */}
          <div className="flex items-center">
            <img src="https://placehold.co/32x32" alt="Agent profile" className="w-8 h-8 rounded-full" />
            <div className="ml-2">
              <p className="text-gray-600 text-sm">Updated 4 hrs ago</p>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex space-x-2">
            {/* Phone Button with Blue Icon */}
            <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
              <FaPhoneAlt />
            </button>

            {/* Chat Button with Blue Background and Text */}
            <button className="flex items-center justify-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md">
              Chat
            </button>

            {/* WhatsApp Button with Green Background and Rounded Edges */}
            <button className="flex items-center justify-center bg-green-500 text-white w-10 h-10 rounded-md">
              <SiWhatsapp className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
