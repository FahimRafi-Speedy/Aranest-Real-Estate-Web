"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PiLineVerticalBold } from "react-icons/pi";
import CrossButton from "./CrossButton";
import SearchButton from "./SearchButton";
import Button from "./Button";
import { Autocomplete, GoogleMap, Marker } from "@react-google-maps/api";
import Modal from "react-modal";
import "./body.css"; // Assuming you have your own CSS file

const FindProperty: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false); // Modal open/close state
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLng | null>(null);

  useEffect(() => {
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      Modal.setAppElement(document.body);
    }
  }, []);

  useEffect(() => {
    if (isMapOpen) {
      if (latitude && longitude) {
        setMarkerPosition(new google.maps.LatLng(latitude, longitude));
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            setMarkerPosition(new google.maps.LatLng(latitude, longitude));
          },
          (error) => {
            console.error("Error getting location", error);
          }
        );
      }
    }
  }, [isMapOpen]);

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
        const { location } = place.geometry;
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
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

          const geocoder = new google.maps.Geocoder();
          const latLng = new google.maps.LatLng(latitude, longitude);
          geocoder.geocode({ location: latLng }, (results, status) => {
            if (
              status === google.maps.GeocoderStatus.OK &&
              results &&
              results.length > 0
            ) {
              setSearchText(results[0].formatted_address);
              setMarkerPosition(latLng);
            }
          });
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const latLng = event.latLng;
    if (latLng) {
      setMarkerPosition(latLng);
      setLatitude(latLng.lat());
      setLongitude(latLng.lng());

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (
          status === google.maps.GeocoderStatus.OK &&
          results &&
          results.length > 0
        ) {
          setSearchText(results[0].formatted_address);
        }
      });
    }
  };

  const toggleMapModal = () => {
    setIsMapOpen(!isMapOpen);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      address: searchText,
      latitude: latitude,
      longitude: longitude,
    };

    fetch("/api/submit-location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center pt-8 pr-4 mt-2"
      >
        <Image src="/aranest.png" alt="Aranest Logo" height={200} width={200} />

        <div className="flex border mt-7 px-5 py-1 border-gray-300 rounded-full items-center hover:shadow-md hover:scale-102 focus-within:shadow-lg focus-within:outline-none transition-transform duration-200 ease-in-out w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
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

          <CrossButton
            onClick={handleClear}
            isVisible={searchText.length > 0}
          />

          {searchText.length > 0 && (
            <PiLineVerticalBold className="mr-2 text-slate-400 text-3xl" />
          )}

          {/* Target Button */}
          <Image
            src="/target.png"
            alt="Target"
            width={25}
            height={25}
            className="mr-4 text-xl cursor-pointer"
            title="Search in Your Area"
            onClick={handleLocationClick}
          />

          {/* This opens the Google Map modal */}
          <Image
            src="/location.png"
            alt="Location"
            width={25}
            height={25}
            className="text-xl cursor-pointer"
            title="Pin Location in Map"
            onClick={toggleMapModal}
          />
        </div>

        <input type="hidden" id="lat" name="lat" value={latitude ?? ""} />
        <input type="hidden" id="long" name="long" value={longitude ?? ""} />

        <Button />
        <SearchButton />
      </form>

      <Modal
        isOpen={isMapOpen}
        onRequestClose={toggleMapModal}
        contentLabel="Select Location"
        className="map-modal-outer"
      >
        <div>
          {/* Map content */}
          <div id="map" className="map-modal-inner">
            <GoogleMap
              center={
                markerPosition || {
                  lat: latitude || 40.7128,
                  lng: longitude || -74.006,
                }
              }
              zoom={12}
              onClick={handleMapClick}
              mapContainerClassName="google-map-container"
            >
              {markerPosition && <Marker position={markerPosition} />}
            </GoogleMap>
          </div>

          {/* Buttons for OK and Close */}
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={() => {
                toggleMapModal();
                if (markerPosition) {
                  setLatitude(markerPosition.lat());
                  setLongitude(markerPosition.lng());

                  // Perform reverse geocoding to get the address
                  const geocoder = new google.maps.Geocoder();
                  geocoder.geocode(
                    { location: markerPosition },
                    (results, status) => {
                      if (
                        status === google.maps.GeocoderStatus.OK &&
                        results &&
                        results.length > 0
                      ) {
                        setSearchText(results[0].formatted_address);
                      }
                    }
                  );
                }
              }}
              className="ok-button"
            >
              Confirm
            </button>
            <button
              onClick={toggleMapModal}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FindProperty;
