"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";

type PropertyPhotoProps = {
  images: string[];
};

const PropertyPhoto: React.FC<PropertyPhotoProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  // Automatic image slideshow for mobile with sliding transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImageIndex(null);
    setShowModal(false);
  };

  const nextImage = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      setIsSliding(false);
    }, 500); // Time to complete the sliding effect
  };

  const prevImage = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsSliding(false);
    }, 500); // Time to complete the sliding effect
  };

  return (
    <>
      {/* Mobile Slideshow */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-lg w-full">
          <div
            className={`whitespace-nowrap transition-transform duration-500 ease-in-out`}
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Property Image ${index + 1}`}
                width={1000} // Adjust width for aspect ratio
                height={1000} // Adjust height for aspect ratio
                className="object-contain w-full h-full rounded-lg inline-block" // Ensure image fits the div without cropping
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

      {/* Medium/Large Screen Layout */}
      <div className="hidden md:flex md:space-x-4">
        {images.length === 1 && (
          <div className="w-full aspect-w-16 aspect-h-9">
            <Image
              src={images[0]}
              alt="Property Image 1"
              width={1000}
              height={1000}
              className="object-contain rounded-lg" // Use object-contain to fit the image
              onClick={() => openModal(0)}
            />
          </div>
        )}

        {images.length === 2 && (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <Image
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-lg" // Use object-contain to fit the image
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>
        )}

        {images.length >= 3 && images.length <= 4 && (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 aspect-w-7 aspect-h-9">
              <Image
                src={images[0]}
                alt="Property Image 1"
                width={1000}
                height={1000}
                className="object-contain rounded-lg" // Use object-contain to fit the image
                onClick={() => openModal(0)}
              />
            </div>
            <div className="space-y-4">
              {images.slice(1).map((image, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <Image
                    src={image}
                    alt={`Property Image ${index + 2}`}
                    width={1000}
                    height={1000}
                    className="object-contain rounded-lg" // Use object-contain to fit the image
                    onClick={() => openModal(index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {images.length >= 5 && (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 aspect-w-7 aspect-h-9">
              <Image
                src={images[0]}
                alt="Property Image 1"
                width={1000}
                height={1000}
                className="object-contain rounded-lg" // Use object-contain to fit the image
                onClick={() => openModal(0)}
              />
            </div>
            <div className="space-y-4">
              {images.slice(1, 4).map((image, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <Image
                    src={image}
                    alt={`Property Image ${index + 2}`}
                    width={1000}
                    height={1000}
                    className="object-contain rounded-lg" // Use object-contain to fit the image
                    onClick={() => openModal(index + 1)}
                  />
                </div>
              ))}
              <div className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={images[4]}
                  alt="More Property Images"
                  width={1000}
                  height={1000}
                  className="object-contain rounded-lg blur-sm" // Use object-contain to fit the image
                  onClick={() => openModal(4)}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <p className="text-white text-lg font-bold">More Photos</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Larger View */}
      {showModal && modalImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <Image
              src={images[modalImageIndex]}
              alt={`Large Property Image ${modalImageIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain rounded-lg" // Use object-contain to fit the image
            />
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
              onClick={closeModal}
            >
              <MdClose className="text-black" />
            </button>
            {/* Arrow Controls */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
              onClick={prevImage}
            >
              <MdChevronLeft className="text-black" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
              onClick={nextImage}
            >
              <MdChevronRight className="text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyPhoto;