"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import Modal from "react-modal";

type PropertyPhotoProps = {
  images: string[];
};

const PropertyPhoto: React.FC<PropertyPhotoProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllImagesModal, setShowAllImagesModal] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(intervalId);
  }, [images.length]);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openAllImagesModal = () => {
    setShowAllImagesModal(true);
  };

  const closeAllImagesModal = () => {
    setShowAllImagesModal(false);
  };

  const renderImageGallery = () => {
    const imageCount = images.length;
    const gridCols = imageCount >= 4 ? 2 : 1;

    return (
      <div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-4`}>
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="relative aspect-w-16 aspect-h-9">
            <Image
              src={image}
              alt={`Property Image ${index + 1}`}
              width={1000}
              height={1000}
              className="object-contain rounded-lg cursor-pointer"
              onClick={() => openImageModal(image)}
            />
          </div>
        ))}
        {imageCount > 4 && (
          <div
            className="relative aspect-w-16 aspect-h-9 cursor-pointer"
            onClick={openAllImagesModal}
          >
            <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-bold">See More</p>
            </div>
            <Image
              src={images[4]}
              alt="More Property Images"
              width={1000}
              height={1000}
              className="object-contain rounded-lg blur-sm"
            />
          </div>
        )}
      </div>
    );
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
                width={1000}
                height={1000}
                className="object-contain w-full h-full rounded-lg inline-block"
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
      <div className="hidden md:block">{renderImageGallery()}</div>

      {/* Modal for Single Image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          content: {
            width: "80%",
            height: "90%",
            margin: "auto",
            top: "50px",
            border: "none",
            zIndex: 1001,
          },
        }}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected image"
            className="w-full h-full z-80"
          />
        )}
        <button
          className="absolute top-4 right-4 bg-white p-2 rounded-full"
          onClick={closeImageModal}
        >
          <MdClose className="text-black" />
        </button>
      </Modal>

      {/* Modal for All Images */}
      {showAllImagesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9">
                <Image
                  src={image}
                  alt={`All Property Image ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-lg"
                  onClick={() => openImageModal(image)}
                />
              </div>
            ))}
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full"
              onClick={closeAllImagesModal}
            >
              <MdClose className="text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyPhoto;
