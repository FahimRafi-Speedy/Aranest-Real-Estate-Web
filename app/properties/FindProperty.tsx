"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import {PiLineVerticalBold} from "react-icons/pi";
import CrossButton from "./CrossButton";
import SearchButton from "./SearchButton";
import Button from "./Button"; // Import Button component
import {
    Autocomplete,
    GoogleMap,
    Marker,
    Circle,
} from "@react-google-maps/api"; // Import Circle
import "./Body.css"; // Assuming you have your own CSS file
import RadiusSlider from "./RadiusSlider"; // Import RadiusSlider

const FindProperty: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const [autocomplete, setAutocomplete] =
        useState<google.maps.places.Autocomplete | null>(null);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [markerPosition, setMarkerPosition] =
        useState<google.maps.LatLng | null>(null);
    const [radius, setRadius] = useState<number>(0); // Radius in meters

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                    setMarkerPosition(new google.maps.LatLng(latitude, longitude));
                },
                (error) => {
                    console.error("Error getting location", error);
                }
            );
        }
    }, []);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            setMarkerPosition(new google.maps.LatLng(latitude, longitude));
        }
    }, [latitude, longitude]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleClear = () => {
        setSearchText("");
    };

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            if (place && place.geometry) {
                const {location} = place.geometry;
                if (location) {
                    const lat = location.lat();
                    const lng = location.lng();
                    setSearchText(place.formatted_address || "");
                    setLatitude(lat);
                    setLongitude(lng);
                    setMarkerPosition(new google.maps.LatLng(lat, lng));
                }
            }
        }
    };

    const onAutocompleteLoad = (
        autocompleteInstance: google.maps.places.Autocomplete
    ) => {
        setAutocomplete(autocompleteInstance);
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                    setMarkerPosition(new google.maps.LatLng(latitude, longitude));

                    const geocoder = new google.maps.Geocoder();
                    const latLng = new google.maps.LatLng(latitude, longitude);
                    geocoder.geocode({location: latLng}, (results, status) => {
                        if (
                            status === google.maps.GeocoderStatus.OK &&
                            results &&
                            results.length > 0
                        ) {
                            setSearchText(results[0].formatted_address);
                        }
                    });
                },
                (error) => {
                    console.error("Error getting location", error);
                }
            );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center pr-4">

            {/* Aranest Logo */}
            <Image
                src="/aranest.png"
                alt="Aranest Logo"
                className="logo" // Add the custom class here
                height={200}
                width={200}
            />


            <div
                className="flex border mt-7 px-5 py-1 border-gray-300 rounded-full items-center hover:shadow-md hover:scale-102 focus-within:shadow-lg focus-within:outline-none transition-transform duration-200 ease-in-out w-full max-w-md mx-auto">
                <Image
                    src="/search.png"
                    alt="Search"
                    width={22}
                    height={22}
                    className="opacity-30"
                />

                <Autocomplete
                    className="w-full"
                    onLoad={onAutocompleteLoad}
                    onPlaceChanged={onPlaceChanged}
                >
                    <input
                        type="text"
                        id="loc"
                        value={searchText}
                        onChange={handleChange}
                        placeholder="Enter a Location"
                        className="outline-none w-full ml-4 focus:ring-0 focus:outline-none p-2 bg-transparent"
                    />
                </Autocomplete>

                <CrossButton onClick={handleClear} isVisible={searchText.length > 0}/>

                {searchText.length > 0 && (
                    <PiLineVerticalBold className="mr-2 text-slate-400 text-3xl"/>
                )}

                <Image
                    src="/target.png"
                    alt="Target"
                    width={25}
                    height={25}
                    className="mr-0 text-xl cursor-pointer" // Set margin to 0
                    title="Search in Your Area"
                    onClick={handleLocationClick}
                />
            </div>

            <Button/>

            {/* Radius Slider Component */}
            <RadiusSlider radius={radius} setRadius={setRadius}/>

            <SearchButton/>

            {/* Google Map */}
            <div className="w-full mt-6 max-w-screen-lg mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                <GoogleMap
                    center={
                        markerPosition || {
                            lat: latitude || 40.7128,
                            lng: longitude || -74.006,
                        }
                    }
                    zoom={12}
                    onClick={(event) => {
                        const latLng = event.latLng;
                        if (latLng) {
                            setMarkerPosition(latLng);
                            setLatitude(latLng.lat());
                            setLongitude(latLng.lng());

                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({location: latLng}, (results, status) => {
                                if (
                                    status === google.maps.GeocoderStatus.OK &&
                                    results &&
                                    results.length > 0
                                ) {
                                    setSearchText(results[0].formatted_address);
                                }
                            });
                        }
                    }}
                    mapContainerClassName="h-full w-full border-none" // No border here
                >
                    {markerPosition && <Marker position={markerPosition}/>}
                    {markerPosition && (
                        <Circle
                            center={markerPosition}
                            radius={radius} // radius is already in meters
                            options={{
                                strokeColor: "#1E90FF", // Deeper blue color
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: "#ADD8E6", // Light blue for fill
                                fillOpacity: 0.35,
                            }}
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
};

export default FindProperty;
