"use client";

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Define the props for the Dropdown component
interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle option click and close dropdown
  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
  onClick={toggleDropdown}
  className="flex items-center justify-between px-4 py-2 w-full sm:w-36 md:w-44 lg:w-48 bg-gray-200 text-gray-700 rounded-md focus:outline-none hover:bg-gray-300"
>
  {selectedOption}
  <FaChevronDown className="ml-2" />
</button>
      
      {isOpen && (
        <div className="absolute right-0 w-full sm:w-36 md:w-44 lg:w-48 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Button: React.FC = () => {
  // Initialize state for both dropdowns
  const [selectedOption1, setSelectedOption1] = useState('Rent');
  const [selectedOption2, setSelectedOption2] = useState('Home');

  // Options for each dropdown
  const options1 = ['Rent', 'Sales'];
  const options2 = ['Home', 'Office', 'Apartment'];

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      <Dropdown
        options={options1}
        selectedOption={selectedOption1}
        onOptionSelect={setSelectedOption1}
      />
      <Dropdown
        options={options2}
        selectedOption={selectedOption2}
        onOptionSelect={setSelectedOption2}
      />
    </div>
  );
};

export default Button;
