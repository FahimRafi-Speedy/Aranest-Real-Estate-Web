"use client";

import { FC, FormEvent, useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker, DrawingManager } from '@react-google-maps/api';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import './HomeComponents.css';

const Property: FC = () => {
  const router = useRouter();
  const [list, setList] = useState<any[]>([]);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const type = form.type.value;
    const category = form.cat.value;
    const location = form.loc.value;
    const lat = form.lat.value;
    const long = form.long.value;
    router.push(`/property-lists/?lat=${lat}&long=${long}&post_type=${type}&property_category=${category}&location=${location}&fromHome=true`);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setPlace(place);
      if (place.geometry && place.geometry.location) {
        const data = {
          location: place.formatted_address || '', // Ensure location is a string
          lat: place.geometry.location.lat(),      // lat() should always return a number
          long: place.geometry.location.lng()      // lng() should always return a number
        };
  
        const locInput = document.getElementById('loc') as HTMLInputElement | null;
        const latInput = document.getElementById('lat') as HTMLInputElement | null;
        const longInput = document.getElementById('long') as HTMLInputElement | null;
  
        if (locInput) {
          locInput.value = data.location;
        }
        if (latInput) {
          latInput.value = data.lat.toString();  // Convert number to string
        }
        if (longInput) {
          longInput.value = data.long.toString(); // Convert number to string
        }
      }
    }
  };
  

  return (
    <div className="find-property pt-40">
      <div className="max-w-[2150px] mt-8 mx-auto md:px-36 sm:px-2 px-4">
        <div className="bg-[#0E8E94] drop-shadow-lg px-4 md:px-20 py-4 rounded-md">
          <p className="text-center text-2xl text-white font-semibold mb-4 capitalize">Find your property</p>
          <form onSubmit={handleSubmit}>
            <div className="grid pb-4 md:grid-cols-4 gap-10 grid-cols-1">
              <div className="form-control bg-white rounded-lg w-full max-w-xs">
                <select name="type" className="select w-full border text-black border-black">
                  <option value="Rent" selected>Rent</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              <div className="form-control bg-white rounded-lg w-full max-w-xs">
                <select name="cat" className="select w-full border text-black border-black">
                  <option value="Home" selected>Home</option>
                  <option value="Office">Office</option>
                  <option value="Appartment">Appartment</option>
                </select>
              </div>
              <div className="form-control col-span-2">
                <div className="input-group w-full">
                  <LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={["places", "drawing"]}>
                    <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
                      <input
                        type="text" name='location' id='loc'
                        className="input w-[15rem] md:w-[450px] bg-white text-black border-black input-bordered"
                        placeholder="Search your location"
                      />
                    </Autocomplete>
                  </LoadScript>
                  <button type="submit" className="btn md:ms-2 bg-[#1bafb7] border-none">
                    <FaSearch className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden">
              <input type="text" name="lat" id="lat" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <input type="text" name="long" id="long" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Property;
