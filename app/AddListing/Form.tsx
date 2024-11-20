import { useState, ChangeEvent } from "react";
import "./formStyles.css"; // Link to the custom CSS file
import LocationInput from "./LocationInput"; // Import the LocationInput component

const Form = () => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [latitude, setLatitude] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleLocationSelect = (lat: number, lng: number, selectedAddress: string) => {
    setLatitude(lat.toString());
    setLongitude(lng.toString());
    setAddress(selectedAddress);
  };

  return (
    <form className="formContainer p-6 space-y-8 rounded-lg shadow-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Add Your Property Details
      </h1>

      {/* Title and Description */}
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          className="formInput"
          placeholder="Enter property title"
        />
        <label className="block font-semibold mb-1 mt-4">Description</label>
        <textarea
          className="formInput"
          rows={4}
          placeholder="Enter property description"
        ></textarea>
      </div>

      {/* Property Price */}
      <div>
        <h2 className="formHeading">Property Price</h2>
        <div className="formGrid">
          <input type="number" placeholder="Price" className="formInput" />
          <input
            type="text"
            placeholder="Currency (e.g., $)"
            className="formInput"
          />
          <select className="formInput">
            <option>/Month</option>
            <option>/Year</option>
            <option>/Day</option>
            <option>/Week</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="formHeading">Select Categories</h2>
        <div className="formGrid">
          <select className="formInput">
            <option>Select Category</option>
            <option>Home</option>
            <option>Office</option>
            <option>Apartment</option>
          </select>
          <select className="formInput">
            <option>Select Type</option>
            <option>Rent</option>
            <option>Sale</option>
          </select>
          <select className="formInput">
            <option>Select Status</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>

      {/* Thumbnail */}
      <div>
        <h2 className="formHeading">Thumbnail</h2>
        <div className="thumbnailContainer">
          <input
            type="file"
            onChange={handleThumbnailChange}
            className="hidden"
            id="thumbnailInput"
          />
          <label htmlFor="thumbnailInput" className="customButton">
            Choose Thumbnail
          </label>
          <p className="text-gray-500 text-sm mt-2">
            {thumbnail ? thumbnail.name : "No file chosen"}
          </p>
          {thumbnail && (
            <div className="thumbnailCard">
              <img
                src={URL.createObjectURL(thumbnail)}
                alt="Thumbnail"
                className="thumbnailPreview"
              />
            </div>
          )}
        </div>
      </div>

      {/* Property Images */}
      <div>
        <h2 className="formHeading">Add Property Images</h2>
        <div className="thumbnailContainer">
          <input
            type="file"
            multiple
            onChange={handleImagesChange}
            className="hidden"
            id="propertyImagesInput"
          />
          <label htmlFor="propertyImagesInput" className="customButton">
            Upload Images
          </label>
          <p className="text-gray-500 text-sm mt-2">
            {thumbnail ? thumbnail.name : "No file chosen"}
          </p>
          <div className="imageGrid">
            {images.map((img, index) => (
              <div key={index} className="imageCard">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Property ${index + 1}`}
                  className="imagePreview"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Listing Location */}
      <div>
        <h2 className="formHeading mb-1">Listing Location</h2>
        <LocationInput onLocationSelect={handleLocationSelect} />
        {/* <label className="block mb-1">Search Your Location</label> */}
        
        <div className="formGrid my-3">
        <input
            type="text"
            placeholder="Latitude"
            className="formInput"
            value={latitude || ""}
            readOnly
          />
          <input
            type="text"
            placeholder="Longitude"
            className="formInput"
            value={longitude || ""}
            readOnly
          />
          
          <input type="text" placeholder="House" className="formInput" />
          <input
            type="text"
            placeholder="Street Address"
            className="formInput"
          />
          <input type="text" placeholder="Address" className="formInput" />
          <input type="text" placeholder="City" className="formInput" />
          <input type="text" placeholder="State" className="formInput" />
          <input type="text" placeholder="Country" className="formInput" />
          <input type="text" placeholder="ZIP Code" className="formInput" />
        </div>
      </div>

      {/* Listing Details */}
      <div>
        <h2 className="formHeading">Listing Details</h2>
        <div className="formGrid md:grid-cols-4">
          <select className="formInput">
            <option>m²</option>
            <option>ft²</option>
          </select>
          <input
            type="number"
            placeholder="Property Size"
            className="formInput"
          />
          <input type="number" placeholder="Bathrooms" className="formInput" />
          <input type="number" placeholder="Bedrooms" className="formInput" />
          <input
            type="number"
            placeholder="Customer ID"
            className="formInput"
          />
          <input type="number" placeholder="Year Built" className="formInput" />
          <input type="number" placeholder="Garages" className="formInput" />
          <input
            type="number"
            placeholder="Garage Size"
            className="formInput"
          />
          <input type="date" className="formInput" />
          <input type="number" placeholder="Floor No." className="formInput" />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" className="formCheckbox" />
          <label>Hide Contact</label>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default Form;
