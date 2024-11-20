import React, { useState, useRef, useEffect } from "react";

interface LocationInputProps {
  onLocationSelect: (lat: number, lng: number, address: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onLocationSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const autocompleteService = new google.maps.places.AutocompleteService();
    const geocoder = new google.maps.Geocoder();

    if (inputValue.length > 2) {
      autocompleteService.getPlacePredictions(
        { input: inputValue, types: ["geocode"] },
        (predictions) => {
          if (predictions) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [inputValue]);

  const handleSuggestionClick = (suggestion: google.maps.places.AutocompletePrediction) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ placeId: suggestion.place_id }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const { geometry, formatted_address } = results[0];
        if (geometry?.location) {
          onLocationSelect(geometry.location.lat(), geometry.location.lng(), formatted_address || "");
          setInputValue(formatted_address || "");
          setSuggestions([]);
        }
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <input
        type="text"
        id="locationInput"
        className="formInput"
        placeholder="Search your location"
        value={inputValue}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white shadow-md border border-gray-200 rounded-lg w-full max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
