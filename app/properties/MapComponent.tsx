"use client";

import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

interface MapComponentProps {
  latitude: number | null;
  longitude: number | null;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude }) => {
  return (
    <div className="google-map-container" style={{ height: "400px", width: "100%" }}>
      {latitude && longitude ? (
        <GoogleMap
          center={{ lat: latitude, lng: longitude }}
          zoom={12}
          mapContainerClassName="google-map-container"
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
