"use client";

import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AranestLogo from "./AranestLogo";
import Script from "next/script";
import FindProperty from "./FindProperty";
import { GoogleMap, Marker } from "@react-google-maps/api";

const PropertiesPage = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&libraries=places`}
        strategy="beforeInteractive"
      />
      <main className="flex-grow">
        <div className="scale-wrapper">
          <Header />
          <div className="flex flex-wrap">
            {/* Left side */}
            <div className="w-full md:w-1/2 pr-0 p-4">
              <FindProperty />

              {/* Display Google Map below the FindProperty component */}
              <div className="mt-6">
                {latitude && longitude && (
                  <GoogleMap
                    center={{ lat: latitude, lng: longitude }}
                    zoom={12}
                    mapContainerClassName="h-60 w-full border-none" // No border
                  >
                    <Marker position={{ lat: latitude, lng: longitude }} />
                  </GoogleMap>
                )}
              </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 p-4">
              <h1>Our Properties</h1>
              <p>This is the right section</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
