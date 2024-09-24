// RadiusSlider.tsx
import React from 'react';
import "./body.css";

interface RadiusSliderProps {
  radius: number;
  setRadius: (value: number) => void;
}

const RadiusSlider: React.FC<RadiusSliderProps> = ({ radius, setRadius }) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRadius(value);
  };

  return (
    <div className="flex flex-col items-center mt-4 border-none">
      <label htmlFor="radius" className="mb-2">
        Select Radius: {radius < 1000 ? `${radius} meters` : `${(radius / 1000).toFixed(1)} km`}
      </label>
      <input
        type="range"
        id="radius"
        min="0"
        max="10000" // max in meters (10 km)
        value={radius}
        onChange={handleSliderChange}
        className="w-52 accent-black border-none" // Fixed width for the slider
      />
    </div>
  );
};

export default RadiusSlider;
