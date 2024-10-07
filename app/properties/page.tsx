"use client";

import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script";
import FindProperty from "./FindProperty";
import { GoogleMap, Marker } from "@react-google-maps/api";
import FilterButton from "./FilterButton";
import Card from "./Card";
import "./body.css";  // Ensure this path is correct

const PropertiesPage = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden"> {/* Prevent horizontal scroll */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&libraries=places`}
        strategy="beforeInteractive"
      />
      <FilterButton />
      <main className="flex-grow flex flex-col md:flex-row"> {/* Stack vertically on small screens */}
        <div className="scale-wrapper flex w-full flex-col"> {/* Use flex-col to stack */}
          <Header />
          <div className="flex flex-col md:flex-row flex-grow h-[calc(100vh-4rem)]"> {/* Full height container */}
            {/* Left side */}
            <div className="w-full md:w-1/2 p-4 flex flex-col overflow-y-auto hide-scrollbar custom-left-side">
              <FindProperty />
              <div className="mt-6 flex-grow">
                {latitude && longitude && (
                  <GoogleMap
                    center={{ lat: latitude, lng: longitude }}
                    zoom={12}
                    mapContainerClassName="h-60 w-full border-none"
                  >
                    <Marker position={{ lat: latitude, lng: longitude }} />
                  </GoogleMap>
                )}
              </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto hide-scrollbar custom-right-side">
              <p className="text-3xl font-bold">Our Properties</p>
              <div className="grid custom-grid gap-6">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
