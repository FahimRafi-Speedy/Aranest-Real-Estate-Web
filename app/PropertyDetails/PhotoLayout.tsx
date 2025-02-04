"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaImages } from "react-icons/fa";

interface PhotoLayoutProps {
  images: string[];
}

const PhotoLayout: React.FC<PhotoLayoutProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  // Auto slideshow every 3 seconds (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle keyboard navigation in full-screen view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenImage !== null) {
        if (e.key === "ArrowRight") {
          setFullscreenImage((prev) => (prev! + 1) % images.length);
        } else if (e.key === "ArrowLeft") {
          setFullscreenImage((prev) =>
            prev! === 0 ? images.length - 1 : prev! - 1
          );
        } else if (e.key === "Escape") {
          setFullscreenImage(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenImage, images.length]);

  return (
    <div className="p-2 md:p-4">
      {/* Mobile Slideshow */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-lg w-full">
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Property Image ${index + 1}`}
                width={1000}
                height={1000}
                className="object-cover w-full h-[60vh] rounded-lg inline-block cursor-pointer"
                onClick={() => setFullscreenImage(index)}
              />
            ))}
          </div>

          {/* Left and Right Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          >
            <MdChevronLeft className="text-black text-xl" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          >
            <MdChevronRight className="text-black text-xl" />
          </button>
        </div>

        {/* Dots Positioned Outside of Slideshow */}
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? "bg-black w-4" : "bg-gray-400"} mx-1`}
            ></div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:block">
        <div className="grid gap-2 rounded-lg p-4">
          {images.length <= 4 ? (
            images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Property Image ${index + 1}`}
                className="w-full h-[60vh] object-cover rounded-lg shadow-lg cursor-pointer"
                onClick={() => setFullscreenImage(index)}
              />
            ))
          ) : (
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-4">
                <img
                  src={images[0]}
                  alt="Main Image"
                  className="w-full h-[60vh] object-cover rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setFullscreenImage(0)}
                />
              </div>
              <div className="col-span-2 grid grid-rows-3 gap-2">
                {images.slice(1, 4).map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Side Image ${index + 1}`}
                    className="w-full h-[19vh] object-cover rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setFullscreenImage(index + 1)}
                  />
                ))}
                {images.length > 4 && (
                  <div
                    className="relative w-full h-[19vh] bg-black rounded-lg cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    <img
                      src={images[4]}
                      alt="More Images"
                      className="w-full h-full object-cover rounded-lg opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold">
                      <FaImages size={30} />
                      <span>See More</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Viewing All Photos */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 text-black text-xl" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg cursor-pointer"
                  onClick={() => setFullscreenImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image View */}
      {fullscreenImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white text-xl" onClick={() => setFullscreenImage(null)}>
            ✕
          </button>
          <button className="absolute left-4 text-white text-3xl" onClick={() => setFullscreenImage(fullscreenImage === 0 ? images.length - 1 : fullscreenImage - 1)}>
            <MdChevronLeft />
          </button>
          <img src={images[fullscreenImage]} alt="Full Image" className="max-w-full max-h-full object-contain rounded-lg" />
          <button className="absolute right-4 text-white text-3xl" onClick={() => setFullscreenImage((fullscreenImage + 1) % images.length)}>
            <MdChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoLayout;
