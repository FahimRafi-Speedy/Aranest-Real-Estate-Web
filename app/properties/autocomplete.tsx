"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';

interface Place {
  name: string;
  formatted_address: string;
}

export default function MapWithAutocomplete() {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place && place.name && place.formatted_address) {
        setSelectedPlace({
          name: place.name,
          formatted_address: place.formatted_address,
        });
      }
    }
  };

  const onAutocompleteLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  };

  return (
    <div>
      <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Enter a location"
          className="outline-none w-full ml-4 focus:ring-0 focus:outline-none p-2 bg-transparent"
        />
      </Autocomplete>

      {selectedPlace && (
        <div>
          <h3>Selected Place: {selectedPlace.name}</h3>
          <p>Address: {selectedPlace.formatted_address}</p>
        </div>
      )}
    </div>
  );
}
