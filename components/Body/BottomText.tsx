"use client";

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Reuse Dropdown component
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
        className="flex items-center justify-between px-3 py-1.5 w-full sm:w-32 md:w-40 lg:w-44 bg-gray-200 text-gray-700 text-sm rounded-md focus:outline-none hover:bg-gray-300"
      >
        {selectedOption}
        <FaChevronDown className="ml-2 text-sm" />
      </button>

      {isOpen && (
        <div className="absolute right-0 w-full sm:w-32 md:w-40 lg:w-44 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// New BottomText component
const BottomText: React.FC = () => {
  // Initialize state for dropdown
  const [selectedLanguage, setSelectedLanguage] = useState('Select Language');

  // Options for language dropdown
  const languages = ['English', 'Portuguese'];

  return (
    <div className="flex justify-center items-center">
      <Dropdown
        options={languages}
        selectedOption={selectedLanguage}
        onOptionSelect={setSelectedLanguage}
      />
    </div>
  );
};

export default BottomText;
