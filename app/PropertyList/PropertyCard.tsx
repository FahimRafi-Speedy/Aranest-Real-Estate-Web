"use client";

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {FaHeart, FaPhoneAlt, FaRegHeart} from 'react-icons/fa';
import {useRouter} from "next/navigation";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {SiWhatsapp} from "react-icons/si";


interface PropertyCardProps {
    property: {
        images: string[];
        title: string;
        location: string;
        type: string;
        beds: number;
        baths: number;
        sqft: number;
        price: number;
        pricePerSqft: number;
        updated: string;
    };
}

const PropertyCard: React.FC<PropertyCardProps> = ({property}) => {
    const tags = ["REMOTE VIEWING", "NEGOTIABLE", "EXCLUSIVE"];

    const images = property.images;

    const [currentImage, setCurrentImage] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const router = useRouter();  // Initialize useRouter

    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000);
        return () => clearInterval(interval);
    }, [nextImage]);

    const toggleHeart = () => {
        setIsLiked(!isLiked);
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    // Fetch data from backend (when implemented)
    const fetchDataFromBackend = async () => {
        // Placeholder for future fetch request
        // Example: const response = await fetch('/api/property');
        // const data = await response.json();
        // For now, using hardcoded data
        console.log("Fetching data from backend...");
    };

    useEffect(() => {
        fetchDataFromBackend(); // Fetch data on component mount
    }, []);

    return (
        // <div
        //     className="border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 h-full flex flex-col">
        //     <div className="relative h-48">
        //         {/*     <Image
        //             src={property.images[0]}
        //             alt={property.title}
        //             layout="fill"
        //             objectFit="cover"
        //         />*/}
        //         <Image src={property.images[0]} alt={property.title} width={400} height={250}
        //                className="object-cover w-full h-full rounded-t-lg inline-block"/>
        //     </div>
        //     <div className="p-4 flex-grow">
        //         <h2 className="text-lg font-bold text-gray-900">{property.title}</h2>
        //         <p className="text-sm text-gray-700 mb-4">{property.location}</p>
        //         <div className="flex items-center text-gray-700">
        //             <FaBed className="mr-1"/>
        //             <span>{property.beds} beds</span>
        //             <FaBath className="ml-4 mr-1"/>
        //             <span>{property.baths} baths</span>
        //         </div>
        //         <p className="text-sm text-gray-700 mt-2">
        //             {property.sqft} sqft | {formatCurrency(property.price)}
        //         </p>
        //     </div>
        //     <div className="p-4 mt-auto border-t border-gray-200 bg-white">
        //         <p className="text-sm text-gray-600">
        //             Updated: {formatDate(property.updated)}
        //         </p>
        //     </div>
        // </div>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden my-6 relative">

            {/* Banner */}
            <div
                className="absolute top-0 left-0 mt-2 pt-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-tr-md rounded-br-md transform z-50">
                <span className="text-m">★</span> MUST SEE - VERIFIED
            </div>

            <div className="relative p-4">
                {/* Slideshow */}
                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                    <div
                        className="whitespace-nowrap transition-transform duration-500 ease-in-out"
                        style={{transform: `translateX(-${currentImage * 100}%)`}}
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
                        <MdChevronLeft className="text-black"/>
                    </button>
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={nextImage}
                    >
                        <MdChevronRight className="text-black"/>
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
                    <div
                        className="mt-3 mb-3 w-5 h-5 border-2 border-gray-400 rounded-sm flex items-center justify-center">
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
                            <FaHeart className="text-red-600 text-2xl"/>
                        ) : (
                            <FaRegHeart className="text-gray-400 text-2xl"/>
                        )}
                    </button>
                </div>

                {/* Property Details */}
                <h2
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => router.push('/PropertyDetails')}  // Add onClick to redirect
                >
                    {property.title}
                </h2>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-gray-600">{property.type}</p>
                <div className="flex items-center mt-2">
                    <span className="text-gray-600">{property.beds} Beds</span>
                    <span className="mx-2">·</span>
                    <span className="text-gray-600">{property.baths} Baths</span>
                    <span className="mx-2">·</span>
                    <span className="text-gray-600">{property.sqft} sqft</span>
                </div>
                <div className="mt-2">
                    <span className="text-2xl font-bold text-gray-800">${property.price.toLocaleString()}</span>
                    <span className="text-gray-600 text-sm pl-2"> ${property.pricePerSqft} psf</span>
                </div>
                <div className="flex mt-4 space-x-2">
                    {tags.map((tag, index) => (
                        <span key={index}
                              className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>

                {/* Contact Buttons and Agent Info */}
                <div className="flex items-center justify-between mt-4">
                    {/* Agent Info */}
                    <div className="flex items-center">
                        <img src="https://placehold.co/32x32" alt="Agent profile" className="w-8 h-8 rounded-full"/>
                        <div className="ml-2">
                            <p className="text-gray-600 text-sm">{property.updated}</p>
                        </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex space-x-2">
                        {/* Phone Button with Blue Icon */}
                        <button
                            className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                            <FaPhoneAlt/>
                        </button>

                        {/* Chat Button with Blue Background and Text */}
                        <button
                            className="flex items-center justify-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md">
                            Chat
                        </button>

                        {/* WhatsApp Button with Green Background and Rounded Edges */}
                        <button
                            className="flex items-center justify-center bg-green-500 text-white w-10 h-10 rounded-md">
                            <SiWhatsapp className="text-xl"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;